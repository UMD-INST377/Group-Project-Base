const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '5dc02365d4mshd9eff5d73eae486p1c6bb0jsnd676be7e93c5',
		'X-RapidAPI-Host': 'api-nba-v1.p.rapidapi.com'
	}
};
async function getData() {
	const url = `https://api-nba-v1.p.rapidapi.com/standings?league=standard&season=2021&team=41`;
	const data = await fetch(url, options);
	const json = await data.json();
	const response = json.response;
return response;

}
const nba_data = getData();
console.log(nba_data);