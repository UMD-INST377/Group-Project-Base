// showcasing the most frequency of records labels in descending order // 
export default `select album.record_label_id, record_label_name, count(album_id) as frequency from album join record_label on album.record_label_id = record_label.record_label_id
group by album.record_label_id order by frequency desc;
