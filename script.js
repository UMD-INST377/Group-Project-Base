async function mainEvent() {
  const options = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": "5dc02365d4mshd9eff5d73eae486p1c6bb0jsnd676be7e93c5",
      "X-RapidAPI-Host": "api-nba-v1.p.rapidapi.com",
    },
  };
  const dataGet = await fetch(
    "https://api-nba-v1.p.rapidapi.com/players?team=41&season=2021",
    options
  );
  const arrayFromJson = await dataGet.json();
  const response_object = arrayFromJson["response"];
  console.log(response_object);
  weight1 = notNull(response_object);
  console.log(weight1)
}

function notNull(array) {
  return array.map((item) => {
    if (item.weight.pounds !== null) {
      return item.weight.pounds;
    }
  });
}
document.addEventListener("DOMContentLoaded", async () => mainEvent());
