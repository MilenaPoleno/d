document.addEventListener("DOMContentLoaded", function() {
    const catalogContainer = document.getElementById('catalog-content');

    // Получаем содержимое товаров из index.html
    const productsContainer = document.querySelector('.products-container');
    const productsHTML = productsContainer.innerHTML;

    // Вставляем полученное содержимое в каталог
    catalogContainer.innerHTML = productsHTML;

    // Находим все кнопки "Добавить в корзину"
    const addToCartButtons = document.querySelectorAll('.add-to-cart-btn');

    // Добавляем обработчик клика на каждую кнопку
    addToCartButtons.forEach(button => {
        button.addEventListener("click", addToCart);
    });

    function addToCart(event) {
        const button = event.target;
        const product = button.parentElement;
        const productId = product.getAttribute('data-id');
        let cart = JSON.parse(localStorage.getItem("cart")) || [];
        cart.push(productId);
        localStorage.setItem("cart", JSON.stringify(cart));
        updateCartCounter();
        showAddedToCartMessage();
    }

    function updateCartCounter() {
        const cartItems = JSON.parse(localStorage.getItem('cart')) || [];
        const cartCounter = document.getElementById('cart-count');
        cartCounter.textContent = cartItems.length;
    }

    function showAddedToCartMessage() {
        const messageContainer = document.getElementById('added-to-cart-message');
        messageContainer.style.display = 'block';
        setTimeout(() => {
            messageContainer.style.display = 'none';
        }, 3000); // Скрыть сообщение через 3 секунды
    }
});
