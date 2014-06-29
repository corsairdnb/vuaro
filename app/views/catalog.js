define([
    'jquery',
    'backbone',
    'handlebars',
    'underscore',
    'models/catalog',
    'text!templates/catalog.html',
    'collections/cart'
], function($, Backbone, Handlebars, _, model, template, collection) {

    var View = Backbone.View.extend({

        initialize: function() {
            this.model = model;
            this.model.on("change", this.render, this);
            this.listenTo(collection, "add remove", this.render);
        },

        el: $(".catalog"),

        template: Handlebars.compile(template),

        events: {
            "click button": "add"
        },

        getItemAttributes: function(btn){
            return {
                id: btn.attr("data-id"),
                name: btn.attr("data-name")
            };
        },

        add: function(e) {
            var btn = $(e.target);
            btn.attr("disabled","disabled");
            collection.create(this.getItemAttributes(btn));
        },

        isDisabled: function(id) {
            return typeof collection.get(id) !== "undefined";
        },

        render: function() {
            var $this = this;
            $this.$el.html("");
            _.each(this.model.attributes, function(item){
                item["disabled"] = $this.isDisabled(item.id);
                $this.$el.append($this.template(item))
            });
        }
    });

    return function(container){
        return new View();
    };

});