/* eslint-disable max-len */

/* leaving space here to add more functions */
async function getData() {
  var accessToken =
    "BQDTbois3Mm6vqnkBzrVhk4mNE1oTvmFYhX_b-7sezq2ZUchPAt7V6yn3hZ7iPiR3a8ZSdOINrlzCve2YW7jhoadfLWM8rEsD2yXNjGU_C4PBmiXKA37piRWtaZHjMtMBbyPd4Ip86vz4eQrVhbwq74CO7_LZPnXxPTyR0ZQckhR51t8I_hqRbN2uULeandN1ug";
  const data = await fetch(
    "https://api.spotify.com/v1/albums/7jaSNQUBJbvfbZHLNFrV7P",
    {
      method: "GET",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        Authorization: "Bearer " + accessToken,
      },
    }
  );
  const json = await data.json();
  return json;
}

async function mainEvent() {
  const form = document.querySelector(".main_form");

  const AlbumData = getData();
  nameList = [];
  durationList = [];
  AlbumData.track.forEach((item, index) => {
    const songName = item.name;
    const duration = item.duration_ms;
    nameList.push(songName);
    durationList.push(duration);
  });
  console.log(nameList);
  console.log(durationList);
}
document.addEventListener("DOMContentLoaded", async () => mainEvent());
