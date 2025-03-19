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
                  
                    <ul class="dropdown-menu">
                       
                      
                        <li class="nav-item">
                            <router-link class="nav-link mt-2" to="/user/tro-chuyen">
                                <div class="parent-icon"><i class="fa-solid fa-money-bill"></i></div>
                                <div class="menu-title">Trò chuyện</div>
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
                            <router-link class="nav-link mt-2" to="/user/dat-ban-truc-tuyen">
                                <div class="parent-icon"><i class="fa-solid fa-user"></i></div>
                                <div class="menu-title">Đặt bàn online</div>
                            </router-link>
                        </li>
                   
                         
                        <li class="nav-item">
                            <router-link class="nav-link mt-2" to="/user/quan-ly-tai-khoan">
                                <div class="parent-icon"><i class="fa-solid fa-calendar-days"></i></div>
                                <div class="menu-title">Quản lý tài khoản</div>
                            </router-link>
                        </li>
                
                <li class="nav-item">
                    <router-link class="nav-link mt-2" to="/user/theo-doi-thoi-gian-choi">
                        <div class="parent-icon"><i class="fa-solid fa-clock"></i></div>
                        <div class="menu-title">Theo dõi thời gian chơi</div>
                    </router-link>
                </li>
                <li class="nav-item">
                    <router-link class="nav-link mt-2" to="/user/ban-nuoc-uong">
                        <div class="parent-icon"><i class="fa-solid fa-bowl-food"></i></div>
                        <div class="menu-title">Thực đơn</div>
                    </router-link>
                </li>
                <li class="nav-item">
                            <router-link class="nav-link mt-2" to="/user/danh-gia">
                                <div class="parent-icon"><i class="fa-solid fa-comment"></i></div>
                                <div class="menu-title">Đánh Giá</div>
                            </router-link>
                        </li>
                <li class="nav-item">
                    <router-link class="nav-link mt-2" to="/user/he-thong-tich-diem">
                        <div class="parent-icon"><i class="fa-solid fa-gift"></i></div>
                        <div class="menu-title">Đổi Thưởng</div>
                    </router-link>
                </li>
                <li class="nav-item">
                    <router-link class="nav-link mt-2" to="/user/tro-chuyen">
                        <div class="parent-icon"><i class="fa-solid fa-phone"></i></div>
                        <div class="menu-title">Trò chuyện</div>
                    </router-link>
                </li>
                <li class="nav-item">
                    <router-link class="nav-link mt-2" to="/user/thanh-toan">
                        <div class="parent-icon"><i class="fa-brands fa-paypal"></i></div>
                        <div class="menu-title">Thanh Toán</div>
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