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
                        <form v-on:submit.prevent="themHangHoa">
                            <div class="mb-3">
                                <input v-model="tenHangHoa" class="form-control" placeholder="Nhập tên hàng" required />
                            </div>
                            <div class="mb-3">
                                <input v-model.number="soLuong" type="number" class="form-control"
                                    placeholder="Nhập số lượng" required />
                            </div>
                            <div class="mb-3">
                                <input v-model.number="gia" type="number" class="form-control" placeholder="Nhập giá"
                                    required />
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
                    <div class="card-body">
                        <table class="table table-striped">
                            <thead>
                                <tr>
                                    <th>Tên Hàng</th>
                                    <th>Số Lượng</th>
                                    <th>Giá</th>
                                    <th>Hành Động</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr v-for="(hangHoa, index) in danhSachHangHoa" :key="index">
                                    <td>{{ hangHoa.ten }}</td>
                                    <td>{{ hangHoa.soLuong }}</td>
                                    <td>{{ hangHoa.gia }} VNĐ</td>
                                    <td>
                                        <button class="btn btn-warning btn-sm" v-on:click="suaHangHoa(index)">Sửa</button>
                                        <button class="btn btn-danger btn-sm" v-on:click="xoaHangHoa(index)">Xóa</button>
                                    </td>
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
export default {
    data() {
        return {
            tenHangHoa: '',
            soLuong: 0,
            gia: 0,
            danhSachHangHoa: []
        };
    },
    methods: {
        themHangHoa() {
            const hangHoaMới = {
                ten: this.tenHangHoa,
                soLuong: this.soLuong,
                gia: this.gia
            };
            this.danhSachHangHoa.push(hangHoaMới);
            this.tenHangHoa = '';
            this.soLuong = 0;
            this.gia = 0;
        },
        suaHangHoa(index) {
            const hangHoa = this.danhSachHangHoa[index];
            this.tenHangHoa = hangHoa.ten;
            this.soLuong = hangHoa.soLuong;
            this.gia = hangHoa.gia;

            this.danhSachHangHoa.splice(index, 1); 
        },
        xoaHangHoa(index) {
            this.danhSachHangHoa.splice(index, 1);
        }
    }
};
</script>

<style scoped>
.card {
    margin-bottom: 20px;
}
</style>