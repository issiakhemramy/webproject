let products = {
  data: [
    {
    productName: "Fender CN-240SCE Thinline",
    category: "Classical",
    wood: "Solid Cedar and Rosewood",
    price: "399",
    image: "cn 240 sce.jpg",
  },
  {
    productName: "Manuel Rodriguez Model D",
    category: "Classical",
    wood: "Solid Canadian Cedar and Indian Rosewood",
    price: "1,099",
    image: "manuel_rodriguez_model_d_abeto_01.jpg",
  },
  {
    productName: "Cordoba FCWE Reissue",
    category: "Flamenco",
    wood: " Solid European Spruce and Cypress",
    price: "1,399",
    image: "cordoba.jpg",
  },
  {
    productName: "Alhambra 10FC",
    category: "Flamenco",
    wood: "Solid German Spruce and Cypress",
    price: "1,049",
    image: "10fc.jpg",
  },
  {
    productName: "Jcastelluccia Paris",
    category: "Jazz",
    wood: "Indian rosewood or maple ",
    price: "1,999",
    image: "Jcastelluccia.jpg",
  },
  {
    productName: "Altamira M30",
    category: "Jazz",
    wood: " Solid European Spruce and Indian Rosewood",
    price: "1,599",
    image: "Altamira.jpg",
  },
  {
    productName: "Fender Player Stratocaster",
    category: "Electric",
    wood: "Alder body with Maple neck and Pau Ferro or Maple fretboard",
    price: "699",
    image: "51E3cGZ4wSL.jpg",
  },
  {
    productName: "PRS SE Hollowbody II",
    category: "Electric",
    wood: "Mahogany back and sides with Maple top, Maple neck, and Ebony fretboard",
    price: "1,099",
    image: "prs.jpg",
  },
  {
    productName: "Gibson J-45",
    category: "Acoustic",
    wood: "Solid Sitka Spruce and Solid Mahogany",
    price: "2,999",
    image: "j45.jpg",
  },
  {
    productName: "Taylor 914ce",
    category: "Acoustic",
    wood: "Solid Sitka Spruce and Solid Indian Rosewood",
    price: "4,999",
    image: "taylor 914.jpg",
  },
],
};

for (let i of products.data) {
  //Create Card
  let card = document.createElement("div");
  //Card should have category and should stay hidden initially
  card.classList.add("card", i.category, "hide");
  //image div
  let imgContainer = document.createElement("div");
  imgContainer.classList.add("image-container");
  //img tag
  let image = document.createElement("img");
  image.setAttribute("src", i.image);
  imgContainer.appendChild(image);
  card.appendChild(imgContainer);
  //container
  let container = document.createElement("div");
  container.classList.add("container");
  //product name
  let name = document.createElement("h5");
  name.classList.add("product-name");
  name.innerText = i.productName.toUpperCase();
  container.appendChild(name);
  //price
  let price = document.createElement("h6");
  price.innerText = "$" + i.price;
  container.appendChild(price);

  card.appendChild(container);
  document.getElementById("products").appendChild(card);
}

//parameter passed from button (Parameter same as category)
function filterProduct(value) {
  //Button class code
  let buttons = document.querySelectorAll(".button-value");
  buttons.forEach((button) => {
    //check if value equals innerText
    if (value.toUpperCase() == button.innerText.toUpperCase()) {
      button.classList.add("active");
    } else {
      button.classList.remove("active");
    }
  });

  //select all cards
  let elements = document.querySelectorAll(".card");
  //loop through all cards
  elements.forEach((element) => {
    //display all cards on 'all' button click
    if (value == "all") {
      element.classList.remove("hide");
    } else {
      //Check if element contains category class
      if (element.classList.contains(value)) {
        //display element based on category
        element.classList.remove("hide");
      } else {
        //hide other elements
        element.classList.add("hide");
      }
    }
  });
}

//Search button click
document.getElementById("search").addEventListener("click", () => {
  //initializations
  let searchInput = document.getElementById("search-input").value;
  let elements = document.querySelectorAll(".product-name");
  let cards = document.querySelectorAll(".card");

  //loop through all elements
  elements.forEach((element, index) => {
    //check if text includes the search value
    if (element.innerText.includes(searchInput.toUpperCase())) {
      //display matching card
      cards[index].classList.remove("hide");
    } else {
      //hide others
      cards[index].classList.add("hide");
    }
  });
});

//Initially display all products
window.onload = () => {
  filterProduct("all");
};