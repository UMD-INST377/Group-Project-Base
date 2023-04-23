const svg = d3.select("svg");

const width = window.innerWidth;
const height = window.innerHeight;

svg.attr("width", width).attr("height", height);

const projection = d3.geoMercator()
  .center([0, 20])
  .scale(150)
  .rotate([0, 0]);

const path = d3.geoPath(projection);

const magnitudeColor = d3.scaleThreshold()
  .domain([2.5, 5, 7.5])
  .range(["#f7fcfd", "#e0ecf4", "#9ebcda", "#8856a7"]);

const url = "https://earthquake.usgs.gov/fdsnws/event/1/query?format=geojson&starttime=2020-01-01&endtime=2020-01-02";
d3.json(url).then(function (data) {
  const quakes = data.features;
  svg.selectAll(".quake")
    .data(quakes)
    .enter()
    .append("circle")
    .attr("class", "quake")
    .attr("cx", function (d) {
      return projection([d.geometry.coordinates[0], d.geometry.coordinates[1]])[0];
    })
    .attr("cy", function (d) {
      return projection([d.geometry.coordinates[0], d.geometry.coordinates[1]])[1];
    })
    .attr("r", function (d) {
      return Math.pow(10, d.properties.mag) / 20000;
    })
    .style("fill", function (d) {
      return magnitudeColor(d.properties.mag);
    })
    .on("mouseover", function (d) {
      tooltip.html(`Magnitude: ${d.properties.mag} <br> Location: ${d.properties.place}`)
        .style("left", (d3.event.pageX + 10) + "px")
        .style("top", (d3.event.pageY + 10) + "px")
        .transition()
        .duration(200)
        .style("opacity", 0.9);
    })
    .on("mouseout", function (d) {
      tooltip.transition()
        .duration(200)
        .style("opacity", 0);
    });
});











