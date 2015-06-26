var homelinkCollection = require("../../../js/collections/HomePageLinkCollection");
describe('ProductList Collection', function() {
	describe('when instantiated', function() {
		it('should exhibit attributes', function() {
			var options = {};
		});
	});
	describe('when fetch', function(){
		it('should set URL', function(){
			var collection = {
				url: 'https://community-dweetio.p.mashape.com/get/dweets/for/maniamuthann'
			};
			this.hLink.collection = homelinkCollection;
			expect(this.plist.url()).toEqual('https://community-dweetio.p.mashape.com/get/dweets/for/maniamuthann');			
		});
	});
});