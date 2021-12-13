# Extinct Animal Records

## Description
As climate change caused by man-made greenhouse gases continues to negatively impact the Earth,
many animals are becoming at risk of being endangered or even extinct, and many
animals have already gone extinct due to climate change. It is important that we do not forget
these animals, as well as animals that have gone extinct due other factors.
We created this application for the purpose of providing information on extinct animals in an accessible fashion.
## Link To Website
https://group16-fa2021.herokuapp.com/
## Target Browsers
- Windows 7/10/11
- iPhone 6/7/8 Plus
- Samsung Galaxy 
- Pixel 2/2XL
## Links
[Developer Manual](https://github.com/efalope2059/Group16-Final-INST377FA2021/blob/main/README.md#developer-manual)

# Developer Manual
## How To Install The Application And All Dependencies
1. Clone the repository of this app through GitHub Desktop or through Terminal.
2. Open the repository in VSCode Terminal or Terminal application.
3. Type `npm install` into the terminal window and run.
4. The application should ready to use.
## How To Run This Application On A Server
1. Open the repository you previously cloned, and open up a terminal in either VSCode or another terminal application
2. Run `npm start`
3. In the web browser of your choice, type in `http://localhost:3000/` into the URL bar
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
As of 12/2/2021, the POST method for the animals API unfortunately does not function due to foreign key constraints in the database that requires each record in the animals table to have values in the foreign key columns (such as extinction_extinction_id, etc).
## Future Developments 
1. Create a user/login system to allow for proper access. This will allow people with admistrative rights to update and delete records, while also filtering out internet trolls.
2. The further development of the add and delete feature of the front-end. This will allow full functionality for users with administrative rights as mentioned above.
3. The development of the search bar; this would allow users to locate extinct animal information by characters and substrings inputted into the search bar.
4. The switch to a database with prior data on extinct animals to serve as a bigger foundation for the public mutable database,
