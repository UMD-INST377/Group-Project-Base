async function getData() {
  try {
    const url = 'https://data.princegeorgescountymd.gov/resource/9tsa-iner.json'
    const response = await fetch(url);
    const data = await response.json();
  } catch (err) {
    console.log('Data request failed', err);
    res.json({ message: 'Data request failed', error: err });
  }
}

var data = JSON.parse(this.response)

if (request.status >= 200 && request.status < 400) {
  data.forEach(movie => {
    console.log(movie.title)
  })
} else {
  console.log('error')
}
