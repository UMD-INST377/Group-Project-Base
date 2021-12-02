# INST377 Group 25 - Top 10 University Recommendation Website

This website allows students to find their ideal schools by relying on user-selected criteria and matching the constraints against our database of Top 10 schools in the United States.

## Getting Started

* "Clone" or download this repository using the large green button marked "code"
* Install the software dependencies
* Start your server, which will run on `port 3000` locally

### Install Dependencies

```npm install```

### Run the Server

```npm start```

<hr>

Below are details of the API contained within the scope of this project.

<hr>

## REST API example using Sequelize
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

# Schools

## Get list of Top 10 schools

#### Request

`GET /api/schools`

```curl http://localhost:3000/api/schools```

#### Response
```
{
  "status": "success",
  "data": [
    {
      "university_id": 1,
      "university_name": "Illinois"
    },
    {
      "university_id": 2,
      "university_name": "Indiana"
    },
    {
      "university_id": 3,
      "university_name": "Iowa"
    },
    {
      "university_id": 4,
      "university_name": "Maryland"
    },

    ...
  ]
}
```

## Get a Specific School

#### Request

`GET /api/schools/:rank_id`

`curl http://localhost:3000/api/schools/1`

#### Response

```
{
  "status": "success",
  "data": [ ... ]
}
```



## Get a Specific School's Reviews

#### Request

`GET /api/schools/:rank_id/reviews`

#### Response

```
  [HTML]
```

## Create a Review

#### Request

`POST /api/schools/:rank_id/review`

#### Response

```
{
  status: "success"
}
```

## Get a School location

#### Request

`GET /api/schools/:rank_id/univ_location`

#### Response

```
{
  status: "success",
  data: [
    {
      "Street": "",
      "City": "",
      "State": "",
      "Zip": ""
    }
  ]
}
```

## Get all School Test Scores

#### Request

`GET /api/test_scores`

#### Response

```
{
  "status": "success",
  "data": [
    {
      "testscore_id": 1,
      "university_name": "Illinois",
      "SAT_average": 1340,
      "univ_location": "Champaign County, Illinois"
    },
    {
      "testscore_id": 2,
      "university_name": "Indiana",
      "SAT_average": 1255,
      "univ_location": "Bloomington, Indiana"
    },
    {
      "testscore_id": 3,
      "university_name": "Iowa",
      "SAT_average": 1235,
      "univ_location": "Iowa City, Iowa"
    },
    {
      "testscore_id": 4,
      "university_name": "Maryland",
      "SAT_average": 1375,
      "univ_location": "College Park, Maryland"
    },

    ...
  ]
}
```
