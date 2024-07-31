Personal Finance Manager
Description
Personal Finance Manager is a full-stack web application designed to help users manage their finances efficiently. Users can track their expenses, view transaction history, analyze their financial habits, and get insights on budgeting and saving. The app provides a user-friendly interface and robust functionality to keep financial data organized and accessible.


Technologies
Frontend:
React
React Router DOM
Bootstrap
Backend:
Node.js
Express.js
MongoDB with Mongoose
PostgreSQL with Sequelize
Others:
JWT for authentication
Axios for HTTP requests
Vercel for deployment
Technical Information
Installation and Setup
Backend
Clone the repository:


env

MONGO_URI=your_mongo_db_uri
POSTGRES_URI=your_postgres_uri
JWT_SECRET=your_jwt_secret
PORT=5000
Run the backend server:


node server.js
Frontend
Navigate to the frontend directory:

cd ../frontend
Install dependencies:
npm install
Run the frontend server:
npm start
Coding Standards

Known Issues
User authentication issues with JWT.
UI bugs in the transaction list when editing transactions.

Future Enhancements
Implement a date picker for transactions.
Add graphs and charts for better financial analysis.
Introduce a notification system for budget alerts.
Changelog
[v1.0.0] - 2024-07-30
Added
Initial release with user registration, login, and basic CRUD operations for transactions.
Light and dark theme toggle.
Basic dashboard with current balance and alerts.
API Documentation
Endpoints

License
This project is licensed under the MIT License - see the LICENSE.md file for details.
