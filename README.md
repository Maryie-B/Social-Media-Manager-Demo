# Social-Media-Manager-Demo

The Social Media Manager Demo is a small web application designed to serve as a post management tool across various social media platforms. It enables users to easily create, modify, and schedule posts for publication on multiple social media platforms.

Please note that, at present, this application serves as a demonstration and is not integrated with external APIs of the respective platforms.

## Technologies Utilized
This project is centered around the implementation of authentication mechanisms and full CRUD (Create, Read, Update, Delete) functionality. It comprises both a Django backend and a React (with Vite as a developement server) frontend, as well as various support libraries (such as django_restframework, simple_jwt, Zustand and so on).


## User Flow: 
The user has to first log-in, in order to gain access to the posts and the manager: 

![Login Page](https://github.com/Maryie-B/Social-Media-Manager-Demo/blob/639a073dd1f61a07c1f17a0274a71b901c893bd0/images/Login.png)

On the home page, there is a table containing all the posts available to edit and schedule for posting (with the Media Manager button). Clicking on the title will open a preview of the post in a modal, that gives the user the ability to navigate to the Edit page. 

![Home Page](https://github.com/Maryie-B/Social-Media-Manager-Demo/blob/639a073dd1f61a07c1f17a0274a71b901c893bd0/images/Home-Page.png)

![Modal](https://github.com/Maryie-B/Social-Media-Manager-Demo/blob/639a073dd1f61a07c1f17a0274a71b901c893bd0/images/Modal.png)

On the Manager page the user can either edit the post or schedule a post to be made on the specific platform: 

![Manager](https://github.com/Maryie-B/Social-Media-Manager-Demo/blob/639a073dd1f61a07c1f17a0274a71b901c893bd0/images/Manager.png)

The Edit button from every page redirects the user to the edit page, where they can make changes to the post sections or add more photos. The save button only activates if changes have been made. 

![Edit page](https://github.com/Maryie-B/Social-Media-Manager-Demo/blob/639a073dd1f61a07c1f17a0274a71b901c893bd0/images/Edit.png)

Finally, to create a new component the user can click on the small + icon at the bottom right of the screen and be redirected to the create page: 

![Create page](https://github.com/Maryie-B/Social-Media-Manager-Demo/blob/639a073dd1f61a07c1f17a0274a71b901c893bd0/images/Create.png)


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


