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

const barChart = new Chart(ctx, {
    type: 'bar',
    data: data,
    options: {
        scales: {
            x: {
                stacked: true
            },
            y: {
                stacked: true
            }
        }
    }
});


/* source: https://observablehq.com/@anirudhb/alphabet-visualization-with-d3

let margin = {left: 50, top: 10, bottom: 30, right: 10};
  let w = width-margin.left-margin.right;
  let h = height-margin.top-margin.bottom;
  let alphabet2 = alphabet.sort(sort)
  let [letters, frequencies] = [alphabet2.map(x=>x.letter), alphabet2.map(x=>x.frequency)]
  let x = d3.scaleBand().domain(letters).range([0, w]).padding(0.2)
  let y = d3.scaleLinear().domain(d3.extent(frequencies)).nice().range([h, 0])
  let line = d3.line()
    .x(function(d) { return x(d.letter); })
    .y(function(d) { return y(d.frequency); })
  let svg = DOM.svg(width, height)
  let d = d3.select(svg)
  d.selectAll()
      .data(alphabet2)
    .enter()
    .append("rect")
      .attr("x", (d,i)=>margin.left+x(d.letter))
      .attr("y", (d,i)=>margin.top+y(d.frequency))
      .attr("width", x.bandwidth())
      .attr("height", (d,i)=>h-y(d.frequency))
      .attr("stroke", "transparent")
      .attr("fill", "blue")
  d.append("g")
      .call(g =>
         g
            .attr("transform", `translate(${margin.left}, ${height-margin.bottom})`)
            .call(d3.axisBottom(x).tickSizeOuter(0))
       )
  d.append("g")
      .call(g =>
         g
            .attr("transform", `translate(${margin.left}, ${margin.top})`)
            .call(d3.axisLeft(y))
       )
  return svg
}

*/

/* eslint-disable */

