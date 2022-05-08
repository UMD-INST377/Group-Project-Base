# Information Science Careers Database

## Description
There is no good resource for the prospectives and incoming iSchool students to look what career scope they have after the graduation. This website will allow them look at companies the alumni's have gone to work, or worked at. The website also gives access to look at infomormation about students, advisors etc, and gives them the option to add, delete and update the records.

## Link to Website
https://dashboard.heroku.com/apps/group8-final-inst377sp2022

## Target browser
* Pixel 5 and earlier versions
* Desktop 

## [Developer Manual](https://github.com/ryan-lashuk/Group8-Final-INST377SP2022#developer-manual-1)

## Developer Manual
### How to install application and all dependencies
1. Clone this repository thourhg your terminal or Github desktop.
2. Open repository in your Text Editor Terminal (e.g. VSCode).
3. Kill all open terminal, by clicking the trash can.
4. type ``npm install`` into terminal and run.
5. The application is ready.

### How to run application on a server
1. Open repository in your terminal.
2. Run ``npm start``. Make sure there aren't any errors.
3. In a web browser, go to url: ```http://localhost:3000/```.

### Server application APIs
```/api/company``` - API route for company details.
* GET - Returns the table from the url.
* POST - adds the given data to the url. 
* PUT - returns response 'Successfully Updated'.

```/api/advisors``` - API route for advisors details.
* GET - Returns the table from the url.
* POST - adds the given data to the url. 
* PUT - returns response 'Successfully Updated'.
* 
* ```/api/students``` - API route for students details.
* GET - Returns the table from the url.
* POST - adds the given data to the url. 
* PUT - returns response 'Successfully Updated'.

```/api/career_services``` - API route for career_services details.
* GET - Returns the table from the url.
* POST - adds the given data to the url. 
* PUT - returns response 'Successfully Updated'.

## Known Bugs and Future Development
### Bugs:
- When try to filter "New York" city entries in the company table, it might not return all the entries. THe other cities are working just fine. 


### Future Development: 
*  Adding filters for tables other than company.
*  Adding a fucntionality for aggregration of data.
