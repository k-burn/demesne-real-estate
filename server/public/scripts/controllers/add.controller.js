myApp.controller('AddController', function ($http) {
    let vm  = this;


    vm.addListing = function(listingToAdd) {
        $http({
            method:'POST',
            url: '/add', 
            data: listingToAdd
        }).then(function(response){
            console.log('In POST response of addListing', response.data);
            vm.listingToAdd.cost='';
            vm.listingToAdd.sqft='';
            vm.listingToAdd.city='';
            vm.listingToAdd.type='';
            vm.listingToAdd.image_path='';
        }).catch(function(error){
            console.log('Error in POST', error);
        });  
    }
})