fetch("https://api-nba-v1.p.rapidapi.com/seasons", {
	"method": "GET",
	"headers": {
		"x-rapidapi-host": "api-nba-v1.p.rapidapi.com",
		"x-rapidapi-key": "5632c77d22msh70c6d62094e11eep1c2c19jsn4061b7fbefc3"
	}
})
.then(response => {
	console.log(response);
})
.catch(err => {
	console.log(err);
});
