 # UMD Dining Database #
 
 ## Project Description ##

UMD dining services is in need of a new system that provides students with the crucial information about what food is being served at the dining halls on a given day. Currently, students are unaware of food choices and their dietary and nutrition facts until they enter a dining hall. They have to use their sometimes limited meal swipes without even knowing what their options are. We built an application that shows the menus at each dining hall: "The Diner", "South Campus Dining Hall", and "251 North Dining Hall". Users can also see a map feature to learn the locations of each of these dining halls, and search which meals will be available at which dining halls.



<img width="1439" alt="Screen Shot 2022-05-10 at 11 32 53 PM" src="https://user-images.githubusercontent.com/64926563/167763942-07e76f58-74b7-4638-9bc3-f50f9cbd6c78.png">


## Link to Website ##

https://stormy-island-80984.herokuapp.com/

## Target Browsers ##

* 13 - 15 inch Laptop Web Browsers:
  * Google Chrome
  * Safari
* iPhone 11 / 12


## Links ##

[Developer Manual](https://github.com/jhersh4/finalproject377#developer-manual/ "Developer Manual")

# Developer Manual #

## How to install application and all dependencies ##

1. Clone repository with Github Desktop or the Terminal.
2. Open repository in VSCode or Terminal application.
3. run npm install in the terminal and run.


## How to run application on a server ##

1. run npm start (after running npm install)
2. In your web browser, go to http://localhost:3000/


## To run tests for software ##

There are no pre-written tests for this, however, using the Inspect element console log can typically point you to any errors


## Server application APIs ##

/allmeals - displays a user friendly table that takes columns from meals, macros, and dining hall tables.
GET - Logs to console response query from URL. returns response 'Got a GET request from /api'.
POST - obtains course name from request body to fetch url. fetch data json from Dining Hall database from API and returns JSON response.
PUT - returns response 'Got a PUT request at /api'.


## Known Bugs and Future Development ##

### Bugs ###
* Search bar disappears on certain pages

### Future Developments ###
* The search bar feature is not advanced. It will return meals with a letter that matches rather than meals that start with that letter. This can be improved upon with more time
* The UI for the menus could be improved upon





API Endpoints:


