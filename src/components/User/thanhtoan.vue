<template>
  <div class="container mt-5">
    <h2 class="text-center text-primary display-4">Thanh toán đơn hàng</h2>

    <div class="card shadow-sm bg-light">
      <div class="card-body">
        <form @submit.prevent="handleSubmit">
          <div class="row mb-4">
            <div class="col-md-6">
              <label for="customerName" class="form-label">Tên khách hàng</label>
              <input v-model="order.customerName" type="text" id="customerName" class="form-control" required>
            </div>
            <div class="col-md-6">
              <label for="customerPhone" class="form-label">Số điện thoại</label>
              <input v-model="order.customerPhone" type="text" id="customerPhone" class="form-control" required>
            </div>
          </div>

          <div class="mb-4">
            <h4 class="text-secondary">Sản phẩm đã chọn</h4>
            <ul class="list-group">
              <li v-for="item in order.items" :key="item.id" class="list-group-item">
                <span class="fw-bold">{{ item.name }}</span> - 
                <span>{{ item.quantity }} x {{ item.price }} VND</span>
              </li>
            </ul>
            <p class="mt-3 fs-5"><strong>Tổng tiền: </strong>{{ totalPrice }} VND</p>
          </div>

          <div class="mb-4">
            <label for="paymentMethod" class="form-label">Phương thức thanh toán</label>
            <select v-model="order.paymentMethod" id="paymentMethod" class="form-select" required>
              <option value="cod">Thanh toán khi nhận hàng (COD)</option>
              <option value="bank">Chuyển khoản ngân hàng</option>
            </select>
          </div>

          <div v-if="order.paymentMethod === 'bank'" class="qr-container">
            <h5>Mã QR thanh toán</h5>
            <img src="https://upload.wikimedia.org/wikipedia/commons/d/d0/QR_code_for_mobile_English_Wikipedia.svg" alt="">
            <p class="highlight-QR"><b class="highlight-QR">Khanh</b>QR</p>
            <p class="text-muted">Vui lòng quét mã để thanh toán</p>
          </div>

          <button type="submit" class="btn btn-success btn-lg">Xác nhận thanh toán</button>
        </form>

        <div v-if="message" class="alert alert-info mt-3 fade show">
          {{ message }}
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      order: {
        customerName: '',
        customerPhone: '',
        paymentMethod: 'cod',
        items: [
          { id: 1, name: 'Sản phẩm 1', quantity: 2, price: 50000 },
          { id: 2, name: 'Sản phẩm 2', quantity: 1, price: 150000 }
        ],
      },
      message: ''
    };
  },
  computed: {
    totalPrice() {
      return this.order.items.reduce((total, item) => total + item.quantity * item.price, 0);
    }
  },
  methods: {
    async handleSubmit() {
      try {
        const response = await axios.post('http://127.0.0.1:8000/api/don-hang', this.order);
        this.message = 'Đơn hàng của bạn đã được thanh toán thành công!';
      } catch (error) {
        this.message = 'Có lỗi xảy ra trong quá trình thanh toán!';
        console.error(error);
      }
    }
  }
};
</script>

<style scoped>
.container {
  max-width: 800px;
  background-color: #f7f9fc;
  border-radius: 10px;
  padding: 20px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}
.card {
  border: none;
}
.list-group-item {
  font-size: 1.1rem;
  transition: background-color 0.3s;
}
.list-group-item:hover {
  background-color: #e2e6ea;
}
.btn-success {
  width: 100%;
  transition: background-color 0.3s;
}
.btn-success:hover {
  background-color: #218838;
}
.alert {
  animation: fadeIn 0.5s;
}
@keyframes fadeIn {
  from { opacity: 0; }
  to { opacity: 1; }
}
.qr-container {
  text-align: center;
  padding: 15px;
  border: 1px solid #ddd;
  border-radius: 8px;
  background: #fff;
  margin-bottom: 15px;
}
.qr-code {
  width: 200px;
  height: 200px;
  margin-top: 10px;
}
.highlight-QR{
  color: red;
}
p .highlight-QR{
  color: blue;
  font-weight: bold;
}
</style>
