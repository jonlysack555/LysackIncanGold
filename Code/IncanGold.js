var userr = JSON.parse(window.localStorage.getItem('pubnubUser')).id;
userr = userr + "i";
var cards = ['fire.jpg', 'fire.jpg', 'fire.jpg', 'rocks.jpg', 'rocks.jpg', 'rocks.jpg', 'mummy.jpg', 'mummy.jpg', 'mummy.jpg', 'snake.jpg', 'snake.jpg', 'snake.jpg', 'spiders.jpg', 'spiders.jpg', 'spiders.jpg', 'artifact1.jpg', 'artifact2.jpg', 'artifact3.jpg', 'artifact4.jpg', 'artifact5.jpg', 'oneGem.jpg', 'twoGems.jpg', 'threeGems.jpg', 'fourGems.jpg', 'fiveGems.jpg', 'fiveGems.jpg', 'sevenGems.jpg', 'sevenGems.jpg', 'nineGems.jpg', 'elevenGems.jpg', 'elevenGems.jpg', 'thirteenGems.jpg', 'fourteenGems.jpg', 'fifteenGems.jpg', 'seventeenGems.jpg'];
var playerUser = {name:"7", title:"", userr:"use", staying:true, playerRoundGems:0, totalGems:0, justLeft: false};
var playerOne = {name:"1", title:"", userr:"use", staying:true, playerRoundGems:0, totalGems:0, justLeft: false};
var playerTwo = {name:"2", title:"", userr:"use", staying:true, playerRoundGems:0, totalGems:0, justLeft: false};
var playerThree = {name:"3", title:"", userr:"use", staying:true, playerRoundGems:0, totalGems:0, justLeft: false};
var playerFour = {name:"4", title:"", userr:"use", staying:true, playerRoundGems:0, totalGems: 0, justLeft: false};
var playerFive = {name:"5", title:"", userr:"use", staying:true, playerRoundGems:0, totalGems:0, justLeft: false};
var playerSix = {name:"6", title:"", userr:"use", staying:true, playerRoundGems:0, totalGems:0, justLeft: false};
var playerList = [playerUser, playerOne, playerTwo, playerThree, playerFour, playerFive, playerSix];
var gemSlots = [[document.getElementById("pUsOne"), document.getElementById("pUsTwo"), document.getElementById("pUsThree"), document.getElementById("pUsFour"), document.getElementById("pUsFive"), document.getElementById("pUsSix"), document.getElementById("pUsSeven"), document.getElementById("pUsEight")], [document.getElementById("pOnesOne"), document.getElementById("pOnesTwo"), document.getElementById("pOnesThree"), document.getElementById("pOnesFour"), document.getElementById("pOnesFive"), document.getElementById("pOnesSix"), document.getElementById("pOnesSeven"), document.getElementById("pOnesEight")], [document.getElementById("pTwosOne"), document.getElementById("pTwosTwo"), document.getElementById("pTwosThree"), document.getElementById("pTwosFour"), document.getElementById("pTwosFive"), document.getElementById("pTwosSix"), document.getElementById("pTwosSeven"), document.getElementById("pTwosEight")], [document.getElementById("pThreesOne"), document.getElementById("pThreesTwo"), document.getElementById("pThreesThree"), document.getElementById("pThreesFour"), document.getElementById("pThreesFive"), document.getElementById("pThreesSix"), document.getElementById("pThreesSeven"), document.getElementById("pThreesEight")], [document.getElementById("pFoursOne"), document.getElementById("pFoursTwo"), document.getElementById("pFoursThree"), document.getElementById("pFoursFour"), document.getElementById("pFoursFive"), document.getElementById("pFoursSix"), document.getElementById("pFoursSeven"), document.getElementById("pFoursEight")], [document.getElementById("pFivesOne"), document.getElementById("pFivesTwo"), document.getElementById("pFivesThree"), document.getElementById("pFivesFour"), document.getElementById("pFivesFive"), document.getElementById("pFivesSix"), document.getElementById("pFivesSeven"), document.getElementById("pFivesEight")], [document.getElementById("pSixsOne"), document.getElementById("pSixsTwo"), document.getElementById("pSixsThree"), document.getElementById("pSixsFour"), document.getElementById("pSixsFive"), document.getElementById("pSixsSix"), document.getElementById("pSixsSeven"), document.getElementById("pSixsEight")]];
var playerArray = [];
var host;
var hostInfo;
var outed = false;
var startingRound = 0;
var hasBeenCalled = false;

var i = 1;
var p = 1;
var artifactNum = 0;
var r = 0;
var eliminated = false;

var gemWin;
var gemsToWin;
var roundWin;
var roundsToWin;
var callToWin;
var sellingHands;
var insurance;
var chat;
var roundsPlayed = 0;
var roundsDone = 0;
var roundFires = 0;
var roundMummies = 0;
var roundSnakes = 0;
var roundSpiders = 0;
var roundRocks = 0;
var totalPlayers;
var name;
var title;
var propic;
var user;
startGame();
var playersLeft = totalPlayers;
var decided = 0;

const pubnub = new PubNub({
  publishKey: "pub-c-32276b33-4bb1-4f52-b507-84269bbd2b0b",
  subscribeKey: "sub-c-67c10818-beed-11ea-a57f-4e41fc185ce6",
  uuid: userr
});

pubnub.subscribe({
  channels: [hostInfo[0]],
  withPresence: true
});

window.onload = function(){
	if (document.getElementById("hostPic").src.includes("elaphant.jpg")) {
		document.getElementById("hostPic").style.bottom = "2px";
		document.getElementById("hostPic").style.width = "200%";
		document.getElementById("hostPic").style.left = "-40px";
		document.getElementById("hostPic").style.height = "120%";
	} else if (document.getElementById("hostPic").src.includes("blankAvatar.jpg")) {
		document.getElementById("hostPic").style.bottom = "8px";
	} else if (document.getElementById("hostPic").src.includes("steve.jpg")) {
		document.getElementById("hostPic").style.left = "-18px";
		document.getElementById("hostPic").style.bottom = "15px";
		document.getElementById("hostPic").style.width = "140%";
		document.getElementById("hostPic").style.height = "130%";
	} else if (document.getElementById("hostPic").src.includes("nixon.jpg")) {
		document.getElementById("hostPic").style.bottom = "13px";
		document.getElementById("hostPic").style.width = "110%";
		document.getElementById("hostPic").style.height = "130%";
		document.getElementById("hostPic").style.left = "-3px";
	} else if (document.getElementById("hostPic").src.includes("spiderman.jpg")) {
		document.getElementById("hostPic").style.width = "130%";
	} else if (document.getElementById("hostPic").src.includes("loki.jpg")) {
		document.getElementById("hostPic").style.width = "150%";
		document.getElementById("hostPic").style.height = "120%";
		document.getElementById("hostPic").style.left = "-20px";
	} else if (document.getElementById("hostPic").src.includes("riskPieces.jpg")) {
		document.getElementById("hostPic").style.bottom = "28px";
		document.getElementById("hostPic").style.width = "220%";
		document.getElementById("hostPic").style.height = "140%";
		document.getElementById("hostPic").style.left = "-55px";
	} else if (document.getElementById("hostPic").src.includes("pikachu.jpg")) {
		document.getElementById("hostPic").style.bottom = "3px";
		document.getElementById("hostPic").style.left = "3px";
	} else if (document.getElementById("hostPic").src.includes("yoda.jpg")) {
		document.getElementById("hostPic").style.width = "150%";
		document.getElementById("hostPic").style.left = "-15px";
	}
}

function startGame () {
	host = window.localStorage.getItem('hosting');
	playerArray = JSON.parse(window.localStorage.getItem('thePlayersIn'));
	hostInfo = JSON.parse(window.localStorage.getItem('hostInfo'));
	if (host == "false") {
		var n = 0;
		while (playerArray[n][0] != userr) {
			n+= 1;
		}
		playerArray[n][0] = hostInfo[0];
		playerArray[n][1] = hostInfo[1];
		playerArray[n][2] = hostInfo[2];
		playerArray[n][3] = hostInfo[3];
	}
	totalPlayers = JSON.parse(window.localStorage.getItem('numOfPlayers'));
	gemWin = JSON.parse(window.localStorage.getItem('gemWin'));
	gemsToWin = JSON.parse(window.localStorage.getItem('gemsToWin'));
	roundWin = JSON.parse(window.localStorage.getItem('roundWin'));
	roundsToWin = JSON.parse(window.localStorage.getItem('roundsToWin'));
	callToWin = JSON.parse(window.localStorage.getItem('callToWin'));
	sellingHands = JSON.parse(window.localStorage.getItem('sellingHands'));
	insurance = JSON.parse(window.localStorage.getItem('insurance'));
	chat = JSON.parse(window.localStorage.getItem('chat'));
	user = JSON.parse(window.localStorage.getItem('pubnubUser')).id;
	user = user + "i";
	name = JSON.parse(window.localStorage.getItem(user)).name;
	title = JSON.parse(window.localStorage.getItem(user)).title;
	propic = JSON.parse(window.localStorage.getItem(user)).propic;
	document.getElementById("hostName").innerHTML = name;
	document.getElementById("hostTitle").innerHTML = title;
	document.getElementById("hostPic").src = propic;
	if (totalPlayers == 2) {
		document.getElementById("playOne").style.display = "none";
		document.getElementById("playTwo").style.display = "none";
		document.getElementById("playFour").style.display = "none";
		document.getElementById("playFive").style.display = "none";
		document.getElementById("playSix").style.display = "none";
		document.getElementById("nameThree").innerHTML = playerArray[0][1];
		document.getElementById("playerThreeTitle").innerHTML = playerArray[0][2];
		document.getElementById("playerThreePic").src = playerArray[0][3];
		//nameOne
		//playerOnePic
		//playerOneTitle
	} else if (totalPlayers == 3) {
		document.getElementById("playOne").style.display = "none";
		document.getElementById("playThree").style.display = "none";
		document.getElementById("playFour").style.display = "none";
		document.getElementById("playSix").style.display = "none";
		document.getElementById("nameTwo").innerHTML = playerArray[0][1];
		document.getElementById("playerTwoTitle").innerHTML = playerArray[0][2];
		document.getElementById("playerTwoPic").src = playerArray[0][3];
		document.getElementById("nameFive").innerHTML = playerArray[1][1];
		document.getElementById("playerFiveTitle").innerHTML = playerArray[1][2];
		document.getElementById("playerFivePic").src = playerArray[1][3];
	} else if (totalPlayers == 4) {
		document.getElementById("playTwo").style.display = "none";
		document.getElementById("playFour").style.display = "none";
		document.getElementById("playSix").style.display = "none";
		document.getElementById("nameOne").innerHTML = playerArray[0][1];
		document.getElementById("playerOneTitle").innerHTML = playerArray[0][2];
		document.getElementById("playerOnePic").src = playerArray[0][3];
		document.getElementById("nameThree").innerHTML = playerArray[1][1];
		document.getElementById("playerThreeTitle").innerHTML = playerArray[1][2];
		document.getElementById("playerThreePic").src = playerArray[1][3];
		document.getElementById("nameFive").innerHTML = playerArray[2][1];
		document.getElementById("playerFiveTitle").innerHTML = playerArray[2][2];
		document.getElementById("playerFivePic").src = playerArray[2][3];
	} else if (totalPlayers == 5) {
		document.getElementById("playTwo").style.display = "none";
		document.getElementById("playFive").style.display = "none";
		document.getElementById("nameOne").innerHTML = playerArray[0][1];
		document.getElementById("playerOneTitle").innerHTML = playerArray[0][2];
		document.getElementById("playerOnePic").src = playerArray[0][3];
		document.getElementById("nameThree").innerHTML = playerArray[1][1];
		document.getElementById("playerThreeTitle").innerHTML = playerArray[1][2];
		document.getElementById("playerThreePic").src = playerArray[1][3];
		document.getElementById("nameFour").innerHTML = playerArray[2][1];
		document.getElementById("playerFourTitle").innerHTML = playerArray[2][2];
		document.getElementById("playerFourPic").src = playerArray[2][3];
		document.getElementById("nameSix").innerHTML = playerArray[3][1];
		document.getElementById("playerSixTitle").innerHTML = playerArray[3][2];
		document.getElementById("playerSixPic").src = playerArray[3][3];
	} else if (totalPlayers == 6) {
		document.getElementById("playSix").style.display = "none";
		document.getElementById("nameOne").innerHTML = playerArray[0][1];
		document.getElementById("playerOneTitle").innerHTML = playerArray[0][2];
		document.getElementById("playerOnePic").src = playerArray[0][3];
		document.getElementById("nameTwo").innerHTML = playerArray[1][1];
		document.getElementById("playerTwoTitle").innerHTML = playerArray[1][2];
		document.getElementById("playerTwoPic").src = playerArray[1][3];
		document.getElementById("nameThree").innerHTML = playerArray[2][1];
		document.getElementById("playerThreeTitle").innerHTML = playerArray[2][2];
		document.getElementById("playerThreePic").src = playerArray[2][3];
		document.getElementById("nameFour").innerHTML = playerArray[3][1];
		document.getElementById("playerFourTitle").innerHTML = playerArray[3][2];
		document.getElementById("playerFourPic").src = playerArray[3][3];
		document.getElementById("nameFive").innerHTML = playerArray[4][1];
		document.getElementById("playerFiveTitle").innerHTML = playerArray[4][2];
		document.getElementById("playerFivePic").src = playerArray[4][3];
	} else if (totalPlayers == 7) {
		document.getElementById("nameOne").innerHTML = playerArray[0][1];
		document.getElementById("playerOneTitle").innerHTML = playerArray[0][2];
		document.getElementById("playerOnePic").src = playerArray[0][3];
		document.getElementById("nameTwo").innerHTML = playerArray[1][1];
		document.getElementById("playerTwoTitle").innerHTML = playerArray[1][2];
		document.getElementById("playerTwoPic").src = playerArray[1][3];
		document.getElementById("nameThree").innerHTML = playerArray[2][1];
		document.getElementById("playerThreeTitle").innerHTML = playerArray[2][2];
		document.getElementById("playerThreePic").src = playerArray[2][3];
		document.getElementById("nameFour").innerHTML = playerArray[3][1];
		document.getElementById("playerFourTitle").innerHTML = playerArray[3][2];
		document.getElementById("playerFourPic").src = playerArray[3][3];
		document.getElementById("nameFive").innerHTML = playerArray[4][1];
		document.getElementById("playerFiveTitle").innerHTML = playerArray[4][2];
		document.getElementById("playerFivePic").src = playerArray[4][3];
		document.getElementById("nameSix").innerHTML = playerArray[5][1];
		document.getElementById("playerSixTitle").innerHTML = playerArray[5][2];
		document.getElementById("playerSixPic").src = playerArray[5][3];
	}
	updatePropics();
	playerUser.name = name;
	playerUser.title = title;
	playerUser.userr = userr;
	playerOne.name = document.getElementById("nameOne").innerHTML;
	if (playerOne.name == "") {
		playerOne.name = "1";
	}
	playerOne.title = document.getElementById("playerOneTitle").innerHTML;
	var qw = 0;
	if (playerOne.name != "1") {
		while (qw < (totalPlayers - 1) && playerArray[qw][1] != playerOne.name) {
			qw += 1;
			console.log(qw);
			console.log(playerArray[0]);
		}
		playerOne.userr = playerArray[qw][0];
	}
	qw = 0;
	playerTwo.name = document.getElementById("nameTwo").innerHTML;
	if (playerTwo.name == "") {
		playerTwo.name = "2";
	}
	playerTwo.title = document.getElementById("playerTwoTitle").innerHTML;
	if (playerTwo.name != "2") {
		while (playerArray[qw][1] != playerTwo.name && qw < (totalPlayers - 1) && playerOne.userr == playerArray[qw][0]) {
			qw += 1;
		}
		playerTwo.userr = playerArray[qw][0];
	}
	qw = 0;
	playerThree.name = document.getElementById("nameThree").innerHTML;
	if (playerThree.name == "") {
		playerThree.name = "3";
	}
	playerThree.title = document.getElementById("playerThreeTitle").innerHTML;
	if (playerThree.name != "3") {
		while (playerArray[qw][1] != playerThree.name && qw < (totalPlayers - 1) && playerOne.userr == playerArray[qw][0] && playerTwo.userr == playerArray[qw][0]) {
			qw += 1;
		}
		playerThree.userr = playerArray[qw][0];
	}
	qw = 0;
	playerFour.name = document.getElementById("nameFour").innerHTML;
	if (playerFour.name == "") {
		playerFour.name = "4";
	}
	playerFour.title = document.getElementById("playerFourTitle").innerHTML;
	if (playerFour.name != "4") {
		while (playerArray[qw][1] != playerFour.name && qw < (totalPlayers - 1) && playerOne.userr == playerArray[qw][0] && playerTwo.userr == playerArray[qw][0] && playerThree.userr == playerArray[qw][0]) {
			qw += 1;
		}
		playerFour.userr = playerArray[qw][0];
	}
	qw = 0;
	playerFive.name = document.getElementById("nameFive").innerHTML;
	if (playerFive.name == "") {
		playerFive.name = "5";
	}
	playerFive.title = document.getElementById("playerFiveTitle").innerHTML;
	if (playerFive.name != "5") {
		while (playerArray[qw][1] != playerFive.name && qw < (totalPlayers - 1) && playerOne.userr == playerArray[qw][0] && playerTwo.userr == playerArray[qw][0] && playerThree.userr == playerArray[qw][0] && playerFour.userr == playerArray[qw][0]) {
			qw += 1;
		}
		playerFive.userr = playerArray[qw][0];
	}
	qw = 0;
	playerSix.name = document.getElementById("nameSix").innerHTML;
	if (playerSix.name == "") {
		playerSix.name = "6";
	}
	playerSix.title = document.getElementById("playerSixTitle").innerHTML;
	if (playerSix.name != "6") {
		while (playerArray[qw][1] != playerSix.name && qw < (totalPlayers - 1) && playerOne.userr == playerArray[qw][0] && playerTwo.userr == playerArray[qw][0] && playerThree.userr == playerArray[qw][0] && playerFour.userr == playerArray[qw][0] && playerFive.userr == playerArray[qw][0]) {
			qw += 1;
		}
		playerSix.userr = playerArray[qw][0];
	}
	qw = 0;
	if (document.getElementById("playerOneTitle").innerHTML == "Wolf of Wall Street") {
		document.getElementById("playerOneTitle").style.bottom = "-5px";
	}
	if (document.getElementById("playerTwoTitle").innerHTML == "Wolf of Wall Street") {
		document.getElementById("playerTwoTitle").style.bottom = "-5px";
	}
	if (document.getElementById("playerThreeTitle").innerHTML == "Wolf of Wall Street") {
		document.getElementById("playerThreeTitle").style.bottom = "-5px";
	}
	if (document.getElementById("playerFourTitle").innerHTML == "Wolf of Wall Street") {
		document.getElementById("playerFourTitle").style.bottom = "-5px";
	}
	if (document.getElementById("playerFiveTitle").innerHTML == "Wolf of Wall Street") {
		document.getElementById("playerFiveTitle").style.bottom = "-5px";
	}
	if (document.getElementById("playerSixTitle").innerHTML == "Wolf of Wall Street") {
		document.getElementById("playerSixTitle").style.bottom = "-5px";
	}
	if (callToWin == true && host == "true") {
		document.getElementById("callingButton").style.display = "block";
		console.log("blocked");
	}
}

