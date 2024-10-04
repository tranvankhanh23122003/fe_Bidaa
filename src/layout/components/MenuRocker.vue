<template>
    <div class="nav-container primary-menu">
        <div class="mobile-topbar-header">
            <div>
                <img src="../../assets/images/logo-icon.png" class="logo-icon" alt="logo icon">
            </div>
            <div>
                <h4 class="logo-text">Rukada</h4>
            </div>
            <div class="toggle-icon ms-auto"><i class='bx bx-arrow-to-left'></i>
            </div>
        </div>
        <nav class="navbar navbar-expand-xl w-100">
            <ul class="navbar-nav justify-content-start flex-grow-1 gap-1">
                <li class="nav-item dropdown">
                    <a href="javascript:;" class="nav-link dropdown-toggle dropdown-toggle-nocaret"
                        data-bs-toggle="dropdown">
                        <div class="parent-icon"><i class='bx bx-home-circle'></i>
                        </div>
                        <div class="menu-title">Thêm mới</div>
                    </a>
                    <ul class="dropdown-menu">
                        <li>
                            <router-link class="dropdown-item" to="/admin/ban-bida">
                                <i class="bx bx-right-arrow-alt"></i> Bàn
                            </router-link>
                        </li>
                        <li>
                            <router-link class="dropdown-item" to="/admin/phong-bida">
                                <i class="bx bx-right-arrow-alt"></i> Phòng
                            </router-link>
                        </li>
                      
                      
                    </ul>
                </li>
                <li class="nav-item dropdown">
                    <a href="javascript:;" class="nav-link dropdown-toggle dropdown-toggle-nocaret"
                        data-bs-toggle="dropdown">
                        <div class="parent-icon"><i class="fa-solid fa-user"></i>
                        </div>
                        <div  class="menu-title">Quản Lý </div>
                    </a>
                    <ul class="dropdown-menu">
                        <li class="nav-item">
                    <router-link class="nav-link mt-2" to="/admin/nhan-vien">
                        <div class="parent-icon"><i class="fa-solid fa-user"></i></div>
                        <div class="menu-title">Quản Lý nhân viên</div>
                    </router-link>
                </li>
                <li class="nav-item">
                    <router-link class="nav-link mt-2" to="/admin/lich-lam">
                        <div class="parent-icon"><i class="fa-solid fa-calendar-days"></i></div>
                        <div class="menu-title">Quản Lý Lịch làm nhân viên</div>
                    </router-link>
                </li>
                <li class="nav-item">
                    <router-link class="nav-link mt-2" to="/admin/quan-ly-luong">
                        <div class="parent-icon"><i class="fa-solid fa-money-bill"></i></div>
                        <div class="menu-title">Quản Lý Lương</div>
                    </router-link>
                </li>
                <li class="nav-item">
                    <router-link class="nav-link mt-2" to="/admin/chi-tiet-nhan-vien">
                        <div class="parent-icon"><i class="fa-solid fa-list"></i></div>
                        <div class="menu-title">chi tiết nhân viên</div>
                    </router-link>
                </li>
                <li class="nav-item">
                    <router-link class="nav-link mt-2" to="/admin/tao-nhan-vien">
                        <div class="parent-icon"><i class="fa-solid fa-plate-wheat"></i></div>
                        <div class="menu-title">tạo nhân viên</div>
                    </router-link>
                </li>
                      
                      
                    </ul>
                </li>
                
                <li class="nav-item">
                    <router-link class="nav-link" to="/admin/quan-ly-ban">
                        <div class="parent-icon "><i class="fa-solid fa-table"></i></div>
                        <div class="menu-title">Quản Lý Bàn</div>
                    </router-link>
                </li>
                <li class="nav-item">
                    <router-link class="nav-link" to="/admin/khach-hang">
                        <div class="parent-icon"><i class="fa-solid fa-person-military-pointing"></i></div>
                        <div class="menu-title">Quản Lý khách hàng</div>
                    </router-link>
                </li>
             
            
                <li class="nav-item">
                    <router-link class="nav-link" to="/admin/thanh-toan">
                        <div class="parent-icon"><i class="fa-brands fa-paypal"></i></div>
                        <div class="menu-title">Thanh Toán Hóa Đơn</div>
                    </router-link>
                </li>
                <li class="nav-item">
                    <router-link class="nav-link" to="/admin/bao-cao-doanh-thu">
                        <div class="parent-icon"><i class="fa-solid fa-bullhorn"></i></div>
                        <div class="menu-title">Báo cáo doanh thu</div>
                    </router-link>
                </li>
                <li class="nav-item">
                    <router-link class="nav-link" to="/admin/quan-ly-kho">
                        <div class="parent-icon"><i class="fa-solid fa-warehouse"></i></div>
                        <div class="menu-title">Quản lý kho</div>
                    </router-link>
                </li>
                <li class="nav-item">
                    <router-link class="nav-link" to="/admin/ho-tro-khach-hang">
                        <div class="parent-icon"><i class="fa-solid fa-phone"></i></div>
                        <div class="menu-title">Hỗ Trợ Khách Hàng</div>
                    </router-link>
                </li>
            </ul>
        </nav>
    </div>
</template>
<script>
export default {

}
</script>
<style></style>