var currentLesson = 0; //declare variable with default font size of 16px.



function loadPageNext() {



  if (currentLesson == 0) {
    document.getElementById("content").innerHTML = '<object type="text/html" data="lessonOne.html" ></object>';
    document.getElementById("peopleContent").innerHTML = '<object type="text/html" data="peopleOne.html" ></object>';
    document.getElementById("locationContent").innerHTML = '<object type="text/html" data="locationOne.html" ></object>';
    currentLesson = 1;
  } else if (currentLesson == 1) {
    document.getElementById("content").innerHTML = '<object type="text/html" data="lessonTwo.html" ></object>';
    document.getElementById("peopleContent").innerHTML = '<object type="text/html" data="peopleTwo.html" ></object>';
    document.getElementById("locationContent").innerHTML = '<object type="text/html" data="locationTwo.html" ></object>';
    currentLesson = 2;
  } else if (currentLesson == 2) {
    document.getElementById("content").innerHTML = '<object type="text/html" data="lessonThree.html" ></object>';
    document.getElementById("peopleContent").innerHTML = '<object type="text/html" data="peopleThree.html" ></object>';
    document.getElementById("locationContent").innerHTML = '<object type="text/html" data="locationThree.html" ></object>';
    currentLesson = 3;
  } else if (currentLesson == 3) {
    document.getElementById("content").innerHTML = '<object type="text/html" data="lessonFour.html" ></object>';
    document.getElementById("peopleContent").innerHTML = '<object type="text/html" data="peopleFour.html" ></object>';
    document.getElementById("locationContent").innerHTML = '<object type="text/html" data="locationFour.html" ></object>';
    currentLesson = 4;
  }

}

function loadPagePrevious() {
  if (currentLesson == 4) {
    document.getElementById("content").innerHTML = '<object type="text/html" data="lessonThree.html" ></object>';
    document.getElementById("peopleContent").innerHTML = '<object type="text/html" data="peopleThree.html" ></object>';
    document.getElementById("locationContent").innerHTML = '<object type="text/html" data="locationThree.html" ></object>';
    currentLesson = 3;
  } else if (currentLesson == 3) {
    document.getElementById("content").innerHTML = '<object type="text/html" data="lessonTwo.html" ></object>';
    document.getElementById("peopleContent").innerHTML = '<object type="text/html" data="peopleTwo.html" ></object>';
    document.getElementById("locationContent").innerHTML = '<object type="text/html" data="locationTwo.html" ></object>';
    currentLesson = 2;
  } else if (currentLesson == 2) {
    document.getElementById("content").innerHTML = '<object type="text/html" data="lessonOne.html" ></object>';
    document.getElementById("peopleContent").innerHTML = '<object type="text/html" data="peopleOne.html" ></object>';
    document.getElementById("locationContent").innerHTML = '<object type="text/html" data="locationOne.html" ></object>';
    currentLesson = 1;
  }

}
