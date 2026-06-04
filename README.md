# MediCare

MediCare is a full-stack doctor appointment booking platform that connects patients with doctors for online discovery, appointment scheduling, payments, and real-time messaging. It includes authentication, doctor profiles, appointment management, profile media uploads, password recovery, and a dashboard experience for healthcare users.

## Project Overview

This project is built as a MERN-style application with a React frontend and an Express/MongoDB backend. Patients can browse doctors by specialization, view doctor profiles and ratings, book appointments, pay through Razorpay, and chat in real time. Doctors can manage appointments, practice locations, profile details, and availability-related workflows.

## Features

- User registration, login, logout, Google sign-in, and JWT authentication
- Forgot password and reset password flow
- Doctor search, specialization filtering, city search, ratings, and profile views
- Appointment booking, cancellation, status updates, and appointment history
- Razorpay order creation and payment verification
- Real-time messaging with Socket.IO
- Cloudinary image uploads for profile and background images
- Patient and doctor dashboard pages
- Protected API routes for authenticated users

## Tech Stack

**Frontend**

- React
- Vite
- React Router
- Axios
- Socket.IO Client
- Recharts
- ESLint

**Backend**

- Node.js
- Express
- MongoDB with Mongoose
- JSON Web Tokens
- bcryptjs
- Socket.IO
- Cloudinary
- Razorpay
- Nodemailer
- Helmet, CORS, and rate limiting

## Folder Structure

```text
Medicare/
  backend/      Express API, MongoDB models, routes, controllers, sockets
  frontend/     React/Vite user interface
  .gitignore    Project-wide ignore rules for env files and local artifacts
```

## Getting Started

### Prerequisites

- Node.js 16 or newer
- npm 8 or newer
- MongoDB connection string
- Razorpay account keys
- Cloudinary account credentials

### Backend Setup

```bash
cd backend
npm install
npm run dev
```

Create `backend/.env` with your local values:

```env
PORT=8000
NODE_ENV=development
FRONTEND_URL=http://localhost:5173
mongo_DB=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
CLOUDINARY_CLOUD_NAME=your_cloudinary_cloud_name
CLOUDINARY_API_KEY=your_cloudinary_api_key
CLOUDINARY_API_SECRET=your_cloudinary_api_secret
RAZORPAY_KEY_ID=your_razorpay_key_id
RAZORPAY_KEY_SECRET=your_razorpay_key_secret
MAX_FILE_SIZE=10mb
```

### Frontend Setup

```bash
cd frontend
npm install
npm run dev
```

Create `frontend/.env` with your local values:

```env
VITE_API_URL=http://localhost:8000
VITE_RAZORPAY_KEY_ID=your_razorpay_key_id
```

## Available Scripts

### Backend

```bash
npm start
npm run dev
npm test
npm run seed
npm run seed:doctors
```

### Frontend

```bash
npm run dev
npm run build
npm run lint
npm run preview
```

## API Highlights

- `GET /health` - Backend health check
- `POST /api/auth/register` - Register a user
- `POST /api/auth/login` - Login a user
- `GET /api/auth/me` - Get current authenticated user
- `GET /api/doctors` - List doctors
- `GET /api/doctors/search` - Search doctors
- `POST /api/appointments/doctors/:doctorId/book` - Book appointment
- `GET /api/appointments/patient/appointments` - Patient appointments
- `GET /api/appointments/doctor/appointments` - Doctor appointments
- `POST /api/payments/razorpay/order` - Create Razorpay order
- `POST /api/payments/razorpay/verify` - Verify Razorpay payment

## Security Notes

- Do not commit `.env` files or real credentials.
- Use strong JWT secrets in production.
- Keep MongoDB, Razorpay, Cloudinary, and email credentials private.
- Configure production CORS with the deployed frontend URL only.

## Short Description

MediCare is a healthcare appointment booking web app where patients can find doctors, book appointments, make payments, manage profiles, and chat in real time, while doctors can manage appointments and professional profile details.
