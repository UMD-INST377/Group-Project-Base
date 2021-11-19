function addEndYears(data) {
  for (let i = 0; i <= data.length; i++) {
    if (i < data.length - 1) {
      data[i]["end_term"] = data[i + 1].elected_year;
      //data[i]['End'] = data[i+1].elected_year
    }
  }
  //Adjust Washington's Elected Year
  //CHange
  data[0].elected_year = 1789;
  const d = new Date();
  let year = d.getFullYear();
  let last_index = data.length - 1;
  data[last_index].end_term = year;
}

function structureData(presidents) {
  const timelineJson = {
    title: {
      media: {
        url: "https://www.flickr.com/photos/193081436@N05/51258710166/in/photolist-2m6yhGW-2kYckJf-28sQVu7-9rRwTy-2iVaTF6-9rNyzV-26NonZh-2kd2EvU-2kHipW6-8fth1m-e1CoEo-2abiMDv-P6ZdJK-2a6ztiq-2hA8f3N-2a6zrqh-P6ZaVP-Xv9HAZ-23rw2Ho-2i29Wkc-2btrFfx-2btrFNB-6NXhw2-2kSbRy1-4S1BKD-2iV9VMr-2a6zpPS-DxqCE-DxrMi-2cS6E94-8MebDG-P6Z9JR-2i27wWe-8MPnc3-66Nu82-9Qn6rv-sXE9We-hmyCbm-2i27ua2-2dYpE8f-2iabsoi-nZoEUV-2mdE69a-4ToZHH-AwD3Fx-2iVa5eo-ATqFne-2hX1ijt-SHZb9C-NNdbNG",
        caption: "History of US Presidents",
        credit:
          "flickr/<a href='https://www.flickr.com/photos/193081436@N05/51258710166/in/photolist-2m6yhGW-2kYckJf-28sQVu7-9rRwTy-2iVaTF6-9rNyzV-26NonZh-2kd2EvU-2kHipW6-8fth1m-e1CoEo-2abiMDv-P6ZdJK-2a6ztiq-2hA8f3N-2a6zrqh-P6ZaVP-Xv9HAZ-23rw2Ho-2i29Wkc-2btrFfx-2btrFNB-6NXhw2-2kSbRy1-4S1BKD-2iV9VMr-2a6zpPS-DxqCE-DxrMi-2cS6E94-8MebDG-P6Z9JR-2i27wWe-8MPnc3-66Nu82-9Qn6rv-sXE9We-hmyCbm-2i27ua2-2dYpE8f-2iabsoi-nZoEUV-2mdE69a-4ToZHH-AwD3Fx-2iVa5eo-ATqFne-2hX1ijt-SHZb9C-NNdbNG'>Mount Rushmore at sunset</a>",
      },
      text: {
        headline: "Presidents of the United States",
        text: "A timeline of the presidents of the United States of America.</p>",
      },
    },
    events: [],
  };
  console.log(presidents);
  for (let i = 0; i < presidents.length; i++) {
    //console.log(presidents[i].end_term.toString());
    let toAdd = {
      media: {
        url: `images/${presidents[i].president_id}.jpg`,
        caption: `President # ${i + 1} of the United States of America`,
      },
      start_date: {
        year: presidents[i].elected_year,
      },
      end_date: {
        year: presidents[i].end_term,
      },
      text: {
        headline: `${presidents[i].president_name} (${presidents[i].elected_year} - ${presidents[i].end_term})`,
        text: `<br><p><strong>Lifetime:</strong> ${presidents[i].birth_date} - ${presidents[i].death_date}<p>
                        <p><strong>Home State:</strong> ${presidents[i].home_state} </p>
                        <p><strong>Party:</strong> ${presidents[i].party}</p>
                        <p><strong>Date of Inauguration:</strong> ${presidents[i].date_inauguration}</p> 
                        <p><strong>Vice President:</strong> ${presidents[i].vice_president}</p>
                        <p><strong>Spouse:</strong> ${presidents[i].first_lady}</p>
                        <p><strong>Children:</strong> ${presidents[i].children_name}</p>`,
      },
    };
    timelineJson.events.push(toAdd);
  }
  console.log(timelineJson);
  return timelineJson;
}

async function fetchData() {
  return (await fetch("/api/time_line")).json();
}

document.addEventListener("DOMContentLoaded", async () => {
  let presidents = [];
  try {
    presidents = await fetchData();
  } catch (err) {
    console.log(err);
  }
  addEndYears(presidents);

  const options = {
    hash_bookmark: false,
    initial_zoom: 5,
  };
  const timelineJson = structureData(presidents);
  window.timeline = new TL.Timeline("timeline-embed", timelineJson, options);
  //change
});
