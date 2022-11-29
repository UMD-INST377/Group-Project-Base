var xmlhttp = new XMLHttpRequest();
var url = "'https://api.coindesk.com/v1/bpi/currentprice.json'";
xmlhttp.open("GET",url,true);
xmlhttp.send();
xmlhttp.onreadystatechange = function(){
    if(this.readyState == 4 && this.status == 200){
        var data = JSON.parse(this.responseText);
        //console.log(data)
        date = data.date_population.map(function(elem){
            return elem.date;
        })
        population = data.date_population.map(function(elem){
            return elem.population;
        })
        //console.log(population)

        const ctx = document.getElementById('canvas').getContext('2d');
        const myChart = new Chart(ctx, {
            type: 'bar',
            data: {
                labels: date,
                datasets: [{
                    label: 'Population',
                    data: population,
                    backgroundColor: "#ff335e"
                    
                }]
            },
            options: {
                scales: {
                    y: {
                        beginAtZero: true
                    }
                }
            }
        });
    }

}
