// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.
$(document).ready(function () {
  // TODO: Add a listener for click events on the save button. This code should
  // use the id in the containing time-block as a key to save the user input in
  // local storage. HINT: What does `this` reference in the click listener
  // function? How can DOM traversal be used to get the "hour-x" id of the
  // time-block containing the button that was clicked? How might the id be
  // useful when saving the description in local storage?

  $(".saveBtn").on("click", function () {
    var description = $(this).siblings(".description").val();
    var hourId = $(this).parent().attr("id");
    console.log("description", description, "hourId", hourId);
    //create two var 1. holds the id of the timeblock 2.description of what was saved
    // key = id value = description
    // save info to local storage
    localStorage.setItem(hourId, description);
  });

  // TODO: Add code to apply the past, present, or future class to each time
  // block by comparing the id to the current hour. HINTS: How can the id
  // attribute of each time-block be used to conditionally add or remove the
  // past, present, and future classes? How can Day.js be used to get the
  // current hour in 24-hour time?
  function colorHour() {
    var currentHour = dayjs().hour();
    // console.log(currentHour, "currentHour")
    $(".time-block").each(function(){
      var timeBlock = $(this).attr("id").split("-")[1]
      var timeBlockHour = parseInt(timeBlock)
      // console.log(timeBlockHour, "timeBlockHour")
      $(this).removeClass("past present future")
      if (timeBlockHour < currentHour) {
        $(this).addClass("past");
      } else if (timeBlockHour === currentHour) {
        $(this).addClass("present");
      } else {
        $(this).addClass("future");
      }
    })
  

   
    // set interval for function colorhour and setting a time 
    // handling removing classes
    // for (var i = 9; i <= 17; i++) var timeBlockEl = $("#hour-" + i);
  }

  // // $(".time-block").each()
  // // for loop that loops over each timeblock and uns our if/else statement
  //   // create a function that will call
  //   //create a var that holds the current time
  //   // select all timeblocks and loop over them
  //   // thus compare it with the current hour (conditional statements if time block < current hour past) (current hour > === future)

  // TODO: Add code to get any user input that was saved in localStorage and set
  // the values of the corresponding textarea elements. HINT: How can the id
  // attribute of each time-block be used to do this?
  //

$(".description").each(function() {
  var timeBlock = $(this).parent().attr("id");
  var savedData = localStorage.getItem(timeBlock);
  if (savedData) {
    $(this).val(savedData);
  }
})

  // // // add code to get any users inputs that was saved in local storage
  // var nineAm = localStorage.getItem("hour-9");
  // $("#description9").val(nineAm);

  // var tenAm = localStorage.getItem("hour-10");
  // $("#description10").val(tenAm);

  // var elevenAm = localstorage.getItem("hour-11");
  // $("#descripition11").val(elevenAm);

  // var twelvePm = localstorage.getItem("hour-12");
  // $("#descripition12").val(twelvePm);

  // var onePm = localstorage.getItem("hour-13");
  // $("#descripition13").val(onePm);

  // var twoPm = localstorage.getItem("hour-14");
  // $("#descripition14").val(twoPm);

  // var threePm = localstorage.getItem("hour-15");
  // $("#descripition15").val(threePm);

  // var fourPm = localstorage.getItem("hour-16");
  // $("#descripition16").val(fourPm);

  // var fivePm = localstorage.getItem("hour-17");
  // $("#descripition17").val(fivePm);

  //conditional statements
  //set intervals 
  //
  // create for loop all different timeblocks (local.stroage.getitem)
  // if item is not null then set textcontent to whatever current content it is (conditionally statement)

  // TODO: Add code to display the current date in the header of the page.[]
  var currentDate = dayjs().format("MM-DD-YYYY");
  $("#currentDay").text(currentDate);

  colorHour();
  setInterval(colorHour, 6000)
});

// // What is needed

// // code for past present future timeblocks + color coordinate
// var currentHour = dayjs().format("HH");
// for (var i = 0; i < 18; i++)
// var timeBlockEl = $("#hour-" + i)
// if // past
//   (if current hour > i )
// else if // present
// else // future
// // $(".time-block").each()
// // for loop that loops over each timeblock and uns our if/else statement
//   // create a function that will call
//   //create a var that holds the current time
//   // select all timeblocks and loop over them
//   // thus compare it with the current hour (conditional statements if time block < current hour past) (current hour > === future)

// // add code to get any users inputs that was saved in local storage
// var nineAm = localStorage.getItem("9") // repeat for each hour block
// document.getElementById("9").value=nineAm
// $("#9").val(nineAm)

// var tenAm = localStorage.getItem("10")
// $("#10").val(tenAm)
//   // create for loop all different timeblocks (local.stroage.getitem)
//   // if item is not null then set textcontent to whatever current content it is (conditionally statement)
// // add event listener for the save button
// // jquery select class class="btn saveBtn col-2 col-md-1"
// $(".saveBtn").on("click", function()){
//   // when any savebutton is clicked, run this function
//   // select the text area that is next to this particular save button
// }
//   // create a function that handles the event
//   //create two var 1. holds the id of the timeblock 2.description of what was saved
//   // key = id value = description
//   // save info to local storage
// // set interval check time throughout the day ( to check if update if needed )
//   // set interval dom method recall functions , set time on it (past, present, future for call back function)
