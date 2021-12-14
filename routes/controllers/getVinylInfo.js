export default `SELECT *
                FROM vinyl v
                INNER JOIN producers p
                    ON v.producer_id=p.producer_id
                INNER JOIN singers s
                    ON v.singer_id=s.singer_id`;