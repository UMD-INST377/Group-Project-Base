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
        rowContents += `<td>${item.rating}</td>`;
        rowContents += `<td>${item.duration_of_movie}</td>`;
        resultTable.innerHTML += `<tr>${rowContents}</tr>`;
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
            console.log(subResults);
            showResults(subResults);
        });

        ratingSelect.addEventListener('change', async (InputEvent) => {
            console.log('ratingSelect InputEvent')
        })

        genreSelect.addEventListener('change', async (InputEvent) => {
            console.log('genreSelect InputEvent')
        })
    }

    console.log(movieJson);
    console.log(genreJson);

    showResults(movieJson);
}

document.addEventListener('DOMContentLoaded', async () => mainEvent());
