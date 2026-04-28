# 🔐 MERN Stack Authentication System

A complete full-stack Authentication & Authorization system built with the MERN stack. It includes secure login, signup, email verification via OTP, and password reset functionality.

## 🚀 Live Demo
- **Frontend URL:** https://mern-auth-three-beta.vercel.app/
- **Backend URL:** https://mern-auth-backend-90oc.onrender.com

## ✨ Key Features
- **Secure Authentication:** User signup and login with JWT stored in HTTP-only cookies.
- **Email Verification:** OTP sent to user's email for account verification using Nodemailer.
- **Password Management:** Forgot password and Reset password features.
- **Protected Routes:** User dashboard and profile access only for logged-in users.
- **State Management:** Using React Context API for global user state.
- **Responsive UI:** Clean and modern design using Tailwind CSS.

## 🛠️ Tech Stack
- **Frontend:** React.js, Tailwind CSS, Vite
- **Backend:** Node.js, Express.js
- **Database:** MongoDB Atlas
- **Authentication:** JWT, Cookie-parser, Bcrypt.js
- **Email Service:** Nodemailer (Gmail SMTP)

## 📂 Project Structure
```text
mern-auth/
├── client/        # React Frontend
└── server/        # Node.js Backend API
```

## ⚙️ How to Run Locally

1. **Clone the repository:**
   ```bash
   git clone [https://github.com/Dhruti05/mern-auth.git](https://github.com/Dhruti05/mern-auth.git)
   ```

2. **Setup Server:**
   - Go to `server` folder: `cd server`
   - Install dependencies: `npm install`
   - Create a `.env` file and add your MongoDB URI, JWT Secret, and SMTP credentials.
   - Run: `npm run dev`

3. **Setup Client:**
   - Go to `client` folder: `cd client`
   - Install dependencies: `npm install`
   - Create a `.env` file and add: `VITE_BACKEND_URL=http://localhost:4000`
   - Run: `npm run dev`

---
**Developed with ❤️ by Dhruti Haria**
```

---

