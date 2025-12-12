import { Injectable } from '@nestjs/common';
import { SignInDto } from './dtos/sign-in.dto';

@Injectable()
export class AuthService {
  async register(signInDto: SignInDto) {
    // TODO: Implement registration logic
    // 1. Validate email doesn't exist
    // 2. Hash password
    // 3. Save user to database
    // 4. Return JWT token
    return {
      message: 'User registered successfully',
      email: signInDto.email,
    };
  }

  async login(signInDto: SignInDto) {
    // TODO: Implement login logic
    // 1. Find user by email
    // 2. Verify password
    // 3. Generate JWT token
    // 4. Return token
    return {
      message: 'Login successful',
      email: signInDto.email,
      token: 'jwt_token_placeholder',
    };
  }
}