document.getElementById("callingButton").onclick = callGame;

function callGame() {
	hasBeenCalled = true;
	document.getElementById("callingButton").style.display = "none";
}

cards = shuffle(cards);

if (host == "true") {
	//newCard();
	setTimeout(newCard, 2000);
}

pubnub.addListener({
	message: function(event) {
		console.log(event.message);
		if (JSON.parse(event.message).stayingIn == true && host == "true") {
			decided += 1;
			checkAllDecided();
		} else if (JSON.parse(event.message).stayingIn == false && host == "true") {
			//AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA check who left and adjust
			var zm = 0;
			console.log(JSON.parse(event.message).userr);
			while (JSON.parse(event.message).userr != playerArray[zm][0]) {
				console.log(playerArray[zm][0]);
				zm += 1;
			}
			if (playerArray[zm][1] == document.getElementById("nameOne").innerHTML && playerArray[zm][2] == document.getElementById("playerOneTitle").innerHTML) {
				leaving(1);
			} else if (playerArray[zm][1] == document.getElementById("nameTwo").innerHTML && playerArray[zm][2] == document.getElementById("playerTwoTitle").innerHTML) {
				leaving(2);
			} else if (playerArray[zm][1] == document.getElementById("nameThree").innerHTML && playerArray[zm][2] == document.getElementById("playerThreeTitle").innerHTML) {
				leaving(3);
			} else if (playerArray[zm][1] == document.getElementById("nameFour").innerHTML && playerArray[zm][2] == document.getElementById("playerFourTitle").innerHTML) {
				leaving(4);
			} else if (playerArray[zm][1] == document.getElementById("nameFive").innerHTML && playerArray[zm][2] == document.getElementById("playerFiveTitle").innerHTML) {
				leaving(5);
			} else if (playerArray[zm][1] == document.getElementById("nameSix").innerHTML && playerArray[zm][2] == document.getElementById("playerSixTitle").innerHTML) {
				leaving(6);
			}
			/* zm += 1;
			leaving(zm); */
			if (decided > 0) {
				checkAllDecided();
			}
		}
		if (JSON.parse(event.message).insAndOuts == true && host == "false") {
			var zz = 1;
			var yaya;
			/* while (JSON.parse(event.message).playerList[zz] != null) {
				playerList[zz].staying = JSON.parse(event.message).playerList[zz].staying;
				playerList[zz].justLeft = JSON.parse(event.message).playerList[zz].justLeft;
				zz += 1;
			} */
			while (zz < 7) {
				yaya = playerList[zz].userr;
				console.log(yaya);
				/* var coding = "if (JSON.parse(event.message)..staying == false) { leaving(zz); }";
				var txtt = coding.slice(0, 30) + yaya + coding.slice(30);
				console.log(JSON.stringify(txtt));
				eval(JSON.stringify(txtt));  */
				if (JSON.parse(event.message)[yaya].staying == false) {
					leaving(zz);
					console.log(yaya + " is leaving");
				}
				zz += 1;
			}
			distributeArtifact();
		}
		if (JSON.parse(event.message).sendingCard == true && host == "false") {
			while (i < 35) {
				cards[i] = JSON.parse(event.message).newCard;
				i += 1;
			}
			cards[i] = JSON.parse(event.message).newCard;
			cards[0] = JSON.parse(event.message).newCard;
			cards[1] = JSON.parse(event.message).newCard;
			newCard();
		}
		if (JSON.parse(event.message).roundDone == true && host == "false") {
			endRound();
		}
		if (JSON.parse(event.message).ready == true && host == "true") {
			startingRound += 1;
			if (startingRound == (totalPlayers - 1)) {
				newCard();
			}
		}
	}
});

function checkAllDecided() {
	if (decided == playersLeft && host == "true") {
		distributeArtifact();
		distributeInOut();
		newCard();
	}
}

function distributeInOut() {
	//AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA tell whos in and out
	var theObject = {insAndOuts: true, [playerList[0].userr]: playerList[0], [playerList[1].userr]: playerList[1], [playerList[2].userr]: playerList[2], [playerList[3].userr]: playerList[3], [playerList[4].userr]: playerList[4], [playerList[5].userr]: playerList[5], [playerList[6].userr]: playerList[6]};
	console.log(theObject);
	pubnub.publish({
		channel : hostInfo[0],
		message : JSON.stringify(theObject)
	});
}

function newCard() {
	if (playerList[1].staying == true) {
		document.getElementById("playerOneDecision").src = "staying.jpg";
	} else {
		document.getElementById("playerOneDecision").src = "leaving.jpg";
	}
	if (playerList[2].staying == true) {
		document.getElementById("playerTwoDecision").src = "staying.jpg";
	} else {
		document.getElementById("playerTwoDecision").src = "leaving.jpg";
	}
	if (playerList[3].staying == true) {
		document.getElementById("playerThreeDecision").src = "staying.jpg";
	} else {
		document.getElementById("playerThreeDecision").src = "leaving.jpg";
	}
	if (playerList[4].staying == true) {
		document.getElementById("playerFourDecision").src = "staying.jpg";
	} else {
		document.getElementById("playerFourDecision").src = "leaving.jpg";
	}
	if (playerList[5].staying == true) {
		document.getElementById("playerFiveDecision").src = "staying.jpg";
	} else {
		document.getElementById("playerFiveDecision").src = "leaving.jpg";
	}
	if (playerList[6].staying == true) {
		document.getElementById("playerSixDecision").src = "staying.jpg";
	} else {
		document.getElementById("playerSixDecision").src = "leaving.jpg";
	}
	decided = 0;
	if (eliminated == false) {
		flipCard(cards[i], p);
		setTimeout(newerCard, 3500);
	} else {
		eliminated = false;
		newerCard();
	}
	if (outed == false) {
		document.getElementById("userStaying").style.display = "block";
		document.getElementById("userLeaving").style.display = "block";
	}
}

document.getElementById("userStaying").onclick = userStaying;

function userStaying() {
	document.getElementById("userStaying").style.display = "none";
	document.getElementById("userLeaving").style.display = "none";
	if (host == "true") {
		decided += 1;
		checkAllDecided();
	} else if (host == "false") {
		pubnub.publish({
			channel : hostInfo[0],
			message : JSON.stringify({userr:userr, stayingIn:true})
		});
	}
}

document.getElementById("userLeaving").onclick = userLeaving;

function userLeaving() {
	document.getElementById("userStaying").style.display = "none";
	document.getElementById("userLeaving").style.display = "none";
	if (host == "true") {
		leaving(0);
		if (decided > 0) {
			checkAllDecided();
		}
	} else if (host == "false") {
		leaving(0);
		pubnub.publish({
			channel : hostInfo[0],
			message : JSON.stringify({userr:userr, stayingIn:false})
		});
	}
}

function newerCard() {
	var t;
	while (t < 7) {
		playerList[t].justLeft = false;
		t += 1;
	}
	r = 0;
	if (host == "true") {
		distributeNewCard(cards[i]);
	}
	if (p == 1) {
		document.getElementById("cardOne").src = cards[i];
		p += 1;
		cardType(cards[i]);
		if (i == 35) {
			i = 1;
		cards = shuffle(cards);
		} else {
			i += 1;
		}
	} else if (p == 2) {
		document.getElementById("cardTwo").src = cards[i];
		p += 1;
		cardType(cards[i]);
		if (i == 35) {
			i = 1;
		cards = shuffle(cards);
		} else {
			i += 1;
		}
	} else if (p == 3) {
		document.getElementById("cardThree").src = cards[i];
		p += 1;
		cardType(cards[i]);
		if (i == 35) {
			i = 1;
		cards = shuffle(cards);
		} else {
			i += 1;
		}
	} else if (p == 4) {
		document.getElementById("cardFour").src = cards[i];
		p += 1;
		cardType(cards[i]);
		if (i == 35) {
			i = 1;
		cards = shuffle(cards);
		} else {
			i += 1;
		}
	} else if (p == 5) {
		document.getElementById("cardFive").src = cards[i];
		p += 1;
		cardType(cards[i]);
		if (i == 35) {
			i = 1;
		cards = shuffle(cards);
		} else {
			i += 1;
		}
	} else if (p == 6) {
		document.getElementById("cardSix").src = cards[i];
		p += 1;
		cardType(cards[i]);
		if (i == 35) {
			i = 1;
		cards = shuffle(cards);
		} else {
			i += 1;
		}
	} else if (p == 7) {
		document.getElementById("cardSeven").src = cards[i];
		p += 1;
		cardType(cards[i]);
		if (i == 35) {
			i = 1;
		cards = shuffle(cards);
		} else {
			i += 1;
		}
	} else if (p == 8) {
		document.getElementById("cardEight").src = cards[i];
		p += 1;
		cardType(cards[i]);
		if (i == 35) {
			i = 1;
		cards = shuffle(cards);
		} else {
			i += 1;
		}
	} else if (p == 9) {
		setTimeout(cardType, 2500, cards[i]);
		layover();
		document.getElementById("cardNine").src = cards[i];
		p += 1;
		if (i == 35) {
			i = 1;
		cards = shuffle(cards);
		} else {
			i += 1;
		}
	} else if (p == 10) {
		document.getElementById("cardTen").src = cards[i];
		p += 1;
		cardType(cards[i]);
		if (i == 35) {
			i = 1;
		cards = shuffle(cards);
		} else {
			i += 1;
		}
	} else if (p == 11) {
		document.getElementById("cardEleven").src = cards[i];
		p += 1;
		cardType(cards[i]);
		if (i == 35) {
			i = 1;
		} else {
			i += 1;
		}
	} else if (p == 12) {
		document.getElementById("cardTwelve").src = cards[i];
		p += 1;
		cardType(cards[i]);
		if (i == 35) { 
			i = 1;
		cards = shuffle(cards);
		} else {
			i += 1;
		}
	} else if (p == 13) {
		setTimeout(cardType, 2500, cards[i]);
		doubleLayover();
		document.getElementById("cardThirteen").src = cards[i];
		p += 1;
		if (i == 35) {
			i = 1;
		cards = shuffle(cards);
		} else {
			i += 1;
		}
	} else if (p == 14) {
		document.getElementById("cardFourteen").src = cards[i];
		p += 1;
		cardType(cards[i]);
		if (i == 35) {
			i = 1;
		cards = shuffle(cards);
		} else {
			i += 1;
		}
	} else if (p == 15) {
		setTimeout(cardType, 2500, cards[i]);
		tripleLayover();
		document.getElementById("cardFifteen").src = cards[i];
		p += 1;
		if (i == 35) {
			i = 1;
		cards = shuffle(cards);
		} else {
			i += 1;
		}
	} else if (p == 16) {
		setTimeout(cardType, 2500, cards[i]);
		quadLayover();
		document.getElementById("cardSixteen").src = cards[i];
		p += 1;
		if (i == 35) {
			i = 1;
		cards = shuffle(cards);
		} else {
			i += 1;
		}
	} else if (p == 17) {
		p = eliminateCards();
		eliminated = true;
		newCard();
	}
	document.getElementById("cardPileOne").style.display = "hidden";
	document.getElementById("cardPileOne").src = "cardBack.jpg";
	document.getElementById("cardPileOne").style.left = "0px";
	document.getElementById("cardPileOne").style.left = "0px";
	document.getElementById("cardPileOne").style.display = "block";
}

