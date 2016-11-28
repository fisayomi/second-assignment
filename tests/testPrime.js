'use strict';
  var chai = require('chai');
  var expect = chai.expect;
  var myApp = require('../app/lib4.js');


describe("Get Prime tests ", function() {
	describe("Case for some falsy values", function() {

	    it("should return 'no value' for null", function() {
	      expect(myApp.getPrime(null)).to.equal('no value');
	    });

	    it("should return 'no value' for undefined", function() {
	      expect(myApp.getPrime(undefined)).to.equal('no value');
	    });

	describe("Case for Negative numbers and numbers less than '2'", function() {
		it("should return 'Invalid Input' for `-5`", function() {
	      expect(myApp.getPrime(-5)).to.be.equal('Invalid Input');
	    });

	    it("should return 'Invalid Input' for `-100`", function() {
	      expect(myApp.getPrime(-100)).to.be.equal('Invalid Input');
	    });
	});


	describe("Case for String", function() {
		it("should return 'Invalid Input' for `prime`", function() {
	      expect(myApp.getPrime('prime')).to.be.equal('Invalid Input');
	    });

	    it("should return 'Invalid Input' for `result`", function() {
	      expect(myApp.getPrime('result')).to.be.equal('Invalid Input');
	    });
	});


	describe("Case for Positive Integers", function() {
		it("should return '[2,3,5,7]' for `10`", function() {
	      expect(myApp.getPrime(10)).to.deep.equal([2, 3, 5, 7]);
	    });

	    it("should return '[2,3, 5, 7, 11, 13, 17, 19, 23]' for `30`", function() {
	      expect(myApp.getPrime(30)).to.deep.equal([2, 3, 5, 7, 11, 13, 17, 19, 23, 29]);
	    });
	});

});

});

