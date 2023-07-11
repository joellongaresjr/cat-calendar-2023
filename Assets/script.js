// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.
$(document).ready(function() {
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
    var currentHour = dayjs().format("HH");
      for (var i = 0; i <= 17; i++)
        var timeBlockEl = $("#hour-" + i)
        if (i < currentHour) {
          timeBlockEl.addClass("past");
        } else if (i === currentHour) {
          timeBlockEl.addClass("present");
        } else {
          timeBlockEl.addClass("future");
        } 
    
    // TODO: Add code to get any user input that was saved in localStorage and set
    // the values of the corresponding textarea elements. HINT: How can the id
    // attribute of each time-block be used to do this?
    //

    // // add code to get any users inputs that was saved in local storage
        var nineAm = localStorage.getItem("9") // repeat for each hour block
        $("#9").val(nineAm)

        var tenAm = localStorage.getItem("10")
        $("#10").val(tenAm)

        var elevenAm = localstorage.getItem("11")
        $("#11").val(elevenAm)

        var twelvePm = localstorage.getItem("12")
        $("#12").val(twelvePm)

        var onePm = localstorage.getItem("13")
        $("#13").val(onePm)

        var twoPm = localstorage.getItem("14")
        $("#14").val(twoPm)

        var threePm = localstorage.getItem("15")
        $("#15").val(threePm)

        var fourPm = localstorage.getItem("16")
        $("#16").val(fourPm)

        var fivePm = localstorage.getItem("17")
        $("#17").val(fivePm)
  // create for loop all different timeblocks (local.stroage.getitem) 
  // if item is not null then set textcontent to whatever current content it is (conditionally statement)

    // TODO: Add code to display the current date in the header of the page.[]
    var currentDate = dayjs().format("MM-DD-YYYY");
    $("#currentDay").text(currentDate);
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

