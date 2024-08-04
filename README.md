Student Management System
Overview

The Student Management System is a RESTful API developed using Node.js and TypeScript. It allows for the management of student records, including operations like creating, reading, updating, and deleting (CRUD) student information. The project uses MongoDB as the database to store student details, with Mongoose as the ODM (Object Data Modeling) library.
Features

    Create Student Record: Add new student information, including name, roll number, birth date, division, subjects, and marks.
    Retrieve Student Records: Fetch details of all students or a specific student by ID.
    Update Student Record: Modify existing student information.
    Delete Student Record: Remove a student's information from the database.

Technologies Used

    Backend: Node.js, Express, TypeScript
    Database: MongoDB
    ORM: Mongoose
    Logging: Winston (via a custom logger)
    Environment Management: dotenv

Prerequisites

Before running this project, ensure you have the following installed:

    Node.js (v14 or higher recommended)
    MongoDB (local instance or a cloud-based MongoDB Atlas account)
    npm or yarn

Installation

    Clone the repository:

    bash

git clone https://github.com/yourusername/student-management-system.git
cd student-management-system

Install dependencies:

bash

npm install

Set up environment variables:

Create a .env file in the root directory and add the following:

env

    PORT=5000
    MONGO_URI=mongodb://127.0.0.1:27017/yourDatabaseName?directConnection=true

    Replace yourDatabaseName with the name of your database.

Running the Application

To start the server, run:

bash

npm run dev

The server will start on http://localhost:5000 by default.
API Endpoints
Method	Endpoint	Description
GET	/api/students	Retrieve all students
GET	/api/students/
	Retrieve a student by ID
POST	/api/students	Create a new student
PUT	/api/students/
	Update a student by ID
DELETE	/api/students/
	Delete a student by ID
Example Requests

    Create Student

    bash

POST /api/students
Content-Type: application/json

{
  "Name": "John Doe",
  "RollNo": "12345",
  "BirthDate": "2000-01-01",
  "Division": 1,
  "Subject": ["Math", "Science"],
  "Marks": [85, 90]
}

Retrieve All Students

bash

    GET /api/students

Logging

The project uses Winston for logging. All logs are written to the console, and different levels (info, error) are used for different actions.