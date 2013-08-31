/* Author: Michael Lockwitz

*/
$().ready(function() {
	$("#spa_table tr:odd").addClass("odd");
	setActivePageHighlight(getCurrentPage());

	$('#coda-slider-1').codaSlider({
		autoSlide: true,
		autoSlideInterval: 4000,
		autoSlideStopWhenClicked: true,
		dynamicTabs: false
	});
	
	$("ul.sf-menu").superfish();
	
	function setActivePageHighlight(currentPage) {
		// Top nav
		$('#top_nav li').each(function() {
			if (getCurrentPage() == $(this).text()) {
				$(this).find('a').addClass('active');
			}
		});
		// Footer nav
		$('#bottom_nav li').each(function() {
			if (getCurrentPage() == $(this).text()) {
				$(this).find('a').addClass('active');
			}
		});
	}
	
	function getCurrentPage() {
		var pageTitle = document.title;
		pageTitle = pageTitle.split('-');
		currentPage = pageTitle[0];
		currentPage = jQuery.trim(currentPage);
		
		return currentPage;
	}
	
	// Submit button on contact form
	$('.submit').click(function() {
		var name = $("#frmName").val();
		var email = $("#frmEmail").val();
		var reason = $("#frmReason").val();
		var comment = $("#frmComment").val();

		var data = "frmName=" + name + "&frmEmail=" + email + "&frmReason=" + reason + "&frmComment=" + comment;

		$.ajax({
			type: "POST",
			url: "send_email",
			data: data,
			success: function(msg) {
				$('.message').html(msg);
			}
		});
	});
	
	// Clear comment on focus
	$('#frmComment').focus(function(){
		if ($(this).text()=='Comment here') {
			$(this).text('');
		}
	});
});