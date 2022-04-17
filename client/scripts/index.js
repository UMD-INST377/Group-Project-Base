//Created by Bryan Pham

const searchBar = document.querySelector('.search-bar-input');
const searchButton = document.querySelector('.search-button');
const searchConfirmation = document.querySelector('.search-confirmation');
const resultsRow = document.querySelector('.results-row');
const resultsHeader = document.querySelector('.results-header')
 
let stars = document.querySelectorAll('.fa-star') ;
let inputValue = '';
let searchHistory = [];
let searchResults = [];

//add eventlistener to each star to show favorited
for (const star of stars) {
    star.addEventListener('click', (e)=> {
        star.classList.toggle('favorited');
    })
}

//get results from users request
async function searchFood(food){
    try {
        console.log('Function called')
        const response = await fetch('/api/food/search?food='+ food)
        const formattedResponse = await response.json();
        searchResults = formattedResponse;
        
        console.log(formattedResponse);
    } catch (e){
        console.log('Error - ' + e)
    }
}



//get value of searchbar
searchBar.addEventListener('input', (e) => {
    inputValue = e.target.value.toLowerCase().trim();
});

//search for food after clicking button
searchButton.addEventListener('click', (e) => {
    searchFood(inputValue).then(() => {
        addResultsCard();
        resultsHeader.textContent = `There are ${searchResults.length} search result(s) for:  ${inputValue}`;
    });
    searchConfirmation.classList.add('visible');   
    resultsHeader.classList.add('visible');   
    
})

//create search result card entry
function addResultsCard(){

    //clear search results before 
    resultsRow.innerHTML = '';
    const entryLabelsArr = ['Food','Location', 'Location Address', 'Location Distance' ]
    
    searchResults.map((result)=> {

        //console.log(result );
        const resultEntry = document.createElement('div');
        resultEntry.classList.add('result-entry') ;

        let food = result['meal_name'];
        let location = result['hall_name'];
        let address = result['hall_address'];
        //placeholder for now
        let distance =  '23 miles'; 

        // fill each entry card with info
        [food,location,address,distance].map((elm, index)=> { 

            const resultFoodHeader = document.createElement('div');
            resultFoodHeader.textContent = entryLabelsArr[index % 4];
            resultFoodHeader.classList.add('entry-header') ;
            resultEntry.appendChild(resultFoodHeader);
    
            const resultFoodValue = document.createElement('div');
            resultFoodValue.textContent = elm;
            resultFoodValue.classList.add('entry-value') ;
            resultEntry.appendChild( resultFoodValue);
        })

        resultsRow.appendChild(resultEntry);
        
    }) 
    
}






