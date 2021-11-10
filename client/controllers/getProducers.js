export default `SELECT *
                FROM producers p
                INNER JOIN vinyl v
                ON p.producer_id = v.producer_id
`