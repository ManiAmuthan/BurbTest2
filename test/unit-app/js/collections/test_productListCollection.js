var produListCollection = require("../../../js/collections/producListCollection");
describe('ProductList Collection', function() {
	describe('when instantiated', function() {
		it('should exhibit attributes', function() {
			var options = {};
		});
	});
	describe('when fetch', function(){
		it('should set URL', function(){
			var collection = {
				url: "https://api.burberry.com/v1/apps/ecom/pages/"
			};
			this.plist.collection = produListCollection;
			expect(this.plist.url()).toEqual("https://api.burberry.com/v1/apps/ecom/pages/");			
			
		});
	});
});