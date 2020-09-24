var userr = JSON.parse(window.localStorage.getItem('pubnubUser')).id;
userr = userr + "i"; 
var name = JSON.parse(localStorage.getItem(userr)).name;
var title = JSON.parse(localStorage.getItem(userr)).title;
var propic = JSON.parse(localStorage.getItem(userr)).propic;
var gameOne = null;
var gameTwo = null;
var gameThree = null;
var gameFour = null;
var hostUserBackup = null;
var waitingSlots = [document.getElementById("newPlayOne"), document.getElementById("newPlayTwo"), document.getElementById("newPlayThree"), document.getElementById("newPlayFour"), document.getElementById("newPlayFive"), document.getElementById("newPlaySix")];
var waitingSlotsInner = [document.getElementById("newPlayOneInner"), document.getElementById("newPlayTwoInner"), document.getElementById("newPlayThreeInner"), document.getElementById("newPlayFourInner"), document.getElementById("newPlayFiveInner"), document.getElementById("newPlaySixInner")];
var u = 0;
var numnum = 0;
var chat;
var insurance;
var sellingHands;

function joiningGameOne() {
	document.getElementById("heading").innerHTML = "Wait for Players";
	document.getElementById("joinGame").style.display = "none";
	document.getElementById("waitRoom").style.display = "block";
	document.getElementById("heading").style.left = "555px";
	numnum = parseInt(gameOne.numOfPlayers);
	var r = 6;
	hostUserBackup = gameOne.host.userr;
	while (r >= gameOne.numOfPlayers) {
		waitingSlots[(r-1)].style.backgroundColor = "gray";
		waitingSlotsInner[(r-1)].style.display = "none";
		r = r - 1;
	}
	joiningGame("one");
} 

function joiningGameTwo() {
	document.getElementById("heading").innerHTML = "Wait for Players";
	document.getElementById("joinGame").style.display = "none";
	document.getElementById("waitRoom").style.display = "block";
	document.getElementById("heading").style.left = "555px";
	numnum = parseInt(gameTwo.numOfPlayers);
	var r = 6;
	hostUserBackup = gameTwo.host.userr;
	while (r >= gameTwo.numOfPlayers) {
		waitingSlots[(r-1)].style.backgroundColor = "gray";
		waitingSlotsInner[(r-1)].style.display = "none";
		r = r - 1;
	}
	joiningGame("two");
}

function joiningGameThree() {
	document.getElementById("heading").innerHTML = "Wait for Players";
	document.getElementById("joinGame").style.display = "none";
	document.getElementById("waitRoom").style.display = "block";
	document.getElementById("heading").style.left = "555px";
	numnum = parseInt(gameThree.numOfPlayers);
	var r = 6;
	hostUserBackup = gameThree.host.userr;
	while (r >= gameThree.numOfPlayers) {
		waitingSlots[(r-1)].style.backgroundColor = "gray";
		waitingSlotsInner[(r-1)].style.display = "none";
		r = r - 1;
	}
	joiningGame("three");
}

function joiningGameFour() {
	document.getElementById("heading").innerHTML = "Wait for Players";
	document.getElementById("joinGame").style.display = "none";
	document.getElementById("waitRoom").style.display = "block";
	document.getElementById("heading").style.left = "555px";
	numnum = parseInt(gameFour.numOfPlayers);
	var r = 6;
	hostUserBackup = gameFour.host.userr;
	while (r >= gameFour.numOfPlayers) {
		waitingSlots[(r-1)].style.backgroundColor = "gray";
		waitingSlotsInner[(r-1)].style.display = "none";
		r = r - 1;
	}
	joiningGame("four");
}



function playerReady() {
	pubnub.publish({
    channel : 'availableGames',
    message : JSON.stringify({userr:userr, readyy:true, name:name, propic:propic, title:title})
	});
	document.getElementById("playOneReady").style.backgroundColor = "#228B22";
	document.getElementById("playOneReadyText").innerHTML = "Ready";
}

window.onload = function(){
	/* while ((document.getElementById("ref").src.slice(u)).includes("/")) {
		u += 1;
	} */
	if (document.getElementById("hostAvatarPicGameOne").src.includes("elaphant.jpg")) {
		document.getElementById("hostAvatarPicGameOne").style.bottom = "2px";
		document.getElementById("hostAvatarPicGameOne").style.width = "200%";
		document.getElementById("hostAvatarPicGameOne").style.left = "-40px";
		document.getElementById("hostAvatarPicGameOne").style.height = "120%";
	} else if (document.getElementById("hostAvatarPicGameOne").src.includes("blankAvatar.jpg")) {
		document.getElementById("hostAvatarPicGameOne").style.bottom = "8px";
	} else if (document.getElementById("hostAvatarPicGameOne").src.includes("steve.jpg")) {
		document.getElementById("hostAvatarPicGameOne").style.left = "-18px";
		document.getElementById("hostAvatarPicGameOne").style.bottom = "15px";
		document.getElementById("hostAvatarPicGameOne").style.width = "140%";
		document.getElementById("hostAvatarPicGameOne").style.height = "130%";
	} else if (document.getElementById("hostAvatarPicGameOne").src.includes("nixon.jpg")) {
		document.getElementById("hostAvatarPicGameOne").style.bottom = "13px";
		document.getElementById("hostAvatarPicGameOne").style.width = "110%";
		document.getElementById("hostAvatarPicGameOne").style.height = "130%";
		document.getElementById("hostAvatarPicGameOne").style.left = "-3px";
	} else if (document.getElementById("hostAvatarPicGameOne").src.includes("spiderman.jpg")) {
		document.getElementById("hostAvatarPicGameOne").style.width = "130%";
	} else if (document.getElementById("hostAvatarPicGameOne").src.includes("loki.jpg")) {
		document.getElementById("hostAvatarPicGameOne").style.width = "150%";
		document.getElementById("hostAvatarPicGameOne").style.height = "120%";
		document.getElementById("hostAvatarPicGameOne").style.left = "-20px";
	} else if (document.getElementById("hostAvatarPicGameOne").src.includes("riskPieces.jpg")) {
		document.getElementById("hostAvatarPicGameOne").style.bottom = "28px";
		document.getElementById("hostAvatarPicGameOne").style.width = "220%";
		document.getElementById("hostAvatarPicGameOne").style.height = "140%";
		document.getElementById("hostAvatarPicGameOne").style.left = "-55px";
	} else if (document.getElementById("hostAvatarPicGameOne").src.includes("pikachu.jpg")) {
		document.getElementById("hostAvatarPicGameOne").style.bottom = "3px";
		document.getElementById("hostAvatarPicGameOne").style.left = "3px";
	} else if (document.getElementById("hostAvatarPicGameOne").src.includes("yoda.jpg")) {
		document.getElementById("hostAvatarPicGameOne").style.width = "150%";
		document.getElementById("hostAvatarPicGameOne").style.left = "-15px";
	}
	if (document.getElementById("hostAvatarPicGameTwo").src.includes("elaphant.jpg")) {
		document.getElementById("hostAvatarPicGameTwo").style.bottom = "2px";
		document.getElementById("hostAvatarPicGameTwo").style.width = "200%";
		document.getElementById("hostAvatarPicGameTwo").style.left = "-40px";
		document.getElementById("hostAvatarPicGameTwo").style.height = "120%";
	} else if (document.getElementById("hostAvatarPicGameTwo").src.includes("blankAvatar.jpg")) {
		document.getElementById("hostAvatarPicGameTwo").style.bottom = "8px";
	} else if (document.getElementById("hostAvatarPicGameTwo").src.includes("steve.jpg")) {
		document.getElementById("hostAvatarPicGameTwo").style.left = "-18px";
		document.getElementById("hostAvatarPicGameTwo").style.bottom = "15px";
		document.getElementById("hostAvatarPicGameTwo").style.width = "140%";
		document.getElementById("hostAvatarPicGameTwo").style.height = "130%";
	} else if (document.getElementById("hostAvatarPicGameTwo").src.includes("nixon.jpg")) {
		document.getElementById("hostAvatarPicGameTwo").style.bottom = "13px";
		document.getElementById("hostAvatarPicGameTwo").style.width = "110%";
		document.getElementById("hostAvatarPicGameTwo").style.height = "130%";
		document.getElementById("hostAvatarPicGameTwo").style.left = "-3px";
	} else if (document.getElementById("hostAvatarPicGameTwo").src.includes("spiderman.jpg")) {
		document.getElementById("hostAvatarPicGameTwo").style.width = "130%";
	} else if (document.getElementById("hostAvatarPicGameTwo").src.includes("loki.jpg")) {
		document.getElementById("hostAvatarPicGameTwo").style.width = "150%";
		document.getElementById("hostAvatarPicGameTwo").style.height = "120%";
		document.getElementById("hostAvatarPicGameTwo").style.left = "-20px";
	} else if (document.getElementById("hostAvatarPicGameTwo").src.includes("riskPieces.jpg")) {
		document.getElementById("hostAvatarPicGameTwo").style.bottom = "28px";
		document.getElementById("hostAvatarPicGameTwo").style.width = "220%";
		document.getElementById("hostAvatarPicGameTwo").style.height = "140%";
		document.getElementById("hostAvatarPicGameTwo").style.left = "-55px";
	} else if (document.getElementById("hostAvatarPicGameTwo").src.includes("pikachu.jpg")) {
		document.getElementById("hostAvatarPicGameTwo").style.bottom = "3px";
		document.getElementById("hostAvatarPicGameTwo").style.left = "3px";
	} else if (document.getElementById("hostAvatarPicGameTwo").src.includes("yoda.jpg")) {
		document.getElementById("hostAvatarPicGameTwo").style.width = "150%";
		document.getElementById("hostAvatarPicGameTwo").style.left = "-15px";
	}
	if (document.getElementById("hostAvatarPicGameThree").src.includes("elaphant.jpg")) {
		document.getElementById("hostAvatarPicGameThree").style.bottom = "2px";
		document.getElementById("hostAvatarPicGameThree").style.width = "200%";
		document.getElementById("hostAvatarPicGameThree").style.left = "-40px";
		document.getElementById("hostAvatarPicGameThree").style.height = "120%";
	} else if (document.getElementById("hostAvatarPicGameThree").src.includes("blankAvatar.jpg")) {
		document.getElementById("hostAvatarPicGameThree").style.bottom = "8px";
	} else if (document.getElementById("hostAvatarPicGameThree").src.includes("steve.jpg")) {
		document.getElementById("hostAvatarPicGameThree").style.left = "-18px";
		document.getElementById("hostAvatarPicGameThree").style.bottom = "15px";
		document.getElementById("hostAvatarPicGameThree").style.width = "140%";
		document.getElementById("hostAvatarPicGameThree").style.height = "130%";
	} else if (document.getElementById("hostAvatarPicGameThree").src.includes("nixon.jpg")) {
		document.getElementById("hostAvatarPicGameThree").style.bottom = "13px";
		document.getElementById("hostAvatarPicGameThree").style.width = "110%";
		document.getElementById("hostAvatarPicGameThree").style.height = "130%";
		document.getElementById("hostAvatarPicGameThree").style.left = "-3px";
	} else if (document.getElementById("hostAvatarPicGameThree").src.includes("spiderman.jpg")) {
		document.getElementById("hostAvatarPicGameThree").style.width = "130%";
	} else if (document.getElementById("hostAvatarPicGameThree").src.includes("loki.jpg")) {
		document.getElementById("hostAvatarPicGameThree").style.width = "150%";
		document.getElementById("hostAvatarPicGameThree").style.height = "120%";
		document.getElementById("hostAvatarPicGameThree").style.left = "-20px";
	} else if (document.getElementById("hostAvatarPicGameThree").src.includes("riskPieces.jpg")) {
		document.getElementById("hostAvatarPicGameThree").style.bottom = "28px";
		document.getElementById("hostAvatarPicGameThree").style.width = "220%";
		document.getElementById("hostAvatarPicGameThree").style.height = "140%";
		document.getElementById("hostAvatarPicGameThree").style.left = "-55px";
	} else if (document.getElementById("hostAvatarPicGameThree").src.includes("pikachu.jpg")) {
		document.getElementById("hostAvatarPicGameThree").style.bottom = "3px";
		document.getElementById("hostAvatarPicGameThree").style.left = "3px";
	} else if (document.getElementById("hostAvatarPicGameThree").src.includes("yoda.jpg")) {
		document.getElementById("hostAvatarPicGameThree").style.width = "150%";
		document.getElementById("hostAvatarPicGameThree").style.left = "-15px";
	}
	if (document.getElementById("hostAvatarPicGameFour").src.includes("elaphant.jpg")) {
		document.getElementById("hostAvatarPicGameFour").style.bottom = "2px";
		document.getElementById("hostAvatarPicGameFour").style.width = "200%";
		document.getElementById("hostAvatarPicGameFour").style.left = "-40px";
		document.getElementById("hostAvatarPicGameFour").style.height = "120%";
	} else if (document.getElementById("hostAvatarPicGameFour").src.includes("blankAvatar.jpg")) {
		document.getElementById("hostAvatarPicGameFour").style.bottom = "8px";
	} else if (document.getElementById("hostAvatarPicGameFour").src.includes("steve.jpg")) {
		document.getElementById("hostAvatarPicGameFour").style.left = "-18px";
		document.getElementById("hostAvatarPicGameFour").style.bottom = "15px";
		document.getElementById("hostAvatarPicGameFour").style.width = "140%";
		document.getElementById("hostAvatarPicGameFour").style.height = "130%";
	} else if (document.getElementById("hostAvatarPicGameFour").src.includes("nixon.jpg")) {
		document.getElementById("hostAvatarPicGameFour").style.bottom = "13px";
		document.getElementById("hostAvatarPicGameFour").style.width = "110%";
		document.getElementById("hostAvatarPicGameFour").style.height = "130%";
		document.getElementById("hostAvatarPicGameFour").style.left = "-3px";
	} else if (document.getElementById("hostAvatarPicGameFour").src.includes("spiderman.jpg")) {
		document.getElementById("hostAvatarPicGameFour").style.width = "130%";
	} else if (document.getElementById("hostAvatarPicGameFour").src.includes("loki.jpg")) {
		document.getElementById("hostAvatarPicGameFour").style.width = "150%";
		document.getElementById("hostAvatarPicGameFour").style.height = "120%";
		document.getElementById("hostAvatarPicGameFour").style.left = "-20px";
	} else if (document.getElementById("hostAvatarPicGameFour").src.includes("riskPieces.jpg")) {
		document.getElementById("hostAvatarPicGameFour").style.bottom = "28px";
		document.getElementById("hostAvatarPicGameFour").style.width = "220%";
		document.getElementById("hostAvatarPicGameFour").style.height = "140%";
		document.getElementById("hostAvatarPicGameFour").style.left = "-55px";
	} else if (document.getElementById("hostAvatarPicGameFour").src.includes("pikachu.jpg")) {
		document.getElementById("hostAvatarPicGameFour").style.bottom = "3px";
		document.getElementById("hostAvatarPicGameFour").style.left = "3px";
	} else if (document.getElementById("hostAvatarPicGameFour").src.includes("yoda.jpg")) {
		document.getElementById("hostAvatarPicGameFour").style.width = "150%";
		document.getElementById("hostAvatarPicGameFour").style.left = "-15px";
	}
	publishRequest();
	updateSlots();
}

