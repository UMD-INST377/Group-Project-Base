# README

## Heroku Instance

https://limitless-shelf-33777.herokuapp.com/

## Project Title

Group 5 Final Project

## Project Description

This resource contains information on albums, artists, genres, and more to give the users filterable, detailed music information. This project addresses an information need for music history enthusiasts by providing them with an easily navigable website containing critical details on numerous albums and artists. 

## Description of Target Browsers

- Macbook Air 13/15
- Macbook Pro 13/15
- Asus
- Pixel 2
- iPhone XS

## Link to Developer Manual

[Developer Manual](#developer-manual)

# Developer Manual

## How to install application and all dependencies

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

1. Open a terminal tab and make sure you are in the main project directory.
2. In the terminal, run npm start.
3. Check console log.

## Server application APIs

/api is the main api route. This does not really return anything, but is needed to access all the endpoints.         
/api/songs      
- GET - Logs to console response query from URL. returns response 'Got a GET request from /api'.        
- POST - obtains title, album name, artist name, release release date,  from request body to fetch url. fetch data json from Music API and returns JSON response.        
- PUT - returns response 'Got a PUT request at /api'.         
           
/api/albums         
- GET - Logs to console response query from URL. returns response 'Got a GET request from /api'.            
- PUT - returns response 'Got a PUT request at /api'.          
         
/api/artists          
- GET - Logs to console response query from URL. returns response 'Got a GET request from /api'.          
- PUT - returns response 'Got a PUT request at /api'.        
              
/api/songinfo          
- GET - Logs to console response query from URL. Sends you to the endpoint: '/songinfo'.           
- PUT - returns response 'Got a PUT request at /api'.          
             
/api/lyrics           
- GET - Logs to console response query from URL. Sends you to the '/lyrics' endpoint to see your list of lyrics             
               
## Known Bugs and Future Development

Bugs:
- There may be possibility to add null album keys, which would make the search bar not function
- Users can add duplicate albums, artists, or songs into the database due to how it was constructed
- Users need to click the suggestion button twice before it takes users to the appropriate page


Future Development:
- Fixing and remaking the database so that it has less foreign key issues.
- Fixing database so that it does not allow duplicates where it should not be. 
- Adding better security factors so that people can't insert wrong things
- Making sure that when you add data and there is already an album and artist in database, it connects those existing keys to the song
- Having an artist page and a clearer album page like in our original idea.