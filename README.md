Course Selling Website
A full-featured course-selling platform built using the MERN stack with a modern UI designed using Tailwind CSS. This application allows users to browse and purchase courses with ease. A secure payment gateway is integrated to provide seamless transactions.

Features
Course Browsing: Users can view and search for available courses.
User Authentication: Secure login and registration system for students and administrators.
Purchase and Payment: Integrated with a secure payment gateway for easy course purchases.
Responsive Design: The interface is fully responsive, built with Tailwind CSS.
Admin Dashboard: Manage courses, users, and payments.

Tech Stack

Frontend:
• React.js
• Tailwind CSS for styling
• Axios for API calls
• React Router for routing

Backend:
• Node.js with Express.js
• MongoDB for the database
• Mongoose for object data modeling (ODM)
• JWT for authentication
• Payment Gateway: (e.g., Stripe/PayPal integration)

Installation and Setup

Prerequisites:
• Node.js installed
• MongoDB instance running
• Stripe/PayPal API keys (or any other payment gateway)

Clone the Repository:
git clone https://github.com/your-username/course-selling-website.git

Backend Setup:

1. Navigate to the backend directory
2. Install the dependencies:
 => npm install
3. Create a .env file and add the following environment variables:
 => PORT=5000
    MONGO_URI=your-mongodb-uri
    JWT_SECRET=your-jwt-secret
    PAYMENT_GATEWAY_API_KEY=your-payment-gateway-api-key
5. Start the backend server:
   => npm start

Frontend Setup:

1. Navigate to the frontend directory.
2. Install the dependencies:
   => npm install
3. Start the frontend development server:
   => npm start

Run the Application
After setting up both the frontend and backend, you can access the website at http://localhost:5170 and the backend API at http://localhost:4000.
