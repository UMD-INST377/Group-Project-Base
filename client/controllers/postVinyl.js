export default `INSERT INTO vinyl
  VALUES (${vinylInfo[12]},${vinylInfo[0]},${vinylInfo[1]},${vinylInfo[2]},${vinylInfo[3]},${vinylInfo[4]},${vinylInfo[5]},${vinylInfo[6]},${vinylInfo[7]},${vinylInfo[8]});
  
  INSERT INTO singers
  VALUES (${vinylInfo[0]},${vinylInfo[9]});

  INSERT INTO producers
  VALUES (${vinylInfo[4]},${vinylInfo[10]},${vinylInfo[11]});
  `;