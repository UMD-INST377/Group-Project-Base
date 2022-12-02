const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'SIGN-UP-FOR-KEY',
		'X-RapidAPI-Host': 'api-nba-v1.p.rapidapi.com'
	}
};

fetch('https://api-nba-v1.p.rapidapi.com/teams', options)
	.then(response => response.json())
	.then(response => console.log(response))
	.catch(err => console.error(err));

    const options1 = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': 'SIGN-UP-FOR-KEY',
            'X-RapidAPI-Host': 'api-nba-v1.p.rapidapi.com'
        }
    };
    
    fetch('https://api-nba-v1.p.rapidapi.com/teams/statistics?id=1&season=2020', options)
        .then(response => response.json())
        .then(response => console.log(response))
        .catch(err => console.error(err));