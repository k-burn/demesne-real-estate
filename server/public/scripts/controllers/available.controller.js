myApp.controller('AvailableController', function ($http) {
    let vm  = this;

    vm.listingList = [];

    getListings();

    function getListings(){
        $http({
            method: 'GET',
            url: '/available'
        }).then(function(response) {
            console.log('back from server with:', response);
            vm.listingList = response.data;
        }).catch(function(error) {
            console.log('Error getting listings:', error);
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
            getListings();
            alert('listing removed');
        }).catch(function(error){
            console.log('Error deleting request:', error);
        });//end DELETE        
    }
})//end myApp