function getMatchCommunity(event, community) {
  const matches = community[0].filter((ele) =>
    ele.community_identifier.substring(2) === event.target.value);
  console.log(matches);
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
            <td><strong>% unemployed</strong></td><td>${match.homeowner_rate}</td>
            </tr>
            <tr>
            <td><strong>% bachelors</strong></td><td>${match.percent_homeowner_without_mortgage}</td>
           </tr>
           <tr>
           <td><strong>% renters</strong></td><td>${match.percent_rent}</td>
           </tr>
    </table>`;
}
async function dataHandlerCommunity() {
  const searchInput = document.querySelector('.search');
  console.log("running");
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

dataHandlerCommunity();
