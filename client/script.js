let top5 = []

async function windowAction() {
    const endpoint = 'https://data.princegeorgescountymd.gov/resource/umjn-t2iz.json';
    const endpoint2 = 'https://gist.githubusercontent.com/Miserlou/c5cd8364bf9b2420bb29/raw/2bf258763cdddd704f8ffd3ea9a3e81d25e2c6f6/cities.json'
    
    const earthquakes = await fetch('./api/').then(response => response.json())
    console.log(earthquakes)
    
    function findMatches(wordToMatch, earthquakes) {
        return earthquakes.filter(earthquake => {
            const regex = new RegExp(wordToMatch, 'gi')
            return earthquake.City.match(regex) //|| earthquake.day_of.match(regex) || earthquake.magnitude.match(regex) || earthquake.time.match(regex)
        })
    }

    function displayMatches(event) {
        const matchArray = findMatches(event.target.value, earthquakes)
        const html = matchArray.map(place => {
            const regex = new RegExp(event.target.value, 'gi')
            const city = earthquake.City.replace(regex, `<span class="hl">${event.target.value}</span>`)
            const eid = earthquake.earthquake_id.replace(regex, `<span class="hl">${event.target.value}</span>`)
            return `
                <li>
                    <span>${city}</span>
                    <span>${(eid)}</span>
                </li>
                `
        }).join('');
        suggestions.innerHTML = html;
    }

    const searchInput = document.querySelector('.search')
    const suggestions = document.querySelector('.suggestions')
    
    searchInput.addEventListener('input', displayMatches)

    }
    
    
window.onload = windowAction()