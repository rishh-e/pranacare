# Pranacare - Healthcare Platform

Pranacare is a comprehensive healthcare platform that connects patients with doctors, facilitates appointment booking, and provides administrative tools for managing healthcare services.

## Project Structure

The project consists of three main components:

1. **Frontend** - User-facing web application for patients
2. **Backend** - RESTful API server
3. **Admin Panel** - Administrative interface for managing the platform

## Quick Start

### Prerequisites
- Node.js (version 14 or higher)
- npm (Node Package Manager)
- MongoDB database
- Cloudinary account (for image storage)
- Payment gateway accounts (Razorpay/Stripe)

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/rishh-e/pranacare
   cd pranacare-full-stack
   ```

2. **Setup Backend**
   ```bash
   cd backend
   npm install
   # Configure .env file with required variables
   npm run server
   ```

3. **Setup Frontend**
   ```bash
   cd frontend
   npm install
   # Configure .env file with backend URL
   npm run dev
   ```

4. **Setup Admin Panel**
   ```bash
   cd admin
   npm install
   # Configure .env file with backend URL
   npm run dev
   ```

## Component Details

### Frontend (`/frontend`)
The patient-facing web application where users can:
- Browse doctors by specialty
- Book appointments
- Manage their profile and appointments
- Access health resources

**Technologies**: React, Vite, Tailwind CSS, Axios, React Router

[View Frontend README](./frontend/README.md)

### Backend (`/backend`)
The RESTful API server that powers the entire platform:
- User authentication and authorization
- Appointment management
- Doctor management
- Payment processing
- File upload handling

**Technologies**: Express.js, MongoDB, JWT, Cloudinary, Razorpay, Stripe

[View Backend README](./backend/README.md)

### Admin Panel (`/admin`)
The administrative interface for platform management:
- Dashboard with platform statistics
- Doctor management and approval
- Appointment oversight
- User management

**Technologies**: React, Vite, Tailwind CSS, React Router

[View Admin Panel README](./admin/README.md)

## Environment Variables

Each component requires specific environment variables. Refer to the individual README files for detailed configuration:

- [Backend Environment Variables](./backend/README.md#environment-variables)
- [Frontend Environment Variables](./frontend/README.md#environment-variables)
- [Admin Panel Environment Variables](./admin/README.md#environment-variables)

## API Documentation

The backend provides RESTful APIs organized into three main categories:

- **User API** (`/api/user`) - Patient functionalities
- **Doctor API** (`/api/doctor`) - Doctor functionalities
- **Admin API** (`/api/admin`) - Administrative functionalities

Detailed API documentation is available in the [Backend README](./backend/README.md#api-endpoints).

## Features

### For Patients
- User registration and authentication
- Doctor search and filtering by specialty
- Appointment booking with multiple payment options
- Appointment history and management
- Profile management

### For Doctors
- Doctor registration and profile management
- Availability management
- Appointment management
- Patient interaction tools

### For Administrators
- Platform dashboard with analytics
- User and doctor management
- Appointment oversight
- System configuration

## Deployment

Each component can be deployed independently:

- **Frontend**: Deploy to Vercel, Netlify, or similar platforms
- **Backend**: Deploy to Heroku, AWS, DigitalOcean, or similar platforms
- **Admin Panel**: Deploy to Vercel, Netlify, or similar platforms

Ensure all environment variables are properly configured for production deployment.
