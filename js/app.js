angular.module('firstApp', [])

.controller('MainCtrl', function ($scope) {

    //All of the stuff below is being defined in the $scope!!!!!!!
    //this lets them appear in our views

    //define a basic var
    $scope.message = "Hey U! Come & See me!";

    //define  alist of items
    $scope.computers = [
        {
            name: 'Macbook Pro',
            color: 'silver',
            nerdness: 7
        },
        {
            name: 'Yogo Book 2',
            color: 'gray',
            nerdness: 6
        },
        {
            name: 'Chromebook',
            color: 'blue',
            nerdness: 5
        }
            ];
});