function distributeNewCard(newCard) {
	pubnub.publish({
		channel : hostInfo[0],
		message : JSON.stringify({newCard:newCard, sendingCard:true})
	});
}

function flipCard(newCard, position) {
	var cardWidth = 100;
	var posi = 0;
	var posEnd = 0;
	if (position == 1) {
		posEnd = 0;
	} else if (position == 2) {
		posEnd = 100;
	} else if (position == 3) {
		posEnd = 200;
	} else if (position == 4) {
		posEnd = 300;
	} else if (position == 5) {
		posEnd = 400;
	} else if (position == 6) {
		posEnd = 500;
	} else if (position == 7) {
		posEnd = 600;
	} else if (position == 8) {
		posEnd = 700;
	} else if (position == 9) {
		posEnd = 800;
	} else if (position == 10) {
		posEnd = 500;
	} else if (position == 11) {
		posEnd = 600;
	} else if (position == 12) {
		posEnd = 700;
	} else if (position == 13) {
		posEnd = 800;
	} else if (position == 14) {
		posEnd = 700;
	} else if (position == 15) {
		posEnd = 800;
	} else if (position == 16) {
		posEnd = 850;
	}
	posEnd += 200;
	var idd = setInterval(frames, 15);
	function frames() {
		if (cardWidth == 0) {
			clearInterval(idd)
			document.getElementById("cardPileOne").src = newCard;
			var iddd = setInterval(framesd, 15);
			function framesd() {
				if (cardWidth == 100) {
					clearInterval(iddd)
				} else {
					posi += (posEnd/200);
					cardWidth += 1;
					document.getElementById("cardPileOne").style.left = posi + "px";
					document.getElementById("cardPileOne").style.width = cardWidth + "px";
				}
			}
		} else {
			posi += (posEnd/200);
			cardWidth = cardWidth - 1;
			document.getElementById("cardPileOne").style.left = posi + "px";
			document.getElementById("cardPileOne").style.width = cardWidth + "px";
		}
	}
}

function shuffle(array) {
  var currentIndex = array.length, temporaryValue, randomIndex;
  while (0 !== currentIndex) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }
  return array;
}

function layover() {
	var pos = 100;
	var id = setInterval(frame, 20);
	function frame() {
		if (pos == 50) {
			clearInterval(id)
		} else {
			pos = pos - 1;
			document.getElementById("cardHoldTwo").style.left = pos + "px";
			document.getElementById("cardHoldThree").style.left = (2*pos) + "px";
			document.getElementById("cardHoldFour").style.left = (3*pos) + "px";
			document.getElementById("cardHoldFive").style.left = (4*pos) + "px";
			document.getElementById("cardHoldSix").style.left = (5*pos) + "px";
			document.getElementById("cardHoldSeven").style.left = (6*pos) + "px";
			document.getElementById("cardHoldEight").style.left = (7*pos) + "px";
			document.getElementById("cardHoldNine").style.left = (8*pos) + "px";
		}
	}
}

function doubleLayover() {
	var posD = 100;
	var idD = setInterval(frameD, 20);
	function frameD() {
		if (posD == 50) {
			clearInterval(idD)
		} else {
			posD = posD - 1;
			document.getElementById("cardHoldTen").style.left = (posD+400) + "px";
			document.getElementById("cardHoldEleven").style.left = (2*posD+400) + "px";
			document.getElementById("cardHoldTwelve").style.left = (3*posD+400) + "px";
			document.getElementById("cardHoldThirteen").style.left = (4*posD+400) + "px";
		}
	}
}

function tripleLayover() {
	var posT = 100;
	var idT = setInterval(frameT, 20);
	function frameT() {
		if (posT == 50) {
			clearInterval(idT)
		} else {
			posT = posT - 1;
			document.getElementById("cardHoldFourteen").style.left = (posT+600) + "px";
			document.getElementById("cardHoldFifteen").style.left = (2*posT+600) + "px";
		}
	}
}

function quadLayover() {
	document.getElementById("cardHoldSixteen").style.left = "750px";
}

