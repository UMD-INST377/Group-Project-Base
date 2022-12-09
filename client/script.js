const form = document.getElementById("form")

form.addEventListener('submit', (e) => { 
    e.preventDefault();
    // console.log("Form has been submitted!")
    const ticker = e.target.value;
})

async function getData(){
    url = `https://query1.finance.yahoo.com/v10/finance/quoteSummary/tsla?modules=financialData`
    const data = await get(url,headers={

        'User-Agent': 'My User Agent 1.0'
        })
    const json = await data.json()
    console.log(json);
    return json;
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