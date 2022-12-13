### Data USA

Our API: [Data USA](https://datausa.io/about/api/)
The Data USA API allows users to explore the entire database using carefully constructed query strings, returning data as JSON results. All of the visualizations on the page have a "show data" button on their top-right that displays the API call(s) used to generate that visualization. 

They have data across all states but the only free information wasthe national population per year.

The JSON data reads:
"data": [
{
  "ID Nation": "0100US",
  "Nation": "United States",
  "ID Year": 2016,
  "Year" : "2016",
  "Population": 32312515,
  "Slug Nation": "united-states"
  },
  { ....
  };

What we need:
Link to the Github Pages site where things are running
Title of your project
Description of target browsers (iOS? Android? Which ones? Which versions?)
Documentation needs to be written in Markdown (*.md) files, nicely formatted

Description of our project:
We used the US Population API. The API link we used was https://datausa.io/api/data?drilldowns=Nation&measures=Population. We used Chart.js to create a bar chart of the recently population in recently. We did not use any CSS frameworks. Our project is trying to solve the issue of USA population statistics by displaying charts and data for the US population.
