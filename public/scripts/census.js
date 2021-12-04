function getFilters(census, medAgeMin, medAgeMax, over65Min, over65Max, popMin, popMax,
		    hoMin, hoMax, howMin, howMax, renterMin, renterMax) {
  
  const matches = census.filter((ele) =>
    (Number(ele.median_age) >= medAgeMin && Number(ele.median_age) <= medAgeMax) &&
      (Number(ele.num_persons_over_65) >= over65Min && Number(ele.num_persons_over_65) <= over65Max) &&
      (Number(ele.total_population) >= popMin && Number(ele.total_population) <= popMax) &&
      (Number(ele.homeowner_rate) >= hoMin && Number(ele.homeowner_rate) <= hoMax) &&
      (Number(ele.percent_homeowner_without_mortgage) >= howMin && Number(ele.percent_homeowner_without_mortgage) <= howMax) &&
      (Number(ele.percent_rent) >= renterMin && Number(ele.percent_rent) <= renterMax)
  );
  console.log(matches.length);  
  if (matches.length > 0) {
    return matches;
  }
  return [];
}

function filterOnlyMetro(census, zipCodes) {
  const matches = census.filter( (ele) => zipCodes.includes(ele.census_zcta));
  return matches;
}

function filterWithoutMetro(census, zipCodes) {
  const matches = census.filter( (ele) => !zipCodes.includes(ele.census_zcta));
  return matches;
}

function renderTableHTML(data, tableDiv) {
  const tableCols = `<table class="table is-scrollable">
    <tr><th>Zip Code</th>
    <th>Median Age</th>
    <th># of People Over 65</th>
    <th>Total Population</th>
    <th>% homeowner </th>
    <th>% homeowner without mortgage </th>
    <th>% renter </th>
    </tr>`
 

  tableDiv.innerHTML = tableCols + data.map( (ele) => 
     ` <tr>
       <td>${ele.census_zcta}</td>
       <td>${ele.median_age}</td>
       <td>${ele.num_persons_over_65}</td>
       <td>${ele.total_population}</td>
       <td>${ele.homeowner_rate}</td>
       <td>${ele.percent_homeowner_without_mortgage}</td>
       <td>${ele.percent_rent}</td>
       </tr>
     `).join(``) + `</table>`;


}

async function dataHandler() {
  // get frontend html data
  const btn = document.querySelector('.census-button');
  const form = document.querySelector('.census-form');
  const tableDiv = document.querySelector('.census-table');

  // on button clicks get form values, filter, and then render html
  // for empty minimum inputs === 0, empty maximum inputs === Infinity
  btn.addEventListener('click', async (event) => {
    let census = await fetch('./api/census').then((response) => response.json());
    const medAgeMin = form.elements[0].value === "" ? 0 : form.elements[0].value;
    const medAgeMax = form.elements[1].value === "" ? Infinity : form.elements[1].value;
    const over65Min = form.elements[2].value === "" ? 0 : form.elements[2].value;
    const over65Max = form.elements[3].value === "" ? Infinity : form.elements[3].value;
    const popMin = form.elements[4].value === "" ? 0 : form.elements[4].value;
    const popMax = form.elements[5].value === "" ? Infinity : form.elements[5].value;
    const hoMin = form.elements[6].value === "" ? 0 : form.elements[6].value;
    const hoMax = form.elements[7].value === "" ? Infinity : form.elements[7].value;
    const howMin = form.elements[8].value === "" ? 0 : form.elements[8].value;
    const howMax = form.elements[9].value === "" ? Infinity : form.elements[9].value;
    const renterMin = form.elements[10].value === "" ? 0 : form.elements[10].value;
    const renterMax = form.elements[11].value === "" ? Infinity : form.elements[11].value;
    const metro = await fetch('./api/metro').then((response) => response.json());
    const metro_zips = metro[0].map((ele) => ele.metro_zcta);
    console.log(metro_zips);

    //filter
    /* if (form.elements[12].checked) do nothing */
    census = census[0];
    if (form.elements[13].checked) {
      census = filterOnlyMetro(census, metro_zips);
    } else if (form.elements[14].checked) {
      census = filterWithoutMetro(census, metro_zips);
    }
    //filter
    const filteredCensus = getFilters(census, medAgeMin, medAgeMax, over65Min, over65Max, popMin, popMax,
				      hoMin, hoMax, howMin, howMax, renterMin, renterMax);

    //render html
    renderTableHTML(filteredCensus, tableDiv);
  }); 
}

window.onload = dataHandler;
