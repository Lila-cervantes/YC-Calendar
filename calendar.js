//this wraps up all the code using Jquery
$(document).ready(function () {
    //this is the button. when click save icon this function will run
  $('.saveBtn').on('click', function () {
    //varibles are the value and time
    var value = $(this).siblings('.description').val();
    var time = $(this).parent().attr('id');

    //this saves to the localstorage
    localStorage.setItem(time, value);

    //a notifcation when an item is saved in the description box
    $('.notification').addClass('show');

    //This is set to remove the "Appointment was added to: localStorage" after 4 seconds.
    setTimeout(function () {
      $('.notification').removeClass('show');
    }, 4000);
  });
    
  function hourUpdater() {
    // this retieves the current number of hours
    var hourATM = dayjs().hour();
    //this is a loop of the time-blocks. which are past present and future.
    $('.time-block').each(function () {
      var hourB = parseInt($(this).attr('id').split('-')[1]);

      if (hourB < hourATM) {
        $(this).addClass('past');
      } else if (hourB === hourATM) {
        $(this).removeClass('past');
        $(this).addClass('present');
      } else {
        $(this).removeClass('past');
        $(this).removeClass('present');
        $(this).addClass('future');
      }
    });
  }

  hourUpdater()
    
  setInterval(hourUpdater, 15000);
    
  $('#hour9 .description').val(localStorage.getItem('hour9'));
  $('#hour10 .description').val(localStorage.getItem('hour10'));
  $('#hour11 .description').val(localStorage.getItem('hour11'));
  $('#hour12 .description').val(localStorage.getItem('hour12'));
  $('#hour13 .description').val(localStorage.getItem('hour13'));
  $('#hour14 .description').val(localStorage.getItem('hour14'));
  $('#hour15 .description').val(localStorage.getItem('hour15'));
  $('#hour16 .description').val(localStorage.getItem('hour16'));
  $('#hour17 .description').val(localStorage.getItem('hour17'));
    
  $('#currentDate').text(dayjs().format('dddd, D of MMMM YYYY'))
    
});
    
// TODO: Add a listener for click events on the save button. This code should
// use the id in the containing time-block as a key to save the user input in
// local storage. HINT: What does `this` reference in the click listener
// function? How can DOM traversal be used to get the "hour-x" id of the
// time-block containing the button that was clicked? How might the id be
// useful when saving the description in local storage?
//
// TODO: Add code to apply the past, present, or future class to each time
// block by comparing the id to the current hour. HINTS: How can the id
// attribute of each time-block be used to conditionally add or remove the
// past, present, and future classes? How can Day.js be used to get the
// current hour in 24-hour time?
//
// TODO: Add code to get any user input that was saved in localStorage and set
// the values of the corresponding textarea elements. HINT: How can the id
// attribute of each time-block be used to do this?
//
// TODO: Add code to display the current date in the header of the page.
    