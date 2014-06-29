define([
    'backbone',
    'text!data.json'
], function(Backbone, catalog){

    var Model = Backbone.Model.extend({
        defaults: JSON.parse(catalog)
    });

    return new Model;

});