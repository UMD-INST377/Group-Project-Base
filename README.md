# Literature & Art Corner Database App

## Description
The Literature & Art Corner Database App compiles recommendations for books, audiobooks, poetry, films, documentaries, podcasts, music, and articles related to the Asian American experience. When searching for media of many different types, we noticed a lack of representation for Asian American narratives and experiences. So, we created a place to share them. Here, visitors can search for literature and media related to their interests, read featured reviews, and click on a link to visit the 1882 Foundation's website. In the future, they will be able to give their personal suggestions for the database.

## Link to Website
[https://floating-waters-77392.herokuapp.com/index.html](https://floating-waters-77392.herokuapp.com/index.html)

## Target Browsers
- Desktop
- Laptop
- IPhone 8

## Links
[Developer Manual](https://github.com/littledumpleng/Group7-Final-INST377SP2021#developer-manual)

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
`/media` -API route for showing the different types of media. 
- GET -Returns the data and displays it.
- POST -Creates new content in the database.
- PUT -Requests can be made for new media.

`/creators` - API route for the different type of creators. 
- GET -Returns the data and displays it.
- POST -Posts new creater information in the database.
- PUT -Requests can be made for new creator details.

`/genres` - API route for the different type of genres.
- GET -Returns the data and displays it.
- POST -Posts new genre information in the database.
- PUT -Requests can be made for new genre details.

`/backgrounds` - API route for the different type of backgrounds.
- GET -Returns the data and displays it.
- POST -Posts new background information in the database.
- PUT -Requests can be made for new background details.

`/themes` - API route for the different type of themes.
- GET -Returns the data and displays it.
- POST -Posts new theme information in the database.
- PUT -Requests can be made for new theme details.

Note: Although we built API routes for deleting and updating records, this functionality will not be available to the average user, so it is not in scripts.js. It is available for the 1882 Foundation to use if they would like to implement it in the future. 

# Known Bugs and Future Development

## Bugs
- Users are currently able to directly alter the database. The make a suggestion needs to have a security blanket where only Admins can enter or delete content. 

## Future Development
- The “Make a Suggestion” page will be reworked so that user suggestions do not directly alter the database. Instead, they will be sent to a restricted webpage for 1882 Foundation admin to review. Admin will be able to enter/edit/delete database content through this page.
- Redesign the database so that it does not rely on many to many relationships. 
- After edits, will link the database app to the 1882 Foundation’s website.
