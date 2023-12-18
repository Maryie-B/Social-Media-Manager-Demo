# Social-Media-Manager-Demo

The Social Media Manager Demo is a small web application designed to serve as a post management tool across various social media platforms. It enables users to easily create, modify, and schedule posts for publication on multiple social media platforms.

Please note that, at present, this application serves as a demonstration and is not integrated with external APIs of the respective platforms.

## Technologies Utilized
This project is centered around the implementation of authentication mechanisms and full CRUD (Create, Read, Update, Delete) functionality. It comprises both a Django backend and a React (with Vite as a developement server) frontend, as well as various support libraries (such as django_restframework, simple_jwt, Zustand and so on).


## User Flow: 
The user has to first log-in, in order to gain access to the posts and the manager: 



## Installation

To set up and run the Social Media Manager Demo on your local machine, follow these steps:

1. Clone the Repository
2. Backend Setup:
   * Navigate to the backend directory:
     cd social-media-manager-demo/backend
   * Install Python dependencies using pip:
     pip install -r requirements.txt
   * Run the Django migrations to create the database schema:
     python manage.py migrate
   * Start the Django development server:
     python manage.py runserver
3. Frontend Setup:
   * Navigate to the frontend directory:
     cd frontend
   * Install Node.js dependencies using npm or yarn:
     npm install
     # or
     yarn install
   * Start the React development server:
     npm run dev


