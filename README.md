# Spotify Playlists

## Description
Using Spotify may come as a frustration to new users by how complex the application may be.
The goal of this website is to make the process of accessing playlists to update them at your
whim easier than it is to do through Spotify. Premade playlists cannot be edited or changed
to ones liking, this website will allow users the opportunity to do so. 

## Link to Website
[https://hidden-ridge-25047.herokuapp.com/](https://hidden-ridge-25047.herokuapp.com/)

## Target Browsers
* iPhone
* Android
* Desktop/Laptop

## Links
* [Developer Manual](https://github.com/mlima01/Group20-Project-Base#developer-manual)

# Developer Manual
## How to install application and all dependencies
1. Clone this repository through Github Desktop or through Terminal.
2. Open repository in VSCode Terminal or Terminal application.
3. type ```npm install``` into terminal window and run.
4. The application should now be set to use.

## How to run application on a server
1. Open repository in VSCode terminal or Terminal application.
2. Run ```npm start```. There should be no errors.
3. In a web browser, go to url: ```http://localhost:3000/```.

## To run tests for software
There are no prewritten tests in the source repository, but you can use Cypress to run your own written tests.
1. Open two terminals and make sure you are in the main project directory
2. In the first terminal, run ```npm start```.
3. In the second terminal run ```npm test```.

## Server application APIs
```/api``` - API route for welcoming users to API.
* GET - Returns response message 'Welcome to the spotify playlists API'.

```/songs``` - API route for songs.
* GET - Returns api for songs, and can show specific api based on song id.
* POST - obtains songs table info and creates it within route. 
* PUT - updates items in songs route.

```/playlists``` - API route for playlists.
* GET - Returns api for songs, and can show specific api based on playlist id.
* POST - obtains playlists table info and creates it within route. 
* PUT - updates items in playlists route.

```/playlistDetails``` - API route for playlist details.
* GET - Returns api for songs, and can show specific api based on playlist detail id.
* POST - obtains playlist details table info and creates it within route. 
* PUT - updates items in playlist details route.

```/wholePlaylist``` - API route for a combined table containing info used.
* GET - Returns api for playlists, songs, and song details combined.

## Known Bugs 
### Bugs:
- There may be null values in the data that may need to be handled. 

### Future Development: 
* Handle null values.
* Allow users to have more functionality other than accessing playlist information.
* Creating a playlist details page that is more specific to playlist chosen.
* Displaying statistics and visuals on song properties and artists.
* Adding more playlists to analyze.



