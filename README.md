# 🚀 Easy Site Project (Backend)

Easy Site Project is a backend REST API built using **Node.js, Express, and MongoDB**, implementing **JWT authentication**, **role-based authorization**, and **ownership-based product management**.

---

## 📌 Features

- JWT-based Authentication
- Role-based Access Control (ADMIN / USER)
- Product Ownership Security
- Secure Password Hashing (bcrypt)
- Swagger API Documentation
- MVC Architecture
- MongoDB Integration
- Render Deployment Ready

---

## 🛠 Tech Stack

Node.js, Express.js, MongoDB, Mongoose, JWT, bcrypt, Swagger UI, Nodemon, Render

---

## 📂 Project Folder Structure

backend/
├── src/
│ ├── config/
│ │ └── db.js
│ │
│ ├── controllers/
│ │ ├── auth.controller.js
│ │ └── product.controller.js
│ │
│ ├── middlewares/
│ │ ├── auth.middleware.js
│ │ └── role.middleware.js
│ │
│ ├── models/
│ │ ├── user.model.js
│ │ └── product.model.js
│ │
│ ├── routes/
│ │ ├── auth.routes.js
│ │ └── product.routes.js
│ │
│ └── server.js
│
├── .env
├── .gitignore
├── package.json
└── README.md


---

## 🔐 Authentication & Authorization Flow

- User registers via `/api/auth/register`
- Password is hashed using bcrypt
- User logs in via `/api/auth/login`
- JWT token is generated and returned
- Token is sent in `Authorization` header
- Auth middleware verifies token
- User data is attached to `req.user`
- Role middleware checks ADMIN access
- Ownership check ensures only creator can modify product

---

## 📦 Product Rules

- Only ADMIN can create products
- Only creator ADMIN can update/delete products
- Each ADMIN sees only their own products

---

## 📑 Swagger API Documentation


---

## 🔗 API Endpoints

### Auth APIs

| Method | Endpoint | Description |
|------|---------|------------|
| POST | /api/auth/register | Register user |
| POST | /api/auth/login | Login and get JWT |

### Product APIs (ADMIN only)

| Method | Endpoint | Description |
|------|---------|------------|
| POST | /api/products | Create product |
| GET | /api/products | Get own products |
| PUT | /api/products/:id | Update own product |
| DELETE | /api/products/:id | Delete own product |

---

## 🔐 Authorization Header Format

Authorization: Bearer <JWT_TOKEN>

---

## ⚙ Environment Variables
PORT=3000
MONGO_URI=mongodb+srv://jtn001thakur:Jtn$0101@cluster0.d1umh.mongodb.net/easy_site
JWT_SECRET=supersecret

---

## ▶️ Run Project Locally

npm install
npm run dev