function eliminateCards() {
	var dangers = 0;
	document.getElementById("cardHoldTwo").style.left = "100px";
	document.getElementById("cardHoldThree").style.left = "200px";
	document.getElementById("cardHoldFour").style.left = "300px";
	document.getElementById("cardHoldFive").style.left = "400px";
	document.getElementById("cardHoldSix").style.left = "500px";
	document.getElementById("cardHoldSeven").style.left = "600px";
	document.getElementById("cardHoldEight").style.left = "700px";
	document.getElementById("cardHoldTen").style.left = "500px";
	document.getElementById("cardHoldEleven").style.left = "600px";
	document.getElementById("cardHoldTwelve").style.left = "700px";
	document.getElementById("cardHoldFourteen").style.left = "600px";
	document.getElementById("cardHoldSixteen").style.left = "700px";
	if (document.getElementById("cardOne").src.includes("fire.jpg") || document.getElementById("cardOne").src.includes("rocks.jpg") || document.getElementById("cardOne").src.includes("spiders.jpg") || document.getElementById("cardOne").src.includes("snake.jpg") || document.getElementById("cardOne").src.includes("mummy.jpg") || document.getElementById("cardOne").src.includes("artifact1.jpg") || document.getElementById("cardOne").src.includes("artifact2.jpg") || document.getElementById("cardOne").src.includes("artifact3.jpg") || document.getElementById("cardOne").src.includes("artifact4.jpg") || document.getElementById("cardOne").src.includes("artifact5.jpg")) {
		dangers += 1;
	} else {
		document.getElementById("cardOne").src = "";
	}
	if (document.getElementById("cardTwo").src.includes("fire.jpg") || document.getElementById("cardTwo").src.includes("rocks.jpg") || document.getElementById("cardTwo").src.includes("spiders.jpg") || document.getElementById("cardTwo").src.includes("snake.jpg") || document.getElementById("cardTwo").src.includes("mummy.jpg") || document.getElementById("cardTwo").src.includes("artifact1.jpg") || document.getElementById("cardTwo").src.includes("artifact2.jpg") || document.getElementById("cardTwo").src.includes("artifact3.jpg") || document.getElementById("cardTwo").src.includes("artifact4.jpg") || document.getElementById("cardTwo").src.includes("artifact5.jpg")) {
		dangers += 1;
		if (dangers == 1) {
			document.getElementById("cardOne").src = document.getElementById("cardTwo").src;
			document.getElementById("cardTwo").src = "";
		}
	} else {
		document.getElementById("cardTwo").src = "";
	}
	if (document.getElementById("cardThree").src.includes("fire.jpg") || document.getElementById("cardThree").src.includes("rocks.jpg") || document.getElementById("cardThree").src.includes("spiders.jpg") || document.getElementById("cardThree").src.includes("snake.jpg") || document.getElementById("cardThree").src.includes("mummy.jpg") || document.getElementById("cardThree").src.includes("artifact1.jpg") || document.getElementById("cardThree").src.includes("artifact2.jpg") || document.getElementById("cardThree").src.includes("artifact3.jpg") || document.getElementById("cardThree").src.includes("artifact4.jpg") || document.getElementById("cardThree").src.includes("artifact5.jpg")) {
		dangers += 1;
		if (dangers == 1) {
			document.getElementById("cardOne").src = document.getElementById("cardThree").src;
			document.getElementById("cardThree").src = "";
		} else if (dangers == 2) {
			document.getElementById("cardTwo").src = document.getElementById("cardThree").src;
			document.getElementById("cardThree").src = "";
		}
	} else {
		document.getElementById("cardThree").src = "";
	}
	if (document.getElementById("cardFour").src.includes("fire.jpg") || document.getElementById("cardFour").src.includes("rocks.jpg") || document.getElementById("cardFour").src.includes("spiders.jpg") || document.getElementById("cardFour").src.includes("snake.jpg") || document.getElementById("cardFour").src.includes("mummy.jpg") || document.getElementById("cardFour").src.includes("artifact1.jpg") || document.getElementById("cardFour").src.includes("artifact2.jpg") || document.getElementById("cardFour").src.includes("artifact3.jpg") || document.getElementById("cardFour").src.includes("artifact4.jpg") || document.getElementById("cardFour").src.includes("artifact5.jpg")) {
		dangers += 1;
		if (dangers == 1) {
			document.getElementById("cardOne").src = document.getElementById("cardFour").src;
			document.getElementById("cardFour").src = "";
		} else if (dangers == 2) {
			document.getElementById("cardTwo").src = document.getElementById("cardFour").src;
			document.getElementById("cardFour").src = "";
		} else if (dangers == 3) {
			document.getElementById("cardThree").src = document.getElementById("cardFour").src;
			document.getElementById("cardFour").src = "";
		}
	} else {
		document.getElementById("cardFour").src = "";
	}
	if (document.getElementById("cardFive").src.includes("fire.jpg") || document.getElementById("cardFive").src.includes("rocks.jpg") || document.getElementById("cardFive").src.includes("spiders.jpg") || document.getElementById("cardFive").src.includes("snake.jpg") || document.getElementById("cardFive").src.includes("mummy.jpg") || document.getElementById("cardFive").src.includes("artifact1.jpg") || document.getElementById("cardFive").src.includes("artifact2.jpg") || document.getElementById("cardFive").src.includes("artifact3.jpg") || document.getElementById("cardFive").src.includes("artifact4.jpg") || document.getElementById("cardFive").src.includes("artifact5.jpg")) {
		dangers += 1; 
		if (dangers == 1) {
			document.getElementById("cardOne").src = document.getElementById("cardFive").src;
			document.getElementById("cardFive").src = "";
		} else if (dangers == 2) {
			document.getElementById("cardTwo").src = document.getElementById("cardFive").src;
			document.getElementById("cardFive").src = "";
		} else if (dangers == 3) {
			document.getElementById("cardThree").src = document.getElementById("cardFive").src;
			document.getElementById("cardFive").src = "";
		} else if (dangers == 4) {
			document.getElementById("cardFour").src = document.getElementById("cardFive").src;
			document.getElementById("cardFive").src = "";
		}
	} else {
		document.getElementById("cardFive").src = "";
	}
	if (document.getElementById("cardSix").src.includes("fire.jpg") || document.getElementById("cardSix").src.includes("rocks.jpg") || document.getElementById("cardSix").src.includes("spiders.jpg") || document.getElementById("cardSix").src.includes("snake.jpg") || document.getElementById("cardSix").src.includes("mummy.jpg") || document.getElementById("cardSix").src.includes("artifact1.jpg") || document.getElementById("cardSix").src.includes("artifact2.jpg") || document.getElementById("cardSix").src.includes("artifact3.jpg") || document.getElementById("cardSix").src.includes("artifact4.jpg") || document.getElementById("cardSix").src.includes("artifact5.jpg")) {
		dangers += 1;
		if (dangers == 1) {
			document.getElementById("cardOne").src = document.getElementById("cardSix").src;
			document.getElementById("cardSix").src = "";
		} else if (dangers == 2) {
			document.getElementById("cardTwo").src = document.getElementById("cardSix").src;
			document.getElementById("cardSix").src = "";
		} else if (dangers == 3) {
			document.getElementById("cardThree").src = document.getElementById("cardSix").src;
			document.getElementById("cardSix").src = "";
		} else if (dangers == 4) {
			document.getElementById("cardFour").src = document.getElementById("cardSix").src;
			document.getElementById("cardSix").src = "";
		} else if (dangers == 5) {
			document.getElementById("cardFive").src = document.getElementById("cardSix").src;
			document.getElementById("cardSix").src = "";
		}
	} else {
		document.getElementById("cardSix").src = "";
	}
	if (document.getElementById("cardSeven").src.includes("fire.jpg") || document.getElementById("cardSeven").src.includes("rocks.jpg") || document.getElementById("cardSeven").src.includes("spiders.jpg") || document.getElementById("cardSeven").src.includes("snake.jpg") || document.getElementById("cardSeven").src.includes("mummy.jpg") || document.getElementById("cardSeven").src.includes("artifact1.jpg") || document.getElementById("cardSeven").src.includes("artifact2.jpg") || document.getElementById("cardSeven").src.includes("artifact3.jpg") || document.getElementById("cardSeven").src.includes("artifact4.jpg") || document.getElementById("cardSeven").src.includes("artifact5.jpg")) {
		dangers += 1;
		if (dangers == 1) {
			document.getElementById("cardOne").src = document.getElementById("cardSeven").src;
			document.getElementById("cardSeven").src = "";
		} else if (dangers == 2) {
			document.getElementById("cardTwo").src = document.getElementById("cardSeven").src;
			document.getElementById("cardSeven").src = "";
		} else if (dangers == 3) {
			document.getElementById("cardThree").src = document.getElementById("cardSeven").src;
			document.getElementById("cardSeven").src = "";
		} else if (dangers == 4) {
			document.getElementById("cardFour").src = document.getElementById("cardSeven").src;
			document.getElementById("cardSeven").src = "";
		} else if (dangers == 5) {
			document.getElementById("cardFive").src = document.getElementById("cardSeven").src;
			document.getElementById("cardSeven").src = "";
		} else if (dangers == 6) {
			document.getElementById("cardSix").src = document.getElementById("cardSeven").src;
			document.getElementById("cardSeven").src = "";
		}
	} else {
		document.getElementById("cardSeven").src = "";
	}
	if (document.getElementById("cardEight").src.includes("fire.jpg") || document.getElementById("cardEight").src.includes("rocks.jpg") || document.getElementById("cardEight").src.includes("spiders.jpg") || document.getElementById("cardEight").src.includes("snake.jpg") || document.getElementById("cardEight").src.includes("mummy.jpg") || document.getElementById("cardEight").src.includes("artifact1.jpg") || document.getElementById("cardEight").src.includes("artifact2.jpg") || document.getElementById("cardEight").src.includes("artifact3.jpg") || document.getElementById("cardEight").src.includes("artifact4.jpg") || document.getElementById("cardEight").src.includes("artifact5.jpg")) {
		dangers += 1;
		if (dangers == 1) {
			document.getElementById("cardOne").src = document.getElementById("cardEight").src;
			document.getElementById("cardEight").src = "";
		} else if (dangers == 2) {
			document.getElementById("cardTwo").src = document.getElementById("cardEight").src;
			document.getElementById("cardEight").src = "";
		} else if (dangers == 3) {
			document.getElementById("cardThree").src = document.getElementById("cardEight").src;
			document.getElementById("cardEight").src = "";
		} else if (dangers == 4) {
			document.getElementById("cardFour").src = document.getElementById("cardEight").src;
			document.getElementById("cardEight").src = "";
		} else if (dangers == 5) {
			document.getElementById("cardFive").src = document.getElementById("cardEight").src;
			document.getElementById("cardEight").src = "";
		} else if (dangers == 6) {
			document.getElementById("cardSix").src = document.getElementById("cardEight").src;
			document.getElementById("cardEight").src = "";
		} else if (dangers == 7) {
			document.getElementById("cardSeven").src = document.getElementById("cardEight").src;
			document.getElementById("cardEight").src = "";
		}
	} else {
		document.getElementById("cardEight").src = "";
	}
	if (document.getElementById("cardNine").src.includes("fire.jpg") || document.getElementById("cardNine").src.includes("rocks.jpg") || document.getElementById("cardNine").src.includes("spiders.jpg") || document.getElementById("cardNine").src.includes("snake.jpg") || document.getElementById("cardNine").src.includes("mummy.jpg") || document.getElementById("cardNine").src.includes("artifact1.jpg") || document.getElementById("cardNine").src.includes("artifact2.jpg") || document.getElementById("cardNine").src.includes("artifact3.jpg") || document.getElementById("cardNine").src.includes("artifact4.jpg") || document.getElementById("cardNine").src.includes("artifact5.jpg")) {
		dangers += 1;
		if (dangers == 1) {
			document.getElementById("cardOne").src = document.getElementById("cardNine").src;
			document.getElementById("cardNine").src = "";
		} else if (dangers == 2) {
			document.getElementById("cardTwo").src = document.getElementById("cardNine").src;
			document.getElementById("cardNine").src = "";
		} else if (dangers == 3) {
			document.getElementById("cardThree").src = document.getElementById("cardNine").src;
			document.getElementById("cardNine").src = "";
		} else if (dangers == 4) {
			document.getElementById("cardFour").src = document.getElementById("cardNine").src;
			document.getElementById("cardNine").src = "";
		} else if (dangers == 5) {
			document.getElementById("cardFive").src = document.getElementById("cardNine").src;
			document.getElementById("cardNine").src = "";
		} else if (dangers == 6) {
			document.getElementById("cardSix").src = document.getElementById("cardNine").src;
			document.getElementById("cardNine").src = "";
		} else if (dangers == 7) {
			document.getElementById("cardSeven").src = document.getElementById("cardNine").src;
			document.getElementById("cardNine").src = "";
		} else if (dangers == 8) {
			document.getElementById("cardEight").src = document.getElementById("cardNine").src;
			document.getElementById("cardNine").src = "";
		}
	} else {
		document.getElementById("cardNine").src = "";
	}
	if (document.getElementById("cardTen").src.includes("fire.jpg") || document.getElementById("cardTen").src.includes("rocks.jpg") || document.getElementById("cardTen").src.includes("spiders.jpg") || document.getElementById("cardTen").src.includes("snake.jpg") || document.getElementById("cardTen").src.includes("mummy.jpg") || document.getElementById("cardTen").src.includes("artifact1.jpg") || document.getElementById("cardTen").src.includes("artifact2.jpg") || document.getElementById("cardTen").src.includes("artifact3.jpg") || document.getElementById("cardTen").src.includes("artifact4.jpg") || document.getElementById("cardTen").src.includes("artifact5.jpg")) {
		dangers += 1;
		if (dangers == 1) {
			document.getElementById("cardOne").src = document.getElementById("cardTen").src;
			document.getElementById("cardTen").src = "";
		} else if (dangers == 2) {
			document.getElementById("cardTwo").src = document.getElementById("cardTen").src;
			document.getElementById("cardTen").src = "";
		} else if (dangers == 3) {
			document.getElementById("cardThree").src = document.getElementById("cardTen").src;
			document.getElementById("cardTen").src = "";
		} else if (dangers == 4) {
			document.getElementById("cardFour").src = document.getElementById("cardTen").src;
			document.getElementById("cardTen").src = "";
		} else if (dangers == 5) {
			document.getElementById("cardFive").src = document.getElementById("cardTen").src;
			document.getElementById("cardTen").src = "";
		} else if (dangers == 6) {
			document.getElementById("cardSix").src = document.getElementById("cardTen").src;
			document.getElementById("cardTen").src = "";
		} else if (dangers == 7) {
			document.getElementById("cardSeven").src = document.getElementById("cardTen").src;
			document.getElementById("cardTen").src = "";
		} else if (dangers == 8) {
			document.getElementById("cardEight").src = document.getElementById("cardTen").src;
			document.getElementById("cardTen").src = "";
		} else if (dangers == 9) {
			layover();
			document.getElementById("cardNine").src = document.getElementById("cardTen").src;
			document.getElementById("cardTen").src = "";
		}
	} else {
		document.getElementById("cardTen").src = "";
	}
	if (document.getElementById("cardEleven").src.includes("fire.jpg") || document.getElementById("cardEleven").src.includes("rocks.jpg") || document.getElementById("cardEleven").src.includes("spiders.jpg") || document.getElementById("cardEleven").src.includes("snake.jpg") || document.getElementById("cardEleven").src.includes("mummy.jpg") || document.getElementById("cardEleven").src.includes("artifact1.jpg") || document.getElementById("cardEleven").src.includes("artifact2.jpg") || document.getElementById("cardEleven").src.includes("artifact3.jpg") || document.getElementById("cardEleven").src.includes("artifact4.jpg") || document.getElementById("cardEleven").src.includes("artifact5.jpg")) {
		dangers += 1;
		if (dangers == 1) {
			document.getElementById("cardOne").src = document.getElementById("cardEleven").src;
			document.getElementById("cardEleven").src = "";
		} else if (dangers == 2) {
			document.getElementById("cardTwo").src = document.getElementById("cardEleven").src;
			document.getElementById("cardEleven").src = "";
		} else if (dangers == 3) {
			document.getElementById("cardThree").src = document.getElementById("cardEleven").src;
			document.getElementById("cardEleven").src = "";
		} else if (dangers == 4) {
			document.getElementById("cardFour").src = document.getElementById("cardEleven").src;
			document.getElementById("cardEleven").src = "";
		} else if (dangers == 5) {
			document.getElementById("cardFive").src = document.getElementById("cardEleven").src;
			document.getElementById("cardEleven").src = "";
		} else if (dangers == 6) {
			document.getElementById("cardSix").src = document.getElementById("cardEleven").src;
			document.getElementById("cardEleven").src = "";
		} else if (dangers == 7) {
			document.getElementById("cardSeven").src = document.getElementById("cardEleven").src;
			document.getElementById("cardEleven").src = "";
		} else if (dangers == 8) {
			document.getElementById("cardEight").src = document.getElementById("cardEleven").src;
			document.getElementById("cardEleven").src = "";
		} else if (dangers == 9) {
			layover();
			document.getElementById("cardNine").src = document.getElementById("cardEleven").src;
			document.getElementById("cardEleven").src = "";
		} else if (dangers == 10) {
			layover();
			document.getElementById("cardTen").src = document.getElementById("cardEleven").src;
			document.getElementById("cardEleven").src = "";
		}
	} else {
		document.getElementById("cardEleven").src = "";
	}
	if (document.getElementById("cardTwelve").src.includes("fire.jpg") || document.getElementById("cardTwelve").src.includes("rocks.jpg") || document.getElementById("cardTwelve").src.includes("spiders.jpg") || document.getElementById("cardTwelve").src.includes("snake.jpg") || document.getElementById("cardTwelve").src.includes("mummy.jpg") || document.getElementById("cardTwelve").src.includes("artifact1.jpg") || document.getElementById("cardTwelve").src.includes("artifact2.jpg") || document.getElementById("cardTwelve").src.includes("artifact3.jpg") || document.getElementById("cardTwelve").src.includes("artifact4.jpg") || document.getElementById("cardTwelve").src.includes("artifact5.jpg")) {
		dangers += 1;
		if (dangers == 1) {
			document.getElementById("cardOne").src = document.getElementById("cardTwelve").src;
			document.getElementById("cardTwelve").src = "";
		} else if (dangers == 2) {
			document.getElementById("cardTwo").src = document.getElementById("cardTwelve").src;
			document.getElementById("cardTwelve").src = "";
		} else if (dangers == 3) {
			document.getElementById("cardThree").src = document.getElementById("cardTwelve").src;
			document.getElementById("cardTwelve").src = "";
		} else if (dangers == 4) {
			document.getElementById("cardFour").src = document.getElementById("cardTwelve").src;
			document.getElementById("cardTwelve").src = "";
		} else if (dangers == 5) {
			document.getElementById("cardFive").src = document.getElementById("cardTwelve").src;
			document.getElementById("cardTwelve").src = "";
		} else if (dangers == 6) {
			document.getElementById("cardSix").src = document.getElementById("cardTwelve").src;
			document.getElementById("cardTwelve").src = "";
		} else if (dangers == 7) {
			document.getElementById("cardSeven").src = document.getElementById("cardTwelve").src;
			document.getElementById("cardTwelve").src = "";
		} else if (dangers == 8) {
			document.getElementById("cardEight").src = document.getElementById("cardTwelve").src;
			document.getElementById("cardTwelve").src = "";
		} else if (dangers == 9) {
			layover();
			document.getElementById("cardNine").src = document.getElementById("cardTwelve").src;
			document.getElementById("cardTwelve").src = "";
		} else if (dangers == 10) {
			layover();
			document.getElementById("cardTen").src = document.getElementById("cardTwelve").src;
			document.getElementById("cardTwelve").src = "";
		} else if (dangers == 11) {
			layover();
			document.getElementById("cardEleven").src = document.getElementById("cardTwelve").src;
			document.getElementById("cardTwelve").src = "";
		}
	} else {
		document.getElementById("cardTwelve").src = "";
	}
	if (document.getElementById("cardThirteen").src.includes("fire.jpg") || document.getElementById("cardThirteen").src.includes("rocks.jpg") || document.getElementById("cardThirteen").src.includes("spiders.jpg") || document.getElementById("cardThirteen").src.includes("snake.jpg") || document.getElementById("cardThirteen").src.includes("mummy.jpg") || document.getElementById("cardThirteen").src.includes("artifact1.jpg") || document.getElementById("cardThirteen").src.includes("artifact2.jpg") || document.getElementById("cardThirteen").src.includes("artifact3.jpg") || document.getElementById("cardThirteen").src.includes("artifact4.jpg") || document.getElementById("cardThirteen").src.includes("artifact5.jpg")) {
		dangers += 1;
		if (dangers == 1) {
			document.getElementById("cardOne").src = document.getElementById("cardThirteen").src;
			document.getElementById("cardThirteen").src = "";
		} else if (dangers == 2) {
			document.getElementById("cardTwo").src = document.getElementById("cardThirteen").src;
			document.getElementById("cardThirteen").src = "";
		} else if (dangers == 3) {
			document.getElementById("cardThree").src = document.getElementById("cardThirteen").src;
			document.getElementById("cardThirteen").src = "";
		} else if (dangers == 4) {
			document.getElementById("cardFour").src = document.getElementById("cardThirteen").src;
			document.getElementById("cardThirteen").src = "";
		} else if (dangers == 5) {
			document.getElementById("cardFive").src = document.getElementById("cardThirteen").src;
			document.getElementById("cardThirteen").src = "";
		} else if (dangers == 6) {
			document.getElementById("cardSix").src = document.getElementById("cardThirteen").src;
			document.getElementById("cardThirteen").src = "";
		} else if (dangers == 7) {
			document.getElementById("cardSeven").src = document.getElementById("cardThirteen").src;
			document.getElementById("cardThirteen").src = "";
		} else if (dangers == 8) {
			document.getElementById("cardEight").src = document.getElementById("cardThirteen").src;
			document.getElementById("cardThirteen").src = "";
		} else if (dangers == 9) {
			layover();
			document.getElementById("cardNine").src = document.getElementById("cardThirteen").src;
			document.getElementById("cardThirteen").src = "";
		} else if (dangers == 10) {
			layover();
			document.getElementById("cardTen").src = document.getElementById("cardThirteen").src;
			document.getElementById("cardThirteen").src = "";
		} else if (dangers == 11) {
			layover();
			document.getElementById("cardEleven").src = document.getElementById("cardThirteen").src;
			document.getElementById("cardThirteen").src = "";
		}
	} else {
		document.getElementById("cardThirteen").src = "";
	}
	if (document.getElementById("cardFourteen").src.includes("fire.jpg") || document.getElementById("cardFourteen").src.includes("rocks.jpg") || document.getElementById("cardFourteen").src.includes("spiders.jpg") || document.getElementById("cardFourteen").src.includes("snake.jpg") || document.getElementById("cardFourteen").src.includes("mummy.jpg") || document.getElementById("cardFourteen").src.includes("artifact1.jpg") || document.getElementById("cardFourteen").src.includes("artifact2.jpg") || document.getElementById("cardFourteen").src.includes("artifact3.jpg") || document.getElementById("cardFourteen").src.includes("artifact4.jpg") || document.getElementById("cardFourteen").src.includes("artifact5.jpg")) {
		dangers += 1;
		if (dangers == 1) {
			document.getElementById("cardOne").src = document.getElementById("cardFourteen").src;
			document.getElementById("cardFourteen").src = "";
		} else if (dangers == 2) {
			document.getElementById("cardTwo").src = document.getElementById("cardFourteen").src;
			document.getElementById("cardFourteen").src = "";
		} else if (dangers == 3) {
			document.getElementById("cardThree").src = document.getElementById("cardFourteen").src;
			document.getElementById("cardFourteen").src = "";
		} else if (dangers == 4) {
			document.getElementById("cardFour").src = document.getElementById("cardFourteen").src;
			document.getElementById("cardFourteen").src = "";
		} else if (dangers == 5) {
			document.getElementById("cardFive").src = document.getElementById("cardFourteen").src;
			document.getElementById("cardFourteen").src = "";
		} else if (dangers == 6) {
			document.getElementById("cardSix").src = document.getElementById("cardFourteen").src;
			document.getElementById("cardFourteen").src = "";
		} else if (dangers == 7) {
			document.getElementById("cardSeven").src = document.getElementById("cardFourteen").src;
			document.getElementById("cardFourteen").src = "";
		} else if (dangers == 8) {
			document.getElementById("cardEight").src = document.getElementById("cardFourteen").src;
			document.getElementById("cardFourteen").src = "";
		} else if (dangers == 9) {
			layover();
			document.getElementById("cardNine").src = document.getElementById("cardFourteen").src;
			document.getElementById("cardFourteen").src = "";
		} else if (dangers == 10) {
			layover();
			document.getElementById("cardTen").src = document.getElementById("cardFourteen").src;
			document.getElementById("cardFourteen").src = "";
		} else if (dangers == 11) {
			layover();
			document.getElementById("cardEleven").src = document.getElementById("cardFourteen").src;
			document.getElementById("cardFourteen").src = "";
		}
	} else {
		document.getElementById("cardFourteen").src = "";
	}
	if (document.getElementById("cardFifteen").src.includes("fire.jpg") || document.getElementById("cardFifteen").src.includes("rocks.jpg") || document.getElementById("cardFifteen").src.includes("spiders.jpg") || document.getElementById("cardFifteen").src.includes("snake.jpg") || document.getElementById("cardFifteen").src.includes("mummy.jpg") || document.getElementById("cardFifteen").src.includes("artifact1.jpg") || document.getElementById("cardFifteen").src.includes("artifact2.jpg") || document.getElementById("cardFifteen").src.includes("artifact3.jpg") || document.getElementById("cardFifteen").src.includes("artifact4.jpg") || document.getElementById("cardFifteen").src.includes("artifact5.jpg")) {
		dangers += 1;
		if (dangers == 1) {
			document.getElementById("cardOne").src = document.getElementById("cardFifteen").src;
			document.getElementById("cardFifteen").src = "";
		} else if (dangers == 2) {
			document.getElementById("cardTwo").src = document.getElementById("cardFifteen").src;
			document.getElementById("cardFifteen").src = "";
		} else if (dangers == 3) {
			document.getElementById("cardThree").src = document.getElementById("cardFifteen").src;
			document.getElementById("cardFifteen").src = "";
		} else if (dangers == 4) {
			document.getElementById("cardFour").src = document.getElementById("cardFifteen").src;
			document.getElementById("cardFifteen").src = "";
		} else if (dangers == 5) {
			document.getElementById("cardFive").src = document.getElementById("cardFifteen").src;
			document.getElementById("cardFifteen").src = "";
		} else if (dangers == 6) {
			document.getElementById("cardSix").src = document.getElementById("cardFifteen").src;
			document.getElementById("cardFifteen").src = "";
		} else if (dangers == 7) {
			document.getElementById("cardSeven").src = document.getElementById("cardFifteen").src;
			document.getElementById("cardFifteen").src = "";
		} else if (dangers == 8) {
			document.getElementById("cardEight").src = document.getElementById("cardFifteen").src;
			document.getElementById("cardFifteen").src = "";
		} else if (dangers == 9) {
			layover();
			document.getElementById("cardNine").src = document.getElementById("cardFifteen").src;
			document.getElementById("cardFifteen").src = "";
		} else if (dangers == 10) {
			layover();
			document.getElementById("cardTen").src = document.getElementById("cardFifteen").src;
			document.getElementById("cardFifteen").src = "";
		} else if (dangers == 11) {
			layover();
			document.getElementById("cardEleven").src = document.getElementById("cardFifteen").src;
			document.getElementById("cardFifteen").src = "";
		}
	} else {
		document.getElementById("cardFifteen").src = "";
	}
	if (document.getElementById("cardSixteen").src.includes("fire.jpg") || document.getElementById("cardSixteen").src.includes("rocks.jpg") || document.getElementById("cardSixteen").src.includes("spiders.jpg") || document.getElementById("cardSixteen").src.includes("snake.jpg") || document.getElementById("cardSixteen").src.includes("mummy.jpg") || document.getElementById("cardSixteen").src.includes("artifact1.jpg") || document.getElementById("cardSixteen").src.includes("artifact2.jpg") || document.getElementById("cardSixteen").src.includes("artifact3.jpg") || document.getElementById("cardSixteen").src.includes("artifact4.jpg") || document.getElementById("cardSixteen").src.includes("artifact5.jpg")) {
		dangers += 1;
		if (dangers == 1) {
			document.getElementById("cardOne").src = document.getElementById("cardSixteen").src;
			document.getElementById("cardSixteen").src = "";
		} else if (dangers == 2) {
			document.getElementById("cardTwo").src = document.getElementById("cardSixteen").src;
			document.getElementById("cardSixteen").src = "";
		} else if (dangers == 3) {
			document.getElementById("cardThree").src = document.getElementById("cardSixteen").src;
			document.getElementById("cardSixteen").src = "";
		} else if (dangers == 4) {
			document.getElementById("cardFour").src = document.getElementById("cardSixteen").src;
			document.getElementById("cardSixteen").src = "";
		} else if (dangers == 5) {
			document.getElementById("cardFive").src = document.getElementById("cardSixteen").src;
			document.getElementById("cardSixteen").src = "";
		} else if (dangers == 6) {
			document.getElementById("cardSix").src = document.getElementById("cardSixteen").src;
			document.getElementById("cardSixteen").src = "";
		} else if (dangers == 7) {
			document.getElementById("cardSeven").src = document.getElementById("cardSixteen").src;
			document.getElementById("cardSixteen").src = "";
		} else if (dangers == 8) {
			document.getElementById("cardEight").src = document.getElementById("cardSixteen").src;
			document.getElementById("cardSixteen").src = "";
		} else if (dangers == 9) {
			layover();
			document.getElementById("cardNine").src = document.getElementById("cardSixteen").src;
			document.getElementById("cardSixteen").src = "";
		} else if (dangers == 10) {
			layover();
			document.getElementById("cardTen").src = document.getElementById("cardSixteen").src;
			document.getElementById("cardSixteen").src = "";
		} else if (dangers == 11) {
			layover();
			document.getElementById("cardEleven").src = document.getElementById("cardSixteen").src;
			document.getElementById("cardSixteen").src = "";
		}
	} else {
		document.getElementById("cardSixteen").src = "";
	}
	return dangers + 1;
}

