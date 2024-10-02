<template>
    <div class="theo-doi-thoi-gian text-center p-4 ">
        <h3><b>THÔNG TIN KHÁCH HÀNG </b> </h3>
        <div class="mb-3">
        <label for="tenKhachHang">Tên khách hàng:</label>
        <input 
          id="tenKhachHang" 
          v-model="tenKhachHang" 
          class="form-control  d-inline-block w-auto" 
          type="text" 
          placeholder="Nhập tên của bạn"
          :disabled="dangChoi"
        />
      </div>
      <h2>Thời gian đã chơi: {{ thoiGianDaChoi }}</h2>
      <button 
        class="btn btn-success m-2" 
        v-on:click="batDau" 
        :disabled="dangChoi || !tenKhachHang" 
      >
        Bắt đầu chơi
      </button>
      
      <button 
        class="btn btn-danger m-2" 
        v-on:click="tamDung" 
        :disabled="!dangChoi"
      >
        Tạm dừng
      </button>
  
      <div v-if="hienCanhBao" class="alert alert-warning mt-3">
        ⚠️ Bạn sắp hết thời gian chơi, {{ tenKhachHang }}!
      </div>
  
      <div v-if="hienKhuyenMai" class="alert alert-success mt-3">
        🎉 Khuyến mãi mới cho bạn, {{ tenKhachHang }}: Giảm 50% cho gói VIP!
      </div>
  
      <div class="mt-5">
        <h3>Danh sách khách hàng đã chơi:</h3>
        <ul class="list-group  d-inline-block w-auto">
          <li v-for="(khach, index) in danhSachKhachHang" :key="index" class="list-group-item">
            {{ khach.ten }} đã chơi {{ khach.thoiGian }} phút {{ khach.giay }} giây.
          </li>
        </ul>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        tenKhachHang: "", 
        thoiGianChoi: 0, 
        thoiGianToiDa: 30, 
        thoiGianCanhBao: 20, 
        idGianDoan: null,
        dangChoi: false,
        hienCanhBao: false,
        hienKhuyenMai: false,
        danhSachKhachHang: [] 
      };
    },
    computed: {
      thoiGianDaChoi() {
        const phut = Math.floor(this.thoiGianChoi / 60);
        const giay = this.thoiGianChoi % 60;
        return `${phut} phút ${giay} giây`;
      },
    },
    methods: {
      batDau() {
        this.dangChoi = true;
        this.idGianDoan = setInterval(() => {
          this.thoiGianChoi += 1;
          this.kiemTraCanhBao();
        }, 1000);
      },
      tamDung() {
        this.dangChoi = false;
        clearInterval(this.idGianDoan);
      },
      kiemTraCanhBao() {
        if (this.thoiGianChoi >= this.thoiGianToiDa) {
          this.luuKhachHang(); 
          this.tamDung();
          alert(`Bạn đã hết thời gian chơi, ${this.tenKhachHang}!`);
        } else if (this.thoiGianChoi >= this.thoiGianToiDa - this.thoiGianCanhBao) {
          this.hienCanhBao = true;
        }
  
        if (this.thoiGianChoi === 600) {
          this.hienKhuyenMai = true;
        }
      },
      luuKhachHang() {
        const phut = Math.floor(this.thoiGianChoi / 60);
        const giay = this.thoiGianChoi % 60;
        
        this.danhSachKhachHang.push({
          ten: this.tenKhachHang,
          thoiGian: phut,
          giay: giay
        });
  
        this.tenKhachHang = "";
        this.thoiGianChoi = 0;
        this.hienCanhBao = false;
        this.hienKhuyenMai = false;
      }
    },
  
  };
  </script>
  