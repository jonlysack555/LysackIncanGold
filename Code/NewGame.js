var userr = JSON.parse(window.localStorage.getItem('pubnubUser')).id;
userr = userr + "i";
var numOfPlayers;
var gemWin = false;
var gemsToWin = null;
var roundWin = false;
var roundsToWin = null;
var callToWin = false;
var sellingHands = false;
var insurance = false;
var chat = false;
var startedTheGame = false;
var name = JSON.parse(localStorage.getItem(userr)).name;
var title = JSON.parse(localStorage.getItem(userr)).title;
var propic = JSON.parse(localStorage.getItem(userr)).propic;
var readies = 0;
var gameParam;
var playerOneUser = "";
var playerTwoUser = "";
var playerThreeUser = "";
var playerFourUser = "";
var playerFiveUser = "";
var playerSixUser = "";
var playersIn = 0;
const pubnub = new PubNub({
  publishKey: "pub-c-32276b33-4bb1-4f52-b507-84269bbd2b0b",
  subscribeKey: "sub-c-67c10818-beed-11ea-a57f-4e41fc185ce6",
  uuid: userr
});
var differentGames = [];
var n = 0;

pubnub.subscribe({
  channels: ['availableGames'],
  withPresence: true
});

pubnub.addListener({
	message: function(event) {
		if (event.message == "request") {
			if ((playersIn + 1) < parseInt(numOfPlayers)) {
			publishMessage();
			}
		} else if (JSON.parse(event.message).joining == true && JSON.parse(event.message).host == userr) {
			console.log("got the game");
			console.log(JSON.parse(event.message));
			addPlayer(JSON.parse(event.message));
		} else if (JSON.parse(event.message).leaving == true && JSON.parse(event.message).hostUser == userr) {
			playersIn = playersIn - 1;
			document.getElementById("startGame").style.display = "none";
			publishMessage();
			if (playerOneUser == JSON.parse(event.message).playerLeaving) {
				distributeLeaving(playerOneUser, document.getElementById("playOneName").innerHTML, document.getElementById("playOneTitle").innerHTML, updated(document.getElementById("playOneAvatarPic").src)); 
				if (document.getElementById("playOneReadyText").innerHTML == "Ready") {
					readies = readies - 1;	
				}
				document.getElementById("playOneAvatarPic").src = "";
				document.getElementById("playOneAvatarPic").style.left = "0px";
				document.getElementById("playOneAvatarPic").style.bottom = "0px";
				document.getElementById("playOneName").innerHTML = "";
				document.getElementById("playOneTitle").innerHTML = "";
				document.getElementById("playOneReadyText").innerHTML = "Waiting...";
				document.getElementById("playOneReady").style.backgroundColor = "gray";
				playerOneUser = "";
			} else if (playerTwoUser == JSON.parse(event.message).playerLeaving) {
				distributeLeaving(playerTwoUser, document.getElementById("playTwoName").innerHTML, document.getElementById("playTwoTitle").innerHTML, updated(document.getElementById("playTwoAvatarPic").src));
				if (document.getElementById("playTwoReadyText").innerHTML == "Ready") {
					readies = readies - 1;	
				}
				document.getElementById("playTwoAvatarPic").src = "";
				document.getElementById("playTwoAvatarPic").style.left = "0px";
				document.getElementById("playTwoAvatarPic").style.bottom = "0px";
				document.getElementById("playTwoName").innerHTML = "";
				document.getElementById("playTwoTitle").innerHTML = "";
				document.getElementById("playTwoReadyText").innerHTML = "Waiting...";
				document.getElementById("playTwoReady").style.backgroundColor = "gray";
				playerTwoUser = "";
			} else if (playerThreeUser == JSON.parse(event.message).playerLeaving) {
				distributeLeaving(playerThreeUser, document.getElementById("playThreeName").innerHTML, document.getElementById("playThreeTitle").innerHTML, updated(document.getElementById("playThreeAvatarPic").src));
				if (document.getElementById("playThreeReadyText").innerHTML == "Ready") {
					readies = readies - 1;	
				}
				document.getElementById("playThreeAvatarPic").src = "";
				document.getElementById("playThreeAvatarPic").style.left = "0px";
				document.getElementById("playThreeAvatarPic").style.bottom = "0px";
				document.getElementById("playThreeName").innerHTML = "";
				document.getElementById("playThreeTitle").innerHTML = "";
				document.getElementById("playThreeReadyText").innerHTML = "Waiting...";
				document.getElementById("playThreeReady").style.backgroundColor = "gray";
				playerThreeUser = "";
			} else if (playerFourUser == JSON.parse(event.message).playerLeaving) {
				distributeLeaving(playerFourUser, document.getElementById("playFourName").innerHTML, document.getElementById("playFourTitle").innerHTML, updated(document.getElementById("playFourAvatarPic").src));
				if (document.getElementById("playFourReadyText").innerHTML == "Ready") {
					readies = readies - 1;	
				}
				document.getElementById("playFourAvatarPic").src = "";
				document.getElementById("playFourAvatarPic").style.left = "0px";
				document.getElementById("playFourAvatarPic").style.bottom = "0px";
				document.getElementById("playFourName").innerHTML = "";
				document.getElementById("playFourTitle").innerHTML = "";
				document.getElementById("playFourReadyText").innerHTML = "Waiting...";
				document.getElementById("playFourReady").style.backgroundColor = "gray";
				playerFourUser = "";
			} else if (playerFiveUser == JSON.parse(event.message).playerLeaving) {
				distributeLeaving(playerFiveUser, document.getElementById("playFiveName").innerHTML, document.getElementById("playFiveTitle").innerHTML, updated(document.getElementById("playFiveAvatarPic").src));
				if (document.getElementById("playFiveReadyText").innerHTML == "Ready") {
					readies = readies - 1;	
				}
				document.getElementById("playFiveAvatarPic").src = "";
				document.getElementById("playFiveAvatarPic").style.left = "0px";
				document.getElementById("playFiveAvatarPic").style.bottom = "0px";
				document.getElementById("playFiveName").innerHTML = "";
				document.getElementById("playFiveTitle").innerHTML = "";
				document.getElementById("playFiveReadyText").innerHTML = "Waiting...";
				document.getElementById("playFiveReady").style.backgroundColor = "gray";
				playerFiveUser = "";
			} else if (playerSixUser == JSON.parse(event.message).playerLeaving) {
				distributeLeaving(playerSixUser, document.getElementById("playSixName").innerHTML, document.getElementById("playSixTitle").innerHTML, updated(document.getElementById("playSixAvatarPic").src));
				if (document.getElementById("playSixReadyText").innerHTML == "Ready") {
					readies = readies - 1;	
				}
				document.getElementById("playSixAvatarPic").src = "";
				document.getElementById("playSixAvatarPic").style.left = "0px";
				document.getElementById("playSixAvatarPic").style.bottom = "0px";
				document.getElementById("playSixName").innerHTML = "";
				document.getElementById("playSixTitle").innerHTML = "";
				document.getElementById("playSixReadyText").innerHTML = "Waiting...";
				document.getElementById("playSixReady").style.backgroundColor = "gray";
				playerSixUser = "";
			}
		} else if (JSON.parse(event.message).readyy == true) {
			console.log("did someone say ready");
			if (playerOneUser == JSON.parse(event.message).userr) {
				if (document.getElementById("playOneReadyText").innerHTML != "Ready") {
					document.getElementById("playOneReady").style.backgroundColor = "#228B22";
					document.getElementById("playOneReadyText").innerHTML = "Ready";
					readies += 1;
				}
			} else if (playerTwoUser == JSON.parse(event.message).userr) {
				if (document.getElementById("playTwoReadyText").innerHTML != "Ready") {
					document.getElementById("playTwoReady").style.backgroundColor = "#228B22";
					document.getElementById("playTwoReadyText").innerHTML = "Ready";
					readies += 1;
				}
			} else if (playerThreeUser == JSON.parse(event.message).userr) {
				if (document.getElementById("playThreeReadyText").innerHTML != "Ready") {
					document.getElementById("playThreeReady").style.backgroundColor = "#228B22";
					document.getElementById("playThreeReadyText").innerHTML = "Ready";
					readies += 1;
				}
			} else if (playerFourUser == JSON.parse(event.message).userr) {
				if (document.getElementById("playFourReadyText").innerHTML != "Ready") {
					document.getElementById("playFourReady").style.backgroundColor = "#228B22";
					document.getElementById("playFourReadyText").innerHTML = "Ready";
					readies += 1;
				}
			} else if (playerFiveUser == JSON.parse(event.message).userr) {
				if (document.getElementById("playFiveReadyText").innerHTML != "Ready") {
					document.getElementById("playFiveReady").style.backgroundColor = "#228B22";
					document.getElementById("playFiveReadyText").innerHTML = "Ready";
					readies += 1;
				}
			} else if (playerSixUser == JSON.parse(event.message).userr) {
				if (document.getElementById("playSixReadyText").innerHTML != "Ready") {
					document.getElementById("playSixReady").style.backgroundColor = "#228B22";
					document.getElementById("playSixReadyText").innerHTML = "Ready";
					readies += 1;
				}
			}
			//readies += 1;
			checkAllReady();
		} else {
			console.log("nuh uh");
			var w = 0;
			while (event.message != differentGames[w] && w < differentGames.length) {
				w++;
			}
			if (w != differentGames.length) {
				differentGames.push(JSON.parse(event.message));
				console.log("!!!!!!!!!!!" + event.message);
			}
		}
	}
});

