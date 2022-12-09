# Team 11 ReadMe.md File
Link to GitHub Pages: https://jphart98.github.io/Team-11-103-Group-Project-Base/

# Title: Failed House Inspections in PG County

# Targeted Browsers:
- Google Chrome v.s 108.0.5359
- Microsoft Edge v.s 106.0. 1370
- Mozilla Firefox v.s 107.0.1
- Safari v.s 5.1.7

This webpage is assesible to desktop and mobile users.

# Description of the Project:

Our project is the complete list of properties within Prince George's County that have been presented Housing Inspection Violations. Our repository breaks down 6 of the significant Housing Inspection Violations codes into different catagories where users can click on each link and look up the violations on a map and see where they are located with pinpoint cooridnates. 

# API Endpoints:

1H1: https://data.princegeorgescountymd.gov/resource/9hyf-46qb.json?violation_code=1H1&$where=within_circle(location,%2038.83063,%20-76.901726,%20500000)

1H2: https://data.princegeorgescountymd.gov/resource/9hyf-46qb.json?violation_code=1H2&$where=within_circle(location,%2038.83063,%20-76.901726,%20500000)

1H4: https://data.princegeorgescountymd.gov/resource/9hyf-46qb.json?violation_code=1H4&$where=within_circle(location,%2038.83063,%20-76.901726,%20500000)

1H7: https://data.princegeorgescountymd.gov/resource/9hyf-46qb.json?violation_code=1H7&$where=within_circle(location,%2038.83063,%20-76.901726,%20500000)

1H9: https://data.princegeorgescountymd.gov/resource/9hyf-46qb.json?violation_code=1H9&$where=within_circle(location,%2038.83063,%20-76.901726,%20500000)

OWL: https://data.princegeorgescountymd.gov/resource/9hyf-46qb.json?violation_code=OWL&$where=within_circle(location,%2038.83063,%20-76.901726,%20500000)

# Other JS Libaries Used:

Within our project, a JS library that we used throughout our project was Leaflet. Leaflet is a open-source library using which we used to simply deploy lightweight web maps of Prince George's County. We centered it around Collge Park based on our latitude and longitude coordinates however once you look up the violation code, the map changes and shows you places all around Prince George's County.


# What we wanted to Solve:

We wanted to develop an application that filters data from PG county open API source and display the 6 most popular violation codes for the user to interact with. 
