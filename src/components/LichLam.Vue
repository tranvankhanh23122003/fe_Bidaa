<template >
    <div>
        <h3>
            Quản lý lịch làm
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
                                        <label class="mx-4 form">Nhập tên nhân viên:</label>
                                    </td>
                                    <td>
                                        <input type="text" class="form-control">
                                    </td>
                                </tr>
                                <tr>
                                    <td><label class="mx-4 form">Nhập ngày làm:</label></td>
                                    <td>
                                        <input type="date" class="form-control">
                                    </td>
                                </tr>
                                <tr>
                                    <td><label class="mx-4 form">Nhập thời gian bắt đầu:</label></td>
                                    <td>
                                        <input type="time" class="form-control">
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <label class="mx-4">Nhập thời gian kết thúc:</label>
                                    </td>
                                    <td>
                                        <input type="time" class="form-control">
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
                        Danh sách bàn BI DA
                    </div>
                    <div class="card-body">
                        <table class="table table-bordered">
                            <tbody>
                                <tr>
                                    <td class="text-center align-middle">
                                        Tên nhân viên
                                    </td>
                                    <td class="text-center align-middle">
                                        Ngày làm
                                    </td>
                                    <td class="text-center align-middle">
                                        Thời gian bắt đầu
                                    </td>
                                    <td class="text-center align-middle">
                                        Thời gian kết thúc
                                    </td>
                                    <td class="text-center align-middle">
                                        Chỉnh sửa
                                    </td>
                                </tr>
                                <tr>
                                    <td class="text-center align-middle">
                                        Tên nhân viên
                                    </td>
                                    <td class="text-center align-middle">
                                        Ngày làm
                                    </td>
                                    <td class="text-center align-middle">
                                        Thời gian bắt đầu
                                    </td>
                                    <td class="text-center align-middle">
                                        Thời gian kết thúc
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
<style >
    
</style>