

async function windowAction() {
    const endpoint = 'https://data.princegeorgescountymd.gov/resource/umjn-t2iz.json';
    const endpoint2 = 'https://gist.githubusercontent.com/Miserlou/c5cd8364bf9b2420bb29/raw/2bf258763cdddd704f8ffd3ea9a3e81d25e2c6f6/cities.json'
    
    const earthquakes = fetch('./api/').then(response => response.json())
    console.log(earthquakes)
    
    const searchInput = document.querySelector('.search')
    const suggestions = document.querySelector('.suggestions')
    
    }
    
    
window.onload = windowAction()