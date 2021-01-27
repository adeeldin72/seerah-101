var reviewLesson = 0;
$("#reviewTitle").html("."); //set default
$("#review1").html(".");
$("#review2").html(".");
$("#review3").html(".");
$("#review4").html(".");




function loadReviewNext() { //load next review



  if (reviewLesson == 0) { //load next question using jquery and javascript if reviewLesson = 0 load review 1
    $("#reviewTitle").html("Lesson 1");
    $("#review1").html("Prophet Muhammad was born around 570 CE to Abdullah and Aminah.");
    $("#review2").html("Abdullah, prophet Muhammad's father died before the birth of his son. Thus, Prophet Muhammad grew up without a father.");
    $("#review3").html("Prophet Muhammad was born in the year of the Elephat a year known for the event where in retaliation for his cathedral being defiled; the Yemen King Abraha set out to destroy the Ka'bah. However, Abraha's army was defeated by Allah.");
    $("#review4").html("Many events are reported to have occured during Prophet Muhammad's birth. Example, all the false idols in the Ka'bah fell down. Witnesses claim to have seen a light emanate from Aminah. Parts of the Persian rulers palace were destroyed it is believed 14 of his towers fell.");
    reviewLesson = 1;
  } else if (reviewLesson == 1) { // if reviewLesson = 1 load review 2
    $("#reviewTitle").html("Lesson 2");
    $("#review1").html("The Quraysh would entrust there kids to the Bedouin Arabs as they believed living in the desert led to a healther and nobler lifestyle. Likewise, the Bedoin Arabs used this as a source of income.");
    $("#review2").html("Belonging to one of these desert communities was Halimah bint Abi Dhu’ayb and her husband Harith ibn ‘Abd al –‘Uzzah the couple who would eventually take care of Muhammad.");
    $("#review3").html("Aminah was not able to find a Bedouin-Foster couple who would be wiling to take care of her orphaned son. Due to not being able to afford to pay the Bedouin Arabs.");
    $("#review4").html("Likewise, the Bedouin-Foster couples who came to Mecca were looking for someone who could support them financially. I.e both parties had there reasoning for taking care of a child");
    reviewLesson = 2;
  } else if (reviewLesson == 2) {  // if reviewLesson = 2 load review 3
    $("#reviewTitle").html("Lesson 2: Continued");
    $("#review1").html("Aminah could not afford to pay the Bedouin Arabs due to this she was not able to find a foster couple.");
    $("#review2").html("Halimah and her husband are the eventual couple who take care of Prophet Muhammad");
    $("#review3").html("After failing to find a child to take care of Halimah and her husband decide to take care of Muhammad. Her husband reportedly said, <q>There is no harm in doing so and perhaps Allah might bless us through him.</q>");
    $("#review4").html("In other words they agreed to take care of Prophet Muhammad beacause they believed they may get rewarded from god");
    reviewLesson = 3;
  } else if (reviewLesson == 3) {  // if reviewLesson = 3 load review 4
    $("#reviewTitle").html("Lesson 2: Continued");
    $("#review1").html("Halimah already had hardships which is why she went to find a child to take care of, however, when she got back home from Mecca many good fortunes began happening for Halimah and her husband.");
    $("#review2").html("For example, upon returning to their lands what they found waiting for them was lush grass and the wild animals returning, when they left there were barren lands that caused the wild animals to leave");
    $("#review3").html("Muhammad stayed with Halimah and had several foster brothers and sisters and would regularly visit Aminah for 4-5 years");
    $("#review4").html("Originally Muhammad was supposed to go back to his biological family after 2 years however due to all the blessings Halimah and Harith were receiving they requested to keep Muhammad for some more time.");
    reviewLesson = 4;
  } else if (reviewLesson == 4) {  // if reviewLesson = 4 load review 5
    $("#reviewTitle").html("Lesson 2: Continued");
    $("#review1").html("During his final years of living with Halimah and Harith an incident happened involving Muhammad, which the prophet would narrate himself.");
    $("#review2").html("<q>Two men in white clothes came to me with a golden basin full of snow. They rook me and split open my body, then they took my heart and split it open and took out from it a black clot which they flung away. Then they washed my heart and my body with that snow until they made them pure…</q>");
    $("#review3").html("Somehow Muhammad ended up with his grandfather Abd al-Muttalib.");
    $("#review4").html("This event caused the eventual return of Muhammad to his mother");
    reviewLesson = 5;
  } else if (reviewLesson == 5) {  // if reviewLesson = 5 load review 6
    $("#reviewTitle").html("Lesson 3:");
    $("#review1").html("Around 6 years old after returning to Aminah and living with her for sometime, Aminah decided to take Muhammad to visit her relatives in Yathrib while also wanting to visit her late husbands grave");
    $("#review2").html("Muhammad spent this time visiting his Kazraji (Banu Khazraj) relatives and enjoyed the company of his distant kinsmen by learning how to swim and fly kites. However, on the return journey Aminah passed away from an illness");
    $("#review3").html("Muhammad stayed with Halimah and had several foster brothers and sisters and would regularly visit Aminah for 4-5 years");
    $("#review4").html("Abd al-Muttalib brought Muhammad back to Mecca and treated him with more passion than his own children and made sure he never experienced loneliness. Sadly, though this relationship aswell ended abruptly after 2 years when Abd al-Muttalib passed away at the age of 81.");
    reviewLesson = 6;
  } else if (reviewLesson == 6) {  // if reviewLesson = 6 load review 7
    $("#reviewTitle").html("Lesson 4");
    $("#review1").html("Abu Talib took care of Muhammad begining in his teenage years");
    $("#review2").html("Muhammad worked as a shepherd to support his uncle as they were not financially well off");
    $("#review3").html("Working as a shepherd Muhammad naturally would be required to be humble doing repetitive tasks such as serving sheep, delivering baby sheep and guarding them from predators, would require him to remove pride and arrogance and become more humble.");
    $("#review4").html("At the age of 12, Muhammad went on a trade journey, I.e. a commercial caravan, to Syria with his uncle Abu Talib.");
    reviewLesson = 7;
  } else if (reviewLesson == 7) {  // if reviewLesson = 7 load review 8
    $("#reviewTitle").html("Lesson 4: Continued");
    $("#review1").html("Acompayning Muhammad on this trip was the young Abu Bakr and Bilal whom Muhammad would one day form a deep bond with lasting throughout their adult life.");
    $("#review2").html(" As the men neared Syria a Christian monk named Bahira noticed that the world seemed to be following the caravan. The clouds would be following them and when they stopped to rest a tree shifted to shade them. Intrigued by the mysterious travellers, Bahira invited the group to dinner in order to find the special person in the caravan causing all this.");
    $("#review3").html("Bahira realizing all the signs of the prophet is reported saying to Abu Talib, <q> When you appeared from the direction of the Aqabah all stones and trees prostrated themselves, which they never do except for a prophet. I can also recognize him by the seal of the prophethood which is below his shoulder, like an apple. We have found this in our books.</q>");
    $("#review4").html("Bahira urged Abu Talib to return Muhammad to Mecca fearing what the Romans and Jews may do.");

  }


}

