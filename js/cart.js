document.addEventListener("DOMContentLoaded", function() {
    const addToCartButtons = document.querySelectorAll('.add-to-cart-btn');
    const cartCounter = document.getElementById('cart-count');

    addToCartButtons.forEach(button => {
        button.addEventListener("click", addToCart);
    });

    renderCartItems();

    function addToCart(event) {
        const button = event.target;
        const productId = button.getAttribute('data-id');
        let cart = JSON.parse(localStorage.getItem("cart")) || [];
        cart.push(productId);
        localStorage.setItem("cart", JSON.stringify(cart));
        updateCartCounter();
        showAddedToCartMessage();
    }

    function updateCartCounter() {
        const cartItems = JSON.parse(localStorage.getItem('cart')) || [];
        const cartItemsCount = cartItems.length;
        cartCounter.textContent = cartItemsCount;
    }

    function renderCartItems() {
        const cartItemsContainer = document.querySelector('.products-container');
        cartItemsContainer.innerHTML = '';
        const productsInCart = JSON.parse(localStorage.getItem('products')) || [];
    
        productsInCart.forEach(productId => {
            const product = document.getElementById(productId);
            if (product) {
                const cartItem = product.cloneNode(true);
                cartItem.classList.add('cart-item');
                cartItemsContainer.appendChild(cartItem);
            }
        });
    
        updateTotalPrice();
    }
    

    function updateTotalPrice() {
        const items = document.querySelectorAll(".cart-item");
        let totalPrice = 0;
        items.forEach(item => {
            const price = parseInt(item.querySelector(".price span").textContent, 10);
            const quantity = parseInt(item.querySelector(".quantity").value, 10);
            totalPrice += price * quantity;
        });
        document.getElementById("total-price").textContent = totalPrice;
    }

    function showAddedToCartMessage() {
        const messageContainer = document.getElementById('added-to-cart-message');
        messageContainer.style.display = 'block';
        setTimeout(() => {
            messageContainer.style.display = 'none';
        }, 3000);
    }
});

function decreaseQuantity(button) {
    const quantityInput = button.parentElement.querySelector('.quantity');
    quantityInput.value = parseInt(quantityInput.value) - 1;
    updateTotalPrice();
}

function increaseQuantity(button) {
    const quantityInput = button.parentElement.querySelector('.quantity');
    quantityInput.value = parseInt(quantityInput.value) + 1;
    updateTotalPrice();
}

function removeItem(button) {
    const item = button.parentElement.parentElement;
    const itemId = item.getAttribute("data-id");
    let productsInCart = JSON.parse(localStorage.getItem('products')) || [];
    productsInCart = productsInCart.filter(product => product.id !== itemId);
    localStorage.setItem('products', JSON.stringify(productsInCart));
    renderCartItems();
}
