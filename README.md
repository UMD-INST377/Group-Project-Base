# This is your readme
You are required to fill it in with documentation similar to that found in the Sequelize example for the course as part of your final project.

### How to use Markdown
Markdown is a text notation system used in Discord, Whatsapp and similar to structure pages without writing HTML at all. You'll be using it for your documentation.

* [Markdown guide](https://www.markdownguide.org/cheat-sheet/)# REST API example using Sequelize
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
      <td>Retrieves resources</td>
    </tr>
    <tr>
      <td>POST</td>
      <td>Creates resources</td>
    </tr>
    <tr>
      <td>PUT</td>
      <td>Changes and/or replaces resources or collections</td>
    </tr>
    <tr>
      <td>DELETE</td>
      <td>Deletes resources</td>
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

## Delete an Existing Song Entry

#### Request

`DELETE /songs_project/:song_id`

    curl -X DELETE http://localhost:3000/api/songs_project/1

#### Response

    Successfully Deleted
<hr>