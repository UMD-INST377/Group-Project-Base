// Code for year drop down list
const checkList = document.getElementById('list1');
checkList.getElementsByClassName('anchor')[0].onclick = function(evt) {
  if (checkList.classList.contains('visible')) { checkList.classList.remove('visible'); } 
  else { checkList.classList.add('visible'); }
};