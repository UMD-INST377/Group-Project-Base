/* eslint-disable prefer-const */
/* eslint-disable max-len */
/* eslint-disable keyword-spacing */
/* eslint-disable no-multiple-empty-lines */
/* eslint-disable spaced-comment */
/* eslint-disable padded-blocks */
/* eslint-disable function-paren-newline */
/* eslint-disable implicit-arrow-linebreak */
/* eslint-disable indent */
/* eslint-disable no-trailing-spaces */
/* eslint-disable space-before-blocks */
/* eslint-disable no-console */

/*returns array of dictionaries of universities according to user preferences  */
function getFilteredData(){
  let filterData = fetchedData.data;
  const satSelection = document.querySelector('input[name="sat-scores"]:checked');
  const acceptanceRateSelection = document.querySelector('input[name="acceptance-rate"]:checked');
  const tuitionSelection = document.querySelector('input[name="tuition"]:checked');


  if(satSelection != null){
    const satValue = satSelection.value;
    switch(satValue){
      case 'upper-scores':
        filterData = filterData.filter((item) => item.SAT_average > 1355);
        break;
      case 'middle-scores':
        filterData = filterData.filter((item) => item.SAT_average >= 1256 && item.SAT_average < 1356);
        break;
      case 'lower-scores':
        filterData = filterData.filter((item) => item.SAT_average < 1256);
        break;
      default:
        break;
    }
  }
  if(acceptanceRateSelection != null){
    const acceptanceRateValue = acceptanceRateSelection.value;
    switch(acceptanceRateValue){
      case 'upper':
        filterData = filterData.filter((item) => item.admission_rate > 71);
        break;
      case 'middle':
        filterData = filterData.filter((item) => item.admission_rate >= 55 && item.admission_rate <= 71);
        break;
      case 'lower':
        filterData = filterData.filter((item) => item.admission_rate < 55);
        break;
      default:
        break;
    }
  }
  if(tuitionSelection != null){
    const tuitionValue = tuitionSelection.value;
    switch(tuitionValue){
      case 'upper-tuition':
        filterData = filterData.filter((item) => item.tuition_outstate >= 38000);
        break;
      case 'middle-tuition':
        filterData = filterData.filter((item) => item.tuition_outstate >= 33000 && item.tuition_outstate < 38000);
        break;
      case 'lower-tuition':
        filterData = filterData.filter((item) => item.tuition_outstate < 33000);
        break;
      default:
        break;
    }
  }

  return filterData;
}

/* displays school sugestions in suggestions bar according to selected
SAT radio button */
function displaySuggestions(){
  // eslint-disable-next-line no-multiple-empty-lines
  let filterData = getFilteredData();
  let moneyFormatter = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD'
  });
  
  if(filterData != null){
    // return filtered school data as list items
    const html = filterData.map((item) => 
    `
    <li>
      <div class="card">
        <div class="card-container">
          <div class="card-left-content">
            <div class="media">
              <div class="media-content">
                <p class="title is-4">${item.university_name}</p>
                <p class="subtitle is-6">${item.univ_location}</p>
              </div>
            </div>
          </div>
          <div class="card-right-content">
            <div class="media">
              <div class="media-content">
                <p>avg. SAT: ${item.SAT_average}</p>
                <p>tuition: ${moneyFormatter.format(item.tuition_outstate)}</p>
                <p>accept. rate: ${item.admission_rate}%</p>
              </div>
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

}


/* retrieves college data from database relevant to user preferences, initializes as data array*/
async function getCollegeData() {
  const url = '/api/test_scores';
  fetchedData = [];

  const request = await fetch(url);
  if (request.ok) {
    fetchedData = await request.json();
    console.log('fetched test_scores (data))', fetchedData);
  } else {
    console.log('messed up');
  }
}

getCollegeData();
const searchButton = document.querySelector('#search-button');
searchButton.addEventListener('click', displaySuggestions);



