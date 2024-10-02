<template>
    <div class="container mt-5">
      <h1 class="text-center mb-4">Trò chuyện và Tương tác Cộng đồng</h1>
      
      <div class="chat-box mb-5 p-3 rounded bg-light border">
        <h3 class="mb-3">Phòng Chat Cộng Đồng</h3>
        <div class="chat-messages border p-3 bg-white rounded mb-3">
          <div v-for="(message, index) in messages" :key="index" class="message mb-2">
            <strong>{{ message.user }}:</strong> {{ message.text }}
          </div>
        </div>
        <div class="input-group">
          <input v-model="newMessage" class="form-control" placeholder="Nhập tin nhắn..."/>
          <button class="btn btn-primary" v-on:click="sendMessage">Gửi</button>
        </div>
      </div>
  
      <div class="support-box p-3 rounded bg-light border">
        <h3 class="mb-3">Hỗ trợ Trực tuyến</h3>
        <form v-on:submit.prevent="submitSupport">
          <div class="mb-3">
            <input v-model="supportEmail" type="email" class="form-control" placeholder="Nhập email của bạn" required>
          </div>
          <div class="mb-3">
            <textarea v-model="supportMessage" class="form-control" placeholder="Mô tả vấn đề của bạn" required></textarea>
          </div>
          <button type="submit" class="btn btn-success">Gửi yêu cầu hỗ trợ</button>
        </form>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        messages: [
          { user: 'Người chơi 1', text: 'Chào mọi người! 👋' },
          { user: 'Người chơi 2', text: 'Yo! Có muốn chơi chung không? 😅' },
          { user: 'Người chơi 3', text: 'Solo đêiiiiii !!!!!! ⚔️' },

        ],
        newMessage: '',
        
        supportEmail: '',
        supportMessage: '',
      };
    },
    methods: {
      sendMessage() {
        if (this.newMessage.trim() !== '') {
          this.messages.push({ user: 'Bạn', text: this.newMessage });
          this.newMessage = '';
        }
      },
  
      submitSupport() {
        alert(`Yêu cầu hỗ trợ đã được gửi từ email: ${this.supportEmail}`);
        this.supportEmail = '';
        this.supportMessage = '';
      }
    }
  };
  </script>
  
  <style scoped>
  </style>
  