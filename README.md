# Clato
## Description
Clato is a site designed to explore common ansestory between species by being able to see the divergence between creatures through time provides an exciting and stimulating way to make scientific abstractions tangible & real. Our goal is to bridge the gap between scientific research available to the public on biology & taxonomy and intellectually curious members of the public who want to understand more about current scientific models for Life on Earth. Specifically, we want to create a visual index for the relationship between different creatures and how they play into frameworks that attempt to explain the history of life on our planet.

![Screen Shot 2022-05-10 at 10 26 35 PM](https://user-images.githubusercontent.com/79057519/167756543-6df2bc23-5a6e-4d74-9566-ff67817cc91d.png)

## Link to Website
https://clato.herokuapp.com/
## Target Browsers
* IOS/Android
* Google Chrome/Apple Safari
## Links
* [Developer Manual](https://github.com/inst377-group3/Final-Project-Base/blob/main/README.md#developer-manual)

# Developer Manual
## How to install application and all dependencies
1. Clone this repository through Github Desktop or through Terminal.
2. Open repository in VSCode Terminal or Terminal application.
3. Type `npm install` into terminal window to download project dependencies.
## How to run application on a server
1. Open repository in VSCode terminal or Terminal application.
2. Run `npm start`. There should be no errors.
3. In a web browser, go to url: http://localhost:3000/.

## Server application APIs

[![Run in Postman](https://run.pstmn.io/button.svg)](https://app.getpostman.com/run-collection/1f8a112f2908e715f9a1?action=collection%2Fimport)

`/table`

GET - Returns all rows (species) within the selected table (family tree).

DELETE - Deletes a single row (species) from a selected table (family tree). 


# Known Bugs and Future Development
### Bugs: 
* About Page: Forms don't always remember user input
* Saved Page: Resolve any race conditions related to session storage
* Solve existing undefined errors in Express routes
* Queries table does not update username field when existing accounts change their username
### Future Development:
* Make a logo!
* Replace banner background image with an image of our own generated diagram
* Improve D3.js visualizations
* Click to drag in diagram container
* Add result card components to the saved results page
* Web workers + client-side encryption to further secure user data 
* Persist state across pages so that queries do not need to be run on each page
