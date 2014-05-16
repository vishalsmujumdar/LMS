// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or vendor/assets/javascripts of plugins, if any, can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file.
//
// Read Sprockets README (https://github.com/sstephenson/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require jquery
//= require jquery_ujs
//= require_tree .
var previousPageURL = document.referrer;

$(document).ready(function(){
	$('#default-banner #site-title').css("visibility","hidden");			
	$('#default-banner #site-title').hide();

	$('.signin').click(function(){
		$('.login-box').css('visibility','visible');
		$('.login-box').addClass('show');
		$('.arrow-up').css('visibility','visible');
		$('.arrow-up').addClass('show');
	});

	$('.modal-close').click(function(){
	  	var divToClose = $(this).parent().parent();
      	console.log(divToClose);
      	divToClose.css("visibility","hidden");
      	divToClose.removeClass('in');
      	divToClose.removeClass('show');
      	if(divToClose.hasClass('login-box')){
      		anotherDivToClose = divToClose.prev();
	      	anotherDivToClose.css("visibility","hidden");
	      	anotherDivToClose.removeClass('in');
	      	anotherDivToClose.removeClass('show');      		
      	}

	});

	$('.showBookSearch').click(function(){
		$('#book_select').slideToggle("fast");
	});

	$('#searchBookData').keyup(function(event){
		var searchTerm = $(this).val();
		
		if(event.keyCode != 27)
		{
			if(searchTerm !== '') {
				var url = '/books/ajaxsearchbooks';
				var searchdata = { 'searchterm' : searchTerm };
				
				$.ajax({
					url: url,
					type: "POST",
					dataType:'html',
					data: searchdata,
					success: function(data){
						$('#bookSearchResults').css('visibility','visible');
						//$('.book-search-results-content').css('visibility','visible');
						$('.book-search-results-content').empty();
						$('.book-search-results-content').append(data);
					}
				});
			}
			else
			{
				$('.book-search-results-content').empty();
				//$('.book-search-results-content').css('visibility','hidden');
				$('#bookSearchResults').css('visibility','hidden');
			}
		}
	});

	

	$("#main-container .serial-number[title]").tooltips();
	

//	setTimeout(function(){
 // window.location.reload(1);
//}, 5000);

});

$(window).keyup(function(event){
	if(event.keyCode == 27)
	{
		if(!$('.book-search-results-content').is('hidden'))
		{
			$('.book-search-results-content').empty();
			$('.book-search-results-content').css('visibility','hidden');
		}
	}
});

$(window).scroll(function(){
	var top = $(window).scrollTop();
	if(top >= 56)
	{
		$('.default-banner-wrapper').addClass('fixed');
		$('#default-banner #site-title').css("visibility","visible");
		$('#default-banner #site-title').show("slow");
	}
	else if (top < 56)
	{
		$('.default-banner-wrapper').removeClass('fixed');	
		$('#default-banner #site-title').css("visibility","hidden");			
		$('#default-banner #site-title').hide();
	}
});

function Randomize() {
	var images = new Array('1.jpg',
						   '2.jpg',
						   '3.jpg',
						   '7.jpg',
						   '8.jpg',
						   '9.jpg',
						   '10.jpg',
						   '11.jpg',
						   '12.jpg',
						   '13.jpg',
						   '14.jpg'
						   );
	var imageNum = Math.floor(Math.random() * images.length);
	document.getElementById("banner").style.background = "asset-data-url('" + images[imageNum] + "')";
}

window.onload = Randomize;