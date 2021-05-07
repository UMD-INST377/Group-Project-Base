# Link to Website
* http://fathomless-stream-81035.herokuapp.com/

# Project Title
* WeBooks

## Description
* Before reading or purchasing a specific book, many individual tend to search for the book's information first. There are not many free search engine on the internet that offers this kind of service to help them. To solve this issue, we designed and created a website as a search engine that that let its users search many different book's information including genres, authors, ratings, publishers, etc from its database with no cost. Most of the books in the database are currently novels but future work would result in a dataset that features more academically oriented books. 

## Target Browsers (tested)
* Desktop Browsers:
    * Chrome 90 and higher
    * Firefox 88 and higher
    * Microsoft Edge 90 and higher
* Mobile Browsers:
    * iOS 14 and higher

## Links and Resources
* [Developer Manual](#developer-manual)
* [Application's API](http://fathomless-stream-81035.herokuapp.com/api)

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
* Note: There is no available test for this software yet, however, you can certainly write your own script to test it.

## APIs in server application 
1. GET - Retrieve all of the information from the database for a specific table
    * The following endpoints retrieve all records from their respective table: `/artisticMovement` `/authors` `/bookDescription` `/genre` `/popularBooks` `/publishers` `/bookRetailers`
    * The following endpoints retrieve all records from their respective table where the request's id matches the id present in the table: `/artisticMovement/:artistic_movement_id` `/authors/:author_id` `/bookDescription/:description_id` `/genre/:genre_id` `/popularBooks/:book_id` `/publishers/:publisher_id` `/bookRetailers/:retailer_id`
    * The endpoint `/popularBooksExpanded` uses a custom SQL query to fill in each foreign key id, like description_id or author_id, with the value present in the other table. Books with multiple genres have their genre values combined into a single string value.
    * The endpoint `/popularBooksExpanded/:book_id` preforms a similar query to `/popularBooksExpanded` but also filters based on the selected book_id.
2. POST - Adds an additional book to the database
    * A POST request to `/popularBooks` results in a new entry being added to the table. The endpoint should set the new id to be equal to the length of the table plus one.
3. PUT - Update books that are already in the database
    * A PUT request to `/popularBooks` results in an existing record being updated. The id of the book that will be updated should be in the request itself not the url.
4. DELETE - Delete books from the database
    * A DELETE request to `/popularBooks` results in an existing record being deleted. The id of the book that will be updated should be in the request itself not the url.

## Known bugs 
* Hmmm...

## Recomended Next Steps
* Speed up heroku loading
* Adding more data into the database relevant to collegiate education
* Adjust admCreate and admUpdate so that it is less reliant on Ids
* Make pages that allow for adding new records to tables other than popular_books
* Allow for uploading pictures in admCreate and admUpdate pages
* Admin verification system
* Account and sign in system
* Allow users to leave reviews and comments + set up moderation capabilities
* Filter based on all languages the book has been translated to
* Filter based on copies sold (requires getting not fake data for copies sold)



# To do list 
* Make sure website looks fine on mobile
* Make sure styles work across browsers
* Adjust CSS so everything looks nice
* .env setup on Heroku?
* Find bugs
* Ask about file structure