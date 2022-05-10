/* eslint-disable no-console */
/* eslint-disable max-len */
import fetch from 'node-fetch';
/**
 *        /====================/
 *       / WIKIDATA FUNCTIONS /
 *      /====================/
 *
 *  This page contains all the functions that are used to resolve user searches and return the data needed for visualizing the result.
 *
 * The functions required script to fulfill a user query:
 *      - mainSearch() : for querying all the data from wikipedia/wikidata
 *      - toD3() : for displaying the tree
 *
 * They are used in apiRoutes.js @ route('/search')
 */

/**
 *  This function takes the response from queryTree() and removes any branches with no parent.
 *  The result is a straight line between the species & the top parent.
 *
 * @param {Array} tree Array of values from API
 * @returns Single heirarchical path
 */
export function prune(tree) {
  if (tree.length === 0) {
    console.log('Undefined error in prune() function.');
    return {};
  }
  const set = new Set(tree.map((obj) => obj.item));
  const resultObj = {};

  tree.forEach((node) => {
    if (set.has(node.linkTo)) {
      resultObj[node.item] = {
        itemLabel: node.itemLabel,
        image: node.image.split(', ')[0],
        linkTo: node.linkTo,
        depth: parseInt(node.depth, 10)
      };
    }
  });
  resultObj[tree[tree.length - 1].item] = {
    itemLabel: tree[tree.length - 1].itemLabel,
    image: tree[tree.length - 1].image.split(', ')[0],
    linkTo: tree[tree.length - 1].linkTo,
    depth: parseInt(tree[tree.length - 1].depth, 10)
  };
  return resultObj;
}

/**
 * This function takes two pruned trees and returns the first index they share in common.
 * @param {Object} tree1 Parsed tree
 * @param {Object} tree2 Parsed tree
 * @returns First common index { item, itemLabel }
 */
export function commonTaxon(tree1, tree2) {
  if (typeof tree1 === 'undefined' || typeof tree2 === 'undefined') {
    console.log('Undefined error in commonTaxon() function.');
    return null;
  }
  const a = Object.keys(tree1);
  const b = Object.keys(tree2);
  const common = [];
  for (let i = 0; i < a.length; i += 1) {
    for (let j = 0; j < b.length; j += 1) {
      if (a[i] === b[j]) {
        common.push({
          item: a[i],
          itemLabel: tree1[a[i]].itemLabel,
          image: tree1[a[i]].image
        });
      }
    }
  }
  return common[0]; // first result
}

/**
 * This function returns all steps of a tree *UNTIL* the match parent.
 *
 * Note: The result **does not** contain the match object.
 *
 * @param {Object} arr Parsed Tree
 * @param {Object} match Matching parent: { item, itemLabel }
 * @returns All nodes below the Match object
 */
export function truncatedPath(tree, match) {
  const a = Object.keys(tree);
  const trunc = [];
  for (let i = 0; i < a.length; i += 1) {
    if (a[i] === match.item) {
      break;
    }
    trunc.push({
      item: a[i],
      itemLabel: tree[a[i]].itemLabel,
      image: tree[a[i]].image,
      depth: tree[a[i]].depth
    });
  }
  return trunc;
}

/**
 * This function queries the Wikidata SPARQL endpoint.
 * It returns the heirarchy of parent taxons above any animal species.
 *
 * Note: *if the input ID is not a valid taxon with a parent taxon, the result is an empty array.*
 *
 * @param {string} species Wikidata Entity ID for species
 * @returns {Object} Raw response data (tree with irrelevant nodes)
 */
