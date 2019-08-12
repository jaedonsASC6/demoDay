//~~~~~~~~~~~~~~~~~~scaledrone
let userName = "Anon User";
let nameColor = randomColor();
let drone = new Scaledrone(testID, {
	data: {
		name: userName,
		color: nameColor,
	},
});
let members = [];

drone.on("open", error => {
    if(error)
    {
        console.log(error);
    }
    console.log("successfully connecteed to scaledrone");

    const room = drone.subscribe("observable-room");
    room.on("open", error => {
        if(error)
        {
            return console.log(error);
        }
        console.log("successfully joined room");
    });


    room.on("members", m => {   //event for checking number of memebrs
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
});

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
// const input = document.getElementById("thing");
// const inputbutton = document.getElementById("thingBU");
// inputbutton.addEventListener("click", function(){
// 	drone = new Scaledrone(config.CHANNELID.Stress_ResponseID, {
// 		data: {
// 			name: userName,
// 			color: randomColor(),
// 		},
// 	});
// });

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
    el.appendChild(document.createTextNode(name));
    el.style.color = color;
    return el;
}
function updateMembers()
{
    chatmembers.innerHTML = '';
	chatmembers.innerText = `${members.length} users in room: `;
	members.forEach(member =>
        chatmembers.appendChild(createMember(member))
    );
}
function createMessage(text, member)
{
    const el = document.createElement('div');
    el.appendChild(createMember(member));
    el.appendChild(document.createTextNode(text));
	return el;
}
function updateMessage(text, member)
{
    const wasTop = chatmessages.scrollTop === chatmessages.scrollHeight - chatmessages.clientHeight;
    chatmessages.appendChild(createMessage(text, member));
    if (wasTop) {
        chatmessages.scrollTop = chatmessages.scrollHeight - chatmessages.clientHeight;
    }
}
function sendMessage()
{
	const value = messageInput.value;
	if (value === '') {
		return;
	}
	messageInput.value = '';
	drone.publish({
		room: 'observable-room',
		message: value,
	});
}
//~~~~~~~~~~~~~~~~~~other stuff
function randomColor()
{
	return '#' + Math.floor(Math.random() * 0xFFFFFF).toString(16);
}