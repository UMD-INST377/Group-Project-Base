const members ="SELECT 'Member Full Name' AS 'Name' , 'Personal Info ID' AS 'Info_ID', 'Contact Info ID' FROM  CongressMembers";

const contact ="SELECT 'Phone Number' AS 'Phone_Number', 'Email Address' AS 'Email_Address', 'Office Address' AS 'Office_Address' FROM ContactInformation";

const profiles ="SELECT * FROM Group26_congress_db.`Internet Profiles`";

const membersTest = "SELECT `First Name`, `Last Name`, `Age`, `Gender` FROM Group26_congress_db.`Personal Information`;"
export default {
    members,contact, membersTest, profiles
}
