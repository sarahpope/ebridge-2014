$(document).ready(function() {

  'use strict';

  var menu = $('#navigation-menu');
  var menuToggle = $('#js-mobile-menu');

  $(menuToggle).on('click', function(e) {
    e.preventDefault();
    menu.slideToggle(function(){
      if(menu.is(':hidden')) {
        menu.removeAttr('style');
      }
    });
  });

 
 // underline under the active nav item
  $('.nav .nav-link').click(function() {
    $('.nav .nav-link').each(function() {
      $(this).removeClass('active-nav-item');
    });
    $(this).addClass('active-nav-item');
    $('.nav .more').removeClass('active-nav-item');
  });

  // adding scroll event
    (function($) {

    /**
     * Copyright 2012, Digital Fusion
     * Licensed under the MIT license.
     * http://teamdf.com/jquery-plugins/license/
     *
     * @author Sam Sehnert
     * @desc A small plugin that checks whether elements are within
     *     the user visible viewport of a web browser.
     *     only accounts for vertical position, not horizontal.
     */

    $.fn.visible = function(partial) {
      
        var $t            = $(this),
            $w            = $(window),
            viewTop       = $w.scrollTop(),
            viewBottom    = viewTop + $w.height(),
            _top          = $t.offset().top,
            _bottom       = _top + $t.height(),
            compareTop    = partial === true ? _bottom : _top,
            compareBottom = partial === true ? _top : _bottom;
      
      return ((compareBottom <= viewBottom) && (compareTop >= viewTop));

    };
      
  })(jQuery);

  var win = $(window);

  var allMods = $('.module');

  allMods.each(function(i, el) {
    var el = $(el);
    if (el.visible(true)) {
      el.addClass('already-visible'); 
    } 
  });

  win.scroll(function(event) {
    
    allMods.each(function(i, el) {
      var el = $(el);
      if (el.visible(true)) {
        el.addClass('come-in'); 
      } 
    });
    
  }); // end scroll events

});