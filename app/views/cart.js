define([
    'jquery',
    'backbone',
    'handlebars',
    'underscore',
    'collections/cart',
    'text!templates/cart.html'
], function($, Backbone, Handlebars, _, collection, template) {

    var View = Backbone.View.extend({

        initialize: function() {
            this.listenTo(collection, 'add', this.render);
            this.$list = this.$(".list");
            collection.fetch({reset: true});
        },

        el: ".cart",

        template: Handlebars.compile(template),

        events: {
            "click .clear": "clear",
            "click button": "remove"
        },

        clear: function(){
            _.invoke(collection.slice(0), "destroy");
            this.$list.html("");
        },

        remove: function(e){
            var id = $(e.target).attr("data-id");
            collection.get(id).destroy();
            this.render();
        },

        render: function() {
            var $this = this;
            $this.$list.html("");
            _.each(collection.models, function(item){
                $this.$list.append($this.template(item.attributes));
            });
        }
    });

    return View;

});