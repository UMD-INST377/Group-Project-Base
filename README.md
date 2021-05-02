
https://blooming-sea-07164.herokuapp.com/

# EPL Developer Manual 
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
    


## Create a new Players

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

# Meals

## Get list of Meals

#### Request

`GET /api/meals`

    curl http://localhost:3000/api/meals

#### Response
    [{
        "meal_id":1,
        "meal_name":"Scrambled Eggs",
        "meal_category":"B"
    },
    {
        "meal_id":2,
        "meal_name":"French Toast",
        "meal_category":"B"
    },
    {
        "meal_id":3,
        "meal_name":"Pancakes",
        "meal_category":"B"
    },
        ...
    ]
## Get a Specific Meal

#### Request

`GET /api/meals/:meal_id`

    curl http://localhost:3000/api/meals/1

#### Response

    [{
        "meal_id":1,
        "meal_name":"Scrambled Eggs",
        "meal_category":"B"
    }]
    
## Updating an Existing Meal

#### Request

`PUT /api/meals`

    curl -d "meal_id=1&meal_name=Scrambled Eggs&meal_category=L" -X PUT http://localhost:3000/api/meal

#### Response

    Successfully Updated

<hr>

# Macros

## Get list of Macros

#### Request

`GET /api/macros`

    curl http://localhost:3000/api/macros

#### Response
    [{
        "macro_id":1,
        "calories":218,
        "serving_size":20,
        "cholesterol":544,
        "sodium":206,
        "carbs":1,
        "protein":17,
        "meal_id":1,
        "fat":16
    },
    {
        "macro_id":2,
        "calories":371,
        "serving_size":1,
        "cholesterol":0,
        "sodium":209,
        "carbs":10,
        "protein":5,
        "meal_id":2,
        "fat":10
    },
        ...
    ]
## Get a Macros for a Specific Meal

#### Request

`GET /api/macros/:meal_id`

    curl http://localhost:3000/api/macros/1

#### Response

    [{
        "macro_id":1,
        "calories":218,
        "serving_size":20,
        "cholesterol":544,
        "sodium":206,
        "carbs":1,
        "protein":17,
        "meal_id":1,
        "fat":16
    }]
    
## Updating an Existing Macro

#### Request

`PUT /api/macros`

    curl -d "macro_id=1&calories=318&serving_size=20&cholesterol=544&sodium=206&carbs=1&protein=17&meal_id=1&fat=16" -X PUT http://localhost:3000/api/macros

#### Response

    Successfully Updated
<hr>

# Custom Client SQL

#### Request

`GET /api/custom`

    curl --location --request GET 'http://localhost:3000/api/custom' \
    --header 'Content-Type: application/x-www-form-urlencoded' \
    --data-urlencode 'query=SELECT 
    `DiningHall_Tracker`.`Meals`.`meal_name` AS `meal_name`,
        `DiningHall_Tracker`.`Macros`.`calories` AS `calories`,
        `DiningHall_Tracker`.`Macros`.`carbs` AS `carbs`,
        `DiningHall_Tracker`.`Macros`.`sodium` AS `sodium`,
        `DiningHall_Tracker`.`Macros`.`protein` AS `protein`,
        `DiningHall_Tracker`.`Macros`.`fat` AS `fat`,
        `DiningHall_Tracker`.`Macros`.`cholesterol` AS `cholesterol`
    FROM
        (`DiningHall_Tracker`.`Meals`
        JOIN `DiningHall_Tracker`.`Macros`)
    WHERE
        (`DiningHall_Tracker`.`Meals`.`meal_id` = `DiningHall_Tracker`.`Macros`.`meal_id`)'   

#### Response
    [{
        "meal_name": "Scrambled Eggs",
        "calories": 218,
        "carbs": 1,
        "sodium": 206,
        "protein": 17,
        "fat": 16,
        "cholesterol": 544
    },
    {
        "meal_name": "French Toast",
        "calories": 371,
        "carbs": 10,
        "sodium": 209,
        "protein": 5,
        "fat": 10,
        "cholesterol": 0
    },
    {
        "meal_name": "Pancakes",
        "calories": 430,
        "carbs": 15,
        "sodium": 111,
        "protein": 4,
        "fat": 15,
        "cholesterol": 30
    },
        ...
    ]