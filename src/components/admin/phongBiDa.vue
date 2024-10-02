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
                                        <label class="mx-4 form">Nhập số phòng :</label>
                                    </td>
                                    <td>
                                        <input type="text" class="form-control">
                                    </td>
                                </tr>
                                <tr>
                                    <td><label class="mx-4 form">Nhập loại phòng :</label></td>
                                    <td>
                                        <input type="text" class="form-control">
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <label class="mx-4">Nhập trạng thái :</label>
                                    </td>
                                    <td>
                                        <select class="form-select">
                                            <option value="1">Mở phòng</option>
                                            <option value="2">Đóng phòng</option>
                                        </select>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <div class="card-footer text-end">
                        <button class='btn btn-primary'>Thêm</button>
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
                                        Số phòng
                                    </td>
                                    <td class="text-center align-middle">
                                        Loại phòng
                                    </td>
                                    <td class="text-center align-middle">
                                        Tình trạng
                                    </td>
                                    <td class="text-center align-middle">
                                        Chỉnh sửa
                                    </td>
                                </tr>
                                <tr>
                                    <td class="text-center align-middle">
                                        Số phòng
                                    </td>
                                    <td class="text-center align-middle">
                                        Loại phòng
                                    </td>
                                    <td class="text-center align-middle">
                                        Tình trạng
                                    </td>
                                    <td class="text-center align-middle">
                                        <button class='btn btn-primary mx-2'  data-bs-toggle="modal"
                                        data-bs-target="#suaModal">Sửa</button>
                                        <button data-bs-toggle="modal"
                                        data-bs-target="#xoaModal" class='btn btn-danger'>Xóa</button>
                                       
                                    </td>
                                    
                                    <div class="modal fade" id="suaModal" tabindex="-1">
                            <div class="modal-dialog">
                                <div class="modal-content">
                                    <div class="modal-header">
                                        <h1 class="modal-title fs-5" id="exampleModalLabel">Nhập kho</h1>
                                        <button type="button" class="btn-close" data-bs-dismiss="modal"
                                            aria-label="Close"></button>
                                    </div>
                                    <div class="modal-body">
                                        <label>Số Phòng </label>
                                        <input type="text" class="form-control">
                                        <label>Loại Phòng</label>
                                        <input type="text" class="form-control">
                                       
                                        <label>Tình trạng</label>
                                        <select class="form-select">
                                            <option value="1">Mở Phòng</option>
                                            <option value="2">Đóng Phòng</option>
                                        </select>
                                    </div>
                                    <div class="modal-footer">
                                        <button type="button" class="btn btn-secondary"
                                            data-bs-dismiss="modal">Đóng</button>
                                        <button type="button" class="btn btn-primary">Xác nhận</button>
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
                                                        <p>Bạn có muốn xóa danh mục <b></b> này không?
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
                                        <button type="button" class="btn btn-danger"
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
export default {
    
}
</script>
<style lang="">
    
</style>