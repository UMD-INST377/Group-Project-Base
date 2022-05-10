# College Park Restaurants

## Description
Most students are not from College Park or are new to the area, and, consequently, struggle to find food options that are appealing to them. In relation, there could be parents of those students or other new residents visiting. Our database makes it easy and efficient for students to see what food is available and
sort their options by genre, restaurant type, and location among other identifiers. To address this issue, we created a website that uses information on the restaurants: services, food items, locations, etc. This application will make it more convenient for students to educate themselves on the various restaurants in the area and look for restaurants based on the criteria they are looking for. We hope that it would be easier for students/residents to find College Park restaurants more efficiently. 


## Link to Website
[https://group5inst377.herokuapp.com](https://group5inst377.herokuapp.com)

## Target Browsers
* iPhone SE/XR/12 Pro
* Surface Pro 7
* Macbook Pro 13/15

## Links
* [Developer Manual](#Developer-Manual)

# Developer Manual
## REST API Example with Sequelize Methods
1. GET --> Retrieve all restaurant entries or restaurant by ID
2. POST --> Creates a new restaurant entry
3. PUT --> Updates or replaces a restaurant entry that already exists 
4. DELETE --> Removes an existing restaurant entry by ID or all restaurant entries

## How to install application and all dependencies
1. First, clone this repository through Github Desktop or through Terminal.
2. Open repository in VSCode Terminal or Terminal application.
3. type ```npm install``` into terminal window and run it.

## How to run application on a server
1. Open the repository in VSCode terminal or Terminal application.
2. Run ```npm start```. 
3. Go to this url: ```http://localhost:3000/``` in your browser.

## To run tests for software
1. Open up a terminal and make sure you are in the main project directory
2. In the terminal, run ```npm start```.

## Server application API example using Restaurant API in Postman
### Get list of all restaurants

#### Request

`GET /restaurant`

    * api_url http://localhost:3000/jess/restaurant
    * select GET
    * click SEND


#### Response
```
     [{
        "restaurant_id": 1,
        "restaurant_info_id": 1,
        "restaurant_name": "Milk and Honey",
        "location_id": 1,
        "open_time": "8:00 AM",
        "close_time": "8:00 PM",
        "reservation": 1,
        "phone_number": "301-477-2195",
        "payment_id": 1
     },
      {
        "restaurant_id": 3,
        "restaurant_info_id": 3,
        "restaurant_name": "The Jerk Pit",
        "location_id": 3,
        "open_time": "11:00 AM",
        "close_time": "10:00 PM",
        "reservation": 1,
        "phone_number": "301-982-5375",
        "payment_id": 1
    },
    {
        "restaurant_id": 4,
        "restaurant_info_id": 4,
        "restaurant_name": "The Hall CP",
        "location_id": 4,
        "open_time": "4:00 PM",
        "close_time": "10:00 PM",
        "reservation": 1,
        "phone_number": "301-264-7644",
        "payment_id": 1
      }]
```

### Get a specific restaurant

#### Request

`GET /restaurant/:restaurant_id`

##### Example input:

    * api_url http://localhost:3000/jess/restaurant/1
    * select GET
    * click SEND

#### Response
```
    {
        "restaurant_id": 1,
        "restaurant_info_id": 1,
        "restaurant_name": "Milk and Honey",
        "location_id": 1,
        "open_time": "8:00 AM",
        "close_time": "8:00 PM",
        "reservation": 1,
        "phone_number": "301-477-2195",
        "payment_id": 1
    }
```

### Creating a New Restaurant Entry

#### Request

`POST /restaurant/restaurantpost`

    * api_url http://localhost:3000/jess/restaurant/restaurantpost
    * select POST
    * under the BODY tab, select x-www-form-urlencoded
    * Click send

##### Example input:
```
    {
        "restaurant_id": 26,
        "restaurant_info_id": 26,
        "restaurant_name": "Mcdonalds",
        "location_id": 26,
        "open_time": "12:00 AM",
        "close_time": "11:00 PM",
        "reservation": 1,
        "phone_number": "123-456-7890",
        "payment_id": 1
    }
```

#### Response

```
    {
        "restaurant_id": 26,
        "restaurant_info_id": 26,
        "restaurant_name": "Mcdonalds",
        "location_id": 26,
        "open_time": "12:00 AM",
        "close_time": "11:00 PM",
        "reservation": 1,
        "phone_number": "123-456-7890",
        "payment_id": 1"
    }
```

### Updating an Existing Restaurant

#### Request

`PUT /restaurant/restaurantput/`

    * api_url http://localhost:3000/jess/restaurant/restaurantput/26
    * select PUT
    * under the BODY tab, select the x-www-form-urlencoded
    * Click send

##### Example input:
```
    {
        "restaurant_id": 26,
        "restaurant_info_id": 26,
        "restaurant_name": "Mcdonalds",
        "location_id": 26,
        "open_time": "12:00 AM",
        "close_time": "11:00 PM",
        "reservation": 0,
        "phone_number": "123-456-7890",
        "payment_id": 1"
    }
```

#### Response

    Successfully updated.

### Delete an Existing Restaurant Entry

#### Request

`DELETE /restaurant/restaurantdelete/:restaurant_id`

    * api_url http://localhost:3000/jess/restaurant/restaurantdelete/26
    * select DELETE
    * click SEND

##### Example input: 

  `DELETE: localhost:3000/jess/restaurant/restaurantdelete/26`

#### Response

    Successfully Deleted
    

## Known Bugs and Future Development
### Bugs:
* Not all the restaurant markers show up on the map, this is a data cleaning issue
* Submit button on Search Restaurant and Contact doesn't really do anything, it filters as you type in the 
the text box, but without the button, the filter doesn't work. 

### Future Development: 
* Adding data for new restaurants that open since the database was created.
* Include more ways to filter restaurants.
* Add more page styling features. 
