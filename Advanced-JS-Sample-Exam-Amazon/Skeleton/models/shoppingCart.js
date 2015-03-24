var models = models || {};

(function (models) {
    function ShoppingCart (){
        this._items = [];
    }

    ShoppingCart.prototype.addItem = function(item){
        this._items.push(item);
    };

    ShoppingCart.prototype.getTotalPrice = function(){
        var sum = 0;
        for (var item in _items) {
            sum += item._price;
        }

        return sum;
    };

    models.getShoppingCart = function(){
        return new ShoppingCart();
    }
}(models));