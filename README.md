# ⚡ Blade Billing - SaaS de Gestão de Faturas

## 🚀 Deploy Completo e Funcionando!

### 📍 URLs do Projeto

- **Frontend**: https://blade-billing-frontend.vercel.app
- **Backend API**: https://blade-billing-main.vercel.app
- **Health Check**: https://blade-billing-main.vercel.app/api/health

---

## ✅ O QUE FOI IMPLEMENTADO

### Backend (NestJS)
- ✅ Autenticação completa com JWT
- ✅ Hash de senhas com bcrypt
- ✅ CORS configurado corretamente
- ✅ Endpoints de login e registro funcionando
- ✅ Validação de dados com class-validator
- ✅ Prefixo global `/api`
- ✅ Health check endpoint

### Frontend (React + Vite)
- ✅ Integração com backend via API
- ✅ Formulários de login e registro
- ✅ Variáveis de ambiente configuradas
- ✅ Roteamento SPA configurado

---

## 🔐 CREDENCIAIS DE TESTE

```
Email: admin@bladebilling.com
Senha: admin123
```

---

## 📚 API ENDPOINTS

### Autenticação

#### Registrar Novo Usuário
```bash
curl -X POST https://blade-billing-main.vercel.app/api/auth/register \
  -H "Content-Type: application/json" \
  -d '{
    "email": "seu@email.com",
    "password": "senha123"
  }'
```

**Response:**
```json
{
  "message": "Usuário registrado com sucesso",
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...",
  "user": {
    "id": "1234567890",
    "email": "seu@email.com",
    "name": "seu"
  }
}
```

#### Login
```bash
curl -X POST https://blade-billing-main.vercel.app/api/auth/login \
  -H "Content-Type: application/json" \
  -d '{
    "email": "admin@bladebilling.com",
    "password": "admin123"
  }'
```

**Response:**
```json
{
  "message": "Login realizado com sucesso",
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...",
  "user": {
    "id": "1",
    "email": "admin@bladebilling.com",
    "name": "Administrador"
  }
}
```

---

## 🛠️ DESENVOLVIMENTO LOCAL

### Requisitos
- Node.js 18+
- npm ou yarn

### Backend

```bash
cd backend
npm install
npm run start:dev
```

Servidor roda em: `http://localhost:3000`

### Frontend

```bash
cd frontend  # ou o nome da pasta do frontend
npm install
npm run dev
```

App roda em: `http://localhost:5173`

---

## 🔧 ESTRUTURA DO PROJETO

```
Blade-Billing-main/
├── backend/
│   ├── src/
│   │   ├── auth/
│   │   │   ├── dtos/
│   │   │   │   └── sign-in.dto.ts
│   │   │   ├── strategies/
│   │   │   │   └── jwt.strategy.ts
│   │   │   ├── auth.controller.ts
│   │   │   ├── auth.module.ts
│   │   │   └── auth.service.ts
│   │   ├── app.controller.ts
│   │   ├── app.module.ts
│   │   └── main.ts
│   ├── package.json
│   ├── tsconfig.json
│   └── vercel.json
│
└── blade-billing-frontend/
    ├── src/
    │   ├── config/
    │   │   └── api.js
    │   ├── pages/
    │   │   ├── LoginPage.jsx
    │   │   └── RegisterPage.jsx
    │   └── App.jsx
    ├── .env.production
    ├── .env.development
    ├── package.json
    └── vercel.json
```

---

## 🔒 SEGURANÇA

### Variáveis de Ambiente (Vercel)

Configure no **Vercel Dashboard → Settings → Environment Variables**:

#### Backend:
```
JWT_SECRET=your-super-secret-key-here
NODE_ENV=production
```

#### Frontend:
```
VITE_API_URL=https://blade-billing-main.vercel.app
```

---

## 💡 PRÓXIMOS PASSOS

- [ ] Integrar com Supabase para banco de dados real
- [ ] Implementar recuperação de senha
- [ ] Adicionar refresh tokens
- [ ] Criar módulos de clientes e faturas
- [ ] Implementar dashboard com métricas
- [ ] Adicionar testes unitários

---

## 👤 AUTOR

**Igor Mendes** - [@igaogv](https://github.com/igaogv)

---

## 📝 LICENÇA

MIT License

---

**Status do Projeto**: ✅ **FUNCIONANDO E NO AR!**

Data da última atualização: 16 de dezembro de 2025