function publishMessage() {
	pubnub.publish({
    channel : 'availableGames',
    message : JSON.stringify({numOfPlayers:numOfPlayers, gemWin:gemWin, gemsToWin:gemsToWin, roundWin:roundWin, roundsToWin:roundsToWin, callToWin:callToWin, sellingHands:sellingHands, insurance:insurance, chat:chat, host:{userr:userr, name:name, title:title, propic:propic}, cancelled:false})
	});
}

function showGemEndGame() {
	document.getElementById("gemsEndGame").style.display = "block";
	document.getElementById("roundsEndGame").style.display = "none";
	document.getElementById("callEndGame").style.display = "none";
	document.getElementById("numOfRounds").value = null;
	gemWin = true;
	roundWin = false;
	callToWin = false;
}

function showRoundEndGame() {
	document.getElementById("roundsEndGame").style.display = "block";
	document.getElementById("callEndGame").style.display = "none";
	document.getElementById("gemsEndGame").style.display = "none";
	document.getElementById("numOfGems").value = null;
	gemWin = false;
	roundWin = true;
	callToWin = false;
}

function showCallLaterEndGame() {
	document.getElementById("callEndGame").style.display = "block";
	document.getElementById("roundsEndGame").style.display = "none";
	document.getElementById("gemsEndGame").style.display = "none";
	document.getElementById("numOfGems").value = null;
	document.getElementById("numOfRounds").value = null;
	gemWin = false;
	roundWin = false;
	callToWin = true;
}

