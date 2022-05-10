# Songify

## Project Description
This app allows users to edit songs, artists, albums, and genres to their playlist. By creating a Username and playlist name, this app keeps track of when a song is added or deleted to the database and by whom. It also displays relevant data such as top 10 longest songs, top 10 largest albums, and top 10 artists with the most albums. Finally we have also implimented a search bar that allows you to search by song name, artist, or album name.

![Alt hompage](client/images/homepage.png)
## Link
https://inst377group15.herokuapp.com/

## Target Browsers
The target brower for this application would be iOS. Specifically it can be used on browers such as Google Chrome or Safari. It can be accessed through the web or on a mobile device to allow for users to interact with the application easily. 
## Endpoint Doc 
### Server application APIs
```/artists``` - API route for artist data.
* GET - Logs to console response query from URL. returns a promise object
* POST - Obtains artist name from request body to fetch url. Fetch data from req.body and returns JSON response to artists table
* Delete - Obtains artist name from request body to fetch url. fetch data req.body and deletes item from artists table and returns JSON response

```/genres``` - API route for genres data.
* GET - Logs to console response query from URL. returns a promise object
* POST - Obtains genre name from request body to fetch url. Fetch data from req.body and returns JSON response to genres table
* Delete - Obtains genre name from request body to fetch url. fetch data req.body and deletes item from genres table and returns JSON response

```/playlists``` - API route for playlists data.
* GET - Logs to console response query (username and playlist name) from URL. returns a promise object
* POST - Obtains playlist name from request body to fetch url. Fetch data from req.body and returns JSON response to playlists table
* Delete - Obtains playlist name from request body to fetch url. fetch data req.body and deletes item from playlists table and returns JSON response

```/albums``` - API route for albums data.
* GET - Logs to console response query from URL. returns a promise object
* POST - Obtains album name from request body to fetch url. Fetch data from req.body and returns JSON response to albums table
* Delete - Obtains albums name from request body to fetch url. fetch data req.body and deletes item from albums table and returns JSON response

```/songs``` - API route for songs data.
* GET - Logs to console response query from URL. returns a promise object
* POST - Obtains song name from request body to fetch url. Fetch data from req.body and returns JSON response to songs table
* Delete - Obtains song name from request body to fetch url. fetch data req.body and deletes item from songs table and returns JSON response

```/artist_albums``` - API route for artist_albums data.
* GET - Logs to console response query from URL. returns a promise object
* POST - Sets artist_albums linking table ids to the new ids from the added values of albums post and artist post
* Delete - Obtains artist name from request body to fetch url. fetch data req.body and deletes item from artist_albums table and returns JSON response

```/album_songs``` - API route for album songs data.
* GET - Logs to console response query from URL. returns a promise object
* POST - Sets album_songs linking table ids to the new ids from the added values of albums post and songs post
* Delete - Obtains artist name from request body to fetch url. fetch data req.body and deletes item from album_songs table and returns JSON response

```/artist_songs``` - API route for artist ssongs data.
* GET - Logs to console response query from URL. returns a promise object
* POST - Sets artist_songs linking table ids to the new ids from the added values of artists post and songs post
* Delete - Obtains artist name from request body to fetch url. fetch data req.body and deletes item from artist_songs table and returns JSON response

```/song_genres``` - API route for song genres data.
* GET - Logs to console response query from URL. returns a promise object
* POST - Sets song_genre linking table ids to the new ids from the added values of genres post and songs post
* Delete - Obtains artist name from request body to fetch url. fetch data req.body and deletes item from song_genres table and returns JSON response

```/playlist_songs``` - API route for playlist songs data.
* GET - Logs to console response query from URL. returns a promise object
* POST - Obtains username and playlist name from request body to fetch url. Fetch data from req.body and returns JSON response to playlist_songs table
* Delete - Obtains artist name from request body to fetch url. fetch data req.body and deletes item from playlist_songs table and returns JSON response




## Developer Manual
link or in github similar to example
https://github.com/Berniez88/finalproject377:

The audience of this document is future developers who will take over your system.
They know technical terms and have general knowledge about web applications, but do not have knowledge about your system design.
You need to provide a technical document so that future developers can start setting up the application on their local machines, and keep working on the system development after you leave the team.
Your Developer Manual covers:
How to install your application and all dependencies
How to run your application on a server
How to run any tests you have written for your software
The API for your server application - all GET, POST, PUT, etc endpoints, and what they each do
This documentation should be written by the people writing those endpoints
A clear set of expectations around known bugs and a road-map for future development.
Documentation needs to be written in Markdown (MD) files, nicely formatted (they are legible on Github in a way PDFs are not on Canvas)
Documentation should be included to each team’s final code submission
