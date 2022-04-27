function getDisplayArray(collection) {
    console.log('getDisplayArray()');
    const limit = 25;
    return collection.slice(0, limit);
}

function filterResults(collection, key, search) {
    console.log('filterResults()');
    if (collection.length < 1) { return; }
    const matches = collection.filter((item) => {
        const value = item[key].toLowerCase();
        const term = search.toLowerCase();
        return value.includes(term);
    });
    return matches;
}

function showResults(collection) {
    console.log('showResults()');
    const resultTable = document.querySelector('#search-results')
    resultTable.innerHTML = '';
    getDisplayArray(collection).forEach((item) => {
        let rowContents = '';
        rowContents += `<td>${item.movie_id}</td>`;
        rowContents += `<td>${item.movie_name}</td>`;
        rowContents += `<td>${item.movie_year}</td>`;
        rowContents += `<td>${item.duration_of_movie}</td>`;
        rowContents += `<td>GENRE HERE</td>`;
        rowContents += `<td>${item.rating}</td>`;
        resultTable.innerHTML += `<tr>${rowContents}</tr>`;
    });
}

function initGenreSelect(collection) {
    console.log('initGenreSelect()')
    const genreSelect = document.querySelector('#movie-genre');
    collection.forEach((item) => {
        const text = item.genre;
        const value = text.toLowerCase();
        genreSelect.innerHTML += `<option value="${value}">${text}</option>`;
    });
}

async function getData(endpoint) {
    console.log('getData()');
    const raw = await fetch(endpoint);
    const json = await raw.json();
    return json.data;
}

async function mainEvent() {
    console.log("mainEvent()");

    const form = document.querySelector('#filter-form');
    const titleField = document.querySelector('#movie-title');
    const ratingSelect = document.querySelector('#movie-rating');
    const genreSelect = document.querySelector('#movie-genre');

    const movieJson = await getData('/stef/movies');
    const genreJson = await getData('/jude/genres');

    if (movieJson.length > 0 && genreJson.length > 0) {
        let results = movieJson;

        titleField.addEventListener('input', async (InputEvent) => {
            console.log('titleField InputEvent');
            let subResults = results;
            let search = InputEvent.target.value;
            if (search !== '') {
                subResults = filterResults(results, 'movie_name', search);
            }
            showResults(subResults);
        });

        ratingSelect.addEventListener('change', async (InputEvent) => {
            console.log('ratingSelect InputEvent')
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

        genreSelect.addEventListener('change', async (InputEvent) => {
            console.log('genreSelect InputEvent')
        });
    }

    console.log(movieJson);
    console.log(genreJson);

    initGenreSelect(genreJson);
    showResults(movieJson);
}

document.addEventListener('DOMContentLoaded', async () => mainEvent());
