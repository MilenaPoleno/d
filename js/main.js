(function (window, $) {
	'use strict';

	// Cache document for fast access.
	var document = window.document;


	$('a.toggle-menu').click(function(){
        $('ul.menu').fadeToggle("slow");
    });


    var owl = $("#owl-demo");
 
		owl.owlCarousel({
	    	items : 6
		});
	 
		// Custom Navigation Events
		$(".next").click(function(){
	    	owl.trigger('owl.next');
		})
		$(".prev").click(function(){
	    	owl.trigger('owl.prev');
		})





})(window, jQuery);

$(document).ready(function() {
    // инициализация корзины
    $('.cart-button').on('click', function() {
        // код для добавления товара в корзину
    });

    // код для обновления корзины на странице
});

$('.add-to-cart-btn').click(function() {
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
