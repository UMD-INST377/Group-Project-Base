/* clientId id */
const clientId = 'cb1c6f6066584c86a0e3a39d2c451b65';
/* Secret */
const clientSecret = '613a41ee4e6f411e8f0f7c523c554204';

/* localuserdata */
let localdata = "";
/* get token */
let getToken = async () => {
  const maindata = localdata = await fetch('https://accounts.spotify.com/api/token', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
      'Authorization': 'Basic ' + btoa(clientId + ':' + clientSecret)
    },
    body: 'grant_type=client_credentials'
  });
  const data = await maindata.json();
  return data;
};
/* get data */
getToken().then((res) => {
  localdata = res;
  console.log(localdata)
}).catch((err) => {
  /* return error */
  console.log(err)
})


var maindata = '';
//chart dom object
var ctx = document.getElementById('myChart').getContext('2d');
var myChart = ''; //this is chart entity object
// here is reset button
document.querySelector('#reset').addEventListener('click', function () {
  if (myChart != '') {
    myChart.destroy();
  }
  if (maindata != '') {
    showdata(maindata)
  }

})
// draw the chart
function showdata (maindata) {
  let data = maindata;
  // return name 
  var labels = data.artists.map((ele) => {
    return ele.name
  })
  // return  followers total number
  var followers = data.artists.map((ele) => {
    return ele.followers.total
  })
  // return background color 
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
          text: 'Artists Followers',/* the name of the chart */
        }
      },
    }
  });
}
// click for submit
document.querySelector('#submit').addEventListener('click', function () {
  var q = document.querySelector('input').value; // this is the user input
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
    }).then(response => response.json())     // resolve readable data
      .then(data => {
        maindata = data;
        showdata(maindata)
      })// resolve use then
      .catch(err => console.log("crashedddddddd", err))      // if not use catch 
  }
})










function choseRgb () {

  // use math random to make chart color random 
  let r = Math.floor(Math.random() * 256);

  let g = Math.floor(Math.random() * 256);

  let b = Math.floor(Math.random() * 256);

  // return color veriable
  return `rgb(${r},${g},${b})`;
}
document.querySelector('#max').addEventListener('click', function () {
  // show the max number 
  console.log(maindata)
  // find the max number
  let showFirst = maindata.artists.sort(dateData("followers", true))[0]
  console.log(showFirst)
  let result = { 'artists': [showFirst] };
  if (myChart != '') {
    // reset
    myChart.destroy();
  }
  console.log(result);
  if (maindata != '') {
    // re-render chart 
    showdata(result)
  }
})
// this is the function to see who is bigger
function dateData (property) {
  return function (a, b) {
    var value1 = a[property];
    var value2 = b[property];
    return value2.total - value1.total;

  }
}