const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '5dc02365d4mshd9eff5d73eae486p1c6bb0jsnd676be7e93c5',
		'X-RapidAPI-Host': 'api-nba-v1.p.rapidapi.com'
	}
};

fetch('https://api-nba-v1.p.rapidapi.com/standings?league=standard&season=2021&team=41', options)
	.then(response => response.json())
	.then(response => console.log(response))
	.catch(err => console.error(err));