function cardType(newestCard) {
	if (newestCard == "fire.jpg" || newestCard == "rocks.jpg" || newestCard == "mummy.jpg" || newestCard == "spiders.jpg" || newestCard == "snake.jpg") {
		checkRoundEnd(newestCard);
	} else if (newestCard == "artifact1.jpg" || newestCard == "artifact2.jpg" || newestCard == "artifact3.jpg" || newestCard == "artifact4.jpg" || newestCard == "artifact5.jpg") {
		artifactNum += 1;
	} else {
		distributeGems(newestCard);
	}
}

function distributeGems(cardSource) {
	var roundGems = 0;
	var c = 0;
	if (cardSource == "oneGem.jpg") {
		roundGems = Math.floor(1/playersLeft);
	} else if (cardSource == "twoGems.jpg") {
		roundGems = Math.floor(2/playersLeft);
	} else if (cardSource == "threeGems.jpg") {
		roundGems = Math.floor(3/playersLeft);
	} else if (cardSource == "fourGems.jpg") {
		roundGems = Math.floor(4/playersLeft);
	} else if (cardSource == "fiveGems.jpg") {
		roundGems = Math.floor(5/playersLeft);
	} else if (cardSource == "sevenGems.jpg") {
		roundGems = Math.floor(7/playersLeft);
	} else if (cardSource == "nineGems.jpg") {
		roundGems = Math.floor(9/playersLeft);
	} else if (cardSource == "elevenGems.jpg") {
		roundGems = Math.floor(11/playersLeft);
	} else if (cardSource == "thirteenGems.jpg") {
		roundGems = Math.floor(13/playersLeft);
	} else if (cardSource == "fourteenGems.jpg") {
		roundGems = Math.floor(14/playersLeft);
	} else if (cardSource == "fifteenGems.jpg") {
		roundGems = Math.floor(15/playersLeft);
	} else if (cardSource == "seventeenGems.jpg") {
		roundGems = Math.floor(17/playersLeft);
	}
	while (c < 7) {
		if (playerList[c].staying == true) {
			console.log(playerList[c].name + "got gems");
			console.log(roundGems);
			playerList[c].playerRoundGems += roundGems;
		}
		c += 1;
	}
	reduceGems();
}

function checkRoundEnd(cardSource) {
	if (cardSource == "fire.jpg") {
		roundFires += 1;
	} else if (cardSource == "rocks.jpg") {
		roundRocks += 1;
	} else if (cardSource == "mummy.jpg") {
		roundMummies += 1;
	} else if (cardSource == "snake.jpg") {
		roundSnakes += 1;
	} else if (cardSource == "spiders.jpg") {
		roundSpiders += 1;
	}
	if ((roundFires > 1 || roundRocks > 1 || roundMummies > 1 || roundSnakes > 1 || roundSpiders > 1) && host == "true") {
		endRound();
	}
}

function endRound() {
	if (hasBeenCalled == true) {
		roundsDone += 1;
	}
	roundsPlayed += 1;
	startingRound = 0;
	cards = shuffle(cards);
	outed = false;
	var c = 0;
	i = 1;
	r = 0;
	p = 1;
	var q = 0;
	var w = 0;
	artifactNum = 0;
	decided = 0;
	roundFires = 0;
	roundMummies = 0;
	roundSnakes = 0;
	roundSpiders = 0;
	roundRocks = 0;
	playersLeft = totalPlayers;
	var pq = 0;
	while (pq < 7) {
		playerList[pq].justLeft = false;
		pq += 1;
	}
	while (c < 7) {
		playerList[c].playerRoundGems = 0;
		playerList[c].staying = true;
		c += 1;
	}
	while (q < 7) {
		w = 0;
		while (w < 8) {
			gemSlots[q][w].src = "";
			w += 1;
		}
		q += 1;
	}
	document.getElementsByClassName("playerDecisionCard").src = "staying.jpg";
	document.getElementById("cardHoldTwo").style.left = "100px";
	document.getElementById("cardHoldThree").style.left = "200px";
	document.getElementById("cardHoldFour").style.left = "300px";
	document.getElementById("cardHoldFive").style.left = "400px";
	document.getElementById("cardHoldSix").style.left = "500px";
	document.getElementById("cardHoldSeven").style.left = "600px";
	document.getElementById("cardHoldEight").style.left = "700px";
	document.getElementById("cardHoldTen").style.left = "500px";
	document.getElementById("cardHoldEleven").style.left = "600px";
	document.getElementById("cardHoldTwelve").style.left = "700px";
	document.getElementById("cardHoldFourteen").style.left = "600px";
	document.getElementById("cardHoldSixteen").style.left = "700px";
	document.getElementById("cardOne").src = "";
	document.getElementById("cardTwo").src = "";
	document.getElementById("cardThree").src = "";
	document.getElementById("cardFour").src = "";
	document.getElementById("cardFive").src = "";
	document.getElementById("cardSix").src = "";
	document.getElementById("cardSeven").src = "";
	document.getElementById("cardEight").src = "";
	document.getElementById("cardNine").src = "";
	document.getElementById("cardTen").src = "";
	document.getElementById("cardEleven").src = "";
	document.getElementById("cardTwelve").src = "";
	document.getElementById("cardThirteen").src = "";
	document.getElementById("cardFourteen").src = "";
	document.getElementById("cardFifteen").src = "";
	document.getElementById("cardSixteen").src = "";
	if (host == "true") {
		tellEndRound();
	}
	if (host == "false") {
		pubnub.publish({
		channel : hostInfo[0],
		message : JSON.stringify({ready:true})
	});
	}
	checkGameDone();
}

function tellEndRound() {
	pubnub.publish({
		channel : hostInfo[0],
		message : JSON.stringify({roundDone:true})
	});
}

