// OG name title
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

//insert similar code here for 