const pubnub = new PubNub({
  publishKey: "pub-c-32276b33-4bb1-4f52-b507-84269bbd2b0b",
  subscribeKey: "sub-c-67c10818-beed-11ea-a57f-4e41fc185ce6",
  uuid: userr
});

pubnub.subscribe({
  channels: ['availableGames'],
  withPresence: true
});

function joiningGame(game) {
	document.getElementById("leaveGame").style.display = "block";
	if (game == "one") {
		pubnub.publish({
		channel : 'availableGames',
		message : JSON.stringify({userr:userr, title:title, name:name, propic:propic, joining:true, host:gameOne.host.userr})
		});
		//from here to
		document.getElementById("textNumOfPlayers").innerHTML = gameOne.numOfPlayers + " player game";
		if (gameOne.gemWin == true) {
			document.getElementById("textEndGame").innerHTML = gameOne.gemsToWin + " gems to win the game";
		} else if (gameOne.roundWin == true) {
			document.getElementById("textEndGame").innerHTML = gameOne.roundsToWin + " rounds to win the game";
		} else if (gameOne.callToWin == true) {
			document.getElementById("textEndGame").innerHTML = "Host will call the game to signify three rounds left";
		}
		if (gameOne.sellingHands == true) {
			sellingHands = true;
			document.getElementById("textSellingHands").innerHTML = "Selling hands is allowed";
		} else {
			sellingHands = false;
			document.getElementById("textSellingHands").innerHTML = "Selling hands is not allowed";
		}
		if (gameOne.insurance == true) {
			insurance = true;
			document.getElementById("textInsurance").innerHTML = "Insurance is allowed";
		} else {
			insurance = false;
			document.getElementById("textInsurance").innerHTML = "Insurance is not allowed";
		}
		if (gameOne.chat == true) {
			chat = true;
			document.getElementById("textChat").innerHTML = "Chat is included";
		} else {
			chat = false;
			document.getElementById("textChat").innerHTML = "Chat is not included";
		}
		document.getElementById("hostAvatarPic").src = gameOne.host.propic;
		document.getElementById("hostName").innerHTML = gameOne.host.name;
		document.getElementById("hostTitle").innerHTML = gameOne.host.title;
		document.getElementById("playOneAvatarPic").src = propic;
		document.getElementById("playOneName").innerHTML = name;
		document.getElementById("playOneTitle").innerHTML = title;
		document.getElementById("playOneReadyText").innerHTML = "Ready?";
		//here
	} else if (game == "two") {
		pubnub.publish({
		channel : 'availableGames',
		message : JSON.stringify({userr:userr, title:title, name:name, propic:propic, joining:true, host:gameTwo.host.userr})
		});
		//from here to
		document.getElementById("textNumOfPlayers").innerHTML = gameTwo.numOfPlayers + " player game";
		if (gameTwo.gemWin == true) {
			document.getElementById("textEndGame").innerHTML = gameTwo.gemsToWin + " gems to win the game";
		} else if (gameTwo.roundWin == true) {
			document.getElementById("textEndGame").innerHTML = gameTwo.roundsToWin + " rounds to win the game";
		} else if (gameTwo.callToWin == true) {
			document.getElementById("textEndGame").innerHTML = "Host will call the game to signify three rounds left";
		}
		if (gameTwo.sellingHands == true) {
			sellingHands = true;
			document.getElementById("textSellingsHands").innerHTML = "Selling hands is allowed";
		} else {
			sellingHands = false;
			document.getElementById("textSellingHands").innerHTML = "Selling hands is not allowed";
		}
		if (gameTwo.insurance == true) {
			insurance = true;
			document.getElementById("textInsurance").innerHTML = "Insurance is allowed";
		} else {
			insurance = false;
			document.getElementById("textInsurance").innerHTML = "Insurance is not allowed";
		}
		if (gameTwo.chat == true) {
			chat = true;
			document.getElementById("textChat").innerHTML = "Chat is included";
		} else {
			chat = false;
			document.getElementById("textChat").innerHTML = "Chat is not included";
		}
		document.getElementById("hostAvatarPic").src = gameTwo.host.propic;
		document.getElementById("hostName").innerHTML = gameTwo.host.name;
		document.getElementById("hostTitle").innerHTML = gameTwo.host.title;
		document.getElementById("playOneAvatarPic").src = propic;
		document.getElementById("playOneName").innerHTML = name;
		document.getElementById("playOneTitle").innerHTML = title;
		document.getElementById("playOneReadyText").innerHTML = "Ready?";
		//here
	} else if (game == "three") {
		pubnub.publish({
		channel : 'availableGames',
		message : JSON.stringify({userr:userr, title:title, name:name, propic:propic, joining:true, host:gameThree.host.userr})
		});
		//from here to
		document.getElementById("textNumOfPlayers").innerHTML = gameThree.numOfPlayers + " player game";
		if (gameThree.gemWin == true) {
			document.getElementById("textEndGame").innerHTML = gameThree.gemsToWin + " gems to win the game";
		} else if (gameThree.roundWin == true) {
			document.getElementById("textEndGame").innerHTML = gameThree.roundsToWin + " rounds to win the game";
		} else if (gameThree.callToWin == true) {
			document.getElementById("textEndGame").innerHTML = "Host will call the game to signify three rounds left";
		}
		if (gameThree.sellingHands == true) {
			sellingHands = true;
			document.getElementById("textSellingsHands").innerHTML = "Selling hands is allowed";
		} else {
			sellingHands = false;
			document.getElementById("textSellingHands").innerHTML = "Selling hands is not allowed";
		}
		if (gameThree.insurance == true) {
			insurance = true;
			document.getElementById("textInsurance").innerHTML = "Insurance is allowed";
		} else {
			insurance = false;
			document.getElementById("textInsurance").innerHTML = "Insurance is not allowed";
		}
		if (gameThree.chat == true) {
			chat = true;
			document.getElementById("textChat").innerHTML = "Chat is included";
		} else {
			chat = false;
			document.getElementById("textChat").innerHTML = "Chat is not included";
		}
		document.getElementById("hostAvatarPic").src = gameThree.host.propic;
		document.getElementById("hostName").innerHTML = gameThree.host.name;
		document.getElementById("hostTitle").innerHTML = gameThree.host.title;
		document.getElementById("playOneAvatarPic").src = propic;
		document.getElementById("playOneName").innerHTML = name;
		document.getElementById("playOneTitle").innerHTML = title;
		document.getElementById("playOneReadyText").innerHTML = "Ready?";
		//here
	} else if (game == "four") {
		pubnub.publish({
		channel : 'availableGames',
		message : JSON.stringify({userr:userr, title:title, name:name, propic:propic, joining:true, host:gameFour.host.userr})
		});
		//from here to
		document.getElementById("textNumOfPlayers").innerHTML = gameFour.numOfPlayers + " player game";
		if (gameFour.gemWin == true) {
			document.getElementById("textEndGame").innerHTML = gameFour.gemsToWin + " gems to win the game";
		} else if (gameFour.roundWin == true) {
			document.getElementById("textEndGame").innerHTML = gameFour.roundsToWin + " rounds to win the game";
		} else if (gameFour.callToWin == true) {
			document.getElementById("textEndGame").innerHTML = "Host will call the game to signify three rounds left";
		}
		if (gameFour.sellingHands == true) {
			sellingHands = true;
			document.getElementById("textSellingsHands").innerHTML = "Selling hands is allowed";
		} else {
			sellingHands = false;
			document.getElementById("textSellingHands").innerHTML = "Selling hands is not allowed";
		}
		if (gameFour.insurance == true) {
			insurance = true;
			document.getElementById("textInsurance").innerHTML = "Insurance is allowed";
		} else {
			insurance = false;
			document.getElementById("textInsurance").innerHTML = "Insurance is not allowed";
		}
		if (gameFour.chat == true) {
			chat = true;
			document.getElementById("textChat").innerHTML = "Chat is included";
		} else {
			chat = false;
			document.getElementById("textChat").innerHTML = "Chat is not included";
		}
		document.getElementById("hostAvatarPic").src = gameFour.host.propic;
		document.getElementById("hostName").innerHTML = gameFour.host.name;
		document.getElementById("hostTitle").innerHTML = gameFour.host.title;
		document.getElementById("playOneAvatarPic").src = propic;
		document.getElementById("playOneName").innerHTML = name;
		document.getElementById("playOneTitle").innerHTML = title;
		document.getElementById("playOneReadyText").innerHTML = "Ready?";
		//here
	}
	if (document.getElementById("hostAvatarPic").src.includes("elaphant.jpg")) {
		document.getElementById("hostAvatarPic").style.bottom = "2px";
		document.getElementById("hostAvatarPic").style.width = "200%";
		document.getElementById("hostAvatarPic").style.left = "-40px";
		document.getElementById("hostAvatarPic").style.height = "120%";
	} else if (document.getElementById("hostAvatarPic").src.includes("blankAvatar.jpg")) {
		document.getElementById("hostAvatarPic").style.bottom = "8px";
	} else if (document.getElementById("hostAvatarPic").src.includes("steve.jpg")) {
		document.getElementById("hostAvatarPic").style.left = "-18px";
		document.getElementById("hostAvatarPic").style.bottom = "15px";
		document.getElementById("hostAvatarPic").style.width = "140%";
		document.getElementById("hostAvatarPic").style.height = "130%";
	} else if (document.getElementById("hostAvatarPic").src.includes("nixon.jpg")) {
		document.getElementById("hostAvatarPic").style.bottom = "13px";
		document.getElementById("hostAvatarPic").style.width = "110%";
		document.getElementById("hostAvatarPic").style.height = "130%";
		document.getElementById("hostAvatarPic").style.left = "-3px";
	} else if (document.getElementById("hostAvatarPic").src.includes("spiderman.jpg")) {
		document.getElementById("hostAvatarPic").style.width = "130%";
	} else if (document.getElementById("hostAvatarPic").src.includes("loki.jpg")) {
		document.getElementById("hostAvatarPic").style.width = "150%";
		document.getElementById("hostAvatarPic").style.height = "120%";
		document.getElementById("hostAvatarPic").style.left = "-20px";
	} else if (document.getElementById("hostAvatarPic").src.includes("riskPieces.jpg")) {
		document.getElementById("hostAvatarPic").style.bottom = "28px";
		document.getElementById("hostAvatarPic").style.width = "220%";
		document.getElementById("hostAvatarPic").style.height = "140%";
		document.getElementById("hostAvatarPic").style.left = "-55px";
	} else if (document.getElementById("hostAvatarPic").src.includes("pikachu.jpg")) {
		document.getElementById("hostAvatarPic").style.bottom = "3px";
		document.getElementById("hostAvatarPic").style.left = "3px";
	} else if (document.getElementById("hostAvatarPic").src.includes("yoda.jpg")) {
		document.getElementById("hostAvatarPic").style.width = "150%";
		document.getElementById("hostAvatarPic").style.left = "-15px";
	}
	updatePropics();
}

