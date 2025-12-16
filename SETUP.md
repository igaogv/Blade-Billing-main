# ⚡ Blade Billing - Guia Completo de Setup

## 🚀 Iniciando o Projeto

### Pré-requisitos

- Node.js 16+ instalado
- npm ou yarn
- Git

### Estrutura do Projeto

```
blade-billing-main/
├── backend/     ← API NestJS (porta 3000)
└── frontend/    ← React Vite (porta 3001)
```

---

## 🕀 PASSO 1: BACKEND (Terminal 1)

### Instalar e executar o backend

```powershell
# Navegue até a pasta backend
cd backend

# Instale as dependências
npm install

# Inicie o servidor
npm run start

# Ou para modo desenvolvimento com auto-reload
npm run start:dev
```

**Resultado esperado:**
```
⚡ Application is running on: http://localhost:3000
⚡ CORS habilitado para: http://localhost:3001
```

✅ Backend rodando na **porta 3000**

---

## 🚀 PASSO 2: FRONTEND (Terminal 2 - NOVO)

### Instalar e executar o frontend

```powershell
# Abra um NOVO terminal
# Navegue até a pasta frontend
cd frontend

# Instale as dependências
npm install

# Inicie o servidor de desenvolvimento
npm run dev
```

**Resultado esperado:**
```
⚡ Local:   http://localhost:3001/
⚡ Network: use --host to expose
```

✅ Frontend rodando na **porta 3001**

---

## 🌐 Acessar a Aplicação

**Abra no navegador:**
```
http://localhost:3001
```

Você deverá ver a **tela de login** do Blade Billing

---

## 🔠 Testar Login

### Opção 1: Cadastrar nova conta

1. Clique em "Cadastre-se aqui"
2. Preencha os dados
3. Clique em "Cadastrar"

### Opção 2: Usar conta de teste

Você pode usar dados fictícios:
```
Email: teste@example.com
Senha: 123456
```

**Nota:** O backend está em desenvolvimento, então aceitará qualquer email/senha.

---

## 📂 Estrutura de Pastas

### Backend (NestJS)

```
backend/
├── src/
│   ├── auth/
│   │   ├── auth.controller.ts
│   │   ├── auth.service.ts
│   │   ├── auth.module.ts
│   │   └── dtos/
│   ├── app.module.ts
│   └── main.ts          ← CORS habilitado aqui!
├── package.json
└── README.md
```

### Frontend (React + Vite)

```
frontend/
├── src/
│   ├── pages/
│   │   ├── LoginPage.jsx
│   │   ├── RegisterPage.jsx
│   │   └── Dashboard.jsx
│   ├── components/
│   │   ├── InvoiceManager.jsx
│   │   ├── ClientManager.jsx
│   │   ├── ReportManager.jsx
│   │   └── SettingsManager.jsx
│   ├── App.jsx
│   └── main.jsx
├── package.json
├── vite.config.js
└── README.md
```

---

## 🔗 Endpoints da API

### Registro

```bash
curl -X POST http://localhost:3000/api/auth/register \
  -H "Content-Type: application/json" \
  -d '{"email":"teste@example.com","password":"123456"}'
```

**Resposta:**
```json
{
  "message": "User registered successfully",
  "email": "teste@example.com"
}
```

### Login

```bash
curl -X POST http://localhost:3000/api/auth/login \
  -H "Content-Type: application/json" \
  -d '{"email":"teste@example.com","password":"123456"}'
```

**Resposta:**
```json
{
  "message": "Login successful",
  "email": "teste@example.com",
  "token": "jwt_token_placeholder"
}
```

---

## 🛠️ Troubleshooting

### Problema 1: "Erro ao conectar com o servidor"

**Causa:** Backend não está rodando

**Solução:**
1. Verifique se o terminal do backend ainda está aberto
2. Execute:
   ```powershell
   cd backend
   npm run start:dev
   ```

### Problema 2: "Porta 3000 já em uso"

**Causa:** Outro processo usando a porta

**Solução:**
```powershell
# Matar processo na porta 3000 (Windows)
netstat -ano | findstr :3000
kill -PID <PID>

# Ou mudar a porta no backend
```

### Problema 3: "Porta 3001 já em uso"

**Causa:** Outro processo usando a porta

**Solução:**
Edit `vite.config.js`:
```javascript
server: {
  port: 3002,  // Altere aqui
}
```

### Problema 4: Autocomplete warnings no console

**Causa:** Faltam atributos nos inputs

**Solução:** Já foi adicionado na última versão!

### Problema 5: CORS error

**Causa:** Backend não tem CORS habilitado

**Solução:** Já foi adicionado em `backend/src/main.ts`

---

## 📄 Scripts Disponíveis

### Backend

```bash
# Desenvolvimento com auto-reload
npm run start:dev

# Produção
npm run build
npm run start:prod

# Build sem rodar
npm run build
```

### Frontend

```bash
# Desenvolvimento
npm run dev

# Build para produção
npm run build

# Preview da build
npm run preview
```

---

## 🔍 Verificar se Está Funcionando

### Backend

```bash
# Verifique se responde
curl http://localhost:3000/api/auth/login

# Deve retornar um erro de método GET (esperado)
```

### Frontend

```bash
# Verifique se carrega
curl http://localhost:3001

# Deve retornar o HTML da aplicação
```

---

## 🚀 Deploy

### Build do Frontend

```bash
cd frontend
npm run build
# Gera pasta 'dist/'
```

Upload de `dist/` para Vercel, Netlify, etc.

### Deploy do Backend

Deploy para Heroku, Railway, Render, etc.

---

## 🗐️ Dicas

1. **Use 2 terminais:** Um para backend, outro para frontend
2. **F5 para recarregar:** Se mudar código do frontend, recarregue
3. **DevTools:** Use F12 para debugar no navegador
4. **Console:** Veja erros no console do navegador (F12 > Console)
5. **Network:** Monitore requisições HTTP em F12 > Network

---

## 👨‍💻 Support

Se tiver dúvidas:
1. Verifique o console (F12)
2. Verifique os terminais (backend/frontend)
3. Tente reiniciar ambos os servidores
4. Limpe cache (Ctrl+Shift+Del)

---

**Tudo certo? Comece a desenvolver! 🚀🚀🚀**