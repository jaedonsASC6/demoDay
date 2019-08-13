//~~~~~~~~~~~~~~~~~~scaledrone
let userName = randomName();
let nameColor = randomColor();
const droneRoom = "observable-room";
let droneChannel = testID;
let drone = new Scaledrone(droneChannel, {
	data: {
		name: userName,
		color: nameColor,
	},
});
let members = [];
let room;
drone.on("open", error => init(error));
function init(error)
{
    if(error)
    {
        console.log(error);
    }
    console.log("successfully connecteed to scaledrone");

    room = drone.subscribe(droneRoom, {
		historyCount: 20
	});

    room.on("open", error => {
        if(error)
        {
            return console.log(error);
        }
        console.log("successfully joined room");
    });
	room.on('history_message', ({data}) => {
		// console.log(data);
		updateHistory(data);
	});
    room.on("members", m => {   //event for checking number of members
        members = m;
        updateMembers();
    });
    room.on("member_join", member => {  //event for members joining notif
        members.push(member);
		updateMembers();
    });
    room.on("member_leave", ({id}) => {
        const index = members.findIndex(member => member.id === id);
        members.splice(index, 1);
        updateMembers();
    });
    room.on("data", (text, member) => {
        if(member)
        {
            updateMessage(text, member);
        }
        else
        {
            //message is from server
        }
    });
}
drone.on('close', event => {
    console.log('Connection was closed', event);
});  
drone.on('error', error => {
    console.error(error);
});


//~~~~~~~~~~~~~~~~~~Event listeners
const chatbox = document.getElementById("chat_box");
const chatmembers = document.getElementById("chat_members");
const chatmessages = document.getElementById("chat_messages");
const dropdown_button = document.getElementById("dropdown_button");
dropdown_button.addEventListener("click", dropdownToggle);
const messageInput = document.getElementById("message_input");
const snedButton = document.getElementById("send");
snedButton.addEventListener("click", sendMessage);
const channelChangingButton = document.getElementById("channel_changer");
channelChangingButton.addEventListener("click", changeChannel);
const nameChangingButton = document.getElementById("name_changer");
nameChangingButton.addEventListener("click", changeName);


//~~~~~~~~~~~~~~~~~~DOM
function dropdownToggle() {
	var x = document.getElementById("myLinks");
	if (x.style.display === "block") {
		x.style.display = "none";
	} else {
		x.style.display = "block";
	}
}

function createMember(member)
{
    const { name, color } = member.clientData;
    const el = document.createElement('div');
    el.appendChild(document.createTextNode(name + ": "));
    el.style.color = color;
    return el;
}
function updateMembers()
{
    chatmembers.innerHTML = '';
	chatmembers.innerText = `${members.length} users in room. You are messaging as:`;
	var el = document.createElement("p");
	el.innerText = userName;
	el.style.color = nameColor;
	chatmembers.appendChild(el);
}
function createMessage(text, member)
{
    const el = document.createElement('div');
    el.appendChild(createMember(member));
    el.appendChild(document.createTextNode(text.MESSAGE));
	return el;
}
function updateMessage(text, member)
{
    chatmessages.appendChild(createMessage(text, member));
	chatmessages.scrollTop = chatmessages.scrollHeight + 100;
}
function sendMessage()
{
	const value = messageInput.value;
	if (value === '') {
		return;
	}
	messageInput.value = '';
	drone.publish({
		room: droneRoom,
		message: {
			NAME: userName,
			COLOR: nameColor,
			MESSAGE: value
		}
	});
}
function updateHistory(data)
{
	// console.log("updating: " + data.NAME)

	var historyChild = document.createElement("div");
	historyChild.setAttribute("id", "history_box");
	var nameChild = document.createElement("p");
	nameChild.innerText = data.NAME;
	nameChild.style.color = data.COLOR;
	historyChild.appendChild(nameChild);
	var messageChild = document.createElement("p");
	messageChild.innerText = data.MESSAGE;
	historyChild.appendChild(messageChild);

	chatmessages.appendChild(historyChild);

	chatmessages.scrollTop = chatmessages.scrollHeight + 100;
}
function changeChannel()
{
	chatmessages.innerHTML = "";
	drone.close();
	if(droneChannel == testID)
	{
		droneChannel = testID2;
	}
	else
	{
		droneChannel = testID;
	}
	drone = new Scaledrone(droneChannel, {
		data: {
			name: userName,
			color: nameColor,
		},
	});
	drone.on("open", error => init(error));
}
function changeName()
{
	var spanContainer = document.getElementById("name_form");
	spanContainer.innerHTML = "";

	var form = document.createElement("div");
	form.setAttribute("id", "input_container");

	var inputForm = document.createElement("input");
	inputForm.setAttribute("id", "form_name");
	inputForm.setAttribute("type", "text");
	inputForm.setAttribute("placeholder", "username");

	var buttonForm = document.createElement("button");
	buttonForm.setAttribute("id", "form_submit");
	buttonForm.innerText = "Submit";

	form.append(inputForm, buttonForm);
	spanContainer.appendChild(form);

	buttonForm.addEventListener("click", setNewName);
}
function setNewName()
{
	var input = document.getElementById("form_name").value;
	console.log(input)
	userName = input;
	if(input === "")
	{
		return;
	}
	else
	{
		document.getElementById("name_form").innerHTML = "<button id = 'name_changer'>Change username</button>";

		drone.close();
		drone = new Scaledrone(droneChannel, {
			data: {
				name: userName,
				color: nameColor,
			},
		});
	}
	chatmessages.innerHTML = "";
	drone.on("open", error => init(error));
}