function proPics(source) {
	var hostyTwo;
	if (source.includes("blankAvatar.jpg")) {
		hostyTwo = "blankAvatar.jpg";
	} else if (source.includes("elaphant.jpg")) {
		hostyTwo = "elaphant.jpg";
	} else if (source.includes("steve.jpg")) {
		hostyTwo = "steve.jpg";
	} else if (source.includes("nixon.jpg")) {
		hostyTwo = "nixon.jpg";
	} else if (source.includes("spiderman.jpg")) {
		hostyTwo = "spiderman.jpg";
	} else if (source.includes("loki.jpg")) {
		hostyTwo = "loki.jpg";
	} else if (source.includes("mario.jpg")) {
		hostyTwo = "mario.jpg";
	} else if (source.includes("riskPieces.jpg")) {
		hostyTwo = "riskPieces.jpg";
	} else if (source.includes("loki.jpg")) {
		hostyTwo = "loki.jpg";
	} if (source.includes("pikachu.jpg")) {
		hostyTwo = "pikachu.jpg";
	} else if (source.includes("yoda.jpg")) {
		hostyTwo = "yoda.jpg";
	} else if (source.includes("thanos.jpg")) {
		hostyTwo = "thanos.jpg";
	}
	return hostyTwo;
}

pubnub.addListener({
	message: function(event) {
		console.log("message");
	    if (event.message != "request" && event.message != "one" && event.message != "two" && event.message != "three" && event.message != "four" && event.message != JSON.stringify(gameOne) && event.message != JSON.stringify(gameTwo) && event.message != JSON.stringify(gameThree) && event.message != JSON.stringify(gameFour)) {
			console.log(event.message);
			if (JSON.parse(event.message).startingGame == true && JSON.parse(event.message).hostUserStart == hostUserBackup) {
				console.log(JSON.parse(event.message).thePlayersIn);
				window.localStorage.setItem('gameStamp', JSON.parse(event.message).gameStamp);
				window.localStorage.setItem('thePlayersIn', JSON.parse(event.message).thePlayersIn);
				window.localStorage.setItem('hosting', false);
				window.localStorage.setItem('numOfPlayers', numnum);
				window.localStorage.setItem('sellingHands', JSON.stringify(sellingHands));
				window.localStorage.setItem('insurance', JSON.stringify(insurance));
				window.localStorage.setItem('chat', JSON.stringify(chat));
				var hosty;
				if (document.getElementById("hostAvatarPic").src.includes("blankAvatar.jpg")) {
					hosty = "blankAvatar.jpg";
				} else if (document.getElementById("hostAvatarPic").src.includes("elaphant.jpg")) {
					hosty = "elaphant.jpg";
				} else if (document.getElementById("hostAvatarPic").src.includes("steve.jpg")) {
					hosty = "steve.jpg";
				} else if (document.getElementById("hostAvatarPic").src.includes("nixon.jpg")) {
					hosty = "nixon.jpg";
				} else if (document.getElementById("hostAvatarPic").src.includes("spiderman.jpg")) {
					hosty = "spiderman.jpg";
				} else if (document.getElementById("hostAvatarPic").src.includes("loki.jpg")) {
					hosty = "loki.jpg";
				} else if (document.getElementById("hostAvatarPic").src.includes("mario.jpg")) {
					hosty = "mario.jpg";
				} else if (document.getElementById("hostAvatarPic").src.includes("riskPieces.jpg")) {
					hosty = "riskPieces.jpg";
				} else if (document.getElementById("hostAvatarPic").src.includes("loki.jpg")) {
					hosty = "loki.jpg";
				} if (document.getElementById("hostAvatarPic").src.includes("pikachu.jpg")) {
					hosty = "pikachu.jpg";
				} else if (document.getElementById("hostAvatarPic").src.includes("yoda.jpg")) {
					hosty = "yoda.jpg";
				} else if (document.getElementById("hostAvatarPic").src.includes("thanos.jpg")) {
					hosty = "thanos.jpg";
				}
				window.localStorage.setItem('hostInfo', JSON.stringify([hostUserBackup, document.getElementById("hostName").innerHTML, document.getElementById("hostTitle").innerHTML, hosty]));
				window.open("IncanGold.html", "_self");
			}
			if (JSON.parse(event.message).hostUser == hostUserBackup && JSON.parse(event.message).closingGame == true) {
					hostUserBackup = "";
					window.open("JoinGame.html","_self");
				}
			if (JSON.parse(event.message).hostTellLeave == true && JSON.parse(event.message).userr != userr) {
				console.log("host is saying, leave");
				console.log(JSON.stringify(JSON.parse(event.message).name));
				console.log(document.getElementById("playTwoName").innerHTML);
				console.log(document.getElementById("playTwoName").innerHTML == JSON.stringify(JSON.parse(event.message).name));
				console.log(document.getElementById("playTwoName").innerHTML == JSON.parse(event.message).name);
				var hostyOne;
				if (document.getElementById("hostAvatarPic").src.includes("blankAvatar.jpg")) {
					hostyOne = "blankAvatar.jpg";
				} else if (document.getElementById("hostAvatarPic").src.includes("elaphant.jpg")) {
					hostyOne = "elaphant.jpg";
				} else if (document.getElementById("hostAvatarPic").src.includes("steve.jpg")) {
					hostyOne = "steve.jpg";
				} else if (document.getElementById("hostAvatarPic").src.includes("nixon.jpg")) {
					hostyOne = "nixon.jpg";
				} else if (document.getElementById("hostAvatarPic").src.includes("spiderman.jpg")) {
					hostyOne = "spiderman.jpg";
				} else if (document.getElementById("hostAvatarPic").src.includes("loki.jpg")) {
					hostyOne = "loki.jpg";
				} else if (document.getElementById("hostAvatarPic").src.includes("mario.jpg")) {
					hostyOne = "mario.jpg";
				} else if (document.getElementById("hostAvatarPic").src.includes("riskPieces.jpg")) {
					hostyOne = "riskPieces.jpg";
				} else if (document.getElementById("hostAvatarPic").src.includes("loki.jpg")) {
					hostyOne = "loki.jpg";
				} if (document.getElementById("hostAvatarPic").src.includes("pikachu.jpg")) {
					hostyOne = "pikachu.jpg";
				} else if (document.getElementById("hostAvatarPic").src.includes("yoda.jpg")) {
					hostyOne = "yoda.jpg";
				} else if (document.getElementById("hostAvatarPic").src.includes("thanos.jpg")) {
					hostyOne = "thanos.jpg";
				}
				if (document.getElementById("playTwoName").innerHTML == JSON.parse(event.message).name && document.getElementById("playTwoTitle").innerHTML == JSON.parse(event.message).title && hostyOne == JSON.parse(event.message).propic) {
					console.log("playTwoOut");
					document.getElementById("playTwoAvatarPic").src = "";
					document.getElementById("playTwoAvatarPic").style.left = "0px";
					document.getElementById("playTwoAvatarPic").style.bottom = "0px";
					document.getElementById("playTwoName").innerHTML = "";
					document.getElementById("playTwoTitle").innerHTML = "";
					document.getElementById("playTwoReadyText").innerHTML = "Waiting...";
					document.getElementById("playTwoReady").style.backgroundColor = "gray";
				} else if (document.getElementById("playThreeName").innerHTML == JSON.parse(event.message).name && document.getElementById("playThreeTitle").innerHTML == JSON.parse(event.message).title && proPics(document.getElementById("playThreeAvatarPic").src) == JSON.parse(event.message).propic) {
					console.log("playThreeOut");
					document.getElementById("playThreeAvatarPic").src = "";
					document.getElementById("playThreeAvatarPic").style.left = "0px";
					document.getElementById("playThreeAvatarPic").style.bottom = "0px";
					document.getElementById("playThreeName").innerHTML = "";
					document.getElementById("playThreeTitle").innerHTML = "";
					document.getElementById("playThreeReadyText").innerHTML = "Waiting...";
					document.getElementById("playThreeReady").style.backgroundColor = "gray";
				} else if (document.getElementById("playFourName").innerHTML == JSON.parse(event.message).name && document.getElementById("playFourTitle").innerHTML == JSON.parse(event.message).title && proPics(document.getElementById("playFourAvatarPic").src) == JSON.parse(event.message).propic) {
					document.getElementById("playFourAvatarPic").src = "";
					document.getElementById("playFourAvatarPic").style.left = "0px";
					document.getElementById("playFourAvatarPic").style.bottom = "0px";
					document.getElementById("playFourName").innerHTML = "";
					document.getElementById("playFourTitle").innerHTML = "";
					document.getElementById("playFourReadyText").innerHTML = "Waiting...";
					document.getElementById("playFourReady").style.backgroundColor = "gray";
				} else if (document.getElementById("playFiveName").innerHTML == JSON.parse(event.message).name && document.getElementById("playFiveTitle").innerHTML == JSON.parse(event.message).title && proPics(document.getElementById("playFiveAvatarPic").src) == JSON.parse(event.message).propic) {
					document.getElementById("playFiveAvatarPic").src = "";
					document.getElementById("playFiveAvatarPic").style.left = "0px";
					document.getElementById("playFiveAvatarPic").style.bottom = "0px";
					document.getElementById("playFiveName").innerHTML = "";
					document.getElementById("playFiveTitle").innerHTML = "";
					document.getElementById("playFiveReadyText").innerHTML = "Waiting...";
					document.getElementById("playFiveReady").style.backgroundColor = "gray";
				} else if (document.getElementById("playSixName").innerHTML == JSON.parse(event.message).name && document.getElementById("playSixTitle").innerHTML == JSON.parse(event.message).title && proPics(document.getElementById("playSixAvatarPic").src) == JSON.parse(event.message).propic) {
					document.getElementById("playSixAvatarPic").src = "";
					document.getElementById("playSixAvatarPic").style.left = "0px";
					document.getElementById("playSixAvatarPic").style.bottom = "0px";
					document.getElementById("playSixName").innerHTML = "";
					document.getElementById("playSixTitle").innerHTML = "";
					document.getElementById("playSixReadyText").innerHTML = "Waiting...";
					document.getElementById("playSixReady").style.backgroundColor = "gray";
				}
			}
			if (JSON.parse(event.message).readyy == true && JSON.parse(event.message).userr != userr) {
				if (document.getElementById("playTwoName").innerHTML == JSON.parse(event.message).name && document.getElementById("playTwoTitle").innerHTML == JSON.parse(event.message).title && proPics(document.getElementById("playTwoAvatarPic").src) == JSON.parse(event.message).propic) {
					document.getElementById("playTwoReady").style.backgroundColor = "#228B22";
					document.getElementById("playTwoReadyText").innerHTML = "Ready";
				}
				if (document.getElementById("playThreeName").innerHTML == JSON.parse(event.message).name && document.getElementById("playThreeTitle").innerHTML == JSON.parse(event.message).title && proPics(document.getElementById("playThreeAvatarPic").src) == JSON.parse(event.message).propic) {
					document.getElementById("playThreeReady").style.backgroundColor = "#228B22";
					document.getElementById("playThreeReadyText").innerHTML = "Ready";
				}
				if (document.getElementById("playFourName").innerHTML == JSON.parse(event.message).name && document.getElementById("playFourTitle").innerHTML == JSON.parse(event.message).title && proPics(document.getElementById("playFourAvatarPic").src) == JSON.parse(event.message).propic) {
					document.getElementById("playFourReady").style.backgroundColor = "#228B22";
					document.getElementById("playFourReadyText").innerHTML = "Ready";
				}
				if (document.getElementById("playFiveName").innerHTML == JSON.parse(event.message).name && document.getElementById("playFiveTitle").innerHTML == JSON.parse(event.message).title && proPics(document.getElementById("playFiveAvatarPic").src) == JSON.parse(event.message).propic) {
					document.getElementById("playFiveReady").style.backgroundColor = "#228B22";
					document.getElementById("playFiveReadyText").innerHTML = "Ready";
				}
				if (document.getElementById("playSixName").innerHTML == JSON.parse(event.message).name && document.getElementById("playSixTitle").innerHTML == JSON.parse(event.message).title && proPics(document.getElementById("playSixAvatarPic").src) == JSON.parse(event.message).propic) {
					document.getElementById("playSixReady").style.backgroundColor = "#228B22";
					document.getElementById("playSixReadyText").innerHTML = "Ready";
				}
			}
			if (JSON.parse(event.message).newName == name && JSON.parse(event.message).newTitle == title && JSON.parse(event.message).newPropic == propic && JSON.parse(event.message).inPlayers == true) {
				allInPlayers(JSON.parse(event.message).players);
			}
			if (JSON.parse(event.message).newPlayerAdd == true) {
				console.log("hello doe");
				console.log(JSON.parse(event.message).hostName + " " + document.getElementById("hostName").innerHTML);
				console.log(JSON.parse(event.message).hostPropic + " " + proPics(document.getElementById("hostAvatarPic").src));
			}
			if (JSON.parse(event.message).newPlayerAdd == true && JSON.parse(event.message).hostName == document.getElementById("hostName").innerHTML && JSON.parse(event.message).hostPropic == proPics(document.getElementById("hostAvatarPic").src) && JSON.stringify(JSON.parse(event.message).playName + JSON.parse(event.message).playTitle + JSON.parse(event.message).playPropic) != JSON.stringify(name + title + propic)) {
				console.log("about to add a new player");
				addNewPlayer(JSON.parse(event.message).playName, JSON.parse(event.message).playTitle, JSON.parse(event.message).playPropic);
			} else if (JSON.parse(event.message).cancelled == false) {	
				console.log("new");
				if (gameOne == null) {
					gameOne = JSON.parse(event.message);
				} else if (gameTwo == null) {
					gameTwo = JSON.parse(event.message);
				} else if (gameThree == null) {
					gameThree = JSON.parse(event.message);
				} else {
					gameFour = JSON.parse(event.message);
				}
				updateSlots();
			} else if (JSON.parse(event.message).cancelled == true) {
				console.log("cancelling");
				if (gameFour != null) {
					if (gameOne.userr == JSON.parse(event.message).userr && gameOne.numOfPlayers == JSON.parse(event.message).numOfPlayers && gameOne.gemWin == JSON.parse(event.message).gemWin && gameOne.roundWin == JSON.parse(event.message).roundWin && gameOne.insurance == JSON.parse(event.message).insurance) {
						gameOne = gameTwo;
						gameTwo = gameThree;
						gameThree = gameFour;
						gameFour = null;
					} else if (gameTwo.userr == JSON.parse(event.message).userr && gameTwo.numOfPlayers == JSON.parse(event.message).numOfPlayers && gameTwo.gemWin == JSON.parse(event.message).gemWin && gameTwo.roundWin == JSON.parse(event.message).roundWin && gameTwo.insurance == JSON.parse(event.message).insurance) {
						gameTwo = gameThree;
						gameThree = gameFour;
						gameFour = null;
					} else if (gameThree.userr == JSON.parse(event.message).userr && gameThree.numOfPlayers == JSON.parse(event.message).numOfPlayers && gameThree.gemWin == JSON.parse(event.message).gemWin && gameThree.roundWin == JSON.parse(event.message).roundWin && gameThree.insurance == JSON.parse(event.message).insurance) {
						gameThree = gameFour;
						gameFour = null;
					} else if (gameFour.userr == JSON.parse(event.message).userr && gameFour.numOfPlayers == JSON.parse(event.message).numOfPlayers && gameFour.gemWin == JSON.parse(event.message).gemWin && gameFour.roundWin == JSON.parse(event.message).roundWin && gameFour.insurance == JSON.parse(event.message).insurance) {
						gameFour = null;
					}
				} else if (gameThree != null) {
					if (gameOne.userr == JSON.parse(event.message).userr && gameOne.numOfPlayers == JSON.parse(event.message).numOfPlayers && gameOne.gemWin == JSON.parse(event.message).gemWin && gameOne.roundWin == JSON.parse(event.message).roundWin && gameOne.insurance == JSON.parse(event.message).insurance) {
						gameOne = gameTwo;
						gameTwo = gameThree;
						gameThree = gameFour;
						gameFour = null;
					} else if (gameTwo.userr == JSON.parse(event.message).userr && gameTwo.numOfPlayers == JSON.parse(event.message).numOfPlayers && gameTwo.gemWin == JSON.parse(event.message).gemWin && gameTwo.roundWin == JSON.parse(event.message).roundWin && gameTwo.insurance == JSON.parse(event.message).insurance) {
						gameTwo = gameThree;
						gameThree = gameFour;
						gameFour = null;
					} else if (gameThree.userr == JSON.parse(event.message).userr && gameThree.numOfPlayers == JSON.parse(event.message).numOfPlayers && gameThree.gemWin == JSON.parse(event.message).gemWin && gameThree.roundWin == JSON.parse(event.message).roundWin && gameThree.insurance == JSON.parse(event.message).insurance) {
						gameThree = gameFour;
						gameFour = null;
					}
				} else if (gameTwo != null) {
					if (gameOne.userr == JSON.parse(event.message).userr && gameOne.numOfPlayers == JSON.parse(event.message).numOfPlayers && gameOne.gemWin == JSON.parse(event.message).gemWin && gameOne.roundWin == JSON.parse(event.message).roundWin && gameOne.insurance == JSON.parse(event.message).insurance) {
						gameOne = gameTwo;
						gameTwo = gameThree;
						gameThree = gameFour;
						gameFour = null;
					} else if (gameTwo.userr == JSON.parse(event.message).userr && gameTwo.numOfPlayers == JSON.parse(event.message).numOfPlayers && gameTwo.gemWin == JSON.parse(event.message).gemWin && gameTwo.roundWin == JSON.parse(event.message).roundWin && gameTwo.insurance == JSON.parse(event.message).insurance) {
						gameTwo = gameThree;
						gameThree = gameFour;
						gameFour = null;
					}
				} else if (gameOne != null) {
					if (gameOne.userr == JSON.parse(event.message).userr && gameOne.numOfPlayers == JSON.parse(event.message).numOfPlayers && gameOne.gemWin == JSON.parse(event.message).gemWin && gameOne.roundWin == JSON.parse(event.message).roundWin && gameOne.insurance == JSON.parse(event.message).insurance) {
						gameOne = gameTwo;
						gameTwo = gameThree;
						gameThree = gameFour;
						gameFour = null;
					}
				}
				updateSlots();
			} else if (JSON.parse(event.message).hostingName == document.getElementById("hostName").innerHTML && JSON.parse(event.message).hostingTitle == document.getElementById("hostTitle").innerHTML && JSON.parse(event.message).hostingPropic == document.getElementById("hostAvatarPic").src && JSON.parse(event.message).closingGame == true) {
				//window.open("JoinGame.html","_self");
			}
		}
	}
});

