import fetch from 'node-fetch';

export async function createArray(type) {
  const dataList = [];
  try {
    const url = 'https://data.princegeorgescountymd.gov/resource/9tsa-iner.json?type_litter';
    // let obj;
    const res = await fetch(url + type);
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

  const test = await(createArray(1))
  console.log(test)


export async function datatype(type, info) {
  try {
    const url = 'https://data.princegeorgescountymd.gov/resource/9tsa-iner.json?type_litter';
    const res = await fetch(url + type);
    const obj = await res.json();
    for (let i = 0; i < obj.length; i++) {
      console.log(obj[i][info]);
    }
  } catch (err) {
    console.log('Data request failed', err);
    res.json({message: 'Data request failed', error: err});
  }
}
