const { default: chatServices } = require("./chatServices");

function socketOn(io) {
  io.on("connection", (client) => {
    client.on("join_room", async ({ staffId, userId }) => {
      const room = await chatServices.jionRoom({ staffId, userId });

      client.emit("return_room", room);
    });

    client.on("join_room_chat", async ({ chatRoomId }) => {
      client.join(chatRoomId);
      client.emit("join_created");
    });

    client.on("chat_message", async ({ chatRoomId, message, role }) => {
      if (!chatRoomId || !message || !role) {
        console.log("Khong co du lieu chat.");
        return;
      }

      const msg = await chatServices.createMessage({
        chatRoomId,
        message,
        role,
      });

      client.to(chatRoomId).emit("chat_message_created", { msg });
    });
  });
}
module.exports = socketOn;
