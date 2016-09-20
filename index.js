const express = require('express');
const devServer = express();

if(process.argv[2] === undefined) {
	console.log('provide web server port !');
	return;
}

if(process.argv[3] === undefined) {
	console.log('provide static file directory !');
	return;
}

const PORT = process.env.PORT || process.argv[2];
const static = process.argv[3];

devServer.use('/', express.static(static));

devServer.listen(PORT, () => {
	console.log('express dev server running on port %s, serving %s', PORT, static);
});