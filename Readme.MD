# 🎬 Favorite Movies & TV Shows – Backend

This is the **backend** of the Favorite Movies & TV Shows Web Application, designed to handle authentication and CRUD operations for movie/show entries. Built with **Node.js**, **Express**, **MySQL**, **Prisma**, and **Zod** validation.

---

## 🗂️ Folder Structure

```bash
backend/
├── prisma/
│   ├── migrations/
│   └── schema.prisma
├── src/
│   ├── config/              # DB and JWT configurations
│   │   ├── db.js
│   │   └── jwt.js
│   ├── controllers/         # Request handlers
│   ├── middlewares/         # Auth, validation, and error middleware
│   ├── models/              # Prisma data models (if extended)
│   ├── routes/              # Route definitions
│   ├── services/            # Business logic layer
│   ├── utils/               # Utilities
│   └── validations/         # Zod validation schemas
│       └── auth.validation.js
│       └── entry.validation.js
├── app.js                   # Express app setup
├── server.js                # Entry point
├── .env                     # Environment config
├── package.json
└── README.md                # This file
```

---

## ⚙️ Tech Stack

* **Node.js** + **Express**
* **MySQL** with **Prisma ORM**
* **Zod** for validation
* **JWT** for authentication
* **dotenv** for environment variables
* **CORS** and security middleware

---

## 🚀 Setup Instructions

### 1. Clone the repository

```bash
git clone <your-backend-repo-url>
cd fav-movies-tv-shows-backend
```

### 2. Install dependencies

```bash
npm install
```

### 3. Set up your `.env` file

Create a `.env` file at the root of the project:

```env
PORT=8000
DATABASE_URL="mysql://username:password@localhost:3306/dbname"
JWT_SECRET="your_jwt_secret"
CLIENT_URL=http://localhost:5173
```

Update with your credentials.

### 4. Run Prisma migrations

```bash
npx prisma migrate dev --name init
npx prisma generate
```

### 5. Start the server

```bash
npm run dev
```

The server will run on `http://localhost:8000`

---

## 🔑 Authentication Endpoints

| Method | Route            | Description       |
| ------ | ---------------- | ----------------- |
| POST   | /api/auth/signup | Register new user |
| POST   | /api/auth/login  | Login user        |
| GET    | /api/auth/me     | Current user info |

---

## 📦 Entry Routes (Protected)

| Method | Route             | Description              |
| ------ | ----------------- | ------------------------ |
| GET    | /api/entries      | List entries (paginated) |
| POST   | /api/entries      | Add new entry            |
| PUT    | /api/entries/:id | Edit entry               |
| DELETE | /api/entries/:id | Delete entry             |

Use JWT stored in HTTP-only cookies.

---

## ✅ Features

* 👤 Authentication with JWT
* 🔐 HTTP-only cookie-based session
* 📄 Validation with Zod (via `auth.validation.js`, `entry.validation.js`)
* 📁 Scalable service/controller structure
* 🧱 MySQL & Prisma for DB layer
* ⚠️ Centralized error handling


---

## 🔐 CORS Setup

In `app.js`, CORS is configured to allow your frontend domain:

```js
app.use(cors({
  origin: process.env.CLIENT_URL,
  credentials: true
}));
```

Update `CLIENT_URL` in `.env` to match deployed frontend URL (e.g. Vercel).

---

## 📅 Frontend Repo

If you’re looking for the frontend:

> [Frontend Repo](https://github.com/darshan1928/Favorite-Movies-TV-Shows-Web-Application.git) 

---


Happy coding! ✨
