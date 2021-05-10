export default 
`SELECT media_title, media_release_year, media_description, CONCAT(creator_first_name, ' ', creator_last_name) as creator_name
FROM all_media
	JOIN all_media_creators_link USING(media_id)
    JOIN creators USING(creator_id)
WHERE media_type = 'Album';`