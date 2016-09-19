const express = require('express');
const devServer = express();
const PORT = process.env.PORT || process.argv[2];

if(process.argv[3] === undefined) {
	console.log('provide static file directory !');
	return;
}

const static = process.argv[3];

devServer.use('/', express.static(static));

devServer.listen(PORT, () => {
	console.log('express dev server running on port %s, serving %s', PORT, static);
});