function submitPage() {
	numOfPlayers = document.getElementById("numPlayers").value;
	if (gemWin == true) {
		gemsToWin = document.getElementById("numOfGems").value;
		if (gemsToWin == "") {
			gemsToWin = null;
		}
	} else if (roundWin == true) {
		roundsToWin = document.getElementById("numOfRounds").value;
		if (roundsToWin == "") {
			roundsToWin = null;
		}
	}
	if (document.getElementById("sellHands").checked == true) {
		sellingHands = true;
	}
	if (document.getElementById("insurance").checked == true) {
		insurance = true;
	}
	if (document.getElementById("chat").checked == true) {
		chat = true;
	}
	if ((gemWin == true && gemsToWin != null && gemsToWin > 0) || (roundWin == true && roundsToWin != null && roundsToWin > 0) || (callToWin == true)) {
		window.localStorage.setItem('numOfPlayers', numOfPlayers);
		window.localStorage.setItem('gemWin', JSON.stringify(gemWin));
		window.localStorage.setItem('gemsToWin', gemsToWin);
		window.localStorage.setItem('roundWin', JSON.stringify(roundWin));
		window.localStorage.setItem('roundsToWin', roundsToWin);
		window.localStorage.setItem('callToWin', JSON.stringify(callToWin));
		window.localStorage.setItem('sellingHands', JSON.stringify(sellingHands));
		window.localStorage.setItem('insurance', JSON.stringify(insurance));
		window.localStorage.setItem('chat', JSON.stringify(chat));
		waitingRoom();
	} else {
		alert("Please select an end game option along with a value that is greater than 0 if you selected 'gem win' or 'round win'.");
	}
	gameParam = [numOfPlayers, gemWin, gemsToWin, roundWin, roundsToWin, callToWin, sellingHands, insurance, chat, [userr, name, title, propic]];
	window.localStorage.setItem('hostInfo', JSON.stringify([userr, name, title, propic]));	
	publishMessage();
}

var waitingSlots = [document.getElementById("newPlayOne"), document.getElementById("newPlayTwo"), document.getElementById("newPlayThree"), document.getElementById("newPlayFour"), document.getElementById("newPlayFive"), document.getElementById("newPlaySix")];
var waitingSlotsInner = [document.getElementById("newPlayOneInner"), document.getElementById("newPlayTwoInner"), document.getElementById("newPlayThreeInner"), document.getElementById("newPlayFourInner"), document.getElementById("newPlayFiveInner"), document.getElementById("newPlaySixInner")];

function waitingRoom() {
	document.getElementById("heading").innerHTML = "Add Players";
	document.getElementById("gameOptions").style.display = "none";
	document.getElementById("waitRoom").style.display = "block";
	document.getElementById("hostName").innerHTML = JSON.parse(window.localStorage.getItem('pubnubUser')).name;
	document.getElementById("hostTitle").innerHTML = JSON.parse(window.localStorage.getItem(userr)).title;
	document.getElementById("hostAvatarPic").src = JSON.parse(window.localStorage.getItem(userr)).propic;
	if (document.getElementById("hostAvatarPic").src.includes("elaphant.jpg")) {
		document.getElementById("hostAvatarPic").style.bottom = "2px";
		document.getElementById("hostAvatarPic").style.width = "200%";
		document.getElementById("hostAvatarPic").style.left = "-40px";
		document.getElementById("hostAvatarPic").style.height = "120%";
	} else if (document.getElementById("hostAvatarPic").src.includes("blankAvatar.jpg")) {
		document.getElementById("hostAvatarPic").style.bottom = "8px";
	} else if (document.getElementById("hostAvatarPic").src.includes("steve")) {
		document.getElementById("hostAvatarPic").style.left = "-18px";
		document.getElementById("hostAvatarPic").style.bottom = "15px";
		document.getElementById("hostAvatarPic").style.width = "140%";
		document.getElementById("hostAvatarPic").style.height = "130%";
	} else if (document.getElementById("hostAvatarPic").src.includes("nixon")) {
		document.getElementById("hostAvatarPic").style.bottom = "13px";
		document.getElementById("hostAvatarPic").style.width = "110%";
		document.getElementById("hostAvatarPic").style.height = "130%";
		document.getElementById("hostAvatarPic").style.left = "-3px";
	} else if (document.getElementById("hostAvatarPic").src.includes("spiderman.jpg")) {
		document.getElementById("hostAvatarPic").style.width = "130%";
	} else if (document.getElementById("hostAvatarPic").src.includes("loki")) {
		document.getElementById("hostAvatarPic").style.width = "150%";
		document.getElementById("hostAvatarPic").style.height = "120%";
		document.getElementById("hostAvatarPic").style.left = "-20px";
	} else if (document.getElementById("hostAvatarPic").src.includes("riskPieces")) {
		document.getElementById("hostAvatarPic").style.bottom = "28px";
		document.getElementById("hostAvatarPic").style.width = "220%";
		document.getElementById("hostAvatarPic").style.height = "140%";
		document.getElementById("hostAvatarPic").style.left = "-55px";
	} else if (document.getElementById("hostAvatarPic").src.includes("pikachu")) {
		document.getElementById("hostAvatarPic").style.bottom = "3px";
		document.getElementById("hostAvatarPic").style.left = "3px";
	} else if (document.getElementById("hostAvatarPic").src.includes("yoda")) {
		document.getElementById("hostAvatarPic").style.width = "150%";
		document.getElementById("hostAvatarPic").style.left = "-15px";
	}
	var r = 6;
	while (r >= numOfPlayers) {
		waitingSlots[(r-1)].style.backgroundColor = "gray";
		waitingSlotsInner[(r-1)].style.display = "none";
		r = r - 1;
	}
	document.getElementById("textNumOfPlayers").innerHTML = numOfPlayers + " player game";
	if (gemWin == true) {
		document.getElementById("textEndGame").innerHTML = gemsToWin + " gems to win the game";
	} else if (roundWin == true) {
		document.getElementById("textEndGame").innerHTML = roundsToWin + " rounds to win the game";
	} else if (callToWin == true) {
		document.getElementById("textEndGame").innerHTML = "Host will call the game to signify three rounds left";
	}
	if (sellingHands == true) {
		document.getElementById("textSellingHands").innerHTML = "Selling hands is allowed";
	} else {
		document.getElementById("textSellingHands").innerHTML = "Selling hands is not allowed";
	}
	if (insurance == true) {
		document.getElementById("textInsurance").innerHTML = "Insurance is allowed";
	} else {
		document.getElementById("textInsurance").innerHTML = "Insurance is not allowed";
	}
	if (chat == true) {
		document.getElementById("textChat").innerHTML = "Chat is included";
	} else {
		document.getElementById("textChat").innerHTML = "Chat is not included";
	}
}

