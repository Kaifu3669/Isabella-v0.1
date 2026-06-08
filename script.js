let memory =
JSON.parse(
localStorage.getItem("memory")
) || {};

function getReply(message){

let msg =
message.toLowerCase();

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

chatBox.scrollTop =
chatBox.scrollHeight;

},800);

}
