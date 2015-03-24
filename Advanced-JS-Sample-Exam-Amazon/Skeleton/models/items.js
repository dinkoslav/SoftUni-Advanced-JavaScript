var models = models || {};

(function (models) {

    function Item(title, description, price){
        this.title = title;
        this.description = description;
        this.price = price;
        this._customerReviews = [];
    }

    Item.prototype.addCustomerReview = function(customerReview){
        this._customerReviews.push(customerReview);
    };

    Item.prototype.getCustomerReview = function(customer, content, rating, createdOn){
        return new CustomerReview(customer, content, rating, createdOn);
    };

    function UsedItem(title, description, price, condition){
        Item.call(this, title, description, price)
        this.condition = condition;
    }

    UsedItem.extend(Item);

    models.getItem = function(title, description, price){
        return new Item(title, description, price);
    }

    models.getUsedItem = function(title, description, price, condition){
        return new UsedItem(title, description, price, condition);
    }

}(models));