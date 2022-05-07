// Get first 'limit' elements from collection
function getDisplayArray(collection, limit) {
    //   console.log('getDisplayArray()');
    return collection.slice(0, limit);
}

// Filter collection by items with 'key' that contain 'search'
function filterResults(collection, key, search) {
    //   console.log('filterResults()');
    if (collection.length < 1) { return; }
    const matches = collection.filter((item) => {
        const value = item[key].toLowerCase();
        const term = search.toLowerCase();
        return value.includes(term);
    });
    return matches;
}

// Update table HTML to display search results
function showResults(collection, limit = 25) {
    // console.log('showResults()');
    const resultTable = document.querySelector('#search-results')
    resultTable.innerHTML = '';
    getDisplayArray(collection, limit).forEach((item) => {
        let rowContents = '';
        rowContents += `<td>${item.movie_id}</td>`;
        rowContents += `<td>${item.movie_name}</td>`;
        rowContents += `<td>${item.movie_year}</td>`;
        rowContents += `<td>${item.duration_of_movie}m</td>`;
        rowContents += `<td>${item.rating}</td>`;
        resultTable.innerHTML += `<tr>${rowContents}</tr>`;
    });
}

// Populate genre filter with contents of database
function initGenreSelect(collection) {
    // console.log('initGenreSelect()')
    const genreSelect = document.querySelector('#movie-genre');
    collection.forEach((item) => {
        genreSelect.innerHTML += `<option value="${item.genre_id}">${item.genre}</option>`;
    });
}

async function mainEvent() {
    // console.log("mainEvent()");

    const titleField = document.querySelector('#movie-title');
    const ratingSelect = document.querySelector('#movie-rating');
    const genreSelect = document.querySelector('#movie-genre');

    const movieJson = await getData('/stef/movies');
    const genreJson = await getData('/jude/genres');
    const movieGenresJson = await getData('/jude/movie_genres');

    if (movieJson.length > 0 && genreJson.length > 0) {
        let results = movieJson;

        // Filter results when title field changes
        titleField.addEventListener('input', async (InputEvent) => {
            // console.log('titleField InputEvent');
            let subResults = results;
            let title = InputEvent.target.value;
            if (title !== '') {
                subResults = filterResults(results, 'movie_name', title);
            }
            showResults(subResults);
        });

        // Filter results when ratings dropdown changes
        ratingSelect.addEventListener('change', async (InputEvent) => {
            // console.log('ratingSelect InputEvent')
            let subResults = results;
            const range = InputEvent.target.value;
            if (range !== 'none') {
                [min, max] = range.split('-');
                subResults = results.filter((item) => {
                    if (min <= item.rating && item.rating <= max) {
                        return item;
                    }
                });
            }
            showResults(subResults);
        });

        // Filter results when genre dropdown changes
        genreSelect.addEventListener('change', async (InputEvent) => {
            // console.log('genreSelect InputEvent')
            let subResults = results;
            const genre_id = InputEvent.target.value;
            if (genre_id !== 'none') {
                let movies = [];
                movieGenresJson.forEach((item) => {
                    if (item.genre_id.toString() === genre_id) {
                        movies.push(item.movie_id);
                    }
                });
                subResults = results.filter((item) => {
                    if (movies.includes(item.movie_id)) {
                        return item;
                    }
                });
            }
            showResults(subResults);
        });
    }

    // console.log(movieJson);
    // console.log(genreJson);
    // console.log(movieGenresJson);

    initGenreSelect(genreJson);
    showResults(movieJson);
}

document.addEventListener('DOMContentLoaded', async () => mainEvent());
