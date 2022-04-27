# Movie Finder

## Description
Movies are an amazing way to pass the time, entertain yourself, or connect with other's cultures. However, in this era, it is becoming increasingly difficult to find movies you enjoy since they are spread out into different subscription services. It is often difficult to choose which service to go to, and very expensive to choose all of them, so this website is geared towards helping you find the subscription service with the most movies that fit your taste.


## Link to Website
<!-- [https://group13-final-inst377sp2022.herokuapp.com/](https://group13-final-inst377sp2022.herokuapp.com/) -->
<!-- temporary until we can get the main deployment working!-->
[https://i377final.herokuapp.com](https://i377final.herokuapp.com)

## Target Browsers
* iPhone 6/7/8 Plus
* Pixel 2/2XL
* Macbook Pro 13/15
* Windows 10/11

## Links
<!-- * [User Manual]()  -->
* [Developer Manual](https://github.com/varanika-sharma/Group13-Final-INST377SP2022#developer-manual)

# Developer Manual
## How to install application and all dependencies
1. Clone this repository through Github Desktop or through Terminal.
2. Open repository in VSCode Terminal or Terminal application.
3. Type ```npm install``` into terminal window and run.
4. The application should now be set to use.

## How to run application on a server
1. Open repository in VSCode terminal or Terminal application.
2. Run ```npm start```. There should be no errors.
3. In a web browser, go to url: ```http://localhost:3000/```.

## To run tests for software
The are no prewritten tests in the source repository, but you can use Cypress to run your own written tests.
1. Open two terminals and make sure you are in the main project directory
2. In the first terminal, run ```npm start```.
3. In the second terminal run ```npm test```.

## Server application APIs
```/api/availability``` - API route for all platform availability in the database.
* GET - Gets entries and returns JSON response. 

<!-- ```/api/availability/:availability_id``` - API route for one platform availability in the database.
* GET - Gets entry and returns JSON response.  -->

```/api/custom``` - API route for a custom SQL query.
* GET - Gets entries based on query and returns JSON response. 

```/api/genres``` - API route for all genres in the database.
* GET - Gets entries and returns JSON response. 
* POST - Creates a new entry in the database.

```/api/genres/:genre_id``` - API route for one genre in the database.
* GET - Gets entry and returns JSON response. 
* PUT - Updates entry in the database.
* DELETE - Deletes entry from the database.

```/api/images``` - API route for all images in the database.
* GET - Gets entries and returns JSON response. 
* POST - Creates a new entry in the database.

```/api/images/:image_id``` - API route for one image in the database.
* GET - Gets entry and returns JSON response. 
* PUT - Updates entry in the database.
* DELETE - Deletes entry from the database.

```/api/languages``` - API route for all languages in the database.
* GET - Gets entries and returns JSON response. 
* POST - Creates a new entry in the database.

```/api/languages/:language_id``` - API route for one language in the database.
* GET - Gets entry and returns JSON response. 
* PUT - Updates entry in the database.
* DELETE - Deletes entry from the database.

```/api/movies``` - API route for all movies in the database.
* GET - Gets entries and returns JSON response. 
* POST - Creates a new entry in the database and responds with 'Successfully added' if successful.

```/api/movies/:movie_id``` - API route for one movie in the database.
* GET - Gets entry and returns JSON response. 
* PUT - Updates entry in database and responds with 'Successfully updated' if successful.
* DELETE - Deletes entry from the database and responds with 'Successfully deleted' if successful.

```/api/table/data``` - API route to get information for all movies in the database.
* GET - Gets entries and returns JSON response. 

```/api/table/data/:limit``` - API route to get information for a limited number of movies in the database.
* GET - Gets entries and returns JSON response. 

```/api/ratings``` - API route for all ratings in the database.
* GET - Gets entries and returns JSON response. 
* POST - Creates a new entry in the database.

```/api/ratings/:rating_id``` - API route for one rating in the database.
* GET - Gets entry and returns JSON response. 
* PUT - Updates entry in the database.
* DELETE - Deletes entry from the database.

## Known Bugs and Future Development
### Bugs:
1. Adding a new movie record and making sure that the ratings table and records table both get updated. Right now, when a movie record is added, it is being added to the records table but not to the ratings table
2. Making sure that the main database of movies gets updated with the new record
3. Making sure that the information is being inputted and parsed correctly through to put the right information forth
4. Images are large and can load slowly. Fixing requires resizing all images in the database from a URL. 

### Future Development: 
1. Expanding the movie database to have it become more of a recommender system (Adding some algorithms)
2. Adding more models regarding movies to better represent the films that we currently have 
3. Expanding the database to make it more of a media database (adding both movies and tv)
4. Ensure entries are accurate. 
