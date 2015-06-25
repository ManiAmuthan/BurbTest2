describe("MainView", function() {
	beforeEach(function() {
		this.view = new MainView();
	});
	describe("Rendering", function() {
		beforeEach(function() {
			this.mainView = new Backbone.View();
			this.hLink = new Backbone.Collection();
			this.view.render();
		});
		it("should create a Gallery view for each hLink item", function() {
			expect(this.hLink).toHaveBeenCalled();
		});
	});
});