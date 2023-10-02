const products = [
  {
    imgSrc: "img/shop/1.jpg",
    productName: "Sport Boots",
    productPrice: "Rs. 5000",
    productRating: 5,
  },
  {
    imgSrc: "img/shop/2.jpg",
    productName: "Running Shoes",
    productPrice: "Rs. 4500",
    productRating: 4,
  },
  {
    imgSrc: "img/shop/3.jpg",
    productName: "Running Shoes",
    productPrice: "Rs. 4500",
    productRating: 4,
  },
  {
    imgSrc: "img/shop/4.jpg",
    productName: "Running Shoes",
    productPrice: "Rs. 4500",
    productRating: 4,
  },
  {
    imgSrc: "img/shop/5.jpg",
    productName: "Running Shoes",
    productPrice: "Rs. 4500",
    productRating: 4,
  },
  {
    imgSrc: "img/shop/6.jpg",
    productName: "Running Shoes",
    productPrice: "Rs. 4500",
    productRating: 4,
  },
  {
    imgSrc: "img/shop/7.jpg",
    productName: "Running Shoes",
    productPrice: "Rs. 4500",
    productRating: 4,
  },
  {
    imgSrc: "img/shop/8.jpg",
    productName: "Running Shoes",
    productPrice: "Rs. 4500",
    productRating: 4,
  },
  {
    imgSrc: "img/shop/9.jpg",
    productName: "Running Shoes",
    productPrice: "Rs. 4500",
    productRating: 4,
  },
  {
    imgSrc: "img/shop/10.jpg",
    productName: "Running Shoes",
    productPrice: "Rs. 4500",
    productRating: 4,
  },
  {
    imgSrc: "img/shop/11.jpg",
    productName: "Running Shoes",
    productPrice: "Rs. 4500",
    productRating: 4,
  },
  {
    imgSrc: "img/shop/12.jpg",
    productName: "Running Shoes",
    productPrice: "Rs. 4500",
    productRating: 4,
  },
  {
    imgSrc: "img/shop/13.jpg",
    productName: "Running Shoes",
    productPrice: "Rs. 4500",
    productRating: 4,
  },
  {
    imgSrc: "img/shop/14.jpg",
    productName: "Running Shoes",
    productPrice: "Rs. 4500",
    productRating: 4,
  },
  {
    imgSrc: "img/shop/15.jpg",
    productName: "Running Shoes",
    productPrice: "Rs. 4500",
    productRating: 4,
  },
  {
    imgSrc: "img/shop/16.jpg",
    productName: "Running Shoes",
    productPrice: "Rs. 4500",
    productRating: 4,
  },
  {
    imgSrc: "img/shop/17.jpg",
    productName: "Running Shoes",
    productPrice: "Rs. 4500",
    productRating: 4,
  },
  {
    imgSrc: "img/shop/18.jpg",
    productName: "Running Shoes",
    productPrice: "Rs. 4500",
    productRating: 4,
  },
  {
    imgSrc: "img/shop/19.jpg",
    productName: "Running Shoes",
    productPrice: "Rs. 4500",
    productRating: 4,
  },
  {
    imgSrc: "img/shop/20.jpg",
    productName: "Running Shoes",
    productPrice: "Rs. 4500",
    productRating: 4,
  },
  {
    imgSrc: "img/shop/21.jpg",
    productName: "Running Shoes",
    productPrice: "Rs. 4500",
    productRating: 4,
  },
  {
    imgSrc: "img/shop/22.jpg",
    productName: "Running Shoes",
    productPrice: "Rs. 4500",
    productRating: 4,
  },
  {
    imgSrc: "img/shop/23.jpg",
    productName: "Running Shoes",
    productPrice: "Rs. 4500",
    productRating: 4,
  },
  {
    imgSrc: "img/shop/24.jpg",
    productName: "Running Shoes",
    productPrice: "Rs. 4500",
    productRating: 4,
  },
];

function generateProductCards() {
  const productContainer = document.getElementById("product-container");

  products.forEach((product) => {
    const productCard = document.createElement("div");
    productCard.classList.add(
      "product",
      "text-center",
      "col-lg-3",
      "col-md-4",
      "col-12"
    );

    const productImage = document.createElement("img");
    productImage.classList.add("img-fluid", "mb-3");
    productImage.src = product.imgSrc;
    productImage.alt = "";

    const starRating = document.createElement("div");
    starRating.classList.add("star");
    for (let i = 0; i < product.productRating; i++) {
      const starIcon = document.createElement("i");
      starIcon.classList.add("fas", "fa-star");
      starRating.appendChild(starIcon);
    }

    const productName = document.createElement("h5");
    productName.classList.add("p-name");
    productName.textContent = product.productName;

    const productPrice = document.createElement("h4");
    productPrice.classList.add("p-price");
    productPrice.textContent = product.productPrice;

    const buyButton = document.createElement("button");
    buyButton.classList.add("buy-btn");
    buyButton.textContent = "Buy Now";

    productCard.onclick = function () {
      window.location.href = "product.html";
    };

    productCard.appendChild(productImage);
    productCard.appendChild(starRating);
    productCard.appendChild(productName);
    productCard.appendChild(productPrice);
    productCard.appendChild(buyButton);

    productContainer.appendChild(productCard);
  });
}

generateProductCards();
