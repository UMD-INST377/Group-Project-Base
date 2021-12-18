let top5 = []

async function windowAction() {
    const earthquakes = await fetch('./api/').then(response => response.json())
    console.log(earthquakes)
    
    function findMatches(wordToMatch, earthquakes) {
        return earthquakes.filter(earthquake => {
            const regex = new RegExp(wordToMatch, 'gi')
            return earthquake.City.match(regex) || earthquake.day_of.match(regex) || earthquake.magnitude.match(regex)
        })
    }

    function displayMatches(event) {
        const matchArray = findMatches(event.target.value, earthquakes)
        const html = matchArray.map(earthquake => {
            return `
                <li>                    
                    <table class='result'>
                        <tr>
                            <th>ID</th>
                            <th>City</th>
                            <th>Date</th>
                            <th>Magnitude</th>
                        </tr>
                        <tr>
                            <th>${(earthquake.earthquake_id)}</th>
                            <th>${(earthquake.City)}</th>
                            <th>${(earthquake.day_of.substring(0,10))}</th>
                            <th>${(earthquake.magnitude)}</th>
                        </tr>
                    </table>
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