<template>
  <div class="row row-cols-1 row-cols-lg-2 row-cols-xl-2">
      <div class="col mx-auto">
          <div class="my-4 text-center">
              <img src="https://i.pinimg.com/474x/90/32/9e/90329ee78a7fbe47bcba6d737ac34fc5.jpg" width="180" alt="">
          </div>
          <div class="card">
              <div class="card-body">
                  <div class="border p-4 rounded">
                      <div class="text-center">
                          <h3 class="">Đăng Nhập</h3>
                         
                      </div>
                      <div class="login-separater text-center mb-4">
                          <hr>
                      </div>
                      <div class="form-body">
                          <form class="row g-3">
                              <div class="col-12">
                                  <label class="form-label">Số điện thoại</label>
                                  <input type="text" v-model="admin.phoneNumber" class="form-control"
                                      placeholder="Nhập vào số điện thoại">
                              </div>
                              <div class="col-12">
                                  <label class="form-label">Mật Khẩu</label>
                                  <div class="input-group">
                                      <input v-model="admin.password" type="password" class="form-control"
                                          placeholder="Nhập vào Mật Khẩu">
                                  </div>
                              </div>
                              <div class="col-12">
                                  <div class="d-grid">
                                      <button v-on:click="actionDangNhap()" type="button" class="btn btn-primary">
                                          <i class="bx bx-user"></i>Đăng Nhập
                                      </button>
                                  </div>
                              </div>
                          </form>
                      </div>
                  </div>
              </div>
          </div>
      </div>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  data() {
      return {
          admin: {} 
      }
  },

  methods: {
      actionDangNhap() {
          axios
              .post('http://127.0.0.1:8000/api/dang-nhap', this.admin) 
              .then((res) => {
                  if (res.data.status) {
                      var thong_bao = '<b>Thông báo</b><span style="margin-top: 5px">' + res.data.message + '<span>';
                      this.$toast.success(thong_bao);
                      this.admin = {}; 
                      localStorage.setItem('token', res.data.token);
                      localStorage.setItem('ten_admin', res.data.user.name);
this.$router.push('/admin/ban-bida');

                  } else {
                      var thong_bao = '<b>Thông báo</b><span style="margin-top: 5px">' + res.data.message + '<span>';
                      this.$toast.error(thong_bao);
                  }
              })
              .catch((errors) => {
                  const listErrors = errors.response.data.errors;
                  Object.values(listErrors).forEach((value) => {
                      var thong_bao = '<b>Thông báo</b><span style="margin-top: 5px">' + value + '<span>';
                      this.$toast.error(thong_bao);
                  })
              });
      }
  },
}
</script>

<style></style>