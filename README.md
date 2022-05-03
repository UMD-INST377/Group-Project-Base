# HispanicDC (Hispanic Restaurants Blog Site)

## Project Description

Our website will help anyone who is looking to satisify their craving for hispanic foods within the D.C. Area. This website serves to provide tourists, D.C residents and citizens within the Washington Metropolitian area accurate, up-to-date information on hispanic restaurants established in D.C. The website's mission is to steer consumers away from misinformation  and down the path of helpful information that can allow them to achieve their goal.


## Link
https://group-project-6.herokuapp.com/index.html


## Endpoint Document

<hr>

Down below are details of the API present in this group project.

## REST API Examples

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
      <td>Retrieves resources</td>
    </tr>
    <tr>
      <td>POST</td>
      <td>Creates resources</td>
    </tr>
    <tr>
      <td>PUT</td>
      <td>Changes and/or replaces resources or collections</td>
    </tr>
    <tr>
      <td>DELETE</td>
      <td>Deletes resources</td>
    </tr>
  </tbody>
</table>

# Area

## Get list of restaurant areas & descriptions that will help locate their physical location.

### request

GET /ryan/area
  
  cURL http://localhost:3000/ryan/area
  
#### Response

{
    "data": [
        {
            "area_id": 1221,
            "neighborhood": "Downtown",
            "landmarks": "Near Farragut North Metro",
            "description": "Situated in the bustling and vibrant Dupont Circle neighborhood."
        },
        {
            "area_id": 1222,
            "neighborhood": "Downtown",
            "landmarks": "Near the National Bureau of Asian Research",
            "description": "Situated near M&T Bank, Poki DC, the Quincy and RL hotels and the National Bureau of Asian Research."
        },
        {
            "area_id": 1223,
            "neighborhood": "Brightwood Park",
            "landmarks": "Petworth, Washington DC",
            "description": "3903-3905 14th St NW, Washington, DC."
        },
        {
            "area_id": 1224,
            "neighborhood": "Federal Triangle",
            "landmarks": "National Gallery of Art",
            "description": "Near FBI HQ, adjacent to D St NW."
        },
        {
            "area_id": 1225,
            "neighborhood": "Noma",
            "landmarks": "Near NEIGHBORS DC(market)",
            "description": "1280 4th St NE."
        },
        {
            "area_id": 1226,
            "neighborhood": "Mt Vernon Square",
            "landmarks": "Galluadet University",
            "description": "Near Logan Circle and Thomas Circle."
        },
        {
            "area_id": 1227,
            "neighborhood": "Edgewood",
            "landmarks": "Rhode Island Ave-Brentwood Metro",
            "description": "Located at 2314 4th St NE. Washington, DC."
        },
        {
            "area_id": 1228,
            "neighborhood": "Penn Quarter",
            "landmarks": "National Gallery of Art",
            "description": "Near the US Navy Memorial Plaza and National Gallery of Art."
        },
        {
            "area_id": 1229,
            "neighborhood": "Columbia Heights",
            "landmarks": "Columbia Heights Metro",
            "description": "Near Columbia Heights Civic Plaza. 1424 Park Rd NW."
        },
        {
            "area_id": 1230,
            "neighborhood": "Crestwood",
            "landmarks": "Upshur Park",
            "description": "Around Upshur Park, located in 3910 14th St NW DC."
        },
        {
            "area_id": 1231,
            "neighborhood": "Brightwood Park",
            "landmarks": "Fort Slocum Park",
            "description": "El Pulgarcito Restaurant and Bar is a family-owned Latin restaurant and sports bar located in Washington, DC. 5313 Georgia Ave NW."
        },
        {
            "area_id": 1232,
            "neighborhood": "Mt.Pleasant",
            "landmarks": "Piney Branch Park",
            "description": "14th Street in Columbia Heights DC."
        },
        {
            "area_id": 1233,
            "neighborhood": "Downtown",
            "landmarks": "The White House",
            "description": "1300 I ST NW, Washington DC. NEAR FRANKLIN PARK and THE WHITE HOUSE."
        },
        {
            "area_id": 1234,
            "neighborhood": "Adams Morgan",
            "landmarks": "Kalorama Park",
            "description": "THE ADAMS MORGAN NEIGHBORHOOD."
        },
        {
            "area_id": 1235,
            "neighborhood": "Foggy Bottom",
            "landmarks": "Georgetown Waterfront Park",
            "description": "Near Washington National Cathedral."
        },
        {
            "area_id": 1236,
            "neighborhood": "Cleveland Park",
            "landmarks": "Washington National Cathedral",
            "description": "3500 Connecticut Ave NW."
        },
        {
            "area_id": 1237,
            "neighborhood": "Brightwood Park",
            "landmarks": "Fort Slocum Park",
            "description": "827 Kennedy St NW, Washington, DC 20011."
        },
        {
            "area_id": 1238,
            "neighborhood": "Navy Yard",
            "landmarks": "US Navy Museum",
            "description": "1100 8th St SE, Washington, DC."
        }
    ]
}

