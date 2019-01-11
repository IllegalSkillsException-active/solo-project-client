This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

This project was made for my sister who is a massage therapist. The main goal was for a user to be able to book an appointment with her through this website. The website itself contains Home, Appointments, About, and Offerings(massage options/pricing) pages. 

The Tech stack that is used on this project is React for the Front-End and Node with mongoose/mongoDB for the Back-End. I have also connected a third party API that will send users, who book an appointment online, a text message confirmation with their basic appointment details. 

The main parts for the Front-End can be found in client/src/components.

For the Home page ---> client/src/components/Home/Content

For the Appointments page ---> client/src/components/Home/Appointments/AppointmentForm 

    ** The code for the Calendar can be found in ---->     client/src/components/Home/Appointments/Calendar  **

For the About page ---> client/src/components/About/About

For the Offerings page ---> client/src/components/Offerings/Offerings

Styling as well as photos used for the various pages can be found in --->
    client/src/components/styles

All of these Components come together in app.js 

On the Back-End, The main parts are in server/api

particularly in server/api/app.js 

Routes can be found in server/api/routes

    ** controllers for the various routes can be found in server/api/controllers **

Models can be found in server/api/models 





