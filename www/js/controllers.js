angular
    .module('cardsApp')
    .controller('CardsController', function($scope, $http) {
          $scope.result = "";
          $http.get('http://yoga.brasilia.io/cards/from-subdomain/1.json')
            .success(function(data, status, headers,config){
              console.log('data success');
              console.log(data); // for browser console
              $scope.result = data; // for UI
            })
            .error(function(data, status, headers,config){
              console.log('data error');
            })
            .then(function(result){
              things = result.data;
            });
    });
    
