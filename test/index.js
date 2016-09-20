const assert = require('chai').assert;
const shelljs = require('shelljs');
const devServer = require('../index');

describe('express-dev-server-api', function () {
	it('start dev server', function (done) {
		shelljs.exec('node index.js 3001 src', function(code, stdout, stderr) {
			assert.equal(stdout, 'express dev server running on port 3001, serving src\n');
			done();
		});
		shelljs.exec('node index.js', function(code, stdout, stderr) {
			assert.equal(stdout, 'provide web server port !\n');
			done();
		});
		shelljs.exec('node index.js 3001', function(code, stdout, stderr) {
			assert.equal(stdout, 'provide static file directory !\n');
			done();
		});
	});
});