# INST 377 GROUP 14 REPOSITORY
## Description
![image](https://user-images.githubusercontent.com/21690041/167336877-6dcffebe-dcd6-4711-831a-00cfa1936b82.png)
Many music applications nowadays track a lot of activity from user streaming. A lot of this is behind the scenes, and is intended to create advertisements to profit from the user. With each song you stream, you leak just a little bit more
of information about yourself, your personality, and your interests. How does one fix such intrusive tracking of user information on such a complex backend? Well, simplifying that backend and displaying it to the user. Our application does exactly that. We have a home screen your music, as well as a database which shows to the user what the backend accomplishes. In this database, you can search, add, delete, or modify your music. That's it, and
that's all you really need. It's that simple.

## Database
Our database `songs` contains information pretaining to artists such as their age, full name and gender. There is also information related to albums, songs, genres and record labels. 

### Relevant Links
* [Heroku](https://young-savannah-96635.herokuapp.com/index.html)

### Browsers/Devices
- 
- 
- 
- 

# Developer Manual

## Installing application and all dependencies
1. Clone the repository through Github Desktop/Terminal
2. Open repository in VSCode Terminal or Terminal application.
3. Type `npm install` into terminal window and then run.
4. Now the application is ready to use

## Running application on a server
1. Open repository in VSCode terminal or Terminal application.
2. Run npm start. There should be no errors.
3. In a web browser, go to url: `http://localhost:3000/.`
## Running software tests
The are no prewritten tests in our application, though other methods can be used (ex. Cypress)

## Server application APIs
> If a route fails to retrieve information, the server will respond with the message "Server Error"

`/api/artist` - API route for artist within our database "songs".

- GET - Gets records from database and returns JSON response.
- POST - Creates new record in the database and sends back "Successful. Record Updated" if valid.

`/api/album/:artist_id` - API route for specific artist.

- GET - Gets record from database and returns JSON response.
- DELETE - Deletes record from the database and sends back "Success. Record Deleted" if valid
- PUT - Updates record in database and sends back "Success. Updated Deleted" if valid

(NEED TO ADD OTHER ROUTES)

## Bugs and Future Development
### Known Bugs:
- N/A

## Future Development:
- Potential implementation of user login/account management for our website
- Expanding functionality of data entry (ex. allow users to upload their own images for albums or songs)


