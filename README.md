# West Coast Earthquake Database

## Description
It can often be difficult to find detailed information on recent earthquakes, as available data is spread out among multiple databases and usually lacks intuitive UI necessary for use by the general public. To reduce this issue, we created a web page that works with a database containing information about west coast earthquakes, allowing users to browse entries, search by several different categories, and update the database themselves.

### Link to site
[https://stark-beach-65958.herokuapp.com/](https://stark-beach-65958.herokuapp.com/)

### Target Browsers
<p float="left">
    <img src="/images/firefox-logo-small.png" width="30" height="30" />
    <img src="/images/Microsoft_Edge_logo_(2019).svg.png" width="30" height="30" />
    <img src="/images/Google_Chrome_icon_(2011).png" width="30" height="30" />
</p>

## Developer Manual
### How to install the application and all dependencies
1. Clone this repository
2. Open repository in a terminal application
3. Type ```npm install``` into the terminal and run it

### How to run the application on a server
1. Open the repository in a terminal application
2. Run ```npm start```
3. Go to ```http://localhost:3000``` in your web browser

### Server application APIs and endpoints
```/api``` - API Route for earthquake information
* GET - Retrieves city, date, and magnitude data for all earthquakes by ```JOIN```ing three tables.
* PUT - Updates the city, date, and magnitude data for an earthquake with ID ```:id```. Uses three SQL queries made in one request.
* POST - Adds a new entry to the earthquakes database. Uses three SQL queries made in one request.
* DELETE - Removes the entry with ```earthquake_id``` ```:id``` from the earthquakes database. Uses three SQL queries made in one request.

```/api/:id``` - API Route for individual earthquakes
* GET - Retrieves city, date, and magnitude data for earthquake with ID :id.

```/api/cities```, ```/api/date```, ```/api/magnitude``` - API Routes for the three individual tables making up an earthquake. 
* All methods only GET/PUT/POST/DELETE the entry from their corresponding table.

## Known Issues
* ```config.js``` was changed to allow the ```/api``` PUT, POST, and DELETE methods to send multiple SQL queries per request. This could potentially make SQL code injection possible.

## Roadmap for future development
* Potentially merging the cities, date, and magnitude tables into one table to eliminate the need for multiple SQL queries per request
* Adding a choice to sort searched results based on different factors
* Make search results clickable to give a better visualization of the individual data
