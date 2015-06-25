define([
  'jquery',
  'underscore',
  'backbone',
  'views/MainView', 
  'views/productlist/ProductView'
], function ($, _, Backbone, MainView, ProductView) {
  
  var MainRouter = Backbone.Router.extend({
    routes: {
      '*actions': 'defaultAction'
    }
  });

  var initialize = function(){
    var router = new MainRouter();
	console.log("MainRouter / initialize");
	router.on('route:defaultAction', function (actions) {
		console.log("default route :: "+ actions);
		var path = actions.split("/");
		console.log(path);
		if(path[1] == "product"){
			var productView = new ProductView();
			var subPath = path.splice(2, path.length).join("/");
			console.log("subPat::::::::::::::: " + subPath);
			productView.render(subPath);
		}else{
			var mainView = new MainView();
			mainView.render();
		}
	});
    Backbone.history.start();
  };
  return {
    initialize: initialize
  };
});
