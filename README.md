# UMD Dineify
When a student first enters campus, it can be hard to find the foods the student wants or needs to eat. An application helps with this problem by giving a way for students to find their favorite foods at UMD Dining Halls. The dining halls have a diverse variety of food so there is something for everybody. Our application uses Sequelize and Express.js to access and modify data from the UMD Dining Halls SQL database.

## Link to Website
https://group7-final.herokuapp.com/

## Target Browsers
1. Desktop/Laptops
		- Chrome, Microsoft Edge
		- Windows
			Ex: Hp laptop 14
        Mac 
			Ex: Macbook Pro 15
2. Tablets
		- Ipad on IOS
		- Surface Pro 7 on Windows
3. Mobile
		- Samsung Galaxy S8+ on Android
		- iPhone 7+ on IOS

## Links

http://localhost:3000/manual.html

https://group7-final.herokuapp.com/manual.html

## Developer Manual

### How to install application and all dependencies
1. Use Git or Github Desktop to clone this project to your desired repository.
2. Install express.js if you have not already.
    [Express Installation] (https://expressjs.com/en/starter/installing.html)
3. Install sequelize if you have not already.
    [Sequel Installation] (https://www.npmjs.com/package/sequelize)
4. Download and install mysql Workbench for testing purposes
    [MySQL Installation] (https://dev.mysql.com/downloads/workbench/)
5. Application is now ready to use.

### How to run application on a server
1. Open the repository of this application.
2. Type in npm start into terminal and run it.
3. Go to your web browser and type in the url: http://localhost:3000/.

### To run tests for software
1. Open two terminals and make sure you are in the main project directory
2. In the first terminal, run npm start.
3. In the second terminal run npm test

### Server Application and APIs
**/food** - Api route for getting info about food in the dining halls

		PUT - Updates the food name in the database to whatever food the user typed into the form. Returns a JSON response that shows what value an entry has been updated with.

		GET - 
			/ - If there are no query parameters, return a JSON response with all foods in the database. 
			
			/search - Search for all foods in the database that match or contain values from the query parameter. Returns a JSON response with all matching entries

	        /:food_id - Returns a JSON response for a specific food id based on user input.

	        /:specific_hall - Search for all foods in a specified dining hall. Return a JSON response for all matching entries.

			
		DEL - 
			/delete - Delete entry from meal locations table based meal_id in query parameter. Returns a JSON response of the meal_id of the deleted item.
			
			/delete2 - Delete entry from meals table based meal_id in query parameter. Returns a JSON response of the meal_id of the deleted item.


		POST - 
			/post - Post entry into meals table based on user input on form. Returns a JSON response that shows value that user posted

			/post2 - Post entry into meals locations table based on user input on form. Returns a JSON response that shows value that user posted

**/dining** - Api route for getting info about the available dining halls

		PUT - 

        Updates dining hall information into the database based on what the user types into the form. Returns a JSON response that shows what value an entry has been updated with. Can update hall id, hall name, address, longitude, and latitude
		
		GET -

        / - If there are no query parameters, return a JSON response with all dining halls in the database

        /hall_id: - Returns a JSON response for a specific hall id based on user input

		DEL - 
        
        /delete/:hall_id - Deletes an entry from dining hall table based on its id

		POST - 
        
        /post - Post entry into dining hall table based on user input on form. Returns a JSON response that shows the value that the user posted

### Known Bugs and Future Development

**Bugs**

1. Sometimes it can take awhile to update or post entries on the database.This could possibly be due to slow internet issues.

2. Sometimes all foods on the database cannot be displayed on the “All foods available” front end component. This can happen if a user enters a new entry in the database and then immediately refreshes the page.

**Future Development**
		
1. For each item displayed, also display their nutrient content.

2. Get the menus and info of nearby restaurants, add them to the meals database and display the menus to users on the app.

3. Add a feature where users can post reviews of foods in the database.

4. Add a user profiling and favoriting feature, where users have their own user profile and be able to “favorite” restaurants they like.

5. Include a map of all the dining location as a visual aspect 

