var player;
var user;

window.onload = function(){
	user = JSON.parse(localStorage.getItem('pubnubUser')).id;
	user = user + "i";
	player = JSON.parse(localStorage.getItem(user));
	player.instructions = true;
	localStorage.setItem(user, JSON.stringify(player));
}