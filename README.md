# Parkz App README

## Project Description
Our website will help anyone who is traveling to National Parks in the US and is looking to view or leave reviews for various places and attractions

## Target Browsers
This website has been developed for modern desktop and mobile web clients. The styling for mobile versions is currently unfinished, so attempts to use the application should use desktop web browsers if possible.

## Link
https://group2-project377.herokuapp.com/

# Developer Manual

## Installation and Usage
To use this website, fork the code to a local repository and install dependancies using: `npm install` after Node.js has been installed
<br>
Start the server using: `npm start`
<br>
Access the site by navigating to `localhost:3000`

## Endpoint Doc

<hr>

Below are details of the API contained within this piece of labwork.

<hr>

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

# Parks

## Get list of Parks

#### Request

`GET /api/race`

    curl http://localhost:3000/api/race

#### Response
    {
    "parks": [
        {
            "park_id": 1,
            "park_name": "Assateague Island",
            "trails": "none",
            "park_lat": 37.901984,
            "park_long": 75.3526373
        },
        {
            "park_id": 2,
            "park_name": "National Mall",
            "trails": "none",
            "park_lat": 38.887161,
            "park_long": 77.037331
        },
        {
            "park_id": 3,
            "park_name": "Grand Canyon",
            "trails": null,
            "park_lat": 36.056595,
            "park_long": 112.125092
        }
    ]
}

## Update park information

#### Request

`PUT /api/race/`
    curl -d "park_id=4&park_name=Example1&trails=trail&park_lat=0&park_long=1" -X PUT http://localhost:3000/api/race/

#### Response
    Successfully updated

# Reviews

## Get list of Reviews

#### Request

`GET /api/race/reviews`

    curl http://localhost:3000/api/race/reviews

#### Response
    {
    "reviews": [
        {
            "review_id": 1,
            "park_id": 1,
            "title": "Great trails",
            "author": "Race",
            "description": "super fun "
        },
        {
            "review_id": 2,
            "park_id": 2,
            "title": "Great trails",
            "author": "Race2",
            "description": "super fun "
        }
    ]
}

## Get Reviews of a Park

#### Request

`GET /api/race/reviews/:park_id`

    curl http://localhost:3000/api/race/reviews/1

#### Response
   [
    {
        "review_id": 1,
        "park_id": 1,
        "title": "Great trails",
        "author": "Race",
        "description": "super fun "
    }
   ]

## Create a new Review

#### Request

`POST /api/race/reviews`

    curl -d "park_id=1&title=Great Trails&author=Race&description=Trails were fun" -X POST http://localhost:3000/api/race/reviews


#### Response
   [
    {
        "review_id": 1,
        "park_id": 1,
        "title": "Great trails",
        "author": "Race",
        "description": "Trails were fun"
    }
]

## Delete a Review

#### Request

`DELETE /api/race/reviews:id`

    curl -X DELETE http://localhost:3000/api/race/reviews/1


#### Response
   Successfully deleted