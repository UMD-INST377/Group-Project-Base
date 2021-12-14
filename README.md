# Food Inspection/INST377 - Group 8

## Description of Project
Food is one of the basic necessities of life! As a neccessity, it is important to know where to find different types of food sources, and if those food sources are operating according to health codes. To address this issue, we developed a website that has combined these different pieces of information into an easy to use resource for users. This website displays different food sources(Restaurant, Grocery, Fast Food, etc...) and their locations on a map. In addition, users can search for the specific type of inspection that was done and view the results of that inspection. This website utlizes information collected from a Prince George's county food inspection database.

## Target Browsers
* PC Laptop
* Macbook/Macbook Pro
* iPhone 6/7/8/6 Plus/7 Plus/ 8 Plus
* Android 6.0 Marshmallow and up
* Chrome, Safari, Microsoft Edge, Firefox

## Links
* [Live Heroku Link](https://thawing-falls-64541.herokuapp.com/)
* [Developer Manual](#Developer-Manual)


# Developer Manual

## How To Install This Application and All Dependencies
1. Clone this project repository through Github Desktop or through command terminal.
2. Open the repository in VSCode Terminal.
3. Install node.js on your computer with this [link](https://nodejs.org/en/download/).
4. Once node is installed, run the following command in VSCode terminal: ```npm install```.
5. The application is now ready to use.

## How To Run Application On Server
1. Open the repository in VSCode.
2. Run the following command in VSCode terminal: ```npm start```.
3. Open your web browser, and go to the following url: ```http://localhost:3000/```.

## How to run Software Tests
There are no prewritten tests within this repository. However, the api endpoints and controllers can be tested within Postman.

1. Open your VSCode terminal and run the following command: ```npm start```.
2. Open Postman application and click the "+" button in the top right of the program.
3. Select the endpoint you want to test for(GET, PUT, POST).
4. Enter the following: ```localhost:3000/api/route```. Replace "route" with the actual route associated with your selected endpoint.
5. Click on send to test if the endpoint is returning information from the database.

## Server Application APIs
```/restaurants``` - API route for location information of food sources.
* GET - Retrieves identifier information for a given food source. Logs to console the response 'touched /food_inspection with GET'.

```/zipcodes``` - API route for Zip Code information of food sources.
* GET - Retrieves the zipcode of a given food source through query in zipcodeController. Logs to console the response 'touched /zipcodes with GET'.

```/inspectiontype``` - API route for inspection type information conducted at the different food sources.
* GET - Retrieves the type of inspection that was conducted at a given food source through query in inspectionType controller. Logs to console the response 'touched /inspection_type with GET'.

```/differentrestaurant``` - API route for updating existing information.
* PUT - Updates a given food source's inspection result based on user changes. Logs to console the response 'updated /name with PUT'.

```/newrestaurant``` - API route for new restaurant information.
* POST - Adds a new food source entry into the database from request.

## Known Bugs and Future Development

### Bugs:
* There are null values for inspection results for some food sources.

### Future Development:
* Handle null values for inspection results.
* Work on script.js file which is needed for the website to run properly.
