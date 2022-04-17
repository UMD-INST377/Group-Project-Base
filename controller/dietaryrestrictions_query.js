/*added link to comment*/
//export default 'SELECT * FROM dietary_restrictions';

//export default (category) => {'SELECT * FROM meals WHERE ${category}'};
//export default (restriction_type) => {'SELECT * FROM meals WHERE restriction_type = :restriction_type;'};
//export default (category) => {'SELECT * FROM meals WHERE restriction_type = :restriction_type;'};
export default 'SELECT * FROM dietary_restrictions WHERE restriction_type = :restriction_type;';