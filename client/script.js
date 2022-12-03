function findThePlayer(search) {
  console.log(search);
  const url = `https://api-nba-v1.p.rapidapi.com/players?search=${search}`;
  const options = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': 'b752f1afaamsh07a55087fef36c6p1a49bcjsn7dceb30b0636',
      'X-RapidAPI-Host': 'api-nba-v1.p.rapidapi.com'
    }
  };

  fetch(url, options)
    .then((res) => res.json())
    .then((json) => console.log(json))
    .catch((err) => console.error(`error:${err}`));
}

async function mainEvent() {
  const form = document.querySelector('.main_form');
  const submit = document.querySelector('#get-nba'); // get a reference to your submit button
  let search = '';

  submit.style.display = 'visible';

  form.addEventListener('input', (event) => {
    console.log('input', event.target.value);
    search = event.target.value;
  });

  form.addEventListener('submit', (submitEvent) => {
    submitEvent.preventDefault();
    const players = findThePlayer(search);
    console.log(players.players)
    const id = findTheId(player);

    // This constant will have the value of your 15-restaurant collection when it processes

    // And this function call will perform the "side effect" of injecting the HTML list for you

    // By separating the functions, we open the possibility of regenerating the list
    // without having to retrieve fresh data every time
    // We also have access to some form values, so we could filter the list based on name
  });
}

document.addEventListener('DOMContentLoaded', async () => mainEvent());