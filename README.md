# EPL Stats

## Project Description

#### EPL Statistics is a website created by UMD students that contains a variety of datasets related to the English Premiere League (EPL). On this website, you can find data relating to EPL players, matches, and team rosters.

## Target Browsers

#### Desktop browsers

## Link to Heroku Instance

https://blooming-sea-07164.herokuapp.com/

## Developer Manuel

#### See Below

# EPL Stats Developer Manual 


## Install Dependencies 

    npm install

## Run the Server

    npm start
<hr>

# EPL Stats

## Get list of Players

#### Request

`GET /api/players`

    curl http://localhost:3000/api/players

#### Response
    [{
        "player_id":1,
        "club_id":101,
        "club":"Arsenal"
        "shirt_number":51
        "position":"LW"
        "best_player_counter":0
        "first_name":"Alexis"
        "last_name":"Sanchez"
     },
    {
        "player_id":2,
        "club_id":101,
        "club":"Arsenal"
        "shirt_number":69
        "position":"AM"
        "best_player_counter":0
        "first_name":"Mesut"
        "last_name":"Ozil"
     },
     {
        "player_id":3,
        "club_id":101,
        "club":"Arsenal"
        "shirt_number":86
        "position":"GK"
        "best_player_counter":0
        "first_name":"Petr"
        "last_name":"Cech"
    },
    ...
    ]
## Get a Specific Player

#### Request

`GET /api/players/:player_id`

    curl http://localhost:3000/api/players/1

#### Response

    [{
        "player_id":1,
        "club_id":101,
        "club":"Arsenal"
        "shirt_number":51
        "position":"LW"
        "best_player_counter":0
        "first_name":"Alexis"
        "last_name":"Sanchez"
    }]
    


## Create a new Player

#### Request

`POST /api/players`

    curl -d "player_id=462&first_name=Example&last_name=Example&club_id=1&club=Arsenal&shirt_number=5&best_player_counter=0&position=LW" -X POST http://localhost:3000/api/players

#### Response

    {
        "player_id":462,
        "club_id":1,
        "club":"Arsenal"
        "shirt_number":5
        "position":"LW"
        "best_player_counter":0
        "first_name":"Example"
        "last_name":"Example"
    }

## Updating an Existing Player

#### Request

`PUT /api/players`

    curl -d "player_id=462&first_name=Example&last_name=Example&club_id=1&club=Arsenal&shirt_number=5&best_player_counter=0&position=G" -X PUT http://localhost:3000/api/players

#### Response

    Successfully Updated

## Delete an Existing Player

#### Request

`DELETE /api/players/:player_id`

    curl -X DELETE http://localhost:3000/api/players/4

#### Response

    Successfully Deleted
<hr>

# Clubs

## Get list of Clubs

#### Request

`GET /api/clubs`

    curl http://localhost:3000/api/clubs

#### Response
    [{
        "club_id":100,
        "club_name":"AFC Bournemouth",
        "coach_first_name":"Eddie",
        "coach_last_name":"Howe",
        "num_of_players":26
    },
    {
        "club_id":101,
        "club_name":"Arsenal",
        "coach_first_name":"Mikel Arteta",
        "coach_last_name":"Amatriain",
        "num_of_players":31
    },
    {
        "club_id":102,
        "club_name":"Aston Villa",
        "coach_first_name":"Dean",
        "coach_last_name":"Smith",
        "num_of_players":26
    },
        ...
    ]
## Get a Specific Club

#### Request

`GET /api/clubs/:club_id`

    curl http://localhost:3000/api/clubs/100

#### Response

    [{
        "club_id":100,
        "club_name":"AFC Bournemouth",
        "coach_first_name":"Eddie",
        "coach_last_name":"Howe",
        "num_of_players":26
    }]
    
## Updating an Existing Club

#### Request

`PUT /api/clubs`

    curl -d "club_id=100&club_name=AFC Bournemouth&coach_first_name=Eddie&coach_last_name=Howe&num_of_players=27" -X PUT http://localhost:3000/api/clubs

#### Response

    Successfully Updated

## Create a new Club

#### Request

`POST /api/clubs`

    curl -d "club_id=139&club_name=Test&coach_first_name=Example&coach_last_name=Example&num_of_players=26" -X POST http://localhost:3000/api/players

#### Response

    {
        "club_id":139,
        "club_name":"Test",
        "coach_first_name":"Example",
        "coach_last_name":"Example",
        "num_of_players":26
    }

## Delete an Existing Club

#### Request

`DELETE /api/clubs/:club_id`

    curl -X DELETE http://localhost:3000/api/clubs/137

#### Response

    Successfully Deleted    

<hr>

# Player Goals

## Get list of Player Goals

#### Request

`GET /api/player_goals`

    curl http://localhost:3000/api/player_goals

#### Response
    [{
        "player_id":1,
        "first_name":"Alexis",
        "last_name":"Sanchez",
        "goals":25,
        "assists":150
    },
    {
        "player_id":2,
        "first_name":"Mesut",
        "last_name":"Ozil",
        "goals":30,
        "assists":60
    },
        ...
    ]
## Get a Goals for a Specific Player

#### Request

`GET /api/player_goals/:player_id`

    curl http://localhost:3000/api/player_goals/1

#### Response

    [{
        "player_id":1,
        "first_name":"Alexis",
        "last_name":"Sanchez",
        "goals":25,
        "assists":150
    }]
    
## Updating an Player Goals Record

#### Request

`PUT /api/player_goals`

    curl -d "player_id=1&first_name=Alexis&last_name=Sanchez&goals=25&assists=150" -X PUT http://localhost:3000/api/player_goals

#### Response

    Successfully Updated
    ## Delete an Existing Club

## Delete an Player Goals Record

#### Request

`DELETE /api/player_goals/:player_id`

    curl -X DELETE http://localhost:3000/api/clubs/137

#### Response

    Successfully Deleted 
<hr>