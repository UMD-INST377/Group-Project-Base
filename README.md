# Maryland Car Crash Database
## Description
When someone experiences a car crash on a dangerous road they should be able to input the circumstances that surround that crash to hopefully warn others. A user will be able to use this site to input data regarding their crash that will be added to a statewide database. The database will be analyzed to more accurately determine what roads in Maryland need to be prioritized for change in the future. This could be due to factors such as certain roads being more susceptible to weather or some roads being poorly designed which creates more crashes. 
## Link to Heroku
https://dashboard.heroku.com/apps/group7-final-inst377
## Target Browsers
Macbook Pro 
## Links
- [Developer Manual](https://github.com/jremeto/Group7-Final-INST377/blob/main/README.md)
- [User Manual](http://localhost:3000/documentation.html)
# Developer Manual
## How to install your application and all dependencies
1. Clone the chose repository through the Terminal or the GitHub Desktop Application
2. Open the repository within VSCode and open a terminal
3. Within the terminal type npm install 
4. The application should be ready to be used 
## How to run your application on a server
1. Open the repository and a terminal
2. Type npm start within the terminal
3. If working correctly, go to http://localhost:3000/

## How to run any tests you have written for your software
1. Open two seperate terminals with VSCode
2. Type npm start within one of the terminals 
3. Type npm test within the other terminal 

## API Section
Included in the repository is a list of APIs which correlate to their respective tables in the database. They include:
1. collisionType
2. crashInformation
3. driverDemographics
4. roadConditions
5. culpability

Each endpoint contains GET, POST, PUT, and DELETE methods to allow for data manipulation. The methods and their uses are detailed below.

1. GET - Retrieves data from the server.
2. POST - Sends data to the server allowing for the creation of new resources.
3. PUT - Sends data to the server allowing for existing records to be updated.
4. DELETE - Deletes a resource from the server. 

## Development and Bugs Section

### Future Development
- Different pages for different submittion forms
- Code for the different submittion forms
- Add a way for users to enter location of crashes
- Create a heatmap to plot crashes 
- Handle unknown and/or new values that were not part of database 
- Allow for the insertion of data to tables other than driverDemographics - drop down table selector implemented already
### Bugs
- Could be issues with values that are not specified within database

