<template lang="">
    <div>
        <h3>
            Quản lý phòng BI DA
        </h3>
        <div class="row">
            <div class="col-4 mt-3">
                <div class="card">
                    <div class="card-header">
                        <h5>Thêm mới phòng</h5>
                    </div>
                    <div class="card-body">
                        <table class="table table-bordered">
                            <tbody>
                                <tr>
                                    <td>
                                        <label class="mx-4 form text-nowrap">Nhập số phòng:</label>
                                    </td>
                                    <td>
                                        <input v-model="create_phong.number" type="text" class="form-control">
                                    </td>
                                </tr>
                                <tr>
                                    <td><label class="mx-4 form text-nowrap">Nhập loại phòng:</label></td>
                                    <td>
                                        <select v-model="create_phong.type"  class="form-select" aria-label="Chọn Loại phòng">
                                            <option selected value="1">Thường</option>
                                            <option value="0">Vip</option>
                                        </select>
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <label class="mx-4 text-nowrap">Nhập trạng thái:</label>
                                    </td>
                                    <td>
                                      <select v-model="create_phong.status" class="form-select" aria-label="Chọn trạng thái">
                                        <option selected value="1">Mở phòng</option>
                                        <option value="0">Đóng phòng</option>
                                      </select>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <div class="card-footer text-end">
                        <button @click="themMoiPhong" class='btn btn-primary'>Thêm</button>
                    </div>
                </div>


            </div>
            <div class="col-8 mt-3">
                <div class="card">
                    <div class="card-header">
                        Danh sách phòng BI DA
                    </div>
                    <div class="card-body">
                        <table class="table table-bordered">
                            <tbody>
                                <tr>
                                    <td class="text-center align-middle">
                                      <b>  Số phòng</b>
                                    </td>
                                    <td class="text-center align-middle">
                                      <b> loại phòng</b>
                                       
                                    </td>
                                    <td class="text-center align-middle">
                                        <b>  tình trạng</b>

                                    </td>
                                    <td class="text-center align-middle">
                                        <b> chỉnh sửa</b>

                                    </td>
                                </tr>
                                <tr v-for="(value, index) in list_phong">
                                    <td class="text-center align-middle">
                                        {{ value.number }}
                                    </td>
                                    <td class="text-center align-middle">
                                        {{ value.type ? 'Thường' : 'Vip' }}
                                    </td>
                                    <td class="align-middle text-center">
                                        <button v-on:click="changeTrangThai(value)" v-if="value.status == '1'" class="btn btn-success w-100">Mở phòng</button>
                                        <button v-on:click="changeTrangThai(value)" v-else class="btn btn-danger w-100">Đóng phòng</button>
                                    </td>
                                    <td class="text-center align-middle">
                                        <button class='btn btn-primary mx-2' @click="edit_phong = Object.assign({}, value)"  data-bs-toggle="modal"
                                        data-bs-target="#suaModal">Sửa</button>
                                        <button data-bs-toggle="modal" @click="del_phong = value"
                                        data-bs-target="#xoaModal" class='btn btn-danger'>Xóa</button>
                                       
                                    </td>
                                    
                                    <div class="modal fade" id="suaModal" tabindex="-1">
                            <div class="modal-dialog">
                                <div class="modal-content">
                                    <div class="modal-header">
                                        <h1 class="modal-title fs-5" id="exampleModalLabel">Cập nhật phòng</h1>
                                        <button type="button" class="btn-close" data-bs-dismiss="modal"
                                            aria-label="Close"></button>
                                    </div>
                                    <div class="modal-body">
                                        <label>Số Phòng </label>
                                        <input type="text" class="form-control" v-model="edit_phong.number">
                                        <label>Loại Phòng</label>
                                        <select v-model="edit_phong.type"  class="form-select" aria-label="Chọn Loại phòng">
                                            <option value="1">Thường</option>
                                            <option value="0">Vip</option>
                                        </select>
                                        <label>Tình trạng</label>
                                        <select v-model="edit_phong.status" class="form-select">
                                            <option value="1">Mở Phòng</option>
                                            <option value="0">Đóng Phòng</option>
                                        </select>
                                    </div>
                                    <div class="modal-footer">
                                        <button type="button" class="btn btn-secondary close-model"
                                            data-bs-dismiss="modal">Đóng</button>
                                        <button @click="capnhatPhong" type="button" class="btn btn-primary">Xác nhận</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                                     
                                        <div class="modal fade" id="xoaModal" tabindex="-1" aria-labelledby="exampleModalLabel"
                            aria-hidden="true">
                            <div class="modal-dialog">
                                <div class="modal-content">
                                    <div class="modal-header">
                                        <h1 class="modal-title fs-5" id="exampleModalLabel">Xóa phòng</h1>
                                        <button type="button" class="btn-close" data-bs-dismiss="modal"
                                            aria-label="Close"></button>
                                    </div>
                                    <div class="modal-body">
                                        <div
                                            class="alert alert-warning border-0 bg-warning alert-dismissible fade show py-2">
                                            <div class="d-flex align-items-center">
                                                <div class="font-35 text-dark"><i class="bx bx-info-circle"></i>
                                                </div>
                                                <div class="ms-3">
                                                    <h6 class="mb-0 text-dark">Warning</h6>
                                                    <div class="text-dark">
                                                        <p>Bạn có muốn xóa phòng <b>{{del_phong.number}}</b> này không?
                                                        </p>
                                                        <p>
                                                            <b>Lưu ý:</b> Điều này không thể hoàn tác!
                                                        </p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="modal-footer">
                                        <button type="button" class="btn btn-secondary"
                                            data-bs-dismiss="modal">Thoát</button>
                                        <button type="button" @click="xoaPhong" class="btn btn-danger"
                                            data-bs-dismiss="modal">Xóa</button>
                                    </div>
                                </div>
                            </div>
                        </div>
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
import axios from '../../assets/core/BaseRequest'

