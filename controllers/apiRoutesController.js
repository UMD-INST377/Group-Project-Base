const player = {

  getPlayer: `SELECT player_id, player_name, position_name, ppg, assists, name
                        FROM Positions JOIN players
                          USING(position_id) JOIN Team
                          USING(team_id);`,

  postPlayer: `UPDATE Positions JOIN players USING(poistion_id) JOIN Team USING(team_id)
                SET player_id = $GET['player_id], player_name = $GET['player_name'], 
                poistion_name=$GET['poisiton_name'], ppg=$GET['ppg'],
                assists=$GET['assists'],name=$GET['name']`,

  putPlayer: `INSERT INTO players (player_name, ppg, assists, team)
                VALUES ($GET['player_name'], $GET['ppg'], '$GET['assists']', $GET['team']);`,

  deletePlayer: `DELETE player FROM Positions JOIN players 
                  USING(poistion_id) JOIN Team
                  USING(team_id)
                  WHERE player_id = $GET['player_id'];`

};

export default player;
