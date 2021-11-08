const { DELETE } = require("sequelize/types/lib/query-types");

const volcanosGet = `SELECT volcano_id, volcano_name, latitude, longitude, volcano_number
                     FROM volcanos;`

const volcanosPut = `UPDATE volcanos
                     SET volcano_name = :volcano_name,
                     latitude = :latitude,
                     longitude = :longitude,
                     volcano_number = :volcano_number
                     WHERE volcano_id = :volcano_id'


const volcanosPost = `INSERT INTO volcanos(volcano_id, volcano_name, latitude, longitude, volcano_number)
                      VALUES(DEFAULT, :volcano_name, :latitude, :longitude, :volcano_number);`

const volcanosDelete = `DELETE FROM volcanos
                        WHERE volcano_id = :volcano_id`

export default {
  volcanosGet, volcanosPut, volcanosPost, volcanosDelete
};