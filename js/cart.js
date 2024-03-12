// Глобальные переменные
const cartContainer = document.getElementById("cart-container");
const cartIcon = document.getElementById("cart-icon");
const cartContent = document.getElementById("cart-content");
const cartItems = document.getElementById("cart-items");
const cartCount = document.getElementById("cart-count");
const cartTotalAmount = document.getElementById("cart-total-amount");
const cartCheckoutButton = document.getElementById("cart-checkout-button");
// Инициализация корзины
const cartCheckout = document.getElementById("cart-checkout");

// Открытие корзины
function openCart() {
  cartContainer.style.display = "block";
}

// Закрытие корзины
function closeCart() {
  cartContainer.style.display = "none";
}

// Добавление товара в корзину
function addToCart(product) {
  // Получение данных о товаре
  const name = product.querySelector(".product-name").textContent;
  const price = product.querySelector(".product-price").textContent;

  // Создание элемента корзины
  const cartItem = document.createElement("div");
  cartItem.classList.add("cart-item");
  cartItem.innerHTML = `
    <div class="cart-item-name">${name}</div>
    <div class="cart-item-price">${price}</div>
    <div class="cart-item-remove">X</div>
  `;

  // Добавление элемента в корзину
  cartItems.appendChild(cartItem);

  // Обновление итоговой суммы
  updateCartTotal();
}

// Удаление товара из корзины
function removeFromCart(cartItem) {
  // Удаление элемента из корзины
  cartItems.removeChild(cartItem);

  // Обновление итоговой суммы
  updateCartTotal();
}

// Обновление итоговой суммы
function updateCartTotal() {
  // Получение всех элементов корзины
  const cartItems = document.querySelectorAll(".cart-item");

  // Расчет итоговой суммы
  let total = 0;
  cartItems.forEach((cartItem) => {
    const price = cartItem.querySelector(".cart-item-price").textContent;
    total += parseInt(price);
  });

  // Обновление итоговой суммы
  cartTotal.textContent = `Итого: ${total} руб.`;
}

// Оформление заказа
function checkout() {
  // Получение данных о заказе
  const cartItems = document.querySelectorAll(".cart-item");
  const order = [];
  cartItems.forEach((cartItem) => {
    const name = cartItem.querySelector(".cart-item-name").textContent;
    const price = cartItem.querySelector(".cart-item-price").textContent;
    order.push({ name, price });
  });

  // Отправка данных о заказе на сервер
  // ...

  // Очистка корзины
  cartItems.forEach((cartItem) => {
    cartItems.removeChild(cartItem);
  });

  // Обновление итоговой суммы
  updateCartTotal();

  // Закрытие корзины
  closeCart();

  // Вывод сообщения об успешном оформлении заказа
  alert("Ваш заказ успешно оформлен!");
}

// Обработчики событий
cartClose.addEventListener("click", closeCart);
cartCheckout.addEventListener("click", checkout);

// Массив для хранения элементов корзины
let cart = [];

// Функция для добавления товара в корзину
function addToCart(product) {
  // Проверка, есть ли товар уже в корзине
  const existingItem = cart.find(item => item.id === product.id);
  if (existingItem) {
    // Если товар уже в корзине, увеличиваем его количество
    existingItem.quantity++;
  } else {
    // Если товара нет в корзине, добавляем его
    cart.push({
      id: product.id,
      name: product.name,
      price: product.price,
      quantity: 1
    });
  }

  // Обновление интерфейса корзины
  updateCartUI();
}

// Функция для обновления интерфейса корзины
function updateCartUI() {
  // Очистка списка товаров
  cartItems.innerHTML = "";

  // Перебор товаров в корзине
  cart.forEach(item => {
    // Создание элемента списка
    const li = document.createElement("li");

    // Создание изображения товара
    const img = document.createElement("img");
    img.src = item.image;

    // Создание названия товара
    const p = document.createElement("p");
    p.textContent = item.name;

    // Создание количества товара
    const quantity = document.createElement("span");
    quantity.textContent = `x${item.quantity}`;

    // Создание цены товара
    const price = document.createElement("span");
    price.textContent = `$${item.price}`;

    // Добавление элементов в список
    li.appendChild(img);
    li.appendChild(p);
    li.appendChild(quantity);
    li.appendChild(price);

    // Добавление элемента в список товаров
    cartItems.appendChild(li);
  });

  // Обновление количества товаров в корзине
  cartCount.textContent = cart.length;

  // Обновление общей суммы заказа
  let totalAmount = 0;
  cart.forEach(item => {
    totalAmount += item.price * item.quantity;
  });
  cartTotalAmount.textContent = `$${totalAmount}`;

  // Отображение содержимого корзины
  cartContent.style.display = "block";
}

