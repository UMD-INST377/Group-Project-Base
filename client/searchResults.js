
async function getByID() {
  let endpoint = './api/search/' + document.querySelector('#movieId').value 
  const message = document.querySelector('#results')
  console.log(endpoint)
  const request = await fetch(endpoint)
  const movies = await request.json()
  const arr = new Set(Films.getByID);
  movies.forEach((movie) => {
                movie.forEach((data) => {
                        arr.add(data.name)
                      });
                    });
  console.log(arr)
  arr.forEach((movie) =>{
    message.innerHTML += `
  <li>                    
      <table class='result'>
          <tr>
              <th>${(movie)}</th>
          </tr>
      </table>
  </li>
  `
  } )
}

const send = document.querySelector('#submit');
send.onclick = getByID;