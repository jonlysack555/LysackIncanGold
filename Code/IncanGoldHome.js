var user;
var name;
var pass;
var title;
var propic;
var totalGem;
var totalArtifact;
var totalDeath;
var totalGame;
var totalDeal;
var elaphant;
var steve;
var nixon;
var spiderman;
var loki;
var mario;
var riskPieces;
var linkk;
var pikachu;
var yoda;
var thanos;
var instructions;
var hacker;

document.getElementById("newGame").addEventListener("click", newGameOpen);

function newGameOpen() {
	window.open("NewGame.html","_self");
}

document.getElementById("joinGame").addEventListener("click", newJoinOpen);

function newJoinOpen() {
	window.open("JoinGame.html","_self");
}

document.getElementById("stats").addEventListener("click", newStatsOpen);

function newStatsOpen() {
	window.open("Stats.html","_self");
}

document.getElementById("account").addEventListener("click", newAccountOpen);

function newAccountOpen() {
	window.open("Account.html","_self");
}

document.getElementById("instructions").addEventListener("click", newInstructionsOpen);

function newInstructionsOpen() {
	window.open("Instructions.html","_self");
}

window.onload = function(){
	user = JSON.parse(window.localStorage.getItem('pubnubUser')).id;
	user = user + "i";
	name = JSON.parse(window.localStorage.getItem('pubnubUser')).name;
	pass = JSON.parse(window.localStorage.getItem('pubnubUser')).custom.pass;
	if (JSON.parse(window.localStorage.getItem(user)) != null) {
		title = JSON.parse(window.localStorage.getItem(user)).title;
	}  else {
		title = "Novice";
	}
	if (JSON.parse(window.localStorage.getItem(user)) != null) {
		propic = JSON.parse(window.localStorage.getItem(user)).propic;
	} else {
		propic = "blankAvatar.jpg";
	}
	if (JSON.parse(window.localStorage.getItem(user)) != null) {
		totalGem = JSON.parse(window.localStorage.getItem(user)).totalGem;
	} else {
		totalGem = 0;
	}
	if (JSON.parse(window.localStorage.getItem(user)) != null) {
		totalArtifact = JSON.parse(window.localStorage.getItem(user)).totalArtifact;
	} else {
		totalArtifact = 0;
	}
	if (JSON.parse(window.localStorage.getItem(user)) != null) {
		totalDeath = JSON.parse(window.localStorage.getItem(user)).totalDeath;
	} else {
		totalDeath = 0;
	}
	if (JSON.parse(window.localStorage.getItem(user)) != null) {
		totalGame = JSON.parse(window.localStorage.getItem(user)).totalGame;
	} else {
		totalGame = 0;
	}
	if (JSON.parse(window.localStorage.getItem(user)) != null) {
		totalDeal = JSON.parse(window.localStorage.getItem(user)).totalDeal;
	} else {
		totalDeal = 0;
	}
	if (JSON.parse(window.localStorage.getItem(user)) != null) {
		elaphant = JSON.parse(window.localStorage.getItem(user)).elaphant;
		steve = JSON.parse(window.localStorage.getItem(user)).steve;
		nixon = JSON.parse(window.localStorage.getItem(user)).nixon;
		spiderman = JSON.parse(window.localStorage.getItem(user)).spiderman;
		loki = JSON.parse(window.localStorage.getItem(user)).loki;
		mario = JSON.parse(window.localStorage.getItem(user)).mario;
		riskPieces = JSON.parse(window.localStorage.getItem(user)).riskPieces;
		linkk = JSON.parse(window.localStorage.getItem(user)).linkk;
		pikachu = JSON.parse(window.localStorage.getItem(user)).pikachu;
		yoda = JSON.parse(window.localStorage.getItem(user)).yoda;
		thanos = JSON.parse(window.localStorage.getItem(user)).thanos;
	} else {
		elaphant = false;
		steve = false;
		nixon = false;
		spiderman = false;
		loki = false;
		mario = false;
		riskPieces = false;
		linkk = false;
		pikachu = false;
		yoda = false;
		thanos = false;
	}
	if (JSON.parse(window.localStorage.getItem(user)) != null) {
		instructions = JSON.parse(window.localStorage.getItem(user)).instructions;
	} else {
		instructions = false;
	}
	if (JSON.parse(window.localStorage.getItem(user)) != null) {
		hacker = JSON.parse(window.localStorage.getItem(user)).hacker;
	} else {
		hacker = false;
	}
	playerUser(user, name, pass, title, propic, totalGem, totalArtifact, totalDeath, totalGame, totalDeal, elaphant, steve, nixon, spiderman, loki, mario, riskPieces, linkk, pikachu, yoda, thanos, instructions, hacker);
}
	
function playerUser(user, name, pass, title, propic, totalGem, totalArtifact, totalDeath, totalGame, totalDeal, elaphant, steve, nixon, spiderman, loki, mario, riskPieces, linkk, pikachu, yoda, thanos, instructions, hacker) {
	localStorage.setItem(user, JSON.stringify({name:name, user:user, pass:pass, title:title, propic:propic, totalGem:totalGem, totalArtifact:totalArtifact, totalDeath:totalDeath, totalGame:totalGame, totalDeal:totalDeal, elaphant:elaphant, steve:steve, nixon:nixon, spiderman:spiderman, loki:loki, mario:mario, riskPieces:riskPieces, linkk:linkk, pikachu:pikachu, yoda:yoda, thanos:thanos, instructions:instructions, hacker:hacker}));
}









