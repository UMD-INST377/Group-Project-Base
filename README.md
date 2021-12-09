# INST377 - Spotify Playlist Refresh

## Description
As its changed its user interface, Spotify has made it more inconvenient to access . Our solution is a mockup of Spotify's playlist page 

## Heroku Link
https://group10-final-inst377sp2021.herokuapp.com/

## Target Browsers
- Macbook Pro 13"
- iPhone X/XS

## Manuals
[Developer Manual](https://github.com/Nelson-Menro/Group10-Final-INST377SP2021/#developer-manual)

# Developer Manual
## How to Install
1. Clone this repository.
2. Open repository in terminal of choice.
3. Run ```npm install``` in terminal.

## How to Run
NOTE: These steps assume previous installation steps have been completed.
1. Run ```npm start``` in terminal.
2. Navigate to http://localhost:3000/ in browser.

## APIS
### General Routes
```/songs``` - API route to retrieve song names from database.
- GET - Retrieves songs table from database.
- PUT - Edits specified row in songs table.
- POST - Edits specified row in songs table.
- DELETE - Deletes specified row in songs table.

```/albums``` - API route to retrieve album names from database.
- GET - Retrieves albums table from database.
- PUT - Edits specified row in albums table.
- POST - Edits specified row in albums table.
- DELETE - Deletes specified row in albums table.

```/artists``` - API route to retrieve artist names from database.
- GET - Retrieves artists table from database.
- PUT - Edits specified row in artists table.
- POST - Edits specified row in artists table.
- DELETE - Deletes specified row in artists table.

```/playlists``` - API route to retrieve playlist names from database.
- GET - Retrieves playlists table from database.
- PUT - Edits specified row in playlists table.
- POST - Edits specified row in playlists table.
- DELETE - Deletes specified row in playlists table.

### Top Chart Routes
```/USchart``` - API route to retrieve songs in US Top 50.
- GET - Retrieves US Top 50 table from database.
- PUT - Returns response 'touched USchart route with PUT'.
- POST - Returns response 'touched USchart route with POST'.
- DELETE - Returns response 'touched USchart route with DELETE'.

```/globalCharts``` - API route to retrieve songs in Global Top 50.
- GET - Retrieves Global Top 50 table from database.
- PUT - Returns response 'touched globalCharts route with PUT'.
- POST - Returns response 'touched globalCharts route with POST'.
- DELETE - Returns response 'touched globalCharts route with DELETE'.

```/podcastCharts``` - API route to retrieve Top 50 podcasts.
- GET - Retrieves Podcast Top 50 table from database.
- PUT - Returns response 'touched podcastCharts route with PUT'.
- POST - Returns response 'touched podcastCharts route with POST'.
- DELETE - Returns response 'touched podcastCharts route with DELETE'.

### Genre Routes
```/popSongs``` - API route to retrieve pop songs from songs table.
- GET - Retrieves pop songs from songs table.
- PUT - Edits specified row in songs table.
- POST - Edits specified row in songs table.
- DELETE - Deletes specified row in songs table.

```/rapSongs``` - API route to retreive hip-hop songs from songs table.
- GET - Retrieves hip-hop songs from songs table.
- PUT - Edits specified row in songs table.
- POST - Edits specified row in songs table.
- DELETE - Deletes specified row in songs table.

```/holidaySongs``` - API route to retreive holiday songs from songs table.
- GET - Retrieves holiday songs from songs table.
- PUT - Edits specified row in songs table.
- POST - Edits specified row in songs table.
- DELETE - Deletes specified row in songs table.

### Top Artists Endpoints
Retrieving songs from the top artists according to the database.
```/arianaSongs``` - API route to retrieve Ariana Grande's songs from the songs table.
- GET - Retrieves Ariana Grande's songs from songs table.
- PUT - Edits specified row in songs table.
- POST - Edits specified row in songs table.
- DELETE - Deletes specified row in songs table.

```/badBunnySongs``` - API route to retrieve Bad Bunny's songs from the songs table.
- GET - Retrieves Bad Bunny's songs from songs table.
- PUT - Edits specified row in songs table.
- POST - Edits specified row in songs table.
- DELETE - Deletes specified row in songs table.

```/btsSongs``` - API route to retrieve BTS's songs from the songs table.
- GET - Retrieves BTS's songs from songs table.
- PUT - Edits specified row in songs table.
- POST - Edits specified row in songs table.
- DELETE - Deletes specified row in songs table.

## Known Bugs and Future Development
### Bugs
- Deleting a song sometimes requires the page to be refreshed
### Future development
- Improving functionality, most notably playlist creation
- Polishing front-end designs
