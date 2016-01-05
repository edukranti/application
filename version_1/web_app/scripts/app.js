var web_app = angular.module('web_app', ['ui.router']);

web_app.config(function($stateProvider, $urlRouterProvider) {
    
    $urlRouterProvider.otherwise('/home');
    
    $stateProvider
        
        /* home state */
        .state('home', {
            url: '/home',
            templateUrl: 'templates/partial-home.html'
        })
        
        /* about state */
        .state('about', {
            url: '/about',
            templateUrl: 'templates/partial-about.html'
            
        });
        
});

/* starts multi-level dropdown */
(function($){
	$(document).ready(function(){
		$('ul.dropdown-menu [data-toggle=dropdown]').on('click', function(event) {
			event.preventDefault(); 
			event.stopPropagation(); 
			$(this).parent().siblings().removeClass('open');
			$(this).parent().toggleClass('open');
		});
	});
})(jQuery);

/* ends multi-level dropdown */
