const socket = io();

const messageContainer = document.getElementById("message-container");
const messageInput = document.getElementById("message-input");
const sendButton = document.getElementById("send-button");

sendButton.addEventListener("click", () => {
  const message = messageInput.value;
  if (message) {
    socket.emit("message", message);
    messageInput.value = "";
  }
});

socket.on("message", (message) => {
  const messageElement = document.createElement("div");
  messageElement.textContent = message;
  messageContainer.appendChild(messageElement);
  messageContainer.scrollTop = messageContainer.scrollHeight;
});
