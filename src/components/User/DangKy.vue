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
                            <h3 class="">Đăng Ký Tài Khoản</h3>
                            <p>Bạn đã có tài khoản?
                                <router-link to="/admin/dang-nhap">
                                    <a href="/admin/dang-nhap">Đăng Nhập</a>
                                </router-link>
                            </p>
                        </div>
                        <div class="login-separater text-center mb-4">
                            <hr>
                        </div>
                        <div class="form-body">
                            <div class="row g-3">
                                <div class="col-sm-12">
                                    <label class="form-label">Tài khoản</label>
                                    <input type="email" v-model="khach_hang_create.userName" class="form-control"
                                        placeholder="Nhập vào tk">
                                </div>
                                <div class="col-sm-12">
                                    <label class="form-label">Họ Và Tên</label>
                                    <input type="text" v-model="khach_hang_create.fullName" class="form-control"
                                        placeholder="Nhập vào họ và tên">
                                </div>
                                <div class="col-12">
                                    <label class="form-label">Số Điện Thoại</label>
                                    <input type="text" v-model="khach_hang_create.phoneNumber" class="form-control"
                                        placeholder="Nhập vào sdt">
                                </div>
                                <div class="col-12">
                                    <label class="form-label">Mật Khẩu</label>
                                    <div class="input-group">
                                        <input v-model="khach_hang_create.password" type="password" class="form-control"
                                            placeholder="Nhập vào Mật Khẩu">
                                    </div>
                                </div>
                                <div class="col-12">
                                    <label class="form-label">Nhập Lại Mật Khẩu</label>
                                    <div class="input-group">
                                        <input v-model="confirmPassword" type="password" class="form-control"
                                            placeholder="Nhập lại Mật Khẩu">
                                    </div>
                                </div>
                                <div class="col-12">
                                    <div class="d-grid">
                                        <button type="button" v-on:click="actionDangKy()" class="btn btn-primary">
                                            <i class="bx bx-user"></i>Đăng Kí
                                        </button>
                                    </div>
                                </div>
                            </div>
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
            khach_hang_create: {
                userName: '',
                fullName: '',
                phoneNumber: '',
                password: '',
            },
            confirmPassword: ''  // Biến mới cho "Nhập lại Mật Khẩu"
        }
    },
    methods: {
        actionDangKy() {
            // Kiểm tra nếu mật khẩu và nhập lại mật khẩu khớp nhau
            if (this.khach_hang_create.password !== this.confirmPassword) {
                this.$toast.error('<b>Thông báo</b><span style="margin-top: 5px">Mật khẩu không khớp!</span>');
                return;
            }

            axios
                .post('http://127.0.0.1:8000/api/dang-ky', this.khach_hang_create)
                .then((res) => {
                    if (res.data.status) {
                        var thong_bao = '<b>Thông báo</b><span style="margin-top: 5px">' + res.data.message + '<span>';
                        this.$toast.success(thong_bao);
                        this.khach_hang_create = {};
                        this.confirmPassword = '';  // Đặt lại confirmPassword
                        this.$router.push('/user/dang-nhap');
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
        },
    },
}
</script>

<style></style>
