<template>
    <div class="container mt-5">
      <h1 class="text-center mb-4">Thực Đơn Quán Bida</h1>
      <div class="row">
        <div class="col-8">
          <div class="card mb-4">
            <div class="card-header">
              <h3 class="mb-0">Món Ăn</h3>
            </div>
            <div class="card-body">
              <div class="menu-item border-bottom mb-3 pb-2" v-for="(monAn, index) in danhSachMonAn" :key="index">
                <div class="d-flex align-items-center">
                  <img :src="monAn.hinh" alt="" class="img-thumbnail me-3" style="width: 100px; height: 100px;">
                  <div>
                    <h5>{{ monAn.ten }}</h5>
                    <p>{{ monAn.mota }}</p>
                    <p><strong>Giá:</strong> {{ monAn.gia }} VNĐ</p>
                    <button class="btn btn-primary" v-on:click="datHang(monAn)">Đặt Hàng</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
  
          <div class="card">
            <div class="card-header">
              <h3 class="mb-0">Nước Uống</h3>
            </div>
            <div class="card-body">
              <div class="menu-item border-bottom mb-3 pb-2" v-for="(nuocUong, index) in danhSachNuocUong" :key="index">
                <div class="d-flex align-items-center">
                  <img :src="nuocUong.hinh" alt="" class="img-thumbnail me-3" style="width: 100px; height: 100px;">
                  <div>
                    <h5>{{ nuocUong.ten }}</h5>
                    <p>{{ nuocUong.mota }}</p>
                    <p><strong>Giá:</strong> {{ nuocUong.gia }} VNĐ</p>
                    <button class="btn btn-primary" v-on:click="datHang(nuocUong)">Đặt Hàng</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
  
        <div class="col-4">
          <div class="order-summary card">
            <div class="card-header">
              <h3 class="mb-0">Đặt Hàng Của Bạn</h3>
            </div>
            <div class="card-body">
              <div v-if="orderItems.length === 0">
                <p>Chưa có món nào được chọn.</p>
              </div>
              <div v-else>
                <ul class="list-group mb-3">
                  <li class="list-group-item" v-for="(item, index) in orderItems" :key="index">
                    {{ item.ten }} - {{ item.gia }} VNĐ
                    <button class="btn btn-danger btn-sm float-end" v-on:click="xoaMon(item)">Xóa</button>
                  </li>
                </ul>
                <p><strong>Tổng cộng:</strong> {{ totalPrice }} VNĐ</p>
                <button class="btn btn-success" v-on:click="xacNhanDatHang">Xác Nhận Đặt Hàng</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        danhSachMonAn: [
          { ten: 'Phở', mota: 'Món phở ngon nhất thành phố', gia: 50000, hinh: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR4C1rbES8uNBNxPvJCQOWemsv9vlU6xJ9WbQ&s' },
          { ten: 'Bánh mì', mota: 'Bánh mì kẹp thịt, rau củ', gia: 30000, hinh: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTFjLZcRo9cohDLSjAe6zuslM5ipk5CDQqgWA&s' },
          { ten: 'Gỏi cuốn', mota: 'Gỏi cuốn tôm thịt tươi ngon', gia: 40000, hinh: 'https://helio.vn/media/uploads/2023/08/10/goi-cuon-da-nang-04.jpg' },
         

        ],
        danhSachNuocUong: [
          { ten: 'Trà sữa', mota: 'Trà sữa ngọt ngào', gia: 25000, hinh: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR4oC1aDkHHz7fOEV2itYUQNCH_yQIlaYvZvw&s' },
          { ten: 'Nước ngọt', mota: 'Nước ngọt có ga', gia: 15000, hinh: 'https://product.hstatic.net/1000301274/product/_10100996__7up_320ml_sleek_lon_0366766c074a4b538595ed8d91dc6b0d_1024x1024.png' },
          { ten: 'Bia', mota: 'Bia lạnh', gia: 30000, hinh: 'https://biathanhhoa.com.vn/wp-content/uploads/2021/07/Silver-dung.jpg' },
          
        ],
        orderItems: []
      };
    },
    computed: {
      totalPrice() {
        return this.orderItems.reduce((total, item) => total + item.gia, 0);
      }
    },
    methods: {
      datHang(monAn) {
        this.orderItems.push(monAn);
      },
      xoaMon(monAn) {
        this.orderItems = this.orderItems.filter(item => item !== monAn);
      },
      xacNhanDatHang() {
        alert(`Đặt hàng thành công với tổng giá: ${this.totalPrice} VNĐ`);
        this.orderItems = []; 
      }
    }
  };
  </script>
  
  <style scoped>
  .menu-item {
    padding: 10px 0;
  }
  
  .order-summary {
    position: sticky;
    top: 20px;
  }
  </style>
  