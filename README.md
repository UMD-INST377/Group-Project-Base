# About

Our Music Database is a UMD student-curated collection of songs across hip-hop, r&b, indie pop, and more.

This project was created for INST377: Dynamic Web Applications (Fall 2021).

The front end is written using HTML/CSS and Bulma libraries while the backend operates using Express, Sequelize, and JavaScript.

[Markdown guide] (https://www.markdownguide.org/cheat-sheet/)

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
      <td>Updates or replaces a song if it already exists.</td>
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

# Using our Songs API with Postman

## Get list of all songs

#### Request

`GET /songs_project'`

    * api_url http://localhost:3000/api/songs_project
    * select GET
    * click SEND


#### Response

     [{
        "song_id": 1,
        "song_name": "Colours",
        "album_name": "Single",
        "first_name": "Mat",
        "last_name": "Zo",
        "ratings": 5
        },
      {
        "song_id": 2,
        "song_name": "Holy",
        "album_name": "Justice",
        "first_name": "Justin",
        "last_name": "Bieber",
        "ratings": 4
        },
      {
        "song_id": 3,
        "song_name": "After Hours",
        "album_name": "After Hours",
        "first_name": "The",
        "last_name": "Weeknd",
        "ratings": 4
      },]

## Get a specific song

#### Request

`GET /songs_project/:song_id`

##### Example input:

    * api_url http://localhost:3000/api/songs_project/2
    * select GET
    * click SEND

#### Response

      {
        "song_id": 2,
        "song_name": "Holy",
        "album_name": "Justice",
        "first_name": "Justin",
        "last_Name": "Bieber",
        "ratings": 4
      }

## Creating a New Song

#### Request

`POST /songs_project`

    * api_url http://localhost:3000/api/songs_project
    * select POST
    * under the BODY tab, select the RAW radio button
    * set drop down option TO JSON

##### Example input:

    {
        "song_id": 35,
        "song_name": "Life Is Good",
        "album_name": "High Off Life",
        "first_name": "Future",
        "last_Name": " ",
        "ratings": "4"
      }

#### Response

  {
      "song_id": 35,
      "song_name": "Life Is Good",
      "album_name": "High Off Life",
      "first_name": "Future",
      "last_Name": " ",
      "ratings": "4"
    }

## Updating an Existing Song

#### Request

`PUT /songs_project/:song_id`

    * api_url http://localhost:3000/api/songs_project/1
    * select PUT
    * under the BODY tab, select the RAW radio button
    * set drop down option TO JSON

##### Example input:

  {
      "song_id": 1,
      "song_name": "Shivers",
      "album_name": "=",
      "first_name": "Ed",
      "last_name": "Sheeran",
      "ratings": 5
    }

#### Response

    Songs database was successfully updated.

## Delete an Existing Song Entry

#### Request

`DELETE /songs_project/:song_id`

    * api_url http://localhost:3000/api/songs_project/1
    * select DELETE
    * click SEND

##### Example input: 

  DELETE: localhost:3000/api/songs_project/35

#### Response

    Successfully Deleted.

# Authors

Daniel Cutaneo, Walesia Robinson II, Miranda Vo, Pengtong Yang