function checkAllReady() {
	console.log("checking...");
	if (readies == (numOfPlayers-1)) {
		document.getElementById("startGame").style.display = "block";
		console.log("Checked");
	}
}

function startGame() {
	startedTheGame = true;
	//window.localStorage.setItem('playerOne', playerOneObject);
	var playersIn = [];
	if (document.getElementById("playOneName").innerHTML != "") {
		playersIn.push([playerOneUser, document.getElementById("playOneName").innerHTML, document.getElementById("playOneTitle").innerHTML, updated(document.getElementById("playOneAvatarPic").src)]);
	}
	if (document.getElementById("playTwoName").innerHTML != "") {
		playersIn.push([playerTwoUser, document.getElementById("playTwoName").innerHTML, document.getElementById("playTwoTitle").innerHTML, updated(document.getElementById("playTwoAvatarPic").src)]);
	}
	if (document.getElementById("playThreeName").innerHTML != "") {
		playersIn.push([playerThreeUser, document.getElementById("playThreeName").innerHTML, document.getElementById("playThreeTitle").innerHTML, updated(document.getElementById("playThreeAvatarPic").src)]);
	}
	if (document.getElementById("playFourName").innerHTML != "") {
		playersIn.push([playerFourUser, document.getElementById("playFourName").innerHTML, document.getElementById("playFourTitle").innerHTML, updated(document.getElementById("playFourAvatarPic").src)]);
	}
	if (document.getElementById("playFiveName").innerHTML != "") {
		playersIn.push([playerFiveUser, document.getElementById("playFiveName").innerHTML, document.getElementById("playFiveTitle").innerHTML, updated(document.getElementById("playFiveAvatarPic").src)]);
	}
	if (document.getElementById("playSixName").innerHTML != "") {
		playersIn.push([playerSixUser, document.getElementById("playSixName").innerHTML, document.getElementById("playSixTitle").innerHTML, updated(document.getElementById("playSixAvatarPic").src)]);
	}
	console.log(playersIn);
	window.localStorage.setItem('thePlayersIn', JSON.stringify(playersIn));
	window.localStorage.setItem('hosting', true);
	pubnub.publish({
    channel : 'availableGames',
    message : JSON.stringify({hostUserStart:userr, thePlayersIn:JSON.stringify(playersIn), startingGame:true})
	});
	window.open("IncanGold.html","_self");
}

window.onbeforeunload = function(){
   var t = 0;
   if (differentGames != "") {
	   while (t < differentGames.length) {
		   if (differentGames[t].host.userr == userr) {
			   cancel(t);
			   differentGames.splice(t, 1);
		   }
		   t++;
	   }
   }
   if (startedTheGame == false) {
	   closeGame();
   }
}

function cancel(num) {
	console.log("closing off");
	pubnub.publish({
    channel : 'availableGames',
    message : JSON.stringify({numOfPlayers:numOfPlayers, gemWin:gemWin, gemsToWin:gemsToWin, roundWin:roundWin, roundsToWin:roundsToWin, callToWin:callToWin, sellingHands:sellingHands, insurance:insurance, chat:chat, host:{userr:userr, name:name, title:title, propic:propic}, cancelled:true})
	});
}

function closeGame() {
	console.log("see ya");
	pubnub.publish({
    channel : 'availableGames',
	message : JSON.stringify({hostUser:userr, hostingName:name, hostingTitle:title, hostingPropic:propic, closingGame:true})
	});
}

window.addEventListener("beforeunload", function(e){
   var t = 0;
   if (differentGames != "") {
	   while (t < differentGames.length) {
		   if (differentGames[t].host.userr == userr) {
			   cancel(t);
			   differentGames.splice(t, 1);
		   }
		   t++;
	   }
   }
   if (startedTheGame == false) {
	closeGame();
   }
}, false);

/* window.onunload = function(){
	while (document.getElementById("ref").src.slice(n).includes("/")) {
		n += 1;
	}
} */

