/*added link to comment*/
export default 'SELECT * FROM dietary_restrictions';

export default (category) => {'SELECT * FROM meals WHERE ${category}'};