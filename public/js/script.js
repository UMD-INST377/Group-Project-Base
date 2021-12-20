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
  let filterData;
  const satSelection = document.querySelector('input[name="sat-scores"]:checked');
  const acceptanceRateSelection = document.querySelector('input[name="acceptance-rate"]:checked');

  if(satSelection != null){
    const satValue = satSelection.value;
    if (satValue === 'upper-scores'){ /* filter school data according to radio selected */
      filterData = data.data.filter((item) => item.SAT_average > 1355);
    } else if (satValue === 'middle-scores'){
      filterData = data.data.filter((item) => item.SAT_average >= 1256 && item.SAT_average < 1356);
    } else { // filter data for lower sat scores
      filterData = data.data.filter((item) => item.SAT_average < 1256);
    }
  }
  if(acceptanceRateSelection != null){
    const acceptanceRateValue = acceptanceRateSelection.value;
    if (acceptanceRateValue === 'upper'){ /* filter school data according to radio selected */
      filterData = filterData.filter((item) => item.admission_rate > 71);
    } else if (acceptanceRateValue === 'middle'){
      filterData = filterData.filter((item) => item.admission_rate >= 55 && item.admission_rate <= 71);
    } else { // filter data for lower acceptance rate
      filterData = filterData.filter((item) => item.admission_rate < 55);
    }
  }
  return filterData;
}

/* displays school sugestions in suggestions bar according to selected
SAT radio button */
function displaySuggestions(){
  // eslint-disable-next-line no-multiple-empty-lines
  let filterData = getFilteredData();

  if(filterData != null){
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

}

/* retrieves college data from database relevant to user preferences, initializes as data array*/
async function getCollegeData() {
  const url = '/api/test_scores';
  data = [];

  const request = await fetch(url);
  if (request.ok) {
    data = await request.json();
    console.log('fetched test_scores (data))', data);
  } else {
    console.log('messed up');
  }
}

getCollegeData();


