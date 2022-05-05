# Dining Hall Helper
## Project Overview 
  Too many students at UMD often struggle getting accustomed to the dining hall situation when arriving to campus. Therefore, we created a website to address any concern students have regarding the dining hall systems at UMD. From dietary restrictions to determining the proximity of a dining hall, our website will help students address any frequently asked questions they might have. 

 # Developer Manual
 ## How to install application and all dependencies
 1. Clone the repository through Github Desktop or Terminal
 2. Open repository in VSCode Terminal or Terminal application.
 3. type `npm install` into terminal window and run.
 4. The application should now be set to use.

 ## How to Run application on a server
 1. Open repository in VSCode terminal or Terminal Application
 2. Run `npm start`. It should build without any errors
 3. In a web browser, go to the url: `http://localhost:3000/`
 
 ## To run tests for software 
 
 Use Cypress to run your own written tests
  1. Open two terminals and make sure you are the main project directory
  2. In the first terminal, run `npm start`
  3. In the second terminal, run `npm test`
 
 ## Server Application Terminals 
 `/api` - API route for course grades and GPA data
  * GET - Logs to console response query from URL. This returns response 'Got a GET request from /api'.
  * POST - obtains dining hall name from request body to fetch url. Fetch data json from Dining Hall API and returns the JSON response
  * PUT - returns response 'Got a PUT request at /api'

 
 

 
### How to use Markdown
Markdown is a text notation system used in Discord, Whatsapp and similar to structure pages without writing HTML at all. You'll be using it for your documentation.
* [Markdown guide](https://www.markdownguide.org/cheat-sheet/)
