# 🧪 Teste Técnico – Estagiário Back-End (Node.js + TypeScript)

## 🎯 Objetivo
Avaliar o conhecimento prático do candidato em **Node.js**, **TypeScript**, **estrutura de projeto**, **integração com banco de dados** e **boas práticas** no desenvolvimento de **APIs REST**.

---

## ⚙️ Desafio
Criar uma **API REST** simples para gerenciar **usuários** e **tarefas**.

---

## 📚 Requisitos Técnicos Obrigatórios
- ✅ Usar **Node.js** com **TypeScript**
- ✅ Usar um **ORM** (ex: [Prisma](https://www.prisma.io/))
- ✅ Banco de dados: **PostgreSQL**
- ✅ Estrutura de projeto organizada (**controllers**, **useCases**, **routes**, etc.)

---

## 🧩 Funcionalidades Obrigatórias

### 👤 Usuários
| Método | Rota | Descrição |
|--------|-------|------------|
| **POST** | `/users` | Criar um novo usuário |
| **GET** | `/users` | Listar todos os usuários |
| **GET** | `/users/:id` | Buscar um usuário específico |
| **PUT** | `/users/:id` | Atualizar um usuário |
| **DELETE** | `/users/:id` | Deletar um usuário |

---

### ✅ Tarefas
| Método | Rota | Descrição |
|--------|-------|------------|
| **POST** | `/tasks` | Criar uma tarefa vinculada a um usuário |
| **GET** | `/tasks` | Listar todas as tarefas (com nome do usuário associado) |
| **GET** | `/tasks/:id` | Buscar uma tarefa específica |
| **PUT** | `/tasks/:id` | Atualizar uma tarefa |
| **DELETE** | `/tasks/:id` | Deletar uma tarefa |

---

## 💾 Estrutura Sugerida do Banco de Dados

### Tabela **users**
| Campo | Tipo | Descrição |
|--------|------|-----------|
| `id` | UUID ou número | Identificador único |
| `name` | string | Nome do usuário |
| `email` | string | E-mail único |
| `createdAt` | datetime | Data de criação |

### Tabela **tasks**
| Campo | Tipo | Descrição |
|--------|------|-----------|
| `id` | UUID ou número | Identificador único |
| `title` | string | Título da tarefa |
| `description` | string | Descrição da tarefa |
| `status` | enum ('pending' \| 'done') | Status da tarefa |
| `userId` | chave estrangeira | ID do usuário responsável |
| `createdAt` | datetime | Data de criação |

---

## 🧠 Requisitos Extras (Bônus)
- 🧾 Usar **validação de dados** (ex: [Zod](https://zod.dev/))
- 📄 Criar um **README.md** explicando como rodar o projeto
  ``
  bash
  ``
- ☁️ Fazer **deploy opcional** (Render, Vercel ou Railway)

---

## 🧾 Entrega
O candidato deve enviar:

1. 🔗 **Link do repositório público** no GitHub
2. 🧭 **Instruções no README** explicando como rodar o projeto
3. ☁️ (**Opcional**) Link do projeto hospedado

---

## 🧮 Critérios de Avaliação

| Critério | Peso |
|-----------|------|
| Organização e estrutura do código | ⭐⭐⭐⭐ |
| Funcionalidade e cumprimento dos requisitos | ⭐⭐⭐⭐ |
| Uso correto de TypeScript e tipagens | ⭐⭐⭐ |
| Clareza e padrão nas rotas REST | ⭐⭐⭐ |
| Tratamento de erros e validação | ⭐⭐ |
| Documentação (README e clareza de setup) | ⭐⭐ |
| Boas práticas (commits, nome de variáveis, etc.) | ⭐⭐ |

---

### 🚀 Dica
Mantenha o código limpo, organizado e com boas práticas de desenvolvimento.
Use commits descritivos e documente bem as etapas para facilitar a avaliação.

---

**Boa sorte! 💪**
