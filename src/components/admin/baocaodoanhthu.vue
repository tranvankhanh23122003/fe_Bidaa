<template>
  <div class="bao-cao-doanh-thu revenue-report">
    <h2 class="text-center">Báo cáo doanh thu</h2>

    <div class="phan-loc filter-section">
      <label for="tu-ngay">Từ ngày:</label>
      <input v-model="boLoc.tuNgay" type="date" id="tu-ngay" class="form-control input-sm" />

      <label for="den-ngay">Đến ngày:</label>
      <input v-model="boLoc.denNgay" type="date" id="den-ngay" class="form-control input-sm" />

      <button v-on:click="locDoanhThu" class="btn btn-primary">Lọc doanh thu</button>
    </div>

    <div class="bang-doanh-thu revenue-table">
      <h3 class="text-center">Doanh thu từ {{ boLoc.tuNgay }} đến {{ boLoc.denNgay }}</h3>
      <table class="table table-striped">
        <thead>
          <tr>
            <th>Ngày</th>
            <th>Số giao dịch</th>
            <th>Doanh thu</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(banGhi, index) in doanhThuDaLoc" :key="index">
            <td>{{ banGhi.ngay }}</td>
            <td>{{ banGhi.giaoDich }}</td>
            <td>{{ banGhi.doanhThu }} VND</td>
          </tr>
        </tbody>
      </table>
    </div>

    <div class="tong-doanh-thu total-revenue">
      <h3>Tổng doanh thu: {{ tongDoanhThu }} VND</h3>
    </div>
  </div>
</template>

<script>
export default {
data() {
  return {
    duLieuDoanhThu: [
      { ngay: '2024-09-01', giaoDich: 15, doanhThu: 500000 },
      { ngay: '2024-09-02', giaoDich: 30, doanhThu: 700000 },
      { ngay: '2024-09-03', giaoDich: 25, doanhThu: 850000 },
      { ngay: '2024-09-04', giaoDich: 50, doanhThu: 400000 },
      { ngay: '2024-09-05', giaoDich: 40, doanhThu: 1000000 },
    ],
    boLoc: {
      tuNgay: '',
      denNgay: '',
    },
    doanhThuDaLoc: [],
  };
},
computed: {
  tongDoanhThu() {
    return this.doanhThuDaLoc.reduce((tong, banGhi) => {
      return tong + banGhi.doanhThu;
    }, 0);
  },
},
methods: {
  locDoanhThu() {
    if (!this.boLoc.tuNgay || !this.boLoc.denNgay) {
      alert('Vui lòng chọn cả hai ngày để lọc.');
      return;
    }
    
    const tuNgay = new Date(this.boLoc.tuNgay);
    const denNgay = new Date(this.boLoc.denNgay);

    this.doanhThuDaLoc = this.duLieuDoanhThu.filter((banGhi) => {
      const ngayBanGhi = new Date(banGhi.ngay);
      return ngayBanGhi >= tuNgay && ngayBanGhi <= denNgay;
    });
  },
},
};
</script>

<style scoped>
.revenue-report {
  max-width: 900px;
  margin: 0 auto;
  padding: 20px;
}

.text-center {
  text-align: center;
}

.filter-section {
  display: flex;
  justify-content: space-between;
  margin-bottom: 20px;
}

.form-control.input-sm {
  padding: 5px;
  width: 150px; 
  font-size: 0.875rem; 
}

.btn-primary {
  padding: 10px 20px;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

.btn-primary:hover {
  background-color: #0056b3;
}

.revenue-table {
  margin-bottom: 20px;
}

.table {
  width: 100%;
  border-collapse: collapse;
}

.table th, .table td {
  padding: 10px;
  text-align: left;
  border-bottom: 1px solid #ddd;
}

.table th {
  background-color: #f4f4f4;
}

.total-revenue {
  text-align: center;
  font-size: 1.5em;
  margin-top: 20px;
}
</style>