## Post a new area entry

#### Request
  POST /ryan/area
  
### Response
   [
    {
        "area_id": 1239,
        "neighborhood": "Petworth",
        "landmarks": "Lincoln's Hilltop Retreat",
        "description": "Vibrant community with diverse culture"
    }
]
  
  ###Review
  
  ### Get a list of Reviews from people who have been to restaurants 
   GET /api/review/
   
   cURL http://localhost:3000/api/review/
   
   #Response 
   
   {
    "data": [
        {
            "review_id": 20,
            "review_desc": "nice place",
            "avg_star_rating": "5",
            "restaurant_id": 9
        },
        {
            "review_id": 21,
            "review_desc": "Nice Food",
            "avg_star_rating": "4",
            "restaurant_id": 1
        },
      
            "review_id": 770,
            "review_desc": "'I like their food if you're willing to eat heavy food once in a while. Their food tastes great. Don't go if you're vegetarian or like to eat salads. And their chicken sandwiches are so good, a little bit pricey but good. But they are not what you expect from a traditional sandwich.'",
            "avg_star_rating": "4",
            "restaurant_id": 1
        },
        {
            "review_id": 771,
            "review_desc": "We made reservations for a Friday night, glad we did- as the place was packed! It was busy for good reason, the food and drinks were delicious. We ordered a pisco sour flight and were then offered a tasting menu. The amount of food was surprisingly abundant given the cost. It was a fun experience and highly recommend.",
            "avg_star_rating": "4.5",
            "restaurant_id": 2
        },
        {
            "review_id": 772,
            "review_desc": "'If you want 100% authentic Mexican food, this is the place to go! The food is amazing, the service is great, and the environment feels like you were in Mexico. I ordered enchiladas verdes and my husband had tacos and we both were very pleased with the flavor and the presentation of the plates. We love this place so much that we'll be back next week with family. 100% recommended.'",
            "avg_star_rating": "4.6",
            "restaurant_id": 3
        },
        {
            "review_id": 773,
            "review_desc": "Oyamel never disappoints! I have eaten here several times now: the service is excellent and the food is very good. They have some very creative Mexican dishes; the tortillas are wonderful, as is the guacamole. There is a great selection of small dishes, so you get a chance to try a lot of different food. Our service has always been attentive and friendly. Make a reservation; it is a popular place!",
            "avg_star_rating": "4",
            "restaurant_id": 4
        },
        {
            "review_id": 774,
            "review_desc": "I loved this place. It was something that I will continue to come back to and the food was amazing! Great community space.",
            "avg_star_rating": "4.6",
            "restaurant_id": 5
        },
        {
            "review_id": 775,
            "review_desc": "Best Mexican place in DC so far and that alone can grant a 5-star rating. Worth noting that outdoor sitting has a nice view but indoors could use some music to create a more pleasant experience. Other than that, food and drinks are good and authentic!",
            "avg_star_rating": "4.4",
            "restaurant_id": 6
        },
        {
            "review_id": 776,
            "review_desc": "Stopped here for lunch after seeing Google reviews. It was ah-maz-ing! The staff were so nice and helpful to me and my kids and the food was just phenomenal. Try it‚ you wont be disappointed.",
            "avg_star_rating": "4.6",
            "restaurant_id": 7
        },
        {
            "review_id": 777,
            "review_desc": "Great service, cocktails, and overall menu. A pisco sour and the yucca fries are a must when stopping by here. Tuna donburi and the very creative ponderaciones de kiwicha will make you leave with a happy belly.",
            "avg_star_rating": "4.4",
            "restaurant_id": 8
        },
        {
            "review_id": 778,
            "review_desc": "First time here and couldnt have enjoyed my experience better! From the service, the music and the amazing food!! Totally recommend this place!",
            "avg_star_rating": "4.6",
            "restaurant_id": 9
        },
        {
            "review_id": 779,
            "review_desc": "I loved this place! Yesterday was my first time going back out since the pandemic started, not only that they have HAPPY HOUR UNTIL 9 the food tastes so good and they have a very friendly environment. The waitresses are so nice and funny. My waitress made me feel so comfortable, she suggested a few of their best dishes and drinks and she did not disappointed me. Looking forward to go back real soon!",
            "avg_star_rating": "4.4",
            "restaurant_id": 10
        },
        {
            "review_id": 780,
            "review_desc": "Nice food. Crazy and wild patrons/customers.",
            "avg_star_rating": "3.8",
            "restaurant_id": 11
        },
        {
            "review_id": 781,
            "review_desc": "Good food but need to be a little more cleaner and too many dirty people in the front of the place.",
            "avg_star_rating": "4.2",
            "restaurant_id": 12
        },
        {
            "review_id": 782,
            "review_desc": "'Solid brunch spot. They do offer a bottomless brunch special. The food was really good. Our waiter was nice, this place gets packed for brunch, they do have lots of seating though. It's well decorated and gives off very chill vibes.'",
            "avg_star_rating": "4.2",
            "restaurant_id": 13
        },
        {
            "review_id": 783,
            "review_desc": "'Love the place, the owners are there greeting you and making sure you're having a good time. Music is terrific. Salsa lessons and ladies night are the best.'",
            "avg_star_rating": "4.3",
            "restaurant_id": 14
        },
        {
            "review_id": 784,
            "review_desc": "Great Mexican food!  They have a large menu with many good options. Classics like tacos, enchiladas and fajitas are sure to please. I found that they are very fast bringing the food out too which is really nice.  Plenty of indoor and some outdoor seating as well. Excellent service rounds it all out!",
            "avg_star_rating": "4.4",
            "restaurant_id": 15
        },
        {
            "review_id": 785,
            "review_desc": "Excellent customer service,very good food. I visited this place many times. Fresh food.",
            "avg_star_rating": "4",
            "restaurant_id": 16
        },
        {
            "review_id": 786,
            "review_desc": "Great food and great service! Tilapia was amazing, cooked and seasoned to perfection, also large portions!",
            "avg_star_rating": "4.4",
            "restaurant_id": 17
        },
        {
            "review_id": 787,
            "review_desc": "It a quaint little hole in the wall with fantastic food quality service and very reasonable prices. From the outside you would ride right pass it but as the old saying says ‚dont ever judge a book by its cover. My family and I will definitely be returning soon.",
            "avg_star_rating": "4.3",
            "restaurant_id": 18
        },
        {
            "review_id": 788,
            "review_desc": "Nice Food",
            "avg_star_rating": "4",
            "restaurant_id": 1
        },
        {
            "review_id": 789,
            "review_desc": "Nice Views",
            "avg_star_rating": "3",
            "restaurant_id": 1
        }
    ]
}
## Post a new area entry

#### Request
  POST /api/reviews
  
### Response

    {
            "review_id": 23,
            "review_desc": "Cool meals",
            "avg_star_rating": "4",
            "restaurant_id": 1
        },
        {
  
  
  



