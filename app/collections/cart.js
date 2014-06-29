define([
    'backbone',
    'backboneLocalstorage'
], function(Backbone, localstorage){

    var Collection = Backbone.Collection.extend({
        localStorage: new localstorage("cart"),
        change: function() {
            alert("collection changed!")
        }
    });

    return new Collection();

});