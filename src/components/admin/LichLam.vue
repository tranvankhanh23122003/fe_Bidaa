<template>
  <div class="">
    <h1 class="text-center">Quản lý lịch làm việc</h1>

    <div class="search-form my-4">
      <input type="text" v-model="searchQuery" class="form-control" placeholder="Tìm kiếm lịch làm việc..." />
      <button class="btn btn-primary mt-2" @click="timKiem">Tìm kiếm</button>
    </div>
    <div class="row">
      <div class="col-5">
        <div class="schedule-form my-4">
          <h2 class="text-center">{{ editing ? 'Cập nhật lịch làm việc' : 'Tạo lịch làm việc mới' }}</h2>

          <input type="text" v-model="scheduleForm.userID" class="form-control" placeholder="Nhập ID nhân viên"
            required />
          <input type="date" v-model="scheduleForm.date" class="form-control mt-2" placeholder="Ngày" required />
          <input type="time" v-model="scheduleForm.startTime" class="form-control mt-2" placeholder="Giờ bắt đầu"
            required />
          <input type="time" v-model="scheduleForm.endTime" class="form-control mt-2" placeholder="Giờ kết thúc"
            required />
          <button class="btn btn-success" @click="editing ? capNhat() : taoLich()">
            {{ editing ? 'Cập nhật' : 'Tạo lịch' }}
          </button>
          <button v-if="editing" class="btn btn-secondary mt-3 ml-2" @click="huySua">
            Hủy
          </button>
        </div>
      </div>
      <div class="col-7">
        <div class="card">
          <div class="card-body">
            <div class="schedule-list my-4">
              <h2 class="text-center">Danh sách lịch làm việc</h2>
              <ul class="list-group">
                <li class="list-group-item d-flex justify-content-between align-items-center"
                  v-for="schedule in schedules" :key="schedule.id">
                  <div>
                    <p><b>Người dùng:</b> {{ schedule.userName }}</p>
                    <p><b>Ngày:</b> {{ schedule.date }}</p>
                    <p><b>Bắt đầu:</b> {{ schedule.startTime }} - <b>Kết thúc:</b> {{ schedule.endTime }}</p>
                  </div>
                  <div>
                    <button class="btn btn-warning mx-2" @click="editSchedule(schedule)">
                      Sửa
                    </button>
                    <button class="btn btn-danger" @click="xoaLich(schedule.id)">
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




  </div>
</template>

<script>
import axios from '../../assets/core/BaseRequest'

export default {
  data() {
    return {
      schedules: [],
      scheduleForm: {
        userID: '',
        date: '',
        startTime: '',
        endTime: ''
      },
      searchQuery: "",
      editing: false,
      editingId: null,
    };
  },
  mounted() {
    this.layLich();
  },
  methods: {
    layLich() {

      axios
        .get("lich-lam")
        .then((response) => {
          response
          console.log("response",response );

          this.schedules = response.data.data;
        })
        .catch((error) => {
          console.log(1231231231231232);

          alert('Có lỗi xảy ra khi lấy danh sách lịch: ' + error.response.data.message);
        });
    },
    taoLich() {
      if (!this.scheduleForm.date) {
        alert("Vui lòng nhập ngày.");
        return;
      }

      axios.post("lich-lam", this.scheduleForm)
        .then((response) => {
          if (response.data.status === 201) {
            alert(response.data.message);
            this.resetForm();
            this.layLich();
          }
        })
        .catch((error) => {
          alert('Có lỗi xảy ra khi tạo lịch: ' + error.response.data.message);
        });
    },

    // Xóa lịch làm việc
    xoaLich(id) {
      if (confirm('Bạn có chắc chắn muốn xóa lịch này?')) {
        axios.delete(`lich-lam/${id}`)
          .then((response) => {
            if (response.data.status === 200) {
              alert(response.data.message); // Thông báo
              this.layLich(); // Cập nhật lại danh sách
            }
          })
          .catch((error) => {
            alert('Có lỗi xảy ra khi xóa lịch: ' + error.response.data.message);
          });
      }
    },
    // Tìm kiếm lịch làm việc
    timKiem() {
      axios.post("lich-lam/tim-lich", { abc: this.searchQuery })
        .then((response) => {
          this.schedules = response.data.schedule;
        })
        .catch((error) => {
          alert('Có lỗi xảy ra khi tìm kiếm lịch: ' + error.response.data.message);
        });
    },
    // Sửa lịch làm việc
    editSchedule(schedule) {
      this.scheduleForm = { ...schedule }; // Gán dữ liệu vào form
      this.editing = true;
      this.editingId = schedule.id;
    },
    // Cập nhật lịch làm việc
    capNhat() {
      axios.put(`lich-lam`, { ...this.scheduleForm, id: this.editingId })
        .then((response) => {
          if (response.data.status === 200) {
            alert(response.data.message); // Thông báo
            this.resetForm(); // Xóa form
            this.editing = false;
            this.layLich(); // Cập nhật lại danh sách
          }
        })
        .catch((error) => {
          alert('Có lỗi xảy ra khi cập nhật lịch: ' + error.response.data.message);
        });
    },
    // Hủy chỉnh sửa
    huySua() {
      this.resetForm(); // Reset form
      this.editing = false;
    },
    // Hàm reset form
    resetForm() {
      this.scheduleForm = { userID: '', date: '', startTime: '', endTime: '' }; // Xóa form
    }
  }
};
</script>

<style scoped>
.container {
  max-width: 800px;
  margin: 0 auto;
}

h1 {
  font-size: 2.5rem;
  color: #007bff;
}

.schedule-form,
.search-form {
  background-color: #f8f9fa;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
}

.schedule-list ul {
  padding-left: 0;
}

.schedule-list .list-group-item {
  font-size: 1.2rem;
}

.btn {
  width: 100px;
}

.btn-secondary {
  margin-left: 10px;
}
</style>
