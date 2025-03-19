<template>
  <div class="container mt-5">
    <h1 class="text-center mb-4">Trò chuyện và Tương tác Cộng đồng</h1>

    <!-- Phòng chatttttttt -->
    <div class="chat-box mb-5 p-3 rounded bg-light border">
      <h3 class="mb-3">Phòng Chat Cộng Đồng</h3>
      <div class="chat-messages border p-3 bg-white rounded mb-3">
        <div v-for="(message, index) in messages" :key="index" class="message mb-2">
          <strong>{{ message.fullName }}:</strong> {{ message.text }} 
          <!-- //chứa danh sách tin nhắn từ backend. -->
          <!-- v-for="(message, index) in messages" duyệt danh sách và hiển thị từng tin nhắn -->
        </div>
      </div>
      <div class="input-group">
        <input v-model="newMessage" class="form-control" placeholder="Nhập tin nhắn..." />
        <!-- Ô nhập liệu v-model="newMessage" để nhập tin nhắn. -->
        <button class="btn btn-primary" v-on:click="sendMessage">Gửi</button>
      </div>
    </div>

    <!-- Hỗ trợooooooooooo -->
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
<!-- v-model="supportEmail" và v-model="supportMessage" để nhập thông tin.
Khi bấm Gửi yêu cầu hỗ trợ, gọi phương thức submitSupport(). -->

<script>
import axios from '../../assets/core/BaseRequest'

export default {
  data() {
    return {
      messages: [],
      newMessage: '',
      supportEmail: '',
      supportMessage: '',
    };
  },
  mounted() {
    this.fetchMessages(); 
    // gọi fetchMessages() để lấy tin nhắn từ API.
  },
  methods: {
    async fetchMessages() {
      try {
        const response = await axios.get('messages');
        console.log("response", response);
        
        this.messages = response.data.data;
      } catch (error) {
        console.error('Lỗi tải tin nhắn:', error);
      }
    },

    async sendMessage() {
      if (this.newMessage.trim() !== '') {
        try {
          const response = await axios.post('messages', {
            user: 'Bạn',
            text: this.newMessage,
          });
          // this.messages.push(response.data.text);
          this.fetchMessages();
          this.newMessage = '';

        } catch (error) {
          console.error('Lỗi gửi tin nhắn:', error);
        }
      }
    },

    async submitSupport() {
      try {
        await axios.post('support', {
          email: this.supportEmail,
          message: this.supportMessage,
        });
        alert('Yêu cầu hỗ trợ đã được gửi!');
        this.supportEmail = '';
        this.supportMessage = '';
      } catch (error) {
        console.error('Lỗi gửi hỗ trợ:', error);
      }
    }
  }
};
</script>
