import express from 'express';
import fetch from 'node-fetch';


const playerIcon_Router = 'http://ddragon.leagueoflegends.com/cdn/12.23.1/img/profileicon/';

const api_key = 'RGAPI-062e92d3-35db-4742-a98c-48230a1840e4';

function injectHTML(list){
    const target = document.querySelector('#results');
    target.innerHTML = '';
    const listEl = document.createElement('ol');
    target.appendChild(listEl);

    list.forEach((item) => {
        const el = document.createElement('li');
        el.innerText = item.name;
        listEl.appendChild(el);
    });
}
async function mainEvent(){
    const submit = document.querySelector('#sumbit');
    const form = document.querySelector('#form')
    form.addEventListener('sumbit',(SubmitEvent) => {
        SubmitEvent.preventDefault();
        const api_url = 'https://na1.api.riotgames.com/lol/summoner/v4/summoners/by-name/{summonerName}/' + playerName + '?' + api_key;
        const reponse = await fetch(api_url);
        let data = await reponse.json();
        list=
    });

    
    console.log(data)

}