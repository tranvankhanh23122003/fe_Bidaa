<template>
    <div class="nhan_vien-detail" v-if="nhan_vien">
      <h2>Thông tin Nhân viên</h2>
      <p><strong>Tên:</strong> {{ nhan_vien.name }}</p>
      <p><strong>Chức vụ:</strong> {{ nhan_vien.chuc_vu }}</p>
  
      <router-link to="/" class="btn btn-secondary">Quay lại</router-link>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        nhan_vien: null
      }
    },
    created() {
      const id = this.$route.params.id
      const nhan_viens = [
        { id: 1, name: 'Trần Văn Khánh', chuc_vu: 'Quản lý' },
        { id: 2, name: 'Huỳnh Hiếu', chuc_vu: 'Nhân viên phục vụ' },
        { id: 3, name: 'Võ Hưng Tĩnh', chuc_vu: 'Nhân viên thu ngân' }
      ]
      this.nhan_vien = nhan_viens.find(emp => emp.id == id)
    }
  }
  </script>
  
  <style scoped>
  .nhan_vien-detail {
    padding: 20px;
  }
  
  .btn-secondary {
    background-color: #6c757d;
    color: white;
    padding: 5px 10px;
  }
  </style>
  