# automobiles-marketplace

## Overview
The Automobiles Marketplace is an AI-powered car parts marketplace that connects buyers and sellers of automotive parts. The platform features a responsive frontend built with React and a robust backend powered by Node.js and Express. 

## Features
- **Product Catalog**: Browse and search for various car parts.
- **Order Processing**: Seamless order placement and management.
- **AI Chat**: Interactive chat feature powered by AI for customer support.
- **Admin Dashboard**: Manage products, orders, and users from a dedicated admin interface.

## Tech Stack
- **Frontend**: React, TypeScript, CSS
- **Backend**: Node.js, Express, TypeScript, MongoDB
- **AI Integration**: OpenAI API for chat functionalities
- **Payment Processing**: Integration with Stripe/PayPal

## Folder Structure
```
automobiles-marketplace
├── backend
│   ├── src
│   │   ├── controllers
│   │   ├── models
│   │   ├── routes
│   │   ├── middleware
│   │   ├── services
│   │   ├── utils
│   │   ├── app.ts
│   │   └── server.ts
│   ├── package.json
│   ├── tsconfig.json
│   └── README.md
├── frontend
│   ├── public
│   ├── src
│   │   ├── components
│   │   ├── pages
│   │   ├── hooks
│   │   ├── utils
│   │   ├── App.tsx
│   │   ├── index.tsx
│   │   └── styles
│   ├── package.json
│   ├── tsconfig.json
│   └── README.md
└── README.md
```

## Getting Started

### Prerequisites
- Node.js
- MongoDB
- TypeScript

### Installation
1. Clone the repository:
   ```
   git clone <repository-url>
   ```
2. Navigate to the backend directory and install dependencies:
   ```
   cd backend
   npm install
   ```
3. Navigate to the frontend directory and install dependencies:
   ```
   cd frontend
   npm install
   ```

### Running the Application
1. Start the backend server:
   ```
   cd backend
   npm run start
   ```
2. Start the frontend application:
   ```
   cd frontend
   npm run start
   ```

### API Documentation
Refer to the backend README for detailed API endpoints and usage.

### Contributing
Contributions are welcome! Please open an issue or submit a pull request for any enhancements or bug fixes.

### License
This project is licensed under the MIT License.