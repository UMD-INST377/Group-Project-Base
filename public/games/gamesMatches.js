const teamIDIndex = [
    ['Hawks', 'Hawks', '1610612737'],
    ['Celtics', 'Celtics', '1610612738'],
    ['Cavaliers', 'Cavaliers', '1610612739'],
    ['Pelicans', 'Pelicans', '1610612740'],
    ['Bulls', 'Bulls', '1610612741'],
    ['Mavericks', 'Mavericks', '1610612742'],
    ['Nuggets', 'Nuggets', '1610612743'],
    ['Warriors', 'Warriors', '1610612744'],
    ['Rockets', 'Rockets', '1610612745'],
    ['Clippers', 'Clippers', '1610612746'],
    ['Lakers', 'Lakers', '1610612747'],
    ['Heat', 'Heat', '1610612748'],
    ['Bucks', 'Bucks', '1610612749'],
    ['Timberwolves', 'Timberwolves', '1610612750'],
    ['Nets', 'Nets', '1610612751'],
    ['Knicks', 'Knicks', '1610612752'],
    ['Magic', 'Magic', '1610612753'],
    ['Pacers', 'Pacers', '1610612754'],
    ['76ers', '76ers', '1610612755'],
    ['Suns', 'Suns', '1610612756'],
    ['Trail Blazers', 'Trail Blazers', '1610612757'],
    ['Kings', 'Kings', '1610612758'],
    ['Spurs', 'Spurs', '1610612759'],
    ['Thunder', 'Thunder', '1610612760'],
    ['Raptors', 'Raptors', '1610612761'],
    ['Jazz', 'Jazz', '1610612762'],
    ['Grizzlies', 'Grizzlies', '1610612763'],
    ['Wizards', 'Wizards', '1610612764'],
    ['Pistons', 'Pistons', '1610612765'],
    ['Hornets', 'Hornets', '1610612766']
  ];

  fetch('/api/basketball/teams')
  .then(response => response.json())
  .then(data => {
    allTeamData = data;
    console.log(data);
    console.log('Team data received!');
  });
  
  fetch('/api/basketball/games')
  .then(response => response.json())
  .then(data => {
    allTeamData = data;
    console.log(data);
    console.log('Team data received!');
  });

