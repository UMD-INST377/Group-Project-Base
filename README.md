# UMD Food Services
UMD Food Service is a website developed by Chandra Tamang, Spencer VarZandeh, Amy Sylla, and Casie Thomas. We created the website to make the dining hall's location and its menu items more accessible to the University of Maryland community members. A user could use our website to find food items and their nutritional details. Moreover, a user will be able to find dining hall locations and their opening and closing hours for the weeks. In addition, The website allows users to add new data and update or delete existing data in our database.

### Heroku Link

# Developer Manual
1. **How to install your application and all dependencies**
  - To work on Group22-Project
    - Fork the repository and clone it on your local folders
  - npm Installion
    - Type "npm install" in your terminal
  - Git Installtion
    - macOS
      - Install brew if you do not have it
      - Command for installing brew is /bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"
      - Then type "brew install git" in your terminal
    - Window
      - [Choose compatible option from the list](https://git-scm.com/download/win)
  - Postman
    - Use browser or indtall the application
    - [Choose appropriate option for your device from this website](https://www.postman.com/downloads/)
2. **How to run your application on a server**
  - Run website on local server
    - Type "npm start" and copy/paste the link on browser
  - Heroku automatically deploy the program so click on "Open app" after commiting your work
  - If automatic deployment fail
    - [Follow the instruction on this website](https://devcenter.heroku.com/articles/heroku-cli)
3. **How to run any tests you have written for your software**
  - To test api routes
    - Open postmen
    - Choose GET, PUT, POST, or DELETE from dropdown menu
    - Type the link, for example http://localhost:3000/chandra/mealUpdate/
    - Click send
4. **The API for your server application - all GET, POST, PUT, etc endpoints, and what they each do**
  - GET
    - gets data from database "Group22_Dining_Hall_Tracker".
  - POST
    - Create new items on database.
  - PUT
    - Update existing items on database.
5. **A clear set of expectations around known bugs and a road-map for future development.**
  - Expectations
    - CSS style might not be 100% consistent throughout the website.
  - Future Development
    - Add interactive map
    - Make interface minimal

### How to use Markdown
Markdown is a text notation system used in Discord, Whatsapp and similar to structure pages without writing HTML at all. You'll be using it for your documentation.
* [Markdown guide](https://www.markdownguide.org/cheat-sheet/)
