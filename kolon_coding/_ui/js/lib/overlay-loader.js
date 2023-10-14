$(function() {
  var element = $('<div class="overlay-loader-bg" style="display: none"></div>')
    .append('<div class="progress"><div class="progress-circle-lg-white" style="display: block;"></div></div>')
    .appendTo('body');

  function start() {
    element.show();
  }

  function stop() {
    element.hide();
  }

  window.overlayLoader = {
    start: start,
    stop: stop,
  };
});
