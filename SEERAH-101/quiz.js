var currentQuestion = 0; //current question number
$("#questionText").html(".");//default load
$("#answerAtext").html(".");
$("#answerBtext").html(".");
$("#answerCtext").html(".");
$("#answerDtext").html(".");




function loadQuestionNext() { //load next question

  if (currentQuestion == 0) { //if not displaying quesstion display question 1
    resetColor();
    $("#questionText").html("When and to whom was Prophet Muhammad Born?");
    $("#answerAtext").html("Prophet Muhammad was born around 570 CE to Abdullah and Aminah.");
    $("#answerBtext").html("Prophet Muhammad was born around 470 CE to Abdullah and Isha.");
    $("#answerCtext").html("Prophet Muhammad was born around 670 CE to Aminah and Abdullah.");
    $("#answerDtext").html("Prophet Muhammad was born around 370 CE to Aminah and Al-Muttalib.");
    currentQuestion = 1;
  } else if (currentQuestion == 1) { //if displaying question 1 display question 2
    resetColor();
    $("#questionText").html("Who were the Bedouin Arabs?");
    $("#answerAtext").html("The rightful rulers of the land");
    $("#answerBtext").html("Arabs that lived as nomads and took care of the Quraysh children to please Allah.");
    $("#answerCtext").html("Arabs that lived as nomads and took care of the Quraysh children for money");
    $("#answerDtext").html("Romans that lived as nomads and took care of the Quraysh children for money");
    currentQuestion = 2;
  } else if (currentQuestion == 2) { //if displaying question 2 display question 3
    resetColor();
    $("#questionText").html("Who was Halimah?");
    $("#answerAtext").html("The mother of Al-Muttalib");
    $("#answerBtext").html("Halimah and her wife are the eventual couple who take care of Prophet Muhammad");
    $("#answerCtext").html("The foster mother of Muhammad.");
    $("#answerDtext").html("The wife of Abdullah");
    currentQuestion = 3;
  } else if (currentQuestion == 3) { //if displaying question 3 display question 4
    resetColor();
    $("#questionText").html("What did Halimah find when returning home?");
    $("#answerAtext").html("Her house burnt down.");
    $("#answerBtext").html("Lush grass and wild animals.");
    $("#answerCtext").html("Her other children.");
    $("#answerDtext").html("Gabriel.");
    currentQuestion = 4;
  } else if (currentQuestion == 4) { //if displaying question 4 display question 5
    resetColor();
    $("#questionText").html("Who is Gabriel?");
    $("#answerAtext").html("Zamzam water sales man.");
    $("#answerBtext").html("The angel sent by god to retrieve Muhammad to cure his blod clot");
    $("#answerCtext").html("Al-Muttalib's messenger.");
    $("#answerDtext").html("The angel that was sent by god to cure Muhammad of his blood clot");
    currentQuestion = 5;
  } else if (currentQuestion == 5) { //if displaying question 5 display question 6
    resetColor();
    $("#questionText").html("Around what age did Muhammad return to Aminah?");
    $("#answerAtext").html("Around 6 years old.");
    $("#answerBtext").html("Around 2 years old.");
    $("#answerCtext").html("Around 8 years old.");
    $("#answerDtext").html("Around 10 years old.");
    currentQuestion = 6;
  } else if (currentQuestion == 6) { //if displaying question 6 display question 7
    resetColor();
    $("#questionText").html("Who was Mahmud?");
    $("#answerAtext").html("Abraha's lead elephant");
    $("#answerBtext").html("Al-mutallibs brother");
    $("#answerCtext").html("Muhammads best friend.");
    $("#answerDtext").html("Abraha's slave.");
    currentQuestion = 7;
  } else if (currentQuestion == 7) { //if displaying question 7 display question 8
    resetColor();
    $("#questionText").html("Who was Bahira?");
    $("#answerAtext").html("A traveling salesman");
    $("#answerBtext").html(" A Jewish monk who knew Muhammad was a future prophet.");
    $("#answerCtext").html("A Christian monk who knew Muhammad was a future prophet.</q>");
    $("#answerDtext").html("An old friend of Abu Talib.");
    currentQuestion = 8;


  }


}

