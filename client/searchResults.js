
async function getByID() {
  let endpoint = './api/search/' + document.querySelector('#movieId').value 
  const message = document.querySelector('#results')
  const clearButton = document.querySelector('#clear')
  console.log(endpoint)
  const request = await fetch(endpoint)
  const movies = await request.json()
  const arr = new Set();
  movies.forEach((movie) => {
                movie.forEach((data) => {
                        arr.add(data.name)
                      });
                    });
  console.log(arr)
  arr.forEach((movie) =>{
    message.innerHTML += `
  <li>                    
      <div class="column">
              <th>${(movie)}</th>
      </div>
  </li>
  `
  } )
  function clearList(){
    // looping through each child of the search results list and remove each child
    while (arr.firstChild){
        arr.removeChild(arr.firstChild)
    }
  }
  
  clearButton.addEventListener("click", () => {
    clearList()
  })
}

const send = document.querySelector('#submit');
send.onclick = getByID;