function reduceGems() {
	var pOneBlack;
	var pOneGold;
	var pOneBlue;
	var pTwoBlack;
	var pTwoGold;
	var pTwoBlue;
	var pThreeBlack;
	var pThreeGold;
	var pThreeBlue;
	var pFourBlack;
	var pFourGold;
	var pFourBlue;
	var pFiveBlack;
	var pFiveGold;
	var pFiveBlue;
	var pSixBlack;
	var pSixGold;
	var pSixBlue;
	var pUBlack;
	var pUGold;
	var pUBlue;
	var q = 0;
	var w = 0;
	if (totalPlayers == 7) {
		pUGold = Math.floor(playerUser.playerRoundGems/10);
		pUBlack = Math.floor((playerUser.playerRoundGems-(pUGold*10))/5);
		pUBlue = playerUser.playerRoundGems-(pUGold*10)-(pUBlack*5);
		pOneGold = Math.floor(playerOne.playerRoundGems/10);
		pOneBlack = Math.floor((playerOne.playerRoundGems-(pOneGold*10))/5);
		pOneBlue = playerOne.playerRoundGems-(pOneGold*10)-(pOneBlack*5);
		pTwoGold = Math.floor(playerTwo.playerRoundGems/10);
		pTwoBlack = Math.floor((playerTwo.playerRoundGems-(pTwoGold*10))/5);
		pTwoBlue = playerTwo.playerRoundGems-(pTwoGold*10)-(pTwoBlack*5);
		pThreeGold = Math.floor(playerThree.playerRoundGems/10);
		pThreeBlack = Math.floor((playerThree.playerRoundGems-(pThreeGold*10))/5);
		pThreeBlue = playerThree.playerRoundGems-(pThreeGold*10)-(pThreeBlack*5);
		pFourGold = Math.floor(playerFour.playerRoundGems/10);
		pFourBlack = Math.floor((playerFour.playerRoundGems-(pFourGold*10))/5);
		pFourBlue = playerFour.playerRoundGems-(pFourGold*10)-(pFourBlack*5);
		pFiveGold = Math.floor(playerFive.playerRoundGems/10);
		pFiveBlack = Math.floor((playerFive.playerRoundGems-(pFiveGold*10))/5);
		pFiveBlue = playerFive.playerRoundGems-(pFiveGold*10)-(pFiveBlack*5);
		pSixGold = Math.floor(playerSix.playerRoundGems/10);
		pSixBlack = Math.floor((playerSix.playerRoundGems-(pSixGold*10))/5);
		pSixBlue = playerSix.playerRoundGems-(pSixGold*10)-(pSixBlack*5);
	} else if (totalPlayers == 6) {
		pUGold = Math.floor(playerUser.playerRoundGems/10);
		pUBlack = Math.floor((playerUser.playerRoundGems-(pUGold*10))/5);
		pUBlue = playerUser.playerRoundGems-(pUGold*10)-(pUBlack*5);
		pOneGold = Math.floor(playerOne.playerRoundGems/10);
		pOneBlack = Math.floor((playerOne.playerRoundGems-(pOneGold*10))/5);
		pOneBlue = playerOne.playerRoundGems-(pOneGold*10)-(pOneBlack*5);
		pTwoGold = Math.floor(playerTwo.playerRoundGems/10);
		pTwoBlack = Math.floor((playerTwo.playerRoundGems-(pTwoGold*10))/5);
		pTwoBlue = playerTwo.playerRoundGems-(pTwoGold*10)-(pTwoBlack*5);
		pThreeGold = Math.floor(playerThree.playerRoundGems/10);
		pThreeBlack = Math.floor((playerThree.playerRoundGems-(pThreeGold*10))/5);
		pThreeBlue = playerThree.playerRoundGems-(pThreeGold*10)-(pThreeBlack*5);
		pFourGold = Math.floor(playerFour.playerRoundGems/10);
		pFourBlack = Math.floor((playerFour.playerRoundGems-(pFourGold*10))/5);
		pFourBlue = playerFour.playerRoundGems-(pFourGold*10)-(pFourBlack*5);
		pFiveGold = Math.floor(playerFive.playerRoundGems/10);
		pFiveBlack = Math.floor((playerFive.playerRoundGems-(pFiveGold*10))/5);
		pFiveBlue = playerFive.playerRoundGems-(pFiveGold*10)-(pFiveBlack*5);
	} else if (totalPlayers == 5) {
		pUGold = Math.floor(playerUser.playerRoundGems/10);
		pUBlack = Math.floor((playerUser.playerRoundGems-(pUGold*10))/5);
		pUBlue = playerUser.playerRoundGems-(pUGold*10)-(pUBlack*5);
		pOneGold = Math.floor(playerOne.playerRoundGems/10);
		pOneBlack = Math.floor((playerOne.playerRoundGems-(pOneGold*10))/5);
		pOneBlue = playerOne.playerRoundGems-(pOneGold*10)-(pOneBlack*5);
		pThreeGold = Math.floor(playerThree.playerRoundGems/10);
		pThreeBlack = Math.floor((playerThree.playerRoundGems-(pThreeGold*10))/5);
		pThreeBlue = playerThree.playerRoundGems-(pThreeGold*10)-(pThreeBlack*5);
		pFourGold = Math.floor(playerFour.playerRoundGems/10);
		pFourBlack = Math.floor((playerFour.playerRoundGems-(pFourGold*10))/5);
		pFourBlue = playerFour.playerRoundGems-(pFourGold*10)-(pFourBlack*5);
		pSixGold = Math.floor(playerSix.playerRoundGems/10);
		pSixBlack = Math.floor((playerSix.playerRoundGems-(pSixGold*10))/5);
		pSixBlue = playerSix.playerRoundGems-(pSixGold*10)-(pSixBlack*5);
	} else if (totalPlayers == 4) {
		pUGold = Math.floor(playerUser.playerRoundGems/10);
		pUBlack = Math.floor((playerUser.playerRoundGems-(pUGold*10))/5);
		pUBlue = playerUser.playerRoundGems-(pUGold*10)-(pUBlack*5);
		pOneGold = Math.floor(playerOne.playerRoundGems/10);
		pOneBlack = Math.floor((playerOne.playerRoundGems-(pOneGold*10))/5);
		pOneBlue = playerOne.playerRoundGems-(pOneGold*10)-(pOneBlack*5);
		pThreeGold = Math.floor(playerThree.playerRoundGems/10);
		pThreeBlack = Math.floor((playerThree.playerRoundGems-(pThreeGold*10))/5);
		pThreeBlue = playerThree.playerRoundGems-(pThreeGold*10)-(pThreeBlack*5);
		pFiveGold = Math.floor(playerFive.playerRoundGems/10);
		pFiveBlack = Math.floor((playerFive.playerRoundGems-(pFiveGold*10))/5);
		pFiveBlue = playerFive.playerRoundGems-(pFiveGold*10)-(pFiveBlack*5);
	} else if (totalPlayers == 3) {
		pUGold = Math.floor(playerUser.playerRoundGems/10);
		pUBlack = Math.floor((playerUser.playerRoundGems-(pUGold*10))/5);
		pUBlue = playerUser.playerRoundGems-(pUGold*10)-(pUBlack*5);
		pTwoGold = Math.floor(playerTwo.playerRoundGems/10);
		pTwoBlack = Math.floor((playerTwo.playerRoundGems-(pTwoGold*10))/5);
		pTwoBlue = playerTwo.playerRoundGems-(pTwoGold*10)-(pTwoBlack*5);
		pFiveGold = Math.floor(playerFive.playerRoundGems/10);
		pFiveBlack = Math.floor((playerFive.playerRoundGems-(pFiveGold*10))/5);
		pFiveBlue = playerFive.playerRoundGems-(pFiveGold*10)-(pFiveBlack*5);
	} else if (totalPlayers == 2) {
		pUGold = Math.floor(playerUser.playerRoundGems/10);
		pUBlack = Math.floor((playerUser.playerRoundGems-(pUGold*10))/5);
		pUBlue = playerUser.playerRoundGems-(pUGold*10)-(pUBlack*5);
		pThreeGold = Math.floor(playerThree.playerRoundGems/10);
		pThreeBlack = Math.floor((playerThree.playerRoundGems-(pThreeGold*10))/5);
		pThreeBlue = playerThree.playerRoundGems-(pThreeGold*10)-(pThreeBlack*5);
	}
	while (q < 7) {
		w = 0;
		while (w < 8) {
			gemSlots[q][w].src = "";
			w += 1;
		}
		q += 1;
	}
	q = 0;
	while (q < pOneGold) {
		gemSlots[1][q].src = "goldGem.jpg";
		q += 1;
	}
	while (q < (pOneGold + pOneBlack)) {
		gemSlots[1][q].src = "blackGem.jpg";
		q += 1;
	}
	while (q < (pOneGold + pOneBlack + pOneBlue)) {
		gemSlots[1][q].src = "blueGem.jpg";
		q += 1;
	}
	q = 0;
	console.log(pTwoBlue + " " + pTwoBlack + " " + pTwoGold);
	while (q < pTwoGold) {
		console.log("golden");
		gemSlots[2][q].src = "goldGem.jpg";
		q += 1;
	}
	while (q < (pTwoGold + pTwoBlack)) {
		console.log("black");
		gemSlots[2][q].src = "blackGem.jpg";
		q += 1;
	}
	while (q < (pTwoGold + pTwoBlack + pTwoBlue)) {
		console.log("blue");
		gemSlots[2][q].src = "blueGem.jpg";
		q += 1;
	}
	q = 0;
	while (q < pThreeGold) {
		gemSlots[3][q].src = "goldGem.jpg";
		q += 1;
	}
	while (q < (pThreeGold + pThreeBlack)) {
		gemSlots[3][q].src = "blackGem.jpg";
		q += 1;
	}
	while (q < (pThreeGold + pThreeBlack + pThreeBlue)) {
		gemSlots[3][q].src = "blueGem.jpg";
		q += 1;
	}
	q = 0;
	while (q < pFourGold) {
		gemSlots[4][q].src = "goldGem.jpg";
		q += 1;
	}
	while (q < (pFourGold + pFourBlack)) {
		gemSlots[4][q].src = "blackGem.jpg";
		q += 1;
	}
	while (q < (pFourGold + pFourBlack + pFourBlue)) {
		gemSlots[4][q].src = "blueGem.jpg";
		q += 1;
	}
	q = 0;
	while (q < pFiveGold) {
		console.log("yes");
		gemSlots[5][q].src = "goldGem.jpg";
		q += 1;
	}
	while (q < (pFiveGold + pFiveBlack)) {
		console.log("yes");
		gemSlots[5][q].src = "blackGem.jpg";
		q += 1;
	}
	while (q < (pFiveGold + pFiveBlack + pFiveBlue)) {
		console.log("yes");
		gemSlots[5][q].src = "blueGem.jpg";
		q += 1;
	}
	q = 0;
	while (q < pSixGold) {
		gemSlots[6][q].src = "goldGem.jpg";
		q += 1;
	}
	while (q < (pSixGold + pSixBlack)) {
		gemSlots[6][q].src = "blackGem.jpg";
		q += 1;
	}
	while (q < (pSixGold + pSixBlack + pSixBlue)) {
		gemSlots[6][q].src = "blueGem.jpg";
		q += 1;
	}
	q = 0;
	while (q < pUGold) {
		gemSlots[0][q].src = "goldGem.jpg";
		q += 1;
	}
	while (q < (pUGold + pUBlack)) {
		gemSlots[0][q].src = "blackGem.jpg";
		q += 1;
	}
	while (q < (pUGold + pUBlack + pUBlue)) {
		gemSlots[0][q].src = "blueGem.jpg";
		q += 1;
	}
	q = 0;
}

function leaving(playerNum) {
	var w = 0;
	playerList[playerNum].staying = false;
	playerList[playerNum].totalGems += playerList[playerNum].playerRoundGems;
	playerList[playerNum].playerRoundGems = 0;
	playerList[playerNum].justLeft = true;
	while (w < 8) {
			gemSlots[playerNum][w].src = "";
			w += 1;
	}
	if (playerNum == 0) {
		document.getElementById("userMoney").innerHTML = playerUser.totalGems;
		document.getElementById("userStaying").style.display = "none";
		document.getElementById("userLeaving").style.display = "none";
		outed = true;
	} /* else if (playerNum == 1) {
		document.getElementById("playerOneDecision").src = "leaving.jpg";
	} else if (playerNum == 2) {
		document.getElementById("playerTwoDecision").src = "leaving.jpg";
	} else if (playerNum == 3) {
		document.getElementById("playerThreeDecision").src = "leaving.jpg";
	} else if (playerNum == 4) {
	document.getElementById("playerFourDecision").src = "leaving.jpg";
	} else if (playerNum == 5) {
		document.getElementById("playerFiveDecision").src = "leaving.jpg";
	} else if (playerNum == 6) {
		document.getElementById("playerSixDecision").src = "leaving.jpg";
	} */
	console.log(playerNum + " is leaving");
	playersLeft = playersLeft - 1;
	r += 1;
	if (playersLeft == 0 && host == "true") {
		endRound();
	}
}

function distributeArtifact() {
	var k = 0;
	if (r == 1) {
		while (playerList[k].justLeft != true) {
			k += 1;
		}
		playerList[k].totalGems += (5*artifactNum);
		while (artifactNum > 0) {
		emptyArtifacts();
		artifactNum = artifactNum - 1;
		}
		document.getElementById("userMoney").innerHTML = playerUser.totalGems;
	}
}