function addPlayer(newPlayer) {
	inPlayers(newPlayer);
	playersIn += 1;
	if (document.getElementById("playOneName").innerHTML == "") {
		document.getElementById("playOneName").innerHTML = newPlayer.name;
		document.getElementById("playOneTitle").innerHTML = newPlayer.title;
		document.getElementById("playOneAvatarPic").src = newPlayer.propic;
		document.getElementById("playOneAvatarPic").style.bottom = "0px";
		document.getElementById("playOneAvatarPic").style.left = "0px";
		document.getElementById("playOneAvatarPic").style.width = "100%";
		document.getElementById("playOneAvatarPic").style.height = "100%";
		if (document.getElementById("playOneAvatarPic").src.includes("elaphant.jpg")) {
			document.getElementById("playOneAvatarPic").style.bottom = "2px";
			document.getElementById("playOneAvatarPic").style.width = "200%";
			document.getElementById("playOneAvatarPic").style.left = "-40px";
			document.getElementById("playOneAvatarPic").style.height = "120%";
		} else if (document.getElementById("playOneAvatarPic").src.includes("blankAvatar.jpg")) {
			document.getElementById("playOneAvatarPic").style.bottom = "8px";
		} else if (document.getElementById("playOneAvatarPic").src.includes("steve")) {
			document.getElementById("playOneAvatarPic").style.left = "-18px";
			document.getElementById("playOneAvatarPic").style.bottom = "15px";
			document.getElementById("playOneAvatarPic").style.width = "140%";
			document.getElementById("playOneAvatarPic").style.height = "130%";
		} else if (document.getElementById("playOneAvatarPic").src.includes("nixon")) {
			document.getElementById("playOneAvatarPic").style.bottom = "13px";
			document.getElementById("playOneAvatarPic").style.width = "110%";
			document.getElementById("playOneAvatarPic").style.height = "130%";
			document.getElementById("playOneAvatarPic").style.left = "-3px";
		} else if (document.getElementById("playOneAvatarPic").src.includes("spiderman.jpg")) {
			document.getElementById("playOneAvatarPic").style.width = "130%";
		} else if (document.getElementById("playOneAvatarPic").src.includes("loki")) {
			document.getElementById("playOneAvatarPic").style.width = "150%";
			document.getElementById("playOneAvatarPic").style.height = "120%";
			document.getElementById("playOneAvatarPic").style.left = "-20px";
		} else if (document.getElementById("playOneAvatarPic").src.includes("riskPieces")) {
			document.getElementById("playOneAvatarPic").style.bottom = "28px";
			document.getElementById("playOneAvatarPic").style.width = "220%";
			document.getElementById("playOneAvatarPic").style.height = "140%";
			document.getElementById("playOneAvatarPic").style.left = "-55px";
		} else if (document.getElementById("playOneAvatarPic").src.includes("pikachu")) {
			document.getElementById("playOneAvatarPic").style.bottom = "3px";
			document.getElementById("playOneAvatarPic").style.left = "3px";
		} else if (document.getElementById("playOneAvatarPic").src.includes("yoda")) {
			document.getElementById("playOneAvatarPic").style.width = "150%";
			document.getElementById("playOneAvatarPic").style.left = "-15px";
		}
		document.getElementById("playOneReady").style.backgroundColor = "#FF6961";
		document.getElementById("playOneReadyText").innerHTML = "Not Ready";
		playerOneUser = newPlayer.userr;
		if (numOfPlayers == 2) {
			cancel("one");
		}
		console.log(newPlayer.propic);
		distributeNewPlayer(newPlayer.name, newPlayer.title, newPlayer.propic);
	} else if (document.getElementById("playTwoName").innerHTML == "" && numOfPlayers > 2) {
		document.getElementById("playTwoName").innerHTML = newPlayer.name;
		document.getElementById("playTwoTitle").innerHTML = newPlayer.title;
		document.getElementById("playTwoAvatarPic").src = newPlayer.propic;
		document.getElementById("playTwoAvatarPic").style.bottom = "0px";
		document.getElementById("playTwoAvatarPic").style.left = "0px";
		document.getElementById("playTwoAvatarPic").style.width = "100%";
		document.getElementById("playTwoAvatarPic").style.height = "100%";
		if (document.getElementById("playTwoAvatarPic").src.includes("elaphant.jpg")) {
			document.getElementById("playTwoAvatarPic").style.bottom = "2px";
			document.getElementById("playTwoAvatarPic").style.width = "200%";
			document.getElementById("playTwoAvatarPic").style.left = "-40px";
			document.getElementById("playTwoAvatarPic").style.height = "120%";
		} else if (document.getElementById("playTwoAvatarPic").src.includes("blankAvatar.jpg")) {
			document.getElementById("playTwoAvatarPic").style.bottom = "8px";
		} else if (document.getElementById("playTwoAvatarPic").src.includes("steve")) {
			document.getElementById("playTwoAvatarPic").style.left = "-18px";
			document.getElementById("playTwoAvatarPic").style.bottom = "15px";
			document.getElementById("playTwoAvatarPic").style.width = "140%";
			document.getElementById("playTwoAvatarPic").style.height = "130%";
		} else if (document.getElementById("playTwoAvatarPic").src.includes("nixon")) {
			document.getElementById("playTwoAvatarPic").style.bottom = "13px";
			document.getElementById("playTwoAvatarPic").style.width = "110%";
			document.getElementById("playTwoAvatarPic").style.height = "130%";
			document.getElementById("playTwoAvatarPic").style.left = "-3px";
		} else if (document.getElementById("playTwoAvatarPic").src.includes("spiderman.jpg")) {
			document.getElementById("playTwoAvatarPic").style.width = "130%";
		} else if (document.getElementById("playTwoAvatarPic").src.includes("loki")) {
			document.getElementById("playTwoAvatarPic").style.width = "150%";
			document.getElementById("playTwoAvatarPic").style.height = "120%";
			document.getElementById("playTwoAvatarPic").style.left = "-20px";
		} else if (document.getElementById("playTwoAvatarPic").src.includes("riskPieces")) {
			document.getElementById("playTwoAvatarPic").style.bottom = "28px";
			document.getElementById("playTwoAvatarPic").style.width = "220%";
			document.getElementById("playTwoAvatarPic").style.height = "140%";
			document.getElementById("playTwoAvatarPic").style.left = "-55px";
		} else if (document.getElementById("playTwoAvatarPic").src.includes("pikachu")) {
			document.getElementById("playTwoAvatarPic").style.bottom = "3px";
			document.getElementById("playTwoAvatarPic").style.left = "3px";
		} else if (document.getElementById("playTwoAvatarPic").src.includes("yoda")) {
			document.getElementById("playTwoAvatarPic").style.width = "150%";
			document.getElementById("playTwoAvatarPic").style.left = "-15px";
		}
		document.getElementById("playTwoReady").style.backgroundColor = "#FF6961";
		document.getElementById("playTwoReadyText").innerHTML = "Not Ready";
		playerTwoUser = newPlayer.userr;
		if (numOfPlayers == 3) {
			cancel("one");
		}
		distributeNewPlayer(newPlayer.name, newPlayer.title, newPlayer.propic);
	} else if (document.getElementById("playThreeName").innerHTML == "" && numOfPlayers > 3) {
		document.getElementById("playThreeName").innerHTML = newPlayer.name;
		document.getElementById("playThreeTitle").innerHTML = newPlayer.title;
		document.getElementById("playThreeAvatarPic").src = newPlayer.propic;
		document.getElementById("playThreeAvatarPic").style.bottom = "0px";
		document.getElementById("playThreeAvatarPic").style.left = "0px";
		document.getElementById("playThreeAvatarPic").style.width = "100%";
		document.getElementById("playThreeAvatarPic").style.height = "100%";
		if (document.getElementById("playThreeAvatarPic").src.includes("elaphant.jpg")) {
			document.getElementById("playThreeAvatarPic").style.bottom = "2px";
			document.getElementById("playThreeAvatarPic").style.width = "200%";
			document.getElementById("playThreeAvatarPic").style.left = "-40px";
			document.getElementById("playThreeAvatarPic").style.height = "120%";
		} else if (document.getElementById("playThreeAvatarPic").src.includes("blankAvatar.jpg")) {
			document.getElementById("playThreeAvatarPic").style.bottom = "8px";
		} else if (document.getElementById("playThreeAvatarPic").src.includes("steve")) {
			document.getElementById("playThreeAvatarPic").style.left = "-18px";
			document.getElementById("playThreeAvatarPic").style.bottom = "15px";
			document.getElementById("playThreeAvatarPic").style.width = "140%";
			document.getElementById("playThreeAvatarPic").style.height = "130%";
		} else if (document.getElementById("playThreeAvatarPic").src.includes("nixon")) {
			document.getElementById("playThreeAvatarPic").style.bottom = "13px";
			document.getElementById("playThreeAvatarPic").style.width = "110%";
			document.getElementById("playThreeAvatarPic").style.height = "130%";
			document.getElementById("playThreeAvatarPic").style.left = "-3px";
		} else if (document.getElementById("playThreeAvatarPic").src.includes("spiderman.jpg")) {
			document.getElementById("playThreeAvatarPic").style.width = "130%";
		} else if (document.getElementById("playThreeAvatarPic").src.includes("loki")) {
			document.getElementById("playThreeAvatarPic").style.width = "150%";
			document.getElementById("playThreeAvatarPic").style.height = "120%";
			document.getElementById("playThreeAvatarPic").style.left = "-20px";
		} else if (document.getElementById("playThreeAvatarPic").src.includes("riskPieces")) {
			document.getElementById("playThreeAvatarPic").style.bottom = "28px";
			document.getElementById("playThreeAvatarPic").style.width = "220%";
			document.getElementById("playThreeAvatarPic").style.height = "140%";
			document.getElementById("playThreeAvatarPic").style.left = "-55px";
		} else if (document.getElementById("playThreeAvatarPic").src.includes("pikachu")) {
			document.getElementById("playThreeAvatarPic").style.bottom = "3px";
			document.getElementById("playThreeAvatarPic").style.left = "3px";
		} else if (document.getElementById("playThreeAvatarPic").src.includes("yoda")) {
			document.getElementById("playThreeAvatarPic").style.width = "150%";
			document.getElementById("playThreeAvatarPic").style.left = "-15px";
		}
		document.getElementById("playThreeReady").style.backgroundColor = "#FF6961";
		document.getElementById("playThreeReadyText").innerHTML = "Not Ready";
		playerThreeUser = newPlayer.userr;
		if (numOfPlayers == 4) {
			cancel("one");
		}
		distributeNewPlayer(newPlayer.name, newPlayer.title, newPlayer.propic);
	} else if (document.getElementById("playFourName").innerHTML == "" && numOfPlayers > 4) {
		document.getElementById("playFourName").innerHTML = newPlayer.name;
		document.getElementById("playFourTitle").innerHTML = newPlayer.title;
		document.getElementById("playFourAvatarPic").src = newPlayer.propic;
		document.getElementById("playFourAvatarPic").style.bottom = "0px";
		document.getElementById("playFourAvatarPic").style.left = "0px";
		document.getElementById("playFourAvatarPic").style.width = "100%";
		document.getElementById("playFourAvatarPic").style.height = "100%";
		if (document.getElementById("playFourAvatarPic").src.includes("elaphant.jpg")) {
			document.getElementById("playFourAvatarPic").style.bottom = "2px";
			document.getElementById("playFourAvatarPic").style.width = "200%";
			document.getElementById("playFourAvatarPic").style.left = "-40px";
			document.getElementById("playFourAvatarPic").style.height = "120%";
		} else if (document.getElementById("playFourAvatarPic").src.includes("blankAvatar.jpg")) {
			document.getElementById("playFourAvatarPic").style.bottom = "8px";
		} else if (document.getElementById("playFourAvatarPic").src.includes("steve")) {
			document.getElementById("playFourAvatarPic").style.left = "-18px";
			document.getElementById("playFourAvatarPic").style.bottom = "15px";
			document.getElementById("playFourAvatarPic").style.width = "140%";
			document.getElementById("playFourAvatarPic").style.height = "130%";
		} else if (document.getElementById("playFourAvatarPic").src.includes("nixon")) {
			document.getElementById("playFourAvatarPic").style.bottom = "13px";
			document.getElementById("playFourAvatarPic").style.width = "110%";
			document.getElementById("playFourAvatarPic").style.height = "130%";
			document.getElementById("playFourAvatarPic").style.left = "-3px";
		} else if (document.getElementById("playFourAvatarPic").src.includes("spiderman.jpg")) {
			document.getElementById("playFourAvatarPic").style.width = "130%";
		} else if (document.getElementById("playFourAvatarPic").src.includes("loki")) {
			document.getElementById("playFourAvatarPic").style.width = "150%";
			document.getElementById("playFourAvatarPic").style.height = "120%";
			document.getElementById("playFourAvatarPic").style.left = "-20px";
		} else if (document.getElementById("playFourAvatarPic").src.includes("riskPieces")) {
			document.getElementById("playFourAvatarPic").style.bottom = "28px";
			document.getElementById("playFourAvatarPic").style.width = "220%";
			document.getElementById("playFourAvatarPic").style.height = "140%";
			document.getElementById("playFourAvatarPic").style.left = "-55px";
		} else if (document.getElementById("playFourAvatarPic").src.includes("pikachu")) {
			document.getElementById("playFourAvatarPic").style.bottom = "3px";
			document.getElementById("playFourAvatarPic").style.left = "3px";
		} else if (document.getElementById("playFourAvatarPic").src.includes("yoda")) {
			document.getElementById("playFourAvatarPic").style.width = "150%";
			document.getElementById("playFourAvatarPic").style.left = "-15px";
		}
		document.getElementById("playFourReady").style.backgroundColor = "#FF6961";
		document.getElementById("playFourReadyText").innerHTML = "Not Ready";
		playerFourUser = newPlayer.userr;
		if (numOfPlayers == 5) {
			cancel("one");
		}
		distributeNewPlayer(newPlayer.name, newPlayer.title, newPlayer.propic);
	} else if (document.getElementById("playFiveName").innerHTML == "" && numOfPlayers > 5) {
		document.getElementById("playFiveName").innerHTML = newPlayer.name;
		document.getElementById("playFiveTitle").innerHTML = newPlayer.title;
		document.getElementById("playFiveAvatarPic").src = newPlayer.propic;
		document.getElementById("playFiveAvatarPic").style.bottom = "0px";
		document.getElementById("playFiveAvatarPic").style.left = "0px";
		document.getElementById("playFiveAvatarPic").style.width = "100%";
		document.getElementById("playFiveAvatarPic").style.height = "100%";
		if (document.getElementById("playFiveAvatarPic").src.includes("elaphant.jpg")) {
			document.getElementById("playFiveAvatarPic").style.bottom = "2px";
			document.getElementById("playFiveAvatarPic").style.width = "200%";
			document.getElementById("playFiveAvatarPic").style.left = "-40px";
			document.getElementById("playFiveAvatarPic").style.height = "120%";
		} else if (document.getElementById("playFiveAvatarPic").src.includes("blankAvatar.jpg")) {
			document.getElementById("playFiveAvatarPic").style.bottom = "8px";
		} else if (document.getElementById("playFiveAvatarPic").src.includes("steve")) {
			document.getElementById("playFiveAvatarPic").style.left = "-18px";
			document.getElementById("playFiveAvatarPic").style.bottom = "15px";
			document.getElementById("playFiveAvatarPic").style.width = "140%";
			document.getElementById("playFiveAvatarPic").style.height = "130%";
		} else if (document.getElementById("playFiveAvatarPic").src.includes("nixon")) {
			document.getElementById("playFiveAvatarPic").style.bottom = "13px";
			document.getElementById("playFiveAvatarPic").style.width = "110%";
			document.getElementById("playFiveAvatarPic").style.height = "130%";
			document.getElementById("playFiveAvatarPic").style.left = "-3px";
		} else if (document.getElementById("playFiveAvatarPic").src.includes("spiderman.jpg")) {
			document.getElementById("playFiveAvatarPic").style.width = "130%";
		} else if (document.getElementById("playFiveAvatarPic").src.includes("loki")) {
			document.getElementById("playFiveAvatarPic").style.width = "150%";
			document.getElementById("playFiveAvatarPic").style.height = "120%";
			document.getElementById("playFiveAvatarPic").style.left = "-20px";
		} else if (document.getElementById("playFiveAvatarPic").src.includes("riskPieces")) {
			document.getElementById("playFiveAvatarPic").style.bottom = "28px";
			document.getElementById("playFiveAvatarPic").style.width = "220%";
			document.getElementById("playFiveAvatarPic").style.height = "140%";
			document.getElementById("playFiveAvatarPic").style.left = "-55px";
		} else if (document.getElementById("playFiveAvatarPic").src.includes("pikachu")) {
			document.getElementById("playFiveAvatarPic").style.bottom = "3px";
			document.getElementById("playFiveAvatarPic").style.left = "3px";
		} else if (document.getElementById("playFiveAvatarPic").src.includes("yoda")) {
			document.getElementById("playFiveAvatarPic").style.width = "150%";
			document.getElementById("playFiveAvatarPic").style.left = "-15px";
		}
		document.getElementById("playFiveReady").style.backgroundColor = "#FF6961";
		document.getElementById("playFiveReadyText").innerHTML = "Not Ready";
		playerFiveUser = newPlayer.userr;
		if (numOfPlayers == 6) {
			cancel("one");	
		}
		distributeNewPlayer(newPlayer.name, newPlayer.title, newPlayer.propic);
	} else if (document.getElementById("playSixName").innerHTML == "" && numOfPlayers > 6) {
		document.getElementById("playSixName").innerHTML = newPlayer.name;
		document.getElementById("playSixTitle").innerHTML = newPlayer.title;
		document.getElementById("playSixAvatarPic").src = newPlayer.propic;
		document.getElementById("playSixAvatarPic").style.bottom = "0px";
		document.getElementById("playSixAvatarPic").style.left = "0px";
		document.getElementById("playSixAvatarPic").style.width = "100%";
		document.getElementById("playSixAvatarPic").style.height = "100%";
		if (document.getElementById("playSixAvatarPic").src.includes("elaphant.jpg")) {
			document.getElementById("playSixAvatarPic").style.bottom = "2px";
			document.getElementById("playSixAvatarPic").style.width = "200%";
			document.getElementById("playSixAvatarPic").style.left = "-40px";
			document.getElementById("playSixAvatarPic").style.height = "120%";
		} else if (document.getElementById("playSixAvatarPic").src.includes("blankAvatar.jpg")) {
			document.getElementById("playSixAvatarPic").style.bottom = "8px";
		} else if (document.getElementById("playSixAvatarPic").src.includes("steve")) {
			document.getElementById("playSixAvatarPic").style.left = "-18px";
			document.getElementById("playSixAvatarPic").style.bottom = "15px";
			document.getElementById("playSixAvatarPic").style.width = "140%";
			document.getElementById("playSixAvatarPic").style.height = "130%";
		} else if (document.getElementById("playSixAvatarPic").src.includes("nixon")) {
			document.getElementById("playSixAvatarPic").style.bottom = "13px";
			document.getElementById("playSixAvatarPic").style.width = "110%";
			document.getElementById("playSixAvatarPic").style.height = "130%";
			document.getElementById("playSixAvatarPic").style.left = "-3px";
		} else if (document.getElementById("playSixAvatarPic").src.includes("spiderman.jpg")) {
			document.getElementById("playSixAvatarPic").style.width = "130%";
		} else if (document.getElementById("playSixAvatarPic").src.includes("loki")) {
			document.getElementById("playSixAvatarPic").style.width = "150%";
			document.getElementById("playSixAvatarPic").style.height = "120%";
			document.getElementById("playSixAvatarPic").style.left = "-20px";
		} else if (document.getElementById("playSixAvatarPic").src.includes("riskPieces")) {
			document.getElementById("playSixAvatarPic").style.bottom = "28px";
			document.getElementById("playSixAvatarPic").style.width = "220%";
			document.getElementById("playSixAvatarPic").style.height = "140%";
			document.getElementById("playSixAvatarPic").style.left = "-55px";
		} else if (document.getElementById("playSixAvatarPic").src.includes("pikachu")) {
			document.getElementById("playSixAvatarPic").style.bottom = "3px";
			document.getElementById("playSixAvatarPic").style.left = "3px";
		} else if (document.getElementById("playSixAvatarPic").src.includes("yoda")) {
			document.getElementById("playSixAvatarPic").style.width = "150%";
			document.getElementById("playSixAvatarPic").style.left = "-15px";
		}
		document.getElementById("playSixReady").style.backgroundColor = "#FF6961";
		document.getElementById("playSixReadyText").innerHTML = "Not Ready";
		playerSixUser = newPlayer.userr;
		if (numOfPlayers == 7) {
			cancel("one");
		}
		distributeNewPlayer(newPlayer.name, newPlayer.title, newPlayer.propic);
	}
}

