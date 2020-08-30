var user;
var elaphant;
var steve;
var nixon;
var spiderman;
var loki;
var mario;
var risk;
var linkk;
var pika;
var yoda;
var thanos;
var moneyBags = false;
var prince = false;
var billionare = false;
var jeffBezos = false;
var collector = false;
var garyDrayton = false;
var archaeologist = false;
var indianaJones = false;
var deceased = false;
var unluckyRoller = false;
var riskTaker = false;
var graveyardRegular = false;
var learner = false;
var experiencedExplorer = false;
var master = false;
var ancientOne = false;
var businessPerson = false;
var dayTrader = false;
var cardinalInvestor = false;
var wolfOfWallStreet = false;
var confused = false;
var hacker = false;
var customized = false;
var theCreator = false;
var pikaClicks = 0;

window.onload = function() {
	unlock("One");
	user = JSON.parse(localStorage.getItem('pubnubUser')).id;
	user = user + "i";
	elaphant = JSON.parse(localStorage.getItem(user)).elaphant;
	steve = JSON.parse(localStorage.getItem(user)).steve;
	nixon = JSON.parse(localStorage.getItem(user)).nixon;
	spiderman = JSON.parse(localStorage.getItem(user)).spiderman;
	loki = JSON.parse(localStorage.getItem(user)).loki;
	mario = JSON.parse(localStorage.getItem(user)).mario;
	risk = JSON.parse(localStorage.getItem(user)).riskPieces;
	linkk = JSON.parse(localStorage.getItem(user)).linkk;
	pika = JSON.parse(localStorage.getItem(user)).pikachu;
	yoda = JSON.parse(localStorage.getItem(user)).yoda;
	thanos = JSON.parse(localStorage.getItem(user)).thanos;
	if (JSON.parse(localStorage.getItem(user)).totalGem >= 5000) {
		moneyBags = true;
		prince = true;
		billionare = true;
		jeffBezos = true;
	} else if (JSON.parse(localStorage.getItem(user)).totalGem >= 1000) {
		moneyBags = true;
		prince = true;
		billionare = true;
	} else if (JSON.parse(localStorage.getItem(user)).totalGem >= 250) {
		moneyBags = true;
		prince = true;
	} else if (JSON.parse(localStorage.getItem(user)).totalGem >= 50) {
		moneyBags = true;
	}
	if (JSON.parse(localStorage.getItem(user)).totalArtifact >= 250) {
		collector = true;
		garyDrayton = true;
		archaeologist = true;
		indianaJones = true;
	} else if (JSON.parse(localStorage.getItem(user)).totalArtifact >= 100) {
		collector = true;
		garyDrayton = true;
		archaeologist = true;
	} else if (JSON.parse(localStorage.getItem(user)).totalArtifact >= 20) {
		collector = true;
		garyDrayton = true;
	} else if (JSON.parse(localStorage.getItem(user)).totalArtifact >= 5) {
		collector = true;
	}
	if (JSON.parse(localStorage.getItem(user)).totalDeath >= 2000) {
		deceased = true;
		unluckyRoller = true;
		riskTaker = true;
		graveyardRegular = true;
	} else if (JSON.parse(localStorage.getItem(user)).totalDeath >= 500) {
		deceased = true;
		unluckyRoller = true;
		riskTaker = true;
	} else if (JSON.parse(localStorage.getItem(user)).totalDeath >= 100) {
		deceased = true;
		unluckyRoller = true;
	} else if (JSON.parse(localStorage.getItem(user)).totalDeath >= 20) {
		deceased = true;
	}
	if (JSON.parse(localStorage.getItem(user)).totalGame >= 400) {
		learner = true;
		experiencedExplorer = true;
		master = true;
		ancientOne = true;
	} else if (JSON.parse(localStorage.getItem(user)).totalGame >= 50) {
		learner = true;
		experiencedExplorer = true;
		master = true;
	} else if (JSON.parse(localStorage.getItem(user)).totalGame >= 10) {
		learner = true;
		experiencedExplorer = true;
	} else if (JSON.parse(localStorage.getItem(user)).totalGame >= 1) {
		learner = true;
	}
	if (JSON.parse(localStorage.getItem(user)).totalDeal >= 1000) {
		businessPerson = true;
		dayTrader = true;
		cardinalInvestor = true;
		wolfOfWallStreet = true;
	} else if (JSON.parse(localStorage.getItem(user)).totalDeal >= 250) {
		businessPerson = true;
		dayTrader = true;
		cardinalInvestor = true;
	} else if (JSON.parse(localStorage.getItem(user)).totalDeal >= 50) {
		businessPerson = true;
		dayTrader = true;
	} else if (JSON.parse(localStorage.getItem(user)).totalDeal >= 10) {
		businessPerson = true;
	}
	if (JSON.parse(localStorage.getItem(user)).instructions == true) {
		confused = true;
	}
	if (JSON.parse(localStorage.getItem(user)).hacker == true) {
		hacker = true;
	}
	if (user == "jonlysacki") {
		theCreator = true;
	}
	if (archaeologist == true) {
		elaphant = true;
	}
	if (master == true) {
		steve = true;
	}
	if (cardinalInvestor == true) {
		nixon = true;
	}
	if (billionare == true) {
		spiderman = true;
	}
	if (riskTaker == true) {
		loki = true;
	}
	if (user == "dani01i") {
		risk = true;
	}
	if (confused == true || hacker == true || customized == true || theCreator == true) {
		linkk = true;
	}
	if (user == "jonlysacki") {
		thanos = true;
	}
	if (elaphant == true) {
		unlock("Two");
	} 
	if (steve == true) {
		unlock("Three");
	} 
	if (nixon == true) {
		unlock("Four");
	} 
	if (spiderman == true) {
		unlock("Five");
	} 
	if (loki == true) {
		unlock("Six");
	} 
	if (mario == true) {
		unlock("Seven");
	} 
	if (risk == true) {
		unlock("Eight");
	} 
	if (linkk == true) {
		unlock("Nine");
	} 
	if (pika == true) {
		unlock("Ten");
	} 
	if (yoda == true) {
		unlock("Eleven");
	} 
	if (user == "jonlysacki") {
		unlock("Twelve");
		thanos = true;
	}
	if (elaphant == true && steve == true && nixon == true && spiderman == true && loki == true && mario == true && linkk == true && pika == true && yoda == true) {
		customized = true;
	}
	document.getElementById("hostAvatarPic").src = JSON.parse(localStorage.getItem(user)).propic;
	document.getElementById("hostName").innerHTML = JSON.parse(localStorage.getItem(user)).name;
	document.getElementById("hostTitle").innerHTML = JSON.parse(localStorage.getItem(user)).title;
	if (document.getElementById("hostAvatarPic").src.includess("elaphant.jpg")) {
		document.getElementById("hostAvatarPic").style.bottom = "2px";
		document.getElementById("hostAvatarPic").style.width = "200%";
		document.getElementById("hostAvatarPic").style.left = "-40px";
		document.getElementById("hostAvatarPic").style.height = "120%";
	} else if (document.getElementById("hostAvatarPic").src.includess("blankAvatar.jpg")) {
		document.getElementById("hostAvatarPic").style.bottom = "8px";
	} else if (document.getElementById("hostAvatarPic").src.includess("steve")) {
		document.getElementById("hostAvatarPic").style.left = "-18px";
		document.getElementById("hostAvatarPic").style.bottom = "15px";
		document.getElementById("hostAvatarPic").style.width = "140%";
		document.getElementById("hostAvatarPic").style.height = "130%";
	} else if (document.getElementById("hostAvatarPic").src.includess("nixon")) {
		document.getElementById("hostAvatarPic").style.bottom = "13px";
		document.getElementById("hostAvatarPic").style.width = "110%";
		document.getElementById("hostAvatarPic").style.height = "130%";
		document.getElementById("hostAvatarPic").style.left = "-3px";
	} else if (document.getElementById("hostAvatarPic").src.includess("spiderman.jpg")) {
		document.getElementById("hostAvatarPic").style.width = "130%";
	} else if (document.getElementById("hostAvatarPic").src.includess("loki")) {
		document.getElementById("hostAvatarPic").style.width = "150%";
		document.getElementById("hostAvatarPic").style.height = "120%";
		document.getElementById("hostAvatarPic").style.left = "-20px";
	} else if (document.getElementById("hostAvatarPic").src.includess("riskPieces")) {
		document.getElementById("hostAvatarPic").style.bottom = "28px";
		document.getElementById("hostAvatarPic").style.width = "220%";
		document.getElementById("hostAvatarPic").style.height = "140%";
		document.getElementById("hostAvatarPic").style.left = "-55px";
	} else if (document.getElementById("hostAvatarPic").src.includess("pikachu")) {
		document.getElementById("hostAvatarPic").style.bottom = "3px";
		document.getElementById("hostAvatarPic").style.left = "3px";
	} else if (document.getElementById("hostAvatarPic").src.includess("yoda")) {
		document.getElementById("hostAvatarPic").style.width = "150%";
		document.getElementById("hostAvatarPic").style.left = "-15px";
	}
	if (moneyBags == true) {
		document.getElementById("moneyBagsLock").src = "unlocked.jpg";
		document.getElementById("moneyBags").style.color = "green";
		document.getElementById("moneyBagsDiv").onmouseover = function() {
			document.getElementById("moneyBags").style.textShadow = "3px 2px 3px green";
		}
		document.getElementById("moneyBagsDiv").onmouseout = function() {
			document.getElementById("moneyBags").style.textShadow = "none";
		}
	} else {
		document.getElementById("moneyBagsLock").src = "locked.jpg";
	}
	if (prince == true) {
		document.getElementById("princeLock").src = "unlocked.jpg";
		document.getElementById("prince").style.color = "green";
		document.getElementById("princeDiv").onmouseover = function() {
			document.getElementById("prince").style.textShadow = "3px 2px 3px green";
		}
		document.getElementById("princeDiv").onmouseout = function() {
			document.getElementById("prince").style.textShadow = "none";
		}
	} else {
		document.getElementById("princeLock").src = "locked.jpg";
	}
	if (billionare == true) {
		document.getElementById("billionareLock").src = "unlocked.jpg";
		document.getElementById("billionare").style.color = "green";
		document.getElementById("billionareDiv").onmouseover = function() {
			document.getElementById("billionare").style.textShadow = "3px 2px 3px green";
		}
		document.getElementById("billionareDiv").onmouseout = function() {
			document.getElementById("billionare").style.textShadow = "none";
		}
	} else {
		document.getElementById("billionareLock").src = "locked.jpg";
	}
	if (jeffBezos == true) {
		document.getElementById("jeffBezosLock").src = "unlocked.jpg";
		document.getElementById("jeffBezos").style.color = "green";
		document.getElementById("jeffBezosDiv").onmouseover = function() {
			document.getElementById("jeffBezos").style.textShadow = "3px 2px 3px green";
		}
		document.getElementById("jeffBezosDiv").onmouseout = function() {
			document.getElementById("jeffBezos").style.textShadow = "none";
		}
	} else {
		document.getElementById("jeffBezosLock").src = "locked.jpg";
	}
	if (collector == true) {
		document.getElementById("collectorLock").src = "unlocked.jpg";
		document.getElementById("collector").style.color = "green";
		document.getElementById("collectorDiv").onmouseover = function() {
			document.getElementById("collector").style.textShadow = "3px 2px 3px green";
		}
		document.getElementById("collectorDiv").onmouseout = function() {
			document.getElementById("collector").style.textShadow = "none";
		}
	} else {
		document.getElementById("collectorLock").src = "locked.jpg";
	}
	if (garyDrayton == true) {
		document.getElementById("garyDraytonLock").src = "unlocked.jpg";
		document.getElementById("garyDrayton").style.color = "green";
		document.getElementById("garyDraytonDiv").onmouseover = function() {
			document.getElementById("garyDrayton").style.textShadow = "3px 2px 3px green";
		}
		document.getElementById("garyDraytonDiv").onmouseout = function() {
			document.getElementById("garyDrayton").style.textShadow = "none";
		}
	} else {
		document.getElementById("garyDraytonLock").src = "locked.jpg";
	}
	if (archaeologist == true) {
		document.getElementById("archaeologistLock").src = "unlocked.jpg";
		document.getElementById("archaeologist").style.color = "green";
		document.getElementById("archaeologistDiv").onmouseover = function() {
			document.getElementById("archaeologist").style.textShadow = "3px 2px 3px green";
		}
		document.getElementById("archaeologistDiv").onmouseout = function() {
			document.getElementById("archaeologist").style.textShadow = "none";
		}
	} else {
		document.getElementById("archaeologistLock").src = "locked.jpg";
	}
	if (indianaJones == true) {
		document.getElementById("indianaJonesLock").src = "unlocked.jpg";
		document.getElementById("indianaJones").style.color = "green";
		document.getElementById("indianaJonesDiv").onmouseover = function() {
			document.getElementById("indianaJones").style.textShadow = "3px 2px 3px green";
		}
		document.getElementById("indianaJonesDiv").onmouseout = function() {
			document.getElementById("indianaJones").style.textShadow = "none";
		}
	} else {
		document.getElementById("indianaJonesLock").src = "locked.jpg";
	}
	if (deceased == true) {
		document.getElementById("deceasedLock").src = "unlocked.jpg";
		document.getElementById("deceased").style.color = "green";
		document.getElementById("deceasedDiv").onmouseover = function() {
			document.getElementById("deceased").style.textShadow = "3px 2px 3px green";
		}
		document.getElementById("deceasedDiv").onmouseout = function() {
			document.getElementById("deceased").style.textShadow = "none";
		}
	} else {
		document.getElementById("deceasedLock").src = "locked.jpg";
	}
	if (unluckyRoller == true) {
		document.getElementById("unluckyRollerLock").src = "unlocked.jpg";
		document.getElementById("unluckyRoller").style.color = "green";
		document.getElementById("unluckyRollerDiv").onmouseover = function() {
			document.getElementById("unluckyRoller").style.textShadow = "3px 2px 3px green";
		}
		document.getElementById("unluckyRollerDiv").onmouseout = function() {
			document.getElementById("unluckyRoller").style.textShadow = "none";
		}
	} else {
		document.getElementById("unluckyRollerLock").src = "locked.jpg";
	}
	if (riskTaker == true) {
		document.getElementById("riskTakerLock").src = "unlocked.jpg";
		document.getElementById("riskTaker").style.color = "green";
		document.getElementById("riskTakerDiv").onmouseover = function() {
			document.getElementById("riskTaker").style.textShadow = "3px 2px 3px green";
		}
		document.getElementById("riskTakerDiv").onmouseout = function() {
			document.getElementById("riskTaker").style.textShadow = "none";
		}
	} else {
		document.getElementById("riskTakerLock").src = "locked.jpg";
	}
	if (graveyardRegular == true) {
		document.getElementById("graveyardRegularLock").src = "unlocked.jpg";
		document.getElementById("graveyardRegular").style.color = "green";
		document.getElementById("graveyardRegularDiv").onmouseover = function() {
			document.getElementById("graveyardRegular").style.textShadow = "3px 2px 3px green";
		}
		document.getElementById("graveyardRegularDiv").onmouseout = function() {
			document.getElementById("graveyardRegular").style.textShadow = "none";
		}
	} else {
		document.getElementById("graveyardRegularLock").src = "locked.jpg";
	}
	if (learner == true) {
		document.getElementById("learnerLock").src = "unlocked.jpg";
		document.getElementById("learner").style.color = "green";
		document.getElementById("learnerDiv").onmouseover = function() {
			document.getElementById("learner").style.textShadow = "3px 2px 3px green";
		}
		document.getElementById("learnerDiv").onmouseout = function() {
			document.getElementById("learner").style.textShadow = "none";
		}
	} else {
		document.getElementById("learnerLock").src = "locked.jpg";
	}
	if (experiencedExplorer == true) {
		document.getElementById("experiencedExplorerLock").src = "unlocked.jpg";
		document.getElementById("experiencedExplorer").style.color = "green";
		document.getElementById("experiencedExplorerDiv").onmouseover = function() {
			document.getElementById("experiencedExplorer").style.textShadow = "3px 2px 3px green";
		}
		document.getElementById("experiencedExplorerDiv").onmouseout = function() {
			document.getElementById("experiencedExplorer").style.textShadow = "none";
		}
	} else {
		document.getElementById("experiencedExplorerLock").src = "locked.jpg";
	}
	if (master == true) {
		document.getElementById("masterLock").src = "unlocked.jpg";
		document.getElementById("master").style.color = "green";
		document.getElementById("masterDiv").onmouseover = function() {
			document.getElementById("master").style.textShadow = "3px 2px 3px green";
		}
		document.getElementById("masterDiv").onmouseout = function() {
			document.getElementById("master").style.textShadow = "none";
		}
	} else {
		document.getElementById("masterLock").src = "locked.jpg";
	}
	if (ancientOne == true) {
		document.getElementById("ancientOneLock").src = "unlocked.jpg";
		document.getElementById("ancientOne").style.color = "green";
		document.getElementById("ancientOneDiv").onmouseover = function() {
			document.getElementById("ancientOne").style.textShadow = "3px 2px 3px green";
		}
		document.getElementById("ancientOneDiv").onmouseout = function() {
			document.getElementById("ancientOne").style.textShadow = "none";
		}
	} else {
		document.getElementById("ancientOneLock").src = "locked.jpg";
	}
	if (businessPerson == true) {
		document.getElementById("businessPersonLock").src = "unlocked.jpg";
		document.getElementById("businessPerson").style.color = "green";
		document.getElementById("businessPersonDiv").onmouseover = function() {
			document.getElementById("businessPerson").style.textShadow = "3px 2px 3px green";
		}
		document.getElementById("businessPersonDiv").onmouseout = function() {
			document.getElementById("businessPerson").style.textShadow = "none";
		}
	} else {
		document.getElementById("businessPersonLock").src = "locked.jpg";
	}
	if (dayTrader == true) {
		document.getElementById("dayTraderLock").src = "unlocked.jpg";
		document.getElementById("dayTrader").style.color = "green";
		document.getElementById("dayTraderDiv").onmouseover = function() {
			document.getElementById("dayTrader").style.textShadow = "3px 2px 3px green";
		}
		document.getElementById("dayTraderDiv").onmouseout = function() {
			document.getElementById("dayTrader").style.textShadow = "none";
		}
	} else {
		document.getElementById("dayTraderLock").src = "locked.jpg";
	}
	if (cardinalInvestor == true) {
		document.getElementById("cardinalInvestorLock").src = "unlocked.jpg";
		document.getElementById("cardinalInvestor").style.color = "green";
		document.getElementById("cardinalInvestorDiv").onmouseover = function() {
			document.getElementById("cardinalInvestor").style.textShadow = "3px 2px 3px green";
		}
		document.getElementById("cardinalInvestorDiv").onmouseout = function() {
			document.getElementById("cardinalInvestor").style.textShadow = "none";
		}
	} else {
		document.getElementById("cardinalInvestorLock").src = "locked.jpg";
	}
	if (wolfOfWallStreet == true) {
		document.getElementById("wolfOfWallStreetLock").src = "unlocked.jpg";
		document.getElementById("wolfOfWallStreet").style.color = "green";
		document.getElementById("wolfOfWallStreetDiv").onmouseover = function() {
			document.getElementById("wolfOfWallStreet").style.textShadow = "3px 2px 3px green";
		}
		document.getElementById("wolfOfWallStreetDiv").onmouseout = function() {
			document.getElementById("wolfOfWallStreet").style.textShadow = "none";
		}
	} else {
		document.getElementById("wolfOfWallStreetLock").src = "locked.jpg";
	}
	if (confused == true) {
		document.getElementById("confusedLock").src = "unlocked.jpg";
		document.getElementById("confused").style.color = "green";
		document.getElementById("confusedDiv").onmouseover = function() {
			document.getElementById("confused").style.textShadow = "3px 2px 3px green";
		}
		document.getElementById("confusedDiv").onmouseout = function() {
			document.getElementById("confused").style.textShadow = "none";
		}
	} else {
		document.getElementById("confusedLock").src = "locked.jpg";
	}
	if (hacker == true) {
		document.getElementById("hackerLock").src = "unlocked.jpg";
		document.getElementById("hacker").style.color = "green";
		document.getElementById("hackerDiv").onmouseover = function() {
			document.getElementById("hacker").style.textShadow = "3px 2px 3px green";
		}
		document.getElementById("hackerDiv").onmouseout = function() {
			document.getElementById("hacker").style.textShadow = "none";
		}
	} else {
		document.getElementById("hackerLock").src = "locked.jpg";
	}
	if (customized == true) {
		document.getElementById("customizedLock").src = "unlocked.jpg";
		document.getElementById("customized").style.color = "green";
		document.getElementById("customizedDiv").onmouseover = function() {
			document.getElementById("customized").style.textShadow = "3px 2px 3px green";
		}
		document.getElementById("customizedDiv").onmouseout = function() {
			document.getElementById("customized").style.textShadow = "none";
		}
	} else {
		document.getElementById("customizedLock").src = "locked.jpg";
	}
	if (theCreator == true) {
		document.getElementById("theCreatorLock").src = "unlocked.jpg";
		document.getElementById("theCreator").style.color = "green";
		document.getElementById("theCreatorDiv").onmouseover = function() {
			document.getElementById("theCreator").style.textShadow = "3px 2px 3px green";
		}
		document.getElementById("theCreatorDiv").onmouseout = function() {
			document.getElementById("theCreator").style.textShadow = "none";
		}
	} else {
		document.getElementById("theCreatorLock").src = "locked.jpg";
	}
	console.log(JSON.parse(localStorage.getItem(user)));
}

