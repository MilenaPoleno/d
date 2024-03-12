document.addEventListener("DOMContentLoaded", function () {
    fetch("js/products.json")
      .then((response) => response.json())
      .then((products) => {
        const productsContainer = document.getElementById("products-container");
        products.forEach((product) => {
          const productElement = createProductElement(product);
          productsContainer.appendChild(productElement);
        });
      });
  });
  
  function createProductElement(product) {
    const productElement = document.createElement("div");
    productElement.classList.add("product");
  
    const productImg = document.createElement("img");
    productImg.src = product.image;
    productElement.appendChild(productImg);
  
    const productInfo = document.createElement("div");
    productInfo.classList.add("product-info");
  
    const productName = document.createElement("h2");
    productName.classList.add("product-name");
    productName.textContent = product.name;
    productInfo.appendChild(productName);
  
    const productDescription = document.createElement("p");
    productDescription.classList.add("product-description");
    productDescription.textContent = product.description;
    productInfo.appendChild(productDescription);
  
    const productPrice = document.createElement("h3");
    productPrice.classList.add("product-price");
    productPrice.textContent = `${product.price} ₽`;
    productInfo.appendChild(productPrice);
  
    const addToCartBtn = document.createElement("button");
    addToCartBtn.classList.add("add-to-cart");
    addToCartBtn.textContent = "Add to cart";
    addToCartBtn.addEventListener("click", function () {
      addToCart(product);
    });
    productInfo.appendChild(addToCartBtn);
  
    productElement.appendChild(productInfo);
    return productElement;
  }
  
  function addToCart(product) {
    // Здесь вы можете реализовать логику добавления товара в корзину.
    // Например, вы можете сохранить товар в localStorage или отправить запрос на сервер.
    console.log("Добавлен товар в корзину:", product);
  }

  function getProductsFromIndexPage() {
    const products = [];
    const addToCartButtons = document.querySelectorAll(".add-to-cart");
  
    addToCartButtons.forEach((button, index) => {
      const productName = button.parentElement.querySelector(".product-name").textContent;
      const productDescription = button.parentElement.querySelector(".product-description").textContent;
      const productPrice = button.parentElement.querySelector(".product-price").textContent;
      const productImage = button.parentElement.querySelector("img").src;
  
      products.push({
        id: index + 1,
        name: productName,
        description: productDescription,
        price: parseFloat(productPrice.replace("₽", "")),
        image: productImage,
      });
    });
  
    return products;
  }

  document.addEventListener("DOMContentLoaded", function () {
    const productsContainer = document.getElementById("products-container");
    const products = getProductsFromIndexPage();
    products.forEach((product) => {
      const productElement = createProductElement(product);
      productsContainer.appendChild(productElement);
    });
  });
  
  function getProductsFromIndexPage() {
    const products = [];
    const addToCartButtons = document.querySelectorAll(".add-to-cart");
  
    addToCartButtons.forEach((button, index) => {
      const productName = button.parentElement.querySelector(".product-name").textContent;
      const productDescription = button.parentElement.querySelector(".product-description").textContent;
      const productPrice = button.parentElement.querySelector(".product-price").textContent;
      const productImage = button.parentElement.querySelector("img").src;
      products.push({
        id: index + 1,
        name: productName,
        description: productDescription,
        price: parseFloat(productPrice.replace("₽", "")),
        image: productImage,
      });

    });

    return products;
    }
    
    function createProductElement(product) {
    const productElement = document.createElement("div");
    productElement.classList.add("product");
    
    const productImg = document.createElement("img");
    productImg.src = product.image;
    productElement.appendChild(productImg);
    
    const productInfo = document.createElement("div");
    productInfo.classList.add("product-info");
    
    const productName = document.createElement("h2");
    productName.classList.add("product-name");
    productName.textContent = product.name;
    productInfo.appendChild(productName);
    
    const productDescription = document.createElement("p");
    productDescription.classList.add("product-description");
    productDescription.textContent = product.description;
    productInfo.appendChild(productDescription);
    
    const productPrice = document.createElement("h3");
    productPrice.classList.add("product-price");
    productPrice.textContent = `${product.price} ₽`;
    productInfo.appendChild(productPrice);
    
    const addToCartBtn = document.createElement("button");
    addToCartBtn.classList.add("add-to-cart");
    addToCartBtn.textContent = "Add to cart";
    addToCartBtn.addEventListener("click", function () {
    addToCart(product);
    });
    productInfo.appendChild(addToCartBtn);
    
    productElement.appendChild(productInfo);
    return productElement;
    }
    
    function addToCart(product) {
        let cart = JSON.parse(localStorage.getItem("cart")) || [];
        cart.push(product);
        localStorage.setItem("cart", JSON.stringify(cart));
        console.log("Добавлен товар в корзину:", product);
      }
    
      addToCartBtn.addEventListener("click", function () {
        addToCart(product);
      });

      function viewCart() {
        const cart = JSON.parse(localStorage.getItem("cart")) || [];
        console.log("Текущая корзина:", cart);
      }
      viewCart();