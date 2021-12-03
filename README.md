# This is your readme
You are required to fill it in with documentation similar to that found in the Sequelize example for the course as part of your final project.

### How to use Markdown
Markdown is a text notation system used in Discord, Whatsapp and similar to structure pages without writing HTML at all. You'll be using it for your documentation.
* [Markdown guide](https://www.markdownguide.org/cheat-sheet/)


# GET API

## The endpoints in the GET API extract information from the database to be sent on for use on the front-end.

### api/delete_options

Parameters: None

This async endpoint queries the database for all of the presidents names and ids (PK) and and sends a JSON object. This API is used to help populate the dropdown options of current presidents to delete.

### api/presidents/:presidents_id

Parameters: president_id (int)

This async endpoint queries the database to get the name, home state, inauguration date, birth date, party for a given president.

Example: '/api/presidents/1' will return data about George Washington.


### api/presidents/time_line

Parameters: None

This async endpoint points to a SQL controller *timeLine* which queries joins together the necessary tables in the database and provides the president_id, president_name, birth_date, home_state, date_inauguration, party, death_date, vice_president, first_lady, children_name, elected_year from the database. This information is required to populate the TimeLine with the data.

