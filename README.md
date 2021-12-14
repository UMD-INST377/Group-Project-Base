#  [Housing Database Website](https://group21-inst377.herokuapp.com/)

## Description
We attempted to create a website that could show statistics of Maryland based on zip code using Maryland Census Data and other data. The information that the website has access to is taken from a database that a member of our group developed in the past. The database contains data relevant to anyone looking for information to supplement their home browsing process in different areas and communities.

## Target Browsers
- iPhone 6 or greater
- Firefox, Safari, Google Chrome
- Google Pixel 2 or greater
- Samsung Galaxy S20 or greater

### [Developer Manual](https://github.com/Kamglitchd/Group21-Final-INST377SP2021#developer-manual)

# Developer Manual

## How to install application and all dependencies
1. Clone the repository from Github
2. Open the repository through Vscode or a terminal
3. Type `npm install` in the terminal to install all dependencies

## How to run your application on a server
To run the application on your local server to view the website as you are working on it is to:
1. Type `npm start` into the terminal.
2. Open a web browser and enter the url: `http://localhost:3000/`
3. If there is an issue running npm start try uninstalling the **node_modules** file and try step 1 again.

## Tests
This project does not have tests prepared for the code. 

## Server Application APIs
`/api/mdCensusData` API route for access to data values:
-  census_zcta
- census_identifier
- median_age
- num_persons_over_65
- total_population
- homeowner_rate
- percent_homeowner_without_mortgage
- percent_rent
- community_identifier
- pct_foreign_born
- pct_poverty
- pct_unemployed
- pct_bachelors
- median_household_income
- pct_little_english
There are GET, POST, PUT, and DELETE in the endpoint however we were unable to utilize them so they are available to be modified to desired outcome. 

## Bugs and Future Development
### Bugs:
Currently the search function does not work due to many issues in the javascript file in script.js. Extensive efforts have been made to correct the issue to no avail.

### Future Development:
For the future the goal would be to have a website with a functional search bar that can take zipcodes for input and output information on the area of the zipcode. Using pivotTable.js it would be nice to have a pivot table for the users to be able to customize what they are looking for in the stats. 

