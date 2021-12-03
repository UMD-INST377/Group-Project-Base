export default postController();

constant addMember = "INSERT INTO CongressMembers(Name, Info_ID, 'Contact Info ID')
VALUES('${req.body.name}','${req.body.info_id}','${req.body.contact_info}'";