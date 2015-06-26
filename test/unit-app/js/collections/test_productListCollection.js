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
				url: 'https://api.github.com/repos/'
			};
			this.plist.collection = produListCollection;
			expect(this.plist.url()).toEqual('https://api.github.com/repos/');			
			
		});
	});
});