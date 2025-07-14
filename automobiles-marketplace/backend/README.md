# automobiles-marketplace Backend

This is the backend for the Automobiles marketplace, an AI-powered car parts marketplace. The backend is built using Node.js and Express, and it provides RESTful APIs for the frontend application.

## Features

- User authentication (login, registration)
- Product management (add, update, retrieve products)
- Order processing (create and confirm orders)
- AI chat functionality
- Admin dashboard for managing users and products

## Folder Structure

- **src/**: Contains the source code for the backend application.
  - **controllers/**: Contains the logic for handling requests and responses.
    - `authController.ts`: User authentication functions.
    - `productController.ts`: Product management functions.
    - `orderController.ts`: Order handling functions.
    - `chatController.ts`: AI chat management functions.
    - `adminController.ts`: Admin-specific functions.
  - **models/**: Contains the MongoDB schemas.
    - `user.ts`: User model schema.
    - `product.ts`: Product model schema.
    - `order.ts`: Order model schema.
    - `chat.ts`: Chat model schema.
  - **routes/**: Contains the route definitions.
    - `authRoutes.ts`: Routes for authentication.
    - `productRoutes.ts`: Routes for product management.
    - `orderRoutes.ts`: Routes for order management.
    - `chatRoutes.ts`: Routes for chat interactions.
    - `adminRoutes.ts`: Routes for admin actions.
  - **middleware/**: Contains middleware functions.
    - `authMiddleware.ts`: Middleware for protecting routes.
    - `errorHandler.ts`: Middleware for handling errors.
  - **services/**: Contains service functions.
    - `aiService.ts`: Functions for AI chat interactions.
    - `paymentService.ts`: Functions for payment processing.
  - **utils/**: Contains utility functions.
    - `db.ts`: Function to connect to MongoDB.
  - `app.ts`: Initializes the Express application and middleware.
  - `server.ts`: Starts the server and listens for requests.

## Installation

1. Clone the repository.
2. Navigate to the `backend` directory.
3. Run `npm install` to install dependencies.
4. Set up your MongoDB connection in `utils/db.ts`.
5. Start the server with `npm start`.

## Usage

The backend provides various endpoints for the frontend to interact with. Refer to the individual route files for specific endpoint details.

## License

This project is licensed under the MIT License.