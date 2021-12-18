function windowActions() {
  const inputForm = document.querySelector('#form');


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

  
  async function test(e) {
    e.preventDefault();
    console.log(e);
    const formObject = formToObject(inputForm);
    console.log(formObject);
  // e.target.parentnode.classList.toggle('is-active');
  await fetch('https://group4-final-inst377fa2021.herokuapp.com/api/reviews', {
    method:'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(formObject)
  }
  )
  }

  inputForm.addEventListener('submit', test);
}

window.onload = windowActions;

hotelReviews = [];

const loadReviews = async () => {
  try {
    const res = await fetch("https://group4-final-inst377fa2021.herokuapp.com/api/reviews");
    hotelReviews = await res.json();
    console.log(hotelReviews);
    displayReviews(hotelReviews);
  } catch (err) {
    console.error(err);
  }}

  const displayReviews = (reviews) => {
    const htmlString = reviews
    .map((review) =>`
                <div class = "box has-background-light">
                <li class="review_container" style="list-style-type: none">
                <ul style = "font-size:25px"><strong>${review.hotel_name}</strong></ul>
                <ul>${review.review_text}</ul>
                </li>
                </div>
                `)
                .join('');
  reviewList.innerHTML = htmlString;
};

loadReviews();