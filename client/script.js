const form = document.getElementById("form")

form.eventListener('submit', (e) => { 
    e.preventDefault();
    // console.log("Form has been submitted!")
    const ticker = text.value;
})

async function getData(){
    const url = `https://query1.finance.yahoo.com/v10/finance/quoteSummary/${ticker}?modules=financialData`
    const data = await fetch (url)
    const json = await data.json()
}

function filterData (json){

    json.filter(item){
        item.
    }
}