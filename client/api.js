// const options = {
// 	method: 'GET',
// 	headers: {
// 		'X-RapidAPI-Key': '797e066927msh352227c1319737ap175081jsn4d6cedd2f90e',
// 		'X-RapidAPI-Host': 'imdb8.p.rapidapi.com'
// 	}
// };

fetch('https://imdb8.p.rapidapi.com/auto-complete?q=game%20of%20thr', options)
	.then(response => response.json())
	.then(response => console.log(response))
	.catch(err => console.error(err));