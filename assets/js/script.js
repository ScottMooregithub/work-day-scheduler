var currentDay = document.getElementById("currentDay");
var today = document.createElement("p");
var currentTime = moment().hour();

today.textContent = moment().format("dddd, MMMM Do, YYYY");
currentDay.appendChild(today);

function timeTracker() {
  $("textarea").each(function () {
    var blockTime = parseInt($(this).attr("id").split("hour")[1]);
    $(this).removeClass(".past .present .future");

    if (currentTime > blockTime) {
      $(this).addClass("past");
    } else if (currentTime < blockTime) {
      $(this).addClass("future");
    } else {
      $(this).addClass("present");
    }
  });
}

$("#hour9").val(localStorage.getItem("hour9"));
$("#hour10").val(localStorage.getItem("hour10"));
$("#hour11").val(localStorage.getItem("hour11"));
$("#hour12").val(localStorage.getItem("hour12"));
$("#hour13").val(localStorage.getItem("hour13"));
$("#hour14").val(localStorage.getItem("hour14"));
$("#hour15").val(localStorage.getItem("hour15"));
$("#hour16").val(localStorage.getItem("hour16"));
$("#hour17").val(localStorage.getItem("hour17"));

function saveTask() {
  var text = $(this).siblings(".description").val();
  var time = $(this).siblings(".description").attr("id");

  localStorage.setItem(time, text);
}

$(".saveBtn").click(saveTask);

timeTracker();
