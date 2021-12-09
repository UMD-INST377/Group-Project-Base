const getCompaniesSQL = 'SELECT * FROM tax_credit_companies';
const postCompaniesSQL = 'INSERT INTO tax_credit_companies (company_id, company_name, company_address, city, company_zcta) VALUES (:company_id, :company_name, :company_address, :city, :company_zcta)';
const putCompaniesSQL = 'UPDATE tax_credit_companies SET company_address = :company_address, city = :city WHERE company_zcta = := company_zcta';
const deleteCompaniesSQL = 'DELETE FROM tax_credit_companies ORDER BY company_zcta desc limit 1';
export default {
  getCompaniesSQL,
  postCompaniesSQL,
  putCompaniesSQL,
  deleteCompaniesSQL
};
