<template>
    <div>
        <h3>
            Quản lý quán BI DA
        </h3>
        <div class="row">
            <div class="col-4 mt-3">
                <div class="card">
                    <div class="card-header">
                        <h5>Thêm mới bàn</h5>
                    </div>
                    <div class="card-body">
                        <table class="table table-bordered">
                            <tbody>
                                <tr>
                                    <td>
                                        <label class="mx-4 form">Nhập số bàn :</label>
                                    </td>
                                    <td>
                                        <input v-model="create_ban.number" type="text" class="form-control">
                                    </td>
                                </tr>
                                <tr>
                                    <td><label class="mx-4 form">Nhập loại bàn :</label></td>
                                    <td>
                                        <input v-model="create_ban.roomID" type="text" class="form-control">
                                    </td>
                                </tr>
                                <tr>
                                    <td><label class="mx-4 form">Nhập loại phòng :</label></td>
                                    <td>
                                        <select v-model="create_ban.type" class="form-select"
                                            aria-label="Chọn Loại phòng">
                                            <option selected value="1">Thường</option>
                                            <option value="0">Vip</option>
                                        </select>
                                    </td>
                                </tr>

                                <tr>
                                    <td>
                                        <label class="mx-4">Nhập trạng thái :</label>
                                    </td>
                                    <td>
                                        <select v-model="create_ban.status" class="form-select"
                                            aria-label="Chọn trạng thái">
                                            <option selected value="1">Đang sử dụng</option>
                                            <option value="0">Bàn Trống</option>
                                        </select>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <div class="card-footer text-end">
                        <button @click="themMoiban" class='btn btn-primary'>Thêm</button>
                    </div>
                </div>


            </div>
            <div class="col-8 mt-3">
                <div class="card">
                    <div class="card-header">
                        Danh sách bàn BI DA
                    </div>
                    <div class="card-body">
                        <table class="table table-bordered">
                            
                            <tbody>
                                <tr>
                                    <td class="text-center align-middle">
