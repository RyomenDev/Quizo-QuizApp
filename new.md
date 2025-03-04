User Registration (registerUser): Registers users with email & password.
Login with Email (loginUserWithEmail): Allows users to log in using email & password.
Google OAuth Login (loginUser): Logs in users via Google OAuth (as per your existing implementation).
Password Reset (resetPassword): Allows users to reset their password.

Added password field (Required & hidden by default)
Hashed password before saving using bcryptjs
Ensured strong validation for security

optimized JWT authentication middleware for your application. This will handle:

✅ JWT verification for protected routes
✅ Proper error handling
✅ Modular structure

How It Works
Checks if the Authorization header exists and follows "Bearer <token>" format
Extracts the JWT token from the header
Verifies the token using jwt.verify()
Attaches the decoded user data to req.user for further use
Handles errors gracefully with appropriate status codes

🔹 Key Improvements
✅ Email validation before checking the database
✅ Standardized lowercase email storage
✅ Default userType set to "student" if not provided
✅ Returned useful user details (excluding password)
✅ Better error handling & debugging logs


✅ Fixed JWT_SECRET reference in loginUserWithEmail (was using process.env.JWT_SECRET instead of conf.JWT_SECRET)
✅ Normalized email to lowercase in loginUserWithEmail and resetPassword
✅ Better error messages for invalid email or password
✅ Removed unnecessary console.log() for production-ready code
✅ Ensured password is not returned when fetching user details


You can validate the password before saving it by ensuring it meets the following criteria:

✅ Minimum length of 6 characters
✅ Contains at least one uppercase letter
✅ Contains at least one lowercase letter
✅ Contains at least one digit
✅ Contains at least one special character


✨ Features:
✅ Background Image Slider
✅ Dynamic Sliding Questions
✅ Smooth Animations with Framer Motion
✅ Beautiful Gradient & Glassmorphism UI
✅ Responsive Design for All Devices

Features Added:
✅ Timer for each question (30 seconds per question).
✅ Multiple-choice selection with answer tracking.
✅ Final score calculation with correct and wrong answers displayed.
✅ Navigation between questions (Next/Submit button).

New Features Added:
✅ Start Page with quiz instructions before beginning.
✅ Displays number of questions and time per question.
✅ "Start Quiz" button to begin.
✅ Quiz begins only after clicking "Start Quiz".