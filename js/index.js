$(document).ready(function() {
  $(".shoot").on("click", startDanmu);
  $("form").keypress(function(event) {
    if (event.keyCode === 13) {
      event.preventDefault();
      startDanmu();
    }
  });
  $(".clear").on("click", clearDanmu);
});

function RandomNum(Min, Max) {
  var Range = Max - Min;
  var Rand = Math.random();
  var num = Min + Math.round(Rand * Range);
  return num;
}

function plusZero(x) {
  if (x < 10) {
    x = "0" + x;
  } else {
    x = x;
  }
  return x;
}

function startDanmu() {

  var message = $("input");
  var messageVal = message.val();
  var danmuMessage = "<span class='danmu-message'>" + messageVal + "</span>";

  var color = RandomNum(100000, 999999);

  var speed = RandomNum(10000, 20000);

  var positionY = RandomNum(50, 400);

  if (messageVal.length > 0) {
    $(".danmu-box").prepend(danmuMessage);

    $(".danmu-message").first().css({
      "right": "0",
      "top": positionY,
      "color": "#" + color
    });

    $(".danmu-message").first().animate({
        left: '0px',
      },
      speed,
      function() {
        $(this).fadeOut();
      });

    var time = new Date();
    var month = time.getMonth() + 1;
    var day = time.getDate();
    var hour = time.getHours();
    var minute = time.getMinutes();
    var danmuTime = plusZero(month) + "-" + plusZero(day) + " " + plusZero(hour) + ":" + plusZero(minute);

    if (messageVal.length > 6) {
      messageVal = messageVal.substring(0, 6) + "...";
    }
    var messageToTable = "<tr><td>" + messageVal + "</td><td>" + danmuTime + "</td></tr>";
    $(".danmu-table > tbody").prepend(messageToTable);
  } else {}
  message.val("");
}

function clearDanmu() {
  $(".danmu-box").html("");
}