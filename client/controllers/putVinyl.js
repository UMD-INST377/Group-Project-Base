export default `UPDATE vinyl
  SET singer_id=${vinylInfo[0]}, album_name=${vinylInfo[1]}, genre=${vinylInfo[2]}, track_amount=${vinylInfo[3]}, producer_id=${vinylInfo[4]}, runtime=${vinylInfo[5]}, first_available=${vinylInfo[6]},weight=${vinylInfo[7]}, is_explicit=${vinylInfo[8]}
  WHERE vinyl_id=${vinylInfo[12]};
    
  UPDATE singers
  SET artist_name=${vinylInfo[9]}
  WHERE singer_id = ${vinylInfo[0]};
  
  UPDATE producers
  SET producer_fn=${vinylInfo[10]}, producer_ln=${vinylInfo[11]}
  WHERE producer_id=${vinylInfo[4]};
  `;