// Multi-Toggle Navigation
$(function() {
	$('body').addClass('js');
		var	$menu = $('#menu'),
			$menulink = $('.menu-link'),
			$menuTrigger = $('.has-subnav');

	$menulink.click(function(e) {
		e.preventDefault();
		$menulink.toggleClass('active');
		$menulink.find('i.fa').hasClass('fa-bars') ? $menulink.find('i.fa').removeClass('fa-bars').addClass('fa-close') : $menulink.find('i.fa').removeClass('fa-close').addClass('fa-bars');
		$menu.toggleClass('active');
	});

	$menuTrigger.click(function(e) {
		e.preventDefault();
		var $this = $(this);
		$this.toggleClass('active').next('ul').toggleClass('active');	
		$this.children('i.fa').toggleClass('rotate');
	});

});

// Remove "Active" Class from Menu on Resize
$(window).resize(function() {
	var viewportWidth = $(window).width();
		if (viewportWidth > 1000) {
			$("#menu").removeClass("active");
			$('.menu-link').find('i.fa').removeClass('fa-close').addClass('fa-bars');
		}
});
//Sticky header when scroll down
window.onscroll = function() {myFunction()};

var header = document.getElementById('heading');
var sticky = header.offsetTop;
  	console.log(header);
function myFunction() {
  if (window.pageYOffset > sticky) {


    header.classList.add("sticky");
  } else {
    header.classList.remove("sticky");
  }
}