function emptyArtifacts() {
	if (document.getElementById("cardOne").src.includes("artifact1.jpg")  || document.getElementById("cardOne").src.includes("artifact2.jpg")  || document.getElementById("cardOne").src.includes("artifact3.jpg")  || document.getElementById("cardOne").src.includes("artifact4.jpg")  || document.getElementById("cardOne").src.includes("artifact5.jpg")) {
		document.getElementById("cardOne").src = document.getElementById("cardTwo").src;
		document.getElementById("cardTwo").src = document.getElementById("cardThree").src;
		document.getElementById("cardThree").src = document.getElementById("cardFour").src;
		document.getElementById("cardFour").src = document.getElementById("cardFive").src;
		document.getElementById("cardFive").src = document.getElementById("cardSix").src;
		document.getElementById("cardSix").src = document.getElementById("cardSeven").src;
		document.getElementById("cardSeven").src = document.getElementById("cardEight").src;
		document.getElementById("cardEight").src = document.getElementById("cardNine").src;
		document.getElementById("cardNine").src = document.getElementById("cardTen").src;
		document.getElementById("cardTen").src = document.getElementById("cardEleven").src;
		document.getElementById("cardEleven").src = document.getElementById("cardTwelve").src;
		document.getElementById("cardTwelve").src = document.getElementById("cardThirteen").src;
		document.getElementById("cardThirteen").src = document.getElementById("cardFourteen").src;
		document.getElementById("cardFourteen").src = document.getElementById("cardFifteen").src;
		document.getElementById("cardFifteen").src = document.getElementById("cardSixteen").src;
		document.getElementById("cardSixteen").src = "";
		p = p - 1;
		artifactNum = artifactNum - 1;
	} else if (document.getElementById("cardTwo").src.includes("artifact1.jpg")  || document.getElementById("cardTwo").src.includes("artifact2.jpg")  || document.getElementById("cardTwo").src.includes("artifact3.jpg")  || document.getElementById("cardTwo").src.includes("artifact4.jpg")  || document.getElementById("cardTwo").src.includes("artifact5.jpg")) {
		document.getElementById("cardTwo").src = document.getElementById("cardThree").src;
		document.getElementById("cardThree").src = document.getElementById("cardFour").src;
		document.getElementById("cardFour").src = document.getElementById("cardFive").src;
		document.getElementById("cardFive").src = document.getElementById("cardSix").src;
		document.getElementById("cardSix").src = document.getElementById("cardSeven").src;
		document.getElementById("cardSeven").src = document.getElementById("cardEight").src;
		document.getElementById("cardEight").src = document.getElementById("cardNine").src;
		document.getElementById("cardNine").src = document.getElementById("cardTen").src;
		document.getElementById("cardTen").src = document.getElementById("cardEleven").src;
		document.getElementById("cardEleven").src = document.getElementById("cardTwelve").src;
		document.getElementById("cardTwelve").src = document.getElementById("cardThirteen").src;
		document.getElementById("cardThirteen").src = document.getElementById("cardFourteen").src;
		document.getElementById("cardFourteen").src = document.getElementById("cardFifteen").src;
		document.getElementById("cardFifteen").src = document.getElementById("cardSixteen").src;
		document.getElementById("cardSixteen").src = "";
		p = p - 1;
		artifactNum = artifactNum - 1;
	} else if (document.getElementById("cardThree").src.includes("artifact1.jpg")  || document.getElementById("cardThree").src.includes("artifact2.jpg")  || document.getElementById("cardThree").src.includes("artifact3.jpg")  || document.getElementById("cardThree").src.includes("artifact4.jpg")  || document.getElementById("cardThree").src.includes("artifact5.jpg")) {
		document.getElementById("cardThree").src = document.getElementById("cardFour").src;
		document.getElementById("cardFour").src = document.getElementById("cardFive").src;
		document.getElementById("cardFive").src = document.getElementById("cardSix").src;
		document.getElementById("cardSix").src = document.getElementById("cardSeven").src;
		document.getElementById("cardSeven").src = document.getElementById("cardEight").src;
		document.getElementById("cardEight").src = document.getElementById("cardNine").src;
		document.getElementById("cardNine").src = document.getElementById("cardTen").src;
		document.getElementById("cardTen").src = document.getElementById("cardEleven").src;
		document.getElementById("cardEleven").src = document.getElementById("cardTwelve").src;
		document.getElementById("cardTwelve").src = document.getElementById("cardThirteen").src;
		document.getElementById("cardThirteen").src = document.getElementById("cardFourteen").src;
		document.getElementById("cardFourteen").src = document.getElementById("cardFifteen").src;
		document.getElementById("cardFifteen").src = document.getElementById("cardSixteen").src;
		document.getElementById("cardSixteen").src = "";
		p = p - 1;
		artifactNum = artifactNum - 1;
	} else if (document.getElementById("cardFour").src.includes("artifact1.jpg")  || document.getElementById("cardFour").src.includes("artifact2.jpg")  || document.getElementById("cardFour").src.includes("artifact3.jpg")  || document.getElementById("cardFour").src.includes("artifact4.jpg")  || document.getElementById("cardFour").src.includes("artifact5.jpg")) {
		document.getElementById("cardFour").src = document.getElementById("cardFive").src;
		document.getElementById("cardFive").src = document.getElementById("cardSix").src;
		document.getElementById("cardSix").src = document.getElementById("cardSeven").src;
		document.getElementById("cardSeven").src = document.getElementById("cardEight").src;
		document.getElementById("cardEight").src = document.getElementById("cardNine").src;
		document.getElementById("cardNine").src = document.getElementById("cardTen").src;
		document.getElementById("cardTen").src = document.getElementById("cardEleven").src;
		document.getElementById("cardEleven").src = document.getElementById("cardTwelve").src;
		document.getElementById("cardTwelve").src = document.getElementById("cardThirteen").src;
		document.getElementById("cardThirteen").src = document.getElementById("cardFourteen").src;
		document.getElementById("cardFourteen").src = document.getElementById("cardFifteen").src;
		document.getElementById("cardFifteen").src = document.getElementById("cardSixteen").src;
		document.getElementById("cardSixteen").src = "";
		p = p - 1;
		artifactNum = artifactNum - 1;
	} else if (document.getElementById("cardFive").src.includes("artifact1.jpg")  || document.getElementById("cardFive").src.includes("artifact2.jpg")  || document.getElementById("cardFive").src.includes("artifact3.jpg")  || document.getElementById("cardFive").src.includes("artifact4.jpg")  || document.getElementById("cardFive").src.includes("artifact5.jpg")) {
		document.getElementById("cardFive").src = document.getElementById("cardSix").src;
		document.getElementById("cardSix").src = document.getElementById("cardSeven").src;
		document.getElementById("cardSeven").src = document.getElementById("cardEight").src;
		document.getElementById("cardEight").src = document.getElementById("cardNine").src;
		document.getElementById("cardNine").src = document.getElementById("cardTen").src;
		document.getElementById("cardTen").src = document.getElementById("cardEleven").src;
		document.getElementById("cardEleven").src = document.getElementById("cardTwelve").src;
		document.getElementById("cardTwelve").src = document.getElementById("cardThirteen").src;
		document.getElementById("cardThirteen").src = document.getElementById("cardFourteen").src;
		document.getElementById("cardFourteen").src = document.getElementById("cardFifteen").src;
		document.getElementById("cardFifteen").src = document.getElementById("cardSixteen").src;
		document.getElementById("cardSixteen").src = "";
		p = p - 1;
		artifactNum = artifactNum - 1;
	} else if (document.getElementById("cardSix").src.includes("artifact1.jpg")  || document.getElementById("cardSix").src.includes("artifact2.jpg")  || document.getElementById("cardSix").src.includes("artifact3.jpg")  || document.getElementById("cardSix").src.includes("artifact4.jpg")  || document.getElementById("cardSix").src.includes("artifact5.jpg")) {
		document.getElementById("cardSix").src = document.getElementById("cardSeven").src;
		document.getElementById("cardSeven").src = document.getElementById("cardEight").src;
		document.getElementById("cardEight").src = document.getElementById("cardNine").src;
		document.getElementById("cardNine").src = document.getElementById("cardTen").src;
		document.getElementById("cardTen").src = document.getElementById("cardEleven").src;
		document.getElementById("cardEleven").src = document.getElementById("cardTwelve").src;
		document.getElementById("cardTwelve").src = document.getElementById("cardThirteen").src;
		document.getElementById("cardThirteen").src = document.getElementById("cardFourteen").src;
		document.getElementById("cardFourteen").src = document.getElementById("cardFifteen").src;
		document.getElementById("cardFifteen").src = document.getElementById("cardSixteen").src;
		document.getElementById("cardSixteen").src = "";
		p = p - 1;
		artifactNum = artifactNum - 1;
	} else if (document.getElementById("cardSeven").src.includes("artifact1.jpg")  || document.getElementById("cardSeven").src.includes("artifact2.jpg")  || document.getElementById("cardSeven").src.includes("artifact3.jpg")  || document.getElementById("cardSeven").src.includes("artifact4.jpg")  || document.getElementById("cardSeven").src.includes("artifact5.jpg")) {
		document.getElementById("cardSeven").src = document.getElementById("cardEight").src;
		document.getElementById("cardEight").src = document.getElementById("cardNine").src;
		document.getElementById("cardNine").src = document.getElementById("cardTen").src;
		document.getElementById("cardTen").src = document.getElementById("cardEleven").src;
		document.getElementById("cardEleven").src = document.getElementById("cardTwelve").src;
		document.getElementById("cardTwelve").src = document.getElementById("cardThirteen").src;
		document.getElementById("cardThirteen").src = document.getElementById("cardFourteen").src;
		document.getElementById("cardFourteen").src = document.getElementById("cardFifteen").src;
		document.getElementById("cardFifteen").src = document.getElementById("cardSixteen").src;
		document.getElementById("cardSixteen").src = "";
		p = p - 1;
		artifactNum = artifactNum - 1;
	} else if (document.getElementById("cardEight").src.includes("artifact1.jpg")  || document.getElementById("cardEight").src.includes("artifact2.jpg")  || document.getElementById("cardEight").src.includes("artifact3.jpg")  || document.getElementById("cardEight").src.includes("artifact4.jpg")  || document.getElementById("cardEight").src.includes("artifact5.jpg")) {
		document.getElementById("cardEight").src = document.getElementById("cardNine").src;
		document.getElementById("cardNine").src = document.getElementById("cardTen").src;
		document.getElementById("cardTen").src = document.getElementById("cardEleven").src;
		document.getElementById("cardEleven").src = document.getElementById("cardTwelve").src;
		document.getElementById("cardTwelve").src = document.getElementById("cardThirteen").src;
		document.getElementById("cardThirteen").src = document.getElementById("cardFourteen").src;
		document.getElementById("cardFourteen").src = document.getElementById("cardFifteen").src;
		document.getElementById("cardFifteen").src = document.getElementById("cardSixteen").src;
		document.getElementById("cardSixteen").src = "";
		p = p - 1;
		artifactNum = artifactNum - 1;
	} else if (document.getElementById("cardNine").src.includes("artifact1.jpg")  || document.getElementById("cardNine").src.includes("artifact2.jpg")  || document.getElementById("cardNine").src.includes("artifact3.jpg")  || document.getElementById("cardNine").src.includes("artifact4.jpg")  || document.getElementById("cardNine").src.includes("artifact5.jpg")) {
		document.getElementById("cardNine").src = document.getElementById("cardTen").src;
		document.getElementById("cardTen").src = document.getElementById("cardEleven").src;
		document.getElementById("cardEleven").src = document.getElementById("cardTwelve").src;
		document.getElementById("cardTwelve").src = document.getElementById("cardThirteen").src;
		document.getElementById("cardThirteen").src = document.getElementById("cardFourteen").src;
		document.getElementById("cardFourteen").src = document.getElementById("cardFifteen").src;
		document.getElementById("cardFifteen").src = document.getElementById("cardSixteen").src;
		document.getElementById("cardSixteen").src = "";
		p = p - 1;
		artifactNum = artifactNum - 1;
	} else if (document.getElementById("cardTen").src.includes("artifact1.jpg")  || document.getElementById("cardTen").src.includes("artifact2.jpg")  || document.getElementById("cardTen").src.includes("artifact3.jpg")  || document.getElementById("cardTen").src.includes("artifact4.jpg")  || document.getElementById("cardTen").src.includes("artifact5.jpg")) {
		document.getElementById("cardTen").src = document.getElementById("cardEleven").src;
		document.getElementById("cardEleven").src = document.getElementById("cardTwelve").src;
		document.getElementById("cardTwelve").src = document.getElementById("cardThirteen").src;
		document.getElementById("cardThirteen").src = document.getElementById("cardFourteen").src;
		document.getElementById("cardFourteen").src = document.getElementById("cardFifteen").src;
		document.getElementById("cardFifteen").src = document.getElementById("cardSixteen").src;
		document.getElementById("cardSixteen").src = "";
		p = p - 1;
		artifactNum = artifactNum - 1;
	} else if (document.getElementById("cardEleven").src.includes("artifact1.jpg")  || document.getElementById("cardEleven").src.includes("artifact2.jpg")  || document.getElementById("cardEleven").src.includes("artifact3.jpg")  || document.getElementById("cardEleven").src.includes("artifact4.jpg")  || document.getElementById("cardEleven").src.includes("artifact5.jpg")) {
		document.getElementById("cardEleven").src = document.getElementById("cardTwelve").src;
		document.getElementById("cardTwelve").src = document.getElementById("cardThirteen").src;
		document.getElementById("cardThirteen").src = document.getElementById("cardFourteen").src;
		document.getElementById("cardFourteen").src = document.getElementById("cardFifteen").src;
		document.getElementById("cardFifteen").src = document.getElementById("cardSixteen").src;
		document.getElementById("cardSixteen").src = "";
		p = p - 1;
		artifactNum = artifactNum - 1;
	} else if (document.getElementById("cardTwelve").src.includes("artifact1.jpg")  || document.getElementById("cardTwelve").src.includes("artifact2.jpg")  || document.getElementById("cardTwelve").src.includes("artifact3.jpg")  || document.getElementById("cardTwelve").src.includes("artifact4.jpg")  || document.getElementById("cardTwelve").src.includes("artifact5.jpg")) {
		document.getElementById("cardTwelve").src = document.getElementById("cardThirteen").src;
		document.getElementById("cardThirteen").src = document.getElementById("cardFourteen").src;
		document.getElementById("cardFourteen").src = document.getElementById("cardFifteen").src;
		document.getElementById("cardFifteen").src = document.getElementById("cardSixteen").src;
		document.getElementById("cardSixteen").src = "";
		p = p - 1;
		artifactNum = artifactNum - 1;
	} else if (document.getElementById("cardThirteen").src.includes("artifact1.jpg")  || document.getElementById("cardThirteen").src.includes("artifact2.jpg")  || document.getElementById("cardThirteen").src.includes("artifact3.jpg")  || document.getElementById("cardThirteen").src.includes("artifact4.jpg")  || document.getElementById("cardThirteen").src.includes("artifact5.jpg")) {
		document.getElementById("cardThirteen").src = document.getElementById("cardFourteen").src;
		document.getElementById("cardFourteen").src = document.getElementById("cardFifteen").src;
		document.getElementById("cardFifteen").src = document.getElementById("cardSixteen").src;
		document.getElementById("cardSixteen").src = "";
		p = p - 1;
		artifactNum = artifactNum - 1;
	} else if (document.getElementById("cardFourteen").src.includes("artifact1.jpg")  || document.getElementById("cardFourteen").src.includes("artifact2.jpg")  || document.getElementById("cardFourteen").src.includes("artifact3.jpg")  || document.getElementById("cardFourteen").src.includes("artifact4.jpg")  || document.getElementById("cardFourteen").src.includes("artifact5.jpg")) {
		document.getElementById("cardFourteen").src = document.getElementById("cardFifteen").src;
		document.getElementById("cardFifteen").src = document.getElementById("cardSixteen").src;
		document.getElementById("cardSixteen").src = "";
		p = p - 1;
		artifactNum = artifactNum - 1;
	} else if (document.getElementById("cardFifteen").src.includes("artifact1.jpg")  || document.getElementById("cardFifteen").src.includes("artifact2.jpg")  || document.getElementById("cardFifteen").src.includes("artifact3.jpg")  || document.getElementById("cardFifteen").src.includes("artifact4.jpg")  || document.getElementById("cardFifteen").src.includes("artifact5.jpg")) {
		document.getElementById("cardFifteen").src = document.getElementById("cardSixteen").src;
		document.getElementById("cardSixteen").src = "";
		p = p - 1;
		artifactNum = artifactNum - 1;
	} else if (document.getElementById("cardSixteen").src.includes("artifact1.jpg")  || document.getElementById("cardSixteen").src.includes("artifact2.jpg")  || document.getElementById("cardSixteen").src.includes("artifact3.jpg")  || document.getElementById("cardSixteen").src.includes("artifact4.jpg")  || document.getElementById("cardSixteen").src.includes("artifact5.jpg")) {
		document.getElementById("cardSixteen").src = "";
		p = p - 1;
		artifactNum = artifactNum - 1;
	} 
}