function newPic() {
	document.getElementById("hostAvatarPic").style.bottom = "0px";
	document.getElementById("hostAvatarPic").style.width = "100%";
	document.getElementById("hostAvatarPic").style.height = "100%";
	document.getElementById("hostAvatarPic").style.left = "0px";
	if (document.getElementById("hostAvatarPic").src.includess("elaphant.jpg")) {
		document.getElementById("hostAvatarPic").style.bottom = "2px";
		document.getElementById("hostAvatarPic").style.width = "200%";
		document.getElementById("hostAvatarPic").style.left = "-40px";
		document.getElementById("hostAvatarPic").style.height = "120%";
	} else if (document.getElementById("hostAvatarPic").src.includess("blankAvatar.jpg")) {
		document.getElementById("hostAvatarPic").style.bottom = "8px";
	} else if (document.getElementById("hostAvatarPic").src.includess("steve")) {
		document.getElementById("hostAvatarPic").style.left = "-18px";
		document.getElementById("hostAvatarPic").style.bottom = "15px";
		document.getElementById("hostAvatarPic").style.width = "140%";
		document.getElementById("hostAvatarPic").style.height = "130%";
	} else if (document.getElementById("hostAvatarPic").src.includess("nixon")) {
		document.getElementById("hostAvatarPic").style.bottom = "13px";
		document.getElementById("hostAvatarPic").style.width = "110%";
		document.getElementById("hostAvatarPic").style.height = "130%";
		document.getElementById("hostAvatarPic").style.left = "-3px";
	} else if (document.getElementById("hostAvatarPic").src.includess("spiderman.jpg")) {
		document.getElementById("hostAvatarPic").style.width = "130%";
	} else if (document.getElementById("hostAvatarPic").src.includess("loki")) {
		document.getElementById("hostAvatarPic").style.width = "150%";
		document.getElementById("hostAvatarPic").style.height = "120%";
		document.getElementById("hostAvatarPic").style.left = "-20px";
	} else if (document.getElementById("hostAvatarPic").src.includess("riskPieces")) {
		document.getElementById("hostAvatarPic").style.bottom = "28px";
		document.getElementById("hostAvatarPic").style.width = "220%";
		document.getElementById("hostAvatarPic").style.height = "140%";
		document.getElementById("hostAvatarPic").style.left = "-55px";
	} else if (document.getElementById("hostAvatarPic").src.includess("pikachu")) {
		document.getElementById("hostAvatarPic").style.bottom = "3px";
		document.getElementById("hostAvatarPic").style.left = "3px";
	} else if (document.getElementById("hostAvatarPic").src.includess("yoda")) {
		document.getElementById("hostAvatarPic").style.width = "150%";
		document.getElementById("hostAvatarPic").style.left = "-15px";
	}
}

