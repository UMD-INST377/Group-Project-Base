/* eslint-disable function-paren-newline */
/* eslint-disable implicit-arrow-linebreak */
/* eslint-disable indent */
/* eslint-disable no-trailing-spaces */
/* eslint-disable space-before-blocks */
/* eslint-disable no-console */

/*displays school sugestions in suggestions bar according to selected
SAT radio button*/
function displaySuggestions(event){
  // eslint-disable-next-line no-multiple-empty-lines
  let filterData;
  if(event.target.id === 'upper-scores'){/*filter school data according to radio selected*/
    filterData = data.data.filter((item) => item.SAT_average > 1355)
  }else if(event.target.id === 'middle-scores'){
    console.log("middle scores")
    filterData = data.data.filter((item) => item.SAT_average >= 1256 && item.SAT_average < 1356);
  }else{//filter data for lower sat scores
    filterData = data.data.filter((item) =>item.SAT_average < 1256);
  }
  const html = filterData.map((item) => // return filtered school data as list items
     `
    <li>
      <div class="card">
        <div class="card-content">
          <div class="media">
            <div class="media-content">
              <p class="title is-4">${item.university_name}</p>
              <p class="subtitle is-6">${item.univ_location}</p>
            </div>
          </div>
        </div>
        <footer class="card-footer">
          <a href="/university/${item.testscore_id}/" class="card-footer-item">Read More</a>
        </footer>
      </div>
    </li>
    `
  ).join('');

  const suggestions = document.querySelector('.results');
  suggestions.innerHTML = html;
}

function displaySuggestions(event){
  let filterData;
  if(event.target.id === 'upper-acceptance-rate'){
    filterData = data.data.filter((item) => item.acceptence_rate > 72)
  }else if(event.target.id === 'middle-acceptance-rate'){
    console.log('middle acceptance rate')
    filterData = data.data.filter((item) => item.acceptence_rate >= 55 && item.acceptence_rate < 71);
  }else{
    filterData = data.data.filter((item) => item.acceptence_rate < 55);
  }
  const html = filterData.map((item) => 
  `
  <li>
    <div class="card">
      <div class="card-content">
        <div class="media">
          <div class="media-content">
            <p class="title is-4">${item.university_name}</p>
            <p class="subtitle is-6">${item.univ_location}</p>
          </div>
        </div>
      </div>
      <footer class="card-footer">
        <a href="/university/${item.acceptence_rate}/" class="card-footer-item">Read More</a>
      </footer>
    </div>
  </li>
  `
  ).join('');
  const suggestions = document.querySelector('.results');
  suggestions.innerHTML = html
}

async function initAcceptanceRadioButtons() {
  const url = '/api/Admissions_rate';
  data = [];

  const request = await fetch(url);
  if (request.ok) {
    data = await request.json();

    const lowerScoreButton = document.querySelector('#lower-acceptance-rate');
    const middleScoreButton = document.querySelector('#middle-acceptance-rate');
    const upperScoreButton = document.querySelector('#upper-acceptance-rate');

    upperScoreButton.addEventListener('change', displaySuggestions);
    middleScoreButton.addEventListener('change', displaySuggestions);
    lowerScoreButton.addEventListener('change', displaySuggestions);
  } else{
    console.log('messed up')
  }
}

initAcceptanceRadioButtons()


/* initializes sat radiobuttons so suggestions are displayed are displayed
according to what button is selected*/
async function initSATRadioButtons() {
  const url = '/api/test_scores';
  data = [];

  const request = await fetch(url);
  if (request.ok) {
    data = await request.json();

    const upperScoreButton = document.querySelector('#upper-scores');
    const middleScoreButton = document.querySelector('#middle-scores');
    const lowerScoreButton = document.querySelector('#lower-scores');

    upperScoreButton.addEventListener('change', displaySuggestions);
    middleScoreButton.addEventListener('change', displaySuggestions);
    lowerScoreButton.addEventListener('change', displaySuggestions);
  } else {
    console.log('messed up');
  }
}

initSATRadioButtons();
