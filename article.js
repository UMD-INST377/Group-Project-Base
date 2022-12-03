
const clientId = 'e401920d65c744c0b6b85dd07d110aa3';

const clientSecret = '52ed8f6740514deba983ada74ebd19bf';

let localdata = {};

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

var maindata = '';

var ctx = document.getElementById('myChart').getContext('2d');
var myChart = '';

document.querySelector('#reset').addEventListener('click', function () {
  if (myChart != '') {
    myChart.destroy();
  }
  if (maindata != '') {
    showdata(maindata)
  }

})

function showdata (maindata) {
  let data = maindata;

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
          text: 'Artists followers',/* 标题 */
        }
      },
    }
  });
}

document.querySelector('#submit').addEventListener('click', function () {
  var q = document.querySelector('input').value;
  if (q == '') {
    alert('pleace input text')
  } else {
    if (myChart != '') {
      myChart.destroy();
    }
    document.querySelector('#myChart').innerHTML = '';
    fetch(`https://api.spotify.com/v1/artists?ids=${q}`, {
      method: 'GET',
      headers: { 'Authorization': 'Bearer ' + localdata.access_token }
    }).then(response => response.json())
      .then(data => {
        maindata = data;
        showdata(maindata)
      })
      .catch(err => console.log("Oh, error", err))
  }
})










function choseRgb () {


  let r = Math.floor(Math.random() * 256);

  let g = Math.floor(Math.random() * 256);

  let b = Math.floor(Math.random() * 256);


  return `rgb(${r},${g},${b})`;
}
document.querySelector('#max').addEventListener('click', function () {

  console.log(maindata)

  let showFirst = maindata.artists.sort(dateData("followers", true))[0]
  console.log(showFirst)
  let result = { 'artists': [showFirst] };
  if (myChart != '') {

    myChart.destroy();
  }
  console.log(result);
  if (maindata != '') {

    showdata(result)
  }
})

function dateData (property) {
  return function (a, b) {
    var value1 = a[property];
    var value2 = b[property];
    return value2.total - value1.total;

  }
}