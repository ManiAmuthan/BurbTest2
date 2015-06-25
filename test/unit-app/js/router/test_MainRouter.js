describe("MainRouter routes", function() {
  beforeEach(function() {
    this.router = new MainRouter;
    try {
      Backbone.history.start({silent:true, pushState:true});
    } catch(e) {}
		this.router.navigate("elsewhere");
	});

	it("fires the index route with a blank hash", function() {
		this.router.bind("route:index", this.routeSpy);
		this.router.navigate("*actions", true);
	});
});