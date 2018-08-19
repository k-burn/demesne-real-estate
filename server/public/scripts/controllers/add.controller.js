myApp.controller('AddController', function ($http) {
    let vm  = this;


    vm.addListing = function(listingToAdd) {
        $http({
            method:'POST',
            url: '/add', 
            data: listingToAdd
        }).then(function(response){
            console.log('In POST response of addListing', response.data);
        }).catch(function(error){
            console.log('Error in POST', error);
        });  
    }

})