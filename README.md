## Description
When searching for meida of many different types, we felt as if there is a lack of representation for Asian American narratives and experiences. We wanted a place where we could share the different types and styles of Asian american works. Here users can explore the different media in an easy to use database. They can also leave recommendations, and go to the 1882 foundation website. 

## Link to Website
[https://floating-waters-77392.herokuapp.com/index.html](https://floating-waters-77392.herokuapp.com/index.html)

## Target Browsers
- Desktop
- Laptop
- IPhone 8

## Links

# Developer Manual

## How to install application and all dependencies
1. Clone this repository through Github Desktop or through Terminal.
2. Open repository in VSCode Terminal or Terminal application.
3. type `npm install` into terminal window and run.
4. The application should now be set to use.

## How to run application on a server
1. Open repository in VSCode terminal or Terminal application.
2. Run `npm start`. There should be no errors.
3. In a web browser, go to url: `http://localhost:3000/`.

## To run tests for software
1. Open two terminals and make sure you are in the main project directory
2. In the first terminal, run `npm start`.
3. In the second terminal run `npm test`.

## Server application APIs
/apiRoutes - API route for course grades and GPA data. 
# Known Bugs and Future Development
## Bugs
- Users are currently able to directly alter the database. The make a suggestion needs to have a security blanket where only Admins can enter or delete content. 
## Future Development
- The “Make a Suggestion” page will be reworked so that user suggestions do not directly alter the database. Instead, they will be sent to a restricted webpage for 1882 Foundation admin to review. Admin will be able to enter/edit/delete database content through this page.
- Redesign the database so that it does not rely on many to many relationships. 
- After edits, will link the database app to the 1882 Foundation’s website.
