/* Cuurent Date and Time */
function date_time() {
  const datetimeDisplay = document.getElementById('date-time');
  const datetimeString = new Date().toLocaleString();
  const formatString = datetimeString.replace(', ', ' - ');
  datetimeDisplay.textContent = formatString;
}
setInterval(date_time, 100);





d3.selectAll('p').style('color', () => `hsl(${Math.random() * 360},100%,50%)`);
