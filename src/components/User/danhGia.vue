<template>
  <div class="container mt-5">
    <h1 class="text-center mb-4">Đánh Giá Phòng Chơi</h1>
    <div class="row">
      <div class="col-5">
        <div class="rating-box p-3 rounded bg-light border">
          <h3 class="mb-3">{{ isEditing ? 'Chỉnh Sửa Đánh Giá' : 'Để lại đánh giá của bạn' }}</h3>
          <form @submit.prevent="isEditing ? capNhatDanhGia() : guiDanhGia()">
            <div class="mb-3">
              <input v-model="tenNguoiDung" class="form-control" placeholder="Nhập tên của bạn" required />
            </div>
            <div class="mb-3">
              <textarea v-model="noiDungDanhGia" class="form-control" placeholder="Nhập nội dung đánh giá của bạn" required></textarea>
            </div>
            <div class="mb-3">
              <input v-model="tableId" class="form-control" placeholder="Nhập ID Bàn" required />
            </div>
            <button type="submit" class="btn btn-success">{{ isEditing ? 'Cập Nhật' : 'Gửi Đánh Giá' }}</button>
          </form>
          <div v-if="errorMessage" class="alert alert-danger mt-3">{{ errorMessage }}</div>
        </div>
      </div>
      <div class="col-7">
        <div class="card">
          <h3 class="mb-3">Danh Sách Đánh Giá</h3>
          <div class="card-body">
            <div class="reviews-list mt-5">
              <div class="review mb-3" v-for="(danhGia, index) in danhSachDanhGia" :key="index">
               <p><strong> ID Người Dùng:</strong>{{ danhGia.userID }} </p> 
                <p>   <strong>Nội Dung :</strong> {{ danhGia.content }}</p>
                <p><strong>ID Bàn:</strong> {{ danhGia.tableID }}</p>
                <p><strong>Đánh giá:</strong> {{ danhGia.rate }} sao</p>
                <button class="btn btn-warning" @click="editDanhGia(danhGia)">Chỉnh sửa</button>
                <button class="btn btn-danger" @click="xoaDanhGia(danhGia.id)">Xóa</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from '../../assets/core/BaseRequest';

export default {
  data() {
    return {
      tenNguoiDung: '',
      noiDungDanhGia: '',
      tableId: '',
      danhSachDanhGia: [],
      errorMessage: '',
      isEditing: false,
      currentId: null 
    };
  },
  methods: {
    async guiDanhGia() {
      const danhGiaMới = {
        tableID: this.tableId,
        userID: this.tenNguoiDung,
        content: this.noiDungDanhGia,
        rate: 5 
      };

      try {
        await axios.post('danh-gia', danhGiaMới);
        await this.fetchDanhGia();
        this.resetForm();
      } catch (error) {
        this.errorMessage = "Có lỗi xảy ra khi gửi đánh giá: " + (error.response ? error.response.data.message : error);
      }
    },
    async capNhatDanhGia() {
      const danhGiaCapNhat = {
        id: this.currentId,
        tableID: this.tableId,
        userID: this.tenNguoiDung,
        content: this.noiDungDanhGia,
        rate: 5 
      };

      try {
        await axios.put('danh-gia', danhGiaCapNhat);
        await this.fetchDanhGia();
        this.resetForm();
      } catch (error) {
        this.errorMessage = "Có lỗi xảy ra khi cập nhật đánh giá: " + (error.response ? error.response.data.message : error);
      }
    },
    async xoaDanhGia(id) {
      if (confirm("Bạn có chắc chắn muốn xóa đánh giá này?")) {
        try {
          await axios.delete(`danh-gia/${id}`);
          await this.fetchDanhGia();
        } catch (error) {a
          this.errorMessage = "Có lỗi xảy ra khi xóa đánh giá: " + (error.response ? error.response.data.message : error);
        }
      }
    },
    editDanhGia(danhGia) {
      this.tenNguoiDung = danhGia.userID;
      this.noiDungDanhGia = danhGia.content;
      this.tableId = danhGia.tableID;
      this.currentId = danhGia.id; 
      this.isEditing = true; 
    },
    resetForm() {
      this.tenNguoiDung = '';
      this.noiDungDanhGia = '';
      this.tableId = '';
      this.errorMessage = '';
      this.isEditing = false;
      this.currentId = null; 
    },
    async fetchDanhGia() {
      try {
        const response = await axios.get('danh-gia');
        this.danhSachDanhGia = response.data.data;
      } catch (error) {
        console.error("Có lỗi xảy ra khi lấy danh sách đánh giá:", error);
      }
    }
  },
  mounted() {
    this.fetchDanhGia();
  }
};
</script>

<style scoped>
.review {
  border: 1px solid #ddd;
  padding: 10px;
  border-radius: 5px;
  background-color: #f9f9f9;
}
.alert {
  margin-top: 10px;
}
</style>
