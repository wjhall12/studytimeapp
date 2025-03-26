function calculateStudyTime() {
  var subjects = document.getElementById("subjects").value;
  var hours = document.getElementById("hours").value;
  var breakMinutes = document.getElementById("break").value;

  var result = document.getElementById("result");

  if (subjects == "" || hours == "" || breakMinutes == "") {
    result.textContent = "Please fill out all three fields.";
  } else {
    var totalMinutes = hours * 60;
    var studyMinutes = totalMinutes - breakMinutes;

    var minutesPerSubject = Math.floor(studyMinutes / subjects);
    var eachHours = Math.floor(minutesPerSubject / 60);
    var eachMinutes = minutesPerSubject % 60;

    result.textContent = "Spend about " + eachHours + " hour(s) and " + eachMinutes + " minute(s) on each subject.";
  }
}
