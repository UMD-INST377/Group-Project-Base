export default `SELECT v.vinyl_id, m.song_id, producer_id, track_num, song_name, duration, m.key, bpm  FROM musical_info m
                    JOIN songs s
                        ON m.song_id = s.song_id
                    JOIN vinyl v
                        ON s.vinyl_id = v.vinyl_id`;