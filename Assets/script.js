$(document).ready(function(){
    var date = moment().format('MMMM Do YYY, h:mm:ss a');
    var startTime = moment().set({'hour': 9, 'minute': 00}).format("h:mm a");
    var endTime = moment().set({'hour': 17, 'minute': 00}).format("h:mm a");
    var nine = 9;
    var five = 17;
    let hours = [];
    
    // setting the current day at the top of the page
    $("#currentDay").html(date);

    // Creating our 9-5 time blocks
    while (nine <= five){
        hours.push(nine);
        nine++;
    }

    // Creating bootstrap columns and rows.
    

    // using moment.js to create our hour divs. Looping through our hour array that we created earlier. 
    hours.forEach(function(val){
        var newRow = $("<div>").addClass("row");
        $(".container").append(newRow);

        // first column
        var columnOne = $("<div>").addClass("col-1 hour");
        columnOne.text(moment().set({'hour': val, 'minute': 00}).format("h:mmA"));
        newRow.append(columnOne);

        // second column
        var timeInput = $("<input>")
        .attr("type", "text")
        .attr("slot", val)
        .addClass("col-10 input ");
        newRow.append(timeInput);

        //third column
        var saveButton = $("<button>")
        .attr("type", "button")
        .attr("slot", val)
        .addClass("col-1 saveButton")
        .text("Save");
        newRow.append(saveButton);
        
    });

   

    
    
  




});