function unlock(choice) {
	document.getElementById("propicChoice" + choice).style.backgroundColor = "white";
	document.getElementById("propicChoice" + choice).style.opacity = 0.7;
	document.getElementById("picHolder" + choice).style.opacity = 0.8;
	document.getElementById("propicChoice" + choice).onmouseover = function() {
		document.getElementById("propicChoice" + choice).style.opacity = 1.0;
		document.getElementById("picHolder" + choice).style.opacity = 1.0;
	};
	document.getElementById("propicChoice" + choice).onmouseout = function() {
		document.getElementById("propicChoice" + choice).style.opactiy = 0.7;
		document.getElementById("picHolder" + choice).style.opacity = 0.8;
	};
	if (choice == "Two") {
		var uses;
		uses = localStorage.getItem(user);
		uses = JSON.parse(uses);
		uses.elaphant = true;
		localStorage.setItem(user, JSON.stringify(uses));
		elaphant = true;
		document.getElementById("unlockTwo").style.display = "none";
	} else if (choice == "Three") {
		var uses;
		uses = localStorage.getItem(user);
		uses = JSON.parse(uses);
		uses.steve = true;
		localStorage.setItem(user, JSON.stringify(uses));
		steve = true;
		document.getElementById("unlockThree").style.display = "none";
	} else if (choice == "Four") {
		var uses;
		uses = localStorage.getItem(user);
		uses = JSON.parse(uses);
		uses.nixon = true;
		localStorage.setItem(user, JSON.stringify(uses));
		nixon = true;
		document.getElementById("unlockFour").style.display = "none";
	} else if (choice == "Five") {
		var uses;
		uses = localStorage.getItem(user);
		uses = JSON.parse(uses);
		uses.spiderman = true;
		localStorage.setItem(user, JSON.stringify(uses));
		spiderman = true;
		document.getElementById("unlockFive").style.display = "none";
	} else if (choice == "Six") {
		var uses;
		uses = localStorage.getItem(user);
		uses = JSON.parse(uses);
		uses.loki = true;
		localStorage.setItem(user, JSON.stringify(uses));
		loki = true;
		document.getElementById("unlockSix").style.display = "none";
	} else if (choice == "Seven") {
		var uses;
		uses = localStorage.getItem(user);
		uses = JSON.parse(uses);
		uses.mario = true;
		localStorage.setItem(user, JSON.stringify(uses));
		console.log(uses.mario);
		mario = true;
		document.getElementById("unlockSeven").style.display = "none";
		document.getElementById("instaHold").style.display = "none";
	} else if (choice == "Eight") {
		var uses;
		uses = localStorage.getItem(user);
		uses = JSON.parse(uses);
		uses.riskPieces = true;
		localStorage.setItem(user, JSON.stringify(uses));
		risk = true;
		document.getElementById("unlockEight").style.display = "none";
	} else if (choice == "Nine") {
		var uses;
		uses = localStorage.getItem(user);
		uses = JSON.parse(uses);
		uses.linkk = true;
		localStorage.setItem(user, JSON.stringify(uses));
		linkk = true;
		document.getElementById("unlockNine").style.display = "none";
	} else if (choice == "Ten") {
		var uses;
		uses = localStorage.getItem(user);
		uses = JSON.parse(uses);
		uses.pikachu = true;
		localStorage.setItem(user, JSON.stringify(uses));
		pika = true;
		document.getElementById("unlockTen").style.display = "none";
	} else if (choice == "Eleven") {
		var uses;
		uses = localStorage.getItem(user);
		uses = JSON.parse(uses);
		uses.yoda = true;
		localStorage.setItem(user, JSON.stringify(uses));
		yoda = true;
		document.getElementById("unlockEleven").style.display = "none";
	} else if (choice == "Twelve") {
		var uses;
		uses = localStorage.getItem(user);
		uses = JSON.parse(uses);
		uses.thanos = true;
		localStorage.setItem(user, JSON.stringify(uses));
		thanos = true;
		document.getElementById("unlockTwelve").style.display = "none";
	}
}

