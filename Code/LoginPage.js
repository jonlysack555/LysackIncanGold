var uuid;
var pubnub;
function PlayerUser(id, name, pass){
  this.id = id;
  this.name = name;
  this.custom = {
    pass
  }
}

window.onload = function(){
  function login(){
    console.log("just inside login");
    var user = document.getElementById("userLogin").value;
    var pass = document.getElementById("passLogin").value;
    createPubnub(user);
	console.log("yayaya");
    pubnub.getUser({
      userId:user,
      include: {
        customFields: true
      }
      },
      function(status, response) {
        console.log(response);
        console.log("getUser");
        if (response.data.custom.pass == pass) {
			console.log("hiyahiya");
          openSelectionPage(response.data.id, response.data.name, response.data.custom.pass);
        }
      })
      .catch(err => {
        if (localStorage.getItem(user) != null && JSON.parse(localStorage.getItem(user)).pass == pass) {
          var lStorUsr = JSON.parse(localStorage.getItem(pass));
          pubNub.createUser({id:lStorUsr.user, name:lStorUsr.name, custom:{pass:lStorUsr.pass}});
		  console.log("heyyyy");
          openSelectionPage(lStorUsr.user, lStorUsr.name, lStorUsr.pass);
        } else {
          alert("Invalid login info")
        }
      });
    document.getElementById("submitLogin").removeEventListener("click", login);
    document.getElementById("submitCreate").removeEventListener("click", create);
  }

  function create(){
    console.log("just inside create");
    var user = document.getElementById("userCreate").value;
    var pass = document.getElementById("passCreate").value;
    var name = document.getElementById("nameCreate").value;
    createPubnub(user);
    pubnub.createUser({
      id:user,
      name: name,
      custom: {pass: pass},
      include: {
        customFields: true
      }
      },
      function(status, response){
        console.log(response);
        console.log("createUser");
        openSelectionPage(response.data.id, response.data.name, response.data.custom.pass);
      }
    ).catch(error => alert("error, username may already exist"))
    document.getElementById("submitLogin").removeEventListener("click", login);
    document.getElementById("submitCreate").removeEventListener("click", create);
  }

	console.log("hahahah");
  document.getElementById("submitLogin").addEventListener("click", login);
  document.getElementById("submitCreate").addEventListener("click", create);

}

function createPubnub(user){
  uuid = user;
  console.log("one");
  pubnub = new PubNub({
    publishKey: "pub-c-365259b8-ed0b-4549-9805-9c92e68ca219",
    subscribeKey: "sub-c-c8abbac2-8416-11ea-9e86-0adc820ce981",
    uuid: uuid
  });
  console.log("two");

  pubnub.subscribe({
    channels: ['users'],
    withPresence: true
  });
  console.log("three");
}

function openSelectionPage(user, name, pass){
  localStorage.setItem(user, JSON.stringify({name:name,user:user,pass:pass}));
  let newUser = new PlayerUser(user, name, pass);
  localStorage.setItem("pubnubUser", JSON.stringify(newUser));
  console.log("teeeeeeeeeeeeeeeeeast");
  window.open("ChooseGame.html","_self");
}
