export default `SELECT * 
                FROM certification c
                INNER JOIN vinyl v
                    ON v.vinyl_id = c.vinyl_id`;