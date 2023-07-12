$(document).ready(function () {

  // This code attaches a click event handler to elements with the class "saveBtn"
  // When a save button is clicked, the function inside the handler is executed.
  $(".saveBtn").on("click", function () {
  // The line below retrieves the value of the input field with the class "description" that is a sibling of the clicked save button.
  // thus assigns the value to the variable "description"
    var description = $(this).siblings(".description").val();
    var hourId = $(this).parent().attr("id");
    console.log("description", description, "hourId", hourId);
    localStorage.setItem(hourId, description);
  });


  function colorHour() {
    var currentHour = dayjs().hour();
    $(".time-block").each(function(){
    // (very pleased with my understanding with the line below! shoutout to my tutor and Kyle:)
    // the line below retrieves the id attribute of the current time block element, splits it using the "-" character as the seperator,
    // and gets the second element from the resulting array. It then assigns the value to the 'timeBlock' variable 
      var timeBlock = $(this).attr("id").split("-")[1]
    // this line below converts the 'timeBlock' string to an inter using the 'parseInt()' function and assigns the value to the 'timeBlockHour' variable.
      var timeBlockHour = parseInt(timeBlock)
    //removes CSS classes from the current time block element  
      $(this).removeClass("past present future")
    // If-else statements that follow compare 'timeBlockHour' with 'currentHour' and add the appropriate CSS class
    // to the current current time block element based on the comparison.
    // If 'timeBlockhour' is less than the 'currentHour', the "past" class is added. 
    // If they are equal, the "present" class is added. Otherwise, the "future" class is added.
      if (timeBlockHour < currentHour) {
        $(this).addClass("past");
      } else if (timeBlockHour === currentHour) {
        $(this).addClass("present");
      } else {
        $(this).addClass("future");
      }
    })
  }
  // $(".time-block").each()
  // for loop that loops over each timeblock and uns our if/else statement
  // create a function that will call
  //create a var that holds the current time
  // select all timeblocks and loop over them
  // thus compare it with the current hour (conditional statements if time block < current hour past) (current hour > === future)

// This code below selects all elements with the class "description" and iterates over each element using the 'each()'function  
$(".description").each(function() {
// This line below gets the id of the parent element of the current descripition element and assigns it to the 'timeBlock' variable
  var timeBlock = $(this).parent().attr("id");
// The line below retrieves the data stored in the localStorage object using 'timeBlock' as they key. It assigns the retrieved value to the 'savedData' variable.
  var savedData = localStorage.getItem(timeBlock);
 // the if statements check if 'savedData' exists thus it sets the value of the current description element to the retrieved data using the 'val()' function
 // 
  if (savedData) {
    $(this).val(savedData);
  }
})

// code below represents the use of dayjs library to get the current date and formatting it to the variable that is "currentDate"
  var currentDate = dayjs().format("MM-DD-YYYY");
  $("#currentDay").text(currentDate);

// calling my function colorHour()  
  colorHour();
// code sets up the interval that call colorHour function every 60 seconds to update the color of the time blocks based on the current hour.
  setInterval(colorHour, 60000)
});