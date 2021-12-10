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

