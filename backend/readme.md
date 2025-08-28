# Pranacare Backend API

## Description
The Pranacare Backend is a RESTful API built with Express.js that powers the Pranacare healthcare platform. It provides authentication, appointment management, doctor management, and user management functionalities.

## Setup Instructions

### Prerequisites
- Node.js (version 14 or higher)
- npm (Node Package Manager)
- MongoDB database
- Cloudinary account (for image storage)
- Razorpay account (for payments)
- Stripe account (for payments)

### Installation
1. Navigate to the backend directory:
   ```bash
   cd backend
   ```
2. Install dependencies:
   ```bash
   npm install
   ```

### Environment Variables
Create a `.env` file in the backend directory with the following variables:
```
PORT=4000
MONGODB_URI=<your_mongodb_connection_string>
CLOUDINARY_CLOUD_NAME=<your_cloudinary_cloud_name>
CLOUDINARY_API_KEY=<your_cloudinary_api_key>
CLOUDINARY_API_SECRET=<your_cloudinary_api_secret>
JWT_SECRET=<your_jwt_secret_key>
RAZORPAY_KEY_ID=<your_razorpay_key_id>
RAZORPAY_KEY_SECRET=<your_razorpay_key_secret>
STRIPE_SECRET_KEY=<your_stripe_secret_key>
```

## Running the Application
To start the development server with auto-reload:
```bash
npm run server
```
To start the production server:
```bash
npm start
```

## Key Technologies
- **Express.js**: Web framework for Node.js
- **MongoDB**: NoSQL database with Mongoose ODM
- **JWT**: JSON Web Tokens for authentication
- **Cloudinary**: Cloud-based image and video management
- **Razorpay**: Payment gateway integration
- **Stripe**: Payment processing platform
- **bcryptjs**: Password hashing
- **Multer**: File upload handling
- **CORS**: Cross-Origin Resource Sharing

## API Endpoints

### User Routes (`/api/user`)
- `POST /register` - User registration
- `POST /login` - User login
- `GET /profile` - Get user profile
- `PUT /profile` - Update user profile
- `GET /appointments` - Get user appointments
- `POST /appointment` - Create new appointment

### Doctor Routes (`/api/doctor`)
- `POST /register` - Doctor registration
- `POST /login` - Doctor login
- `GET /profile` - Get doctor profile
- `PUT /profile` - Update doctor profile
- `GET /appointments` - Get doctor appointments
- `PUT /availability` - Update availability

### Admin Routes (`/api/admin`)
- `POST /login` - Admin login
- `GET /dashboard` - Admin dashboard stats
- `GET /doctors` - Get all doctors
- `POST /doctor` - Add new doctor
- `GET /appointments` - Get all appointments
- `GET /users` - Get all users

## Database Models
- **User**: Patient information and credentials
- **Doctor**: Doctor information, specialties, and availability
- **Appointment**: Booking details, status, and payment information

## Authentication
The API uses JWT (JSON Web Tokens) for authentication. Protected routes require a valid token in the Authorization header.

## File Upload
Image uploads are handled using Multer and stored in Cloudinary for efficient cloud storage.

## Payment Integration
- Razorpay for Indian payment processing
- Stripe for international payment processing

## Deployment
The backend can be deployed to:
- Heroku
- AWS Elastic Beanstalk
- DigitalOcean App Platform
- Railway

Ensure all environment variables are properly configured for production deployment.

## Security Features
- Password hashing with bcryptjs
- JWT token-based authentication
- CORS configuration
- Input validation
- File type validation for uploads
