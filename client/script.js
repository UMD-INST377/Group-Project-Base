form.eventListener('submit', (Eve) => { 
    Eve.preventDefault();
    const ticker = text.value;
})

async function getData(){
    const url = 'https://query1.finance.yahoo.com/v10/finance/quoteSummary/${ticker}?modules=financialData'
    const data = await fetch (url)
    const json = await data.json()
}

