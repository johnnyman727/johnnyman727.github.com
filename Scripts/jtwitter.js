/*
 * jTwitter 1.1 - Twitter API abstraction plugin for jQuery
 *
 * Copyright (c) 2009 jQuery Howto
 *
 * Licensed under the GPL license:
 *   http://www.gnu.org/licenses/gpl.html
 *
 * URL:
 *   http://jquery-howto.blogspot.com
 *
 * Author URL:
 *   http://me.boo.uz
 *
 */
(function($){
  $.extend({
    jTwitter : function(username, numPosts, fnk){
      if(numPosts == 'undefined'){
        fnk = numPosts;
        numPosts = 5;
      }
      var url = "http://search.twitter.com/search.json?callback=?&q=jonmckay";
      var info = {};
      $.getJSON(url, function(data){
        if(typeof fnk == 'function') fnk.call(this, data);
      });
    }
  });
})(jQuery);
