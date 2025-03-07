console.log("index is connected");

function loadCategories() {
  // fetch the data

  fetch("https://openapi.programming-hero.com/api/phero-tube/categories")
    .then((res) => res.json())
    .then((data) => displayCategories(data.categories));
}
function displayCategories(categories) {
  console.log(categories);
}

loadCategories();
