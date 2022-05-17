![readme](https://user-images.githubusercontent.com/54911634/167470570-c607dd94-5dd8-439d-8c0a-edc4f1153368.png)
# inTune
- Spring 2022 | INST377 | Group 18
- Created by Tayo Ojo, Daniel Deneau, Maxim Galkin, Ogheneruro Odedoyin, and Nardos Nana

## Description
**inTune** is a website created for music enthusiasts who are interested in learning more about specific genres, artists, and songs. **inTune** solves the information problem of music information being hard or time-consuming to find by consolidating interesting and important information, such as chart rankings, in one place!

## Relevant Links
- [inTune Website](https://group18-final-inst377sp2021.herokuapp.com/)
- [Developer Manual](#Developer-Manual)


## Target Browser
- Google Chrome
- iPhone 6s and up

# Developer Manual

## Code & Dependancy Installation
1. Clone Repository.
2. Open Repository in code editor *(Visual Studio Code highly recommended).*
3. Install NPM using ```npm install```.

## Starting the Server
1. Open Repository in code editor.
2. In terminal, run ```npm start```.
3. Allow command to run, then visit ```http://localhost:3000/``` in your desired browser.

## API 

```/artist``` - Relates to All Artists in Database
- POST - Creates new Artist and adds it to Database, takes ```first_name``` and ```last_name```, returns ```Artist Successfully Uploaded```.

```/songs``` - Relates to All Songs in Database
- GET - Accesses all Songs in the Database to be Displayed on Page.

```/charts``` - Relates to All Charts in Database
- GET - Accesses all charts in the Database.

```/genre``` - Relates to All Genres in Database
- GET - Accesses Each Song Genre in the Database.

## Known Bugs & Future Development
### Known Bugs
- Upon form submission on Contribute page, button to Home sometimes does not work.
- Page displays inconsistently on mobile browsers.
- Sign-up / Log-in Feature not functional.


### Future Development
- Substantially grow database.
- Implement Accounts Feature.
- Restrict Contributions to Registered Users.
- Add more Contribution possibilites.
