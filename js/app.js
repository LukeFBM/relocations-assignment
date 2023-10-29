"use strict";

$(function () {
  var width = 500;
  var animationSpeed = 2000;
  var pause = 5000;

  setTimeout(function () {
    $("#slider .slides").animate(
      { "margin-left": "-=" + width },
      animationSpeed
    );
  }, pause);
});
