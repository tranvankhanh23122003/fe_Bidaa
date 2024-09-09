<template>
    <div>
        <h3>
            Quản lý Kho hàng
        </h3>
        <!-- Button trigger modal -->
        <!-- Button trigger modal -->
        <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
            thêm mới
        </button>

        <!-- Modal -->
        <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div class="modal-dialog">
                <div class="modal-content">
                    <div class="modal-header">
                        <h1 class="modal-title fs-5" id="exampleModalLabel">Nhập kho</h1>
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div class="modal-body">
                        <div class="row">
                            <div class="col">
                                <div class="card">
                                    <div class="card-body">
                                    <label for=""></label>
                                        Tên sản phẩm
                                    <input type="text">
                                    <label for=""></label>
                                        Giá
                                    <input type="text">
                                    <label for=""></label>
                                        Số lượng
                                    <input type="text">
                                    <label for=""></label>
                                        Trạng thái
                                        <select class="form-select">
                                            <option value="1">Còn</option>
                                            <option value="2">Hết</option>
                                        </select>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                        <button type="button" class="btn btn-primary">Save changes</button>
                    </div>
                </div>
            </div>
        </div>
        <div class="row">
            <div class="col mt-3">
                <div class="card">
                    <div class="card-header">
                        Danh sách bàn BI DA
                    </div>
                    <div class="card-body">
                        <table class="table table-bordered">
                            <tbody>
                                <tr>
                                    <td class="text-center align-middle">
                                        Tên sản phẩm
                                    </td>
                                    <td class="text-center align-middle">
                                        Giá
                                    </td>
                                    <td class="text-center align-middle">
                                        Số lượng
                                    </td>
                                    <td class="text-center align-middle">
                                        Trạng thái
                                    </td>
                                    <td class="text-center align-middle">
                                        Chỉnh sửa
                                    </td>
                                </tr>
                                <tr>
                                    <td class="text-center align-middle">
                                        Tên sản phẩm
                                    </td>
                                    <td class="text-center align-middle">
                                        Giá
                                    </td>
                                    <td class="text-center align-middle">
                                        Số lượng
                                    </td>
                                    <td class="text-center align-middle">
                                        Trạng thái
                                    </td>
                                    <td class="text-center align-middle">
                                        <button class='btn btn-primary mx-2'>Sửa</button>
                                        <button class='btn btn-danger'>Xóa</button>
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

}
</script>
<style></style>