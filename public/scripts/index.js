// the map stuff can be done similar to lab 7

function getMatch(event, census) {
  // not that many zips so filtering is fine - return if something matches
  const matches = census[0].filter((zcta) => zcta.census_zcta === event.target.value
      || zcta.popstat_zcta === event.target.value
      || zcta.metro_zcta === event.target.value);
  if (matches.length > 0) {
    return matches[0];
  }
  return false;
}

function renderTableHTML(match, tableDiv) {
  tableDiv.innerHTML = `<table class="table"><tr>
            <tr class="col"><th class="col"> Census ${match.census_zcta} </th></tr>
            <td><strong>median age</strong></td><td>${match.median_age}</td>
            </tr>
            <tr>
            <td><strong># people over 65</strong></td><td>${match.num_persons_over_65}</td>
            </tr>
            <tr>
            <td><strong>total population</strong></td><td>${match.total_population}</td>
            </tr>
            <tr>
            <td><strong>% homeowner</strong></td><td>${match.homeowner_rate}</td>
            </tr>
            <tr>
            <td><strong>% homeowner without mortgage</strong></td><td>${match.percent_homeowner_without_mortgage}</td>
           </tr>
           <tr>
           <td><strong>% renters</strong></td><td>${match.percent_rent}</td>
           </tr>
    </table>`;
}
async function dataHandler() {
  const searchInput = document.querySelector('.search');
  const tableDiv = document.querySelector('.census-data');
  const census = await fetch('./api/census').then((response) => response.json());

  // on inputs validate matches, if true render html
  searchInput.addEventListener('input', (evt) => {
    let match = false;
    if (evt.target.value.length === 5) {
      match = getMatch(evt, census);
    }
    if (match !== false) {
      renderTableHTML(match, tableDiv);
    }
  });
}

function getMatchCommunity(event, community) {
  const matches = community[0].filter((ele) => ele.community_identifier.substring(2) === event.target.value);
  if (matches.length > 0) {
    return matches[0];
  }
  return false;
}
function renderTableHTMLCommunity(match, tableDiv) {
  tableDiv.innerHTML = `<table class="table"><tr>
            <tr class="col"><th class="col"> Community ${match.community_identifier.substring(2)} </th></tr>
            <tr>
            <td><strong>% foreign born</strong></td><td>${match.pct_foreign_born}</td>
            </tr>
            <tr>
            <td><strong>% poverty</strong></td><td>${match.pct_poverty}</td>
            </tr>
            <tr>
            <td><strong>% unemployed</strong></td><td>${match.pct_unemployed}</td>
           </tr>
           <tr>
           <td><strong>% bachelors</strong></td><td>${match.pct_bachelors}</td>
           </tr>
           <tr>
           <td><strong>median income</strong></td><td>${match.median_household_income}</td>
           </tr>
           <tr>
           <td><strong>% little english</strong></td><td>${match.pct_little_english}</td>
           </tr>
    </table>`;
}
async function dataHandlerCommunity() {
  const searchInput = document.querySelector('.search');
  const tableDiv = document.querySelector('.community-data');
  const community = await fetch('./api/community').then((response) => response.json());

  // on inputs validate matches, if true render html
  searchInput.addEventListener('input', (evt) => {
    let match = false;
    if (evt.target.value.length === 5) {
      match = getMatchCommunity(evt, community);
    }
    if (match !== false) {
      renderTableHTMLCommunity(match, tableDiv);
    }
  });
}

window.addEventListener('load', (evt) => {
  dataHandler();
  dataHandlerCommunity();
});
