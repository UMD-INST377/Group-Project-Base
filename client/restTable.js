console.log("message");
async function createTable() {
  console.log("hello");
  let currentData = [];
  const data = [];
  const form = document.querySelector(".main-form");
  const area_id = document.querySelector(".areaid");
  const neighborhood = document.querySelector(".name");
  const landmarks = document.querySelector(".landmarks");
  const description = document.querySelector(".description");
  const table = document.querySelector(".table");

  const identifyarea = document.getElementById(".areaid");
  const neighborhoodname = document.getElementById(".name");
  const landgeo = document.getElementById(".landmarks");
  const describe = document.getElementById(".description");
  const errorElement = document.getElementById("error");

  form.addEventListener("submit", (e) => {
    let messages = [];
    if (neighborhoodname.value === "" || neighborhoodname.value == null) {
      messages.push("Neighborhood Name is required");
    }
    if (messages.length > 0) {
      e.preventDefault();
      errorElement.innerText = messages.join(", ");
    }
  });

  form.addEventListener("submit", async (event) => {
    event.preventDefault();
    if (currentData.length === 0) {
      const arrayFromJson = await fetch("/api/area");
      let data = await arrayFromJson.json();
      data = data.data;
      console.log(data);
      currentData = filtercheck(data);
      await loadtable(currentData);
    } else {
      currentData = filtercheck(data);
      await loadtable(currentData);
    }
  });
  function filtercheck(array) {
    let filterData = array;
    if (neighborhood.value !== "") {
      const neighborhoodfilter = filterData.filter((item) =>
        item.neighborhood
          .toLowerCase()
          .includes(neighborhood.value.toLowerCase())
      );
      filterData = neighborhoodfilter;
    }
    if (description.value !== "") {
      const descriptionfilter = filterData.filter((item) =>
        item.description.toLowerCase().includes(description.value.toLowerCase())
      );
      filterData = descriptionfilter;
    }
    if (landmarks.value !== "") {
      const landmarksfilter = filterData.filter((item) =>
        item.landmarks.toLowerCase().includes(landmarks.value.toLowerCase())
      );
      filterData = landmarksfilter;
    }
    if (area_id.value !== "") {
      const idfilter = filterData.filter(
        (item) => item.area_id === parseInt(area_id.value)
      );
      filterData = idfilter;
    }
    return filterData;
  }
  async function loadtable(array) {
    table.innerHTML = `<tbody><tr>
        <th>Area ID</th>
        <th>Neighborhood Name</th>
        <th>Landmarks</th>
        <th>Description</th>
    </tr>


    </tbody>`;
    array.forEach((item) => {
      const row = document.createElement("tr");
      const areaid = document.createElement("td");
      areaid.innerHTML = item.area_id;
      row.appendChild(areaid);
      const neighborhood = document.createElement("td");
      neighborhood.innerHTML = item.neighborhood;
      row.appendChild(neighborhood);
      const landmarks = document.createElement("td");
      landmarks.innerHTML = item.landmarks;
      row.appendChild(landmarks);
      const description = document.createElement("td");
      description.innerHTML = item.description;
      row.appendChild(description);
      table.appendChild(row);
    });
  }
}

document.addEventListener("DOMContentLoaded", async () => {
  await createTable();
});

// updates may need to add more to this
