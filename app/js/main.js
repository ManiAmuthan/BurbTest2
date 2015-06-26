require.config({
	urlArgs : new Date().getTime(),
	paths: {
		jquery: 'libs/jquery/jquery-min',
		underscore: 'libs/underscore/underscore-min', 
		backbone: 'libs/backbone/backbone-min', 
		contentflow: 'libs/contentflow_src', 
		text: 'libs/require/text',
		templates: '../templates'
	}
});
require(['router/MainRouter', 'jquery'], function(MainRouter, $){
	MainRouter.initialize();
	$.ajaxSetup({
		headers: {
			'X-Mashape-Key':'D1ksv0lXx0msh9W3UzQgbNmcJVc7p1r0hzIjsn5OL2tmT05RAE',
			'Accept':'application/json'
		}
	});
});