function publishRequest() {
	pubnub.publish({
    channel : 'availableGames',
    message : "request"
	});
}

function updateSlots() {
	var j = 0;
	while (gameOne == null && j < 5) {
		gameOne = gameTwo;
		gameTwo = gameThree;
		gameThree = gameFour;
		gameFour = null;
		j += 1;
		console.log("going");
	}
	j = 0;
	while (gameTwo == null && j < 5) {
		gameTwo = gameThree;
		gameThree = gameFour;
		gameFour = null;
		j += 1;
	}
	j = 0;
	while (gameThree == null && j<5) {
		gameThree = gameFour;
		gameFour = null;
		j += 1;
	}
	if (gameOne != null) {
		document.getElementById("hostOnne").style.display = "block";
		document.getElementById("coverOne").style.display = "none";
		document.getElementById("textNumOfPlayersGameOne").innerHTML = gameOne.numOfPlayers + " player game";
		if (gameOne.gemWin == true) {
			document.getElementById("textEndGameGameOne").innerHTML = gameOne.gemsToWin + " gems to win the game";
		} else if (gameOne.roundWin == true) {
			document.getElementById("textEndGameGameOne").innerHTML = gameOne.roundsToWin + " rounds to win the game";
		} else {
			document.getElementById("textEndGameGameOne").innerHTML = "host will call the end of the game";
		}
		if (gameOne.sellingHands == true) {
			document.getElementById("textSellingHandsGameOne").innerHTML = "selling hands is allowed";
		} else {
			document.getElementById("textSellingHandsGameOne").innerHTML = "selling hands is not allowed";
		}
		if (gameOne.insurance == true) {
			document.getElementById("textInsuranceGameOne").innerHTML = "insurance deals are allowed";
		} else {
			document.getElementById("textInsuranceGameOne").innerHTML = "insurance deals are not allowed";
		}
		if (gameOne.chat == true) {
			document.getElementById("textChatGameOne").innerHTML = "chat is included";
		} else {
			document.getElementById("textChatGameOne").innerHTML = "chat is not included";
		}
		document.getElementById("hostAvatarPicGameOne").src = gameOne.host.propic;
		document.getElementById("hostNameGameOne").innerHTML = gameOne.host.name;
		document.getElementById("hostTitleGameOne").innerHTML = gameOne.host.title;
	} else { 
		document.getElementById("hostOnne").style.display = "none";
		document.getElementById("coverOne").style.display = "block";
		document.getElementById("textNumOfPlayersGameOne").innerHTML = "";
		document.getElementById("textEndGameGameOne").innerHTML = "";
		document.getElementById("textSellingHandsGameOne").innerHTML = "";
		document.getElementById("textInsuranceGameOne").innerHTML = "";
		document.getElementById("textChatGameOne").innerHTML = "";
		document.getElementById("hostAvatarPicGameOne").src = "";
		document.getElementById("hostNameGameOne").innerHTML = "";
		document.getElementById("hostTitleGameOne").innerHTML = "";
	}
	if (gameTwo != null) {
		document.getElementById("hostTwwo").style.display = "block";
		document.getElementById("coverTwo").style.display = "none";
		document.getElementById("textNumOfPlayersGameTwo").innerHTML = gameTwo.numOfPlayers + " player game";
		if (gameTwo.gemWin == true) {
			document.getElementById("textEndGameGameTwo").innerHTML = gameTwo.gemsToWin + " gems to win the game";
		} else if (gameTwo.roundWin == true) {
			document.getElementById("textEndGameGameTwo").innerHTML = gameTwo.roundsToWin + " rounds to win the game";
		} else {
			document.getElementById("textEndGameGameTwo").innerHTML = "host will call the end of the game";
		}
		if (gameTwo.sellingHands == true) {
			document.getElementById("textSellingHandsGameTwo").innerHTML = "selling hands is allowed";
		} else {
			document.getElementById("textSellingHandsGameTwo").innerHTML = "selling hands is not allowed";
		}
		if (gameTwo.insurance == true) {
			document.getElementById("textInsuranceGameTwo").innerHTML = "insurance deals are allowed";
		} else {
			document.getElementById("textInsuranceGameTwo").innerHTML = "insurance deals are not allowed";
		}
		if (gameTwo.chat == true) {
			document.getElementById("textChatGameTwo").innerHTML = "chat is included";
		} else {
			document.getElementById("textChatGameTwo").innerHTML = "chat is not included";
		}
		document.getElementById("hostAvatarPicGameTwo").src = gameTwo.host.propic;
		document.getElementById("hostNameGameTwo").innerHTML = gameTwo.host.name;
		document.getElementById("hostTitleGameTwo").innerHTML = gameTwo.host.title;
	} else {
		document.getElementById("hostTwwo").style.display = "none";		
		document.getElementById("coverTwo").style.display = "block";
		document.getElementById("textNumOfPlayersGameTwo").innerHTML = "";
		document.getElementById("textEndGameGameTwo").innerHTML = "";
		document.getElementById("textSellingHandsGameTwo").innerHTML = "";
		document.getElementById("textInsuranceGameTwo").innerHTML = "";
		document.getElementById("textChatGameTwo").innerHTML = "";
		document.getElementById("hostAvatarPicGameTwo").src = "";
		document.getElementById("hostNameGameTwo").innerHTML = "";
		document.getElementById("hostTitleGameTwo").innerHTML = "";
	}
	if (gameThree != null) {
		document.getElementById("hostThreee").style.display = "block";
		document.getElementById("coverThree").style.display = "none";
		document.getElementById("textNumOfPlayersGameThree").innerHTML = gameThree.numOfPlayers + " player game";
		if (gameThree.gemWin == true) {
			document.getElementById("textEndGameGameThree").innerHTML = gameThree.gemsToWin + " gems to win the game";
		} else if (gameThree.roundWin == true) {
			document.getElementById("textEndGameGameThree").innerHTML = gameThree.roundsToWin + " rounds to win the game";
		} else {
			document.getElementById("textEndGameGameThree").innerHTML = "host will call the end of the game";
		}
		if (gameThree.sellingHands == true) {
			document.getElementById("textSellingHandsGameThree").innerHTML = "selling hands is allowed";
		} else {
			document.getElementById("textSellingHandsGameThree").innerHTML = "selling hands is not allowed";
		}
		if (gameThree.insurance == true) {
			document.getElementById("textInsuranceGameThree").innerHTML = "insurance deals are allowed";
		} else {
			document.getElementById("textInsuranceGameThree").innerHTML = "insurance deals are not allowed";
		}
		if (gameThree.chat == true) {
			document.getElementById("textChatGameThree").innerHTML = "chat is included";
		} else {
			document.getElementById("textChatGameThree").innerHTML = "chat is not included";
		}
		document.getElementById("hostAvatarPicGameThree").src = gameThree.host.propic;
		document.getElementById("hostNameGameThree").innerHTML = gameThree.host.name;
		document.getElementById("hostTitleGameThree").innerHTML = gameThree.host.title;
	} else { 
		document.getElementById("hostThreee").style.display = "none";
		document.getElementById("coverThree").style.display = "block";
		document.getElementById("textNumOfPlayersGameThree").innerHTML = "";
		document.getElementById("textEndGameGameThree").innerHTML = "";
		document.getElementById("textSellingHandsGameThree").innerHTML = "";
		document.getElementById("textInsuranceGameThree").innerHTML = "";
		document.getElementById("textChatGameThree").innerHTML = "";
		document.getElementById("hostAvatarPicGameThree").src = "";
		document.getElementById("hostNameGameThree").innerHTML = "";
		document.getElementById("hostTitleGameThree").innerHTML = "";
	}
	if (gameFour != null) {
		document.getElementById("hostFouur").style.display = "block";
		document.getElementById("coverFour").style.display = "none";
		document.getElementById("textNumOfPlayersGameFour").innerHTML = gameFour.numOfPlayers + " player game";
		if (gameFour.gemWin == true) {
			document.getElementById("textEndGameGameFour").innerHTML = gameFour.gemsToWin + " gems to win the game";
		} else if (gameFour.roundWin == true) {
			document.getElementById("textEndGameGameFour").innerHTML = gameFour.roundsToWin + " rounds to win the game";
		} else {
			document.getElementById("textEndGameGameFour").innerHTML = "host will call the end of the game";
		}
		if (gameFour.sellingHands == true) {
			document.getElementById("textSellingHandsGameFour").innerHTML = "selling hands is allowed";
		} else {
			document.getElementById("textSellingHandsGameFour").innerHTML = "selling hands is not allowed";
		}
		if (gameFour.insurance == true) {
			document.getElementById("textInsuranceGameFour").innerHTML = "insurance deals are allowed";
		} else {
			document.getElementById("textInsuranceGameFour").innerHTML = "insurance deals are not allowed";
		}
		if (gameFour.chat == true) {
			document.getElementById("textChatGameFour").innerHTML = "chat is included";
		} else {
			document.getElementById("textChatGameFour").innerHTML = "chat is not included";
		}
		document.getElementById("hostAvatarPicGameFour").src = gameFour.host.propic;
		document.getElementById("hostNameGameFour").innerHTML = gameFour.host.name;
		document.getElementById("hostTitleGameFour").innerHTML = gameFour.host.title;
	} else { 
		document.getElementById("hostFouur").style.display = "none";
		document.getElementById("coverFour").style.display = "block";
		document.getElementById("textNumOfPlayersGameFour").innerHTML = "";
		document.getElementById("textEndGameGameFour").innerHTML = "";
		document.getElementById("textSellingHandsGameFour").innerHTML = "";
		document.getElementById("textInsuranceGameFour").innerHTML = "";
		document.getElementById("textChatGameFour").innerHTML = "";
		document.getElementById("hostAvatarPicGameFour").src = "";
		document.getElementById("hostNameGameFour").innerHTML = "";
		document.getElementById("hostTitleGameFour").innerHTML = "";
	}	
	document.getElementById("hostAvatarPicGameOne").style.bottom = "0px";
	document.getElementById("hostAvatarPicGameOne").style.left = "0px";
	document.getElementById("hostAvatarPicGameOne").style.height = "100%";
	document.getElementById("hostAvatarPicGameOne").style.width = "100%";
	document.getElementById("hostAvatarPicGameTwo").style.bottom = "0px";
	document.getElementById("hostAvatarPicGameTwo").style.left = "0px";
	document.getElementById("hostAvatarPicGameTwo").style.height = "100%";
	document.getElementById("hostAvatarPicGameTwo").style.width = "100%";
	document.getElementById("hostAvatarPicGameThree").style.bottom = "0px";
	document.getElementById("hostAvatarPicGameThree").style.left = "0px";
	document.getElementById("hostAvatarPicGameThree").style.height = "100%";
	document.getElementById("hostAvatarPicGameThree").style.width = "100%";
	document.getElementById("hostAvatarPicGameFour").style.bottom = "0px";
	document.getElementById("hostAvatarPicGameFour").style.left = "0px";
	document.getElementById("hostAvatarPicGameFour").style.height = "100%";
	document.getElementById("hostAvatarPicGameFour").style.width = "100%";
	if (document.getElementById("hostAvatarPicGameOne").src.includes("elaphant.jpg")) {
		document.getElementById("hostAvatarPicGameOne").style.bottom = "2px";
		document.getElementById("hostAvatarPicGameOne").style.width = "200%";
		document.getElementById("hostAvatarPicGameOne").style.left = "-40px";
		document.getElementById("hostAvatarPicGameOne").style.height = "120%";
	} else if (document.getElementById("hostAvatarPicGameOne").src.includes("blankAvatar.jpg")) {
		document.getElementById("hostAvatarPicGameOne").style.bottom = "8px";
	} else if (document.getElementById("hostAvatarPicGameOne").src.includes("steve.jpg")) {
		document.getElementById("hostAvatarPicGameOne").style.left = "-18px";
		document.getElementById("hostAvatarPicGameOne").style.bottom = "15px";
		document.getElementById("hostAvatarPicGameOne").style.width = "140%";
		document.getElementById("hostAvatarPicGameOne").style.height = "130%";
	} else if (document.getElementById("hostAvatarPicGameOne").src.includes("nixon.jpg")) {
		document.getElementById("hostAvatarPicGameOne").style.bottom = "13px";
		document.getElementById("hostAvatarPicGameOne").style.width = "110%";
		document.getElementById("hostAvatarPicGameOne").style.height = "130%";
		document.getElementById("hostAvatarPicGameOne").style.left = "-3px";
	} else if (document.getElementById("hostAvatarPicGameOne").src.includes("spiderman.jpg")) {
		document.getElementById("hostAvatarPicGameOne").style.width = "130%";
	} else if (document.getElementById("hostAvatarPicGameOne").src.includes("loki.jpg")) {
		document.getElementById("hostAvatarPicGameOne").style.width = "150%";
		document.getElementById("hostAvatarPicGameOne").style.height = "120%";
		document.getElementById("hostAvatarPicGameOne").style.left = "-20px";
	} else if (document.getElementById("hostAvatarPicGameOne").src.includes("riskPieces.jpg")) {
		document.getElementById("hostAvatarPicGameOne").style.bottom = "28px";
		document.getElementById("hostAvatarPicGameOne").style.width = "220%";
		document.getElementById("hostAvatarPicGameOne").style.height = "140%";
		document.getElementById("hostAvatarPicGameOne").style.left = "-55px";
	} else if (document.getElementById("hostAvatarPicGameOne").src.includes("pikachu.jpg")) {
		document.getElementById("hostAvatarPicGameOne").style.bottom = "3px";
		document.getElementById("hostAvatarPicGameOne").style.left = "3px";
	} else if (document.getElementById("hostAvatarPicGameOne").src.includes("yoda.jpg")) {
		document.getElementById("hostAvatarPicGameOne").style.width = "150%";
		document.getElementById("hostAvatarPicGameOne").style.left = "-15px";
	}
	if (document.getElementById("hostAvatarPicGameTwo").src.includes("elaphant.jpg")) {
		document.getElementById("hostAvatarPicGameTwo").style.bottom = "2px";
		document.getElementById("hostAvatarPicGameTwo").style.width = "200%";
		document.getElementById("hostAvatarPicGameTwo").style.left = "-40px";
		document.getElementById("hostAvatarPicGameTwo").style.height = "120%";
	} else if (document.getElementById("hostAvatarPicGameTwo").src.includes("blankAvatar.jpg")) {
		document.getElementById("hostAvatarPicGameTwo").style.bottom = "8px";
	} else if (document.getElementById("hostAvatarPicGameTwo").src.includes("steve.jpg")) {
		document.getElementById("hostAvatarPicGameTwo").style.left = "-18px";
		document.getElementById("hostAvatarPicGameTwo").style.bottom = "15px";
		document.getElementById("hostAvatarPicGameTwo").style.width = "140%";
		document.getElementById("hostAvatarPicGameTwo").style.height = "130%";
	} else if (document.getElementById("hostAvatarPicGameTwo").src.includes("nixon.jpg")) {
		document.getElementById("hostAvatarPicGameTwo").style.bottom = "13px";
		document.getElementById("hostAvatarPicGameTwo").style.width = "110%";
		document.getElementById("hostAvatarPicGameTwo").style.height = "130%";
		document.getElementById("hostAvatarPicGameTwo").style.left = "-3px";
	} else if (document.getElementById("hostAvatarPicGameTwo").src.includes("spiderman.jpg")) {
		document.getElementById("hostAvatarPicGameTwo").style.width = "130%";
	} else if (document.getElementById("hostAvatarPicGameTwo").src.includes("loki.jpg")) {
		document.getElementById("hostAvatarPicGameTwo").style.width = "150%";
		document.getElementById("hostAvatarPicGameTwo").style.height = "120%";
		document.getElementById("hostAvatarPicGameTwo").style.left = "-20px";
	} else if (document.getElementById("hostAvatarPicGameTwo").src.includes("riskPieces.jpg")) {
		document.getElementById("hostAvatarPicGameTwo").style.bottom = "28px";
		document.getElementById("hostAvatarPicGameTwo").style.width = "220%";
		document.getElementById("hostAvatarPicGameTwo").style.height = "140%";
		document.getElementById("hostAvatarPicGameTwo").style.left = "-55px";
	} else if (document.getElementById("hostAvatarPicGameTwo").src.includes("pikachu.jpg")) {
		document.getElementById("hostAvatarPicGameTwo").style.bottom = "3px";
		document.getElementById("hostAvatarPicGameTwo").style.left = "3px";
	} else if (document.getElementById("hostAvatarPicGameTwo").src.includes("yoda.jpg")) {
		document.getElementById("hostAvatarPicGameTwo").style.width = "150%";
		document.getElementById("hostAvatarPicGameTwo").style.left = "-15px";
	}
	if (document.getElementById("hostAvatarPicGameThree").src.includes("elaphant.jpg")) {
		document.getElementById("hostAvatarPicGameThree").style.bottom = "2px";
		document.getElementById("hostAvatarPicGameThree").style.width = "200%";
		document.getElementById("hostAvatarPicGameThree").style.left = "-40px";
		document.getElementById("hostAvatarPicGameThree").style.height = "120%";
	} else if (document.getElementById("hostAvatarPicGameThree").src.includes("blankAvatar.jpg")) {
		document.getElementById("hostAvatarPicGameThree").style.bottom = "8px";
	} else if (document.getElementById("hostAvatarPicGameThree").src.includes("steve.jpg")) {
		document.getElementById("hostAvatarPicGameThree").style.left = "-18px";
		document.getElementById("hostAvatarPicGameThree").style.bottom = "15px";
		document.getElementById("hostAvatarPicGameThree").style.width = "140%";
		document.getElementById("hostAvatarPicGameThree").style.height = "130%";
	} else if (document.getElementById("hostAvatarPicGameThree").src.includes("nixon.jpg")) {
		document.getElementById("hostAvatarPicGameThree").style.bottom = "13px";
		document.getElementById("hostAvatarPicGameThree").style.width = "110%";
		document.getElementById("hostAvatarPicGameThree").style.height = "130%";
		document.getElementById("hostAvatarPicGameThree").style.left = "-3px";
	} else if (document.getElementById("hostAvatarPicGameThree").src.includes("spiderman.jpg")) {
		document.getElementById("hostAvatarPicGameThree").style.width = "130%";
	} else if (document.getElementById("hostAvatarPicGameThree").src.includes("loki.jpg")) {
		document.getElementById("hostAvatarPicGameThree").style.width = "150%";
		document.getElementById("hostAvatarPicGameThree").style.height = "120%";
		document.getElementById("hostAvatarPicGameThree").style.left = "-20px";
	} else if (document.getElementById("hostAvatarPicGameThree").src.includes("riskPieces.jpg")) {
		document.getElementById("hostAvatarPicGameThree").style.bottom = "28px";
		document.getElementById("hostAvatarPicGameThree").style.width = "220%";
		document.getElementById("hostAvatarPicGameThree").style.height = "140%";
		document.getElementById("hostAvatarPicGameThree").style.left = "-55px";
	} else if (document.getElementById("hostAvatarPicGameThree").src.includes("pikachu.jpg")) {
		document.getElementById("hostAvatarPicGameThree").style.bottom = "3px";
		document.getElementById("hostAvatarPicGameThree").style.left = "3px";
	} else if (document.getElementById("hostAvatarPicGameThree").src.includes("yoda.jpg")) {
		document.getElementById("hostAvatarPicGameThree").style.width = "150%";
		document.getElementById("hostAvatarPicGameThree").style.left = "-15px";
	}
	if (document.getElementById("hostAvatarPicGameFour").src.includes("elaphant.jpg")) {
		document.getElementById("hostAvatarPicGameFour").style.bottom = "2px";
		document.getElementById("hostAvatarPicGameFour").style.width = "200%";
		document.getElementById("hostAvatarPicGameFour").style.left = "-40px";
		document.getElementById("hostAvatarPicGameFour").style.height = "120%";
	} else if (document.getElementById("hostAvatarPicGameFour").src.includes("blankAvatar.jpg")) {
		document.getElementById("hostAvatarPicGameFour").style.bottom = "8px";
	} else if (document.getElementById("hostAvatarPicGameFour").src.includes("steve.jpg")) {
		document.getElementById("hostAvatarPicGameFour").style.left = "-18px";
		document.getElementById("hostAvatarPicGameFour").style.bottom = "15px";
		document.getElementById("hostAvatarPicGameFour").style.width = "140%";
		document.getElementById("hostAvatarPicGameFour").style.height = "130%";
	} else if (document.getElementById("hostAvatarPicGameFour").src.includes("nixon.jpg")) {
		document.getElementById("hostAvatarPicGameFour").style.bottom = "13px";
		document.getElementById("hostAvatarPicGameFour").style.width = "110%";
		document.getElementById("hostAvatarPicGameFour").style.height = "130%";
		document.getElementById("hostAvatarPicGameFour").style.left = "-3px";
	} else if (document.getElementById("hostAvatarPicGameFour").src.includes("spiderman.jpg")) {
		document.getElementById("hostAvatarPicGameFour").style.width = "130%";
	} else if (document.getElementById("hostAvatarPicGameFour").src.includes("loki.jpg")) {
		document.getElementById("hostAvatarPicGameFour").style.width = "150%";
		document.getElementById("hostAvatarPicGameFour").style.height = "120%";
		document.getElementById("hostAvatarPicGameFour").style.left = "-20px";
	} else if (document.getElementById("hostAvatarPicGameFour").src.includes("riskPieces.jpg")) {
		document.getElementById("hostAvatarPicGameFour").style.bottom = "28px";
		document.getElementById("hostAvatarPicGameFour").style.width = "220%";
		document.getElementById("hostAvatarPicGameFour").style.height = "140%";
		document.getElementById("hostAvatarPicGameFour").style.left = "-55px";
	} else if (document.getElementById("hostAvatarPicGameFour").src.includes("pikachu.jpg")) {
		document.getElementById("hostAvatarPicGameFour").style.bottom = "3px";
		document.getElementById("hostAvatarPicGameFour").style.left = "3px";
	} else if (document.getElementById("hostAvatarPicGameFour").src.includes("yoda.jpg")) {
		document.getElementById("hostAvatarPicGameFour").style.width = "150%";
		document.getElementById("hostAvatarPicGameFour").style.left = "-15px";
	}
}

