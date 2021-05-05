const searchBtn = document.getElementsByClassName('search-btn')[0];
const movieIn = document.getElementsByClassName('input-p')[0].getElementsByClassName('input')[0];
const cardContainer = document.getElementsByClassName('movie-card')[0];

searchBtn.addEventListener('click', () => {
  console.log('I search', movieIn.value);
  axios.get(`/movie?movie_title=${movieIn.value}`).then((res) => {
    const data = res.data;
    let html = ``
    data.map((ele) => {
      html+= `
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
    `
    })
    cardContainer.innerHTML = html
  }).catch((err) => {
    cardContainer.innerHTML = `
    No relevant result 
    `
    console.log('err: ', err);
  })
})