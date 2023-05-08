document
  .querySelector("#showAttendance")
  .addEventListener("submit", function (event) {
    event.preventDefault();
    var attendanceDate = document.getElementById("date-input").value;
    var attendanceClass = document.getElementById("select-class").value;
    console.log(attendanceClass);
    if (attendanceClass == "" || attendanceDate == "") {
      alert("Please Fill date and class");
      //document.getElementById('select-class').style.border = "1px solid red";
    } else {
      document.getElementById("attendance-table").innerHTML = "";
      eel.fetchAttendance(attendanceClass, attendanceDate);
    }
  });

eel.expose(attendanceTable);
function attendanceTable(
  student_id,
  fullname,
  attendanceClass,
  attendanceDate
) {
  document.getElementById("attendance-table").innerHTML +=
    "<tr><th scope='row'>" +
    student_id +
    "</th><td>" +
    fullname +
    "</td><td>" +
    attendanceClass +
    "</td><td>" +
    attendanceDate +
    "</td></tr>";
}

// //Download attendance sheet
// function exportF(elem) {
//   var table = document.getElementById("table");
//   var html = table.outerHTML;
//   var url = "data:application/vnd.ms-excel," + escape(html); // Set your html table into url
//   elem.setAttribute("href", url);
//   elem.setAttribute("download", "export.xls"); // Choose the file name
//   return false;
// }

//Download attendance sheet
// function exportF(elem) {
//   var table = document.getElementById("table");
//   var html = table.outerHTML;
//   var semester = document.getElementById("select-class").value
//   // Add date and course code as watermark
//   var today = new Date();
//   var dd = String(today.getDate()).padStart(2, '0');
//   var mm = String(today.getMonth() + 1).padStart(2, '0');
//   var yyyy = today.getFullYear();
//   var watermark = "<div style='text-align: center; font-size: 12px; font-style: italic; font-weight: bold; margin-top: 30px;'>Attendance for " + semester + " on " + mm + "/" + dd + "/" + yyyy + "</div>";
//   html += watermark;
  
//   var url = "data:application/vnd.ms-excel," + escape(html); // Set your html table into url
//   elem.setAttribute("href", url);
//   elem.setAttribute("download", "attendance.xls"); // Choose the file name
//   return false;
// }

function exportF(elem) {
  var table = document.getElementById("table");
  var html = table.outerHTML;
  var semester = document.getElementById("select-class").value
  var schoolName = "<h1 style='text-align: center'>University of Abuja</h1>";
  var department = "<h2 style='text-align: center'>Department of Computer Science</h2>";
  var studies = "<h4 style='text-align: center'>(POSTGRADUATES)</h4>";

  // Add date and course code as watermark
  var today = new Date();
  var dd = String(today.getDate()).padStart(2, '0');
  var mm = String(today.getMonth() + 1).padStart(2, '0');
  var yyyy = today.getFullYear();
  var watermark = "<div style='text-align: center; font-size: 14px; font-style: italic; font-weight: bold;'>Attendance for " + semester + " on " + dd + "/" + mm + "/" + yyyy + "</div></br>";

  // Add School Name and Department to Excel header
  var header = "<thead><tr style='border-bottom: 2px solid black'><th colspan='2'>" + schoolName + "</th></tr style='border-bottom: 2px solid black'><tr><th colspan='2'>" + department + "</th></tr style='border-bottom: 2px solid black'><tr><th colspan='2'>" + studies + "</th></tr style='border-bottom: 2px solid black'></tr><tr><th colspan='2'>" + watermark + "</th></tr></thead>";
  html = header + html;

  //var fileName = "attendance_"+dd+"_"+mm+"_"+yyyy;
  
  var url = "data:application/vnd.ms-excel," + escape(html); // Set your html table into url
  elem.setAttribute("href", url);
  elem.setAttribute("download", "attendance_"+dd+"_"+mm+"_"+yyyy+".xls"); // Choose the file name
  return false;
}


