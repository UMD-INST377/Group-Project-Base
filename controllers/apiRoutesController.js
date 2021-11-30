const player = {

  getPlayer: `SELECT player_name, position_name, ppg, assists, name
                        FROM Positions JOIN players
                          USING(position_id) JOIN Team
                          USING(team_id);`,

  postPlayer: "",

  putPlayer: '',

  deletePlayer: ''

};

export default player;
