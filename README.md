| Method | Action |
| ----------- | ----------- |
| GET | Retrieves resources |
| POST | Creates resources |
| PUT | Changes and/or replaces resources or collections |
| DELETE | Deletes resources |

## Install Dependencies
```
npm install
```

## Run the Server
```
npm start
```

# Basketball
## Get list of teams
### Request
```
router.get("/basketball/teams", async (req, res) => {
  try {
    const teams = await db.Teams.findAll();
    res.json(teams);
  } catch (e) {
    res.send(e);
  }
});
```
### Response
```
An array with JSON onjects of each team.
JSON Object Names:
{'team_id', 'team_name', 'conference', 'division', 'coach', 'general_manager', 'arena_id'}
```
## Get list of players
### Request
```
router.get("/basketball/players", async (req, res) => {
  try {
    const players = await db.Players.findAll();
    res.json(players);
  } catch (e) {
    res.send(e);
  }
});
```
### Response
```
An array with JSON onjects of each player.
JSON Object Names:
{'player_id', 'first_name', 'last_name', 'height', 'weight', 'position', 'college', 'year_drafted', 'team_id'}
```
## Get list of arenas
### Request
```
router.get('/basketball/arenas', async (req, res) => {
  try {
    const arenas = await db.Arenas.findAll();
    res.json(arenas);
  } catch (e) {
    res.send(e);
  }
});
```
### Response
```
An array with JSON onjects of each arena.
JSON Object Names:
{'arena_id', 'name', 'city', 'state', 'country'}
```
## Update a player with a PUT request
### Request
```
router.put('/basketball/teams', async (req, res) => {
  try {
    console.log('touched /basketball with PUT');
    await db.Players.update(
      {
        first_name: req.body.first_name,
        last_name: req.body.last_name,
        position: req.body.position,
        year_drafted: req.body.year_drafted,
      },
      {
        where: {
          player_id: req.body.player_id,
        },
      }
    );
    console.log('Player is Updated!');
    res.send('Successfully updated player');
  } catch (e) {
    console.log(e);
    res.error('Something went wrong on the server');
  }
});
```
### Successful Response
```
'successfully updated player'
```
### Fail Response
```
'Something went wrong with the server'
```
## Delete a player with a DELETE request
### Request
```
router.delete("/basketball", async (req, res) => {
  try {
    console.log("touched /basketball with DELETE");
    res.json({ Method: "DELETE", Endpoint: "/basketball" });
  } catch (e) {
    console.error(e);
    res.error("Something went wrong on the server");
  }
});
```
### Fail Response
```
"Something went wrong with the server"
```
