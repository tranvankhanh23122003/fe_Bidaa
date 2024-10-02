<template>
    <div class="luong-nhanvien">
      <h1>Quản Lý Lương Nhân Viên Bida 🎯</h1>
      <div class="row mt-5">
        <div class="col-4">
          <div class="card">
            <div class="card-body">
              <div class="add-nhanvien-form">
        <h2>Thêm Nhân Viên Mới ✨</h2>
        <input v-model="newnhanvien.name" placeholder="Tên nhân viên" />
        <input v-model="newnhanvien.chuc_vu" placeholder="Chức vụ" />
        <input v-model="newnhanvien.muc_luong" type="number" placeholder="Lương cơ bản" />
        <input v-model="newnhanvien.ngay_cong" type="number" placeholder="Ngày công" />
        <button @click="addnhanvien">Thêm</button>
      </div>
            </div>
          </div>
         
        </div>
        <div class="col-8">
          <div class="card">
            <div class="card-body">
              <h2> Danh Sách Lương Nhân Viên</h2>
          <table>
        <thead>
          <tr>
            <th>Tên nhân viên</th>
            <th>Chức vụ</th>
            <th>Lương cơ bản</th>
            <th>Ngày công</th>
            <th>Lương tổng</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(nhanvien, index) in nhanviens" :key="index">
            <td>{{ nhanvien.name }}</td>
            <td>{{ nhanvien.chuc_vu }}</td>
            <td>{{ nhanvien.muc_luong }}</td>
            <td>{{ nhanvien.ngay_cong }}</td>
            <td>{{ tinhTongTienLuong(nhanvien) }}</td>
          </tr>
        </tbody>
      </table>
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
        nhanviens: [
          { name: 'Nguyễn Văn A', chuc_vu: 'Quản lý', muc_luong: 10000000, ngay_cong: 26 },
          { name: 'Trần Thị B', chuc_vu: 'Nhân viên phục vụ', muc_luong: 7000000, ngay_cong: 24 },
        ],
        newnhanvien: {
          name: '',
          chuc_vu: '',
          muc_luong: 0,
          ngay_cong: 0,
        },
      };
    },
    methods: {
      tinhTongTienLuong(nhanvien) {
        return nhanvien.muc_luong * (nhanvien.ngay_cong / 26); 
      },
      addnhanvien() {
        if (this.newnhanvien.name && this.newnhanvien.chuc_vu) {
          this.nhanviens.push({ ...this.newnhanvien });
          this.newnhanvien = { name: '', chuc_vu: '', muc_luong: 0, workingDays: 0 };
        } else {
          alert('Vui lòng nhập đầy đủ thông tin nhân viên! ');
        }
      },
    },
  };
  </script>
  <style scoped>
  .luong-nhanvien {
    margin: 0 auto;
    text-align: center;
  }
  
  table {
    width: 100%;
    border-collapse: collapse;
  }
  
  th, td {
    padding: 10px;
    border: 1px solid #ddd;
  }
  
  input {
    margin: 5px;
    padding: 10px;
    width: calc(100% - 22px);
  }
  
  button {
    margin-top: 10px;
    padding: 10px 20px;
    background-color: #4CAF50;
    color: white;
    border: none;
    cursor: pointer;
  }
  
  button:hover {
    background-color: #45a049;
  }
  </style>
  
  
  