<b>Số bàn</b>                                    </td>
                                    <td class="text-center align-middle">
                                        <b>Loại bàn</b>
                                    </td>
                                    <td class="text-center align-middle">
                                       <b>Loại Phòng</b>
                                    </td>
                                    <td class="text-center align-middle">
                                       <b>tình trạng </b>
                                    </td>
                                    <td class="text-center align-middle">
                                        <b> chỉnh sửa</b>

                                    </td>
                                </tr>
                                <tr v-for="(value, index) in list_ban" :key="index">
                                    <td class="text-center align-middle">
                                        {{ value.number }}
                                    </td>
                                    <td class="text-center align-middle">
                                        {{ value.type == '1' ? 'thường' : 'Vip' }}
                                    </td>
                                    <td class="text-center align-middle">
                                        {{ value.roomID }}
                                    </td>
                                    <td class="text-center align-middle">
                                        <button v-on:click="changeTrangThai(value)" v-if="value.status == '0'"
                                            class="btn btn-success w-100">
                                            đang sử dụng
                                        </button>
                                        <button v-on:click="changeTrangThai(value)" v-else class="btn btn-danger w-100">
                                            bàn trống
                                        </button>
                                    </td>
                                    <td class="text-center align-middle">
                                        <button @click="edit_ban = Object.assign({}, value)"
                                            class='btn btn-primary mx-2' data-bs-toggle="modal"
                                            data-bs-target="#suaModal">Sửa</button>
                                        <button @click="del_ban = value" class='btn btn-danger' data-bs-toggle="modal"
                                            data-bs-target="#xoaModal">Xóa</button>
                                    </td>
                                </tr>

                            </tbody>
                        </table>
                        <div class="modal fade" id="suaModal" tabindex="-1">
                            <div class="modal-dialog">
                                <div class="modal-content">
                                    <div class="modal-header">
                                        <h1 class="modal-title fs-5" id="exampleModalLabel">Nhập kho</h1>
                                        <button type="button" class="btn-close" data-bs-dismiss="modal"
                                            aria-label="Close"></button>
                                    </div>
                                    <div class="modal-body">
                                        <label>Số bàn</label>
                                        <input v-model="edit_ban.number" type="text" class="form-control">
                                        <label>Số phòng</label>
                                        <input v-model="edit_ban.roomID" type="text" class="form-control">

                                        <label>Loại phòng</label>
                                        <select v-model="edit_ban.type" class="form-select"
                                            aria-label="Chọn Loại phòng">
                                            <option value="1">Cùi</option>
                                            <option value="0">Vip</option>
                                        </select>

                                        <label>Tình trạng</label>
                                        <select v-model="edit_ban.status" class="form-select">
                                            <option value="1">Đang sử dụng</option>
                                            <option value="0">Bàn trống</option>
                                        </select>
                                    </div>
                                    <div class="modal-footer">
                                        <button type="button" class="btn btn-secondary"
                                            data-bs-dismiss="modal">Đóng</button>
                                        <button  @click="capnhatban" type="button" class="btn btn-primary">Xác nhận</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="modal fade" id="xoaModal" tabindex="-1" aria-labelledby="exampleModalLabel"
                            aria-hidden="true">
                            <div class="modal-dialog">
                                <div class="modal-content">
                                    <div class="modal-header">
                                        <h1 class="modal-title fs-5" id="exampleModalLabel">Xóa Chức Vụ</h1>
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
                                                        <p>Bạn có muốn xóa danh mục <b>{{ del_ban.number }}</b> này không?
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
                                        <button @click="xoaban" type="button" class="btn btn-danger"
                                            data-bs-dismiss="modal">Xóa</button>
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
import axios from '../../assets/core/BaseRequest'
export default {
    data() {
        return {
            list_ban: [],
            create_ban: {},
            del_ban: {},
            is_them_moi: 0,
            edit_ban: {},
        }
    },
    mounted() {
        this.layDataban();
    },
    methods: {
        layDataban() {
            axios
                .get("ban-bida")
                .then((res) => {
                    console.log(res.data.data);
                    this.list_ban = res.data.data;
                })
        },

        themMoiban() {
            axios
                .post("ban-bida", this.create_ban)
                .then((res) => {
                    if (res.data.status) {
                        this.$toast.success('Phòng đã được thêm thành công');
                        this.create_ban = {};
                        this.layDataban();
                    } else {
                        this.$toast.error('Có lỗi xảy ra khi thêm phòng');
                    }
                })
                .catch(error => {
                    if (error.response.status === 401) {
                        this.$toast.error('Bạn không có quyền thực hiện hành động này.');
                    }
                });
        },

        capnhatban() {
            axios
                .put("ban-bida/", this.edit_ban)
                .then((res) => {
                    if (res.data.status) {
                        var thong_bao = '<b>Thông báo</b><span style="margin-top: 5px">' + res.data.message + '<span>';
                        this.$toast.success(thong_bao);
                        this.layDataban();
                    } else {
                        var thong_bao = '<b>Thông báo</b><span style="margin-top: 5px">' + res.data.message + '<span>';
                        this.$toast.error(thong_bao);
                        this.layDataban();

                    }
                }).finally(() => {
                    $('.close-model').click()
                })
        },
        xoaban() {
            axios
                .delete("ban-bida/" + this.del_ban.id)
                .then((res) => {
                    if (res.data.status) {
                        var thong_bao = '<b>Thông báo</b><span style="margin-top: 5px">' + res.data.message + '<span>';
                        this.$toast.success(thong_bao);
                        this.layDataban();
                    } else {
                        var thong_bao = '<b>Thông báo</b><span style="margin-top: 5px">' + res.data.message + '<span>';
                        this.$toast.error(thong_bao);
                    }
                })
        },

        changeTrangThai(value) {
            axios
                .put("ban-bida/doi-trang-thai", { ...value, status: !value.status })
                .then((res) => {
                    if (res.data.status) {
                        var thong_bao = '<b>Thông báo</b><span style="margin-top: 5px">' + res.data.message + '<span>';
                        this.$toast.success(thong_bao);
                        this.layDataban();
                    } else {
                        var thong_bao = '<b>Thông báo</b><span style="margin-top: 5px">' + res.data.message + '<span>';
                        this.$toast.error(thong_bao);
                    }
                })
        },
    },
}
</script>
<style></style>