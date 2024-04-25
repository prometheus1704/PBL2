const days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"];
let timetable = {};

// Function to populate timetable
function fetched_data() {
    const numSubjects = parseInt(document.getElementById("number_of_subject").value);
    const numLectures = parseInt(document.getElementById("number_of_lecture").value);

    // Collect time slots entered by the user
    const timeSlots = [];
    for (let i = 1; i <= numLectures; i++) {
        const timeSlot = document.getElementById(`timeslots${i}`).value;
        timeSlots.push(timeSlot);
    }

    // Collect subject details
    const subjects = [];
    for (let i = 1; i <= numSubjects; i++) {
        const subject = document.getElementById(`subject${i}`).value;
        const teacher = document.getElementById(`teacher${i}`).value;
        subjects.push({ subject, teacher });
    }

    // Shuffle subjects and teachers together
    const shuffledSubjects = shuffleArray(subjects.slice());

    // Display timetable on the webpage
    const table = document.getElementById("timetable");
    const tbody = table.querySelector("tbody");
    tbody.innerHTML = "";

    // Add time slots row
    const trTimeSlots = document.createElement("tr");
    const tdBlank = document.createElement("td"); // Blank cell for the first column
    trTimeSlots.appendChild(tdBlank);
    timeSlots.forEach(timeSlot => {
        const tdTimeSlot = document.createElement("td");
        tdTimeSlot.textContent = timeSlot;
        trTimeSlots.appendChild(tdTimeSlot);
    });
    tbody.appendChild(trTimeSlots);

    // Distribute subjects across lectures for each day
    days.forEach(day => {
        timetable[day] = [];

        // Shuffle subjects and teachers for this day
        const shuffledSubjectsForDay = shuffleArray(shuffledSubjects.slice());

        // Distribute subjects to lectures based on conditions
        if (numLectures >= numSubjects) {
            // Case: Total lectures >= Total subjects
            let subjectIndex = 0;
            for (let i = 0; i < numLectures; i++) {
                const lectureSubjects = [];
                for (let j = 0; j < Math.ceil(numSubjects / numLectures); j++) {
                    lectureSubjects.push(shuffledSubjectsForDay[subjectIndex]);
                    subjectIndex = (subjectIndex + 1) % numSubjects;
                }
                timetable[day].push(lectureSubjects);
            }
        } else {
            // Case: Total lectures < Total subjects
            let subjectIndex = 0;
            for (let i = 1; i < numSubjects; i++) {
                const lectureSubjects = [shuffledSubjectsForDay[subjectIndex]];
                timetable[day].push(lectureSubjects);
                subjectIndex = (subjectIndex + 1) % numLectures;
            }
        }
    });

    // Add subjects for each day
    days.forEach(day => {
        const tr = document.createElement("tr");
        const tdDay = document.createElement("td");
        tdDay.textContent = day;
        tr.appendChild(tdDay);

        timetable[day].forEach(lectureSubjects => {
            const td = document.createElement("td");
            lectureSubjects.forEach(subject => {
                const p = document.createElement("p");
                 p.innerHTML= `<p>${subject.subject}</p><p>${subject.teacher}</p>`;
                
                td.appendChild(p);
            });
            tr.appendChild(td);
        });

        tbody.appendChild(tr);
    });
}

// Function to shuffle an array
function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}
