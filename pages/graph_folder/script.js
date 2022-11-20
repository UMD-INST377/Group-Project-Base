let params = new URL(document.location).searchParams;
let token = params.get("token");
localStorage.setItem("acceess_token", token);
url = "https://umd-spotify-backend.herokuapp.com/tracklist?";
// Sends the authentication token and time_frame - (short_term,medium_term,long_term)
// Returns an array of songs
const getTracklist = async (req_term, req_token) => {
  const response = await fetch(
    url +
      new URLSearchParams({
        access_token: req_token,
        term: req_term,
      })
  );
  const data = await response.json();
  return data;
};

const page = document.getElementById("data");
getTracklist("short_term", token).then((data) => {
  console.log("page");
  console.log(data);
  page.innerHTML = `<pre>${JSON.stringify(data, null, 2)}</pre>`;
});

console.log("token");
console.log(token);
