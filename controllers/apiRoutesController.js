const player = {

  getPlayer: `SELECT player_name, ppg, assists, name
                FROM players JOIN Team
                    USING(team_id);`,

  postPlayer: `INSERT INTO players (player_name, ppg, assists, team_id)
                VALUES (:player_name, :ppg, :assists, :team);`,

  putPlayer: `UPDATE Positions JOIN players USING(poistion_id) JOIN Team USING(team_id)
                SET player_id = $GET['player_id], player_name = $GET['player_name'], 
                poistion_name=$GET['poisiton_name'], ppg=$GET['ppg'],
                assists=$GET['assists'],name=$GET['name']`,

  deletePlayer: `DELETE player FROM Positions JOIN players 
                  USING(poistion_id) JOIN Team
                  USING(team_id)
                  WHERE player_id = $GET['player_id'];`

};

export default player;
