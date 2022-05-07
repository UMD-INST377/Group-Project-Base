// Fetch data from database
async function getData(endpoint, options = {}) {
    // console.log('getData()');
    const raw = await fetch(endpoint, options);
    const json = await raw.json();
    return json.data;
}
