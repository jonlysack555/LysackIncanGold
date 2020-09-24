var users = JSON.parse(localStorage.getItem("thePlayersIn"));
var user = JSON.parse(localStorage.getItem("chatUser"));
var userr = JSON.parse(window.localStorage.getItem('pubnubUser')).id;
userr = userr + "i";
var name = JSON.parse(window.localStorage.getItem(userr)).name;
var stamp = localStorage.getItem("gameStamp");
stamp = stamp;

const pubnub = new PubNub({
  publishKey: "pub-c-32276b33-4bb1-4f52-b507-84269bbd2b0b",
  subscribeKey: "sub-c-67c10818-beed-11ea-a57f-4e41fc185ce6",
  uuid: userr
});

var hostInfo = JSON.parse(window.localStorage.getItem('hostInfo'));
var yayeet = hostInfo[0] + "group" + stamp;

pubnub.subscribe({
  channels: [hostInfo[0], yayeet],
  withPresence: true
});

pubnub.addListener({
  message: function(event) {
	  console.log("received");
	  if (event.message.tail == true) {
		var sender = event.message.sender;
		var message = event.message.content;
		console.log("one");
		addMessage(sender, message);
		console.log(event.message.content);
	  }
  }
});

function addMessage(sender, message){
	console.log("two");
  var outerDiv = document.createElement("div");
  var innerDiv = document.createElement("div");
  var msg = document.createElement("p");
  if (sender == userr){
    outerDiv.className = "rightOuterDiv";
    innerDiv.className = "rightTextName";
    msg.className = "rightText";
	innerDiv.innerHTML = name;
  } else {
    outerDiv.className = "leftOuterDiv";
    innerDiv.className = "leftTextName";
    msg.className = "leftText";
  }
  users.forEach( u => {
    if(u[0] == sender){
      innerDiv.innerHTML = u[1];
    }
  });
  console.log("three");
  msg.innerHTML = message;
  innerDiv.appendChild(msg);
  outerDiv.appendChild(innerDiv);
  document.getElementById("chatPage").appendChild(outerDiv);
  var elem = document.getElementById('chatPage');
  elem.scrollTop = elem.scrollHeight;
  console.log("four");
}

function pastMessages(){
  pubnub.fetchMessages({
    channels: [yayeet],
    count: 100,
  }, function(status, response){
    if(response.channels[Object.keys(response.channels)[0]] != null){
      response.channels[Object.keys(response.channels)[0]].forEach(past => {
        var sender = past.message.sender;
        var message = past.message.content;
        addMessage(sender, message);
      });
    }
  });
}

function publishPubnub(message){
	console.log("one half");
  pubnub.publish({
    channel: yayeet,
    message: {"sender": userr, "content": message, tail: true}
  }, function(status, response) {
	console.log(status);
    });
}

setTimeout(function(){
  pastMessages();
  document.getElementById("sendChat").addEventListener("click", function(){
	  console.log("zero");
    publishPubnub(document.getElementById("chatMessage").value);
    document.getElementById("chatMessage").value = null;
  });

  document.getElementById("backButton").addEventListener("click", function(){
    window.parent.postMessage(["close", null], "*");
  });
  var height = document.getElementsByTagName("html")[0].offsetHeight;
  window.parent.postMessage(["setHeight", height], "*");
}, 500);