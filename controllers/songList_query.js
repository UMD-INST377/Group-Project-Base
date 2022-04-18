export default 'SELECT tr.track_name, ar.name FROM tracks AS tr JOIN music AS mu ON tr.track_id = mu.track_id JOIN artist AS ar ON mu.artist_id = ar.artist_id WHERE tr.track_name = StoleYourCar';
