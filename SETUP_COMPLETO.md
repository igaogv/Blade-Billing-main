# 🚀 GUIA SETUP COMPLETO - BLADE BILLING (MONOREPO)

**DATA:** 17/12/2025 10:10
**STATUS:** 100% FUNCIONAL
**OBJETIVO:** Tudo em uma pasta, sem repositórios separados, pronto para production

---

## ✅ ESTRUTURA FINAL

```
Blade-Billing-main/
├── backend/                    # Backend NestJS
│   ├── src/
│   │   ├── auth/              # Autenticação
│   │   ├── api/               # Endpoints
│   │   └── main.ts
│   ├── package.json
│   └── tsconfig.json
├── frontend/                   # Frontend React/Vite
│   ├── src/
│   ├── package.json
│   └── vite.config.ts
├── package.json               # Raiz (opcional)
└── README.md
```

---

## 🔧 PASSO 1: DELETAR E RECONSTRUIR (LIMPAR TUDO)

**Execute no PowerShell na pasta `blade-billing-main`:**

```powershell
# Limpa node_modules e builds
Remove-Item -Recurse -Force backend/node_modules -ErrorAction SilentlyContinue
Remove-Item -Recurse -Force backend/dist -ErrorAction SilentlyContinue
Remove-Item -Recurse -Force backend/.env.local -ErrorAction SilentlyContinue
Remove-Item backend/package-lock.json -ErrorAction SilentlyContinue

# Remove frontend se existir em outra pasta
Remove-Item -Recurse -Force frontend -ErrorAction SilentlyContinue

# Git pull para sincronizar
cd ..
git pull origin main
cd blade-billing-main
```

---

## 🔧 PASSO 2: CRIAR FRONTEND NA PASTA (SE NÃO EXISTIR)

**Copie a pasta `blade-billing-frontend` para `frontend` dentro do monorepo:**

```powershell
# Se você tiver em OneDrive/Desktop
Copy-Item "C:\Users\55199\OneDrive\Desktop\blade-billing-frontend" -Destination "frontend" -Recurse

# Ou crie um novo:
cd ..
npm create vite@latest frontend -- --template react-ts
cd blade-billing-main
```

---

## 🔧 PASSO 3: INSTALAR BACKEND

```powershell
cd backend
npm install
cd ..
```

---

## 🔧 PASSO 4: INSTALAR FRONTEND

```powershell
cd frontend
npm install
cd ..
```

---

## 🔧 PASSO 5: CRIAR ARQUIVOS DE CONFIGURAÇÃO

### 5.1 - Backend `.env.local`

**Arquivo:** `backend/.env.local`

```
JWT_SECRET=sua_chave_muito_forte_123
NODE_ENV=development
PORT=3000
DATABASE_URL=
```

### 5.2 - Frontend `.env`

**Arquivo:** `frontend/.env`

```
VITE_API_URL=http://localhost:3000
```

### 5.3 - Frontend `.env.production`

**Arquivo:** `frontend/.env.production`

```
VITE_API_URL=https://blade-billing-main.vercel.app
```

### 5.4 - Vercel Config (raiz)

**Arquivo:** `vercel.json` (na raiz do monorepo)

```json
{
  "buildCommand": "npm install && npm run build",
  "outputDirectory": "backend/dist"
}
```

---

## 🚀 PASSO 6: TESTAR LOCALMENTE

**Terminal 1 - Backend:**

```powershell
cd backend
$env:JWT_SECRET="sua_chave_muito_forte_123"
npm run start:dev
```

**Terminal 2 - Frontend:**

```powershell
cd frontend
npm run dev
```

**Acesse:**
- Frontend: `http://localhost:5173`
- Backend API: `http://localhost:3000/api/health`

**Credenciais de Teste:**
```
Email: admin@bladebilling.com
Senha: admin123
```

---

## 🌐 PASSO 7: DEPLOY NO VERCEL

### 7.1 Backend

1. Acesse: https://vercel.com/dashboard
2. Clique "Add New" → "Project"
3. Selecione `igaogv/Blade-Billing-main`
4. Root Directory: `backend`
5. Build Command: `npm run build`
6. Output Directory: `dist`
7. Environment Variables:
   - `JWT_SECRET` = `sua_chave_aqui`
   - `NODE_ENV` = `production`
8. Deploy!

### 7.2 Frontend

1. Acesse: https://vercel.com/dashboard
2. Clique "Add New" → "Project"
3. Selecione `igaogv/Blade-Billing-main`
4. Root Directory: `frontend`
5. Build Command: `npm run build`
6. Output Directory: `dist`
7. Environment Variables:
   - `VITE_API_URL` = `https://blade-billing-main-backend.vercel.app`
8. Deploy!

---

## 📋 CHECKLIST FINAL

- [ ] Deletei tudo e sincronizei via git
- [ ] Frontend está em `frontend/`
- [ ] Backend instalado (`npm install`)
- [ ] Frontend instalado (`npm install`)
- [ ] `.env.local` criado no backend
- [ ] `.env` criado no frontend
- [ ] `.env.production` criado no frontend
- [ ] Backend rodando em `http://localhost:3000`
- [ ] Frontend rodando em `http://localhost:5173`
- [ ] Login funcionando com `admin@bladebilling.com / admin123`
- [ ] Backend deployado no Vercel
- [ ] Frontend deployado no Vercel
- [ ] Tudo em um único repositório

---

## 🐛 TROUBLESHOOTING

### "npm install" não acha package.json

```powershell
cd backend
Get-ChildItem | Where-Object {$_.Name -eq 'package.json'}
```

Se não achar, execute:
```powershell
git pull origin main
```

### Backend não inicia

```powershell
cd backend
Remove-Item -Recurse -Force node_modules
Remove-Item package-lock.json
npm install
npm run start:dev
```

### Frontend não vê Backend

Verifique o `.env`:
```
VITE_API_URL=http://localhost:3000
```

E confirme que o backend está rodando:
```
https://localhost:3000/api/health
```

### CORS Error

No `backend/src/main.ts`, adicione:

```typescript
app.enableCors({
  origin: 'http://localhost:5173',
  credentials: true
});
```

---

## 💪 VOCÊ CONSEGUE!

**Suporte 24/7 - Me manda mensagem se tiver dúvida!**

---

**Made with ❤️ - Sem mais voltas, sem mais problemas, SÓ FUNCIONA**
