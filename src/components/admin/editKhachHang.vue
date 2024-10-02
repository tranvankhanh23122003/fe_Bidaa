<template>
  <div class="quan-ly-khach-hang customer-management">
    <h2>Quản lý thông tin khách hàng</h2>
    <div class="row mt-5">
      <div class="col-4">
        <div class="card">
          <div class="card-body">
            <div class="khach-hang-form customer-form">
              <h3>{{ dangChinhSua ? 'Chỉnh sửa khách hàng' : 'Thêm mới khách hàng' }}</h3>
              <form @submit.prevent="dangChinhSua ? capNhatKhachHang() : themKhachHang()">
                <label for="ten">Tên khách hàng:</label>
                <input v-model="khachHang.ten" type="text" placeholder="Nhập tên khách hàng" required />

                <label for="sdt">Số điện thoại:</label>
                <input v-model="khachHang.sdt" type="text" placeholder="Nhập số điện thoại" required />

                <label for="email">Email:</label>
                <input v-model="khachHang.email" type="email" placeholder="Nhập email" required />

                <button type="submit">{{ dangChinhSua ? 'Cập nhật' : 'Thêm khách hàng' }}</button>
                <button v-if="dangChinhSua" @click="huyChinhSua" type="button">Hủy</button>
              </form>
            </div>
          </div>
        </div>
      </div>

      <div class="col-8">
        <div class="card">
          <div class="card-body">
            <div class="danh-sach-khach-hang customer-list">
              <h3>Danh sách khách hàng</h3>
              <table class="table table-bordered">
                <thead>
                  <tr>
                    <th>Tên khách hàng</th>
                    <th>Số điện thoại</th>
                    <th>Email</th>
                    <th>Hành động</th>
                  </tr>
                </thead>
                <tbody>
                  <tr v-for="(khachHang, index) in danhSachKhachHang" :key="index">
                    <td>{{ khachHang.ten }}</td>
                    <td>{{ khachHang.sdt }}</td>
                    <td>{{ khachHang.email }}</td>
                    <td>
                      <button @click="chinhSuaKhachHang(index)">Chỉnh sửa</button>
                      <button class="btn-nguy-hiem btn-danger" @click="xoaKhachHang(index)">Xóa</button>
                    </td>
                  </tr>
                </tbody>
              </table>
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
      danhSachKhachHang: [
        { ten: 'Khánh', sdt: '0123456789', email: 'khanh@gmail.com' },
        { ten: 'Tĩnh', sdt: '0987654321', email: 'tinh@gmail.com' },
      ],
      khachHang: {
        ten: '',
        sdt: '',
        email: '',
      },
      dangChinhSua: false,
      viTriChinhSua: null,
    };
  },
  methods: {
    themKhachHang() {
      this.danhSachKhachHang.push({ ...this.khachHang });
      this.datLaiForm();
    },
    chinhSuaKhachHang(index) {
      this.khachHang = { ...this.danhSachKhachHang[index] };
      this.dangChinhSua = true;
      this.viTriChinhSua = index;
    },
    capNhatKhachHang() {
      this.$set(this.danhSachKhachHang, this.viTriChinhSua, { ...this.khachHang });
      this.datLaiForm();
    },
    xoaKhachHang(index) {
      this.danhSachKhachHang.splice(index, 1);
    },
    huyChinhSua() {
      this.datLaiForm();
    },
    datLaiForm() {
      this.khachHang = { ten: '', sdt: '', email: '' };
      this.dangChinhSua = false;
      this.viTriChinhSua = null;
    },
  },
};
</script>

<style scoped>
.customer-management {
  margin: 0 auto;
  padding: 20px;
}

h2, h3 {
  text-align: center;
}

.customer-form {
  margin-bottom: 20px;
}

label {
  display: block;
  margin: 10px 0 5px;
}

input {
  width: 100%;
  padding: 8px;
  margin-bottom: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
}

button {
  padding: 10px 20px;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  margin-right: 10px;
}

button:hover {
  background-color: #0056b3;
}

table {
  width: 100%;
  border-collapse: collapse;
}

table th, table td {
  padding: 10px;
  text-align: left;
  border-bottom: 1px solid #ddd;
}

table th {
  background-color: #f4f4f4;
}

.btn-nguy-hiem {
  background-color: #dc3545;
  color: white;
}

.btn-nguy-hiem:hover {
  background-color: #c82333;
}

button {
  margin-right: 5px;
  padding: 6px 12px;
}
</style>