function loadQuestionPrevious() {
  if (currentQuestion == 8) { //if displaying question 8 display question 7
    resetColor();
    $("#questionText").html("Who was Mahmud?");
    $("#answerAtext").html("Abraha's lead elephant");
    $("#answerBtext").html("Al-mutallibs brother");
    $("#answerCtext").html("Muhammads best friend.");
    $("#answerDtext").html("Abraha's slave.");
    currentQuestion = 7;
  } else if (currentQuestion == 7) { //if displaying question 7 display question 6
    resetColor();
    $("#questionText").html("Around what age did Muhammad return to Aminah?");
    $("#answerAtext").html("Around 6 years old.");
    $("#answerBtext").html("Around 2 years old.");
    $("#answerCtext").html("Around 8 years old.");
    $("#answerDtext").html("Around 10 years old.");
    currentQuestion = 6;
  } else if (currentQuestion == 6) { //if displaying question 6 display question 5
    resetColor();
    $("#questionText").html("Who is Gabriel?");
    $("#answerAtext").html("Zamzam water sales man.");
    $("#answerBtext").html("The angel sent by god to retrieve Muhammad to cure his blod clot");
    $("#answerCtext").html("Al-Muttalib's messenger.");
    $("#answerDtext").html("The angel that was sent by god to cure Muhammad of his blood clot");
    currentQuestion = 5;
  } else if (currentQuestion == 5) { //if displaying question 5 display question 4
    resetColor();
    $("#questionText").html("What did Halimah find when returning home?");
    $("#answerAtext").html("Her house burnt down.");
    $("#answerBtext").html("Lush grass and wild animals.");
    $("#answerCtext").html("Her other children.");
    $("#answerDtext").html("Gabriel.");
    currentQuestion = 4;
  } else if (currentQuestion == 4) { //if displaying question 4 display question 3
    resetColor();
    $("#questionText").html("Who was Halimah?");
    $("#answerAtext").html("The mother of Al-Muttalib");
    $("#answerBtext").html("Halimah and her wife are the eventual couple who take care of Prophet Muhammad");
    $("#answerCtext").html("The foster mother of Muhammad.</q>");
    $("#answerDtext").html("The wife of Abdullah");
    currentQuestion = 3;
  } else if (currentQuestion == 3) { //if displaying question 3 display question 2
    resetColor();
    $("#questionText").html("Who were the Bedouin Arabs?");
    $("#answerAtext").html("The rightful rulers of the land");
    $("#answerBtext").html("Arabs that lived as nomads and took care of the Quraysh children to please Allah");
    $("#answerCtext").html("Arabs that lived as nomads and took care of the Quraysh children for money");
    $("#answerDtext").html("Romans that lived as nomads and took care of the Quraysh children for money");
    currentQuestion = 2;
  } else if (currentQuestion == 2) { //if displaying question 2 display question 1
    resetColor();
    $("#questionText").html("When and to whom was Prophet Muhammad Born?");
    $("#answerAtext").html("Prophet Muhammad was born around 570 CE to Abdullah and Aminah.");
    $("#answerBtext").html("Prophet Muhammad was born around 470 CE to Abdullah and Isha.");
    $("#answerCtext").html("Prophet Muhammad was born around 670 CE to Aminah and Abdullah.");
    $("#answerDtext").html("Prophet Muhammad was born around 370 CE to Aminah and Al-Muttalib.");
    currentQuestion = 1;
  }

}


function checkQuestion() { //check question when choice pressed
  if (currentQuestion == 1) { //if quesstion number 1 then these are the results
    document.getElementById("answerButtonKeysA").style.background = "Green";
    document.getElementById("answerButtonKeysB").style.background = "Red";
    document.getElementById("answerButtonKeysC").style.background = "Red";
    document.getElementById("answerButtonKeysD").style.background = "Red";
  } else if (currentQuestion == 2) { //if quesstion number 2 then these are the results
    document.getElementById("answerButtonKeysA").style.background = "Red";
    document.getElementById("answerButtonKeysB").style.background = "Red";
    document.getElementById("answerButtonKeysC").style.background = "Green";
    document.getElementById("answerButtonKeysD").style.background = "Red";
  } else if (currentQuestion == 3) { //if quesstion number 3 then these are the results
    document.getElementById("answerButtonKeysA").style.background = "Red";
    document.getElementById("answerButtonKeysB").style.background = "Red";
    document.getElementById("answerButtonKeysC").style.background = "Green";
    document.getElementById("answerButtonKeysD").style.background = "Red";
  } else if (currentQuestion == 4) { //if quesstion number 4 then these are the results
    document.getElementById("answerButtonKeysA").style.background = "Red";
    document.getElementById("answerButtonKeysB").style.background = "Green";
    document.getElementById("answerButtonKeysC").style.background = "Red";
    document.getElementById("answerButtonKeysD").style.background = "Red";
  } else if (currentQuestion == 5) { //if quesstion number 5 then these are the results
    document.getElementById("answerButtonKeysA").style.background = "Red";
    document.getElementById("answerButtonKeysB").style.background = "Red";
    document.getElementById("answerButtonKeysC").style.background = "Red";
    document.getElementById("answerButtonKeysD").style.background = "Green";
  } else if (currentQuestion == 6) { //if quesstion number 6 then these are the results
    document.getElementById("answerButtonKeysA").style.background = "Green";
    document.getElementById("answerButtonKeysB").style.background = "Red";
    document.getElementById("answerButtonKeysC").style.background = "Red";
    document.getElementById("answerButtonKeysD").style.background = "Red";
  } else if (currentQuestion == 7) { //if quesstion number 7 then these are the results
    document.getElementById("answerButtonKeysA").style.background = "Green";
    document.getElementById("answerButtonKeysB").style.background = "Red";
    document.getElementById("answerButtonKeysC").style.background = "Red";
    document.getElementById("answerButtonKeysD").style.background = "Red";
  } else if (currentQuestion == 8) { //if quesstion number 8 then these are the results
    document.getElementById("answerButtonKeysA").style.background = "Red";
    document.getElementById("answerButtonKeysB").style.background = "Red";
    document.getElementById("answerButtonKeysC").style.background = "Green";
    document.getElementById("answerButtonKeysD").style.background = "Red";
  }
}

function resetColor() { //reset color when next question displayed
  document.getElementById("answerButtonKeysA").style.background = "Grey";
  document.getElementById("answerButtonKeysB").style.background = "Grey";
  document.getElementById("answerButtonKeysC").style.background = "Grey";
  document.getElementById("answerButtonKeysD").style.background = "Grey";
}