export async function queryTree(species) {
  // animal Q729
  // species homo sapien Q15978631, cat Q20980826
  const taxonTree = `PREFIX gas: <http://www.bigdata.com/rdf/gas#>
    
        SELECT DISTINCT
          ?item
          ?itemLabel
          (GROUP_CONCAT(DISTINCT ?pic; separator = ", ") as ?image)
          ?linkTo
          ?depth
        {
          SERVICE gas:service {
            gas:program gas:gasClass "com.bigdata.rdf.graph.analytics.SSSP" ;
                        gas:in wd:${species} ;
                        gas:target wd:Q729 ;
                        gas:traversalDirection "Forward" ;
                        gas:out ?item ;
                        gas:out1 ?depth ;
                        gas:linkType wdt:P171 .
          }
          OPTIONAL { ?item wdt:P171 ?linkTo }
          OPTIONAL { ?item wdt:P18 ?pic }
        
          SERVICE wikibase:label {bd:serviceParam wikibase:language "en" }
        }
        GROUP BY ?item ?itemLabel ?image ?linkTo ?depth
        ORDER BY ?depth`;
  const url = `https://query.wikidata.org/sparql?query=${encodeURIComponent(taxonTree)}&format=json`;

  const result = [];
  const response = await fetch(url, {
    Accept: 'application/sparql-results+json'
  });
  await response.json()
    .then((results) => results.results.bindings)
    .then((obj) => obj.forEach((e) => {
      result.push({
        item: e.item.value,
        itemLabel: e.itemLabel.value,
        image: e.image.value,
        linkTo: e.linkTo.value,
        depth: e.depth.value
      });
    }));
  return result;
}

/**
 * This function handles a lot of the computations & Promises.
 *
 * Input **must be** Wikidata entity IDs (start with 'Q')
 *
 * Then the function:
 *      - fetches their heirarchies
 *      - prunes their branches
 *      - finds their first common index
 *      - formats & returns a bundled object ready for visualization
 *
 * @param {string} Q1 Wikidata entity ID
 * @param {string} Q2 Wikidata entity ID
 * @returns Bundled Object (truncated paths + common index)
 */
export async function compareSpecies(Q1, Q2) {
  const carrier = [];
  await queryTree(Q1)
    .then(prune)
    .then((result) => {
      carrier.push(result);
    });
  await queryTree(Q2)
    .then(prune)
    .then((result) => {
      carrier.push(result);
    });
  if (typeof carrier[0] === 'undefined' || typeof carrier[1] === 'undefined') {
    console.log('Undefined error in compareSpecies() function.');
    return null;
  }
  const match = commonTaxon(carrier[0], carrier[1]);
  // returns their full paths
  const trunc1 = truncatedPath(carrier[0], match);
  const trunc2 = truncatedPath(carrier[1], match); // .reverse()
  const finalObj = { query1: trunc1, query2: trunc2, match: match };
  return finalObj;
}

/**
 * Wikidata API can't handle handle user input. This function uses the Wikipedia search endpoint.
 *
 * 1. it searches for the input string & *hopefully* returns the page of an animal species.
 *
 * 2. it queries that page for it's properties and extracts the the corresponding Wikidata entity ID.
 *
 *  Note: Usually we will get what we want.
 *  But if a disambiguation page is more popular than the scientific page (like Cat vs Felis silvestris catus), queryTree() will fail.
 *
 * @param {string} input User input string
 * @returns Wikidata Entity ID
 */
