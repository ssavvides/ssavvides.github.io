

jQuery.fn.random = function() {
	var randomIndex = Math.floor(Math.random() * this.length);
	return jQuery(this[randomIndex]);
};


function loadPics() {
	var descriptions = "images/profile/descriptions.txt";
	var container = $('#profile-pic-container');

	const classes = "profile-pic img-thumbnail";
	const attributes = 'data-container="body" data-toggle="popover" data-trigger="hover" data-placement="bottom"';

	jQuery.get(descriptions, function(data, status) {
		var lines = data.split("\n");

		$.each(lines, function(n, line) {
			line = line.trim();
			if (line) {
				var parts = line.split("\t");
				var path = parts[0];
				var descr = parts[1];
				var element = `<img class="${classes}" ${attributes} src="images/profile/${path}" data-content="${descr}">`
				container.append(element);}
			});
	});
};

$(document).ready(function() {
	loadPics();
	$('.profile-pic').random().show();
	$('[data-toggle="popover"]').popover();
});