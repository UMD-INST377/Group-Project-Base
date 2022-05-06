# INST377 Group23 UMD College Park Restaurants

This repository is ta group project for the development of our UMD Restuarants web applicartion for INST377. It represents a working "server" and "client" package for HTTP requests with our own APIs. The code here helps interact with Sravya's prior INST327 database. 

### Description
We want to help people find restaurants in the College Park area that fit the criteria that they want. For instance, how expensive a place is, or how large the place is. This would help not only people who are new to the area, but also people who are living in the area, and either want to try something new, or be reminded of the various available options.
This would be useful to anyone living in or visiting the campus in the College Park area and UMD students. This could also be especially helpful for prospective students whether they are in-state or out-of-state since food options are important considerations. It is also useful for those who aren’t necessarily in College Park but in neighboring cities as well.  

### Link to Webpage
* [HEROKU PAGE](https://aqueous-reef-41843.herokuapp.com/)
* [Markdown guide](https://www.markdownguide.org/cheat-sheet/)

### Target Browser
1. MacBook Pro 13/15
2. iPhone 11/12

### Links
* [Home](https://aqueous-reef-41843.herokuapp.com/)
* [Database Demo](https://aqueous-reef-41843.herokuapp.com/data.html)
* [Developer Manual](https://github.com/sravvel/Group23-Final-INST377SP2021#developer-manual)

# Database Manual
1. Clone this repository via Github
2. Open repository using VSCode
3. Open the terminal window on VSCode and type ` npm install ` to install dependencies 
4. You are now ready to use the application!

### Running the Application on a Server
1. Open repository using VSCode
2. Open the terminal window on VSCode and type ` npm start `. Make sure there are 0 vulnerabilites and no errors
3. To view the webpage in a web browser, go to http://localhost:3000/ 

### Running Tests
There are no tests written for this application however, Cypress can be used to run tests.

### API for Server Application
` /api ` API route for UMD Restaurants data
` /restaurants ` – API route to obtain the restaurants table
- GET: Logs to console response query from URL. Returns the the restaurants table.
- PUT: returns 'Successfully Updated Restaurant'.
- POST: Returns the new restaurant data in JSON format.

### Bugs & Road-map for Future Development
- Unable to update tables due to unsupported null values
- Repetition in data through user inputs

- Handle null values with table interdependencies
- Adding more restaurant suggestions and data
- Adding a map to help user locate the locations of restaurants