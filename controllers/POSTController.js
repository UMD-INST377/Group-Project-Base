const addMember = "INSERT INTO CongressMembers(Name, Info_ID, 'Contact Info ID') VALUES('${req.body.name}','${req.body.info_id}','${req.body.contact_info}'";

const addContact = "INSERT INTO ContactInformation('Phone_Number', 'Email_Address', 'Office_Address') VALUES('{$req.body.Phone_Number}','{$req.body.Email_Address}','{$req.body.Office_Address}'";

const addProfiles = "INSERT INTO InternetProfiles('profile_ID', 'twitter', 'instagram', 'facebook', 'website') VALUES('{$req.body.profile_ID}','{$req.body.twitter}','{$req.body.instagram}', '{$req.body.facebook}', '{$req.body.website}')";

export default {
    addMember, addContact,
}