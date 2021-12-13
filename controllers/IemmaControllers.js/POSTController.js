export default postController(); {
    const addPersonal = "INSERT INTO Personal Information(First_Name, Info_ID, Gender, Age, Date_Of_Birth, Race, Last_Name) VALUES('${req.body.First_Name}','${req.body.Info_ID}','${req.body.Gender}', '{$req.body.Age}', '{$req.body.Date_Of_Birth}', '{$req.body.Race}', '{$req.body.Last_Name}'";

    const addProfessional = "INSERT INTO Professional Information('Party_Affiliation', 'Chamber', 'Start_Year', 'Professional_ID') VALUES('{$req.body.Party_Affiliation}','{$req.body.Chamber}','{$req.body.Start_Year}', '{$req.body.Professional_ID}'";
    
}

