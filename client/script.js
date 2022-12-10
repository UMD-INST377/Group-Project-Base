/* function outputname(){
    var variable = document.getElementById('form');
    var tick =  variable.elements["name"].value
    console.log(tick)
}

 */
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'e421dae6f5msh781141400772cc1p133bfdjsn7330a891d044',
		'X-RapidAPI-Host': 'yahoo-finance15.p.rapidapi.com'
	}
};
async function getData(){
    url = `https://yahoo-finance15.p.rapidapi.com/api/yahoo/qu/quote/AAPL/financial-data`
    data = await fetch(url,options)
    res = await data.json()
    console.log(res)
    return res
    


}
getData()

async function mainEvent(){
    const test = await getData();
    console.log(test);}
// document.addEventListener('DOMContentLoaded', async () => mainEvent());


/* function filterData (json){

    json.filter(item){
        item.
    }
} */