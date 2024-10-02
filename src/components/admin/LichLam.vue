<template>
    <div id="app" class="container-fluid">
      <div class="row">
        <div class="col-md-2 sidebar">
          <h4>Bida - Quản lý Nhân viên</h4>
          <ul class="nav flex-column">
            <li class="nav-item">
              <a class="nav-link active" href="#">Tổng quan</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">Danh sách nhân viên</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">Quản lý lịch làm việc</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">Quản lý ca làm</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">Quản lý ngày nghỉ</a>
            </li>
          </ul>
        </div>
  
        <div class="col-md-10 main-content">
          <h2>Lịch Làm Việc</h2>
          <div class="filter-section">
            <div class="form-group">
              <label for="employeeGroup">Chọn nhóm nhân viên:</label>
              <select v-model="chon_nhom" class="form-control" id="employeeGroup">
                <option value="all">Tất cả</option>
                <option v-for="group in nhom_nhan_vien" :key="group.id" :value="group.name">
                  {{ group.name }}
                </option>
              </select>
            </div>
  
            <div class="form-group">
              <label for="weekSelect">Chọn tuần:</label>
              <input type="week" v-model="chon_tuan" class="form-control" id="weekSelect">
            </div>
  
            <button class="btn btn-primary mt-2" @click="fetchlich">Xem lịch</button>
          </div>
  
          <div class="lich-table mt-2">
            <h3>Lịch làm việc tuần: {{ chon_tuan }}</h3>
            <table class="table table-bordered">
              <thead>
                <tr>
                  <th>Ca</th>
                  <th v-for="day in ngay_trong_tuan" :key="day">{{ day }}</th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="shift in shifts" :key="shift.name">
                  <td>{{ shift.name }}</td>
                  <td v-for="day in ngay_trong_tuan" :key="day + shift.name">
                    <div class="shift-info">
                      <span>{{ getEmployee(day, shift.name) }}</span>
                      <button class="btn btn-link" @click="assignEmployee(day, shift.name)">+ Thêm nhân viên</button>
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        chon_nhom: 'all',
        chon_tuan: '',
        nhom_nhan_vien: [
          { id: 1, name: 'Nhóm A' },
          { id: 2, name: 'Nhóm B' },
        ],
        ngay_trong_tuan: ['Thứ 2', 'Thứ 3', 'Thứ 4', 'Thứ 5', 'Thứ 6', 'Thứ 7', 'Chủ Nhật'],
        shifts: [
          { name: 'Ca sáng', time: '07:00 - 15:00' },
          { name: 'Ca tối', time: '15:00 - 23:00' },
        ],
        lich: {},
      };
    },
    methods: {
      fetchlich() {
        this.lich = {
          'Thứ 2': { 'Ca 1': 'Trần Văn Khánh', 'Ca 2': 'Trần Thị B' },
          'Thứ 3': { 'Ca 1': 'Võ Hưng Tĩnh', 'Ca 2': 'Lê Thị D' },
          'Thứ 4': { 'Ca 1': 'Huỳnh Hiếu', 'Ca 2': 'Trần Thị B' },
          'Thứ 5': { 'Ca 1': 'Trần Phước Văn ', 'Ca 2': 'Lê Thị D' },
          'Thứ 6': { 'Ca 1': 'Nguyễn Văn A', 'Ca 2': 'Trần Thị B' },
          'Thứ 7': { 'Ca 1': 'Phạm Văn c', 'Ca 2': 'Lê Thị D' },
          'Chủ Nhật': { 'Ca 1': 'Lê Thị A', 'Ca 2': 'Trần Thị B' },
        };
      },
      getEmployee(day, shift) {
        return this.lich[day] ? this.lich[day][shift] || 'Trống' : 'Trống';
      },
      assignEmployee(day, shift) {
        alert(`Thêm nhân viên cho ${shift} vào ${day}`);
      },
    },
  };
  </script>
  
 <style>
     
 </style>