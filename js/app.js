"use strict";

$(function () {
  var width = 500;
  var animationSpeed = 4000;
  var pause = 8000;

  setTimeout(function () {
    $("#slider .slides").animate(
      { "margin-left": "-=" + width },
      animationSpeed
    );
  }, pause);
});
