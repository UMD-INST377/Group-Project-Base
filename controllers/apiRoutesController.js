const player = {

  getPlayer: `SELECT player_id, player_name, ppg, assists, name
                FROM players JOIN Team
                    USING(team_id);`,

  postPlayer: `INSERT INTO players (player_name, ppg, assists, team_id)
                VALUES (:player_name, :ppg, :assists, :team);`,

  putPlayer: `UPDATE players
                SET ppg = :ppg,
                assists = :assists,
                team_id = :team
              WHERE player_id = :player_id;`,

  deletePlayer: `DELETE FROM players
                  WHERE player_id = :player_id;`

};

export default player;
