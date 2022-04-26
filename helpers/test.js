/* eslint-disable no-console */
import { userSearch, toD3 } from './wikidata.js';

// const id = await fuzzySearch('salamander') // needs to return a valid species!
// eslint-disable-next-line import/prefer-default-export
export default async function test() {
  await userSearch('human', 'cat')
    .then((res) => toD3(res.query1, res.query2, res.match))
    .then(console.log);
}