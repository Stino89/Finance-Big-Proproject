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

bash
Copy code
git clone https://github.com/yourusername/personal-finance-manager.git
cd personal-finance-manager/backend
Install dependencies:

bash
Copy code
npm install
Set up environment variables:
Create a .env file in the backend directory and add the following:

env
Copy code
MONGO_URI=your_mongo_db_uri
POSTGRES_URI=your_postgres_uri
JWT_SECRET=your_jwt_secret
PORT=5000
Run the backend server:

bash
Copy code
node server.js
Frontend
Navigate to the frontend directory:

bash
Copy code
cd ../frontend
Install dependencies:

bash
Copy code
npm install
Run the frontend server:

bash
Copy code
npm start
Coding Standards
Follow the Airbnb JavaScript style guide.
Ensure consistent use of semi-colons, single quotes, and indentation.
Contributing
Fork the repository.
Create a new branch (git checkout -b feature/your-feature-name).
Make your changes and commit them (git commit -m 'Add some feature').
Push to the branch (git push origin feature/your-feature-name).
Create a new Pull Request.
Issues
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
User Registration
URL: /api/auth/register
Method: POST
Body:
json
Copy code
{
  "name": "string",
  "email": "string",
  "password": "string"
}
Response:
json
Copy code
{
  "message": "User registered successfully",
  "token": "JWT token"
}
User Login
URL: /api/auth/login
Method: POST
Body:
json
Copy code
{
  "email": "string",
  "password": "string"
}
Response:
json
Copy code
{
  "message": "Logged in successfully",
  "token": "JWT token"
}
Get All Transactions
URL: /api/transactions
Method: GET
Headers:
json
Copy code
{
  "Authorization": "Bearer JWT token"
}
Response:
json
Copy code
[
  {
    "description": "string",
    "amount": "number",
    "createdAt": "date",
    "updatedAt": "date"
  }
]
Create a Transaction
URL: /api/transactions
Method: POST
Headers:
json
Copy code
{
  "Authorization": "Bearer JWT token"
}
Body:
json
Copy code
{
  "description": "string",
  "amount": "number"
}
Response:
json
Copy code
{
  "description": "string",
  "amount": "number",
  "createdAt": "date",
  "updatedAt": "date"
}
License
This project is licensed under the MIT License - see the LICENSE.md file for details.
