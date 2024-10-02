<template>
    <div class="nhan_vien-create">
      <h2>Thêm Nhân viên mới</h2>
      <form @submit.prevent="taoNhanVien">
        <div class="form-group">
          <label for="name">Tên nhân viên</label>
          <input type="text" v-model="nhan_vien.name" id="name" class="form-control" required>
        </div>
        <div class="form-group">
          <label for="chuc_vu">Chức vụ</label>
          <input type="text" v-model="nhan_vien.chuc_vu" id="chuc_vu" class="form-control" required>
        </div>
  
        <button type="submit" class="btn btn-success">Thêm nhân viên</button>
      </form>
      <router-link to="/" class="btn btn-secondary mt-3">Quay lại</router-link>
    </div>
  </template> 
  <script>
  export default {
    data() {
      return {
        nhan_vien: {
          name: '',
          chuc_vu: ''
        }
      }
    },
    methods: {
      taoNhanVien() {
        alert(`Nhân viên ${this.nhan_vien.name} đã được thêm!`)
        this.$router.push('/')
      }
    }
  }
  </script>
  
  <style scoped>
  .nhan_vien-create {
    padding: 20px;
  }
  
  .form-group {
    margin-bottom: 15px;
  }
  
  .form-control {
    width: 100%;
    padding: 10px;
    border: 1px solid #ccc;
    border-radius: 4px;
  }
  
  .btn-success {
    background-color: #28a745;
    color: white;
    padding: 5px 10px;
  }
  
  .btn-secondary {
    background-color: #6c757d;
    color: white;
    padding: 5px 10px;
  }
  </style>
  