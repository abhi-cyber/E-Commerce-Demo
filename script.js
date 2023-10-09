const products = [
  {
    imgSrc: "img/shop/1.jpg",
    productName: "Cotton T-Shirt",
    productPrice: "Rs. 2000",
    productRating: 4,
    productDescription:
      "Comfortable and stylish Cotton T-Shirt for everyday wear.",
  },
  {
    imgSrc: "img/shop/2.jpg",
    productName: "Running Shoes",
    productPrice: "Rs. 4500",
    productRating: 4,
    productDescription:
      "Enhance your running experience with these top-quality Running Shoes.",
  },
  {
    imgSrc: "img/shop/3.jpg",
    productName: "Lounge Bag",
    productPrice: "Rs. 5000",
    productRating: 5,
    productDescription:
      "Carry your essentials in style with this elegant Lounge Bag.",
  },
  {
    imgSrc: "img/shop/4.jpg",
    productName: "Canvas Shoes",
    productPrice: "Rs. 6000",
    productRating: 4,
    productDescription: "Step out in fashion with these trendy Canvas Shoes.",
  },
  {
    imgSrc: "img/shop/5.jpg",
    productName: "Cap",
    productPrice: "Rs. 250",
    productRating: 4,
    productDescription: "Complete your look with this classic Cap accessory.",
  },
  {
    imgSrc: "img/shop/6.jpg",
    productName: "Women's Coat",
    productPrice: "Rs. 7000",
    productRating: 4,
    productDescription: "Stay warm and fashionable with this Women's Coat.",
  },
  {
    imgSrc: "img/shop/7.jpg",
    productName: "Sneaker Shoes",
    productPrice: "Rs. 3000",
    productRating: 4,
    productDescription:
      "Upgrade your footwear collection with these stylish Sneaker Shoes.",
  },
  {
    imgSrc: "img/shop/8.jpg",
    productName: "Men's Jacket",
    productPrice: "Rs. 8000",
    productRating: 4,
    productDescription:
      "Make a statement with this Men's Jacket, perfect for any occasion.",
  },
  {
    imgSrc: "img/shop/9.jpg",
    productName: "Sling Bag",
    productPrice: "Rs. 2500",
    productRating: 4,
    productDescription: "Carry your essentials with ease using this Sling Bag.",
  },
  {
    imgSrc: "img/shop/10.jpg",
    productName: "Citizen Watch",
    productPrice: "Rs. 2500",
    productRating: 4,
    productDescription: "Add a touch of sophistication with the Citizen Watch.",
  },
  {
    imgSrc: "img/shop/11.jpg",
    productName: "Hat",
    productPrice: "Rs. 800",
    productRating: 4,
    productDescription:
      "Top off your outfit with this versatile Hat accessory.",
  },
  {
    imgSrc: "img/shop/12.jpg",
    productName: "Sneaker's",
    productPrice: "Rs. 4000",
    productRating: 4,
    productDescription: "Elevate your style with these trendy Sneakers.",
  },
  {
    imgSrc: "img/shop/13.jpg",
    productName: "Casio Watch",
    productPrice: "Rs. 3500",
    productRating: 4,
    productDescription: "Keep time in style with the Casio Watch.",
  },
  {
    imgSrc: "img/shop/14.jpg",
    productName: "High Ankle Shoes",
    productPrice: "Rs. 4500",
    productRating: 4,
    productDescription: "Step up your shoe game with these High Ankle Shoes.",
  },
  {
    imgSrc: "img/shop/15.jpg",
    productName: "Cap",
    productPrice: "Rs. 450",
    productRating: 4,
    productDescription: "Stay cool and stylish with this Cap.",
  },
  {
    imgSrc: "img/shop/16.jpg",
    productName: "Crew shirt",
    productPrice: "Rs. 999",
    productRating: 4,
    productDescription: "Stay comfortable and casual with this Crew shirt.",
  },
  {
    imgSrc: "img/shop/17.jpg",
    productName: "FUNKY JACKET",
    productPrice: "Rs. 2999",
    productRating: 4,
    productDescription: "Make a bold statement with this FUNKY JACKET.",
  },
  {
    imgSrc: "img/shop/18.jpg",
    productName: "YELLOW CAP",
    productPrice: "Rs. 450",
    productRating: 4,
    productDescription:
      "Add a pop of color to your outfit with the YELLOW CAP.",
  },
  {
    imgSrc: "img/shop/19.jpg",
    productName: "Hoodie",
    productPrice: "Rs. 1999",
    productRating: 4,
    productDescription: "Stay cozy and fashionable with this Hoodie.",
  },
  {
    imgSrc: "img/shop/20.jpg",
    productName: "Orange summer combo",
    productPrice: "Rs. 3999",
    productRating: 4,
    productDescription: "Get ready for summer with the Orange summer combo.",
  },
  {
    imgSrc: "img/shop/21.jpg",
    productName: "Cardigan",
    productPrice: "Rs. 2300",
    productRating: 4,
    productDescription: "Stay warm and stylish with this Cardigan.",
  },
  {
    imgSrc: "img/shop/22.jpg",
    productName: "Blue bag",
    productPrice: "Rs. 4500",
    productRating: 4,
    productDescription: "Carry your essentials in style with this Blue bag.",
  },
  {
    imgSrc: "img/shop/23.jpg",
    productName: "Green shirt",
    productPrice: "Rs. 499",
    productRating: 4,
    productDescription:
      "Add a splash of color to your wardrobe with this Green shirt.",
  },
  {
    imgSrc: "img/shop/24.jpg",
    productName: "White t-shirt",
    productPrice: "Rs. 500",
    productRating: 4,
    productDescription: "A classic White t-shirt for a timeless look.",
  },
];

document.addEventListener("DOMContentLoaded", function () {
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
        const url = `product.html?imgSrc=${product.imgSrc}&productName=${
          product.productName
        }&productPrice=${product.productPrice}&productRating=${
          product.productRating
        }&productDescription=${encodeURIComponent(product.productDescription)}`;
        window.location.href = url;
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
});
