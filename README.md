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
  
  



