/* eslint-disable no-console */
/* eslint-disable no-unused-vars */
async function populateApplicants() {
  console.log('data request');
  const applicantRequest = await fetch('/api/Applicants');
  const applicantData = await applicantRequest.json();

  const applicantsTable = document.querySelector('.applicantstable');

  applicantData.forEach((applicant) => {
    const appendApplicant = document.createElement('tr');
    appendApplicant.innerHTML = `
      <td>${applicant.applicant_id}</td>
      <td>${applicant.last_name}</td>
      <td>${applicant.first_name}</td>
      <td>${applicant.phone_number}</td>
      <td>${applicant.age}</td>
      `;

    applicantsTable.append(appendApplicant);
    console.table(applicantData);
  });
}

async function windowActions() {
  await populateApplicants();
}

window.onload = windowActions;
