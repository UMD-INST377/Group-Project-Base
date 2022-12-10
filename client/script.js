
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'e421dae6f5msh781141400772cc1p133bfdjsn7330a891d044',
		'X-RapidAPI-Host': 'yahoo-finance15.p.rapidapi.com'
	}
};

async function getData() {
    var userInput = document.getElementById('userInput').value;
    //var test1 = await changeText2()
    //console.log(test1)
    url = 'https://yahoo-finance15.p.rapidapi.com/api/yahoo/qu/quote/'+userInput+'/financial-data'
    data = await fetch(url,options)
    res =  await data.json()
        //return res
    result = res.financialData
    char_data=[result.totalRevenue.longFmt,result.grossProfits.longFmt]
    data_filter=["Current Price: "+result.currentPrice.raw,"Earnings Growth: "+result.earningsGrowth.fmt,"Total Revenue: "+result.totalRevenue.fmt,
    "Gross Profits: "+result.grossProfits.fmt,"Profit Margins: "+result.profitMargins.fmt]
    //console.log(data_filter)

    var new_data = "";
    for (var i =0; i < data_filter.length; i++) {
    new_data += "<li>" + data_filter[i]+ "</li>";
}
    const ctx = document.getElementById('myChart');

    new Chart(ctx, {
        type: 'bar',
        data: {
        labels: ['Gross Profits', 'Total Revenue'],
        datasets: [{
            label: 'Profit Margin',
            data: [parseInt(char_data[0]),parseInt(char_data[1])],
            borderWidth: 1
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



    document.getElementById('apiResponse').innerHTML = new_data;
}

