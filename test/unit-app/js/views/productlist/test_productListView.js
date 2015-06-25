describe("ProductListView", function() {
	beforeEach(function() {
		this.view = new ProductListView();
	});
	describe("Rendering", function() {
		beforeEach(function() {
			this.mainView = new Backbone.View();
			this.pLink = new Backbone.Collection();
			this.view.render();
		});
		it("should create a Gallery view for each hLink item", function() {
			expect(this.pLink).toHaveBeenCalled();
		});
	});
});