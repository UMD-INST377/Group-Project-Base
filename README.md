# Group 4 - Spotify Database

### Description
When looking for songs on Spotify, it can be difficult for users to see if a song is being hosted by any music station.  To address our issue, our webpage has a searchbar where a song name can be typed in; the webpage will react to the input if it is currently being hosted by a music station on Spotify.  The data our website specifically works with are song names and station outlet names.  Our data is retrieved from a Spotify database made in INST327 and it was provided by one of our former team members.

### Heroku Link
Link to Heroku instance where the application is live and running:  https://group4-final-inst377sp2022.herokuapp.com/

### Target Browser
Google Chrome

### Developer Manual Link
Link to Developer Manual: https://github.com/GeraldReyes00/Group4-Final-INST377SP2022#developer-manual

# Developer Manual

### How to Install This Application and All Dependencies
1. Clone this repository through Github Desktop.
2. Open the repository in Visual Studio Code.
3. Open a terminal window in Visual Studio Code.
4. Type "npm install" into the window and run it.
5. The application should be good for use.

### How to Run Your Application on a Server
1. Open the repository in Visual Studio Code.
2. Open a terminal window in Visual Studio Code.
3. Type "npm start" into the window and run it.
4. Open a web browser and go to the following url:  http://localhost:3000/

### How to Run Any Tests Written for the Software
This software has no tests written for it.

### Server application APIs
/songDisplay - API route for retrieving songs that are currently being hosted by a music station.
* GET - Returns all songs names that are currently being hosted by a music station; song names are also accompanied by playlist ledger names and station outlet names.
* POST - Obtains a song name from the user.  If the song name is currently hosted by a music station (meaning it can be found in the GET for this route) then the song name will be returned to the user.  Otherwise, nothing is returned.

/outletPath - API route for retriving the outlet table and adding records to it.
* GET - Returns the entire outlet table from the dataset and returns it to the user.
* POST - Takes in six inputs from the user: Outlet ID, Outlet Name, Outlet Address, Outlet City, Outlet State, and Outlet Zipcode.  With these six inputs, a new record is created in the outlet table.  The Outlet ID needs to be unique, the Outlet State can only be two characters long, and the Outlet Zipcode can only take in integers.