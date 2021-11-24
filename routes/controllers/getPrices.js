export default `SELECT * 
                FROM prices p 
                INNER JOIN vinyl v 
                ON p.vinyl_id = v.vinyl_id`;