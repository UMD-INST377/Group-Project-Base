// Script by Bryan Pham

const menuList = document.querySelector('.menu-list');
const foodChoice = document.querySelector('#foodChoice');
const newFoodName = document.querySelector('#newFoodName');
const submitBtn = document.querySelector('#submit-btn');
const small = document.querySelector('.form-small');
const restaurantButtons = document.querySelectorAll('.restaurant-button');
const restaurantInputs = document.querySelectorAll('.correction-input');
 
 

let searchResults = [];

let diningHall = 'The Diner';

let serverResponse = '';

//get results from users request
async function getMenu(){
    try {
        console.log('Function called')
        const response = await fetch(`/api/food/`)
        const formattedResponse = await response.json();
        searchResults = formattedResponse;
        
        console.log(formattedResponse);
    } catch (e){
        console.log('Error - ' + e)
    }
}

//update menu 
async function updateMenu(newFood, foodId){
    try {
        console.log('Function called')
        const response = await fetch(`/api/food/update?new_food_name=${newFood}&meal_id=${foodId}`,{
            method: 'PUT', // or 'PUT'
        })
        const formattedResponse = await response.json();
        serverResponse = formattedResponse;
        
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
        newEntry.textContent = `${meal['meal_name']} (${meal['hall_name']})`
        menuList.appendChild(newEntry);
        //console.log(meal);
    })

    getFoodId('scrambled eggs')
}


function getFoodId(foodName){
    foodName = foodName.toLowerCase();
    let foodId = 0;
    console.log('Scrambled Eggs')
    searchResults.map(result => {
         
         if(result['meal_name'].toLowerCase() === foodName){
             console.log(result['meal_id'])
             foodId = result['meal_id'];
         }
    })

    return foodId;
}


function addEventListenersToRadioButtons(){

    // convert HTMLCollection to array
    let buttonsArr = [...restaurantButtons]
    console.log(buttonsArr)
    buttonsArr.map(button => {
        button.addEventListener('click', e =>{
            let childArr = [...button.children] 
            childArr[0].checked = !childArr[0].checked;
            console.log(childArr[0].id)
            hideInputs(childArr[0].id)
        })

    })
}



function hideInputs(inputId){
    let restrArray = [...restaurantInputs]
    // show both inputs (one for food target and one for new replacement value) with update
    console.log(restrArray[1])
    if(inputId === 'update'){
        restrArray.map(inputElm =>{
            inputElm.classList.remove('invisible');
            inputElm.classList.add('visible');
        })
    } else {
        restrArray[1].classList.remove('visible');
        restrArray[1].classList.add('invisible');
    }
}


submitBtn.addEventListener("click", e => {
    e.preventDefault();
    console.log('btn clicked!')
    let foodName = newFoodName.value;
    let foodId = getFoodId(foodChoice.value);
    updateMenu(foodName, foodId).then(() => {
        small.textContent = serverResponse;
        small.classList.add('visible');;
    });

}) 


addEventListenersToRadioButtons()
getMenu().then(() => displayMenu())
