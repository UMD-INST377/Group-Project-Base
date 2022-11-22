    function injectHTML(list){
    // console.log('fired injectHTML');
    // const target = document.querySelector('#')
    }   
    function processRestaurants(list) {
        console.log('fired food list');
        const range = [...Array(15).keys()]; // special notation to create an array of 15 elements
        const newArray = range.map((item) => {
        const index = getRandomIntInclusive(0, list.length);
        return list[index];
        });
        return newArray;
    
    function initChart(chart, object) {
        const labels = Object.keys(object);
        const info = Object.keys(object).map((item) => object[item].length);
    
        const data = {
        labels: labels,
        datasets: [{
            label: 'Restaurants By Category',
            backgroundColor: 'rgb(255, 99, 132)',
            borderColor: 'rgb(255, 99, 132)',
            data: info
        }]
        };
    
        const config = {
        type: 'bar',
        data: data,
        options: {}
        };
    
        return new Chart(
        chart,
        config
        );

    function changeChart(chart, dataObject) {
        const labels = Object.keys(dataObject);
        const info = Object.keys(dataObject).map((item) => dataObject[item].length);
      
        chart.data.labels = labels;
        chart.data.datasets.forEach((set) =>{
          set.data = info;
          return set;});
        chart.update();
      }
      
    function shapeDataForLineChart(array) {
        return array.reduce((collection, item) => {
          if (!collection[item.category]) {
            collection[item.category] = [item];
          } else {
            collection[item.category].push(item);
          }
          return collection;
        }, {});
    }

    async function getData() {
        const fetch = require('node-fetch');
        const url = 'https://calorieninjas.p.rapidapi.com/v1/nutrition?query=tomato';

        const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': 'e2a17786bamsh39f2855f9aaf40dp1b10c0jsnf0ccf57e91e0',
            'X-RapidAPI-Host': 'calorieninjas.p.rapidapi.com'
        }
        };

        fetch(url, options)
            .then(res => res.json())
            .then(json => console.log(json))
            .catch(err => console.error('error:' + err));
        
        const data = await fetch(url); // We're using a library that mimics a browser 'fetch' for simplicity
        const json = await data.json(); // the data isn't json until we access it using dot notation
        const reply = json.filter((item) => Boolean(item.geocoded_column_1)).filter((item) => Boolean(item.name));
        return reply;
        
    
    async function mainEvent () {
        const chartTarget = document.querySelector('#myChart');
        submit.style.display = 'nonr';
        const chartData = await getData();
        const shapaedData = shapeDataForLineChart(chartData);
        console.log(shapaedData);
        const myChart = initChart(chartTarget, shapaedData);

        form.addEventListener('input',(event) => {
            currentList = processRe
            injectHTML(currentList);
            const localData = shapeDataForLineChart(currentList);
            changeChart(myChart, localData);
        })
        
    }

document.addEventListener('DOMContentLoaded', async () => mainEvent());

