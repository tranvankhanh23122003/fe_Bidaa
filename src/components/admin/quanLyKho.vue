<template>
    <div class="container mt-5">
        <h1 class="text-center mb-4">Quản Lý Kho Hàng</h1>
        <div class="row">
            <div class="col-5 mb-4">
                <div class="card">
                    <div class="card-header">
                        <h3 class="mb-0">Thêm Hàng Hóa Mới</h3>
                    </div>
                    <div class="card-body">
                        <form @submit.prevent="themMoihang">
                            <div class="mb-3">
                                <input v-model="create_hang.productName" class="form-control" placeholder="Nhập tên hàng" required />
                            </div>
                            <div class="mb-3">
                                <input v-model.number="create_hang.quantity" type="number" class="form-control" placeholder="Nhập số lượng" required />
                            </div>
                            <div class="mb-3">
                                <input v-model.number="create_hang.cost" type="number" class="form-control" placeholder="Nhập giá" required />
                            </div>
                            <label for=""> Trạng Thái</label>
                            <div class="mb-3">
                                <select v-model="create_hang.status" class="form-select">
                                    <option value="1">Còn hàng</option>
                                    <option value="0">Hết hàng</option>
                                </select>
                            </div>
                            <button type="submit" class="btn btn-success">Thêm Hàng Hóa</button>
                        </form>
                    </div>
                </div>
            </div>

            <div class="col-7">
                <div class="card">
                    <div class="card-header">
                        <h3 class="mb-0">Danh Sách Hàng Hóa</h3>
                    </div>
                    <div class="card-body text-center align-middle">
                        <table class="table table-bordered">
                            <thead >
                                <tr>
                                    <th>Tên Hàng</th>
                                    <th>Số Lượng</th>
                                    <th>Giá</th>
                                    <th>Hành Động</th>
                                </tr>
                            </thead>
                            <tbody class="text-center align-middle">
                                <tr v-for="(value, index) in list_hang" :key="index">
                                    <td>{{ value.productName }}</td>
                                    <td>{{ value.quantity }}</td>
                                    <td>{{ value.cost }} VNĐ</td>
                                    <td class="align-middle text-center">
                                        <button @click="changeTrangThai(value)" :class="value.status == '1' ? 'btn btn-success' : 'btn btn-danger'" class="w-100">
                                            {{ value.status == '1' ? 'còn hàng' : 'hết hàng' }}
                                        </button>
                                    </td>
                                    <td>
                                        <button data-bs-toggle="modal" data-bs-target="#suaModal" class="btn btn-warning btn-sm me-2" @click="editHang(value)">Sửa</button>
                                        <button @click="xoahang(value.id)" class="btn btn-danger  btn-sm">Xóa</button>
                                    </td>
                                </tr>
                            </tbody>
                        </table>

                        <div class="modal fade" id="suaModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                            <div class="modal-dialog">
                                <div class="modal-content">
                                    <div class="modal-header">
                                        <h1 class="modal-title fs-5" id="exampleModalLabel">Cập nhật hàng</h1>
                                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                    </div>
                                    <div class="modal-body">
                                        <label>Tên hàng</label>
                                        <input type="text" class="form-control" v-model="edit_hang.productName" />
                                        <label>Số lượng</label>
                                        <input type="number" class="form-control" v-model.number="edit_hang.quantity" />
                                        <label>Giá</label>
                                        <input type="number" class="form-control" v-model.number="edit_hang.cost" />
                                        <label>Tình trạng</label>
                                        <select v-model="edit_hang.status" class="form-select">
                                            <option value="1">Còn hàng </option>
                                            <option value="0">Hết hàng</option>
                                        </select>
                                    </div>
                                    <div class="modal-footer">
                                        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Đóng</button>
                                        <button @click="capnhathang" type="button" class="btn btn-primary">Xác nhận</button>
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
import axios from '../../assets/core/BaseRequest';

export default {
    data() {
        return {
            list_hang: [],
            create_hang: {
                productName: '',
                quantity: 0,
                cost: 0,
                status: '1',
            },
            edit_hang: {},
        };
    },
    mounted() {
        this.layDatahang();
    },
    methods: {
        layDatahang() {
            axios.get("kho-hang")
                .then(res => {
                    this.list_hang = res.data.data;
                })
                .catch(error => {
                    console.error("Lỗi khi lấy dữ liệu:", error);
                });
        },
        themMoihang() {
            axios.post("kho-hang", this.create_hang)
                .then(res => {
                    this.handleResponse(res);
                    this.create_hang = { productName: '', quantity: 0, cost: 0, status: '1' }; 
                })
                .catch(error => {
                    console.error("Lỗi khi thêm hàng hóa:", error);
                });
        },
        capnhathang() {
            axios.put("kho-hang", this.edit_hang)
                .then(res => {
                    this.handleResponse(res);
                })
                .catch(error => {
                    console.error("Lỗi khi cập nhật hàng hóa:", error);
                });
        },
        xoahang(id) {
            axios.delete(`kho-hang/${id}`)
                .then(res => {
                    this.handleResponse(res);
                })
                .catch(error => {
                    console.error("Lỗi khi xóa hàng hóa:", error);
                });
        },
        changeTrangThai(value) {
            axios.put("kho-hang/doi-trang-thai", { ...value, status: value.status === '1' ? '0' : '1' })
                .then(res => {
                    this.handleResponse(res);
                })
                .catch(error => {
                    console.error("Lỗi khi đổi trạng thái:", error);
                });
        },
        handleResponse(res) {
            const thong_bao = `<b>Thông báo</b><span style="margin-top: 5px">${res.data.message}<span>`;
            if (res.data.status) {
                this.$toast.success(thong_bao);
                this.layDatahang();
            } else {
                this.$toast.error(thong_bao);
            }
        },
        editHang(value) {
            this.edit_hang = { ...value }; 
        }
    }
};
</script>

<style scoped>
.card {
    margin-bottom: 20px;
}
</style>
