<template>
  <div class="lich-su-dat-ban container mt-5">
    <h1 class="text-center mb-4">Lịch Sử Đặt Bàn</h1>
    <table class="table table-bordered">
      <thead class="thead-dark">
        <tr>
          <th scope="col">Thời Gian</th>
          <th scope="col">Loại Bida</th>
          <th scope="col">Số Tiền (VND)</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(datBan, index) in lichSuDatBan" :key="index">
          <td>{{ datBan.thoiGian }}</td>
          <td>{{ datBan.loaiBida }}</td>
          <td>{{ datBan.soTien.toLocaleString() }}</td>
        </tr>
      </tbody>
    </table>

    <div class="thoi-gian-con-lai text-center">
      <h2>Thời Gian Còn Lại: <span class="text-danger">{{ thoiGianConLai }}</span></h2>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      lichSuDatBan: [
        { thoiGian: '12:00 20/09/2024', loaiBida: 'Bida Lỗ', soTien: 1000000 },
        { thoiGian: '18:00 21/09/2024', loaiBida: 'Bida Phăng', soTien: 1500000 },
        { thoiGian: '19:30 22/09/2024', loaiBida: 'Snooker', soTien: 1200000 },
      ],
      thoiGianConLai: '', 
      interval: null,
    };
  },
  methods: {
    tinhThoiGianConLai() {
      const thoiDiemKetThuc = new Date('2024-09-25T23:59:59'); 
      const thoiGianHienTai = new Date();
      const khoangThoiGian = thoiDiemKetThuc - thoiGianHienTai;

      if (khoangThoiGian <= 0) {
        this.thoiGianConLai = "Đã hết thời gian";
        clearInterval(this.interval);
        return;
      }

      const gio = Math.floor(khoangThoiGian / (1000 * 60 * 60));
      const phut = Math.floor((khoangThoiGian % (1000 * 60 * 60)) / (1000 * 60));
      const giay = Math.floor((khoangThoiGian % (1000 * 60)) / 1000);

      this.thoiGianConLai = `${gio} giờ ${phut} phút ${giay} giây`;
    },
  },
  mounted() {
    this.tinhThoiGianConLai();
    this.interval = setInterval(this.tinhThoiGianConLai, 1000); 
  },
  beforeDestroy() {
    clearInterval(this.interval); 
  },
};
</script>

<style scoped>
.thoi-gian-con-lai h2 {
  font-weight: bold;
  margin-top: 20px;
}
</style>