function updatePropics() {
	document.getElementById("hostPic").style.bottom = "0px";
	document.getElementById("hostPic").style.left = "0px";
	document.getElementById("hostPic").style.height = "100%";
	document.getElementById("hostPic").style.width = "100%";
	if (document.getElementById("playOne").style.display != "none") {
		document.getElementById("playerOnePic").style.bottom = "0px";
		document.getElementById("playerOnePic").style.left = "0px";
		document.getElementById("playerOnePic").style.height = "100%";
		document.getElementById("playerOnePic").style.width = "100%";
		if (document.getElementById("playerOnePic").src.includes("elaphant.jpg")) {
			document.getElementById("playerOnePic").style.bottom = "2px";
			document.getElementById("playerOnePic").style.width = "200%";
			document.getElementById("playerOnePic").style.left = "-40px";
			document.getElementById("playerOnePic").style.height = "120%";
		} else if (document.getElementById("playerOnePic").src.includes("blankAvatar.jpg")) {
			document.getElementById("playerOnePic").style.bottom = "8px";
		} else if (document.getElementById("playerOnePic").src.includes("steve.jpg")) {
			document.getElementById("playerOnePic").style.left = "-18px";
			document.getElementById("playerOnePic").style.bottom = "15px";
			document.getElementById("playerOnePic").style.width = "140%";
			document.getElementById("playerOnePic").style.height = "130%";
		} else if (document.getElementById("playerOnePic").src.includes("nixon.jpg")) {
			document.getElementById("playerOnePic").style.bottom = "13px";
			document.getElementById("playerOnePic").style.width = "110%";
			document.getElementById("playerOnePic").style.height = "130%";
			document.getElementById("playerOnePic").style.left = "-3px";
		} else if (document.getElementById("playerOnePic").src.includes("spiderman.jpg")) {
			document.getElementById("playerOnePic").style.width = "130%";
		} else if (document.getElementById("playerOnePic").src.includes("loki.jpg")) {
			document.getElementById("playerOnePic").style.width = "150%";
			document.getElementById("playerOnePic").style.height = "120%";
			document.getElementById("playerOnePic").style.left = "-20px";
		} else if (document.getElementById("playerOnePic").src.includes("riskPieces.jpg")) {
			document.getElementById("playerOnePic").style.bottom = "28px";
			document.getElementById("playerOnePic").style.width = "220%";
			document.getElementById("playerOnePic").style.height = "140%";
			document.getElementById("playerOnePic").style.left = "-55px";
		} else if (document.getElementById("playerOnePic").src.includes("pikachu.jpg")) {
			document.getElementById("playerOnePic").style.bottom = "3px";
			document.getElementById("playerOnePic").style.left = "3px";
		} else if (document.getElementById("playerOnePic").src.includes("yoda.jpg")) {
			document.getElementById("playerOnePic").style.width = "150%";
			document.getElementById("playerOnePic").style.left = "-15px";
		}
	}
	if (document.getElementById("playTwo").style.display != "none") {
		document.getElementById("playerTwoPic").style.bottom = "0px";
		document.getElementById("playerTwoPic").style.left = "0px";
		document.getElementById("playerTwoPic").style.height = "100%";
		document.getElementById("playerTwoPic").style.width = "100%";
		if (document.getElementById("playerTwoPic").src.includes("elaphant.jpg")) {
			document.getElementById("playerTwoPic").style.bottom = "2px";
			document.getElementById("playerTwoPic").style.width = "200%";
			document.getElementById("playerTwoPic").style.left = "-40px";
			document.getElementById("playerTwoPic").style.height = "120%";
		} else if (document.getElementById("playerTwoPic").src.includes("blankAvatar.jpg")) {
			document.getElementById("playerTwoPic").style.bottom = "8px";
		} else if (document.getElementById("playerTwoPic").src.includes("steve.jpg")) {
			document.getElementById("playerTwoPic").style.left = "-18px";
			document.getElementById("playerTwoPic").style.bottom = "15px";
			document.getElementById("playerTwoPic").style.width = "140%";
			document.getElementById("playerTwoPic").style.height = "130%";
		} else if (document.getElementById("playerTwoPic").src.includes("nixon.jpg")) {
			document.getElementById("playerTwoPic").style.bottom = "13px";
			document.getElementById("playerTwoPic").style.width = "110%";
			document.getElementById("playerTwoPic").style.height = "130%";
			document.getElementById("playerTwoPic").style.left = "-3px";
		} else if (document.getElementById("playerTwoPic").src.includes("spiderman.jpg")) {
			document.getElementById("playerTwoPic").style.width = "130%";
		} else if (document.getElementById("playerTwoPic").src.includes("loki.jpg")) {
			document.getElementById("playerTwoPic").style.width = "150%";
			document.getElementById("playerTwoPic").style.height = "120%";
			document.getElementById("playerTwoPic").style.left = "-20px";
		} else if (document.getElementById("playerTwoPic").src.includes("riskPieces.jpg")) {
			document.getElementById("playerTwoPic").style.bottom = "28px";
			document.getElementById("playerTwoPic").style.width = "220%";
			document.getElementById("playerTwoPic").style.height = "140%";
			document.getElementById("playerTwoPic").style.left = "-55px";
		} else if (document.getElementById("playerTwoPic").src.includes("pikachu.jpg")) {
			document.getElementById("playerTwoPic").style.bottom = "3px";
			document.getElementById("playerTwoPic").style.left = "3px";
		} else if (document.getElementById("playerTwoPic").src.includes("yoda.jpg")) {
			document.getElementById("playerTwoPic").style.width = "150%";
			document.getElementById("playerTwoPic").style.left = "-15px";
		}
	}
	if (document.getElementById("playThree").style.display != "none") {
		document.getElementById("playerThreePic").style.bottom = "0px";
		document.getElementById("playerThreePic").style.left = "0px";
		document.getElementById("playerThreePic").style.height = "100%";
		document.getElementById("playerThreePic").style.width = "100%";
		if (document.getElementById("playerThreePic").src.includes("elaphant.jpg")) {
			document.getElementById("playerThreePic").style.bottom = "2px";
			document.getElementById("playerThreePic").style.width = "200%";
			document.getElementById("playerThreePic").style.left = "-40px";
			document.getElementById("playerThreePic").style.height = "120%";
		} else if (document.getElementById("playerThreePic").src.includes("blankAvatar.jpg")) {
			document.getElementById("playerThreePic").style.bottom = "8px";
		} else if (document.getElementById("playerThreePic").src.includes("steve.jpg")) {
			document.getElementById("playerThreePic").style.left = "-18px";
			document.getElementById("playerThreePic").style.bottom = "15px";
			document.getElementById("playerThreePic").style.width = "140%";
			document.getElementById("playerThreePic").style.height = "130%";
		} else if (document.getElementById("playerThreePic").src.includes("nixon.jpg")) {
			document.getElementById("playerThreePic").style.bottom = "13px";
			document.getElementById("playerThreePic").style.width = "110%";
			document.getElementById("playerThreePic").style.height = "130%";
			document.getElementById("playerThreePic").style.left = "-3px";
		} else if (document.getElementById("playerThreePic").src.includes("spiderman.jpg")) {
			document.getElementById("playerThreePic").style.width = "130%";
		} else if (document.getElementById("playerThreePic").src.includes("loki.jpg")) {
			document.getElementById("playerThreePic").style.width = "150%";
			document.getElementById("playerThreePic").style.height = "120%";
			document.getElementById("playerThreePic").style.left = "-20px";
		} else if (document.getElementById("playerThreePic").src.includes("riskPieces.jpg")) {
			document.getElementById("playerThreePic").style.bottom = "28px";
			document.getElementById("playerThreePic").style.width = "220%";
			document.getElementById("playerThreePic").style.height = "140%";
			document.getElementById("playerThreePic").style.left = "-55px";
		} else if (document.getElementById("playerThreePic").src.includes("pikachu.jpg")) {
			document.getElementById("playerThreePic").style.bottom = "3px";
			document.getElementById("playerThreePic").style.left = "3px";
		} else if (document.getElementById("playerThreePic").src.includes("yoda.jpg")) {
			document.getElementById("playerThreePic").style.width = "150%";
			document.getElementById("playerThreePic").style.left = "-15px";
		}
	}
	if (document.getElementById("playFour").style.display != "none") {
		document.getElementById("playerFourPic").style.bottom = "0px";
		document.getElementById("playerFourPic").style.left = "0px";
		document.getElementById("playerFourPic").style.height = "100%";
		document.getElementById("playerFourPic").style.width = "100%";
		if (document.getElementById("playerFourPic").src.includes("elaphant.jpg")) {
			document.getElementById("playerFourPic").style.bottom = "2px";
			document.getElementById("playerFourPic").style.width = "200%";
			document.getElementById("playerFourPic").style.left = "-40px";
			document.getElementById("playerFourPic").style.height = "120%";
		} else if (document.getElementById("playerFourPic").src.includes("blankAvatar.jpg")) {
			document.getElementById("playerFourPic").style.bottom = "8px";
		} else if (document.getElementById("playerFourPic").src.includes("steve.jpg")) {
			document.getElementById("playerFourPic").style.left = "-18px";
			document.getElementById("playerFourPic").style.bottom = "15px";
			document.getElementById("playerFourPic").style.width = "140%";
			document.getElementById("playerFourPic").style.height = "130%";
		} else if (document.getElementById("playerFourPic").src.includes("nixon.jpg")) {
			document.getElementById("playerFourPic").style.bottom = "13px";
			document.getElementById("playerFourPic").style.width = "110%";
			document.getElementById("playerFourPic").style.height = "130%";
			document.getElementById("playerFourPic").style.left = "-3px";
		} else if (document.getElementById("playerFourPic").src.includes("spiderman.jpg")) {
			document.getElementById("playerFourPic").style.width = "130%";
		} else if (document.getElementById("playerFourPic").src.includes("loki.jpg")) {
			document.getElementById("playerFourPic").style.width = "150%";
			document.getElementById("playerFourPic").style.height = "120%";
			document.getElementById("playerFourPic").style.left = "-20px";
		} else if (document.getElementById("playerFourPic").src.includes("riskPieces.jpg")) {
			document.getElementById("playerFourPic").style.bottom = "28px";
			document.getElementById("playerFourPic").style.width = "220%";
			document.getElementById("playerFourPic").style.height = "140%";
			document.getElementById("playerFourPic").style.left = "-55px";
		} else if (document.getElementById("playerFourPic").src.includes("pikachu.jpg")) {
			document.getElementById("playerFourPic").style.bottom = "3px";
			document.getElementById("playerFourPic").style.left = "3px";
		} else if (document.getElementById("playerFourPic").src.includes("yoda.jpg")) {
			document.getElementById("playerFourPic").style.width = "150%";
			document.getElementById("playerFourPic").style.left = "-15px";
		}
	}
	if (document.getElementById("playFive").style.display != "none") {
		document.getElementById("playerFivePic").style.bottom = "0px";
		document.getElementById("playerFivePic").style.left = "0px";
		document.getElementById("playerFivePic").style.height = "100%";
		document.getElementById("playerFivePic").style.width = "100%";
		if (document.getElementById("playerFivePic").src.includes("elaphant.jpg")) {
			document.getElementById("playerFivePic").style.bottom = "2px";
			document.getElementById("playerFivePic").style.width = "200%";
			document.getElementById("playerFivePic").style.left = "-40px";
			document.getElementById("playerFivePic").style.height = "120%";
		} else if (document.getElementById("playerFivePic").src.includes("blankAvatar.jpg")) {
			document.getElementById("playerFivePic").style.bottom = "8px";
		} else if (document.getElementById("playerFivePic").src.includes("steve.jpg")) {
			document.getElementById("playerFivePic").style.left = "-18px";
			document.getElementById("playerFivePic").style.bottom = "15px";
			document.getElementById("playerFivePic").style.width = "140%";
			document.getElementById("playerFivePic").style.height = "130%";
		} else if (document.getElementById("playerFivePic").src.includes("nixon.jpg")) {
			document.getElementById("playerFivePic").style.bottom = "13px";
			document.getElementById("playerFivePic").style.width = "110%";
			document.getElementById("playerFivePic").style.height = "130%";
			document.getElementById("playerFivePic").style.left = "-3px";
		} else if (document.getElementById("playerFivePic").src.includes("spiderman.jpg")) {
			document.getElementById("playerFivePic").style.width = "130%";
		} else if (document.getElementById("playerFivePic").src.includes("loki.jpg")) {
			document.getElementById("playerFivePic").style.width = "150%";
			document.getElementById("playerFivePic").style.height = "120%";
			document.getElementById("playerFivePic").style.left = "-20px";
		} else if (document.getElementById("playerFivePic").src.includes("riskPieces.jpg")) {
			document.getElementById("playerFivePic").style.bottom = "28px";
			document.getElementById("playerFivePic").style.width = "220%";
			document.getElementById("playerFivePic").style.height = "140%";
			document.getElementById("playerFivePic").style.left = "-55px";
		} else if (document.getElementById("playerFivePic").src.includes("pikachu.jpg")) {
			document.getElementById("playerFivePic").style.bottom = "3px";
			document.getElementById("playerFivePic").style.left = "3px";
		} else if (document.getElementById("playerFivePic").src.includes("yoda.jpg")) {
			document.getElementById("playerFivePic").style.width = "150%";
			document.getElementById("playerFivePic").style.left = "-15px";
		}
	}
	if (document.getElementById("playSix").style.display != "none") {
		document.getElementById("playerSixPic").style.bottom = "0px";
		document.getElementById("playerSixPic").style.left = "0px";
		document.getElementById("playerSixPic").style.height = "100%";
		document.getElementById("playerSixPic").style.width = "100%";
		if (document.getElementById("playerSixPic").src.includes("elaphant.jpg")) {
			document.getElementById("playerSixPic").style.bottom = "2px";
			document.getElementById("playerSixPic").style.width = "200%";
			document.getElementById("playerSixPic").style.left = "-40px";
			document.getElementById("playerSixPic").style.height = "120%";
		} else if (document.getElementById("playerSixPic").src.includes("blankAvatar.jpg")) {
			document.getElementById("playerSixPic").style.bottom = "8px";
		} else if (document.getElementById("playerSixPic").src.includes("steve.jpg")) {
			document.getElementById("playerSixPic").style.left = "-18px";
			document.getElementById("playerSixPic").style.bottom = "15px";
			document.getElementById("playerSixPic").style.width = "140%";
			document.getElementById("playerSixPic").style.height = "130%";
		} else if (document.getElementById("playerSixPic").src.includes("nixon.jpg")) {
			document.getElementById("playerSixPic").style.bottom = "13px";
			document.getElementById("playerSixPic").style.width = "110%";
			document.getElementById("playerSixPic").style.height = "130%";
			document.getElementById("playerSixPic").style.left = "-3px";
		} else if (document.getElementById("playerSixPic").src.includes("spiderman.jpg")) {
			document.getElementById("playerSixPic").style.width = "130%";
		} else if (document.getElementById("playerSixPic").src.includes("loki.jpg")) {
			document.getElementById("playerSixPic").style.width = "150%";
			document.getElementById("playerSixPic").style.height = "120%";
			document.getElementById("playerSixPic").style.left = "-20px";
		} else if (document.getElementById("playerSixPic").src.includes("riskPieces.jpg")) {
			document.getElementById("playerSixPic").style.bottom = "28px";
			document.getElementById("playerSixPic").style.width = "220%";
			document.getElementById("playerSixPic").style.height = "140%";
			document.getElementById("playerSixPic").style.left = "-55px";
		} else if (document.getElementById("playerSixPic").src.includes("pikachu.jpg")) {
			document.getElementById("playerSixPic").style.bottom = "3px";
			document.getElementById("playerSixPic").style.left = "3px";
		} else if (document.getElementById("playerSixPic").src.includes("yoda.jpg")) {
			document.getElementById("playerSixPic").style.width = "150%";
			document.getElementById("playerSixPic").style.left = "-15px";
		}
	}
	if (document.getElementById("hostPic").src.includes("elaphant.jpg")) {
		document.getElementById("hostPic").style.bottom = "2px";
		document.getElementById("hostPic").style.width = "200%";
		document.getElementById("hostPic").style.left = "-40px";
		document.getElementById("hostPic").style.height = "120%";
	} else if (document.getElementById("hostPic").src.includes("blankAvatar.jpg")) {
		document.getElementById("hostPic").style.bottom = "8px";
	} else if (document.getElementById("hostPic").src.includes("steve.jpg")) {
		document.getElementById("hostPic").style.left = "-18px";
		document.getElementById("hostPic").style.bottom = "15px";
		document.getElementById("hostPic").style.width = "140%";
		document.getElementById("hostPic").style.height = "130%";
	} else if (document.getElementById("hostPic").src.includes("nixon.jpg")) {
		document.getElementById("hostPic").style.bottom = "13px";
		document.getElementById("hostPic").style.width = "110%";
		document.getElementById("hostPic").style.height = "130%";
		document.getElementById("hostPic").style.left = "-3px";
	} else if (document.getElementById("hostPic").src.includes("spiderman.jpg")) {
		document.getElementById("hostPic").style.width = "130%";
	} else if (document.getElementById("hostPic").src.includes("loki.jpg")) {
		document.getElementById("hostPic").style.width = "150%";
		document.getElementById("hostPic").style.height = "120%";
		document.getElementById("hostPic").style.left = "-20px";
	} else if (document.getElementById("hostPic").src.includes("riskPieces.jpg")) {
		document.getElementById("hostPic").style.bottom = "28px";
		document.getElementById("hostPic").style.width = "220%";
		document.getElementById("hostPic").style.height = "140%";
		document.getElementById("hostPic").style.left = "-55px";
	} else if (document.getElementById("hostPic").src.includes("pikachu.jpg")) {
		document.getElementById("hostPic").style.bottom = "3px";
		document.getElementById("hostPic").style.left = "3px";
	} else if (document.getElementById("hostPic").src.includes("yoda.jpg")) {
		document.getElementById("hostPic").style.width = "150%";
		document.getElementById("hostPic").style.left = "-15px";
	}
}

function checkGameDone() {
	var wons = 0;
	if (gemWin == true) {
		if (playerUser.totalGems >= gemsToWin) {
			wons += 1;
		}
		if (playerOne.totalGems >= gemsToWin) {
			wons += 1;
		}
		if (playerTwo.totalGems >= gemsToWin) {
			wons += 1;
		}
		if (playerThree.totalGems >= gemsToWin) {
			wons += 1;
		}
		if (playerFour.totalGems >= gemsToWin) {
			wons += 1;
		}
		if (playerFive.totalGems >= gemsToWin) {
			wons += 1;
		}
		if (playerSix.totalGems >= gemsToWin) {
			wons += 1;
		}
		if (wons > 0) {
			endGemGame(wons);
		}
	} else if (roundWin == true) {
		if (roundsPlayed >= roundsToWin) {
			endRoundGame();
		}
	} else if (callToWin == true) {
		if (roundsDone >= 3) {
			endCallGame();
		}
	}
}

function endGemGame(won) {
	console.log("that's the match");
}

function endRoundGame() {
	console.log("that's the match");
}

function endCallGame() {
	console.log("that's the match");
}