function distributeNewPlayer(playName, playTitle, playPropic) {
	console.log("distrivute player");
	console.log(name);
	console.log(propic);
	console.log(playPropic);
	pubnub.publish({
    channel : 'availableGames',
    message : JSON.stringify({hostName:name, hostPropic:propic, playName:playName, playTitle:playTitle, playPropic:playPropic, newPlayerAdd:true})
	});
}

function inPlayers(newPlayer) {
	var playerList = [];
	if (document.getElementById("playOneName").innerHTML != "" && document.getElementById("playOneName").innerHTML != null) {
		if (document.getElementById("playOneReadyText").innerHTML == "Ready") {
			playerList.push([document.getElementById("playOneName").innerHTML, document.getElementById("playOneTitle").innerHTML, updated(document.getElementById("playOneAvatarPic").src), "Ready"]);
		} else {
			playerList.push([document.getElementById("playOneName").innerHTML, document.getElementById("playOneTitle").innerHTML, updated(document.getElementById("playOneAvatarPic").src), "Not Ready"]);			
		}
	}
	if (document.getElementById("playTwoName").innerHTML != "" && document.getElementById("playTwoName").innerHTML != null) {
		if (document.getElementById("playOneReadyText").innerHTML == "Ready") {
			playerList.push([document.getElementById("playTwoName").innerHTML, document.getElementById("playTwoTitle").innerHTML, updated(document.getElementById("playTwoAvatarPic").src), "Ready"]);
		} else {
			playerList.push([document.getElementById("playTwoName").innerHTML, document.getElementById("playTwoTitle").innerHTML, updated(document.getElementById("playTwoAvatarPic").src), "Not Ready"]);
		}
	}
	if (document.getElementById("playThreeName").innerHTML != "" && document.getElementById("playThreeName").innerHTML != null) {
		if (document.getElementById("playOneReadyText").innerHTML == "Ready") {	
			playerList.push([document.getElementById("playThreeName").innerHTML, document.getElementById("playThreeTitle").innerHTML, updated(document.getElementById("playThreeAvatarPic").src), "Ready"]);
		} else {
			playerList.push([document.getElementById("playThreeName").innerHTML, document.getElementById("playThreeTitle").innerHTML, updated(document.getElementById("playThreeAvatarPic").src), "Not Ready"]);
		}
	}
	if (document.getElementById("playFourName").innerHTML != "" && document.getElementById("playFourName").innerHTML != null) {
		if (document.getElementById("playOneReadyText").innerHTML == "Ready") {
			playerList.push([document.getElementById("playFourName").innerHTML, document.getElementById("playFourTitle").innerHTML, updated(document.getElementById("playFourAvatarPic").src), "Ready"]);
		} else {
			playerList.push([document.getElementById("playFourName").innerHTML, document.getElementById("playFourTitle").innerHTML, updated(document.getElementById("playFourAvatarPic").src), "Not Ready"]);
		}
	}
	if (document.getElementById("playFiveName").innerHTML != "" && document.getElementById("playFiveName").innerHTML != null) {
		if (document.getElementById("playOneReadyText").innerHTML == "Ready") {
			playerList.push([document.getElementById("playFiveName").innerHTML, document.getElementById("playFiveTitle").innerHTML, updated(document.getElementById("playFiveAvatarPic").src), "Ready"]);
		} else {
			playerList.push([document.getElementById("playFiveName").innerHTML, document.getElementById("playFiveTitle").innerHTML, updated(document.getElementById("playFiveAvatarPic").src), "Not Ready"]);
		}
	}
	pubnub.publish({
    channel : 'availableGames',
    message : JSON.stringify({newName:newPlayer.name, newTitle:newPlayer.title, newPropic:newPlayer.propic, players:playerList, inPlayers:true})
	});
}

function updated(source) {
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

function distributeLeaving(userr, name, title, propic) {
	console.log(title);
	pubnub.publish({
    channel : 'availableGames',
    message : JSON.stringify({userr:userr, name:name, title:title, propic:propic, hostTellLeave:true})
	});
}







