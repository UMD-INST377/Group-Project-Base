/* clientId id */
const clientId = 'e401920d65c744c0b6b85dd07d110aa3';
/* Secret */
const clientSecret = '52ed8f6740514deba983ada74ebd19bf';
/* localuserdata */
let localdata = {};
/* get token everytime */
fetch('https://accounts.spotify.com/api/token', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/x-www-form-urlencoded',
    'Authorization': 'Basic ' + btoa(clientId + ':' + clientSecret)
  },
  body: 'grant_type=client_credentials'
}).then(response => response.json())
  .then((res) => {
    console.log(res)
    localdata = res;

  }).catch((err) => {
    console.log(err)
  })
var data = { "artists": [{ "external_urls": { "spotify": "https://open.spotify.com/artist/2CIMQHirSU0MQqyYHq0eOx" }, "followers": { "href": null, "total": 2757451 }, "genres": ["canadian electronic", "edm", "electro house", "pop dance", "progressive house"], "href": "https://api.spotify.com/v1/artists/2CIMQHirSU0MQqyYHq0eOx", "id": "2CIMQHirSU0MQqyYHq0eOx", "images": [{ "height": 640, "url": "https://i.scdn.co/image/ab6761610000e5ebc5ceb05f152103b2b70d3b07", "width": 640 }, { "height": 320, "url": "https://i.scdn.co/image/ab67616100005174c5ceb05f152103b2b70d3b07", "width": 320 }, { "height": 160, "url": "https://i.scdn.co/image/ab6761610000f178c5ceb05f152103b2b70d3b07", "width": 160 }], "name": "deadmau5", "popularity": 67, "type": "artist", "uri": "spotify:artist:2CIMQHirSU0MQqyYHq0eOx" }, { "external_urls": { "spotify": "https://open.spotify.com/artist/57dN52uHvrHOxijzpIgu3E" }, "followers": { "href": null, "total": 579196 }, "genres": ["alternative dance", "indietronica"], "href": "https://api.spotify.com/v1/artists/57dN52uHvrHOxijzpIgu3E", "id": "57dN52uHvrHOxijzpIgu3E", "images": [{ "height": 693, "url": "https://i.scdn.co/image/2f0c6c465a83cd196e651e3d4e7625ba799a6f60", "width": 1000 }, { "height": 444, "url": "https://i.scdn.co/image/4e3e13c8b993bde9898e49509fb9ae121636e05f", "width": 640 }, { "height": 139, "url": "https://i.scdn.co/image/dc68dd24b45b74ecce9d4ed486423673d683ced3", "width": 200 }, { "height": 44, "url": "https://i.scdn.co/image/4e55ca05d4f336a2fa0e3062a7ec9778a201e8bc", "width": 63 }], "name": "Ratatat", "popularity": 66, "type": "artist", "uri": "spotify:artist:57dN52uHvrHOxijzpIgu3E" }, { "external_urls": { "spotify": "https://open.spotify.com/artist/1vCWHaC5f2uS3yhpwWbIA6" }, "followers": { "href": null, "total": 22277533 }, "genres": ["dance pop", "edm", "pop", "pop dance", "pop rap"], "href": "https://api.spotify.com/v1/artists/1vCWHaC5f2uS3yhpwWbIA6", "id": "1vCWHaC5f2uS3yhpwWbIA6", "images": [{ "height": 640, "url": "https://i.scdn.co/image/ab6761610000e5eb09bf4814c6585e1f69dfeef7", "width": 640 }, { "height": 320, "url": "https://i.scdn.co/image/ab6761610000517409bf4814c6585e1f69dfeef7", "width": 320 }, { "height": 160, "url": "https://i.scdn.co/image/ab6761610000f17809bf4814c6585e1f69dfeef7", "width": 160 }], "name": "Avicii", "popularity": 80, "type": "artist", "uri": "spotify:artist:1vCWHaC5f2uS3yhpwWbIA6" }] };
console.log(data)
var ctx = document.getElementById('myChart').getContext('2d');
var myChart = '';
// showdata(data)
/* draw chart */
function showdata (data) {
  var labels = data.artists.map((ele) => {
    return ele.name
  })
  var followers = data.artists.map((ele) => {
    return ele.followers.total
  })
  var backgroundColor = [];
  followers.forEach((ele, i) => {
    backgroundColor.push(choseRgb().toString())
  })

  myChart = new Chart(ctx, {
    type: 'bar',
    data: {
      labels: labels,
      datasets: [
        {
          label: 'followers',
          data: followers,
          backgroundColor: backgroundColor,
          borderWidth: 1
        },
      ]
    },
    options: {
      plugins: {
        title: {
          display: true,
          text: 'Artists followers',          /* chart title */
        }
      },
      // scales: {
      //   yAxes: [
      //     {
      //       ticks: {
      //         beginAtZero: true
      //       }
      //     }
      //   ]
      // }
    }
  });
}
$('#submit').click(function () {
  var q = $('input').val();
  if (q == '') {
    alert('pleace input text')
  } else {
    if (myChart != '') {
      myChart.destroy();
    }
    $('#myChart').html('')
    fetch(`https://api.spotify.com/v1/artists?ids=${q}`, {
      method: 'GET',
      headers: { 'Authorization': 'Bearer ' + localdata.access_token }
    }).then(response => response.json())                //resolve readable data
      .then(data => {
        showdata(data)
      })
      .catch(err => console.log("Oh, error", err))
  }
})
function choseRgb () {
  
  // using math random to change color each time when user hit submit botton, chart bar color will be changed

  let r = Math.floor(Math.random() * 256);

  let g = Math.floor(Math.random() * 256);

  let b = Math.floor(Math.random() * 256);

  // return color
  return `rgb(${r},${g},${b})`;
}