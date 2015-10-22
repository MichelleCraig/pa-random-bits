var expect = require("chai").expect;
var random = require('../');

describe('module', function() {
	it('should be the same reference as the random module', function() {
		expect(random).to.equal(require('../random'));
	});
});