function clickOne() {
	document.getElementById("hostAvatarPic").src = "blankAvatar.jpg";
	var uses;
	uses = localStorage.getItem(user);
	uses = JSON.parse(uses);
	uses.propic = "blankAvatar.jpg";
	console.log(uses);
	localStorage.setItem(user, JSON.stringify(uses));
	console.log(localStorage.getItem(user));
	newPic();
}

function clickTwo() {
	if (elaphant == true) {
		document.getElementById("hostAvatarPic").src = "elaphant.jpg";
		var uses;
		uses = localStorage.getItem(user);
		uses = JSON.parse(uses);
		uses.propic = "elaphant.jpg";
		console.log(uses);
		localStorage.setItem(user, JSON.stringify(uses));
		console.log(localStorage.getItem(user));
		newPic();
	}
}

function clickThree() {
	if (steve == true) {
		document.getElementById("hostAvatarPic").src = "steve.jpg";
		var uses;
		uses = localStorage.getItem(user);
		uses = JSON.parse(uses);
		uses.propic = "steve.jpg";
		console.log(uses);
		localStorage.setItem(user, JSON.stringify(uses));
		console.log(localStorage.getItem(user));
		newPic();
	}
}

function clickFour() {
	if (nixon == true) {
		document.getElementById("hostAvatarPic").src = "nixon.jpg";
		var uses;
		uses = localStorage.getItem(user);
		uses = JSON.parse(uses);
		uses.propic = "nixon.jpg";
		console.log(uses);
		localStorage.setItem(user, JSON.stringify(uses));
		console.log(localStorage.getItem(user));
		newPic();
	}
}

