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

## How to Install Application and Dependencies
In order to install our application, future developers can fork our [repository on Github](https://github.com/jayid00/Group20-Final-INST377_Fall2021) and save it to their VS Code directory. They will be able to obtain any updates by entering “git pull” in their terminal on VS Code. Dependencies and devDependencies can be found in our package.json file. Developers can install dependencies by entering “npm install” in their terminal on VS code. The libraries used are node.js, express and sequelize.

## How to Run Application on a Server
In order to run our application, future developers can enter “npm start” to run the application on their local server. If successful, future developers should receive an output message stating that their computer is listening on: http://localhost:3000.

## How to Run Any Tests
No tests have been written for our software. However, to test if our application is successful, a user can navigate through our website. We personally console logged the first array of our JSON file to assess whether the data was responsive.

## Our Endpoints
Our database consists of a set of tables. The homepage leads to our main table and the drop down menu provides access to our other tables that provide more in-depth details.

### Vaccination & County Data
This is the main table of our database. It is a join between COVID-19 statistics table, County Info, and Vaccination By County table. For each county in the given set of Maryland Counties the following information is provided: the population, confirmed deaths from COVID-19, positive cases of COVID-19, number of people who have received their first dose of the vaccine and number of people who have received the second dose of the vaccine. 

## Other Endpoints
The following tables can be accessed through the drop-down menu: 

### COVID-19 Statistics: 
The COVID-19 statistics table provides information on confirmed deaths, positive cases, and county death proportion 

### County Stats 
County Stats table provides information on the population of each county and the percentage of residents uninsured. 

### Vaccination By County: 
The Vaccination By County table displays information on vaccination data for a set of counties in maryland. Users are able to access information on the number of residents who have received their first dose and the number of residents who have received their second dose. The proportion of residents who have received their first dose of the vaccine and the proportion of residents who have received their second dose as well. 

### Vaccine Sites
The Vaccine Sites endpoint displays a table including relevant information on all locations where Maryland residents can receive the COVID-19 vaccine in Prince George’s County, Montgomery County and Baltimore County. The following information is recorded on the table: site name, street address, city, zip code, site type, operating hours, contract phone and website.

### Unemployment: 
This tracks the unemployment rate for the year 2020 in Maryland. The month and the rate at each month is provided in the table. We decided not to include a table of this information because it did not provide enough information on counties; however, it is still an endpoint in our database and has a controller and route as well. 

## File Structure: 
### Client folder: 
    holds the HTML and JS files for each table. The HTML file houses the table structure and the JS file uses an async/await function to call our data into display on the frontend 
### Controller folder:
    holds the JS files for each endpoint. Each file in this folder stores the SQL command to get data from our database for each endpoint 
### Database folder:
    holds the backbone of our database structure 
### Models folder: 
    For each endpoint, this folder has a JS file which defines the table, the datatypes in the table, and returns the result 
### Routes folder: 
    The apiroutes.js file codes each endpoint. Endpoints are the list of names our application can refer to on request. The routes coded in this file call the controllers to structure our data. 

## Known Bugs & Future development: 
For future development, we would like to improve a few functionality aspects of our frontend webpage. 
We need to refer to counties by their full name rather than a number. This could be accomplished by joining county info with each table in order to add the county name column to each of the other tables. 
We need to make a more enticing webpage. Adding more imagery and styling such as symmetry or more “blocks” to group together different sections of our website 
We could also try to expand the information we provide by providing information on COVID-19 statistics for the entire DMV area. This would require us to pull data from multiple sources. 
The Unemployment endpoint could be used in a join with another table that has information for each month of the year as well, such as number of COVID-19 cases per month. This could allow us to compare the number of uninsured residents and positive cases per month. 