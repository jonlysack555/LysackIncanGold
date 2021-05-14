const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);
const page_type = urlParams.get('id');

if (page_type != null) {
	localStorage.setItem("pubnubUser", page_type);
}

function boldRisk() {
	document.getElementById("title").style.opacity = "0";
	document.getElementById("riskTitle").style.opacity = "1";
	document.getElementById("incanGoldTitle").style.opacity = "0";
}

function boldIncanGold() {
	document.getElementById("title").style.opacity = "0";
	document.getElementById("riskTitle").style.opacity = "0";
	document.getElementById("incanGoldTitle").style.opacity = "1";
}

function clearBold() {
	document.getElementById("title").style.opacity = "1";
	document.getElementById("riskTitle").style.opacity = "0";
	document.getElementById("incanGoldTitle").style.opacity = "0";
}

function openRisk() {
	window.open("startPage.html","_self");
}

function openIncanGold() {
	window.open("IncanGoldHome.html","_self");
}
