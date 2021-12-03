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

# Dining Hall

## Get list of Dining Halls

#### Request

`GET /api/dining`

    curl http://localhost:3000/api/dining

#### Response
    [{
            "hall_id":1,
            "hall_name":"North Campus Dining Hall",
            "hall_location":"North Campus"
        },
        {
            "hall_id":2,
            "hall_name":"South Campus Dining Hall",
            "hall_location":"South Campus"
        },
        {
            "hall_id":3,
            "hall_name":"251 North Dining Hall",
            "hall_location":"North Campus"
    }]
## Get a Specific Dining Hall

#### Request

`GET /api/dining/:hall_id`

    curl http://localhost:3000/api/dining/1

#### Response

    [{
        "hall_id":1,
        "hall_name":"North Campus Dining Hall",
        "hall_location":"North Campus"
    }]
    


## Create a new Dining Hall

#### Request

`POST /api/dining`

    curl -d "hall_id=4&hall_name=Example&hall_location=Hornbake" -X POST http://localhost:3000/api/dining

#### Response

    {
        "hall_id":"4",
        "hall_name":"Example",
        "hall_location":"Hornbake"
    }

## Updating an Existing Dining Hall

#### Request

`PUT /api/dining`

    curl -d "hall_id=4&hall_name=Example1&hall_location=Stamp" -X PUT http://localhost:3000/api/dining

#### Response

    Successfully Updated

## Delete an Existing Dining Hall

#### Request

`DELETE /api/dining/:hall_id`

    curl -X DELETE http://localhost:3000/api/dining/4

#### Response

    Successfully Deleted
<hr>

# Authors
Daniel Cutaneo, Walesia Robinson II, Miranda Vo, Pengtong Yang