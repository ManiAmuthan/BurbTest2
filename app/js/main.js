require.config({
	urlArgs : new Date().getTime(),
	paths: {
		jquery: 'libs/jquery/jquery-min',
		underscore: 'libs/underscore/underscore-min', 
		backbone: 'libs/backbone/backbone-min', 
		contentflow: 'libs/contentflow', 
		text: 'libs/require/text',
		templates: '../templates'
	}
});
require(['router/MainRouter'], function(MainRouter){
	MainRouter.initialize();
});