function clickFive() {
	if (spiderman == true) {
		document.getElementById("hostAvatarPic").src = "spiderman.jpg";
		var uses;
		uses = localStorage.getItem(user);
		uses = JSON.parse(uses);
		uses.propic = "spiderman.jpg";
		console.log(uses);
		localStorage.setItem(user, JSON.stringify(uses));
		console.log(localStorage.getItem(user));
		newPic();
	}
}

function clickSix() {
	if (loki == true) {
		document.getElementById("hostAvatarPic").src = "loki.jpg";
		var uses;
		uses = localStorage.getItem(user);
		uses = JSON.parse(uses);
		uses.propic = "loki.jpg";
		console.log(uses);
		localStorage.setItem(user, JSON.stringify(uses));
		console.log(localStorage.getItem(user));
		newPic();
	}
}

function clickSeven() {
	if (mario == true) {
		document.getElementById("hostAvatarPic").src = "mario.jpg";
		var uses;
		uses = localStorage.getItem(user);
		uses = JSON.parse(uses);
		uses.propic = "mario.jpg";
		console.log(uses);
		localStorage.setItem(user, JSON.stringify(uses));
		console.log(localStorage.getItem(user));
		newPic();
	}
}

function clickEight() {
	if (risk == true) {
		document.getElementById("hostAvatarPic").src = "riskPieces.jpg";
		var uses;
		uses = localStorage.getItem(user);
		uses = JSON.parse(uses);
		uses.propic = "riskPieces.jpg";
		console.log(uses);
		localStorage.setItem(user, JSON.stringify(uses));
		console.log(localStorage.getItem(user));
		newPic();
	}
}

