angular
    .module('cardsApp')
    .factory('Cards', function($http) {
        var dataSource = 'http://yoga.brasilia.io/cards/from-subdomain/1.json';

        return {
            getCards: function() {
                return $http.jsonp(dataSource);
            },
            getCard: function(cardId) {
                return $http.jsonp(dataSource, {
                    params: {
                        id: cardId
                    }
                });
            }
        }
    });