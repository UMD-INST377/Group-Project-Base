# README.md

Github = https://github.com/vezfly/Group9-Final-INST377SP2022

Heroku App = https://mydietaryassistant.herokuapp.com/index.html


*My Dietary Assistant*

MyDietaryAssistant is a simplified platform that allows users to access information from the UMD Dining Hall Database through personalized queries.

Target browsers are mainly desktop users but the platform can be utilized by users of any device who are UMD Students or Staff and would like to gather information from the database.


# Developer Manual

## Installation

Make sure you are signed in to Heroku with:

    heroku login

Then download npm packages with:

    npm install

Run the browser [My Dietary Assitant](http://localhost:3000) to display the webpage on your local host with:

    npm start
    
(OR) you can push the website content to your heroku app with:

    git push heroku main

## Webpages/Simplified Code

### index.html
    
    ![Green robot sitting on a food tree](dietary_assistant_logo.png)
    
    > Hello, My name is Trakky!
      Welcome to My Personal Dietary Assistant!
      We are an on-campus tool created to help support you on your dietary journey.
      All of the information we provide will be personalized to fit your dietary needs.
      PLEASE ENTER THE SITE BELOW.

    [START](https://mydietaryassistant.herokuapp.com/dietplan.html)

### dietplan.html

 
    ![Green robot sitting on a food tree](top_left_logo.png)

    [Home](index.html)
    [Calorie Count](dietplan.html)
    [Meal Requests](mealrequest.html)
    [Meal Search](meal_search.html)

    ![My Personal Dietary Assistant Inc.](bottom_left_logo.png)
    ![My Personal Dietary Assistant Inc.](bottom_left_logo.png)
    | <form action='route' method='get' class='form'> | A table from the Dining Hall Database stored on MySQL |
    | ------------------------------------------- | -------------------------------------------- |
    | Hall Name | Calories |
    | `<th></th>` | `<th></th>` |

    (tableCreate.js)

### meal_request.html

    ![Green robot sitting on a food tree](./images/top_left_logo.png)

    [Home](index.html)
    [Calorie Count](dietplan.html)
    [Meal Requests](mealrequest.html)
    [Meal Search](meal_search.html)

    ![My Personal Dietary Assistant Inc.](bottom_left_logo.png)

    | <form action='api/will/meals' method='post' class='form'> | A table from the Dining Hall Database stored on MySQL |
    | ------------------------------------------- | -------------------------------------------- |
    | Meal Name | Meal Category |
    | `<th></th>` | `<th></th>` |

    (tableCreate.js)

### meal_search.html

    ![Green robot sitting on a food tree](./images/top_left_logo.png)

    [Home](index.html)
    [Calorie Count](dietplan.html)
    [Meal Requests](mealrequest.html)
    [Meal Search](meal_search.html)

    ![My Personal Dietary Assistant Inc.](bottom_left_logo.png)

    | <form action='route' method='get' class='form'> | A table from the Dining Hall Database stored on MySQL |
    | ------------------------------------------- | -------------------------------------------- |
    | Meal ID | Meal Name | Meal Category |
    | `<th></th>` | `<th></th>` | `<th></th>` |

    (tableCreate.js)
    (mealSearch.js)
