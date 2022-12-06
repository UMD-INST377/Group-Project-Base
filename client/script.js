/* eslint-disable */

function getRandomIntInclusive(min, max) {
    const newMin = Math.ceil(min);
    const newMax = Math.floor(max);
    return Math.floor(Math.random() * (newMax - newMin + 1) + newMin);
}

/* API request */
function send_top_req(){
    let xhr = new XMLHttpRequest();
    let base_url = "https://en.wikipedia.org/w/api.php?action=query&origin=*&format=json&generator=search&gsrnamespace=0&gsrlimit=10&gsrsearch=";

    search_query = document.querySelector('#search_item').value;
    url = base_url + "'" + search_query + "'"

    xhr.open('GET', url, true);

    xhr.onload = function() {
    // Parse the request into JSON
    let data = JSON.parse(this.response);

    // Log the page objects
    //console.log(data.query.pages);

    let title_array = [];
    let id_array = []
    for (var i in data.query.pages) {
        title_array.push(data.query.pages[i].title);
        id_array.push(data.query.pages[i].pageid)
        
    populate_results_top(title_array, id_array)
    
;        
}
}

xhr.send();
}

function send_rand_req(){
        let xhr = new XMLHttpRequest();
        let base_url = "https://en.wikipedia.org/w/api.php?action=query&origin=*&format=json&generator=search&gsrnamespace=0&gsrlimit=200&gsrsearch=";

        search_query = document.querySelector('#search_item').value;
        url = base_url + "'" + search_query + "'"

        xhr.open('GET', url, true);

        xhr.onload = function() {
        // Parse the request into JSON
        let data = JSON.parse(this.response);

        // Log the page objects
        //console.log(data.query.pages);
        
        process_rand_results(data);
        
        
    }
    xhr.send();
}

function process_rand_results(data){
    let title_array = [];
    let id_array = []
    for (var i in data.query.pages) {
        title_array.push(data.query.pages[i].title);
        id_array.push(data.query.pages[i].pageid)
    }
    populate_results_rand(title_array, id_array)
};

/* makes sure the field isnt empty */
function handle_rand_click(){
    if (document.querySelector('#search_item').value < 1){
        window.alert("Field is blank");
    }
    else{
        send_rand_req();
    }
}

function handle_top_click(){
    if (document.querySelector('#search_item').value < 1){
        window.alert("Field is blank");
    }
    else{
        send_top_req();
    }
}

/* populate results onto the website */
function populate_results_rand(titles, ids) {

    const target = document.querySelector('#results');
    target.innerHTML = '';
    const list_item = document.createElement('ul');
    target.appendChild(list_item);

    for (let i = 0; i < 10; i++) {
        new_index = getRandomIntInclusive(0, titles.length)
        article_id = ids[new_index]
        dir_url = 'https://en.wikipedia.org/w/index.php?curid=' + article_id;
        const item_link = document.createElement('a');
        const value = document.createElement('li');
        item_link.setAttribute('href', dir_url);
        item_link.setAttribute('target', '_blank')
        value.innerText = titles[new_index];
        item_link.appendChild(value);
        list_item.appendChild(item_link)
    }
}

function populate_results_top(titles, ids){
    const target = document.querySelector('#results');
    target.innerHTML = '';
    const list_item = document.createElement('ul');
    target.appendChild(list_item);

    titles.forEach((item, i) => {
        article_id = ids[i]
        dir_url = 'https://en.wikipedia.org/w/index.php?curid=' + article_id;
        const item_link = document.createElement('a');
        const value = document.createElement('li');
        item_link.setAttribute('href', dir_url);
        item_link.setAttribute('target', '_blank')
        value.innerText = item;
        item_link.appendChild(value);
        list_item.appendChild(item_link)
    });
}

/* event listeners on the buttons */
function main(){
    // const form = document.getElementById('#search');
    const top = document.getElementById("get_top");
    const rand = document.getElementById("get_rand");
    // const search = document.getElementById('#search_item')

    // if (search){
    //     console.log('entered search')
    //     search.addEventListener('change', (event) => {
    //         let top_clicks = 0;
    //         let rand_clicks = 0;
    
    //         //top.addEventListener("click", handle_top_click);
    
    //         if (rand_clicks === 0){
    //             console.log('rand is 0')
    //             rand.addEventListener("click", function() {
    //                 rand_clicks += 1;
    //                 rand.addEventListener("click", handle_rand_click);
    //             });
            
    //         } else {
    //             console.log('u clicked rand 2 times')
    
    //         }
    //     });
    // }
  
    
    //handle_rand_click();



    //THIS WORKS

    top.addEventListener("click", handle_top_click);
    rand.addEventListener("click", (submitEvent) => {
        submitEvent.preventDefault();
        handle_rand_click()
        
    });

}



/* eslint-disable */

