# U.S. Presidents Timeline

## Description

Our project is centered around the lack of accessible and effective information design for young children wishing to learn about United States presidents.Although this may seem rather benign, a quick Google search to find relevant, easily accessible information about presidents, presented in a kid-friendly way can be difficult. Our final website is intended to contain a cohesive, simple, broad, attractive, and interesting overview of all of the United States presidents in a fashion geared towards children K-8 and their respecive educators.

This project includes a fully-functional timeline of the Presidents of the United States that can be navigated through to access information about the U.S. Presidents. There is an About Us page that contains information about the site and information about the members of our team. In addition, an Update Page exists that allows users to add, edit, or delete information stored in the database (and by proxy the timeline).

## Link to the website
-[https://presidents-timeline.herokuapp.com/index.html](https://presidents-timeline.herokuapp.com/index.html)

## Target Browsers
* Safari, Chrome, Firefox
* iPhone 6/7/8 Plus
* Pixel 2/2XL
* Macbook Pro 13/15

## Links
* [User Manual](https://scheduleofpt.herokuapp.com/documentation.html) 
* [Developer Manual](#Developer Manual)

# Developer Manual

## How to install application and dependencies:
> 1. Clone this repo using either GitHub Desktop or your computer's terminal.
> 2. Open the repo with VSCode terminal or any other terminal of your choice.
> 3. Run the command <strong>npm install</strong> using your terminal.
> 4. Everything should be ready to use. If you run into any errors, please try visiting the following website: https://docs.npmjs.com/common-errors
> 5. Check to make sure that the following TimelineJS links (https://cdn.knightlab.com/libs/timeline3/latest/js/timeline.js; https://cdn.knightlab.com/libs/timeline3/latest/css/timeline.css) are in the head tag of the index.html

## How to run application on server:
> 1. Open the VSCode terminal or any other terminal of your choice.
> 2. Run the command <strong>npm start</strong> using your terminal.
> 3. You should then be able to view the application when you visit the web address: http://localhost:3000. If you run into any issues, please try visiting the following website: https://docs.npmjs.com/common-errors

## Application Testing:
> Although it would have been helpful, we did not create any tests for our application due to time constraints. 
To help with testing our API, we used ThunderClient, a REST API Client Extension that allows developers to test
HTTP requests and view response messages with a simple GUI interface in VSCode directly. If you would like to use
this extension, simply search the name up in the VSCode Extension store and install it onto your VSCode.

## Application APIs

### GET API

#### The endpoints in the GET API extract information from the database to be sent on for use on the front-end.

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

### /api/presidents
> The purpose of this endpoint is to allow user's to get the information for all of the presidents within the database. 

### /api/child
> This async endpoint queries the database for all of the president childrens names and ids and sends a JSON object. This API is used to help populate the dropdown options of the children of all of the presidents.

### /api/vpdrop
> This async endpoint queries the database for all of the vice presidents names and ids and sends a JSON object. This API is used to help populate the dropdown options of current vice presidents.

### /api/firstladydrop
> This async endpoint queries the database for all of the first lady's names and ids and sends a JSON object. This API is used to help populate the dropdown options of current first lady's.

### /api/presidentdrop
> This async endpoint queries the database for all of the presidents names and ids (PK) and and sends a JSON object. This API is used to help populate the dropdown options of current presidents.

### Delete API

### /api/presidents/:president_id

> Parameter: President_id (interger)
> 
> This Endpoint has an MYSQL <strong>DELETE</strong> query which takes an input from the user and deletes that ID from the database.

### Post API

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

### PUT API

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

### /api/vicepresident/:vp_id

>Parameter: vp_id (integer)
>
>This endpoint lets the user update existing vice presidents information into our database.
>
>Endpoint takes a specific ID then takes information from the user to update the database.
>
> This endpoint has MYSQL <strong>update</strong> query which lets the user update information into the database.

### /api/children/:child_id

>Parameter: child_id
>
>This endpoint lets the user update existing president childrens information into our database.
>
>Endpoint takes a specific ID then takes information from the user to update the database.
>
>This endpoint has MYSQL <strong>update</strong> query which lets the user update information into the database.

## Application Bugs and Future Development:
### Bugs:
> We are currently not aware of any major bugs within our application. The only real issue that we seem to be running into
is the data for children, vice presidents, and first lady's not updating correctly on our timeline.
> We purposefully designed the timeline in a manner that it does not allow for a user to enter a year later than the current year. If someone a date of inauguration greater than the current year, the timeline will display their term as inauguration year to current year.

### Future Development:
> * Store president object and dependent objects in sessionStorage.  Add the presidents and get back the President-ID to add to the dependents as a foreign key - this should allow children, vice presidents, and first ladies to display on the timeline from new entries.
> * Adding an extra layer of security by incorporating login credentials before timeline updates can be made.
> * Populating update fields with information of president once they have been clicked on from the drop downs.
> * Validating inputted data to ensure that it is formatted correctly.
> * Change any date inputs to be type date and convert to Month Day, Year form using Moment JS
> * Clear input boxes upon submission, display message about whether the submission was succesful or not.
> * Replace null entries on timeline by a word such as "None".