function clickNine() {
	if (linkk == true) {
		document.getElementById("hostAvatarPic").src = "link.jpg";
		var uses;
		uses = localStorage.getItem(user);
		uses = JSON.parse(uses);
		uses.propic = "link.jpg";
		console.log(uses);
		localStorage.setItem(user, JSON.stringify(uses));
		console.log(localStorage.getItem(user));
		newPic();
	}
}

function clickTen() {
	if (pika == true) {
		document.getElementById("hostAvatarPic").src = "pikachu.jpg";
		var uses;
		uses = localStorage.getItem(user);
		uses = JSON.parse(uses);
		uses.propic = "pikachu.jpg";
		console.log(uses);
		localStorage.setItem(user, JSON.stringify(uses));
		console.log(localStorage.getItem(user));
		newPic();
	}
	pikaClicks += 1;
	if (pikaClicks > 14) {
		unlock("Ten");
		if (elaphant == true && steve == true && nixon == true && spiderman == true && loki == true && mario == true && linkk == true && pika == true && yoda == true) {
			customized = true;
			document.getElementById("customizedLock").src = "unlocked.jpg";
			document.getElementById("customized").style.color = "green";
			document.getElementById("customizedDiv").onmouseover = function() {
				document.getElementById("customized").style.textShadow = "3px 2px 3px green";
			}
			document.getElementById("customizedDiv").onmouseout = function() {
				document.getElementById("customized").style.textShadow = "none";
			}
		}
	}
}

