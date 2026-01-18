# 🧩 NestJS + Prisma + SQLite (CRUD) Simples

Projeto de estudo com **NestJS**, **Prisma (v7)** e **SQLite**, implementando um CRUD simples de usuários com validação via DTO (`class-validator`).

---

## 🚀 Tecnologias

- NestJS
- Prisma ORM (v7)
- SQLite
- TypeScript

---

## ⚙️ Configuração

### Clone o projeto
```bash
git clone https://github.com/seu-usuario/seu-repo.git
cd seu-repositorio

## Instale as dependências
```
npm install / npm i
```
## Variáveis de ambiente
Crie um arquivo .env na raiz do projeto:
```
DATABASE_URL="file:./dev.db"
```

# Prisma
```
npx prisma generate
npx prisma migrate dev
npx prisma studio
```

## Rodando a aplicação
```
npm run start:dev
```
