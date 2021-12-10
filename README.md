# Welcome to Movie Cravings

## Project Description
As the movie industry continues to grow with over 700 movies released every year, the 
information barrier that exists between users and deciding what movie to watch also continues to 
grow. By creating this movie collection app equipped with a simple, functional and interactive 
interface as well as an easy to query database system, we hope to reduce the level of 
informational overload that users may experience.  
  The enjoyment of film and tv is something that seems almost impossible to live without 
these days, and almost every generation has something they’d love to watch. Experiencing 
information overload applies to anyone who uses cable or a streaming service to watch movies. 
There is an abundance of movies there at your fingertips, and with so many options, it often 
becomes overwhelming. This leads to information queuing, where an individual puts information 
aside for later use and rarely goes back to it, or escaping, where the individual decides to 
abandon the information on a whole. We want to get rid of this problem for every person that 
experiences that all too familiar “Netflix Wormhole”. 

## Link to Website
[https://enigmatic-brook-60520.herokuapp.com/](https://enigmatic-brook-60520.herokuapp.com/)

## Target Browsers
Our projects operating system is Windows/macOS/Linux. After testing, our website works on Chrome, version 90.0.4430.85, Safari, version 14.0.3, Firefox, version 87.0, and we believe it will work on most desktop browsers.

## Links
* [Developer Manual](https://github.com/jchamdi/Group6-Final-INST377FALL2021#developer-manual)
* [Github](https://github.com/jchamdi/Group6-Final-INST377FALL2021)
* [Heroku](https://enigmatic-brook-60520.herokuapp.com/)

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
* POST - obtains course name from request body to fetch url. fetch data json from PlanetTerp grades API and returns JSON response. 
* PUT - returns response 'Got a PUT request at /api'.

## Known Bugs and Future Development
### Bugs:
- Some movies in DB can't be deleted due to foreign key issues with the DB.



### Future Development: 
* Fix DB foreign keys check.
* Display data to frontend