function playerLeaving() {
	pubnub.publish({
    channel : 'availableGames',
    message : JSON.stringify({playerLeaving:userr, leaving:true, hostUser:hostUserBackup})
	});
	hostUserBackup = "";
}

window.addEventListener("beforeunload", function(e){
   playerLeaving();
}, false);

function leaveGame() {
	pubnub.publish({
    channel : 'availableGames',
    message : JSON.stringify({playerLeaving:userr, leaving:true, hostUser:hostUserBackup})
	});
	hostUserBackup = "";
	window.open("JoinGame.html","_self");
}

function addNewPlayer(newName, newTitle, newPropic) {
	console.log("adding a new player");
	console.log(newPropic);
	if (document.getElementById("playTwoName").innerHTML == null || document.getElementById("playTwoName").innerHTML == "") {
		document.getElementById("playTwoName").innerHTML = newName;
		document.getElementById("playTwoTitle").innerHTML = newTitle;
		document.getElementById("playTwoAvatarPic").src = newPropic;
		document.getElementById("playTwoReadyText").innerHTML = "Not Ready";
		document.getElementById("playTwoReady").style.backgroundColor = "#FF6961";
	} else if (document.getElementById("playThreeName").innerHTML == null || document.getElementById("playThreeName").innerHTML == "") {
		document.getElementById("playThreeName").innerHTML = newName;
		document.getElementById("playThreeTitle").innerHTML = newTitle;
		document.getElementById("playThreeAvatarPic").src = newPropic;
		document.getElementById("playThreeReadyText").innerHTML = "Not Ready";
		document.getElementById("playThreeReady").style.backgroundColor = "#FF6961";
	} else if (document.getElementById("playFourName").innerHTML == null || document.getElementById("playFourName").innerHTML == "") {
		document.getElementById("playFourName").innerHTML = newName;
		document.getElementById("playFourTitle").innerHTML = newTitle;
		document.getElementById("playFourAvatarPic").src = newPropic;
		document.getElementById("playFourReadyText").innerHTML = "Not Ready";
		document.getElementById("playFourReady").style.backgroundColor = "#FF6961";
	} else if (document.getElementById("playFiveName").innerHTML == null || document.getElementById("playFiveName").innerHTML == "") {
		document.getElementById("playFiveName").innerHTML = newName;
		document.getElementById("playFiveTitle").innerHTML = newTitle;
		document.getElementById("playFiveAvatarPic").src = newPropic;
		document.getElementById("playFiveReadyText").innerHTML = "Not Ready";
		document.getElementById("playFiveReady").style.backgroundColor = "#FF6961";
	} else if (document.getElementById("playSixName").innerHTML == null || document.getElementById("playSixName").innerHTML == "") {
		document.getElementById("playSixName").innerHTML = newName;
		document.getElementById("playSixTitle").innerHTML = newTitle;
		document.getElementById("playSixAvatarPic").src = newPropic;
		document.getElementById("playSixReadyText").innerHTML = "Not Ready";
		document.getElementById("playSixReady").style.backgroundColor = "#FF6961";
	}
	updatePropics();
}

