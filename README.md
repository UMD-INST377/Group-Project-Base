# About Us

Our Music Database is a dynamic collection of trending and popular songs curated by the students at the University of Maryland. Our design allows users to add their own songs, and delete or edit existing songs, offering a ‘by the listeners, for the listeners’ experience allowing collaboration beyond the restrictions of a paid membership to popular streaming services like Apple Music, Spotify, and Pandora.

This project was created for INST377: Dynamic Web Applications (Fall 2021).

The front end is written using HTML/CSS, Boostrap, and Bulma libraries while the backend operates using Express, Sequelize, and Node.js.

[Markdown guide] (https://www.markdownguide.org/cheat-sheet/)

## Link to Website
https://group22inst377.herokuapp.com/

## Target Browsers
Our application is designed to support all modern and up-to-date browsers.
The following list is inclusive, but not exhaustive.

Desktop:
* Google Chrome 90+
* Microsoft Edge 96+
* macOS Safari 11.0+

Mobile:
* iOS Safari 15+
* Chrome 90+ for iOS and Android

# Developer Manual

## REST API example using Sequelize

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

## Installing Application and Dependencies

1. First, clone our repository in Github Desktop.
2. Open repositiory in VSCode, Atom, or IDE of choice.
3. type: `npm install`

## Running the application
1. Open repository in chosen IDE.
2. Run `npm start`
3. Type url: `http://localhost:3000/` in your browser.

<hr>

## Using our Songs API with Postman

### Get list of all songs

#### Request

`GET /songs_project`

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

### Get a specific song

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

### Creating a New Song

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

### Updating an Existing Song

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

### Delete an Existing Song Entry

#### Request

`DELETE /songs_project/:song_id`

    * api_url http://localhost:3000/api/songs_project/1
    * select DELETE
    * click SEND

##### Example input: 

  DELETE: localhost:3000/api/songs_project/35

#### Response

    Successfully Deleted.
    
## Known Bugs and Future Plans

The Contact Us form is still under construction. Its responses are not being monitored as the submit button only intiates a page reload. 

As of 12 December 2021, there are no known bugs. <br> - If you encounter a bug in our applications, please let us know by opening an Issue on GitHub and leaving a clear description of what the bug is, how to reproduce the behavior, and any applicable screenshots that could help explain your problem. Thank you!
    
## Acknowledgements

Special thanks to Professor Alex, and all of the AMPs, and TAs of the INST377: Dynamic Web Applications instructional team. 
Your support, encouragement, and office hours this term do not go unnoticed.
We would also like to recognize the University of Maryland's iSchool curriculum for showing us how to bring diversity, equity and inclusion to technology and innovation. 

## Authors

Daniel Cutaneo, Walesia Robinson II, Miranda Vo, Pengtong Yang
