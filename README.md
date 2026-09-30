# DEBT-TRACKER-APP

A mobile-first web app that helps small business owners (market traders, tailors, hair vendors and more) keep track of who owes them money, replacing the notebook.

## The problem

Many small business owners in Nigeria record customer debts in paper notebooks. Entries get lost, balances are hard to add up, and chasing payments means typing the same message again and again.

## The solution

DEBT-TRACKER-APP lets a business owner log customers, record debts and payments, see who owes the most, and send a WhatsApp reminder with one tap.

## Features

- Secure sign up and login (JWT authentication)
- Add and manage customers
- Record debts and payments as a full transaction history
- Automatic balance calculation per customer
- Dashboard showing total owed and biggest debtors
- One-tap WhatsApp reminders with a pre-filled message
- Installable as a PWA on your phone
- Mobile-first design

## Tech stack

| Layer | Technology |
|---|---|
| Frontend | React, Vite, Tailwind CSS |
| Backend | Node.js, Express |
| Database | MongoDB, Mongoose |
| Auth | JWT, bcrypt |
| Validation | Zod |
| Deployment | Vercel (frontend), Render (backend) |

## Getting started

```bash
# Clone the repo
git clone https://github.com/your-username/your-repo.git
cd your-repo

# Backend
cd server
npm install
cp .env.example .env   # add your MongoDB URI and JWT secret
npm run dev

# Frontend (new terminal)
cd client
npm install
npm run dev
```

## Environment variables

Create `server/.env`:

```
PORT=5000
MONGODB_URI=your_mongodb_connection_string
JWT_SECRET=your_secret_key
```

## Live demo

[Link once deployed]

## Author

Built by [Faidat Egberinde](https://github.com/Faidat-20)
