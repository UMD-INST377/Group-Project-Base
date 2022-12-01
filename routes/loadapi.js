import fetch from 'node-fetch'

export async function loadapi(req, res, next){
    const url = 'https://data.princegeorgescountymd.gov/resource/vkdv-rvfx.json'
    const data = await fetch(url);
    const json = await data.json();
}