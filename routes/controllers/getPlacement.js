export default `SELECT * 
                FROM placement p
                INNER JOIN vinyl v
                ON p.vinyl_id = v.vinyl_id`;