function allInPlayers(playerListing) {
	if (playerListing[0] != null) {
		document.getElementById("playTwoName").innerHTML = playerListing[0][0];
		document.getElementById("playTwoTitle").innerHTML = playerListing[0][1];
		document.getElementById("playTwoAvatarPic").src = playerListing[0][2];
		if (playerListing[0][3] == "Ready") {
			document.getElementById("playTwoReadyText").innerHTML = "Ready";
			document.getElementById("playTwoReady").style.backgroundColor = "#228B22";
		} else if (playerListing[0][3] == "Not Ready") {
			document.getElementById("playTwoReadyText").innerHTML = "Not Ready";
			document.getElementById("playTwoReady").style.backgroundColor = "#FF6961";
		}
		
	}
	if (playerListing[1] != null) {
		document.getElementById("playThreeName").innerHTML = playerListing[1][0];
		document.getElementById("playThreeTitle").innerHTML = playerListing[1][1];
		document.getElementById("playThreeAvatarPic").src = playerListing[1][2];
		if (playerListing[1][3] == "Ready") {
			document.getElementById("playThreeReadyText").innerHTML = "Ready";
			document.getElementById("playThreeReady").style.backgroundColor = "#228B22";
		} else if (playerListing[1][3] == "Not Ready") {
			document.getElementById("playThreeReadyText").innerHTML = "Not Ready";
			document.getElementById("playThreeReady").style.backgroundColor = "#FF6961";
		}
	}
	if (playerListing[2] != null) {
		document.getElementById("playFourName").innerHTML = playerListing[2][0];
		document.getElementById("playFourTitle").innerHTML = playerListing[2][1];
		document.getElementById("playFourAvatarPic").src = playerListing[2][2];
		if (playerListing[2][3] == "Ready") {
			document.getElementById("playFourReadyText").innerHTML = "Ready";
			document.getElementById("playFourReady").style.backgroundColor = "#228B22";
		} else if (playerListing[2][3] == "Not Ready") {
			document.getElementById("playFourReadyText").innerHTML = "Not Ready";
			document.getElementById("playFourReady").style.backgroundColor = "#FF6961";
		}
	}
	if (playerListing[3] != null) {
		document.getElementById("playFiveName").innerHTML = playerListing[3][0];
		document.getElementById("playFiveTitle").innerHTML = playerListing[3][1];
		document.getElementById("playFiveAvatarPic").src = playerListing[3][2];
		if (playerListing[3][3] == "Ready") {
			document.getElementById("playFiveReadyText").innerHTML = "Ready";
			document.getElementById("playFiveReady").style.backgroundColor = "#228B22";
		} else if (playerListing[3][3] == "Not Ready") {
			document.getElementById("playFiveReadyText").innerHTML = "Not Ready";
			document.getElementById("playFiveReady").style.backgroundColor = "#FF6961";
		}
	}
	if (playerListing[4] != null) {
		document.getElementById("playSixName").innerHTML = playerListing[4][0];
		document.getElementById("playSixTitle").innerHTML = playerListing[4][1];
		document.getElementById("playSixAvatarPic").src = playerListing[4][2];
		if (playerListing[4][3] == "Ready") {
			document.getElementById("playSixReadyText").innerHTML = "Ready";
			document.getElementById("playSixReady").style.backgroundColor = "#228B22";
		} else if (playerListing[4][3] == "Not Ready") {
			document.getElementById("playSixReadyText").innerHTML = "Not Ready";
			document.getElementById("playSixReady").style.backgroundColor = "#FF6961";
		}
	}
	updatePropics();
}

