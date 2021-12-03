# MD Census Data Query Center

## About
Maryland's state data center offers downloadable census data. Unfortunately this is just raw data and MD's site does not offer quick searches and filtering. Census.gov improves on this but is wholly advanced and usually requires clicking through multiple links. This application seeks to be intuitive and simple to find important MD Census information
categorized by zip codes.

## Links
[Application](https://whispering-crag-98583.herokuapp.com/)
[Developer Manual](https://github.com/noncomplex/Group5-Final-INST377FALL2021#developer-manual)

## Target Browsers
* Desktop Browsers:
  * Chrome 54+
  * Firefox 52+
  * Safari 11+
* Mobile Browsers:
  * Chrome for Android 67
  * iOS Safari 11+

# Developer Manual
## Setup and Installation
1. Clone this repository.
2. Navigate to the local repository from the command line.
3. Enter ```npm install``` to install Node dependencies.

## Running the Application Locally
1. Navigate to the local repository from the command line.
2. Run ```npm start```. It is running correctly if the terminal displays `Listening on: http//localhost:3000`.
3. In your browser, navigate to ```http://localhost:3000/```.


## Server application API
All api endpoints are prefixed with `/api`. For example to `GET` census data you would use `api/census`.\
In general, the api consists of 1 endpoint for each table in the server's database. Each endpoint's HTTP methods corresponds to the following
actions.
* GET - Displays and returns the table's SQL data.
* PUT - Updates a particular value.
* POST - Inserts a new row, based on that table's column values.
* DELETE - Deletes the last row a the table, generally should not be used in production. Useful for quick testing.

### Available Endpoints
* census - Relates to MD Census Data
* metro - Relates to MD zip codes that are small metropolitan areas
* community - Relates to MD community survey
* population - Relates to population statistics for MD zip codes 

## Known Bugs and Potential Future Development
### Bugs:
- Scrolling on the Query form makes the input forms go past the Bulma boxes.

### Potential Future Developments: 
- Allow optional values
- Include Leaflet visualizations by highlighting zip code regions
- HTTP method that can recreate the database in case some manipulations go wrong
