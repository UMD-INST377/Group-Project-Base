const container = document.getElementsByClassName('container')[0]

axios.get('../mock/movie.json').then(response => {
  console.log(response)
  let html = ``
  const data = response.data;
  data.map((ele) => {
    html += `<div class="card movie-card">
    <div class="card-content">
      <div class="media">
        <div class="media-content">
          <p class="title is-4">${ele.director_name}</p>
          <p class="subtitle is-6">@${ele.country} In ${ele.title_year}</p>
        </div>
      </div>
    
      <div class="content">
        ${ele.movie_title}
      </div>
    </div>
    </div>`
  })
  container.innerHTML = html
}).catch((error) => {
  console.log('error: ', error);
})