function clickEleven() {
	if (yoda == true) {
		document.getElementById("hostAvatarPic").src = "yoda.jpg";
		var uses;
		uses = localStorage.getItem(user);
		uses = JSON.parse(uses);
		uses.propic = "yoda.jpg";
		console.log(uses);
		localStorage.setItem(user, JSON.stringify(uses));
		console.log(localStorage.getItem(user));
		newPic();
	}
}

function clickTwelve() {
	if (thanos == true) {
		document.getElementById("hostAvatarPic").src = "thanos.jpg";
		var uses;
		uses = localStorage.getItem(user);
		uses = JSON.parse(uses);
		uses.propic = "thanos.jpg";
		console.log(uses);
		localStorage.setItem(user, JSON.stringify(uses));
		console.log(localStorage.getItem(user));
		newPic();
	}
}

function moneyBagsClick() {
	if (moneyBags == true) {
		document.getElementById("hostTitle").innerHTML = "Money Bags";
		var uses;
		uses = localStorage.getItem(user);
		uses = JSON.parse(uses);
		uses.title = "Money Bags";
		localStorage.setItem(user, JSON.stringify(uses));
	}
}

function princeClick() {
	if (prince == true) {
		document.getElementById("hostTitle").innerHTML = "Prince";
		var uses;
		uses = localStorage.getItem(user);
		uses = JSON.parse(uses);
		uses.title = "Prince";
		localStorage.setItem(user, JSON.stringify(uses));
	}
}

function billionareClick() {
	if (billionare == true) {
		document.getElementById("hostTitle").innerHTML = "Billionare";
		var uses;
		uses = localStorage.getItem(user);
		uses = JSON.parse(uses);
		uses.title = "Billionare";
		localStorage.setItem(user, JSON.stringify(uses));
	}
}

function jeffBezosClick() {
	if (jeffBezos == true) {
		document.getElementById("hostTitle").innerHTML = "Jeff Bezos";
		var uses;
		uses = localStorage.getItem(user);
		uses = JSON.parse(uses);
		uses.title = "Jeff Bezos";
		localStorage.setItem(user, JSON.stringify(uses));
		console.log(uses);
	}
}

function collectorClick() {
	if (collector == true) {
		document.getElementById("hostTitle").innerHTML = "Collector";
		var uses;
		uses = localStorage.getItem(user);
		uses = JSON.parse(uses);
		uses.title = "Collector";
		localStorage.setItem(user, JSON.stringify(uses));
	}
}

function garyDraytonClick() {
	if (garyDrayton == true) {
		document.getElementById("hostTitle").innerHTML = "Gary Drayton";
		var uses;
		uses = localStorage.getItem(user);
		uses = JSON.parse(uses);
		uses.title = "Gary Drayton";
		localStorage.setItem(user, JSON.stringify(uses));
	}
}

function archaeologistClick() {
	if (archaeologist == true) {
		document.getElementById("hostTitle").innerHTML = "Archaeologist";
		var uses;
		uses = localStorage.getItem(user);
		uses = JSON.parse(uses);
		uses.title = "Archaeologist";
		localStorage.setItem(user, JSON.stringify(uses));
	}
}

function indianaJonesClick() {
	if (indianaJones == true) {
		document.getElementById("hostTitle").innerHTML = "Indiana Jones";
		var uses;
		uses = localStorage.getItem(user);
		uses = JSON.parse(uses);
		uses.title = "Indiana Jones";
		localStorage.setItem(user, JSON.stringify(uses));
	}
}

