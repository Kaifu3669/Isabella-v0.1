function sendMessage(){

  let input =
  document.getElementById("userInput");

  let message =
  input.value.trim();

  if(message === ""){
    return;
  }

  let chatBox =
  document.getElementById("chatBox");

  chatBox.innerHTML += `
    <div class="userMsg">
      ${message}
    </div>
  `;

  input.value = "";

  setTimeout(()=>{

    chatBox.innerHTML += `
      <div class="botMsg">
        I heard you. Tell me more.
      </div>
    `;

    chatBox.scrollTop =
    chatBox.scrollHeight;

  },800);

}