export async function fuzzySearch(input) {
  // Hall of Shame... Searches that don't return a species page.
  if (input.includes('human') || input.includes('sapien')) {
    return 'Q15978631'; // https://www.wikidata.org/wiki/Q15978631
  }
  if (input.includes('cat') || input.includes('kitty')) {
    return 'Q57818409'; // https://www.wikidata.org/wiki/Q57818409
  }
  if (input.includes('dog') || input.includes('canine')) {
    return 'Q26972265'; // https://www.wikidata.org/wiki/Q26972265
  }
  if (input.includes('wolf')) {
    return 'Q18498'; // https://www.wikidata.org/wiki/Q18498
  }
  if (input.includes('polar')) {
    return 'Q33609'; // https://www.wikidata.org/wiki/Q33609
  }
  if (input.includes('bear') && !input.includes('black') && !input.includes('panda')) {
    return 'Q36341'; // https://www.wikidata.org/wiki/Q36341
  }
  if (input.includes('bass')) {
    return 'Q2469966'; // https://www.wikidata.org/wiki/Q2469966
  }
  if (input.includes('otter')) {
    return 'Q41407'; // https://www.wikidata.org/wiki/Q41407
  }
  if (input.includes('cow') || input.includes('bovine') || input.includes('bull')) {
    return 'Q830'; // https://www.wikidata.org/wiki/Q830
  }
  if (input.includes('rat')) {
    return 'Q106133'; // https://www.wikidata.org/wiki/Q106133
  }
  if (input.includes('clam')) {
    return 'Q2279087'; // https://www.wikidata.org/wiki/Q2279087
  }
  if (input.includes('flounder')) {
    return 'Q214034'; // https://www.wikidata.org/wiki/Q214034
  }
  let url = 'https://en.wikipedia.org/w/api.php';
  const params = {
    action: 'query',
    list: 'search',
    prop: 'pageprops',
    srsearch: `subspecies ${input} species`,
    srlimit: 1,
    format: 'json'
  };
  url += '?origin=*';
  Object.keys(params).forEach((key) => { url += `&${key}=${params[key]}`; });
  const pageid = [];
  console.log(url);
  const get = await fetch(url);
  await get.json()
    .then((res) => {
      // console.log(res.query.search) // to double check search results..
      pageid.push(res.query.search[0].pageid);
    });
  // now get the wikibase_item key
  const queryID = [];
  const item = await fetch(`https://en.wikipedia.org/w/api.php?action=query&prop=pageprops&pageids=${pageid[0]}&format=json`);
  await item.json()
    .then((res) => { queryID.push(res.query.pages[pageid].pageprops.wikibase_item); });
  return queryID[0];
}

/**
 * This function abstracts everything above into a simple async function that can be called in the page script.
 *
 * The return value is a **Promise**, so be sure that you handle it appropriately when accessing its return values.
 *
 * @param {string} userInput1 User input for Species #1
 * @param {string} userInput2 User input for Species #2
 * @returns Bundled Object (truncated paths + common index)
 */
export async function userSearch(userInput1, userInput2) {
  const species = [];
  const id1 = await fuzzySearch(userInput1)
    .then((e) => species.push(e));
  const id2 = await fuzzySearch(userInput2)
    .then((e) => species.push(e));
  const compare = await compareSpecies(species[0], species[1]);
  return compare;
}

/**
 * This function recursively nests a single tree.
 *
 * It is a helper used inside of nestArrays() in order to give us a full tree diagram.
 *
 * @param {Object} tree Truncated Tree from main function
 * @param {Object} match Common index
 * @returns Recursively nested array
 */
function nestArray(tree) {
  const index = Object.keys(tree).length;
  const values = Object.values(tree);
  // start value is index 0
  // initialized here because it has no children
  let nestedArr = {
    name: values[0].itemLabel,
    image: values[0].image
  };
  // recursively nests the array
  // i + 1 to account for initial value of nestedArr
  for (let i = 1; i < index; i += 1) {
    if (i === index) {
      const next = { name: values[i].itemLabel, image: values[i].image, children: [nestedArr] };
      nestedArr = next;
    }
    const next = { name: values[i].itemLabel, image: values[i].image, children: [nestedArr] };
    nestedArr = next;
  }
  return nestedArr;
}

/**
 *  This function returns the object needed for D3.js.
 *
 *  This object can be JSON.stringify()'d then JSON.parsed() when needed.
 *
 * @param {Object} tree1 Final Tree for query1
 * @param {*} tree2 Final tree for query2
 * @param {*} match Common index
 * @returns D3.js compatible object
 */
export function toD3(tree1, tree2, match) {
  const result = {
    name: match.itemLabel,
    image: match.image,
    children: [nestArray(tree1), nestArray(tree2)]
  };
  return result;
}
