const client = new PolygonAdapter({
  apikey: 'InuXsEB9mOYV2ppfgbNkRhTnuE_rvC3Z',
  realtimeEnabled: true // True(default) = Use websockets for updates.
});

const widget = new TradingView.Widget({
  fullscreen: true,
  symbol: 'AAPL',
  interval: '1D',
  timezone: 'America/New_York',
  container_id: 'tv_chart_container', /* ID of the container element */
  datafeed: client, /* Our Polygon.io Adapter */
  library_path: '/charting_library/', /* Where your TV Library files reside */
  locale: 'en',
  disabled_features: ['use_localstorage_for_settings'],
  enabled_features: ['study_templates'],
  charts_storage_url: 'http://saveload.tradingview.com',
  charts_storage_api_version: '1.1',
  client_id: 'tradingview.com',
  user_id: 'public_user_id',
  theme: 'Dark' /* Light or Dark */
});