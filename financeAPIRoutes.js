import { polygonClient, restClient, websocketClient } from '@polygon.io/client-js';

const rest = restClient('API KEY');

// you can use the api now

rest.forex
  .previousClose('C:EURUSD')
  .then('You connected')
  .catch('You didnt connect');