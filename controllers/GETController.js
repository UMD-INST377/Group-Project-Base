const members ="SELECT 'Member Full Name' AS 'Name' , 'Personal Info ID' AS 'Info_ID', 'Contact Info ID' FROM  CongressMembers";

const contact ="SELECT 'Phone Number' AS 'Phone_Number', 'Email Address' AS 'Email_Address', 'Office Address' AS 'Office_Address' FROM ContactInformation";

const contact ="SELECT 'Phone Number' AS 'Phone_Number', 'Email Address' AS 'Email_Address', 'Office Address' AS 'Office_Address' FROM ContactInformation";

const profiles ="SELECT 'Internet Profile ID' AS 'profile_ID', 'Twitter' AS 'twitter', 'Instagram' AS 'instagram', 'Facebook' AS 'facebook', 'Website' AS 'website' FROM InternetProfiles";

export default {
    members,contact,
}
