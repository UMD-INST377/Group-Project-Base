let top5 = []

async function windowAction() {
    const endpoint = 'https://data.princegeorgescountymd.gov/resource/umjn-t2iz.json';
    const endpoint2 = 'https://gist.githubusercontent.com/Miserlou/c5cd8364bf9b2420bb29/raw/2bf258763cdddd704f8ffd3ea9a3e81d25e2c6f6/cities.json'
    
    const earthquakes = fetch('./api/').then(response => response.json())
    console.log(earthquakes)
    
    function findMatches(wordToMatch, earthquakes) {
        return earthquakes.filter(earthquake => {
            const regex = new RegExp(wordToMatch, 'gi')
            return earthquake.City.match(regex) || earthquake.day_of.match(regex) || earthquake.magnitude.match(regex) || earthquake.time.match(regex)
        })
    }

    function displayMatches(event) {
        if (!event.target.value) {
            suggestions.innerHTML = "";
            return false;
          }
        const matchArray = findMatches(event.target.value, earthquakes)
        for (let i=0; i<5; i++) { //I realize this isn't the best way to do this but I had already
                                  // implemented this top5 thing before I realized I only needed to
                                  // display 5 results
            top5[i] = matchArray[i]
        }
        const html = top5.map(place => {
            return `
                <li>
                    <span class='result'>${place.name} <br>${place.address_line_1}</span>
                </li>
                `
        }).join('');
        suggestions.innerHTML = html;
    }

    function clearResults(event) {
        suggestions.innerHTML = ``
        console.log('success')
    }

    const searchInput = document.querySelector('.search')
    const suggestions = document.querySelector('.suggestions')
    
    searchInput.addEventListener('input', displayMatches)

    }
    
    
window.onload = windowAction()