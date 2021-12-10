async function windowActions() {
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

  document.getElementsByClassName("deleteUserForm")[0].addEventListener("submit", function(event){
    event.preventDefault();
    let request  = new XMLHttpRequest();
    request.open("DELETE", "../api/nba-players", true); //async call
    request.setRequestHeader("content-type","application/json");
      request.send(JSON.stringify({"player_name" : document.getElementById("player_name").value}));
    request.onload = function(event){
      let resp = request.responseText;
      alert(resp);
    }
  });

  const button = document.querySelector('#submit');

}
window.onload = windowActions;
