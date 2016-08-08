angular
    .module('cardsApp')
    .controller('CardsController', function(Cards) {
        var _this = this;

        Cards.getCards().then(function(response){
            _this.cards = response.data;
        }).catch(function(response){
            //request was not successful
            //handle the error
        });
    });