var user;

window.onload = function(){
	user = JSON.parse(window.localStorage.getItem('pubnubUser')).id;
	user = user + "i";
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
	document.getElementById("totalGem").innerHTML = "Total Gems: " + JSON.parse(localStorage.getItem(user)).totalGem + " gems earned";
	document.getElementById("totalArtifact").innerHTML = "Total Artifacts: " + JSON.parse(localStorage.getItem(user)).totalArtifact + " artifacts stolen";
	document.getElementById("totalDeath").innerHTML = "Total Deaths: died " + JSON.parse(localStorage.getItem(user)).totalDeath + " times";
	document.getElementById("totalGame").innerHTML = "Total Games: " + JSON.parse(localStorage.getItem(user)).totalGame + " games played";
	document.getElementById("totalDeal").innerHTML = "Total Deals: " + JSON.parse(localStorage.getItem(user)).totalDeal + " deals cut";
}