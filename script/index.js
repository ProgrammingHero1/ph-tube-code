console.log("index is connected");

function loadCategories() {
  // 1- fetch the data
  fetch("https://openapi.programming-hero.com/api/phero-tube/categories")
    //2 - convert promise to json
    .then((res) => res.json())
    //3 - send data to display
    .then((data) => displayCategories(data.categories));
}

function loadVideos() {
  fetch("https://openapi.programming-hero.com/api/phero-tube/videos")
    .then((response) => response.json())
    .then((data) => displayVideos(data.videos));
}

// {
//     "category_id": "1001",
//     "category": "Music"
// }
function displayCategories(categories) {
  // get the container
  const categoryContainer = document.getElementById("category-container");

  // Loop operation on Array of object
  for (let cat of categories) {
    // console.log(cat);

    // create Element
    const categoryDiv = document.createElement("div");

    categoryDiv.innerHTML = `
    <button class="btn btn-sm hover:bg-[#FF1F3D]  hover:text-white">${cat.category}</button>
    `;

    // Append the Element
    categoryContainer.append(categoryDiv);
  }
}

// {
//     "category_id": "1003",
//     "video_id": "aaak",
//     "thumbnail": "https://i.ibb.co/ZNggzdm/cake.jpg",
//     "title": "Beyond The Pale",
//     "authors": [
//         {
//             "profile_picture": "https://i.ibb.co/MZ2vbXR/jimm.jpg",
//             "profile_name": "Jim Gaffigan",
//             "verified": false
//         }
//     ],
//     "others": {
//         "views": "2.6K",
//         "posted_date": "15400"
//     },
//     "description": "'Beyond The Pale' by Jim Gaffigan, with 2.6K views, is a comedic gem that explores everyday observations and family life with a light-hearted and witty approach. Jim's humor is accessible and delightful, making this show perfect for anyone who enjoys clean, observational comedy."
// }

const displayVideos = (videos) => {
  const videoContainer = document.getElementById("video-container");

  videos.forEach((video) => {
    console.log(video);

    const videoCard = document.createElement("div");

    videoCard.innerHTML = `

    <div class="card bg-base-100  shadow-sm">
  <figure>
    <img
      src="${video.thumbnail}"
      alt="Shoes" />
  </figure>
  <div class="card-body">
    <h2 class="card-title">${video.title}</h2>
    <p>A card component has a figure, a body part, and inside body there are title and actions parts</p>
    <div class="card-actions justify-end">
      <button class="btn btn-primary">Buy Now</button>
    </div>
  </div>
</div>
    
    `;
    //append
    videoContainer.append(videoCard);
  });
};

loadCategories();
loadVideos();
