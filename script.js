//Makes each button independent from other buttons
$(document).ready(function () {

    // Displays current date 
    $("#currentDay").text(moment().format("MMMM Do YYYY"));

    //Function to save user input into local storage
    $(".saveBtn").on("click", function () {
        console.log(this);
        var text = $(this).siblings(".description").val();
        var time = $(this).parent().attr("id");
        localStorage.setItem(time, text);
    })

    //Saves user input for each hour
    $("#9 .description").val(localStorage.getItem("9"));

    $("#10 .description").val(localStorage.getItem("10"));

    $("#11 .description").val(localStorage.getItem("11"));

    $("#12 .description").val(localStorage.getItem("12"));

    $("#13 .description").val(localStorage.getItem("13"));

    $("#14 .description").val(localStorage.getItem("14"));

    $("#15 .description").val(localStorage.getItem("15"));

    $("#16 .description").val(localStorage.getItem("16"));

    $("#17 .description").val(localStorage.getItem("17"));

    //Funtion to color code time blocks to indicate whether it is in the past, present, or future
    function hourSaved() {

        for (i = 9; i < 18; i++) {

        var rowHour = i;

        currentTime = moment().format('H');

        console.log(rowHour, currentTime);
            
            if (rowHour < currentTime) {
                $("#" + i).addClass("past");
                
            }
            else if (rowHour > currentTime) {
                $("#" + i).addClass("future");
                }
            else {
                $("#" + i).addClass("present");
            }
        }}
        hourSaved();

        setInterval(hourSaved, 60000)
    })