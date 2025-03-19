<template>
  <div class="chat-container">
    <div class="chat-header">Trò chuyện</div>
    <div class="user-list">
      <div v-for="user in users" :key="user.id" @click="selectUser(user)" :class="{ online: user.online }">
        <img :src="user.avatar" alt="Avatar" class="avatar" />
        {{ user.name }}
      </div>
    </div>
    <div class="chat-box" ref="chatBox">
      <div v-for="msg in messages" :key="msg.id" :class="['message', msg.type]">
        <img :src="msg.avatar" alt="Avatar" class="msg-avatar" />
        <div class="msg-text">{{ msg.text }}</div>
      </div>
    </div>
    <div class="chat-input">
      <input v-model="newMessage" type="text" placeholder="Nhập tin nhắn..." @keyup.enter="sendMessage">
      <button @click="sendMessage">Gửi</button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      users: [
        { id: 1, name: "Người dùng 1", avatar: "https://via.placeholder.com/40", online: true },
        { id: 2, name: "Người dùng 2", avatar: "https://via.placeholder.com/40", online: false },
        { id: 3, name: "Người dùng 3", avatar: "https://via.placeholder.com/40", online: true }
      ],
      messages: [
        { id: 1, text: "Xin chào! Tôi có thể giúp gì cho bạn?", type: "admin", avatar: "https://via.placeholder.com/40" },
        { id: 2, text: "Chào admin! Tôi muốn hỏi về dịch vụ.", type: "user", avatar: "https://via.placeholder.com/40" }
      ],
      newMessage: ""
    };
  },
  methods: {
    sendMessage() {
      if (this.newMessage.trim() !== "") {
        this.messages.push({
          id: Date.now(),
          text: this.newMessage,
          type: "user",
          avatar: "https://via.placeholder.com/40"
        });
        this.newMessage = "";
        this.$nextTick(() => {
          this.$refs.chatBox.scrollTop = this.$refs.chatBox.scrollHeight;
        });
      }
    },
    selectUser(user) {
      console.log("Đã chọn người dùng:", user.name);
    }
  }
};
</script>

<style scoped>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
body {
  font-family: Arial, sans-serif;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: #f4f4f4;
}
.chat-container {
  width: 100%;
  height: 500px;
  background: white;
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
  overflow: hidden;
}
.chat-header {
  padding: 15px;
  background: #007bff;
  color: white;
  text-align: center;
  font-size: 18px;
  font-weight: bold;
}
.chat-box {
  flex: 1;
  padding: 15px;
  overflow-y: auto;
  display: flex;
  flex-direction: column;
  background: #eef1f5;
}
.message {
  display: flex;
  align-items: center;
  margin: 10px 0;
  max-width: 75%;
}
.msg-avatar {
  width: 30px;
  height: 30px;
  border-radius: 50%;
  margin-right: 10px;
}
.msg-text {
  padding: 10px;
  border-radius: 10px;
}
.message.user {
  align-self: flex-end;
  flex-direction: row-reverse;
}
.message.user .msg-text {
  background: #007bff;
  color: white;
}
.message.admin .msg-text {
  background: #ddd;
}
.chat-input {
  display: flex;
  padding: 10px;
  background: #fff;
  border-top: 1px solid #ddd;
}
.chat-input input {
  flex: 1;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
  outline: none;
}
.chat-input button {
  padding: 10px 15px;
  background: #007bff;
  color: white;
  border: none;
  border-radius: 5px;
  margin-left: 10px;
  cursor: pointer;
}
.user-list {
  padding: 10px;
  border-bottom: 1px solid #ddd;
  background: #f9f9f9;
}
.user-list div {
  display: flex;
  align-items: center;
  padding: 10px;
  border-radius: 5px;
  cursor: pointer;
  margin: 5px 0;
  background: #fff;
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.1);
  transition: background 0.3s;
}
.user-list div:hover {
  background: #e3e3e3;
}
.avatar {
  width: 30px;
  height: 30px;
  border-radius: 50%;
  margin-right: 10px;
}
.online {
  font-weight: bold;
  color: #28a745;
}
</style>
