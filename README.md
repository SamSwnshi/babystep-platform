# samswnshi-babystep-platform 👶🚀

A full-stack platform to help parents track and celebrate their baby's milestones while sharing helpful parenting tips with the community. Built using React for the frontend and Node.js with Express for the backend.

---

## 🗂️ Table of Contents

- [Introduction](#introduction)
- [Features](#features)
- [Installation](#installation)
- [Usage](#usage)
- [Project Structure](#project-structure)
- [Configuration](#configuration)
- [API Endpoints](#api-endpoints)
- [Examples](#examples)
- [Troubleshooting](#troubleshooting)
- [Contributors](#contributors)
- [License](#license)

---

## 📌 Introduction

**samswnshi-babystep-platform** is a web application that enables users to:
- Register and log in
- Track baby's developmental milestones
- Contribute and view parenting tips from the community
- Manage entries through an interactive dashboard

It is designed with a React-based client interface and a RESTful API backend powered by Node.js and Express, with data persistence using a database configured via `db/config.js`.

---

## ✨ Features

- 👤 User Authentication (Register/Login)
- 📅 Milestone Tracking (Add/View)
- 💡 Community Tips (Add/View)
- 🔐 Protected Routes with JWT Middleware
- 📦 Modular Backend (MVC Architecture)
- 🌐 Vite for Fast Frontend Development
- ☁️ Vercel Configuration for Easy Deployment

---

## 🛠️ Installation

### Prerequisites
- Node.js (v16+ recommended)
- npm

### Clone the Repository
```bash
git clone https://github.com/your-username/samswnshi-babystep-platform.git
cd samswnshi-babystep-platform
```

### Install Client Dependencies
```bash
cd client
npm install
```

### Install Server Dependencies
```bash
cd ../server
npm install
```

---

## ▶️ Usage

### Start Development Server

**Backend:**
```bash
cd server
npm start
```

**Frontend:**
```bash
cd client
npm run dev
```

---

## 📁 Project Structure

```
samswnshi-babystep-platform/
├── client/                  # React frontend
│   └── src/
│       ├── components/      # Reusable UI components
│       ├── context/         # Authentication context
│       ├── pages/           # Main pages (Login, Dashboard, etc.)
│       └── utils/           # API helper
├── server/                  # Node.js backend
│   ├── controllers/         # Request handlers
│   ├── db/                  # Database config
│   ├── middleware/          # JWT middleware
│   ├── models/              # Mongoose/DB models
│   └── routes/              # API routes
```

---

## ⚙️ Configuration

### Environment Variables

Create a `.env` file in the `client/` and `server/` directories as needed.

Example variables:

**Client:**
```env
VITE_API_URL=http://localhost:8080/api
```

**Server:**
```env
PORT=8080
DB_URI=mongodb://localhost:27017/babystepdb
JWT_SECRET=your_secret_key
```

---

## 📡 API Endpoints

### User Routes
- `POST /api/users/register` – Register a new user
- `POST /api/users/login` – Authenticate user

### Milestone Routes
- `GET /api/milestones` – List user milestones
- `POST /api/milestones` – Add new milestone

### Tip Routes
- `GET /api/tips` – Get community tips
- `POST /api/tips` – Submit a tip

---

## 🧪 Examples

```js
// Example: Fetch milestones
fetch('/api/milestones', {
  headers: { Authorization: `Bearer ${token}` }
})
.then(res => res.json())
.then(data => console.log(data));
```

---

## 🛠️ Troubleshooting

- **Frontend shows blank page**: Check Vite config and ensure `VITE_API_URL` is correctly set in `.env`.
- **API requests fail**: Make sure the backend server is running and API base URL matches in the client.
- **Database errors**: Confirm your MongoDB URI is valid and MongoDB is running.

---

## 👥 Contributors

- **Sam Swanshi** – Initial design and development  


---

## 📄 License

This project is licensed under the [MIT License](LICENSE).

---
