/* eslint-disable camelcase */
/* eslint-disable indent */
    // Request and Compile PRICES Information
    // const pricesRequest = await fetch('http://localhost:3000/api/prices');
    const pricesRequest = await fetch('https://inst377-vinylweb.herokuapp.com/api/prices');
    const allPrices = await pricesRequest.json();
    const prices = new Object();
    for (const currentPrice in allPrices) {
        prices[currentPrice] = allPrices[currentPrice];
    }

  
        // PRICES Contents
        const prices_content = document.createElement('div');
        prices_content.className = 'heading';
        prices_content.innerHTML = `
            <div class="items items-prices">
                <div class="item">
                  <i class="fas fa-dice-six"></i>
                  <p class="header">Highest Discog Price</p>
                  <p class="result">$${prices[id].highest_discog}</p>
                </div>
              <div class="item">
                  <i class="fas fa-dice-three"></i>
                  <p class="header">Average Discog Price</p>
                  <p class="result">$${prices[id].average_discog}</p>
              </div>
              <div class="item">
                  <i class="fas fa-dice-one"></i>
                  <p class="header">Lowest Discog Price</p>
                  <p class="result">$${prices[id].lowerst_discog}</p>
              </div>
            </div>
              `;

        