<template>
  <div class="support container py-4">
    <h1 class="text-center">Hỗ trợ Khách Hàng</h1>
    <div class="row mt-5">
      <div class="col-5">
        <div class="card">
          <div class="card-body">
            <div class="form-support">
              <h3>Gửi yêu cầu hỗ trợ</h3>
              <form v-on:submit.prevent="submityeu_cau">
                <div class="form-group">
                  <label for="name">Tên Khách Hàng:</label>
                  <input type="text" v-model="yeu_cau_moi.name" id="name" class="form-control" required />
                </div>

                <div class="form-group">
                  <label for="phone">Số Điện Thoại:</label>
                  <input type="tel" v-model="yeu_cau_moi.phone" id="phone" class="form-control" required />
                </div>

                <div class="form-group">
                  <label for="message">Nội dung yêu cầu:</label>
                  <textarea v-model="yeu_cau_moi.message" id="message" class="form-control" rows="4"></textarea>
                </div>
                <button type="submit" class="btn btn-primary mt-2">Gửi Yêu Cầu</button>
              </form>
            </div>
          </div>
        </div>
      </div>

      <div class="col-7">
        <div class="card">
          <div class="card-body">
            <div class="support-list">
              <h3>Danh sách yêu cầu hỗ trợ</h3>
              <div class="d-flex flex-wrap gap-3">
                <div class="card p-3 w-100" style="flex: 0 0 calc(33.333% - 15px);" v-for="yeu_cau in yeu_caus" :key="yeu_cau.id">
                  <h4>{{ yeu_cau.name }}</h4>
                  <p><strong>Số Điện Thoại:</strong> {{ yeu_cau.phone }}</p>
                  <p><strong>Nội dung:</strong> {{ yeu_cau.message }}</p>
                  <p><strong>Trạng thái:</strong> 
                    <span :class="{'text-danger': yeu_cau.status === 'Chưa xử lý', 'text-warning': yeu_cau.status === 'Đang xử lý', 'text-success': yeu_cau.status === 'Đã xử lý'}">
                      {{ yeu_cau.status }}
                    </span>
                  </p>
                  <button class="btn btn-info btn-sm" v-on:click="openModal(yeu_cau)">Sửa</button>
                  <button class="btn btn-danger btn-sm mt-2" v-on:click="xoaYeuCau(yeu_cau.id)">Xóa</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div v-if="showModal" class="modal d-flex justify-content-center align-items-center">
      <div class="modal-content">
        <span class="close" v-on:click="closeModal">&times;</span>
        <h3>Sửa trạng thái yêu cầu</h3>
        <div class="form-group">
          <label for="status">Trạng thái:</label>
          <select v-model="selectedyeu_cau.status" id="status" class="form-control">
            <option value="Chưa xử lý">Chưa xử lý</option>
            <option value="Đang xử lý">Đang xử lý</option>
            <option value="Đã xử lý">Đã xử lý</option>
          </select>
        </div>
        <button class="btn btn-primary " v-on:click="capNhatYeuCau">Cập nhật</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      yeu_cau_moi: {
        name: '',
        phone: '', 
        message: ''
      },
      yeu_caus: [
        { id: 1, name: 'Trần Văn Khánh', phone: '0901234567', message: 'ok', status: 'Chưa xử lý' }, 
        { id: 2, name: 'Trần Phước Văn', phone: '0912345678', message: 'ok', status: 'Đang xử lý' } 
      ],
      showModal: false,
      selectedyeu_cau: null,
    }
  },
  methods: {
    submityeu_cau() {
      if (this.yeu_cau_moi.name && this.yeu_cau_moi.phone && this.yeu_cau_moi.message) {
        const newId = this.yeu_caus.length + 1;
        this.yeu_caus.push({
          id: newId,
          ...this.yeu_cau_moi,
          status: 'Chưa xử lý'
        });
        this.yeu_cau_moi.name = '';
        this.yeu_cau_moi.phone = ''; 
        this.yeu_cau_moi.message = '';
      }
    },
    openModal(yeu_cau) {
      this.selectedyeu_cau = { ...yeu_cau };
      this.showModal = true;
    },
    closeModal() {
      this.showModal = false;
    },
    capNhatYeuCau() {
      const index = this.yeu_caus.findIndex(req => req.id === this.selectedyeu_cau.id);
      if (index !== -1) {
        this.$set(this.yeu_caus, index, this.selectedyeu_cau);
      }
      this.closeModal();
    },
    xoaYeuCau(id) {
      this.yeu_caus = this.yeu_caus.filter(yeu_cau => yeu_cau.id !== id);
    }
  }
}
</script>

<style scoped>
.modal {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
}

.modal-content {
  background-color: white;
  padding: 20px;
  border-radius: 5px;
  width: 400px;
  position: relative;
}

.close {
  position: absolute;
  top: 10px;
  right: 10px;
  cursor: pointer;
  font-size: 18px;
}
</style>
