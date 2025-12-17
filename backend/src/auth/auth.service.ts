import { Injectable, BadRequestException, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { SignInDto } from './dtos/sign-in.dto';
import * as bcrypt from 'bcrypt';

// Importar Supabase quando em produção
let supabaseUsers = [
  {
    id: '1',
    email: 'admin@bladebilling.com',
    password: '$2b$10$rKvVJvMZO6PH5zLfY4qXEuYlXZGXXZKZK.HZKZKZKZKZKZKZKZa', // admin123
    name: 'Administrador',
  },
];

@Injectable()
export class AuthService {
  constructor(private jwtService: JwtService) {}

  async register(signInDto: SignInDto) {
    const { email, password } = signInDto;

    // Verificar se usuário já existe
    const userExists = supabaseUsers.find((u) => u.email === email);
    if (userExists) {
      throw new BadRequestException('Email já cadastrado');
    }

    // Hash da senha
    const saltRounds = 10;
    const hashedPassword = await bcrypt.hash(password, saltRounds);

    // Criar novo usuário
    const newUser = {
      id: Date.now().toString(),
      email,
      password: hashedPassword,
      name: email.split('@')[0],
    };

    supabaseUsers.push(newUser);

    // Gerar JWT token
    const token = this.jwtService.sign({
      sub: newUser.id,
      email: newUser.email,
      name: newUser.name,
    });

    return {
      message: 'Usuário registrado com sucesso',
      token,
      user: {
        id: newUser.id,
        email: newUser.email,
        name: newUser.name,
      },
    };
  }

  async login(signInDto: SignInDto) {
    const { email, password } = signInDto;

    // Encontrar usuário
    const user = supabaseUsers.find((u) => u.email === email);

    if (!user) {
      throw new UnauthorizedException('Email ou senha inválidos');
    }

    // Verificar senha
    const isPasswordValid = await bcrypt.compare(password, user.password);

    if (!isPasswordValid) {
      throw new UnauthorizedException('Email ou senha inválidos');
    }

    // Gerar JWT token
    const token = this.jwtService.sign({
      sub: user.id,
      email: user.email,
      name: user.name,
    });

    return {
      message: 'Login realizado com sucesso',
      token,
      user: {
        id: user.id,
        email: user.email,
        name: user.name,
      },
    };
  }

  async validateUser(userId: string) {
    const user = supabaseUsers.find((u) => u.id === userId);
    if (!user) {
      return null;
    }
    const { password, ...result } = user;
    return result;
  }
}
