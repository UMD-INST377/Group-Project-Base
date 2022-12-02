token = 'BQD3A8bkEy9etJ0sSQEGwImtxynAoe7bXjwbqwvYaQtsJzKNn4-XdKmvloUaP30GY37svdb9dIz-J_c06WdzvD2S5o62ZEK5MBwx9x9gn6_H-dcUrW9jcRu-6Hyw_116Em_XFglrLrrcK9CyfT1m4Sfice2vNrIKh8eSDCAb1e3UDAenp8_181rri_-ul9Q6wqm2WbbORf9Q6c3wgwGrPV0'
term = 'long_term'
artist_ids = '39cDMNnxwjrKJE1dyt47jh,1aBDI4nH6OfAkNyUX08O2V'
album_id='0TnOYISbd1XYRBk9myaseg'

// Saves the token to storage which can be used anywhere on the website
if (token !== null) {
  localStorage.setItem("access_token", token);
} else {
  token = localStorage.getItem("access_token");
}

console.log("token");
console.log(token);

const getTracklist = async (term, token) => {
    const url = `https://umd-spotify-backend.herokuapp.com/tracklist?access_token=${token}&term=${term}`;
      const response = await fetch(url);
      const data = await response.json();
      return data;
    }

const get_authorIDArray = async (term, token) => {
    const url = `https://umd-spotify-backend.herokuapp.com/get_authorlist?access_token=${token}&term=${term}`;
    const response = await fetch(url);
    const data = await response.json();
    return data;
      }

const getGenresCount = async (artist_ids, token) => {
    const url = `https://umd-spotify-backend.herokuapp.com/genreslist?access_token=${token}&id_string=${artist_ids}`;
    const response = await fetch(url);
    const data = await response.json();
    return data;
}

const getShowcategory = async (album_id, token) => {
    const url = `https://umd-spotify-backend.herokuapp.com/artist_albums?access_token=${token}&id=${album_id}`;
    const response = await fetch(url);
    const data = await response.json();
    return data;
  }


const mainEvent = async () => {
    let res = await getTracklist(term, token);
    console.log(res);
    let res_two = await get_authorIDArray(term, token);
    console.log(res_two);
    let res_three = await getGenresCount(artist_ids, token);
    console.log(res_three)
    let res_four = await getShowcategory(album_id, token)
    console.log(res_four)

      };
    document.addEventListener("DOMContentLoaded", async () => mainEvent());  