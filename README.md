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
  ```
   [[
   {census_zcta: 20601,
   census_identifier: 2420601,
   median_age: 37.3,
   num_persons_over_65: 1922,
   total_population: 24156,
   homeowner_rate: 71.1,
   percent_homeowner_without_mortgage: 11.2,
   percent_rent: 19.9}, 
   ...
   ]]
   ```
* metro - Relates to MD zip codes that are small metropolitan areas
 ```
 [[
 {metro_zcta: 21638,
 metro_area: Baltimore-Columbia-Towson, MD MSA},
 ...
 ]]
 ```
* community - Relates to MD community survey
```
[[
{community_identifier: 2420601,
pct_foreign_born: 6.8,
pct_poverty: 6.0,
pct_unemployed: 4.2,
pct_bachelors: 24.4,
median_household_income: 99031,
pct_little_english: 2.9},
...
]]
```
* population - Relates to population statistics for MD zip codes
```
[[
{popstat_zcta: 20601,
pop_percent_id: 1,
pop_percent_category: pct_over65,
pop_count: 8},
...
]]
```
* ethnicities - Relates to ethnic counts of ethnicities, requires another SQL table called md_ethnicities_lookup
```
[[
{ethnicity_zcta: 20601,
ethnicity_id: 1,
ethnic_count: 9785},
...
]]
```
* companies - Maryland tax credit companies
```
[[
{company_id: 1,
company_name: 5AM solutions, Inc.,
company_address: 1700 Rockville Pike, STE 295,
city: Rockville,
company_zcta: 20852},
...
]]
```

## Known Bugs and Potential Future Development
### Bugs:
- Scrolling on the Query form makes the input elements go past the Bulma boxes.

### Potential Future Developments:
- improve mobile interface
- Allow the option to remove columns from the filtered output
- Include Leaflet visualizations by highlighting zip code regions
- HTTP method that can recreate the database in case some manipulations go wrong
- Multiple of the same utility functions in multiple files can be placed in a single place
- Utility functions for a lot of repeated tedious HTML insertions
- allow for downloadable filtered data as csv
