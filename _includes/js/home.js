$(document).ready(function() {

  var postcontent = $(".post-content");
  var pc_height = postcontent.height();
  var win = $(window).height()-120;

  console.log(pc_height);
  console.log(win);

  if (pc_height > win) {
    $(".post-content").addClass('post-content-large');
    if ($(window).width() < 1040) {
      $(".post-content").removeClass('post-content-large');
    };
  }

  var addEvent = function(object, type, callback) {
    if (object == null || typeof(object) == 'undefined') return;
    if (object.addEventListener) {
        object.addEventListener(type, callback, false);
    } else if (object.attachEvent) {
        object.attachEvent("on" + type, callback);
    } else {
        object["on"+type] = callback;
    }
  };

  addEvent(window, "resize", function(event) {
    var pc_height = postcontent.height();
    var win = $(window).height()-120;
    if ($(window).width() > 1040) {
      if (pc_height > win) {
        $(".post-content").addClass('post-content-large');
      }
    };
  });
});
