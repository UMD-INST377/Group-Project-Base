/* eslint-disable no-console */
/* eslint-disable prefer-destructuring */
/* eslint-disable no-unused-vars */
/* eslint-disable no-tabs */
/* eslint-disable no-mixed-spaces-and-tabs */
/* eslint-disable no-param-reassign */
/* eslint-disable no-trailing-spaces */
/* eslint-disable max-len */
function getFilters(community, bornMin, bornMax, povertyMin, povertyMax, unemployedMin, unemployedMax,
		    bachelorsMin, bachelorsMax, incomeMin, incomeMax, engMin, engMax) {
  const matches = community.filter((ele) => {
    console.log(bornMin);
    return (Number(ele.pct_foreign_born) >= bornMin && Number(ele.pct_foreign_born) <= bornMax)
      && (Number(ele.pct_poverty) >= povertyMin && Number(ele.pct_poverty) <= povertyMax)
      && (Number(ele.pct_unemployed) >= unemployedMin && Number(ele.pct_unemployed) <= unemployedMax)
      && (Number(ele.pct_bachelors) >= bachelorsMin && Number(ele.pct_bachelors) <= bachelorsMax)
      && (Number(ele.median_household_income) >= incomeMin && Number(ele.median_household_income) <= incomeMax)
      && (Number(ele.pct_little_english) >= engMin && Number(ele.pct_little_english) <= engMax);
  });
  if (matches.length > 0) {
    return matches;
  }
  return [];
}

function renderTableHTML(data, tableDiv) {
  const tableCols = `<table class="table is-scrollable">
    <tr><th>Zip Code</th>
    <th>% foreign born</th>
    <th>% poverty</th>
    <th>% unemployed</th>
    <th>% bachelors</th>
    <th>% median household income</th>
    <th>% little english</th>
    </tr>`;

  tableDiv.innerHTML = `${tableCols + data.map((ele) => ` <tr>
       <td>${ele.community_identifier.substring(2)}</td>
       <td>${ele.pct_foreign_born}</td>
       <td>${ele.pct_poverty}</td>
       <td>${ele.pct_unemployed}</td>
       <td>${ele.pct_bachelors}</td>
       <td>${ele.median_household_income}</td>
       <td>${ele.pct_little_english}</td>
       </tr>
     `).join('')}</table>`;
}

async function dataHandler() {
  // get frontend html data
  const btn = document.querySelector('.community-button');
  const form = document.querySelector('.community-form');
  const tableDiv = document.querySelector('.community-table');
   
  // on button clicks get form values, filter, and then render html
  // for empty minimum inputs === 0, empty maximum inputs === Infinity
  btn.addEventListener('click', async (event) => {
    let community = await fetch('./api/community').then((response) => response.json());
    const bornMin = form.elements[0].value === '' ? 0 : form.elements[0].value;
    const bornMax = form.elements[1].value === '' ? Infinity : form.elements[1].value;
    const povertyMin = form.elements[2].value === '' ? 0 : form.elements[2].value;
    const povertyMax = form.elements[3].value === '' ? Infinity : form.elements[3].value;
    const unemployedMin = form.elements[4].value === '' ? 0 : form.elements[4].value;
    const unemployedMax = form.elements[5].value === '' ? Infinity : form.elements[5].value;
    const bachelorsMin = form.elements[6].value === '' ? 0 : form.elements[6].value;
    const bachelorsMax = form.elements[7].value === '' ? Infinity : form.elements[7].value;
    const incomeMin = form.elements[8].value === '' ? 0 : form.elements[8].value;
    const incomeMax = form.elements[9].value === '' ? Infinity : form.elements[9].value;
    const engMin = form.elements[10].value === '' ? 0 : form.elements[10].value;
    const engMax = form.elements[11].value === '' ? Infinity : form.elements[11].value;

    community = community[0];
    console.log(community);
    // filter
    const filteredCommunity = getFilters(community, bornMin, bornMax, povertyMin, povertyMax, unemployedMin, unemployedMax,
				      bachelorsMin, bachelorsMax, incomeMin, incomeMax, engMin, engMax);
 
    // render html
    renderTableHTML(filteredCommunity, tableDiv);
  }); 
}

window.onload = dataHandler;
