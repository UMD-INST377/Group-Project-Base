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
# PG County Food Inspection Postings
### Contributors
* Menal Shams, [menal-shams](https://github.com/menal-shams)
* Ben Lam, [blam12](https://github.com/blam12)
* Gregory Sarafian, [GregSarafian](https://github.com/GregSarafian)
* Noble Nwokoma, [noblen11](https://github.com/noblen11)

## Description
This database provides residents of Prince George's County, MD with the inspection status of different service facilities. In the case of a failure of inspection, a closer implying a temporary suspension of service is applied until health hazards are corrected.

![PG County Health Dept. Logo](https://polar-mesa-33091.herokuapp.com/images/pg_healthDepartment_logo.jpeg)

## Link to Website
[https://polar-mesa-33091.herokuapp.com](https://polar-mesa-33091.herokuapp.com)

## Target Browsers
### Devices
* iPhone 6 and 6 Plus (and later)
* Android devices with >4.7" display
* MacBook Pro 13", 14", 15", 16"
* PC's with widescreen displays

### Browsers
* Google Chrome
* Microsoft Edge
* Safari
* Firefox

# Developer Manual

## How to install application and all dependencies
1. Clone this repository via git or Github Desktop.
2. Open this repository in the IDE of your choice. VSCode recommended.
3. Start a terminal in the appropriate directory and enter `npm install`

## How to run application on a server
1. Open the appropriate directory where the repository has been cloned.
2. Start a terminal and enter `npm install && npm start`
3. Open a web browser and navigate to [https://localhost:3000](https://localhost:3000)

## How to run tests for software
1. Complete the previous steps from the _How to run application on a server_ section.
2. Open a terminal and enter `npm test`.

## Server Application APIs
**[add server application API information here]**

## Known Bugs and Future Development
### Known Bugs
**[add known bugs here]**

### Future Development
* Improve UI/UX of the website
* Add search and filtering tools
* Implement modals and more modern interface elements
* Add sorting tools
