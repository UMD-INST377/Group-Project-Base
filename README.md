# About
Our Music Database is a UMD student-curated collection of songs across hip-hop, r&b, indie pop, and more. 

This project was created for INST377: Dynamic Web Applications (Fall 2021). 

The front end is written using HTML/CSS and Bulma libraries while the backend operates using Express, Sequelize, and JavaScript.

[Markdown guide](https://www.markdownguide.org/cheat-sheet/)

# REST API example using Sequelize

<table>
  <thead>
    <tr>
      <th>Method</th>
      <th>Action</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>GET</td>
      <td>Retrieves all songs or song by ID.</td>
    </tr>
    <tr>
      <td>POST</td>
      <td>Creates a new song.</td>
    </tr>
    <tr>
      <td>PUT</td>
      <td>Inserts or replaces a song if it already exists.</td>
    </tr>
    <tr>
      <td>DELETE</td>
      <td>Deletes all songs or songs by ID.</td>
    </tr>
  </tbody>
</table>

## Install Dependencies 

    npm install

## Run the Server

    npm start
<hr>

# Songs

## Get list of Songs

#### Request

`GET /songs_project'`

    curl http://localhost:3000/api/songs_project

#### Response
   [{
        "song_id": 1,
        "song_name": "A Gangsta's Pain",
        "album_name": "A Gangsta's Pain",
        "first_name": "Moneybagg",
        "last_name": "Yo",
        "ratings": 3,
        "description": "This rating is 3 out of 5 stars",
        "duration": "01:53:00"
    },
    {
        "song_id": 2,
        "song_name": "Holy",
        "album_name": "Justice",
        "first_name": "Justin",
        "last_name": "Bieber",
        "ratings": 4,
        "description": "This rating is 4 out of 5 stars",
        "duration": "03:32:00"
    },
    {
        "song_id": 3,
        "song_name": "After Hours",
        "album_name": "After Hours",
        "first_name": "The",
        "last_name": "Weeknd",
        "ratings": 4,
        "description": "This rating is 4 out of 5 stars",
        "duration": "06:01:00"
    }]
## Get a Specific Song

#### Request

`GET /songs_project/:song_id`

    curl http://localhost:3000/api/songs_project/1

#### Response

    [{
        "song_id": 2,
        "song_name": "Holy",
        "album_name": "Justice",
        "first_name": "Justin",
        "last_Name": "Bieber",
        "ratings": 4,
        "description": "This rating is 4 out of 5 stars",
        "duration": "03:32:00"
    }]
    
## Create a new Song

#### Request

`POST /songs_project`

    curl -d "hall_id=4&hall_name=Example&hall_location=Hornbake" -X POST http://localhost:3000/api/dining

#### Response

    {
        "hall_id":"4",
        "hall_name":"Example",
        "hall_location":"Hornbake"
    }

## Updating an Existing Song

#### Request

`PUT /songs_project`

    curl -d "hall_id=4&hall_name=Example1&hall_location=Stamp" -X PUT http://localhost:3000/api/dining

#### Response

    Successfully Updated

## Delete an Existing Song Entry

#### Request

`DELETE /songs_project/:song_id`

    curl -X DELETE http://localhost:3000/api/songs_project/1

#### Response

    Successfully Deleted
    
# Authors
Daniel Cutaneo, Walesia Robinson II, Miranda Vo, Pengtong Yang


