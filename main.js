function loadPics() {
	// choose a non-empty random line
	var line = "";
	const descriptions = "images/profile/descriptions.txt";
	jQuery.get(descriptions, function(data, status) {
		var lines = data.split("\n");
		while(!line) {
			let randomIndex = Math.floor(Math.random() * lines.length);
			line = lines[randomIndex].trim();
		}
		alert(line);
	});

	const container = $('#profile-pic-container');
	const classes = "profile-pic img-thumbnail";
	const attributes = 'data-container="body" data-toggle="popover" data-trigger="hover" data-placement="bottom"';

	alert(line);
	let [path, descr] = line.split("\t");
	alert(path);
	const element = `<img class="${classes}" ${attributes} src="images/profile/${path}" data-content="${descr}">`
	container.append(element);
};

$(document).ready(function() {
	loadPics();
	$('[data-toggle="popover"]').popover();
});