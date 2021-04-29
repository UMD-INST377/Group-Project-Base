# Airbnb Listing in Chicago
## Description

When a member of the public wants to view data on Airbnb reservations in Chicago, they are often unable to view analyses of these data without conducting those analyses themselves. To solve this issue, we created a website that presents data and charts on past Airbnb reservations in Chicago. This website is not intended for Airbnb employees or hosts to use, as they have access to internal tools that likely exceed the capabilities of our website. By providing a public portal for these data, we hope to give residents of Chicago a clearer picture of Airbnb reservations in their city.

## Link to Website
https://group13-final-inst377sp2021.herokuapp.com

## Target Broswers
* Iphone
* Macbook

# Links
* [User manual](https://scheduleofpt.herokuapp.com/documentation.html)
* <a href="Developer Manual">Devloper manual</a>

<a name= "Developer Manual"> Developer Manual</h1>


##  How to install application and all dependencies
1. Clone this repository through Github Desktop or through Terminal.
2. Open repository in VSCode Terminal or Terminal application.
3. type npm install into terminal window and run.
4. The application should now be set to use.

## How to run application on a server
1. Open repository in VSCode terminal or Terminal application.
2. Run npm start. There should be no errors.
3. In a web browser, go to url: http://localhost:3000/.

## To run tests for software

The are no prewritten tests in the source repository, but you can use Cypress to run your own written tests.

1. Open two terminals and make sure you are in the main project directory
2. In the first terminal, run npm start.
3. In the second terminal run npm test.

## Server application APIs

/api - API route for course grades and GPA data.

* GET - Logs to console response query from URL. returns response 'Got a GET     request from /api'.

* POST - obtains course name from request body to fetch url. fetch data json from PlanetTerp grades API and returns JSON response.
* PUT - returns response 'Got a PUT request at /api'.

/profapi - API route for professor reviews data.

* GET - Logs to console response query from URL. returns response 'Got a GET request from /api'.
* POST - obtains professor name from request body to fetch url. fetch data json from PlanetTerp professors API and returns JSON response.
* PUT - returns response 'Got a PUT request at /api'.

## Known Bugs and Future Development

## Bugs:

* There may be null values in the course and professor reviews data that may need to be handled.

## Future Development:
* Handle null values in course and professor reviews data.
* Adding data for more semesters; Spring 2021.
* Diplaying average GPA in course details by professor.
* Displaying average professor rating in professor reviews search.
* Adding more ways to filter courses.