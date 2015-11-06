var expect = require("chai").expect;

var random = require("../../random");

describe('#random',function() {

	it('should be that you can create a random object and set its seed', function(){
		var r = new random.random(0xABCD1234);
		expect(r.currentSeed.highBits).to.equal(5);
		expect(r.currentSeed.lowBits).to.equal(0x7521f459);

	    });

     it('should be that you can create a random object and set its seed', function(){
		var r = new random.random(0x0);
		expect(r.currentSeed.highBits).to.equal(5);
		expect(r.currentSeed.lowBits).to.equal(0xDEECE66D);
	    });

     it('should be that you can create a random object and set its seed using 48 bits', function(){
		var r = new random.random(0xABC000000000);
		expect(r.currentSeed.highBits).to.equal(0xABC5);
		expect(r.currentSeed.lowBits).to.equal(0xDEECE66D);
	    });

     it('should have a determineSeed method', function() {
	     expect(random.determineSeed).is.a('function');
	 });

     it('should have a determineSeed method that takes hex input', function() {
	     expect(random.determineSeed("0xA")).to.equal(10);
	     expect(random.determineSeed("10")).to.equal(16);
	 });

     it('should throw an error if you give determineSeed a bad parameter', function() {
		 expect(function() {random.determineSeed("xxx");}).to.throw("Invalid Parameter to determineSeed");
	 });

     it('should have a determineSeed method that returns a random when no parameter is used',
	function() {
	    var result=random.determineSeed();
	     expect(result).to.be.a("number");
	     expect(result>=0);
	     expect(result<=0xFFFFFFFF);

	 });


	 describe("randIntBetweenInclusive",function() {
			 var rs;

			  beforeEach(function() {
					  rs = new random.random(0xABCD1234);					  
				 });
			  
			  it('should have a randIntBetweenInclusive function',function() {
					  expect(rs.randIntBetweenInclusive).is.a("function");
				  });


			  it('should return numeric values in the right range',function() { 
                     expect(rs.randIntBetweenInclusive(4,9)).is.a("number");
                     expect(rs.randIntBetweenInclusive(4,9) >=4).is.true;
                     expect(rs.randIntBetweenInclusive(4,9) <=9).is.true;
				  });


		 });


    });	

   




