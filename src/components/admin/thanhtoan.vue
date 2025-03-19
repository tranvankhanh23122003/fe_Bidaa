<template>
  <div class="container">
    <h1 class="text-center">Quản lý Hóa Đơn</h1>

    <div class="search-form my-4">
      <input type="text" v-model="searchQuery" class="form-control"
        placeholder="Tìm kiếm hóa đơn theo tên hoặc số điện thoại..." />
      <button class="btn btn-primary mt-2" @click="timKiemHoaDon">Tìm kiếm</button>
    </div>

    <div class="row">
      <div class="col-5">
        <div class="bill-form my-4">
          <h2 class="text-center">{{ editing ? 'Cập nhật hóa đơn' : 'Tạo hóa đơn mới' }}</h2>

          <input type="text" v-model="billForm.customerName" class="form-control" placeholder="Nhập tên khách hàng"
            required />
          <input type="text" v-model="billForm.customerPhone" class="form-control mt-2" placeholder="Số điện thoại"
            required />
          <input type="number" v-model="billForm.totalAmount" class="form-control mt-2" placeholder="Tổng tiền (VND)"
            required />

          <button class="btn btn-success mt-3" @click="editing ? capNhatHoaDon() : taoHoaDon()">
            {{ editing ? 'Cập nhật' : 'Tạo hóa đơn' }}
          </button>
          <button v-if="editing" class="btn btn-secondary mt-3 ml-2" @click="huyChinhSua">
            Hủy
          </button>
        </div>
      </div>

      <div class="col-7">
        <div class="card">
          <div class="card-body">
            <h2 class="text-center">Danh sách Hóa Đơn</h2>
            <ul class="list-group">
              <li class="list-group-item d-flex justify-content-between align-items-center" v-for="bill in bills"
                :key="bill.id">
                <div>
                  <p><b>Khách hàng:</b> {{ bill.customerName }}</p>
                  <p><b>Số điện thoại:</b> {{ bill.customerPhone }}</p>
                  <p><b>Tổng tiền:</b> {{ bill.totalAmount }} VND</p>
                </div>
                <div>
                  <button class="btn btn-warning mx-2" @click="batDauChinhSua(bill)">
                    Sửa
                  </button>
                  <button class="btn btn-danger" @click="xoaHoaDon(bill.id)">
                    Xóa
                  </button>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from '../../assets/core/BaseRequest'

export default {
  data() {
    return {
      bills: [],
      billForm: {
        customerName: '',
        customerPhone: '',
        totalAmount: '',
      },
      searchQuery: "",
      editing: false,
      editingId: null,
    };
  },
  mounted() {
    this.layHoaDon();
  },
  methods: {
    layHoaDon() {
      axios.get("hoa-don")
        .then((response) => {
          this.bills = response.data.data;
        })
        .catch((error) => {
          alert('Có lỗi xảy ra khi lấy danh sách hóa đơn: ' + error.response.data.message);
        });
    },

    taoHoaDon() {
      if (!this.billForm.customerName || !this.billForm.customerPhone || !this.billForm.totalAmount) {
        alert("Vui lòng điền đầy đủ thông tin.");
        return;
      }
      const data = {
        ...this.billForm,
      };

      console.log('oke', data);
      

      axios.post("hoa-don", data)
        .then((response) => {
          if (response.data.status === 201) {
            alert(response.data.message);
            this.resetForm();
            this.layHoaDon();
          }
        })
        .catch((error) => {
          alert('Có lỗi xảy ra khi tạo hóa đơn: ' + error.response.data.message);
        });
    },

    batDauChinhSua(bill) {
      this.billForm = { ...bill };
      this.editing = true;
      this.editingId = bill.id;
    },

    capNhatHoaDon() {
      axios.put(`hoa-don`, { ...this.billForm, id: this.editingId })
        .then((response) => {
          if (response.data.status === 200) {
            alert(response.data.message);
            this.resetForm();
            this.editing = false;
            this.layHoaDon();
          }
        })
        .catch((error) => {
          alert('Có lỗi xảy ra khi cập nhật hóa đơn: ' + error.response.data.message);
        });
    },

    xoaHoaDon(id) {
      if (confirm('Bạn có chắc chắn muốn xóa hóa đơn này?')) {
        axios.delete(`hoa-don/${id}`)
          .then((response) => {
            if (response.data.status === 200) {
              alert(response.data.message);
              this.layHoaDon();
            }
          })
          .catch((error) => {
            alert('Có lỗi xảy ra khi xóa hóa đơn: ' + error.response.data.message);
          });
      }
    },

    timKiemHoaDon() {
      axios.post("hoa-don/tim-hoaDon", { keyword: this.searchQuery })
        .then((response) => {
          this.bills = response.data.data;
        })
        .catch((error) => {
          alert('Có lỗi xảy ra khi tìm kiếm hóa đơn: ' + error.response.data.message);
        });
    },

    huyChinhSua() {
      this.resetForm();
      this.editing = false;
    },

    resetForm() {
      this.billForm = { customerName: '', customerPhone: '', totalAmount: '' };
    }
  }
};
</script>

<style scoped>
.container {
  max-width: 1000px;
  margin: 0 auto;
}

h1 {
  font-size: 2.5rem;
  color: #007bff;
}

.bill-form,
.search-form {
  background-color: #f8f9fa;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
}

.bill-form input {
  width: 100%;
  margin-bottom: 10px;
  padding: 10px;
  border-radius: 5px;
  border: 1px solid #ccc;
}

.list-group-item {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

button {
  padding: 8px 16px;
  margin-left: 5px;
}
</style>
