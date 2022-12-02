
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
 
    showlist(data)

  }).catch((err) => {
    console.log(err)
  })

document.querySelector('#submit').addEventListener('click', function () {
  let q = document.querySelector('#text').value;
  let type = document.querySelector('#type').value;
  console.log(type)
  if (q == '') {
    alert('pleace input text')
  } else {
    fetch(`https://api.spotify.com/v1/search?q=${q}&type=${type}`, {
      method: 'GET',
      headers: { 'Authorization': 'Bearer ' + localdata.access_token }
    }).then(response => response.json())
      .then(data => {
        console.log(data)
        console.log(JSON.stringify(data.albums.items))
        showlist(data.albums.items)
      })
      .catch(err => console.log("Oh, error", err))
  }

})

function showlist (data) {
  let html = '';

  data.forEach(ele => {
    html += `
             <div class="col-sm-6 col-md-4">
        <div class="thumbnail">
          <img src="${ele.images[1].url}" alt="...">
          <div class="caption">
            <h3>name:${ele.name}</h3>
            <p>type:${ele.type}</p>
            <p><a href="./detail.html?url=${ele.href}&access_token=${localdata.access_token}" class="btn btn-primary" role="button">Link</a> 

                </p>
          </div>
        </div>
      </div>
       `
    document.querySelector('#list').innerHTML = html;
  });
}
