let memory =
JSON.parse(
localStorage.getItem("memory")
) || {};

let chatHistory =
JSON.parse(
localStorage.getItem("chatHistory")
) || {};

function getReply(message){

let msg =
message.toLowerCase();

/* NAME */

if(
msg.startsWith("my name is ")
){

let name =
message.substring(11).trim();

memory.name = name;

localStorage.setItem(
"memory",
JSON.stringify(memory)
);

return `Nice to meet you, ${name}. I'll remember that.`;
}

if(
msg === "what is my name"
){

if(memory.name){

return `Your name is ${memory.name}.`;

}

return "I don't know your name yet.";
}

/* FAVORITE COLOR */

if(
msg.startsWith(
"my favorite color is "
)
){

let color =
message.substring(21).trim();

memory.favoriteColor = color;

localStorage.setItem(
"memory",
JSON.stringify(memory)
);

return `I'll remember that your favorite color is ${color}.`;
}

if(
msg ===
"what is my favorite color"
){

if(memory.favoriteColor){

return `Your favorite color is ${memory.favoriteColor}.`;

}

return "You haven't told me your favorite color yet.";
}

/* HOBBY */

if(
msg.startsWith(
"my hobby is "
)
){

let hobby =
message.substring(12).trim();

memory.hobby = hobby;

localStorage.setItem(
"memory",
JSON.stringify(memory)
);

return `Got it. I'll remember that your hobby is ${hobby}.`;
}

if(
msg ===
"what is my hobby"
){

if(memory.hobby){

return `Your hobby is ${memory.hobby}.`;

}

return "You haven't told me your hobby yet.";
}

/* FAVORITE ANIME */

if(
msg.startsWith(
"my favorite anime is "
)
){

let anime =
message.substring(21).trim();

memory.favoriteAnime = anime;

localStorage.setItem(
"memory",
JSON.stringify(memory)
);

return `I'll remember that your favorite anime is ${anime}.`;
}

if(
msg ===
"what is my favorite anime"
){

if(memory.favoriteAnime){

return `Your favorite anime is ${memory.favoriteAnime}.`;

}

return "You haven't told me your favorite anime yet.";
}

/* EMOTIONS */

if(
msg.includes("alone")
){

return "When you say alone, do you mean physically alone or emotionally alone?";
}

if(
msg.includes("future")
){

return "Sometimes the mind tries to prepare for tomorrow by exhausting itself today. What feels uncertain about the future right now?";
}

if(
msg.includes("sad")
){

return "I hear sadness in what you wrote. Do you want to talk about what happened or how it feels inside?";
}

if(
msg.includes("anxiety")
){

return "Anxiety often makes the future feel closer than it really is. What has been on your mind lately?";
}

if(
msg.includes("depressed")
||
msg.includes("depression")
){

return "That sounds heavy. What has been the hardest part recently?";
}

if(
msg.includes("tired")
){

return "You sound exhausted. Has it been emotional exhaustion, physical exhaustion, or both?";
}

/* GREETING */

if(
msg.includes("hello")
||
msg.includes("hi")
){

if(memory.name){

return `Hello ${memory.name}. How are you feeling today?`;
}

return "Hello. How are you feeling today?";
}

/* DEFAULT */

return "I hear you. Tell me more.";
}

function sendMessage(){

let input =
document.getElementById(
"userInput"
);

let message =
input.value.trim();

if(message === ""){
return;
}

let chatBox =
document.getElementById(
"chatBox"
);

chatBox.innerHTML += `
<div class="userMsg">
${message}
</div>
`;

chatHistory.push({
sender:"user",
text:message
});

localStorage.setItem(
"chatHistory",
JSON.stringify(chatHistory)
);

input.value = "";

chatBox.scrollTop =
chatBox.scrollHeight;

let reply =
getReply(message);

setTimeout(()=>{

chatBox.innerHTML += `
<div class="botMsg">
${reply}
</div>
`;

chatHistory.push({
sender:"bot",
text:reply
});

localStorage.setItem(
"chatHistory",
JSON.stringify(chatHistory)
);

chatBox.scrollTop =
chatBox.scrollHeight;

},800);

}

window.onload = function(){

let chatBox =
document.getElementById(
"chatBox"
);

chatHistory.forEach(msg=>{

if(
msg.sender === "user"
){

chatBox.innerHTML += `
<div class="userMsg">
${msg.text}
</div>
`;

}else{

chatBox.innerHTML += `
<div class="botMsg">
${msg.text}
</div>
`;

}

});

chatBox.scrollTop =
chatBox.scrollHeight;

};