function deceasedClick() {
	if (deceased == true) {
		document.getElementById("hostTitle").innerHTML = "Deceased";
		var uses;
		uses = localStorage.getItem(user);
		uses = JSON.parse(uses);
		uses.title = "Deceased";
		localStorage.setItem(user, JSON.stringify(uses));
	}
}

function unluckyRollerClick() {
	if (unluckyRoller == true) {
		document.getElementById("hostTitle").innerHTML = "Unlucky Roller";
		var uses;
		uses = localStorage.getItem(user);
		uses = JSON.parse(uses);
		uses.title = "Unlucky Roller";
		localStorage.setItem(user, JSON.stringify(uses));
	}
}

function riskTakerClick() {
	if (riskTaker == true) {
		document.getElementById("hostTitle").innerHTML = "Risk Taker";
		var uses;
		uses = localStorage.getItem(user);
		uses = JSON.parse(uses);
		uses.title = "Risk Taker";
		localStorage.setItem(user, JSON.stringify(uses));
	}
}

function graveyardRegularClick() {
	if (graveyardRegular == true) {
		document.getElementById("hostTitle").innerHTML = "Graveyard Regular";
		var uses;
		uses = localStorage.getItem(user);
		uses = JSON.parse(uses);
		uses.title = "Graveyard Regular";
		localStorage.setItem(user, JSON.stringify(uses));
	}
}

function learnerClick() {
	if (learner == true) {
		document.getElementById("hostTitle").innerHTML = "Learner";
		var uses;
		uses = localStorage.getItem(user);
		uses = JSON.parse(uses);
		uses.title = "Learner";
		localStorage.setItem(user, JSON.stringify(uses));
	}
}

function experiencedExplorerClick() {
	if (experiencedExplorer == true) {
		document.getElementById("hostTitle").innerHTML = "Experienced Explorer";
		var uses;
		uses = localStorage.getItem(user);
		uses = JSON.parse(uses);
		uses.title = "Experienced Explorer";
		localStorage.setItem(user, JSON.stringify(uses));
	}
}

function masterClick() {
	if (master == true) {
		document.getElementById("hostTitle").innerHTML = "Master";
		var uses;
		uses = localStorage.getItem(user);
		uses = JSON.parse(uses);
		uses.title = "Master";
		localStorage.setItem(user, JSON.stringify(uses));
	}
}

function ancientOneClick() {
	if (ancientOne == true) {
		document.getElementById("hostTitle").innerHTML = "Ancient One";
		var uses;
		uses = localStorage.getItem(user);
		uses = JSON.parse(uses);
		uses.title = "Ancient One";
		localStorage.setItem(user, JSON.stringify(uses));
	}
}

function businessPersonClick() {
	if (businessPerson == true) {
		document.getElementById("hostTitle").innerHTML = "Business Person";
		var uses;
		uses = localStorage.getItem(user);
		uses = JSON.parse(uses);
		uses.title = "Business Person";
		localStorage.setItem(user, JSON.stringify(uses));
	}
}

function dayTraderClick() {
	if (dayTrader == true) {
		document.getElementById("hostTitle").innerHTML = "Day Trader";
		var uses;
		uses = localStorage.getItem(user);
		uses = JSON.parse(uses);
		uses.title = "Day Trader";
		localStorage.setItem(user, JSON.stringify(uses));
	}
}

function cardinalInvestorClick() {
	if (cardinalInvestor == true) {
		document.getElementById("hostTitle").innerHTML = "Cardinal Investor";
		var uses;
		uses = localStorage.getItem(user);
		uses = JSON.parse(uses);
		uses.title = "Cardinal Investor";
		localStorage.setItem(user, JSON.stringify(uses));
	}
}

function wolfOfWallStreetClick() {
	if (wolfOfWallStreet == true) {
		document.getElementById("hostTitle").innerHTML = "Wolf of Wall Street";
		var uses;
		uses = localStorage.getItem(user);
		uses = JSON.parse(uses);
		uses.title = "Wolf of Wall Street";
		localStorage.setItem(user, JSON.stringify(uses));
	}
}

function confusedClick() {
	if (confused == true) {
		document.getElementById("hostTitle").innerHTML = "Confused";
		var uses;
		uses = localStorage.getItem(user);
		uses = JSON.parse(uses);
		uses.title = "Confused";
		localStorage.setItem(user, JSON.stringify(uses));
	}
}

function hackerClick() {
	if (hacker == true) {
		document.getElementById("hostTitle").innerHTML = "Hacker";
		var uses;
		uses = localStorage.getItem(user);
		uses = JSON.parse(uses);
		uses.title = "Hacker";
		localStorage.setItem(user, JSON.stringify(uses));
	}
}

function customizedClick() {
	if (customized == true) {
		document.getElementById("hostTitle").innerHTML = "Customized";
		var uses;
		uses = localStorage.getItem(user);
		uses = JSON.parse(uses);
		uses.title = "Customized";
		localStorage.setItem(user, JSON.stringify(uses));
	}
}

function theCreatorClick() {
	if (theCreator == true) {
		document.getElementById("hostTitle").innerHTML = "The Creator";
		var uses;
		uses = localStorage.getItem(user);
		uses = JSON.parse(uses);
		uses.title = "The Creator";
		localStorage.setItem(user, JSON.stringify(uses));
	}
}