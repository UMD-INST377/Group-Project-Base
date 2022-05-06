# INST377 Group23 UMD College Park Restaurants

This repository is ta group project for the development of our UMD Restuarants web applicartion for INST377. It represents a working "server" and "client" package for HTTP requests with our own APIs. The code here helps interact with Sravya's prior INST327 database. 

### Description
We want to help people find restaurants in the College Park area that fit the criteria that they want. For instance, how expensive a place is, or how large the place is. This would help not only people who are new to the area, but also people who are living in the area, and either want to try something new, or be reminded of the various available options.
This would be useful to anyone living in or visiting the campus in the College Park area and UMD students. This could also be especially helpful for prospective students whether they are in-state or out-of-state since food options are important considerations. It is also useful for those who aren’t necessarily in College Park but in neighboring cities as well.  

### Link to Webpage
* [HEROKU PAGE](https://aqueous-reef-41843.herokuapp.com/)
* [Markdown guide](https://www.markdownguide.org/cheat-sheet/)

### Target Browser
MacBook Pro 13-inch
iPhone 12 Pro

### Links
* [Home](https://aqueous-reef-41843.herokuapp.com/)
* [Database Demo](https://aqueous-reef-41843.herokuapp.com/data.html)


<hr>

Below are details of the API contained within this group project.

<hr>

## Get list of Restaurants around UMD and College Park

#### Request

`GET /api/restaurants`

    curl http://localhost:3000/api/restaurants

#### Response
    [{
        "restaurant_id":1,
        "restaurant_name":"College Park Grill",
        "phone_number":"3014744745","price":"$$",
        "description":"Grill",
        "website":"https://www.collegeparkgrill.com/",
        "cuisine_id":2,
        "rating_id":9,
        "description_id":1
    },
    {
        "restaurant_id":2,
        "restaurant_name":"Old Maryland Grill",
        "phone_number":"3019553413",
        "price":"$$$",
        "description":"Grill, Bar",
        "website":"https://oldmarylandgrill.com",
        "cuisine_id":2,
        "rating_id":9,
        "description_id":2
    },
    {
        "restaurant_id":3,
        "restaurant_name":"The Board and Brew",
        "phone_number":"2405424613",
        "price":"$$",
        "description":"Breakfast, Brunch",
        "website":"https://www.theboardandbrew.com/",
        "cuisine_id":2,
        "rating_id":10,
        "description_id":1
    }]

## Get a Specific Dining Hall

#### Request for a restaurant using restaurant id

`GET /api/restaurants/:rest_id`

    curl http://localhost:3000/api/restaurants/1

#### Response

    [{
        "restaurant_id":3,
        "restaurant_name":"The Board and Brew","phone_number":"2405424613",
        "price":"$$",
        "description":"Breakfast, Brunch",
        "website":"https://www.theboardandbrew.com/",
        "cuisine_id":2,
        "rating_id":10,
        "description_id":1
    }]
    
## Create a new Dining Hall TODO 

#### Request TODO

`POST /api/restaurants`

    curl -d "hall_id=4&hall_name=Example&hall_location=Hornbake" -X POST http://localhost:3000/api/restaurants

#### Response TODO

    {
        "hall_id":"4",
        "hall_name":"Example",
        "hall_location":"Hornbake"
    }

## Updating an Existing Restaurant

#### Request TODO

`PUT /api/restaurants`

    curl -d "hall_id=4&hall_name=Example1&hall_location=Stamp" -X PUT http://localhost:3000/api/restaurants

#### Response

    Successfully Updated

## Delete an Existing Restaurant

#### Request

`DELETE /api/restaurants/:rest_id`

    curl -X DELETE http://localhost:3000/api/restaurants/4

#### Response

    Successfully Deleted
<hr>