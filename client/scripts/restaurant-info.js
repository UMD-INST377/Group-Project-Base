// Script by Bryan Pham

const menuList = document.querySelector('.menu-list');
console.log(menuList)
let searchResults = [];
let diningHall = 'The Diner';

//get results from users request
async function getMenu(){
    try {
        console.log('Function called')
        const response = await fetch(`/api/food/specific_hall?dining_hall='${diningHall}'`)
        const formattedResponse = await response.json();
        searchResults = formattedResponse;
        
        console.log(formattedResponse);
    } catch (e){
        console.log('Error - ' + e)
    }
}


function displayMenu(){
    // show only 7 choices so page does not become too l
    searchResults.map(meal => {
        const newEntry = document.createElement('div')
        newEntry.classList.add('menu-item');
        newEntry.textContent = `${meal['meal_name']}`
        menuList.appendChild(newEntry);
    })
}

getMenu().then(() => displayMenu())
