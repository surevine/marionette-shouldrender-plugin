(function (factory) {
    if (typeof define === 'function' && define.amd) {
        // AMD. Register as an anonymous module.
        define(['marionette', 'underscore'], factory);
    } else if (typeof exports === 'object') {
        // Node/CommonJS
        factory(require('marionette'), require('underscore'));
    } else {
        // Browser globals
        factory(Backbone.Marionette, _);
    }
}(function(Marionette, _) {
    
    var helper = {
        checkShouldRender: function() {
            var shouldRender = true;
            if ( this.shouldRender && _.isFunction(this.shouldRender) ) {
                shouldRender = this.shouldRender()
            }
            
            return shouldRender;
        }
    }
    
    var originalView = Marionette.View
    Marionette.View = originalView.extend(_.extend({
        render: function() {
            if ( _.isFunction(this.checkShouldRender) && !this.checkShouldRender() ) {
                return;
            }
            
            originalView.prototype.render.apply(this, arguments)
        }
    }, helper))
    
    var originalRegion = Marionette.Region
    Marionette.Region = originalRegion.extend(_.extend({
        render: function() {
            if ( _.isFunction(this.checkShouldRender) && !this.checkShouldRender() ) {
                return;
            }
            
            originalRegion.prototype.render.apply(this, arguments)
        }
    }, helper))
    
    var originalCollectionView = Marionette.CollectionView
    Marionette.CollectionView = originalCollectionView.extend(_.extend({
        render: function() {
            if ( _.isFunction(this.checkShouldRender) && !this.checkShouldRender() ) {
                return;
            }
            
            originalCollectionView.prototype.render.apply(this, arguments)
        }
    }, helper))
    
    var originalItemView = Marionette.ItemView
    Marionette.ItemView = originalItemView.extend(_.extend({
        render: function() {
            if ( _.isFunction(this.checkShouldRender) && !this.checkShouldRender() ) {
                return;
            }
            
            originalItemView.prototype.render.apply(this, arguments)
        }
    }, helper))
    
    var originalLayout = Marionette.Layout
    Marionette.Layout = originalLayout.extend(_.extend({
        render: function() {
            if ( _.isFunction(this.checkShouldRender) && !this.checkShouldRender() ) {
                return;
            }
            
            originalLayout.prototype.render.apply(this, arguments)
        }
    }, helper))
    
    var originalCompositeView = Marionette.CompositeView
    Marionette.CompositeView = originalCompositeView.extend(_.extend({
        render: function() {
            if ( _.isFunction(this.checkShouldRender) && !this.checkShouldRender() ) {
                return;
            }
            
            originalCompositeView.prototype.render.apply(this, arguments)
        }
    }, helper))
    
}));