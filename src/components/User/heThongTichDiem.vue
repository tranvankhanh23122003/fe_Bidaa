<template>
    <div id="ứng_dụng" class="container text-center mt-5">
      <h1 class="mb-4">Hệ thống Tích điểm và Phần thưởng</h1>
     
      <div class="">
    <div class="">
      <img src="https://hoangmaimobile.vn/upload_images/images/2024/01/27/05ae40b92e90568574b5085f8.jpg" class="" alt="Hình ảnh 1" style="height: 200px;">
    </div>
  
    </div>
  
      <div class="mb-4">
        <h2>Điểm của bạn: <span class="text-primary">{{ diemNguoiDung }}</span></h2>
      </div>
  
      <div class="mb-4">
        <button class="btn btn-success me-2" v-on:click="themDiem(100)">Đặt bàn (+100 điểm)</button>
        <button class="btn btn-primary" v-on:click="themDiem(200)">Tham gia giải đấu (+200 điểm)</button>
      </div>
  
      <div class="mt-4">
        <h3 class="mb-3">Đổi điểm lấy phần thưởng:</h3>
        <div class="row justify-content-center">
          <div class="col-md-3 col-sm-6 mb-4" v-for="phanThuong in danhSachPhanThuong" :key="phanThuong.id">
            <div class="card h-100">
              <div class="card-body">
                <h5 class="card-title">{{ phanThuong.ten }}</h5>
                <p class="card-text">Điểm cần: <strong>{{ phanThuong.diemCan }}</strong></p>
          <img :src="phanThuong.hinhanh" alt="" class="img-fluid  " style="height: 80px;">
<br>
                <button
                  class="btn btn-warning mt-2"
                  :disabled="diemNguoiDung < phanThuong.diemCan"
                  v-on:click="doiPhanThuong(phanThuong)"
                  
                >
                  Đổi
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: 'ỨngDụng',
    data() {
      return {
        diemNguoiDung: 1000,  
        danhSachPhanThuong: [
          { id: 1, ten: '1 giờ chơi miễn phí', diemCan: 500 ,hinhanh:'https://static.vecteezy.com/system/resources/previews/025/661/021/non_2x/1-hour-timer-symbol-black-color-style-vector.jpg'},
          { id: 2, ten: 'Ưu đãi giảm giá 10%', diemCan: 300, hinhanh:'https://png.pngtree.com/png-clipart/20210308/original/pngtree-sale-30-off-discount-symbol-vector-png-image_5738348.jpg' },
          { id: 3, ten: 'Quà tặng bí mật', diemCan: 1000 , hinhanh:'https://static.vecteezy.com/system/resources/previews/041/879/122/non_2x/question-mark-on-mystery-box-secret-gift-concept-illustration-flat-design-simple-modern-graphic-element-for-ui-infographic-icon-vector.jpg' }
        ]
      };
    },
    methods: {
      themDiem(diem) {
        this.diemNguoiDung += diem;
      },
  
      doiPhanThuong(phanThuong) {
        if (this.diemNguoiDung >= phanThuong.diemCan) {
          this.diemNguoiDung -= phanThuong.diemCan;
          alert(`Bạn đã đổi thành công phần thưởng: ${phanThuong.ten}`);
        } else {
          alert('Bạn không đủ điểm để đổi phần thưởng này.');
        }
      }
    }
  };
  </script>
  
  <style scoped>
  </style>
  