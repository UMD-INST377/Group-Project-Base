# Link to Website
* http://fathomless-stream-81035.herokuapp.com/

# Project Title
* WeBooks

## Description
* Before reading or purchasing a specific book, many individual tend to search for the book's information first. There are not many free search engine on the internet that offers this kind of service to help them. To solve this issue, we designed and created a website as a search engine that that let its users search many different books information including genres, authors, ratings, publishers, etc from its database with no cost. Most of the books in this database are for educational purposes. 

## Target Browsers
* iOS 10 and higher
* Android 10 and higher
* Macbook 11/13/15
* Windows 10.0 or higher

## Links and Resources
* [Developer Manual](#developer-manual)

# Developer Manual

## How to install your application and all dependencies
1. Fork this repository using the Fork button on the right side of this page
2. Clone this repository using the Github Desktop or Terminal
3. Type `npm install` on the terminal window and hit enter

## How to run your application on a server
1. Open the forked repository in VSCode 
2. Type the `npm start` on the terminal
3. Go to a web browser, then go to the url: `http://localhost:3000/`.

## How to run any tests you have written for your software
* Note: There is no available test for this software yet, however, you can certainly write your own scrip to test it.

## APIs in server application 
This software only has one API, which is the `/api` - API route for books information from the database
1. GET - Retrieve all of the information from the database based on the title or book ID
2. POST - Add the additional book to the database
3. PUT - Update books that are already in the database
4. DELETE - Delete books from the database

## Known bugs 
* Note: No bugs have been detected.

## Recomendation Next Step
1. Adding more data into the database
2. Adding a picture section for the update section page
3. Adding some additional information and filter for the book



# To do list 
* Finish Delete page functionality 
* Works on mobile
* Make sure styles work across browsers
* .env setup on Heroku?
* Clean up code for selected book
* Adjust CSS so everything looks nice test
* Test various functionality
* Change some sections of README