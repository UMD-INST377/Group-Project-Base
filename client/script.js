const cover = document.querySelector('.cover');
const inputPart = cover.querySelector('.input-part');
const infoTxt = inputPart.querySelector('.info-txt');
const inputField = inputPart.querySelector('input');
const locationBtn = inputPart.querySelector('button');

let api;

inputField.addEventListener('keyup', (e) => {
  if (e.key == 'Enter' && inputField.value != '') {
    requestApi(inputField.value);
  }
});

locationBtn.addEventListener('click', () => {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(onSucces, onError);
  } else {
    alert('Can not find the geolocation api');
  }
});

function onSucces(position) {
  const {latitude, longitude} = position.coords;
  api = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=764fbbd7a27293806d04e4e543acf0ba`;
  fetchData();
}

function onError(error) {
  infoTxt.innerText = error.message;
  infoTxt.classList.add('error');
}

function requestApi(city) {
  api = 'https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=$764fbbd7a27293806d04e4e543acf0ba';
  fetchData();
}

function fetchData() {
  infoTxt.innerText = ' Search detail...';
  infoTxt.classList.add('pending');
  fetch(api).then((response) => response.json()).then((result) => weatherDetails(result));
}

function weatherDetails(info) {
  infoTxt.classList.replace('pending', 'error');
  if (info.cod == '404') {
    infoTxt.innerText = `${inputField.value} Not a Valid City Name`;
  } else {
    infoTxt.classList.remove('pending', 'error');
    cover.classList.add('active');
    console.log(info);
  }
}