# TV and Films Cinema

## Description
The information problem we are trying to solve is an archival one. Prior to streaming services, people often kept a collection of VCRs, DVDs and Blu Ray discs as part of their TV and/ or movie collections. If the person only watched movies at the theater and/ or didn’t keep track of what television shows they’ve watched, they would be hard pressed to remember all that they had seen. While people could keep track of their tv show and movie consumption on something like a notebook, this method is antiquated and could lead to data loss should they misplace their notebook (or any other number of reasons). People who care about this problem are those who wish to keep track of all the tv shows and movies they’ve watched in one convenient location. Our system solves this problem by using a database that stores information about movie/ tv shows and information about what our users have seen (self input).

## Link to Website
https://morning-depths-05988.herokuapp.com/

## Target Browsers
* iPhone 12 Pro
* Laptop
* iPad Air

## Link
* [Developer Manual] (https://github.com/ViphuKN/Group10-Final-INST377SP2021#developer-manual)

# Developer Manual
## How to install application and all dependencies
1. Clone this repository through Github Desktop or through Terminal.
2. Open repository in VSCode Terminal or Terminal application.
3. type ```npm install``` into terminal window and run.
4. The application should now be set to use.

## How to run application on a a server
1. Open repository in VSCode terminal or Terminal application.
2. Run ```npm start```. There should be no errors.
3. In a web browser, go to url: ```http://localhost:3000/```.

## How to run tests for the software
1. Open two terminals and make sure you are in the main project directory
2. In the first terminal, run ```npm start```.
3. In the second terminal run ```npm test```.

## Server Application APIs
```/actors``` - API route to display actors ID, first & last name, birth date, and death year
* GET - Logs to console response query from URL. Returns response 'Actor_Id'
* GET - Display a chart of the top 5 TV ratings
* POST -  Access the actors table and create a editing row in the actors table for the user's input
* DELETE - Access the actors table to allow the user to delete info of an actor from their id

```/primary_title``` API route to display information on the film and TV shows
* GET - 
* DELETE - 
* POST 

### Future Developement:
* We could add more graphs that show information about the users database such as amount of movies per genre
* Clean up background design to make it more visually appealing

### How to use Markdown
Markdown is a text notation system used in Discord, Whatsapp and similar to structure pages without writing HTML at all. You'll be using it for your documentation.
* [Markdown guide](https://www.markdownguide.org/cheat-sheet/)
