const nba = require('nba.js').default;

nba.stats.allPlayers().then((res) => {
  console.log(res);
});

nba.stats.allPlayers((err, res) => {
  if (err) {
    console.error(err);
    return;
  }

  console.log(res);
});

nba.stats.allPlayers({ Season: '2014-15' }, (err, res) => {
  if (err) {
    console.error(err);
    return;
  }

  console.log(res);
});

nba.stats.allPlayers({ IsOnlyCurrentSeason: 0 })
  .then((res) => console.log(res))
  .catch((err) => console.error(err));

function mainEvent() {

}