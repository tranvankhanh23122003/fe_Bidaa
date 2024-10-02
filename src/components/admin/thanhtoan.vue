<template>
    <div class="payment-container">
      <h2>Thanh Toán</h2>
  
      <div class="khach_hang-info">
        <h3>Thông tin khách hàng</h3>
        <label>Tên khách hàng:</label>
        <input v-model="khach_hang.name" type="text" placeholder="Nhập tên khách hàng">
  
        <label>Số điện thoại:</label>
        <input v-model="khach_hang.sdt" type="text" placeholder="Nhập số điện thoại">
      </div>
  
      <div class="dich_vu-list">
        <h3>Dịch vụ đã sử dụng</h3>
        <table>
          <thead>
            <tr>
              <th>Dịch vụ</th>
              <th>Giá</th>
              <th>Số lượng</th>
              <th>Tổng</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(dich_vu, index) in dich_vus" :key="index">
              <td>{{ dich_vu.name }}</td>
              <td>{{ dich_vu.gia }} VND</td>
              <td>{{ dich_vu.so_luong }}</td>
              <td>{{ dich_vu.gia * dich_vu.so_luong }} VND</td>
            </tr>
          </tbody>
        </table>
      </div>
  
      <div class="total-payment">
        <h3>Tổng cộng: {{ tongSoTien }} VND</h3>
        <button v-on:click="hoanTatThanhToan">Hoàn tất thanh toán</button>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        khach_hang: {
          name: '',
          sdt: '',
        },
        dich_vus: [
          { name: 'Giờ chơi bida', gia: 50000, so_luong: 2 },
          { name: 'Nước uống', gia: 20000, so_luong: 3 },
        ],
      };
    },
    computed: {
      tongSoTien() {
        return this.dich_vus.reduce((total, dich_vu) => {
          return total + (dich_vu.gia * dich_vu.so_luong);
        }, 0);
      },
    },
    methods: {
      hoanTatThanhToan() {
        alert(`Thanh toán thành công! Tổng số tiền: ${this.tongSoTien} VND`);
      },
    },
  };
  </script>
  
  <style scoped>
  .payment-container {
    max-width: 600px;
    margin: 0 auto;
    padding: 20px;
    border: 1px solid #ccc;
    border-radius: 8px;
    background-color: #f9f9f9;
  }
  
  h2, h3 {
    text-align: center;
    color: #333;
  }
  
  .khach_hang-info, .dich_vu-list, .total-payment {
    margin-bottom: 20px;
  }
  
  label {
    display: block;
    margin-bottom: 5px;
    font-weight: bold;
  }
  
  input {
    width: 100%;
    padding: 8px;
    margin-bottom: 10px;
    border-radius: 4px;
    border: 1px solid #ccc;
  }
  
  table {
    width: 100%;
    border-collapse: collapse;
  }s
  
  table th, table td {
    padding: 10px;
    text-align: left;
    border-bottom: 1px solid #ddd;
  }
  
  button {
    width: 100%;
    padding: 10px;
    background-color: #28a745;
    color: white;
    border: none;
    border-radius: 4px;
    cursor: pointer;
  }
  
  button:hover {
    background-color: #218838;
  }
  </style>
  