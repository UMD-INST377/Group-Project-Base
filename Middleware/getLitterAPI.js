

function getData() {
  const response = await fetch('https://ghibliapi.herokuapp.com/films')
  const data = await response.json()
}

var data = JSON.parse(this.response)

if (request.status >= 200 && request.status < 400) {
  data.forEach(movie => {
    console.log(movie.title)
  })
} else {
  console.log('error')
}
