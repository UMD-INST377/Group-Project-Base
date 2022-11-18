/* eslint-disable */

let redirect_uri ="http://127.0.0.1:5500/index.html";
let client_id = "64cfee2e01e5403c949581a03b91bb9b";
let client_secret = "98dddfc08b1f43de80702261f34ef9ed";

const AUTHORIZE = "https://accounts.spotify.com/authorize";
const TOKEN = "https://accounts.spotify.com/api/token";

function onPageLoad() {
    //client_id = localStorage.getItem("client_id");
    //client_secret = localStorage.getItem("client_secret");
    if (window.location.search.length > 0){
        handleRedirect();
    }
}

function handleRedirect() {
    let code = getCode();
    fetchAccessToken( code );
    window.history.pushState("", "", redirect_uri);
}


function getCode() {
    let code = null;
    const queryString = window.location.search;
    if( queryString.length > 0){
        const urlParams = new URLSearchParams(queryString);
        code = urlParams.get('code')
    }
    return code;
}


function requestAuthorization() {
    //localStorage.setItem("client_id", client_id);
    //localStorage.setItem("client_secret", client_secret);
    
    let url = AUTHORIZE;
    url += "?client_id=" + client_id;
    url += "&response_type=code";
    url += "&redirect_uri=" + encodeURI(redirect_uri);
    url += "&show_dialog=true";
    url += "&scope=playlist-read-private playlist-read-collaborative user-library-modify playlist-modify-private playlist-modify-public user-read-recently-played user-library-read";
    window.location.href = url;
}


function fetchAccessToken( code ) {
    let body = "grant_type=authorization_code";
    body += "&code=" + code;
    body += "&redirect_uri=" + encodeURI(redirect_uri);
    body += "&client_id=" + client_id;
    body += "&client_secret=" + client_secret;
    callAuthorizationApi(body);
}

function callAuthorizationApi(body){
    let xhr = new XMLHttpRequest();
    xhr.open("POST", TOKEN, true);
    xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
    xhr.setRequestHeader('Authorization', 'Basic ' + Buffer.from((client_id + ':' + client_secret), ('base64')));
    xhr.send(body);
    xhr.onload = handleAuthorizationResponse;
}


function handleAuthorizationResponse(){
    if ( this.status == 200 ){
        var data = JSON.parse(this.responseText);
        console.log(data);
        var data = JSON.parse(this.responseText);
        if ( data.access_token != undefined ){
            access_token = data.access_token;
            localStorage.setItem("access_token", access_token);
        }
        if ( data.refresh_token  != undefined ){
            refresh_token = data.refresh_token;
            localStorage.setItem("refresh_token", refresh_token);
        }
        onPageLoad();
    }
    else {
        console.log(this.responseText);
        alert(this.responseText);
    }
}
/* eslint-disable */

