function generateTimeSlots() {
    var numLectures = document.getElementById("numLectures").value;
    var timeSlotsHtml = " ";
    var timeSlotsbtn = " ";

    for (var i = 1; i <= numLectures; i++) {
        timeSlotsHtml += `<div class='timeslots_text'><p>Enter the Time slots of lecture ${i}:-</p><input type='text' name='timeslots[]' placeholder='e.g., 8:00-9:00' required></div>`;
    }

    timeSlotsbtn+="<button onclick='generateTable()'>Generate Timetable</button>"
    document.getElementById("timeSlotsContainer").innerHTML = timeSlotsHtml;
    document.getElementById("timeslotbtn").innerHTML = timeSlotsbtn;
}

function generateTable() {
    var timeSlotsInputs = document.getElementsByName("timeslots[]");
    var timeslots = [];
    for (var i = 0; i < timeSlotsInputs.length; i++) {
        var slot = timeSlotsInputs[i].value.trim();
        if (slot !== "") {
            timeslots.push(slot);
        }
    }
    
    var days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"];

    var table = "<table id='timetable'><thead><tr><th>Day</th>";
    for (var i = 0; i < timeslots.length; i++) {
        table += "<th>" + timeslots[i] + "</th>";
    }
    table += "</tr></thead><tbody>";

    for (var j = 0; j < days.length; j++) {
        table += "<tr><td>" + days[j] + "</td>";
        for (var k = 0; k < timeslots.length; k++) {
            table += "<td><input type='text' name='subject[" + days[j] + "][" + timeslots[k] + "][subject]' placeholder='Subject' />";
            table += "<br><input type='text' name='subject[" + days[j] + "][" + timeslots[k] + "][teacher]' placeholder='Teacher' /></td>";
        }
        table += "</tr>";
    }

    table += "</tbody></table>";

    document.getElementById("timetableContainer").innerHTML = table;
}
