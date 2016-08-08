angular.module('cardsApp', ['ionic'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    if(window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
      cordova.plugins.Keyboard.disableScroll(true);
    }
    if(window.StatusBar) {
      StatusBar.styleDefault();
    }
  });
})

.config(function($stateProvider, $urlRouterProvider) {
    $stateProvider
        .state('cards', {
            url: '/cards',
            templateUrl: 'templates/cards.html',
            controller: 'CardsController',
            controllerAs: 'cards'
        })
        .state('card-detail', {
            url: '/cards/:cardId',
            templateUrl: 'templates/card-detail.html',
            controller: 'CardDetailController',
            controllerAs: 'cardDetail'
        });

    $urlRouterProvider.otherwise('/cards');
});