function updatePropics() {
	document.getElementById("playOneAvatarPic").style.bottom = "0px";
	document.getElementById("playOneAvatarPic").style.left = "0px";
	document.getElementById("playOneAvatarPic").style.width = "100%";
	document.getElementById("playOneAvatarPic").style.height = "100%";
	document.getElementById("playTwoAvatarPic").style.bottom = "0px";
	document.getElementById("playTwoAvatarPic").style.left = "0px";
	document.getElementById("playTwoAvatarPic").style.width = "100%";
	document.getElementById("playTwoAvatarPic").style.height = "100%";
	document.getElementById("playThreeAvatarPic").style.bottom = "0px";
	document.getElementById("playThreeAvatarPic").style.left = "0px";
	document.getElementById("playThreeAvatarPic").style.width = "100%";
	document.getElementById("playThreeAvatarPic").style.height = "100%";
	document.getElementById("playFourAvatarPic").style.bottom = "0px";
	document.getElementById("playFourAvatarPic").style.left = "0px";
	document.getElementById("playFourAvatarPic").style.width = "100%";
	document.getElementById("playFourAvatarPic").style.height = "100%";
	document.getElementById("playFiveAvatarPic").style.bottom = "0px";
	document.getElementById("playFiveAvatarPic").style.left = "0px";
	document.getElementById("playFiveAvatarPic").style.width = "100%";
	document.getElementById("playFiveAvatarPic").style.height = "100%";
	document.getElementById("playSixAvatarPic").style.bottom = "0px";
	document.getElementById("playSixAvatarPic").style.left = "0px";
	document.getElementById("playSixAvatarPic").style.width = "100%";
	document.getElementById("playSixAvatarPic").style.height = "100%";
	if (document.getElementById("playOneAvatarPic").src.includes("elaphant.jpg")) {
		document.getElementById("playOneAvatarPic").style.bottom = "2px";
		document.getElementById("playOneAvatarPic").style.width = "200%";
		document.getElementById("playOneAvatarPic").style.left = "-40px";
		document.getElementById("playOneAvatarPic").style.height = "120%";
	} else if (document.getElementById("playOneAvatarPic").src.includes("blankAvatar.jpg")) {
		document.getElementById("playOneAvatarPic").style.bottom = "8px";
	} else if (document.getElementById("playOneAvatarPic").src.includes("steve.jpg")) {
		document.getElementById("playOneAvatarPic").style.left = "-18px";
		document.getElementById("playOneAvatarPic").style.bottom = "15px";
		document.getElementById("playOneAvatarPic").style.width = "140%";
		document.getElementById("playOneAvatarPic").style.height = "130%";
	} else if (document.getElementById("playOneAvatarPic").src.includes("nixon.jpg")) {
		document.getElementById("playOneAvatarPic").style.bottom = "13px";
		document.getElementById("playOneAvatarPic").style.width = "110%";
		document.getElementById("playOneAvatarPic").style.height = "130%";
		document.getElementById("playOneAvatarPic").style.left = "-3px";
	} else if (document.getElementById("playOneAvatarPic").src.includes("spiderman.jpg")) {
		document.getElementById("playOneAvatarPic").style.width = "130%";
	} else if (document.getElementById("playOneAvatarPic").src.includes("loki.jpg")) {
		document.getElementById("playOneAvatarPic").style.width = "150%";
		document.getElementById("playOneAvatarPic").style.height = "120%";
		document.getElementById("playOneAvatarPic").style.left = "-20px";
	} else if (document.getElementById("playOneAvatarPic").src.includes("riskPieces.jpg")) {
		document.getElementById("playOneAvatarPic").style.bottom = "28px";
		document.getElementById("playOneAvatarPic").style.width = "220%";
		document.getElementById("playOneAvatarPic").style.height = "140%";
		document.getElementById("playOneAvatarPic").style.left = "-55px";
	} else if (document.getElementById("playOneAvatarPic").src.includes("pikachu.jpg")) {
		document.getElementById("playOneAvatarPic").style.bottom = "3px";
		document.getElementById("playOneAvatarPic").style.left = "3px";
	} else if (document.getElementById("playOneAvatarPic").src.includes("yoda.jpg")) {
		document.getElementById("playOneAvatarPic").style.width = "150%";
		document.getElementById("playOneAvatarPic").style.left = "-15px";
	}
	if (document.getElementById("playTwoAvatarPic").src.includes("elaphant.jpg")) {
		document.getElementById("playTwoAvatarPic").style.bottom = "2px";
		document.getElementById("playTwoAvatarPic").style.width = "200%";
		document.getElementById("playTwoAvatarPic").style.left = "-40px";
		document.getElementById("playTwoAvatarPic").style.height = "120%";
	} else if (document.getElementById("playTwoAvatarPic").src.includes("blankAvatar.jpg")) {
		document.getElementById("playTwoAvatarPic").style.bottom = "8px";
	} else if (document.getElementById("playTwoAvatarPic").src.includes("steve.jpg")) {
		document.getElementById("playTwoAvatarPic").style.left = "-18px";
		document.getElementById("playTwoAvatarPic").style.bottom = "15px";
		document.getElementById("playTwoAvatarPic").style.width = "140%";
		document.getElementById("playTwoAvatarPic").style.height = "130%";
	} else if (document.getElementById("playTwoAvatarPic").src.includes("nixon.jpg")) {
		document.getElementById("playTwoAvatarPic").style.bottom = "13px";
		document.getElementById("playTwoAvatarPic").style.width = "110%";
		document.getElementById("playTwoAvatarPic").style.height = "130%";
		document.getElementById("playTwoAvatarPic").style.left = "-3px";
	} else if (document.getElementById("playTwoAvatarPic").src.includes("spiderman.jpg")) {
		document.getElementById("playTwoAvatarPic").style.width = "130%";
	} else if (document.getElementById("playTwoAvatarPic").src.includes("loki.jpg")) {
		document.getElementById("playTwoAvatarPic").style.width = "150%";
		document.getElementById("playTwoAvatarPic").style.height = "120%";
		document.getElementById("playTwoAvatarPic").style.left = "-20px";
	} else if (document.getElementById("playTwoAvatarPic").src.includes("riskPieces.jpg")) {
		document.getElementById("playTwoAvatarPic").style.bottom = "28px";
		document.getElementById("playTwoAvatarPic").style.width = "220%";
		document.getElementById("playTwoAvatarPic").style.height = "140%";
		document.getElementById("playTwoAvatarPic").style.left = "-55px";
	} else if (document.getElementById("playTwoAvatarPic").src.includes("pikachu.jpg")) {
		document.getElementById("playTwoAvatarPic").style.bottom = "3px";
		document.getElementById("playTwoAvatarPic").style.left = "3px";
	} else if (document.getElementById("playTwoAvatarPic").src.includes("yoda.jpg")) {
		document.getElementById("playTwoAvatarPic").style.width = "150%";
		document.getElementById("playTwoAvatarPic").style.left = "-15px";
	}
	if (document.getElementById("playThreeAvatarPic").src.includes("elaphant.jpg")) {
		document.getElementById("playThreeAvatarPic").style.bottom = "2px";
		document.getElementById("playThreeAvatarPic").style.width = "200%";
		document.getElementById("playThreeAvatarPic").style.left = "-40px";
		document.getElementById("playThreeAvatarPic").style.height = "120%";
	} else if (document.getElementById("playThreeAvatarPic").src.includes("blankAvatar.jpg")) {
		document.getElementById("playThreeAvatarPic").style.bottom = "8px";
	} else if (document.getElementById("playThreeAvatarPic").src.includes("steve.jpg")) {
		document.getElementById("playThreeAvatarPic").style.left = "-18px";
		document.getElementById("playThreeAvatarPic").style.bottom = "15px";
		document.getElementById("playThreeAvatarPic").style.width = "140%";
		document.getElementById("playThreeAvatarPic").style.height = "130%";
	} else if (document.getElementById("playThreeAvatarPic").src.includes("nixon.jpg")) {
		document.getElementById("playThreeAvatarPic").style.bottom = "13px";
		document.getElementById("playThreeAvatarPic").style.width = "110%";
		document.getElementById("playThreeAvatarPic").style.height = "130%";
		document.getElementById("playThreeAvatarPic").style.left = "-3px";
	} else if (document.getElementById("playThreeAvatarPic").src.includes("spiderman.jpg")) {
		document.getElementById("playThreeAvatarPic").style.width = "130%";
	} else if (document.getElementById("playThreeAvatarPic").src.includes("loki.jpg")) {
		document.getElementById("playThreeAvatarPic").style.width = "150%";
		document.getElementById("playThreeAvatarPic").style.height = "120%";
		document.getElementById("playThreeAvatarPic").style.left = "-20px";
	} else if (document.getElementById("playThreeAvatarPic").src.includes("riskPieces.jpg")) {
		document.getElementById("playThreeAvatarPic").style.bottom = "28px";
		document.getElementById("playThreeAvatarPic").style.width = "220%";
		document.getElementById("playThreeAvatarPic").style.height = "140%";
		document.getElementById("playThreeAvatarPic").style.left = "-55px";
	} else if (document.getElementById("playThreeAvatarPic").src.includes("pikachu.jpg")) {
		document.getElementById("playThreeAvatarPic").style.bottom = "3px";
		document.getElementById("playThreeAvatarPic").style.left = "3px";
	} else if (document.getElementById("playThreeAvatarPic").src.includes("yoda.jpg")) {
		document.getElementById("playThreeAvatarPic").style.width = "150%";
		document.getElementById("playThreeAvatarPic").style.left = "-15px";
	}
	if (document.getElementById("playFourAvatarPic").src.includes("elaphant.jpg")) {
		document.getElementById("playFourAvatarPic").style.bottom = "2px";
		document.getElementById("playFourAvatarPic").style.width = "200%";
		document.getElementById("playFourAvatarPic").style.left = "-40px";
		document.getElementById("playFourAvatarPic").style.height = "120%";
	} else if (document.getElementById("playFourAvatarPic").src.includes("blankAvatar.jpg")) {
		document.getElementById("playFourAvatarPic").style.bottom = "8px";
	} else if (document.getElementById("playFourAvatarPic").src.includes("steve.jpg")) {
		document.getElementById("playFourAvatarPic").style.left = "-18px";
		document.getElementById("playFourAvatarPic").style.bottom = "15px";
		document.getElementById("playFourAvatarPic").style.width = "140%";
		document.getElementById("playFourAvatarPic").style.height = "130%";
	} else if (document.getElementById("playFourAvatarPic").src.includes("nixon.jpg")) {
		document.getElementById("playFourAvatarPic").style.bottom = "13px";
		document.getElementById("playFourAvatarPic").style.width = "110%";
		document.getElementById("playFourAvatarPic").style.height = "130%";
		document.getElementById("playFourAvatarPic").style.left = "-3px";
	} else if (document.getElementById("playFourAvatarPic").src.includes("spiderman.jpg")) {
		document.getElementById("playFourAvatarPic").style.width = "130%";
	} else if (document.getElementById("playFourAvatarPic").src.includes("loki.jpg")) {
		document.getElementById("playFourAvatarPic").style.width = "150%";
		document.getElementById("playFourAvatarPic").style.height = "120%";
		document.getElementById("playFourAvatarPic").style.left = "-20px";
	} else if (document.getElementById("playFourAvatarPic").src.includes("riskPieces.jpg")) {
		document.getElementById("playFourAvatarPic").style.bottom = "28px";
		document.getElementById("playFourAvatarPic").style.width = "220%";
		document.getElementById("playFourAvatarPic").style.height = "140%";
		document.getElementById("playFourAvatarPic").style.left = "-55px";
	} else if (document.getElementById("playFourAvatarPic").src.includes("pikachu.jpg")) {
		document.getElementById("playFourAvatarPic").style.bottom = "3px";
		document.getElementById("playFourAvatarPic").style.left = "3px";
	} else if (document.getElementById("playFourAvatarPic").src.includes("yoda.jpg")) {
		document.getElementById("playFourAvatarPic").style.width = "150%";
		document.getElementById("playFourAvatarPic").style.left = "-15px";
	}
	if (document.getElementById("playFiveAvatarPic").src.includes("elaphant.jpg")) {
		document.getElementById("playFiveAvatarPic").style.bottom = "2px";
		document.getElementById("playFiveAvatarPic").style.width = "200%";
		document.getElementById("playFiveAvatarPic").style.left = "-40px";
		document.getElementById("playFiveAvatarPic").style.height = "120%";
	} else if (document.getElementById("playFiveAvatarPic").src.includes("blankAvatar.jpg")) {
		document.getElementById("playFiveAvatarPic").style.bottom = "8px";
	} else if (document.getElementById("playFiveAvatarPic").src.includes("steve.jpg")) {
		document.getElementById("playFiveAvatarPic").style.left = "-18px";
		document.getElementById("playFiveAvatarPic").style.bottom = "15px";
		document.getElementById("playFiveAvatarPic").style.width = "140%";
		document.getElementById("playFiveAvatarPic").style.height = "130%";
	} else if (document.getElementById("playFiveAvatarPic").src.includes("nixon.jpg")) {
		document.getElementById("playFiveAvatarPic").style.bottom = "13px";
		document.getElementById("playFiveAvatarPic").style.width = "110%";
		document.getElementById("playFiveAvatarPic").style.height = "130%";
		document.getElementById("playFiveAvatarPic").style.left = "-3px";
	} else if (document.getElementById("playFiveAvatarPic").src.includes("spiderman.jpg")) {
		document.getElementById("playFiveAvatarPic").style.width = "130%";
	} else if (document.getElementById("playFiveAvatarPic").src.includes("loki.jpg")) {
		document.getElementById("playFiveAvatarPic").style.width = "150%";
		document.getElementById("playFiveAvatarPic").style.height = "120%";
		document.getElementById("playFiveAvatarPic").style.left = "-20px";
	} else if (document.getElementById("playFiveAvatarPic").src.includes("riskPieces.jpg")) {
		document.getElementById("playFiveAvatarPic").style.bottom = "28px";
		document.getElementById("playFiveAvatarPic").style.width = "220%";
		document.getElementById("playFiveAvatarPic").style.height = "140%";
		document.getElementById("playFiveAvatarPic").style.left = "-55px";
	} else if (document.getElementById("playFiveAvatarPic").src.includes("pikachu.jpg")) {
		document.getElementById("playFiveAvatarPic").style.bottom = "3px";
		document.getElementById("playFiveAvatarPic").style.left = "3px";
	} else if (document.getElementById("playFiveAvatarPic").src.includes("yoda.jpg")) {
		document.getElementById("playFiveAvatarPic").style.width = "150%";
		document.getElementById("playFiveAvatarPic").style.left = "-15px";
	}
	if (document.getElementById("playSixAvatarPic").src.includes("elaphant.jpg")) {
		document.getElementById("playSixAvatarPic").style.bottom = "2px";
		document.getElementById("playSixAvatarPic").style.width = "200%";
		document.getElementById("playSixAvatarPic").style.left = "-40px";
		document.getElementById("playSixAvatarPic").style.height = "120%";
	} else if (document.getElementById("playSixAvatarPic").src.includes("blankAvatar.jpg")) {
		document.getElementById("playSixAvatarPic").style.bottom = "8px";
	} else if (document.getElementById("playSixAvatarPic").src.includes("steve.jpg")) {
		document.getElementById("playSixAvatarPic").style.left = "-18px";
		document.getElementById("playSixAvatarPic").style.bottom = "15px";
		document.getElementById("playSixAvatarPic").style.width = "140%";
		document.getElementById("playSixAvatarPic").style.height = "130%";
	} else if (document.getElementById("playSixAvatarPic").src.includes("nixon.jpg")) {
		document.getElementById("playSixAvatarPic").style.bottom = "13px";
		document.getElementById("playSixAvatarPic").style.width = "110%";
		document.getElementById("playSixAvatarPic").style.height = "130%";
		document.getElementById("playSixAvatarPic").style.left = "-3px";
	} else if (document.getElementById("playSixAvatarPic").src.includes("spiderman.jpg")) {
		document.getElementById("playSixAvatarPic").style.width = "130%";
	} else if (document.getElementById("playSixAvatarPic").src.includes("loki.jpg")) {
		document.getElementById("playSixAvatarPic").style.width = "150%";
		document.getElementById("playSixAvatarPic").style.height = "120%";
		document.getElementById("playSixAvatarPic").style.left = "-20px";
	} else if (document.getElementById("playSixAvatarPic").src.includes("riskPieces.jpg")) {
		document.getElementById("playSixAvatarPic").style.bottom = "28px";
		document.getElementById("playSixAvatarPic").style.width = "220%";
		document.getElementById("playSixAvatarPic").style.height = "140%";
		document.getElementById("playSixAvatarPic").style.left = "-55px";
	} else if (document.getElementById("playSixAvatarPic").src.includes("pikachu.jpg")) {
		document.getElementById("playSixAvatarPic").style.bottom = "3px";
		document.getElementById("playSixAvatarPic").style.left = "3px";
	} else if (document.getElementById("playSixAvatarPic").src.includes("yoda.jpg")) {
		document.getElementById("playSixAvatarPic").style.width = "150%";
		document.getElementById("playSixAvatarPic").style.left = "-15px";
	}
}












