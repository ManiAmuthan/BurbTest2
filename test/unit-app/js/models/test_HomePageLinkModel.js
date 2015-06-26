var homelinkModel = require("../../../js/models/HomePageLinkModel");
describe('Home Model', function() {
	describe('when instantiated', function() {
		it('should exhibit attributes', function() {
			var options = {};
		});
	});
	describe('when fetch', function(){
		it('should set URL', function(){
			var collection = {
				url: "https://community-dweetio.p.mashape.com/dweet/for/maniamuthann?content="
			};
			this.hLink.collection = homelinkModel;
			expect(this.hlink.url()).toEqual("https://community-dweetio.p.mashape.com/dweet/for/maniamuthann?content=");			
		});
	});
});