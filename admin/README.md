# Pranacare Admin Panel

## Description
The Pranacare Admin Panel is a web application designed for managing healthcare services. It provides functionalities for doctors and administrators to manage appointments, view dashboards, and handle user profiles.

## Setup Instructions

### Prerequisites
- Node.js (version 14 or higher)
- npm (Node Package Manager)

### Installation
1. Clone the repository:
   ```bash
   git clone https://github.com/rishh-e/pranacare
   cd admin
   ```
2. Install dependencies:
   ```bash
   npm install
   ```

### Environment Variables
Create a `.env` file in the root directory and add the following variables:
```
REACT_APP_BACKEND_URL=<your_backend_url>
REACT_APP_CURRENCY=<your_currency>
```

## Running the Application
To start the development server, run:
```bash
npm run dev
```
To build the application for production, run:
```bash
npm run build
```

## Key Technologies
- **React**: A JavaScript library for building user interfaces.
- **Vite**: A build tool that provides a fast development environment.
- **Tailwind CSS**: A utility-first CSS framework for styling.
- **Axios**: A promise-based HTTP client for making requests.
- **React Router**: A library for routing in React applications.
- **React Toastify**: A library for displaying notifications.

## Project Structure
```
admin/
├── .env.example
├── .eslintrc.cjs
├── .gitignore
├── index.html
├── package.json
├── src/
│   ├── components/
│   ├── context/
│   ├── pages/
│   ├── App.jsx
│   └── main.jsx
└── README.md
```