export default {
    data() {
        return {
            list_phong: [],
            create_phong: {},
            del_phong: {},
            is_them_moi: 0,
            edit_phong: {},
        }
    },
    mounted() {
        this.layDataPhong();
    },
    methods: {

        layDataPhong() {
            axios
                .get("phong")
                .then((res) => {
                    console.log(12312312);
                    
                    this.list_phong = res.data.data;
                })
        },
        themMoiPhong() {
            axios
                .post("phong", this.create_phong)
                .then((res) => {
                    if (res.data.status) {
                        var thong_bao = '<b>Thông báo</b><span style="margin-top: 5px">' + res.data.message + '<span>';
                        (thong_bao);
                        this.create_phong = {},
                            this.layDataPhong();
                    } else {
                        var thong_bao = '<b>Thông báo</b><span style="margin-top: 5px">' + res.data.message + '<span>';
                        this.$toast.error(thong_bao);
                    }
                })
        },
        capnhatPhong() {
            axios
                .put("phong/", this.edit_phong)
                .then((res) => {
                    if (res.data.status) {
                        var thong_bao = '<b>Thông báo</b><span style="margin-top: 5px">' + res.data.message + '<span>';
                        this.$toast.success(thong_bao);
                        this.layDataPhong();
                    } else {
                        var thong_bao = '<b>Thông báo</b><span style="margin-top: 5px">' + res.data.message + '<span>';
                        this.$toast.error(thong_bao);
                    }
                }).finally(()=>{
                    $('.close-model').click()
                })
        },
        xoaPhong() {
            axios
                .delete("phong/" + this.del_phong.id)
                .then((res) => {
                    if (res.data.status) {
                        var thong_bao = '<b>Thông báo</b><span style="margin-top: 5px">' + res.data.message + '<span>';
                        this.$toast.success(thong_bao);
                        this.layDataPhong();
                    } else {
                        var thong_bao = '<b>Thông báo</b><span style="margin-top: 5px">' + res.data.message + '<span>';
                        this.$toast.error(thong_bao);
                    }
                })
        },

        changeTrangThai(value) {
            axios
                .put("phong/doi-trang-thai", { ...value, status: !value.status })
                .then((res) => {
                    if (res.data.status) {
                        var thong_bao = '<b>Thông báo</b><span style="margin-top: 5px">' + res.data.message + '<span>';
                        this.$toast.success(thong_bao);
                        this.layDataPhong();
                    } else {
                        var thong_bao = '<b>Thông báo</b><span style="margin-top: 5px">' + res.data.message + '<span>';
                        this.$toast.error(thong_bao);
                    }s
                })
        },
    },
}
</script>
<style lang="">

</style>