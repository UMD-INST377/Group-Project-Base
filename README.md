# README
[Github Link](https://github.com/jayid00/Group20-Final-INST377_Fall2021)

[Heroku Instance](https://tranquil-temple-96571.herokuapp.com/)

## Title 
COVID-19 Statistics - Maryland Counties

## Project Description
We wanted to provide Maryland counties and residents with a resource that would allow them to monitor the coronavirus pandemic in their county to help them make decisions. Our website will have information about 
* Population
* COVID statistics
* Vaccination statistics
* Vaccination sites 

The Coronavirus pandemic is an important issue that everyone must deal with as it is still evolving today. We want to give counties and residents resources that they can use that would help them make informed decisions about their health and those around them. A user will be able to navigate to these different areas on the website and quickly find the information that they need.    

## Target Browsers
* Google Chrome - Current Version (96.0.4664.45)

# Developer Manual
The API for server application: Our Endpoints 
Our database consists of a set of tables. The homepage leads to our main table and the drop down menu provides access to our other tables that provide more in-depth details 
Vaccination & Count


File Structure: 
Client folder: holds the HTML and JS files for each table. The HTML file houses the table structure and the JS file uses an async/await function to call our data into display on the frontend 
Controller folder: holds the JS files for each endpoint. Each file in this folder stores the SQL command to get data from our database for each endpoint 
Database folder: holds the backbone of our database structure 
Models folder: For each endpoint, this folder has a JS file which defines the table, the datatypes in the table, and returns the result 
Routes folder: The apiroutes.js file codes each endpoint. Endpoints are the list of names our application can refer to on request. The routes coded in this file call the controllers to structure our data. 
Known Bugs & Future development: 
For future development, we would like to improve a few functionality aspects of our frontend webpage. 
We need to refer to counties by their full name rather than a number. This could be accomplished by joining county info with each table in order to add the county name column to each of the other tables. 
We need to make a more enticing webpage. Adding more imagery and styling such as symmetry or more “blocks” to group together different sections of our website 
We could also try to expand the information we provide by providing information on COVID-19 statistics for the entire DMV area. This would require us to pull data from multiple sources. 
The Unemployment endpoint could be used in a join with another table that has information for each month of the year as well, such as number of COVID-19 cases per month. This could allow us to compare the number of uninsured residents and positive cases per month. 

* [Markdown guide](https://www.markdownguide.org/cheat-sheet/)
