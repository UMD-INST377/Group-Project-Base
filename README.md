# Spotify Playlists

## Description
Using Spotify may come as a frustration to new users by how complex the application may be.
The goal of this website is to make the process of accessing playlists to update them at your
whim easier than it is to do through Spotify. Premade playlists cannot be edited or changed
to ones liking, this website will allow users the opportunity to do so. 

## Link to Website
[https://hidden-ridge-25047.herokuapp.com/](https://hidden-ridge-25047.herokuapp.com/)

## Target Browsers
* iPhone
* Android
* Desktop/Laptop

## Links
* [Developer Manual](https://github.com/jhersh4/finalproject377#developer-manual)

# Developer Manual
## How to install application and all dependencies
1. Clone this repository through Github Desktop or through Terminal.
2. Open repository in VSCode Terminal or Terminal application.
3. type ```npm install``` into terminal window and run.
4. The application should now be set to use.

## How to run application on a server
1. Open repository in VSCode terminal or Terminal application.
2. Run ```npm start```. There should be no errors.
3. In a web browser, go to url: ```http://localhost:3000/```.

## To run tests for software
There are no prewritten tests in the source repository, but you can use Cypress to run your own written tests.
1. Open two terminals and make sure you are in the main project directory
2. In the first terminal, run ```npm start```.
3. In the second terminal run ```npm test```.

## Server application APIs
```/api``` - API route for welcoming users to API.
* GET - Returns response message 'Welcome to the spotify playlists API'.

```/songs``` - API route for songs.
* GET - Logs to console response query from URL. returns response 'Got a GET request from /api'.
* POST - obtains professor name from request body to fetch url. fetch data json from PlanetTerp professors API and returns JSON response. 
* PUT - returns response 'Got a PUT request at /api'.

```/playlists``` - API route for playlists.
* GET - Logs to console response query from URL. returns response 'Got a GET request from /api'.
* POST - obtains professor name from request body to fetch url. fetch data json from PlanetTerp professors API and returns JSON response. 
* PUT - returns response 'Successfully updated'.

```/playlistDetails``` - API route for playlist details.
* GET - Logs to console response query from URL. returns response 'Got a GET request from /api'.
* POST - obtains professor name from request body to fetch url. fetch data json from PlanetTerp professors API and returns JSON response. 
* PUT - returns response 'Successfully updated'.

## Known Bugs 
### Bugs:
- There may be null values in the course and professor reviews data that may need to be handled. 


### Future Development: 
* Handle null values in course and professor reviews data.
* Adding data for more semesters; Spring 2021.
* Diplaying average GPA in course details by professor.
* Displaying average professor rating in professor reviews search.
* Adding more ways to filter courses.



