function analyzeGrades() {
    var grade1 = parseFloat(document.getElementById("gradeA").value);
    var grade2 = parseFloat(document.getElementById("gradeB").value);
    var grade3 = parseFloat(document.getElementById("gradeC").value);


    if (isNaN(grade1) || isNaN(grade2) || isNaN(grade3)) {
        alert("Please enter grades for all three subjects.");
        return;
    }
    var average = (grade1 + grade2 + grade3) / 3;
    var rating = "";
    if (average >= 94 && average <= 100) {
        rating = "Excellent";
    } else if (average >= 87 && average < 94) {
        rating = "Above Satisfactory";
    } else if (average >= 80 && average < 87) {
        rating = "Satisfactory";
    } else if (average >= 75 && average < 80) {
        rating = "Needs Improvement";
    } else if (average >= 70 && average < 75) {
        rating = "Poor";
    } else {
        rating = "Failing or Invalid Grade";
    }

    // Display the result
    alert("Your average is " + average.toFixed(2) + " - " + rating);
}