// Функция для скрытия содержимого корзины
function hideCartContent() {
  cartContent.style.display = "none";
}

// Обработчик событий для открытия корзины
cartIcon.addEventListener("click", () => {
  cartContainer.classList.toggle("active");
});

// Обработчик событий для закрытия корзины
window.addEventListener("click", (e) => {
  if (!e.target.closest("#cart-container")) {
    cartContainer.classList.remove("active");
  }
});

// Обработчик событий для оформления заказа
cartCheckoutButton.addEventListener("click", () => {
  alert("Ваш заказ оформлен!");
});

// Инициализация корзины
const products = [
  {
    id: 1,
    name: "Product 1",
    price: 10,
    image: "images/product-1.jpg"
  },
  {
    id: 2,
    name: "Product 2",
    price: 15,
    image: "images/product-2.jpg"
  },
  {
    id: 3,
    name: "Product 3",
    price: 20,
    image: "images/product-3.jpg"
  }
];

// Добавление товаров в корзину при загрузке страницы
products.forEach(product => {
  addToCart(product);
});



$(document).ready(function() {
    // инициализация корзины
    $('.cart-button').on('click', function() {
        // код для добавления товара в корзину
    });

    // код для обновления корзины на странице
});

$('.add-to-cart').click(function() {
    // Добавление продукта в корзину
    alert('В корзине');
});

let counter = 0;

document.querySelector('.add-to-cart').addEventListener('click', function(e) {
  e.preventDefault();
  counter++;
  document.querySelector('.counter').innerHTML = counter;

  // Добавление товара в корзину
  let cart = document.querySelector('.cart');
  let newItem = document.createElement('div');
  newItem.textContent = 'Новый товар';
  cart.appendChild(newItem);
});

function updateCartCounter() {
	const cartCounter = document.querySelector('.cart-counter');
	const cartItems = JSON.parse(localStorage.getItem('cartItems')) || [];
	const cartItemsCount = cartItems.length;
  
	if (cartItemsCount > 0) {
	  cartCounter.classList.add('show-counter');
	  cartCounter.innerHTML = cartItemsCount;
	} else {
	  cartCounter.classList.remove('show-counter');
	  cartCounter.innerHTML = '';
	}
  }

  document.addEventListener('DOMContentLoaded', () => {
	const addToCartButtons = document.querySelectorAll('.add-to-cart');
	addToCartButtons.forEach(button => {
	  button.addEventListener('click', (event) => {
		event.preventDefault();
		const productId = button.dataset.productId;
		const cartItems = JSON.parse(localStorage.getItem('cartItems')) || [];
		const exists = cartItems.find(item => item.id === productId);
  
		if (exists) {
		  exists.quantity++;
		} else {
		  cartItems.push({
			id: productId,
			quantity: 1
		  });
		}
  
		localStorage.setItem('cartItems', JSON.stringify(cartItems));
		updateCartCounter();
	  });
	});
  });

  document.getElementById('goto-cart-btn').addEventListener('click', () => {
	window.location.href = 'cart.html';
  });

  function clearCart() {
	const cartItems = JSON.parse(localStorage.getItem('cartItems')) || [];
	localStorage.setItem('cartItems', JSON.stringify([]));
	updateCartCounter();
  }

  document.getElementById('clear-cart-btn').addEventListener('click', () => {
	clearCart();
	updateCartCounter();
  });

  function updateCart() {
    // Здесь вам нужно будет заменить URL на ваш
    var cartUrl = '/cart';
    fetch(cartUrl)
      .then(response => response.json())
      .then(data => {
        // Обработайте данные корзины и обновите соответствующие элементы на странице
        console.log('Корзина обновлена:', data);
      });
  }