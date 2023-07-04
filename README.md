Login Page API
This is a simple API that provides login functionality using a username and password. It allows users to authenticate and receive a successful login message. The API enforces certain conditions for the username and password format.

Features
User authentication with username and password
Validates the format of the username and password
Returns appropriate error messages for invalid inputs
Redirects to the home page after a successful login
Requirements
Node.js (version 10 or above)
Installation
Clone the repository:

shell
Copy code
git clone https://github.com/your-username/login-page-api.git
Navigate to the project directory:

shell
Copy code
cd login-page-api
Install the dependencies:

shell
Copy code
npm install
Start the server:

shell
Copy code
npm start
The server will be running at http://localhost:3000.

API Endpoints
POST /login
This endpoint handles the login request.

Request Body

username (string): The username of the user.
password (string): The password of the user.
Example Request

shell
Copy code
curl -X POST -H "Content-Type: application/json" -d '{"username":"john", "password":"password123"}' http://localhost:3000/login
Success Response

Status: 200 OK
Body: JSON object with a success message.
json
Copy code
{
  "message": "Login successful",
  "redirect": "/home"
}
Error Responses

Status: 400 Bad Request
Body: JSON object with an error message.
json
Copy code
{
  "error": "Invalid username format"
}
Status: 401 Unauthorized
Body: JSON object with an error message.
json
Copy code
{
  "error": "Invalid username or password"
}
License
This project is licensed under the MIT License.

Contributing
Contributions are welcome! Please fork the repository and submit a pull request.

Author
Your Name
GitHub: @Shall-we-play-a-game
Feel free to update the content as per your specific project requirements. Include any additional sections or information that you think would be useful for users.
