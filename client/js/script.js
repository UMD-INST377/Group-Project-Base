// Contribute Page 
const contributeForm = document.querySelector('#contribute_form');

function formToObject(htmlFormElement) {
    const formItem = new FormData(htmlFormElement).entries();
    const formArray = Array.from(formItem);
    const formObject = formArray.reduce((collection, item, index) => {
    if (!collection[item[0]]) {
        collection[item[0]] = item[1];
    }
    return collection;
    }, {});
    return formObject;
};

console.log(contributeForm)

contributeForm.addEventListener('submit', async (submitEvent) => {
    submitEvent.preventDefault();
    console.log(submitEvent)
    const formObj = formToObject(contributeForm);

    
    const postResult = await fetch('api/artist', {
        
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(formObj)

    
    });
    
    const postResultJSON = await postResult.json();
    console.log('return from POST', postResult);
    console.log('return from POST JSON', postResultJSON)
    

});

// Search Bar
// I say we just make the search bar change what is on the page just like in the labs
function inTuneSearch() {
    const searchBar = document.querySelector("#search_bar")
    console.log(searchBar.textContent)
} 

export function inTuneSearch();

