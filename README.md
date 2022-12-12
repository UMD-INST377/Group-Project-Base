# NBA Battle!
A project creating a site pitching two NBA players against each other to see who's stats trump the others.
Target browsers: Current versions (2022) of Chrome, IoS, and Android.
GitHub Pages Link: https://ericsalmeron.github.io/EricSalmeron.github.io./client/

API Documentation:
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '5632c77d22msh70c6d62094e11eep1c2c19jsn4061b7fbefc3',
		'X-RapidAPI-Host': 'api-nba-v1.p.rapidapi.com'
	}
};

fetch('https://api-nba-v1.p.rapidapi.com/players?name=james&season=2021', options)
	.then(response => response.json())
	.then(response => console.log(response))
	.catch(err => console.error(err));


const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '5632c77d22msh70c6d62094e11eep1c2c19jsn4061b7fbefc3',
		'X-RapidAPI-Host': 'api-nba-v1.p.rapidapi.com'
	}
};

fetch('https://api-nba-v1.p.rapidapi.com/players/statistics?id=265&season=2021', options)
	.then(response => response.json())
	.then(response => console.log(response))
	.catch(err => console.error(err));