# This is your readme
You are required to fill it in with documentation similar to that found in the Sequelize example for the course as part of your final project.

### How to use Markdown
Markdown is a text notation system used in Discord, Whatsapp and similar to structure pages without writing HTML at all. You'll be using it for your documentation.
* [Markdown guide](https://www.markdownguide.org/cheat-sheet/)


## API Server Endpoints
  `/api/evidence` - API route for evidence data and methods.
  - GET - Returns the data from the json response with SELECT statements EvidenceController.js
  - POST - Updates the data using the Evidence id through joins.
  - PUT - inserts the data into the data columns based on the evidence id given.
  - DELETE - deletes the rows using evidence id as a conditional statement.
