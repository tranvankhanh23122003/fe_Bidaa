<template>
  <h1>Quản lý Nhân viên</h1>

  <div class="row">
    <div class="col-4">
      <div class="card">
        <div class="card-body">
          <div class="form-add-nhan_vien">
            <h3>Thêm Nhân viên mới</h3>
            <form @submit.prevent="them_nhan_vien">
              <div class="form-group">
                <label for="name">Tên nhân viên:</label>
                <input type="text" v-model="nhan_vien_moi.name" id="name" class="form-control" required />
              </div>
              <div class="form-group">
                <label for="chuc_vu">Chức vụ:</label>
                <input type="text" v-model="nhan_vien_moi.chuc_vu" id="chuc_vu" class="form-control" required />
              </div>
              <button type="submit" class="btn btn-primary mt-3">Thêm Nhân viên</button>
            </form>
          </div>
        </div>
      </div>
    </div>

    <div class="col-8">
      <div class="card">
        <div class="card-body">
          <div class="nhan_vien-list p-3">
            <table class="table table-bordered mt-3">
              <thead>
                <tr>
                  <th>Tên Nhân viên</th>
                  <th>Chức vụ</th>
                  <th>Hành động</th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="nhan_vien in nhan_vien" :key="nhan_vien.id">
                  <td>{{ nhan_vien.name }}</td>
                  <td>{{ nhan_vien.chuc_vu }}</td>
                  <td>
                    <button class="btn btn-warning btn-sm me-2" @click="openModal(nhan_vien)">Sửa</button>
                    <button class="btn btn-danger btn-sm" @click="deletenhan_vien(nhan_vien.id)">Xóa</button>
                  </td>
                </tr>
              </tbody>
            </table>

            <p v-if="nhan_vien.length === 0">Không có nhân viên nào được tìm thấy.</p>

            <div v-if="showModal" class="modal d-flex align-items-center justify-content-center">
              <div class="modal-content position-relative">
                <span class="close" @click="closeModal">&times;</span>
                <h3>Sửa Thông tin Nhân viên</h3>
                <div class="form-group">
                  <label for="edit_name">Tên nhân viên:</label>
                  <input type="text" v-model="nhan_vien_sua.name" id="edit_name" class="form-control" />
                </div>
                <div class="form-group">
                  <label for="edit_chuc_vu">Chức vụ:</label>
                  <input type="text" v-model="nhan_vien_sua.chuc_vu" id="edit_chuc_vu" class="form-control" />
                </div>
                <button class="btn btn-primary mt-2" @click="updateNhanVien">Cập nhật</button>
              </div>
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
      nhan_vien: [
        { id: 1, name: 'Trần Văn Khánh', chuc_vu: 'Quản lý' },
        { id: 2, name: 'Võ Hưng Tĩnh', chuc_vu: 'Nhân viên phục vụ' },
        { id: 3, name: 'Huỳnh Hiếu', chuc_vu: 'Nhân viên thu ngân' }
      ],
      nhan_vien_moi: {
        name: '',
        chuc_vu: ''
      },
      nhan_vien_sua: {
        id: null,
        name: '',
        chuc_vu: ''
      },
      showModal: false
    }
  },
  methods: {
    them_nhan_vien() {
      if (this.nhan_vien_moi.name && this.nhan_vien_moi.chuc_vu) {
        const newId = this.nhan_vien.length + 1;
        this.nhan_vien.push({
          id: newId,
          name: this.nhan_vien_moi.name,
          chuc_vu: this.nhan_vien_moi.chuc_vu
        });
        this.nhan_vien_moi.name = '';
        this.nhan_vien_moi.chuc_vu = '';
      }
    },

    openModal(nhan_vien) {
      this.nhan_vien_sua = { ...nhan_vien };
      this.showModal = true;
    },

    closeModal() {
      this.showModal = false;
    },

    updateNhanVien() {
      const index = this.nhan_vien.findIndex(nv => nv.id === this.nhan_vien_sua.id);
      if (index !== -1) {
        this.$set(this.nhan_vien, index, this.nhan_vien_sua);
      }
      this.closeModal();
    },

    deletenhan_vien(id) {
      this.nhan_vien = this.nhan_vien.filter(nhan_vien => nhan_vien.id !== id);
    }
  }
}
</script>

<style scoped>
.nhan_vien-list {
  padding: 20px;
}

.table {
  width: 100%;
  margin-top: 20px;
  border-collapse: collapse;
}

.table-bordered {
  border: 1px solid #ddd;
}

.table th,
.table td {
  padding: 10px;
  border: 1px solid #ddd;
}

.btn {
  padding: 5px 10px;
}

.btn-primary {
  background-color: #007bff;
  color: white;
}

.btn-warning {
  background-color: #ffc107;
  color: white;
}

.btn-danger {
  background-color: #dc3545;
  color: white;
}

.modal {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
}

.modal-content {
  background-color: white;
  padding: 20px;
  border-radius: 5px;
  width: 400px;
}

.position-relative {
  position: relative;
}

.close {
  position: absolute;
  top: 10px;
  right: 10px;
  cursor: pointer;
  font-size: 18px;
}

.me-2 {
  margin-right: 5px;
}

.mt-2, .mt-3 {
  margin-top: 10px;
}
</style>
