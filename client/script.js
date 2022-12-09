/* const form = document.getElementById("form")

form.addEventListener('submit', (e) => { 
    e.preventDefault();
    // console.log("Form has been submitted!")
    const ticker = e.target.value;
}) */

/* var Fred = require('fred-api');

apiKey = process.env.FRED_KEY;
fred   = new Fred('04a0ff4303f5c02f2a434ad8543c1b1c');
fred.getSeries({series_id: 'GNPCA'}, function(error, result) {
    console.log(result)
}); */

async function getData(){
    url = `https://query1.finance.yahoo.com/v10/finance/quoteSummary/tsla?modules=financialData`
    try{
        const data = await fetch(url,headers={'User-Agent': 'My User Agent 1.0'})
        return await data.json()
    }
    catch (error){
        console.log("error",error)
    }
}

async function mainEvent(){
    const test = await getData();
    console.log(test);
}

// document.addEventListener('DOMContentLoaded', async () => mainEvent());


/* function filterData (json){

    json.filter(item){
        item.
    }
} */