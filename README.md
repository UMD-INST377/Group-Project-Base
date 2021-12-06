# This is your readme
You are required to fill it in with documentation similar to that found in the Sequelize example for the course as part of your final project.

# Link to website


### Food Database 
## Description
The problem is that local PG county restaurants do not include the quality of their foods, and the safety measures that prove its sustainability. Using this dataset, we are hoping to inform users of our website about what restaurants, stores, and shops in the Prince George’s area are compliant with health and safety regulations. This dataset includes information like “food from approved source”, “cooking time and temperature”, etc. Using this information, it can inform users about problems with restaurants and maybe help them to reevaluate their choices when going to buy food.

## Target Browsers
iOS (iPhones 8-13), Samsung Galaxy S21, Any device capable of using the Internet

## How to install application and all dependencies
1. Clone this repository through Github Desktop.
2. Open repository in VSCode Terminal.
3. type "npm install" into terminal window and press enter to run.
4. Open a browser and type in "http://localhost:3000/" to view the application

## How to run your application on a server
1. Open the repository in VSCode terminal
2. Create a new terminal window, and type "npm start"
3. After no errors occuring, go to a web browser and type "http://localhost:3000/" to view your application

## How to run any tests you have written for your software
1. Open two terminals and make sure you are in the main project directory
2. In the first terminal, run npm start.
3. In the second terminal run npm test.

## The API for your server application
GET - Requests data from a server. Returns response "/listofRestaurants/:Establishment_id".
POST - Sends changes from the client to the server. Making sure that the list of restaurants are created correctly from the database.
PUT - Makes edits to existing information. Either returns "Successfully Updated" or "Something went wrong on /listofRestaurants at put".

## A clear set of expectations around known bugs and a road-map for future development.
# Bugs
Not gathering all the necessary information regarding restaurant.
# Future Development
Add pictures associated with restaurant information provided.
More options regarding search inputs.
Provide more information than just Name, Location(Zip,City, State,etc.) and Inspection results.
More data needed to cover a wider range of results.




