export default postController();

constant addMember = "INSERT INTO CongressMembers(Name, Info_ID, 'Contact Info ID')
VALUES('${req.body.name}','${req.body.info_id}','${req.body.contact_info}'";

constant addContact = "INSERT INTO ContactInformation('Phone_Number', 'Email_Address', 'Office_Address')
VALUES('{$req.body.Phone_Number}','{$req.body.Email_Address}','{$req.body.Office_Address}'"; 