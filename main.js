function loadPics() {
	const descriptions = "images/profile/descriptions.txt";
	const container = $('#profile-pic-container');
	const classes = "profile-pic img-thumbnail";
	const attributes = 'data-container="body" data-toggle="popover" data-trigger="hover" data-placement="bottom"';

	jQuery.ajax({url: descriptions, async: false, success: function (data) {
        const lines = data.split("\n");

		// choose a non-empty random line
		let line = "";
		while(!line) {
			let randomIndex = Math.floor(Math.random() * lines.length);
			line = lines[randomIndex].trim();
		}

		const [path, descr] = line.split("\t");
		const element = `<img class="${classes}" ${attributes} src="images/profile/${path}" data-content="${descr}">`
		container.append(element);
        },
    });

};

$(document).ready(function() {
	loadPics();
	$('[data-toggle="popover"]').popover();
});