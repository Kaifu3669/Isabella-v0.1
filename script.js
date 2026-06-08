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
