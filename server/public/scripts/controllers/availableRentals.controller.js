myApp.controller('RentalController', function ($http) {
    let vm  = this;

    vm.rentalListingList = [];

    getRentalListings();

    function getRentalListings(){
        $http({
            method: 'GET',
            url: '/availableRentals'
        }).then(function(response) {
            console.log('back from server with:', response);
            vm.rentalListingList = response.data;
        }).catch(function(error) {
            console.log('Error getting rental listings:', error);
        });// end GET
    }
    

    vm.deleteListing = function(listingToDelete) {
        console.log('in deleteListing', listingToDelete);
        $http({
            method: 'DELETE',
            url: '/available/' + listingToDelete.user_id
        }).then(function(response) {
            console.log('in deleteListing');
            console.log(response);
            getRentalListings();
            alert('listing removed');
        }).catch(function(error){
            console.log('Error deleting request:', error);
        });//end DELETE        
    }
})//end myApp