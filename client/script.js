/* eslint-disable max-len */
/* leaving space here to add more functions */

/// Getting player data from players (mostly for id) ///
async function getName(term) {
  const url = `https://api-nba-v1.p.rapidapi.com/players?search=${term}`;
  const options = {
    headers: {
      'X-RapidAPI-Key': '3264b40dd2mshd5149564bef5bf8p1bdbb3jsn1cb056c041c4',
      'X-RapidAPI-Host': 'api-nba-v1.p.rapidapi.com'
    }
  }
  /// the search parameter needs at least 3 characters, so this makes sure the term is big enough ///
  if (term.length >= 3) {
    const data = await fetch (url, options);
    const json = await data.json();
    return json;
  }
}

/// Getting data from statistics (this requires searching by id, thus why we need to search players) ///
async function getData(id) {
  const url = `https://api-nba-v1.p.rapidapi.com/players/statistics?id=${id}`;
  const options = {
    headers: {
      'X-RapidAPI-Key': '3264b40dd2mshd5149564bef5bf8p1bdbb3jsn1cb056c041c4',
      'X-RapidAPI-Host': 'api-nba-v1.p.rapidapi.com'
    }
  }
  const data = await fetch(url, options);
  const json = await data.json();
  return json;
}

async function mainEvent() {
  /// creating variables for later use ///
  const form = document.querySelector('.main_form');
  /// initializing arrays to put teams in
  let team1list = [];
  let team2list = [];
  /// if (!arrayFromJson.data?.length) { return; }

  form.addEventListener('input', (event) => {
    nameList= [];
    const playerNames = getName(event.target.value);
    console.log(playerNames);
    playerNames.forEach((item, index) => {
      const {name} = item.name;
      nameList.push(name)
      console.log(nameList);
    });
  })
}
document.addEventListener('DOMContentLoaded', async () => mainEvent());