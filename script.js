let memory =
JSON.parse(
localStorage.getItem("memory")
) || {};

function sendMessage(){

  let input =
  document.getElementById("userInput");

  let message =
  input.value.trim();

  if(message === ""){
    return;
  }

  /* MEMORY SAVE */

  if(
    message.toLowerCase().startsWith(
      "my name is "
    )
  ){

    let name =
    message.substring(11).trim();

    memory.name = name;

    localStorage.setItem(
      "memory",
      JSON.stringify(memory)
    );

  }

  let chatBox =
  document.getElementById("chatBox");

  chatBox.innerHTML += `
    <div class="userMsg">
      ${message}
    </div>
  `;

  input.value = "";

  let reply =
  "I heard you. Tell me more.";

  /* MEMORY RECALL */

  if(
    message.toLowerCase() ===
    "what is my name"
  ){

    if(memory.name){

      reply =
      `Your name is ${memory.name}.`;

    }else{

      reply =
      "I don't know your name yet.";

    }

  }
  let lowerMessage =
message.toLowerCase();

/* SAD */

if(
  lowerMessage.includes("sad") ||
  lowerMessage.includes("depressed")
){

  reply =
  "I'm sorry you're having a difficult time. I'm here with you.";

}

/* LONELY */

else if(
  lowerMessage.includes("lonely")
){

  reply =
  "Feeling lonely can be heavy. You don't have to face this conversation alone.";

}

/* ANXIOUS */

else if(
  lowerMessage.includes("anxious") ||
  lowerMessage.includes("anxiety")
){

  reply =
  "It sounds like you're feeling anxious. What part of the situation is worrying you most?";

}

/* HAPPY */

else if(
  lowerMessage.includes("happy")
){

  reply =
  "I'm glad to hear that. What made today better?";

}

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
