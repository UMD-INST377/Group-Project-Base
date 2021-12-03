export default getController();

constant members ="""SELECT 'Member Full Name' AS 'Name' , 'Personal Info ID' AS 'Info_ID', 'Contact Info ID' FROM  CongressMembers""";

const memberProfiles = `SELECT Internet Profile ID,
  Twitter,
  Instagram,
  Facebook,
  Website
FROM
  Internet Profiles`;