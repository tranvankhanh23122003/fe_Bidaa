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
<style lang="">
    
</style>