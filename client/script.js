/* eslint-disable */

function send_req(){
        let xhr = new XMLHttpRequest();
        let base_url = "https://en.wikipedia.org/w/api.php?action=query&origin=*&format=json&generator=search&gsrnamespace=0&gsrlimit=5&gsrsearch=";

        search_query = document.querySelector('#search_item').value;
        url = base_url + "'" + search_query + "'"

        xhr.open('GET', url, true);

        xhr.onload = function() {
        // Parse the request into JSON
        let data = JSON.parse(this.response);

        // Log the data object
        console.log(data);

        // Log the page objects
        console.log(data.query.pages);

       
        let array = [];
        for (var i in data.query.pages) {
            array.push(data.query.pages[i].title);
            populate_results(array)
;        }
    }

    xhr.send();
}

function handle_click(){
    if (document.querySelector('#search_item').value < 1){
        window.alert("Field is blank");
    }
    else{
        send_req();
    }
}

function populate_results(list) {
    console.log('fired populate_results');
    const target = document.querySelector('#results');
    target.innerHTML = '';
    const list_item = document.createElement('ol');
    target.appendChild(list_item);
    list.forEach((item) => {
      const value = document.createElement('li');
      value.innerText = item;
      list_item.appendChild(value);
    });
}


function main(){
    document.getElementById("submit_button").addEventListener("click", handle_click);
}



/* eslint-disable */

