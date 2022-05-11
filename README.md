# Artwork Gallery Management

## Description
Art is a form of expressing oneself. It is used to describe beauty, adventure, entertainment and new. 
The goal of this website is to allow users to view various artwork designs created by well-known artists.

## Link to Website
https://inst377-gproject.herokuapp.com/

## Target Browsers
- Desktop browsers

## Link to Developer Manual
https://github.com/vnath22/Group24-Final-INST377SP2022#developer-manual

# Developer Manual

## How to install application and all dependencies
1. Clone this repository through Github Desktop or through Terminal.
2. Open repository in VSCode Terminal or Terminal application.
3. Type `npm install` into terminal window and run.
4. The application should now be set to use.

## How to run application on a server
1. Open repository in VSCode terminal or Terminal application.
2. Run `npm start`. There should be no errors.
3. In a web browser, go to url: `http://localhost:3000/`.

## To run tests for software
The are no prewritten tests in the source repository

1. Open two terminals and make sure you are in the main project directory
2. In the first terminal, run `npm start`.
3. In the second terminal run `npm test`.

## API Server Endpoints
`/api/artists` - API route for artists
- GET - Gets a single record from the artist table
- POST - Update data based on the artist id
- PUT - Insert data into the artist table in the database
- DELETE - Deletes data based on the artist id

`/api/artwork` - API route for artwork
- GET - Gets a single record from the artwork table
- POST - Update data based on the artwork id
- PUT - Insert data into the artwork table in the database
- DELETE - Deletes data based on the artwork id

`/api/country` - API route for country
- GET - Gets a single record from the country table
- POST - Update data based on the country id
- PUT - Insert data into the country table in the database
- DELETE - Deletes data based on the country id

`/api/galleries` - API route for galleries
- GET - Gets a single record from the galleries table
- POST - Update data based on the gallery id
- PUT - Insert data into the galleries table in the database
- DELETE - Deletes data based on the gallery id

`/api/genres` - API route for genres
- GET - Gets a single record from the genres table
- POST - Update data based on the genre id
- PUT - Insert data into the genres table in the database
- DELETE - Deletes data based on the genre id

`/api/reservation` - API route for reservation
- GET - Gets a single record from the reservations table
- POST - Update data based on the reservation id
- PUT - Insert data into the reservations table in the database
- DELETE - Deletes data based on the reservation id

## Known Bugs and Future Development
### Bugs:
None

### Future Development:
- Add a login page
- Add a profile page where customers can purchase, and save their transactions
- Add more artist and artwork names
- Have a filter that filters for artist, artwork, or country
- Make the layout more professional

