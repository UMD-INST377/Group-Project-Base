export default `SELECT *
                FROM singers s
                INNER JOIN vinyl v
                    ON s.singer_id = v.vinyl_id`;