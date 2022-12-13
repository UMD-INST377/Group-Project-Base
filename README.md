# Jiayuan Shen and Zijing Wang: A Website of Prince George's County Crimes Visualization
## Link to the project
[A Website of Prince George's County Crimes Visualization](https://zw975.github.io/Group18-Final-Project/client/)
## API
[Crime Incidents February 2017 to Present](https://data.princegeorgescountymd.gov/Public-Safety/Crime-Incidents-February-2017-to-Present/wb4e-w4nf)
This API contains all the crime data from Februray 2017 to present. The data contains crime location, crime type, date, street and some other columns that describe the type of the crime.
## Target Browser
The website will perfectly fit into the browser of any personal computer, with the browser window at any size. However, due to the size of the map, it will not perfectly fit into cell phone screen. We did not find a quick solution to this situation, but we did made it possible for the rest of the components working fine in a cell phone screen.
## Visualization
### Overall description
Similar to previous labs, the visualization will filter 15 crimes and project them onto a map, and generate a bar chart based on crime type.
### Map
The map will be used to mark 15 locations of the crime. When clicking the tag in the map, a short description of the crime will be shown. This is done by using the Leaflets library. 
### Bar Chart
Before the first search, the bar chart illustrate a overall stats of crimes in Prince George's County. Once the first filter is done (by interacting with the button), the bar chart will be used to display the stats of the 15 crime records filtered. The Chart.js library is used to implement this function.
## CSS framwork
We used flexbox to get the CSS done. We believe the CSS we used is the latest version, CSS 3. Besides that, we used Figma to help us generate shadows and gradients.
## What this project displays and solve
Our project aims at the criminal record associated with PG county; residents who live in this area can check the crime surrounding this area, and they can filter the type of crime in the process of decision-making, like buying a house, educational purpose, or planning for visiting in which avoid misadventure into a felony charges frequent area. We believe our project will relatively reduce the number of victims and diminish unexpected accidental injuries.

Or you can just keep filtering the map for fun :)
