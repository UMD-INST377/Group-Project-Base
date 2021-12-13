# Video Game Data visualization

## Brief Description

This web application uses a game database to show users the player population and free-to-play capabilities of a constantly expanding selection of video games. Users can search for games in the database using the specific ID they are assigned to check pricing information and places to buy them. The application also features a graph that can be used to compare the pricing of each of the games. Developers can add and update specific entries to the table of games using the Update Game form.

## Website Link

https://group15videogamesproject.herokuapp.com

## GitHub Link

https://github.com/Ken2399/Group15-Final-INST377SP2021

## Target Browser
* Desktop Chrome Version V80+
* Desktop Browser Version V88+
* Android Chrome Version V91+
* IOS Safari Version 13.0+

# Developer Manual
## Getting Started
1. "Clone" or download this repository to your local VScode
2. Install the software dependencies(type npm install in the terminal ) and run the server(type npm start in the terminal)
3. Search http://localhost:3000/ in your broswer

## To run tests for software
The are no prewritten tests in the source repository, but you can use Cypress to run your own written tests.
1. Open two terminals and make sure you are in the main project directory
2. In the first terminal, run ```npm start```.
3. In the second terminal run ```npm test```.

<hr>

## Server APIS
**api/general, api/platform, api/price, api/publisher, api/sale**
<table>
  <thead>
    <tr>
      <th>Method</th>
      <th>Action</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>GET</td>
      <td>Retrieves general/platform/price/publisher/sale information from database</td>
    </tr>
    <tr>
      <td>POST</td>
      <td>Creates general/platform/price/publisher/sale information to database</td>
    </tr>
    <tr>
      <td>PUT</td>
      <td>Changes and/or replaces general/platform/price/publisher/sale information to database</td>
    </tr>
    <tr>
      <td>DELETE</td>
      <td>Deletes general/platform/price/publisher/sale information from database</td>
    </tr>
  </tbody>
</table>


## Known Bugs and Future Development
### Bugs:
-There are no known bugs at this time.

### Future Development: 
* Implement user sign up/sign-in page(also create a table to store users information)
* Add description pages for each game in the list
* Explore fancy data visualization techniques to improve the aesthetics of the website
* Enrich features, such as enabling users to leave comments 
* Strengthen the linkage between our website and other game platforms(such as Steam and Epic) to improve the reliability of game data

