/* eslint-disable no-inner-declarations */
self.onmessage = function(e) {
  if (e.data[0] !== undefined) {
    // Do work

    function connectApitoDatabase (database, api) {
      list = [];

      database.forEach((item) => {
        const latData = JSON.stringify(item.Latitude);
        const lonData = JSON.stringify(item.Longitude);
        api.forEach((line) => {
          const latAPI = line.latitude;
          const lonAPI = line.longitude;
          if (latAPI.includes(latData) && lonAPI.includes(lonData)) {
            line.location = item['Geocoded address'];
            self.postMessage(JSON.stringify(line));
            list.push(line);
          }
        });
      });
      return list;
    }

    const replacer = JSON.parse(e.data[0]);
    const crimeResults = JSON.parse(e.data[1]);

    const connector = connectApitoDatabase(replacer, crimeResults);
    const connectorString = JSON.stringify(connector);
    const total = [connectorString];
    // Posting back to the page
    // self.postMessage(total);
  }
};