//~~~~~~~~~~~~~~~~~~other stuff
function randomColor()
{
	return '#' + Math.floor(Math.random() * 0xFFFFFF).toString(16);
}
function randomName()
{
	const adjs = ["AUTUMN", "HIDDEN", "MISTY", "SUMMER", "ICY", "DELICATE", "QUIET", "WHITE", "COOL", "SPRING", "WINTER", "PATIENT", "TWILIGHT", "DAWN", "CRIMSON", "WISPY", "BLUE", "FALLING", "FROSTY", "GREEN", "LINGERING", "BOLD", "LITTLE", "MORNING", "MUDDY", "OLD", "RED", "ROUGH", "STILL", "SMALL", "SPARKLING", "THROBBING", "SHY", "WANDERING", "WITHERED", "WILD", "BLACK", "YOUNG", "HOLY", "SOLITARY", "FRAGRANT", "AGED", "SNOWY", "PROUD", "FLORAL", "RESTLESS", "DIVINE", "POLISHED", "ANCIENT", "PURPLE", "LIVELY", "NAMELESS", "STAR", "THE", "GOLD", "ELECTRIC"];
	const nouns = ["WATERFALL", "RIVER", "BREEZE", "MOON", "RAIN", "WIND", "SEA", "MORNING", "SNOW", "LAKE", "SUNSET", "PINE", "SHADOW", "LEAF", "DAWN", "GLITTER", "FOREST", "HILL", "CLOUD", "MEADOW", "SUN", "GLADE", "BIRD", "BROOK", "BUTTERFLY", "BUSH", "DEW", "DUST", "FIELD", "FIRE", "FLOWER", "FIREFLY", "FEATHER", "GRASS", "HAZE", "MOUNTAIN", "NIGHT", "POND", "DARKNESS", "SNOWFLAKE", "SILENCE", "SOUND", "SKY", "SHAPE", "SURF", "THUNDER", "VIOLET", "WATER", "WILDFLOWER", "WAVE", "WATER", "RESONANCE", "SUN", "WOOD", "DREAM", "CHERRY", "TREE", "FOG", "FROST", "VOICE", "PAPER", "FROG", "SMOKE", "STAR", "UMBRELLA", "PLANET", "PLATINUM", "WORLD", "EXPERIENCE", "SURVIVOR"];
	return adjs[Math.floor(Math.random() * adjs.length)] + " " + nouns[Math.floor(Math.random() * nouns.length)];
}