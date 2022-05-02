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

//displays show list
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
        <h3>End year: ${show.end_year}</h3>
        `
    }
    )
    showList.innerHTML = newArray
}

getShow()

// display actors
//displays show list
//insert similar code here for title
//add conditional to filter out film titles
let actorList = document.querySelector(".actor-list")
async function getActor() {
    const results = await fetch("/api/actors")
    const json = await results.json()
    console.log(json)
    const newArray = json.data.map((actor)=> {
        return `<h2>${actor.actor_id}</h2>
        <h3>Release Date: ${actor.fname}</h3>
        <h3>Rating: ${actor.lname}</h3>
        <h3>Vote Count: ${actor.birthyear}</h3>
        <h3>Movie Runtime - min: ${actor.deathyear}</h3>
        `
    }
    )
    actorList.innerHTML = newArray
}

getActor()