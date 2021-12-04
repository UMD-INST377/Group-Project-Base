<!-- # This is your readme
You are required to fill it in with documentation similar to that found in the Sequelize example for the course as part of your final project.

### How to use Markdown
Markdown is a text notation system used in Discord, Whatsapp and similar to structure pages without writing HTML at all. You'll be using it for your documentation.
* [Markdown guide](https://www.markdownguide.org/cheat-sheet/) -->

# GET API

## The endpoints in the GET API extract information from the database to be sent on for use on the front-end.

### /api/delete_options

> Parameters: None
>
> This async endpoint queries the database for all of the presidents names and ids (PK) and and sends a JSON object. This API is used to help populate the dropdown options of current presidents to delete.

### /api/presidents/:presidents_id

> Parameters: president_id (int)
>
> This async endpoint queries the database to get the name, home state, inauguration date, birth date, party for a given president.
>
> <strong>Example</strong>: '/api/presidents/1' will return data about George Washington.


### /api/presidents/time_line

> Parameters: None
>
>This async endpoint points to a SQL controller *timeLine* which queries joins together the necessary tables in the database and provides the president_id, president_name, birth_date, home_state, date_inauguration, party, death_date, vice_president, first_lady, children_name, elected_year from the database. This information is required to populate the TimeLine with the data.

# Delete API

### /api/presidents/:president_id

> Parameter: President_id (interger)
> 
> This Endpoint has an MYSQL <strong>DELETE</strong> query which takes an input from the user and deletes that ID from the database.

# Post API

### /api/presidents

> This Endpoint has an MYSQL <strong>INSERT</strong> query which takes the values of president table from the user and saves it inside the database.
>
> This option will let the user add new information about the presidents into our database.

### /api/first_lady

> This endpoint is for first ladies tables.
>
> User can only add first ladies full name into out database.
>
> This endpoint also have MYSQL <strong>INSERT</strong> query which takes the values from the user and saves it inside the database.

### /api/vicepresident

> This endpoint is to add vice president's first and last name to the datebase.
>
> The user can only add the vice president name into the database.
>
> This endpoint also has a MYSQL <strong>INSERT</strong> query which takes the values from the user and saves it inside the database and which would reflect it on the front-end.

### /api/children

> The purpose of the endpoint is to add the information of the president's children into the database.
>
> The user will only be able to add the children name into the database.
>
> This endpoint also has the a MYSQL <strong>INSERT</strong> query which takes the values from the user, saves it inside the database and update the front-end.

> <strong>P.S.</strong> Initially we started with an endpoint which will have all the post endpoints queries and will only run that query which would the user specify information for, but the that code really complex and was taking a lot more runtime than a single separate endpoint. So, we end up creating a single endpoint for each post request.

# PUT API

### /api/presidents/:president_id

> Parameter: President_id (interger)
>
> This endpoint lets the user update existing presidents information into our database.
>
> Endpoint takes a specfic ID than takes take information from the user to update the database.
>
> This endpoint has MYSQL <strong>update</strong> query which lets the user update information into the database.

### /api/firstlady/:first_ladies_id

> Parameter: first_ladies_id (interger)
>
> This endpoint lets the user update existing first ladies information into our database.
>
> Endpoint takes a specfic ID than takes take information from the user to update the database.
>
> This endpoint has MYSQL <strong>update</strong> query which lets the user update information into the database.