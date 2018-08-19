console.log('JS');
let myApp = angular.module('myApp', ['ngRoute']);


myApp.config( function ( $routeProvider){
    $routeProvider.when( '/', {
        templateUrl: '/views/home.html'
    }) // end home
     .when('/addListing', {
        templateUrl: '/views/addListing.html',
        controller: 'AddController as ac'
     })// end addListing
     .when( '/available', {
         templateUrl: '/views/available.html',
         controller: 'AvailableController as vc'
     }) //end available
     .otherwise({
         templateUrl: '/views/404.html'
     }) // end

})