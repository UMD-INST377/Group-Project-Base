# Group 10 Music Data

[Group 10 Git Repository](https://github.com/annachk/Group10-Final-INST377SP2021)

[Group 10 Heroku Instance](https://group10-final-inst377.herokuapp.com/index.html)

## Title
Music Data

## Description
We intend to develop a system that can assist users with inquiries such as predicting future trends, which genres and artists could be involved in the next big hit, when retro concepts will become popular again, and so on. 

When you open the application, you will be brought to our home page which will display the top ten artists and albums. From that page, you can use the navigation bar on the top left corner of the screen to navigate to the search page or the custom input page. The breakdown of our pages are as follows:

- The home page will have the top 10 artists and albums displayed. 
- The search page will allow the user to search for a specific song, genre, or artist.
- The custom input page will allow users to input their own music into the database.

## Target Browsers
The target browsers for our application are most, if not all, devices with web browser capabilities. Ideally, the user should use the latest versions of their technology, but our application should be avaialable to most softwares including the most popular ones like IOS, Android, Google Chrome, etc.

# Developer Manual

## How to install the application and all dependencies
To download our actual project, just select the clone repository button for this repository to clone it to your computer. Once you have cloned it, you could also fork it by clicking on the 'fork' button in the upper right hand corner. This allows you to use it as a repository for only your device. Using Github desktop is the most straight-forward way to clone the repository. You can find information about Github Desktop here: https://desktop.github.com/

The only other dependency we have is Bulma. We have already linked it to the HTML so that part is set up, but the user would need to install Bulma on their console. https://bulma.io/ has easy to follow instructions on how to do this and plenty of examples and tutorials to guide the user.

## How to Run the Application on a Server
To run on a server, the user can follow the link [HERE](https://group10-final-inst377.herokuapp.com/index.html), which is the link to the Heroku instance that we have documented at the being of this README. This link will take the user to a live instance of the app where they could use the app to its full capacity.

## Tests
The only tests we have set up thus far are the `console.log`'s that we have set up to be able to check if the server is responding correctly. For example, these tests helped us notice the reason that our form submission was not sending data due to an "UnhandledPromiseRejectionWarning", so we knew that model was not defined properly in our backend.


# Documentation 

## Bugs and Incomplete Code
As of now the custom input form does not send the data back to the server. The errortype is an UnhandledPromiseRejectionWarning. Our team has worked to try and solve this, but we have not been able to figure it out as of yet. 
