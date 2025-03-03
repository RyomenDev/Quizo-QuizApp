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
