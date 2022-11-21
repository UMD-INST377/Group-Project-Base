import fetch from 'node-fetch';

async function dataYear(year, info) {
  // info can be organization, type_cleanup, type_litter, number_bags
  // total_bags_litter, altbmp_type, impl_comp_yr, permit_num, fiscalyear
  // creationdate, latitude, longitutde, geocoded_column
  const url = 'https://data.princegeorgescountymd.gov/resource/9tsa-iner.json?impl_comp_yr=';
  let obj;
  const res = await fetch(url + year);
  obj = await res.json();
  for (let i = 0; i < obj.length; i++) {
    console.log(obj[i][info]);
  }
}

dataYear(2022, 'organization');