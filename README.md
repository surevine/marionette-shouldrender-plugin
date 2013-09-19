marionette-shouldrender-plugin
==============================

A plugin for Marionette to add support for a `shouldRender` function

This plugin adds support in all of Marionette's `*View` classes, as well as `Layout` and `Region` for an optional function called `shouldRender`.

`shouldRender` should return true or false depending on whether the `View` is happy it has all the data it needs to render its view.

The main use case for this is in views that contain a lot of asynchronous calls, where the `View` lifecycle may not match that of the data retrieval. In this case, views are often rendered empty, and the re-rendered when the asychronous call returns. Using `shouldRender` prevents the initial, wasteful, render, while allowing all async methods to call `render`, safe in the knowledge that the render will only occur when all the entities are in place.

```js

Backbone.Marionette.ItemView.extend({
  initialize: function() {
    this.loadAuthor()
    this.loadContent()
  },
  
  loadAuthor: function() {
    this.asyncCall('to/get/author.json', this.authorReceived)
  },
  
  loadContent: function() {
    this.asyncCall('to/get/content.json', this.contentReceived)
  },
  
  authorReceived: function(author) {
    this.author = author
    this.render()
  },
  
  contentReceived: function(content) {
    this.content = content
    this.render()
  },
  
  shouldRender: function() {
    return ( this.content && this.author )
  }
});

```