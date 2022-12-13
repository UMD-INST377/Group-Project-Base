/* eslint-disable */
let data;
let mostRecentSearch;

function retrieveSearchData(callback) {
    const search_query = document.querySelector('#search_item').value;
    if (search_query === mostRecentSearch) {
        callback(data);
        return;
    }
    mostRecentSearch = search_query;

    let xhr = new XMLHttpRequest();
    let base_url = "https://en.wikipedia.org/w/api.php?action=query&origin=*&format=json&generator=search&gsrnamespace=0&gsrlimit=200&gsrsearch=";
    url = base_url + "'" + search_query + "'";

    xhr.open('GET', url, true);
    
    xhr.onload = function() {
        data = JSON.parse(this.response);
        callback(data);
    }
    xhr.send();
}

function getRandomIntInclusive(min, max) {
    const newMin = Math.ceil(min);
    const newMax = Math.floor(max);
    return Math.floor(Math.random() * (newMax - newMin + 1) + newMin);
}

/* API request */
function send_top_req(){
    retrieveSearchData((data) => {
        let title_array = [];
        let id_array = []
        for (var i in data.query.pages) {
            title_array.push(data.query.pages[i].title);
            id_array.push(data.query.pages[i].pageid)
        }
        populate_results_top(title_array, id_array)
    });
}

function send_rand_req(){
    retrieveSearchData((data) => {
        let title_array = [];
        let id_array = []
        for (var i in data.query.pages) {
            title_array.push(data.query.pages[i].title);
            id_array.push(data.query.pages[i].pageid)
        }
        populate_results_rand(title_array, id_array)
    });
}

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

/* populate results onto the website and initiates chart */
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
    build_chart();
}

function populate_results_top(titles, ids){
    const target = document.querySelector('#results');
    target.innerHTML = '';
    const list_item = document.createElement('ul');
    target.appendChild(list_item);
    for (let i=0; i<10; i++){
        let item = titles[i];
        article_id = ids[i]
        dir_url = 'https://en.wikipedia.org/w/index.php?curid=' + article_id;
        const item_link = document.createElement('a');
        const value = document.createElement('li');
        item_link.setAttribute('href', dir_url);
        item_link.setAttribute('target', '_blank')
        value.innerText = item;
        item_link.appendChild(value);
        list_item.appendChild(item_link)
    }
    build_chart();

}

/* Counts frequency of each character*/
function getFrequency(string) {
    var freq = {};
    for (var i=0; i<string.length;i++) {
        var character = string.charAt(i).toUpperCase();
        if (character === " ") {
        }
        else if (freq[character]) {
           freq[character]++;
        } else {
           freq[character] = 1;
        }
    }

    return freq;
};

function build_chart(){
    let canvas = document.getElementById("bar");
    let list_titles = document.getElementById("results").getElementsByTagName("li");
    arr = Array.from(list_titles).map(linkElem => linkElem.innerHTML);
    str = arr.join('');
    no_special_str = str.replace(/[^a-zA-Z0-9 ]/g, '')
    freqs = getFrequency(no_special_str);
    const ordered = Object.keys(freqs).sort().reduce(
        (obj, key) => { 
          obj[key] = freqs[key]; 
          return obj;
        }, 
        {}
      );
    let keys = Object.keys(ordered);
    let values = Object.values(ordered);

    let config = {
        type: "bar",
        data: 
            {labels: keys,
            datasets: [{
                label: "Frequency of Characters in Your Results", 
                data: values,
                borderColor: '#eb8752',
                backgroundColor: '#eb8752'}]},
        options: {
            scales: {
                y: {
                  title: {
                    display: true,
                    text: 'Frequency'
                  }
                },
                x: {
                    title: {
                      display: true,
                      text: 'Characters'
                    }
                  }
            }
        }
    };

    if (
        window.chart !== undefined
        &&
        window.chart !== null
    ) {
        window.chart.destroy();
    }

    window.chart = new Chart(canvas, config);
}

/* event listeners on the buttons */
function main(){

    const top = document.getElementById("get_top");
    const rand = document.getElementById("get_rand");


    top.addEventListener("click", handle_top_click);
    rand.addEventListener("click", (submitEvent) => {
        submitEvent.preventDefault();
        handle_rand_click()
        
    });

}

/* eslint-disable */

