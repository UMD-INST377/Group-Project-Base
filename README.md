# MyKEA

## Description
College rooms are known for not looking the most spectacular. MyKea aims to simplify the college room furniture design process by creating a web application that presents furniture based on user preferences. Pulling data from a database using Sequelize, the application returns results based on the criteria users select in the preference form and if users are not happy with the results they receive, they can visit the “All Products” tab and browse through other available options.

![alt text](https://github.com/gHenriquez99/Group6-Final-INST377SP2021/blob/main/public/images/mykea_home.png?raw=true)

## Link to Website
https://inst377-group6project.herokuapp.com/

## Target Browsers
- Mac OS or Windows
  - Safari
  - Chrome
  - Firefox
- iPhone iOS or Andriod OS Browsers

# Developer Manual

## How to install the application and all dependencies
- npm install 
- npm start 

## How to run the application on a server
- application should run on localhost or you can access the deployed project via heroku 

## Server Application APIs (all GET, POST, PUT, etc endpoints, and what they each do)
- There is an api enpoint of each type (GET, POST, PUT, DELETE) for each table in the database (customers, deliveries, orderItems, orders, productCategories, productFamilies, products, stores). GET endpoints can be used to access individual records by id, a range of records, and get all records. POST endpoints can be used to add a new record to the database, particularly for the products table as accessed by the admin page on the front end. PUT endpoints can be used to update existing records by specifying an ID of a record and the values to be changed, especially for the products table from the admin page.

## Known Bugs and Future Development
-Future Development: Clean styling, securing the admin page with better password management and authentication, email receipts of products selected, tabulation screen for products selected and total price, whether you are on or over budget etc.

## Technology Choices
- Using Bulma and CSS for styling
- Using ES6 for JS
- Using favicon library for the admin icon in the header bar
- Deployed using Heroku 

### Bugs:
- Header spacing is slightly off

### Future Development:
- Note that password for admin page is accessible by the inspector of the browser, this will need to be secured to avoid data manipulation by unwanted users.
- API endpoints accessed by adding /api/_______ to the url where the underscore is replaced by the desired table.
- To access record by ID, the url should look like /api/products/_____ where the underscore is replaced by the desired ID.

