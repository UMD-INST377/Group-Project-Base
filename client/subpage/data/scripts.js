// import express from 'express';
// import Sequelize from 'sequelize';
// import db from '../database/initializeDB.js';

let oldMeal;
let newMeal;

function formToObject(htmlFormElement) {
  const formItem = new FormData(htmlFormElement).entries();
  const formArray = Array.from(formItem);
  const formObject = formArray.reduce((collection, item, index) => {
    if (!collection[item[0]]) {
      collection[item[0]] = item[1];
    }
    return collection;
  }, {});
  return formObject;
}

async function mainEvent() {
  const form = document.querySelector('.main_form');
  const originalName = document.querySelector('#original_name');
  const newName = document.querySelector('#new_name');
  const submit = document.querySelector('.button');

  originalName.addEventListener('input', async (event) => {
    oldMeal = event.target.value;
    console.log(oldMeal);
  });

  newName.addEventListener('input', async (event) => {
    newMeal = event.target.value;
    console.log(event.target.value);
  });

  const database = await fetch('/chandra/allmeals');
  const allItems = await database.json();

  const arr = [];
  allItems.data.forEach((item) => {
    const {meal_name} = item;
    arr.push(meal_name);
  });
  // console.log(arr);

  form.addEventListener('submit', async (submitEvent) => {
    submitEvent.preventDefault();
    const formObj = formToObject(form);
    resultss = await fetch('/chandra/mealUpdate', {
      method: 'post',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(formObj)
    });
    const resultJson = resultss.json();
    console.log(JSON.stringify(formObj));
    // console.log(resultJson);
  });
}

document.addEventListener('DOMContentLoaded', async () => mainEvent());