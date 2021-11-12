export default `SELECT *
                FROM songs s
                INNER JOIN vinyl v
                    ON s.vinyl_id=v.vinyl_id`;