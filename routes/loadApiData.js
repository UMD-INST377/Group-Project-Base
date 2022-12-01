/* eslint-disable max-len */
/* eslint-disable import/prefer-default-export */
/* eslint linebreak-style: ["error", "windows"] */

import fetch from 'node-fetch';

export async function createArray(year) {
  const dataList = [];
  try {
    const url = 'https://data.princegeorgescountymd.gov/resource/9tsa-iner.json?impl_comp_yr=';
    // let obj;
    const res = await fetch(url + year);
    const obj = await res.json();
    for (let i = 0; i < obj.length; i++) {
      dataList.push(obj[i]);
    }
    return dataList;
  } catch (err) {
    console.log('Data request failed', err);
    res.json({message: 'Data request failed', error: err});
  }
}

  const test = await(createArray(2022))
  console.log(test)
  // test.forEach((x, i) => console.log(x['latitude'] + ' ' + x['longitude']))

export async function dataYear(year, info) {
  // info can be organization, type_cleanup, type_litter, number_bags
  // total_bags_litter, altbmp_type, impl_comp_yr, permit_num, fiscalyear
  // creationdate, latitude, longitutde, geocoded_column
  try {
    const url = 'https://data.princegeorgescountymd.gov/resource/9tsa-iner.json?impl_comp_yr=';
    // let obj;
    const res = await fetch(url + year);
    const obj = await res.json();
    for (let i = 0; i < obj.length; i++) {
      console.log(obj[i][info]);
    }
  } catch (err) {
    console.log('Data request failed', err);
    res.json({message: 'Data request failed', error: err});
  }
}

// dataYear(2022, 'organization'); // test to see if function works