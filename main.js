function loadPics() {
	const descriptions = "images/profile/descriptions.txt";
	const container = $('#profile-pic-container');
	const classes = "profile-pic img-thumbnail";
	const attributes = 'data-container="body" data-toggle="popover" data-trigger="hover" data-placement="bottom"';

	return jQuery.get(descriptions, function(data, status) {
		const lines = data.split("\n");
		let line = "";
		while(!line) {
			let randomIndex = Math.floor(Math.random() * lines.length);
			line = lines[randomIndex].trim();
		}
		const [path, descr] = line.split("\t");
		const element = `<img class="${classes}" ${attributes} src="images/profile/${path}" data-content="${descr}">`
		container.append(element);
	});
};

$(document).ready(function() {
	loadPics().done(function() { $('[data-toggle="popover"]').popover() });
});