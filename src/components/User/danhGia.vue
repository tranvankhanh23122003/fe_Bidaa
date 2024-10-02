<template>
    <div class="container mt-5">
      <h1 class="text-center mb-4">Đánh Giá Phòng Chơi</h1>
      <div class="row">
        <div class="col-5">
          <div class="rating-box p-3 rounded bg-light border">
            <h3 class="mb-3">Để lại đánh giá của bạn</h3>
            <form v-on:submit.prevent="guiDanhGia">
              <div class="mb-3">
                <input v-model="tenNguoiDung" class="form-control" placeholder="Nhập tên của bạn" required />
              </div>
              <div class="mb-3">
                <textarea v-model="noiDungDanhGia" class="form-control" placeholder="Nhập nội dung đánh giá của bạn" required></textarea>
              </div>
              <div class="mb-3">
                <label>Chọn số sao:</label>
                <div class="star-rating">
                  <span 
                    v-for="n in 5" 
                    :key="n" 
                    class="star" 
                    :class="{ 'active': n <= soSao }" 
                    v-on:click="chọnSoSao(n)"
                  >
                    ★
                  </span>
                </div>
              </div>
              <button type="submit" class="btn btn-success">Gửi Đánh Giá</button>
            </form>
          </div>
        </div>
        <div class="col-7">
          <div class="card">
            <h3 class="mb-3">Danh Sách Đánh Giá</h3>
            <div class="card-body">
              <div class="reviews-list mt-5">
                <div class="review mb-3" v-for="(danhGia, index) in danhSachDanhGia" :key="index">
                  <strong>{{ danhGia.tenNguoiDung }}:</strong>
                  <p>{{ danhGia.noiDungDanhGia }}</p>
                  <p><strong>Đánh giá:</strong> {{ danhGia.soSao }} sao</p>
                </div>
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
        tenNguoiDung: '',
        noiDungDanhGia: '',
        soSao: 0,
        danhSachDanhGia: []
      };
    },
    methods: {
      guiDanhGia() {
        const danhGiaMới = {
          tenNguoiDung: this.tenNguoiDung,
          noiDungDanhGia: this.noiDungDanhGia,
          soSao: this.soSao
        };
        this.danhSachDanhGia.push(danhGiaMới);
        this.tenNguoiDung = '';
        this.noiDungDanhGia = '';
        this.soSao = 0;
      },
      chọnSoSao(n) {
        this.soSao = n; 
      }
    }
  };
  </script>
  
  <style scoped>
  .star-rating {
    font-size: 30px;
  }
  
  .star {
    cursor: pointer; 
    color: gray; 
  }
  
  .star.active {
    color: gold; 
  }
  
  .review {
    border: 1px solid #ddd;
    padding: 10px;
    border-radius: 5px;
    background-color: #f9f9f9;
  }
  </style>
  