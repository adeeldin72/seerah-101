var int = 24; //declare variable with default font size of 16px.
var press = 0;


function fontIncrease() { //Increase font size function.

  int = int + 1; //add value of 1 to the integer
  var string = int.toString() //create string value intitalized with int converted to string.
  string = string + "px" //add px to the end of the string
  var elements = document.getElementsByClassName('fontSize');
  for (var i = 0; i < elements.length; i++) {
    elements[i].style.fontSize = string;

  }

  /*
  get element of fontSize, fontSize2, fontSize3 and set the style of fontSize to string. String
  would be whatever the integer is with px infront. For example, if integet is 15; then after being converted
  to string and having px added infront the value inside the string would be 15px. In other words setting the
  font size to 15px;
  */ //
}

function fontDecrease() {
  int = int - 1; //remove value of 1 to the integer
  var string = int.toString() //create string value intitalized with int converted to string.
  string = string + "px" //add px to the end of the string
  var elements = document.getElementsByClassName('fontSize');
  for (var i = 0; i < elements.length; i++) {
    elements[i].style.fontSize = string;
  }
  /*
  get element of fontSize, fontSize2, fontSize3 and set the style of fontSize to string. String
  would be whatever the integer is with px infront. For example, if integet is 15; then after being converted
  to string and having px added infront the value inside the string would be 15px. In other words setting the
  font size to 15px;
  */
}

function printContent(content) { //print contents in div
  var printContents = document.getElementById(content).innerHTML; //get the div content to be used
  var originalContents = document.body.innerHTML; //gets all the contents of the html

  document.body.innerHTML = printContents; //shows only the inner content of div

  window.print(); //print content

  document.body.innerHTML = originalContents; //show original html back
  document.getElementById("content").innerHTML = '<object type="text/html" data="lessonOne.html" ></object>';


}

function notesFunction() {

  if (press == 0) { //if first press display note div and change height of the main large div on secondPage
    document.getElementById("notesBox").style.display = "block";
    document.getElementById("printableArea").style.height = "40%";
    press++;
  } else { //if any other press remove note div from display and change height of the main large div on secondPage back
    document.getElementById("notesBox").style.display = "none";
    document.getElementById("printableArea").style.height = "80%";
    press = 0;
  }


}

function mobileFunction() {
  document.getElementById("locationBox").style.display = "none"; //get the div content to be used
  document.getElementById("peopleBox").style.display = "none"; //get the div content to be used
  document.getElementById("printableArea").style.margin = "75px auto auto auto"; //get the div content to be used
  document.getElementById("printableArea").style.float = "none"; //get the div content to be used



}
