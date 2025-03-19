<!-- <template>
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
          <img :src="ban.hinhanh" alt="Hình ảnh bàn" class="img-fluid  " style="height: 100px;">
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
</script> -->
<template>
  <div class="container">
    <h1 class="text-center">Đặt bàn trực tuyến</h1>

    <div class="form-container">
      <div class="form-group">
        <label>Ngày:</label>
        <input type="date" v-model="reservationDate" class="form-control" />
      </div>

      <div class="form-group">
        <label>Thời gian:</label>
        <select v-model="reservationTime" class="form-control">
          <option value="07:00">07:00 - 09:00</option>
          <option value="09:00">09:00 - 11:00</option>
          <option value="11:00">11:00 - 13:00</option>
          <option value="13:00">13:00 - 15:00</option>
        </select>
      </div>

      <div class="form-group">
        <label>Loại bida:</label>
        <select v-model="billiardType" class="form-control">
          <option value="bidaLo">Bida lỗ</option>
          <option value="bidaPang">Bida phăng</option>
          <option value="snooker">Snooker</option>
        </select>
      </div>
    </div>

    <h3 class="text-center mt-4">Chọn bàn:</h3>
    <div class="table-container">
      <div v-for="table in tables" :key="table.id"
           class="table-card"
           :class="{ 'selected': selectedTable === table.id }"
           @click="selectTable(table.id)">
        <img :src="table.image" alt="Bàn bida">
        <p>Bàn {{ table.id }}</p>
      </div>
    </div>

    <div v-if="selectedTable" class="summary">
      <p><strong>Bàn đã chọn:</strong> {{ selectedTable }}</p>
      <p><strong>Ngày:</strong> {{ reservationDate }}</p>
      <p><strong>Thời gian:</strong> {{ reservationTime }}</p>
      <p><strong>Loại bida:</strong> {{ billiardType }}</p>
      <button @click="confirmReservation" class="btn btn-primary">Xác nhận đặt bàn</button>
      <button @click="deleteReservation" class="btn btn-danger">Hủy đặt bàn</button>
    </div>

    <div v-if="confirmationMessage" class="alert alert-success mt-4">
      <h2>{{ confirmationMessage }}</h2>
    </div>
  </div>
</template>

<script>
import axios from '../../assets/core/BaseRequest';

export default {
  data() {
    return {
      reservationDate: '',
      reservationTime: '',
      billiardType: 'bidaLo',
      selectedTable: null,
      confirmationMessage: '',
      tables: []
    };
  },
  methods: {
    selectTable(id) {
      this.selectedTable = id;
    },
    confirmReservation() {
      if (!this.reservationDate || !this.reservationTime || !this.selectedTable) {
        alert('Vui lòng chọn đầy đủ thông tin trước khi đặt bàn.');
        return;
      }

      const data = {
        booking_date: this.reservationDate,
        booking_time: this.reservationTime,
        billiard_type: this.billiardType,
        table_id: this.selectedTable
      };

      axios.post('dat-ban', data)
        .then(response => {
          this.confirmationMessage = `Bạn đã đặt bàn ${this.selectedTable} thành công vào ngày ${this.reservationDate} lúc ${this.reservationTime}.`;
        })
        .catch(error => {
          console.error('Lỗi khi đặt bàn:', error);
        });
    },
    deleteReservation() {
      if (!this.selectedTable) {
        alert('Vui lòng chọn bàn để hủy đặt.');
        return;
      }

      axios.delete(`dat-ban/${this.selectedTable}`)
        .then(response => {
          this.confirmationMessage = 'Đặt bàn đã được hủy thành công!';
        })
        .catch(error => {
          console.error('Lỗi khi hủy đặt bàn:', error);
        });
    },
    fetchTables() {
      axios.get('ban-bida')
        .then(response => {
          this.tables = response.data.data
        })
        .catch(error => {
          console.error('Lỗi khi lấy danh sách bàn:', error);
        });
    }
  },
  mounted() {
    this.fetchTables();
  }
};
</script>

<style scoped>
.container {
  max-width: 800px;
  margin: auto;
}

.form-container {
  display: flex;
  justify-content: space-between;
  gap: 10px;
}

.table-container {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 15px;
  margin-top: 20px;
}

.table-card {
  width: 120px;
  padding: 10px;
  text-align: center;
  border: 2px solid #ddd;
  cursor: pointer;
  border-radius: 5px;
  transition: 0.3s;
}

.table-card img {
  width: 100px;
  height: 100px;
}

.table-card.selected {
  background-color: #28a745;
  color: white;
  border-color: #218838;
}

.summary {
  margin-top: 20px;
  text-align: center;
}
</style>
