/*
 * Compares viewport's widths on each resize event v1.0.0
 * Vanilla JavaScript 
 * https://github.com/alejandromur/compare-viewports
 *
 * Copyright 2018, alejandro@mamutlove.es
 *
 * Licensed under the MIT license:
 * http://www.opensource.org/licenses/MIT
 */

(function (window, document, undefined) {

  "use strict";

  function getWindowWidth() {
    return window.innerWidth;
  }

  function compare(w1, w2) {
    if (w2 > w1) {
      gettingWider();
    } else if (w2 < w1) {
      gettingNarrower();
    }
  }

  function gettingWider() {
    console.log("gettin' wider");
  }

  function gettingNarrower() {
    console.log("gettin' narrower");
  }

  var viewportLastWidth = 0;
  var viewportWidth = getWindowWidth();

  window.addEventListener("resize", function (e) {
    viewportLastWidth = viewportWidth;
    viewportWidth = getWindowWidth();
    compare(viewportLastWidth, viewportWidth);
  }, false);

})(window, document);
