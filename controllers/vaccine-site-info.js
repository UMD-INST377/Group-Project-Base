const vaccSitesInfo = `SELECT site_name,
    street_address,
    city,
    zip_code,
    site_type,
    operating_hours,
    contact_phone,
    website,
FROM
    vaccine_site_info
LIMIT 50`;
export default vaccSitesInfo