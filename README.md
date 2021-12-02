## Video Game Data visualization

## Brief Description

This web application uses a game database to show users the player population and free-to-play capabilities of a constantly expanding selection of video games. Users can search for games in the database using the specific ID they are assigned to check pricing information and places to buy them. The application also features a graph that can be used to compare the pricing of each of the games. Developers can add and update specific entries to the table of games using the Update Game form.

## Website Link

https://group15videogamesproject.herokuapp.com

## GitHubLink

https://github.com/Ken2399/Group15-Final-INST377SP2021

## Getting Started

* "Clone" or download this repository to your local VScode by using the large green button marked "code"
* Install the software dependencies(type npm install in the terminal ) and run the server(type npm start in the terminal)
* Search http://localhost:3000/ in your broswer


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
