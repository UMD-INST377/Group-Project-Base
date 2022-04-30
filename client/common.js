// Fetch data from database
async function getData(endpoint, options = {}) {
    console.log('getData()');
    const raw = await fetch(endpoint, options);
    const json = await raw.json();
    return json.data;
}

// Return the length of the provided dictionary
function dictLength(dict) {
    return Object.keys(dict).length;
}
