const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'e2a17786bamsh39f2855f9aaf40dp1b10c0jsnf0ccf57e91e0',
		'X-RapidAPI-Host': 'calorieninjas.p.rapidapi.com'
	}
};

async function getData(){
  const url = 'https://calorieninjas.p.rapidapi.com/v1/nutrition?query=tomato/${name}'; 
  const data = await fetch(url, options); 
	const json = data.json();
  const res = json.response;
	return res;
}

