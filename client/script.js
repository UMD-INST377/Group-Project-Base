fetch("https://api-nba-v1.p.rapidapi.com/seasons", {
	"method": "GET",
	"headers": {
		"x-rapidapi-host": "api-nba-v1.p.rapidapi.com",
		"x-rapidapi-key": "c7866e40a8msh3fff0ba5354611fp179cabjsn6eee8014f60c"
	}
})
.then(response => {
	console.log(response);
})
.catch(err => {
	console.log(err);
});
