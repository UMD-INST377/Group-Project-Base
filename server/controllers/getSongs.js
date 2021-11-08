export default `SELECT song_id AS "Song ID", vinyl_id AS "Vinyl ID", song_name AS "Song Name", 
track_num AS "Track Number", duration AS "Duration"
FROM songs 
JOIN vinyl
    USING(vinyl_id)
    ORDER BY vinyl_id, track_num`;