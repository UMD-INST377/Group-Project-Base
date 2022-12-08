const form = document.getElementById("form")

form.addEventListener('submit', (e) => { 
    e.preventDefault();
    // console.log("Form has been submitted!")
    const ticker = e.target.value;
})

async function getData(){
    // const url = `https://query1.finance.yahoo.com/v10/finance/quoteSummary/${ticker}?modules=financialData`
    const url = `https://query1.finance.yahoo.com/v10/finance/quoteSummary/aapl?modules=financialData`
    const data = await fetch (url)
    const json = await data.json()
    console.log(json);
    return json;
}

async function mainEvent(){
    const test = await getData();
    console.log(test);
}

document.addEventListener('DOMContentLoaded', async () => mainEvent());


/* function filterData (json){

    json.filter(item){
        item.
    }
} */