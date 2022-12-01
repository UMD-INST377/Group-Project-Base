/* eslint-disable max-len */

/* leaving space here to add more functions */
async function getData() {
  var accessToken =
    "BQDLhQu0lvVsd6TaHoc5n_kOzwIRrtOFvpkdhuekLdTMIxCbOilq1JYyiTlpGyr3orYsm-McgNr2DBss6T1Fl94R4-RPjK7ndbSKVV-sd9Dv-gQYU2m6MI0-fM5nyO9VfFfPYV4RzslTM2Z2Sp511um0a0VyAq1amdLdXpgyqBvYBKvgiCDLSSUxbBdzDKyBQZ4";
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

function traverse_duration(obj){
  lst = [];
  for(var prop in obj){
      if(typeof obj[prop]!="duration_ms"){
          traverse_duration(obj[prop[i]]);
      }else{
          lst.push(obj[prop[i]]);
      }
  }
  return lst;
}

function traverse_name(obj){
  lst = [];
  for(var prop in obj){
      if(typeof obj[prop]!="name"){
          traverse_name(obj[prop[i]]);
      }else{
          lst.push(obj[prop[i]]);
      }
  }
  return lst;
}

async function mainEvent() {
  const form = document.querySelector(".main_form");

  const AlbumData = getData();
  nameList = traverse_duration(AlbumData);
  durationList = traverse_name(AlbumData);
  console.log(nameList);
  console.log(durationList);
}
document.addEventListener("DOMContentLoaded", async () => mainEvent());