# Group 19 - UMD Plant Finder

## Heroku:
Link: https://inst377-group19-final-project.herokuapp.com/

### Description
This project was designed to function on any modern browser.
As of now the functionality of our app includes searching for plants in regions on a map of UMD, adding a plant to a location, and searching through plants included in the database.

### Developer Manual
Endpoints:
- */api/map* is an endpoint that connects to a join-table of plant ids and locations, the get method joins it with the plant table to show details. The delete and post method take 2 parameters in their body: location_code and plant_id. The put method updates with four parameters in the body, the code and id to be replaced and their replacements.
- */api/map/:id* This endpoint takes an optional id which gets a single record from the data that loads in from the /api/map get method

Known bugs:
- some unused endpoints have errors in syntax that should be fixed if further use is desired
- inconsistent user experience in search process
- new entry and delete should require authorization