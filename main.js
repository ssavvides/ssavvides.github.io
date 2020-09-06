function loadPics() {
	var descriptions = "images/profile/descriptions.txt";
	var container = $('#profile-pic-container');

	const classes = "profile-pic img-thumbnail";
	const attributes = 'data-container="body" data-toggle="popover" data-trigger="hover" data-placement="bottom"';

	//jQuery.get(descriptions, function(data, status) {
		//var lines = data.split("\n");

		var lines = `2017/socc.jpg	At SoCC'17, Santa Clara, CA, USA, Sep 2017
2018/socc.jpg	At SoCC\'18, Carlsbad, CA, USA, Oct 2018
2020/lembert-dome.jpg	On top of Lembert Dome, Yosemite Park, CA, USA, Aug 2020
2020/vernal-falls.jpg	At Vernal Falls, Yosemite Park, CA, USA, Aug 2020`.split("\n");



		var randomIndex = Math.floor(Math.random() * lines.length);

		$.each(lines, function(n, line) {
			line = line.trim();
			if (randomIndex === n) {
				var parts = line.split("\t");
				var path = parts[0];
				var descr = parts[1];
				var element = `<img class="${classes}" ${attributes} src="images/profile/${path}" data-content="${descr}">`
				container.append(element);
			}
		});
	//});
};

$(document).ready(function() {
	loadPics();
	$('[data-toggle="popover"]').popover();
});