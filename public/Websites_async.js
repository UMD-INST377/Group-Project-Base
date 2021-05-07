/* eslint-disable no-console */
// eslint-disable-next-line no-unused-vars
async function populateWebsites() {
  console.log('data request');
  const websiteRequest = await fetch('/api/websiteMapCustom');
  const websiteData = await websiteRequest.json();
  console.table(websiteData);

  const websiteTable = document.querySelector('.websitestable');

  websiteData.forEach((website) => {
    const appendWebsite = document.createElement('tr');
    appendWebsite.innerHTML = `
      <td>${website.shelter_name}</td>
      <td>${website.website_name}</td>
      `;

    websiteTable.append(appendWebsite);
  });
}

async function windowActions() {
  await populateWebsites();
}

window.onload = windowActions;
