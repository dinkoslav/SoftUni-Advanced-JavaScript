var models = models || {};

(function (models) {
    function CustomerReview(customer, content, rating, createdOn){
        this._customer = customer;
        this._content = content;
        this._rating = rating;
        this._createdOn = createdOn;
    }

    models.getCustomerReview = function(customer, content, rating, createdOn){
        return new CustomerReview(customer, content, rating, createdOn);
    }
}(models));