

jQuery.fn.random = function() {
	var randomIndex = Math.floor(Math.random() * this.length);
	return jQuery(this[randomIndex]);
};


function loadPics() {
	var descriptions = "images/profile/descriptions.txt";
	jQuery.get(descriptions, function(data, status) {
		alert(status);
		var lines = data.split("\n")

		$.each(lines, function(n, line) {
			alert(line);
		});
});
};

$(document).ready(function() {
	loadPics();

	$('#profile-pic-container').append('<img class="profile-pic img-thumbnail" data-container="body" data-toggle="popover" data-trigger="hover" data-placement="bottom" src="images/profile/2018/socc.jpg" data-content="At SoCC\'18, Carlsbad, CA, USA, Oct 2018">')
	$('.profile-pic').random().show();
	$('[data-toggle="popover"]').popover();
});