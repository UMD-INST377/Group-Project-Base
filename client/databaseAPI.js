// retrieve information for film
// add conditional to filter out tv show titles
let movieList = document.querySelector(".movie-list")
async function getTitles() {
    const results = await fetch("/api/primary_title")
    const json = await results.json()
    console.log(json)
    const newArray = json.data.map((movie)=> {
        return `<h2>${movie.primary_title}</h2>
        <h3>Release Date: ${movie.release_year}</h3>
        <h3>Rating: ${movie.title_rating}</h3>
        <h3>Vote Count: ${movie.title_votes}</h3>
        <h3>Movie Runtime - min: ${movie.runtime_min}</h3>
        `
    }
    )
    movieList.innerHTML = newArray
}

getTitles()

//insert similar code here for title
//add conditional to filter out film titles
let showList = document.querySelector(".show-list")
async function getShow() {
    const results = await fetch("/api/primary_title")
    const json = await results.json()
    console.log(json)
    const newArray = json.data.map((show)=> {
        return `<h2>${show.primary_title}</h2>
        <h3>Release Date: ${show.release_year}</h3>
        <h3>Rating: ${show.title_rating}</h3>
        <h3>Vote Count: ${show.title_votes}</h3>
        <h3>Movie Runtime - min: ${show.runtime_min}</h3>
        `
    }
    )
    showList.innerHTML = newArray
}

getShow()