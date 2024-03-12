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

function myFunction(html) {
	// Отобразить HTML на странице
	document.body.innerHTML = html;
  }
  

// Получить содержимое файла HTML
fetch('index.html')
  .then(response => response.text())
  .then(html => {
    // Передать строку HTML в функцию JavaScript
    myFunction(html);
  });

  myFunction(html);
