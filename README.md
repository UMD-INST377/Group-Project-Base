# Movie Curation
## Description

Our goal is to make searching for movies easier for the user by adding filters to customize to users preferences. Since the start of the pandemic, people of the world have had to stay inside and find other means of entertainment. The majority of these people turned to watching movies and TV shows. Theses users scrolled for hours searching for movies that meet their criteria, only to be unsuccessful and give up. Our system gives the movie enthusiasts the ability to use a filtre to find movies that fit their desired criteria, thus finding their ideal movie much quicker and more efficient. Based on their input in categories such as genre and favorite actors, we will sort through movies in our database and match their preferences with the perfect movie. We are excited to help the user find their ideal movie. 

### Link to Website

https://infinite-woodland-13862.herokuapp.com/

### Target Browsers

* iPhone 8/XR
* Macbrook Pro 13/15

### Links

* [Developer Manual] https://github.com/xiaoma521/Group14-Final-INST377SP2021#developer-manual

# Developer Manual 

### How to install application and all dependecies

1. Clone this repository through Github Desktop or through Terminal
2. Open reposity in VSCode Terminal or any other Terminal Application.
3. type 'npm install' into terminal window and run.

### How to run application on a server 

1. Open repository in VSCode terminal or Terminal application.
2. Run npm start. There should be no errors.
3. In a web browser, go to url: http://localhost:3000/.

### How to run tests for software

The are no prewritten tests in the source repository, but you can use Cypress to run your own written tests.

1. Open two terminals and make sure you are in the main project directory
2. In the first terminal, run npm start.
3. In the second terminal run npm test.

### Server Application APIs

/api -api route for movie infromation

* GET - Receives the movie information from our database.
* POST - Adds a new movie to the database.
* DELETE - Deletes a movie from the database.

## Known Bugs and Future Development

### Bugs:

* There is a problem with the foreign key "director_id"

### Future Development:

* Allow for more of a filter function
* Create a way to recommend a movie for a user based on preferences or past movie history
