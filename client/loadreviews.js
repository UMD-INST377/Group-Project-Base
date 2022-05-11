console.log("message");
async function createTable() {
  console.log("hello");
  let currentData = [];
  const data = [];
  const form = document.querySelector(".main-form");
  const review_id = document.querySelector(".reviewid");
  const review_description = document.querySelector(".review_description");
  const avg_star_rating = document.querySelector(".avg_star_rating");
  const restaurant_id = document.querySelector(".restaurantid");
  const table = document.querySelector(".table");
  const loadtablebutton = document.querySelector("#loadtable");

  async function loadtable(array) {
    table.innerHTML = `<tbody><tr>
    <th>Review ID</th>
    <th>Review Description</th>
    <th>Average Star Rating</th>
    <th>Restaurant ID</th>
</tr>


    </tbody>`;
    array.forEach((item) => {
      const row = document.createElement("tr");
      const reviewid = document.createElement("td");
      reviewid.innerHTML = item.review_id;
      row.appendChild(reviewid);
      const rdescription = document.createElement("td");
      rdescription.innerHTML = item.review_desc;
      row.appendChild(rdescription);
      const arating = document.createElement("td");
      arating.innerHTML = item.avg_star_rating;
      row.appendChild(arating);
      const resid = document.createElement("td");
      resid.innerHTML = item.restaurant_id;
      row.appendChild(resid);
      table.appendChild(row);
    });
  }
  loadtablebutton.addEventListener("click", async (event) => {
    event.preventDefault();
    if (currentData.length === 0) {
      const arrayFromJson = await fetch("/api/review");
      let data = await arrayFromJson.json();
      console.log(data);
      data = data.data;
      currentData = data;
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
    console.log(review_description.value);
    if (review_description.value !== "") {
      const review_descriptionfilter = filterData.filter((item) =>
        item.review_desc
           .toLowerCase()
          .includes(review_description.value.toLowerCase())
      );
      filterData = review_descriptionfilter;
      console.log(filterData);
    }
    if (avg_star_rating.value !== "") {
      const avg_star_ratingfilter = filterData.filter((item) =>
        item.avg_star_rating
      
          .includes(avg_star_rating.value)
      );
      filterData = avg_star_ratingfilter;
    }
    if (restaurant_id.value !== "") {
      const restaurant_idfilter = filterData.filter(
        (item) => item.restaurant_id === parseInt(restaurant_id.value)
      );
      filterData = restaurant_idfilter;
    }
    if (review_id.value !== "") {
      const idfilter = filterData.filter(
        (item) => item.review_id === parseInt(review_id.value)
      );
      filterData = idfilter;
    }
    return filterData;
  }
  review_description.addEventListener("change", async (event) => {
    if (currentData.length === 0) {
      const arrayFromJson = await fetch("/api/review");
      let data = await arrayFromJson.json();
      data = data.data;
      currentData = data;
      console.log(data);
      currentData = filtercheck(data);
      await loadtable(currentData);
    } else {
      currentData = filtercheck(data);
      await loadtable(currentData);
    }
  });
}

document.addEventListener("DOMContentLoaded", async () => {
  await createTable();
});

// updates may need to add more to this