function loadReviewPrevious() { //load previous review
  if (reviewLesson == 7) { //if reviewLesson = 7 load review 7
    $("#reviewTitle").html("Lesson 4");
    $("#review1").html("Abu Talib took care of Muhammad begining in his teenage years");
    $("#review2").html("Muhammad worked as a shepherd to support his uncle as they were not financially well off");
    $("#review3").html("Working as a shepherd Muhammad naturally would be required to be humble doing repetitive tasks such as serving sheep, delivering baby sheep and guarding them from predators, would require him to remove pride and arrogance and become more humble.");
    $("#review4").html("At the age of 12, Muhammad went on a trade journey, I.e. a commercial caravan, to Syria with his uncle Abu Talib.");
    reviewLesson = 6;
  } else if (reviewLesson == 6) { //if reviewLesson = 6 load review 6
    $("#reviewTitle").html("Lesson 3:");
    $("#review1").html("Around 6 years old after returning to Aminah and living with her for sometime, Aminah decided to take Muhammad to visit her relatives in Yathrib while also wanting to visit her late husbands grave");
    $("#review2").html("Muhammad spent this time visiting his Kazraji (Banu Khazraj) relatives and enjoyed the company of his distant kinsmen by learning how to swim and fly kites. However, on the return journey Aminah passed away from an illness");
    $("#review3").html("Muhammad stayed with Halimah and had several foster brothers and sisters and would regularly visit Aminah for 4-5 years");
    $("#review4").html("Abd al-Muttalib brought Muhammad back to Mecca and treated him with more passion than his own children and made sure he never experienced loneliness. Sadly, though this relationship aswell ended abruptly after 2 years when Abd al-Muttalib passed away at the age of 81.");
    reviewLesson = 5;
  } else if (reviewLesson == 5) { //if reviewLesson = 5 load review 5
    $("#reviewTitle").html("Lesson 2: Continued");
    $("#review1").html("During his final years of living with Halimah and Harith an incident happened involving Muhammad, which the prophet would narrate himself.");
    $("#review2").html("<q>Two men in white clothes came to me with a golden basin full of snow. They rook me and split open my body, then they took my heart and split it open and took out from it a black clot which they flung away. Then they washed my heart and my body with that snow until they made them pure…</q>");
    $("#review3").html("Somehow Muhammad ended up with his grandfather Abd al-Muttalib.");
    $("#review4").html("This event caused the eventual return of Muhammad to his mother");
    reviewLesson = 4;
  } else if (reviewLesson == 4) { //if reviewLesson = 4 load review 4
    $("#reviewTitle").html("Lesson 2: Continued");
    $("#review1").html("Halimah already had hardships which is why she went to find a child to take care of, however, when she got back home from Mecca many good fortunes began happening for Halimah and her husband.");
    $("#review2").html("For example, upon returning to their lands what they found waiting for them was lush grass and the wild animals returning, when they left there were barren lands that caused the wild animals to leave");
    $("#review3").html("Muhammad stayed with Halimah and had several foster brothers and sisters and would regularly visit Aminah for 4-5 years");
    $("#review4").html("Originally Muhammad was supposed to go back to his biological family after 2 years however due to all the blessings Halimah and Harith were receiving they requested to keep Muhammad for some more time.");
    reviewLesson = 3;
  } else if (reviewLesson == 3) { //if reviewLesson = 3 load review 3
    $("#reviewTitle").html("Lesson 2: Continued");
    $("#review1").html("Aminah could not afford to pay the Bedouin Arabs due to this she was not able to find a foster couple.");
    $("#review2").html("Halimah and her husband are the eventual couple who take care of Prophet Muhammad");
    $("#review3").html("After failing to find a child to take care of Halimah and her husband decide to take care of Muhammad. Her husband reportedly said, <q>There is no harm in doing so and perhaps Allah might bless us through him.</q>");
    $("#review4").html("In other words they agreed to take care of Prophet Muhammad beacause they believed they may get rewarded from god");
    reviewLesson = 2;
  } else if (reviewLesson == 2) { //if reviewLesson = 2 load review 2
    $("#reviewTitle").html("Lesson 2");
    $("#review1").html("The Quraysh would entrust there kids to the Bedouin Arabs as they believed living in the desert led to a healther and nobler lifestyle. Likewise, the Bedoin Arabs used this as a source of income.");
    $("#review2").html("Belonging to one of these desert communities was Halimah bint Abi Dhu’ayb and her husband Harith ibn ‘Abd al –‘Uzzah the couple who would eventually take care of Muhammad.");
    $("#review3").html("Aminah was not able to find a Bedouin-Foster couple who would be wiling to take care of her orphaned son. Due to not being able to afford to pay the Bedouin Arabs.");
    $("#review4").html("Likewise, the Bedouin-Foster couples who came to Mecca were looking for someone who could support them financially. I.e both parties had there reasoning for taking care of a child");
    reviewLesson = 1;
  } else if (reviewLesson == 1) { //if reviewLesson = 1 load review 1
    $("#reviewTitle").html("Lesson 1");
    $("#review1").html("Prophet Muhammad was born around 570 CE to Abdullah and Aminah.");
    $("#review2").html("Abdullah, prophet Muhammad's father died before the birth of his son. Thus, Prophet Muhammad grew up without a father.");
    $("#review3").html("Prophet Muhammad was born in the year of the Elephat a year known for the event where in retaliation for his cathedral being defiled; the Yemen King Abraha set out to destroy the Ka'bah. However, Abraha's army was defeated by Allah.");
    $("#review4").html("Many events are reported to have occured during Prophet Muhammad's birth. Example, all the false idols in the Ka'bah fell down. Witnesses claim to have seen a light emanate from Aminah. Parts of the Persian rulers palace were destroyed it is believed 14 of his towers fell.");
  }

}

var intervalCounter; //holds timer information

function startTimer() { //start timer
  intervalCounter = setInterval(startPlay, 60000); //run function every 60 second i.e 1 minute.
}

var buttonPress = 0; //counts how many times the button was pressed

function startPlay() { // runs the next review function
    loadReviewNext();
  }



function stopPlay() { //function to stop the timer
  clearInterval(intervalCounter);
}

function pauseOrPlay() { //function that changes the button images and runs the correct function depending on current press
  if (buttonPress == 0) {
    startTimer(); //run start function
    buttonPress++; //add 1 to itself same as buttonPress = buttonPress + 1;
    document.getElementById("playButton").src = "./Images/pause.png"; //change image
  } else {
    stopPlay(); //run stop function
    document.getElementById("playButton").src = "./Images/play.png"; //change image
    buttonPress = 0;
  }

}
