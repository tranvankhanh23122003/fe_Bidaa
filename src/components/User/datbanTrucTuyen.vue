<template>
  <div class="container text-center">
    <h1>Đặt Bàn Trực Tuyến</h1>

    <div class="d-flex justify-content-center align-items-center flex-wrap">
      <div class="form-group mx-2">
        <label for="ngay"><b>Ngày:</b></label>
        <input type="date" v-model="ngayDatBan" class="form-control d-inline-block w-auto" />
      </div>

      <div class="form-group mx-2">
        <label for="thoigian">Thời gian:</label>
        <select v-model="gioDatBan" class="form-control d-inline-block w-auto">
          <option value="07:00">07:00 - 09:00</option>
          <option value="09:00">09:00 - 11:00</option>
          <option value="11:00">11:00 - 13:00</option>
          <option value="13:00">13:00 - 15:00</option>
        </select>
      </div>

      <div class="form-group mx-2">
        <label for="loaiBida">Loại bida:</label>
        <select v-model="loaiBida" class="form-control d-inline-block w-auto">
          <option value="bidaLo">Bida lỗ</option>
          <option value="bidaPang">Bida phăng</option>
          <option value="snooker">Snooker</option>
        </select>
      </div>
    </div>

    <div class="chon-ban mt-4">
      <h3>Chọn bàn:</h3>
      <div class="row ">
        <div v-for="ban in cacBan" :key="ban.id" 
        
             class="col-2 p-3 border text-center cursor-pointer" 
             :class="{ 'bg-success text-white': banDaChon === ban.id }" 
             v-on:click="chonBan(ban.id)">
          <img :src="ban.hinhanh" alt="Hình ảnh bàn" class="img-fluid  " style="height: 80px;">
          <br>
          Bàn
           {{ ban.id }}

        </div>
      </div>
    </div>

    <div v-if="banDaChon" class="mt-4">
      <p>Bạn đã chọn bàn: {{ banDaChon }}</p>
      <p>Ngày: {{ ngayDatBan }}</p>
      <p>Thời gian: {{ gioDatBan }}</p>
      <p>Loại bida: {{ loaiBida }}</p>
      <button v-on:click="xacNhanDatBan" class="btn btn-primary">Xác nhận đặt bàn</button>
    </div>

    <div v-if="thongBaoXacNhan" class="alert alert-success mt-4">
      <h2>{{ thongBaoXacNhan }}</h2>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      ngayDatBan: '',
      gioDatBan: '',
      loaiBida: 'bidaLo',
      banDaChon: null,
      thongBaoXacNhan: '',
      cacBan: [
        { id: 1, hinhanh: 'https://hangtotgiagoc.com/wp-content/uploads/2021/06/z2567704367078_a18d96e2081e4a3ede7864a16f428e94.jpg' },
        { id: 2, hinhanh: 'https://bizweb.dktcdn.net/100/493/915/files/ban-bida-9ft-6-gia-re-tai-quan-ha-dong-ha-noi-2.jpg?v=1695798209669' },
        { id: 3, hinhanh: 'https://sanxuatbia.com/wp-content/uploads/2020/02/b9641ebb-24a1-4162-bf18-097cf5216c88.jpg' },
        { id: 4, hinhanh: 'https://down-vn.img.susercontent.com/file/32c6359125a4a81090cebc0092e3b3a8' },
        { id: 5, hinhanh: 'https://lacdaobilliards.com/wp-content/uploads/2023/02/ban-bida-tonardo-9017-3-1068x800.jpg' },
        { id: 6, hinhanh: 'https://billiardshienvinh.com/wp-content/uploads/2018/07/ggv.jpg' },
      ]
    };
  },
  methods: {
    chonBan(id) {
      this.banDaChon = id;
    },
    xacNhanDatBan() {
      this.thongBaoXacNhan = `Bạn đã đặt bàn s ${this.banDaChon} cho ngày ${this.ngayDatBan} vào lúc ${this.gioDatBan} với loại bida ${this.loaiBida}.`;
    }
  }
}
</script>
