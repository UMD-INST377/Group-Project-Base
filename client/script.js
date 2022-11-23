/* eslint-disable max-len */
/* leaving space here to add more functions */
async function getData() {
  var accessToken = "BQCwQEe5cq9Ncxlozh7QOdsEi9MAN7QEMfU";
  fetch("https://api.spotify.com/v1/albums/7jaSNQUBJbvfbZHLNFrV7P", {
    method: "GET",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      Authorization: "Bearer " + accessToken,
    },
  });

  const json = await data.json();
  return json;
}

async function mainEvent() {
  const form = document.querySelector(".main_form");

  let albums = [];

  form.addEventListener("input", (event) => {
    nameList = [];
    const albumName = getData(event.target.value);
    console.log(albumName);
    albumName.forEach((item, index) => {
      const { name } = item.name;
      nameList.push(name);
      console.log(nameList);
    });
  });
}
document.addEventListener("DOMContentLoaded", async () => mainEvent());
