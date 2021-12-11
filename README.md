
# Welcome to My Movie Cravings

## Project Description
People often struggle when searching for movies that interest them online. Our movie DB lookup allows for users to search for movies based on the genre they are interested in and add or delete movies from their personalized accounts to keep a running list of movies that meet their personal preferences. This allows our users to keep track of their favorites movies, organize a list of future movies to watch, and remove movies that they no longer want to save to their DB. The open ended nature of the websites "intended use" is the our favorite quality as it allows the user to take advantage of the IMDB database, with over 700 movies selections, in whichever way they desire.

## Link to Website
[https://enigmatic-brook-60520.herokuapp.com/](https://enigmatic-brook-60520.herokuapp.com/)

## Target Browsers
Our projects operating system is Windows/macOS/Linux. After testing, our website works on Chrome, version 90.0.4430.85, Safari, version 14.0.3, Firefox, version 87.0, and we believe it will work on most desktop browsers.

## Links
* [Developer Manual](https://github.com/jchamdi/Group6-Final-INST377FALL2021#developer-manual)
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


## Server application APIs
```/api``` -  API route for movies and all other information.
* GET - Logs to console response query from URL. returns response 'Got a GET request from /api'.
* POST - obtains film name from request body to fetch url. fetch data json from movieRoutes api and returns JSON response. 
* PUT - returns response 'Got a PUT request at /api'.

## Known Bugs and Future Development
### Bugs:
- Some movies in DB can't be deleted due to foreign key issues with the DB.



### Future Development: 
* Fix DB foreign keys check.
* Display data consumed from endpoint to frontend
* Expand DB to include larger variety of films
* Expand target to allow mobile use of app
* Add working "sign-up" and "login" page that's functional and interactive