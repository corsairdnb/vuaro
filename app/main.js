require.config({
    paths: {
        "text": "vendor/requirejs-text/text",
        "handlebars": "vendor/handlebars/handlebars",
        "jquery": "vendor/jquery/dist/jquery",
        "underscore": "vendor/underscore-amd/underscore",
        "backbone": "vendor/backbone-amd/backbone",
        "backboneLocalstorage": "vendor/backbone.localstorage/backbone.localStorage"
    },
    shim: {
        'handlebars': {
            exports: 'Handlebars'
        },
        backboneLocalstorage: {
            deps: ['backbone'],
            exports: 'Store'
        }
    }
});

require(['views/cart','views/catalog'], function(Cart, Catalog){

    var cart = new Cart(),
        catalog = new Catalog();

    catalog.render();
    cart.render();

});