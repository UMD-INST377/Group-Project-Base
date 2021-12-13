# Project Title: PG County Food Inspection Compliance
Description: Food safety has always been a priority but with the information age, we can now share that information with the public in an easily accessible way. We wanted to provide residents of Prince George's County with the health department inspection status for different facilities like restaurants, grocery stores, catering services, theater and stadium concession, public/private schools, penal institutions, shelter and senior feeding programs, and different temporary food operations like farmer markets and festivals. To do this, we aimed to utilize the reports from the health department to create a website where public individuals can view inspection details of their favorite establishments or the areas they should temporarily steer clear from. Adding on to that goal we also wanted to assist the health department inspectors to stay as up to date as possible by creating a way to delete and add new inspection details.     

Targeted Browsers: Our typical targeted browsers are desktop users. Based on our goals of manipulating data by filtering and sorting with data rows with up to 29 different columns of data, desktops would allow for the most optimal viewing of the entire dataset. For inspectors, we also believe that they are providing economical sensitive information for different establishments so there should be minimal mistakes which is best prevented by being able to see as much information on a screen as possible when entering new data. As for mobile phones, it is more difficult to see all of the data without getting a bigger picture or just missing out on the full context without increased cognitive processing.

Link to the Heroku instance where application is live and running:
    https://polar-mesa-33091.herokuapp.com/


# Developer Manual : PG County Food Inspection Compliance

GET - retrieves database from VCL server provided by the University of Maryland. (Currently retrieving 50 entries) 

POST - creates the relationships within the table of data or API with all of the categories from the database retrieved onto the website. 

PUT- allows for updating the table of data or API with data 

DELETE - destroys or removes an entry from the database on the website. 

# Known Bugs 

VCL Database Credentials
- The University of Maryland provides the VCL for this project and can change usernames and passwords at times so that the data can not be retrieved from the database. To edit the username and password with new credentials use the server_files/controllers/database/config.js file to enter new login information. 