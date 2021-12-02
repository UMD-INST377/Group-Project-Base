# Extinct Animal Records

## Description
Words
## Link To Webiste
https://group16-fa2021.herokuapp.com/
## Target Browsers
- Windows 7/10/11
- iPhone 6/7/8 Plus
- Samsung Galaxy 
- Pixel 2/2XL
## Links
Words

# Developer Manual
## How To Install The Application And All Dependencies
1. Clone the repository of this app through Github Desktop or through Terminal.
2. Open the repository in VSCode Terminal or Terminal application.
3. Type `npm install` into the terminal window and run.
4. The application should ready to use.
## How To Run This Application On A Server
1. Open the repository you previously cloned, and open up a terminal in either VSCode or another terminal application
2. Run `npm start`
3. In the web browser of your choice, type in `http://localhost:3000/` into the url bar
## How To Run Tests Of The Application On A Server
There are currently no prewritten tests for this application, but you can use Cypress to run your own written tests
1. Open two terminals and make sure you are in the main project directory
2. In terminal #1, run `npm start`
3. In terminal #2, run `npm test` along with the test you want to use
## Server APIs
`/api/animals` - API route for basic animal information
- GET - Returns a JSON object containing information about each animal record
- POST - Inserts a new record into the MYSQL database based on req.body 
- PUT - Updates an existing record by ID number based on req.body 
- DELETE - Deletes an existing record by ID number
## Known Bugs
As of 12/2/2021, the POST method for the animals API unfortunatly does not function due to foreign key constraints in the database that requires each record in the animals table to have values in the foreign key columns (such as extinction_extinction_id, etc).
## Future Developments 
Words
