const reviews = [];

const form = document.querySelector('form');
const reviewsList = document.getElementById('reviews-list');

form.addEventListener('submit', (event) => {
  event.preventDefault();

  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  const review = document.getElementById('review').value;

  const newReview = { name, email, review };
  reviews.push(newReview);

  const li = document.createElement('li');
  const h3 = document.createElement('h3');
  const p = document.createElement('p');

  h3.textContent = newReview.name;
  p.textContent = newReview.review;

  li.appendChild(h3);
  li.appendChild(p);
  reviewsList.appendChild(li);

  form.reset();
});
