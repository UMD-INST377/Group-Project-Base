/* eslint-disable no-param-reassign */
/* eslint-disable no-plusplus */
/* eslint-disable no-empty */
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

const SUCCESS = 1;
const FAILURE = 0;

/*sorts filterData in suggestions bar according to SAT, tuition, or acceptance rate */
function sortFilterData(filterData){
  // Close the dropdown menu if the user clicks outside of it
  window.onclick = function(event) {
    if (!event.target.matches('.dropbtn')) {
      let dropdowns = document.getElementsByClassName('dropdown-content');
      let i;
      for (i = 0; i < dropdowns.length; i++) {
        let openDropdown = dropdowns[i];
        if (openDropdown.classList.contains('show')) {
          openDropdown.classList.remove('show');
        }
      }
    }
  };

  if(filterData == null){
    return FAILURE;
  }
  const sortButton = document.querySelector('.dropbtn');

  switch(sortButton.textContent){
    case 'Sort by: tuition':
      filterData.sort((school1, school2) => school1.tuition_outstate - school2.tuition_outstate);
      break;
    case 'Sort by: sat':
      filterData.sort((school1, school2) => school1.SAT_average - school2.SAT_average);
      break;
    case 'Sort by: acceptance rate':
      filterData.sort((school1, school2) => school1.admission_rate - school2.admission_rate);
      break;
    default: 
      break;
  }
  return SUCCESS;
}

/*enables only 1 checkbox to be checked for each preference group */
function onlyOneChecked(checkbox) {
  let checkboxes = document.getElementsByName(checkbox.getAttribute('name'));
  checkboxes.forEach((item) => {
      if (item !== checkbox) { item.checked = false; }
  });
}

/*returns array of dictionaries of universities according to user preferences after
pressing search, or returns all colleges if "see all schools" button clicked  */
function getFilteredData(event){
  let filterData = fetchedData.data;
  sortFilterData(filterData);

  if(event.target.id === 'see-all-button'){
    return filterData;
  }
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

/* displays school sugestions in suggestions bar according to user preferences */
function displaySuggestions(event){
  // eslint-disable-next-line no-multiple-empty-lines
  let filterData = getFilteredData(event);
  const suggestions = document.querySelector('.results');
  let html = null;
  
  /*if filter empty, display 'no results' */
  if(filterData.length === 0){
    html = `              
        <li>
        <div class="card">
          <div id="select-criteria" class="card-content">
            No results; use fewer or change preferences.
          </div>
        </div>
      </li>
    `;
    suggestions.innerHTML = html;
    return null;
  }
  let moneyFormatter = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD'
  });
  
  if(filterData != null){
    // return filtered school data as list items
    html = filterData.map((item) => 
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
    suggestions.innerHTML = html;
    
  }
  
  return SUCCESS;

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

//initializes onclicklisteners for sorting buttons, updates sort button text
//accordingly
function initSortButtons(){
  const sortButton = document.querySelector('.dropbtn');
  sortButton.addEventListener('click', () => {
    document.getElementById('myDropdown').classList.toggle('show');
  });
  const tuitionSortButton = document.querySelector('#tuition-sort');
  tuitionSortButton.addEventListener('click', () => { sortButton.textContent = 'Sort by: tuition'; });
    
  const satSortButton = document.querySelector('#sat-sort');
  satSortButton.addEventListener('click', () => { sortButton.textContent = 'Sort by: sat'; });

  const acceptanceSortButton = document.querySelector('#acceptance-sort');
  acceptanceSortButton.addEventListener('click', () => { sortButton.textContent = 'Sort by: acceptance rate'; });  
                                            
                  
        
}

getCollegeData();
initSortButtons();

const searchButton = document.querySelector('#search-button');
searchButton.addEventListener('click', displaySuggestions);

const seeAllButton = document.querySelector('#see-all-button');
seeAllButton.addEventListener('click', displaySuggestions);








