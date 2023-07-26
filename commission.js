// data of products
const products = [
  {
    name: "Math Games Book",
    image: "img/product1.jpg",
    description: "This is a product.",
    price: 40,
    commission: 0.1,
  },
  {
    name: "Book Additional Serious",
    image: "img/product2.jpg",
    description: "This is another product.",
    price: 24,
    commission: 0.05,
  },
  {
    name: "Tesla Book",
    image: "img/product3.jpg",
    description: "This is a third product.",
    price: 30,
    commission: 0.1,
  },
];

// for display the project in browser
const productList = document.querySelector(".product");

products.map((product) => {
  const productItem = document.createElement("div");
  productItem.classList.add("product-item");

  const productImage = document.createElement("img");
  productImage.src = product.image;
  productItem.appendChild(productImage);

  const productName = document.createElement("h1");
  productName.textContent = product.name;
  productItem.appendChild(productName);

  const productDescription = document.createElement("p");
  productDescription.textContent = product.description;
  productItem.appendChild(productDescription);

  const productPrice = document.createElement("p");
  productPrice.textContent = "$" + product.price;
  productItem.appendChild(productPrice);

  // button Add to Cart and move the aother pages
  const button = document.createElement("button");
  button.textContent = "Add to Cart";

  button.addEventListener("click", () => {
    const modal = document.querySelector("div");
    modal.classList.add("modal");
    const modalHeader = document.createElement("h2");
    modalHeader.textContent = "Product Details";
    modal.appendChild(modalHeader);

    // Show the project when on click button add to chart
    const modalBodyName = document.querySelector(".product");
    modalBodyName.textContent = product.name;
    modal.appendChild(modalBodyName);

    const modalBodyImg = document.createElement("img");
    modalBodyImg.src = product.image;
    modal.appendChild(modalBodyImg);

    const modalBodyDes = document.createElement("p");
    modalBodyDes.textContent = product.description;
    modal.appendChild(modalBodyDes);

    const modalBodyPrice = document.createElement("span");
    modalBodyPrice.textContent =
      "price = $" + product.price + "   commission = ";
    modal.appendChild(modalBodyPrice);

    const modalBodyCommission = document.createElement("span");
    modalBodyCommission.textContent = `${
      product.commission * 100
    } % the commission of the price of book is ($${Math.round(
      product.commission * product.price
    )}) `;

    modal.appendChild(modalBodyCommission);
    const modalBodyTolal = document.createElement("h1");
    modalBodyTolal.textContent = `Total = $${Number(product.price)}`;
    modal.appendChild(modalBodyTolal);
    document.body.appendChild(modal);
    modal.style.display = "block";
  });

  productItem.appendChild(button);
  productList.appendChild(productItem);
});
