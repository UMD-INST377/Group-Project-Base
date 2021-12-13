# NBA Player Database
This is Group 1's final project for INST377. Our group decided to use a database
containing information about NBA players. The goal of the website is to inform users about different player statistics. There is also opportunities for people to update the information on the website in order to provide more accurate and up to date information

## Link To Site:
https://secure-badlands-63929.herokuapp.com

## Link to Developer Manual
* [Developer Manual](https://github.com/skanner1999/Group1-Final-Project-Base##developer-manual)

## Target Browsers
* MacBook Pro 14"
* iPhone 11 Pro


## Deveoloper Manual
### Getting Started
#### Install Dependencies
`npm install`
#### Run the Server
`npm start`

### REST API
| Method | Action |
| ------ | ------ |
| GET | | Retrieves resources |
| POST | | Creates resources |
| PUT | | Changes and/or replaces resources |
| DELETE | | Deletes resources |

## NBA Players Database
### Get list of NBA Players
`GET /api/nba-players`
`curl http://localhost:3000/api/nba-players`

### Get a specific NBA Player
`GET /api/nba-players/:player_name`
`curl http://localhost:3000/api/nba-players/"ID"`

### Create a NBA Player
`POST /api/nba-players`
`curl -d "player_name=X&ppg=EX&assists=X&team=X" -X POST http://localhost:3000/api/nba-players`

### Update a NBA Player's Stats
`PUT /api/nba-players`
`curl -d "player_name=X&ppg=EX&assists=X&team=X" -X PUT http://localhost:3000/api/nba-players`

### Delete an Exisiting NBA Player
`DELETE /api/nba-players/:player_name`
`curl -X DELETE http://localhost:3000/api/nba-players/X`

