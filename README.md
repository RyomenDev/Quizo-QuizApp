# 🚀 <u>Quizo: Online Quiz Platform</u>
## Overview

The **Online Quiz Platform** is a full-stack web application designed for quiz creation, taking, and scoring. The platform provides a seamless user experience with **authentication, real-time timers, result analysis, and a practice mode**. Built using **React.js, Node.js, Express, and MongoDB**, the application ensures high performance, security, and scalability.

![Image](https://github.com/user-attachments/assets/cb1bebb5-3a9c-4d5e-bcd0-71d3cb1a30bf)

# Features

### **Functionality**

- **User Authentication**: Registration, login, and password reset functionality using JWT authentication.
- **Quiz Management**:
  - Create quizzes with multiple-choice questions.
  - Add a timer to each question.
  - Provide correct answers and explanations after the quiz.
- **Practice Mode**: A dedicated practice page where users can attempt quizzes with real exam-like conditions.
- **Scoring & Analysis**:
  - Show correct and incorrect answers after quiz completion.
  - Display final scores and performance insights.
- **State Management**: Uses **Redux** for global state management to ensure smooth user interactions.

### Authorization & Authentication

- **User Registration (registerUser):** Registers users with email & password.
- **Login with Email (loginUserWithEmail):** Allows users to log in using email & password.
- **Password Reset (resetPassword):** Allows users to reset their password.
- **Hashed password** before saving using **bcryptjs**
- Ensured **strong validation** for security

- optimized **JWT authentication middleware** for your application:

**How It Works**

- Checks if the Authorization header exists and follows `Bearer <token>` format
- Extracts the JWT token from the header
- Verifies the token.
- Attaches the decoded user data to req.user for further use
- Handles errors gracefully with appropriate status codes

#### ✨ Features:

- ✅ JWT verification for protected routes
- ✅ Proper error handling
- ✅ Modular structure
- ✅ Timer for each question (30 seconds per question).
- ✅ Multiple-choice selection with answer tracking.
- ✅ Final score calculation with correct and wrong answers displayed.
- ✅ Navigation between questions (Next/Submit button).
- ✅ Displays number of questions and time per question.

### **UI/UX Design**

- **Modern and Intuitive Interface**: A clean, user-friendly interface designed with **Tailwind CSS**.
- **Interactive Feedback**: Real-time feedback on user selections and results.
- **Glassmorphism & Wooden Themes**: Stylish UI elements with background blur effects and custom textures.
- **Better Shimmer Effect:** smooth skeleton while loading for visually appealing! .

#### ✨ Features:

- ✅ Background Image Slider
- ✅ Dynamic Sliding Questions
- ✅ Smooth Animations with Framer Motion
- ✅ Beautiful Gradient & Glassmorphism UI
- ✅ Responsive Design for All Devices

### **Responsiveness**

- **Mobile & Desktop Compatible**: Fully responsive design using **Tailwind CSS**.
- **Adaptive Layouts**: Supports different screen sizes and resolutions.
- **Optimized Performance**: Lazy loading and efficient rendering techniques to enhance user experience.

### **Security Measures**

- **JWT Authentication**: Secure authentication with access tokens.
- **Input Validation**:

  - **Client-side Validation**: Ensures correct data entry before sending requests.
  - **Server-side Validation**: Prevents malicious input from being processed.
  - **Schema-level Validation**: Enforces strict data integrity within the database.

- **Error Handling**:
  - Proper error messages and HTTP status codes.
  - Prevents API misuse and unauthorized access.
  <!-- - **Rate Limiting & Encryption**:
  - Rate limiting to protect against brute-force attacks.
  - Encrypted passwords stored securely in the database. -->

#### ✨ Features:

- ✅ Ensure proper validation before database Call.
- ✅ Standardized lowercase email storage
- ✅ Returned useful user details (excluding password)
- ✅ Better error handling & debugging logs
- ✅ Ensured password is not returned when fetching user details

### ✨ Added Security Features (server):

- ✅ helmet: Adds essential security headers automatically..
- ✅ hsts (Strict Transport Security): Ensures HTTPS-only connections.
- ✅ x-powered-by disabled: Hides Express framework info.
- ✅ x-content-type-options: Prevents MIME-sniffing attacks.
- ✅ x-xss-protection: Enables browser-based XSS protection.
- ✅ referrer-policy: Restricts referrer data sharing, to limit referrer leakage.

### **Code Quality**

- **Modular Architecture**: Clean and maintainable codebase following best practices.
- **Reusable Components**: Well-structured React components with PropTypes validation.
- **Optimized API Calls**: Efficient backend handling to minimize load times.
- **Logging & Debugging**: Console logs for debugging, structured error messages.

#### ✨ Features:

- ✅ prop-types validation in every component
- ✅ Ensures correct data types and structure
- ✅ Prevents potential runtime errors
- ✅ Improves maintainability and debugging

### **Tech Stack**

- **Frontend**: React.js, Redux (State Management), Tailwind CSS
- **Backend**: Node.js, Express.js, JSON Web Tokens
- **Database**: MongoDB
- **Authentication**: JWT (JSON Web Tokens), Bcrypt for Password Hashing

## Installation & Setup

### **Prerequisites**

- Node.js installed
- MongoDB instance running

### **Steps to Run Locally**

1. **Clone the Repository**:
   ```bash
   git clone https://github.com/RyomenDev/Quizo-QuizApp.git
   cd Quizo-QuizApp
   ```
2. **Install Dependencies**:
   ```bash
   cd server
   npm install  # Install backend dependencies
   cd client
   npm install  # Install frontend dependencies
   ```
3. **Configure Environment Variables**:
   Create a `.env` file in the root and add (use .env.sample):
   ```env
   MONGO_URI=your-mongodb-uri
   JWT_SECRET=your-secret-key
   PORT=""
   ```
4. **Run the Application**:
   ```bash
   cd server
   npm run dev   # Start backend
   cd client
   npm run dev     # Start frontend
   ```

## Deployment

- **Frontend**: Deployed on Vercel
- **Backend**: Deployed on Vercel
- **Database**: Hosted on MongoDB Atlas

## License

MIT License
