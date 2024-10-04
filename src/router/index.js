import { createRouter, createWebHistory } from "vue-router";
import checklogin from "./checklogin";

const routes = [
    {
        path: '/',
        component: () => import('../components/admin/DangNhap.vue')
    },
    {
        path: '/trang-chu',
        component: () => import('../components/admin/TrangChu.vue')
    },



    {
        path: '/admin/ban-bida',
        component: () => import('../components/admin/banBiDa.vue'),
        beforeEnter: checklogin
    },
    {
        path: '/admin/phong-bida',
        component: () => import('../components/admin/phongBiDa.vue'),
        beforeEnter: checklogin

    },

    {
        path: '/admin/lich-lam',
        component: () => import('../components/admin/LichLam.vue'),
        beforeEnter: checklogin

    },
    {
        path: '/admin/nhan-vien',
        component: () => import('../components/admin/nhanVien.vue'),
        beforeEnter: checklogin

    },
    {
        path: '/admin/quan-ly-ban',
        component: () => import('../components/admin/quanlyban.vue'),
        beforeEnter: checklogin

    },
    {
        path: '/admin/quan-ly-luong',
        component: () => import('../components/admin/quanlyluong.vue'),
        beforeEnter: checklogin

    },
    {
        path: '/admin/chi-tiet-nv',
        component: () => import('../components/admin/chitietnhanvien.vue'),
        beforeEnter: checklogin

    },
    {
        path: '/admin/tao-nhan-vien',
        component: () => import('../components/admin/taomoinhanvien.vue'),
        beforeEnter: checklogin

    },

    {
        path: '/admin/thanh-toan',
        component: () => import('../components/admin/thanhtoan.vue'),
        beforeEnter: checklogin

    },
    {
        path: '/admin/khach-hang',
        component: () => import('../components/admin/editKhachHang.vue'),
        beforeEnter: checklogin

    },
    {
        path: '/admin/dang-nhap',
        component: () => import('../components/admin/DangNhap.vue'),
        beforeEnter: checklogin

    },
    {
        path: '/admin/dang-ky',
        component: () => import('../components/User/DangKy.vue'),
        beforeEnter: checklogin

    },
    {
        path: '/admin/bao-cao-doanh-thu',
        component: () => import('../components/admin/baocaodoanhthu.vue'),
        beforeEnter: checklogin

    },
    {
        path: '/admin/ho-tro-khach-hang',
        component: () => import('../components/admin/hotroKhachHang.vue'),
        beforeEnter: checklogin

    },
    {
        path: '/admin/quan-ly-kho',
        component: () => import('../components/admin/quanLyKho.vue'),
        beforeEnter: checklogin

    },
    // User
    {
        path: '/user/dang-nhap',
        component: () => import('../components/User/DangNhap.vue'),

        meta: { layout: "client" },


    },

    {
        path: '/user/dang-ky',
        component: () => import('../components/User/DangKy.vue'),

        meta: { layout: "client" },


    },


    {
        path: '/user/dat-ban-truc-tuyen',
        component: () => import('../components/User/datbanTrucTuyen.vue'),

        meta: { layout: "client" },


    },
    {
        path: '/user/quan-ly-tai-khoan',
        component: () => import('../components/User/quanlyTaiKhoan.vue'),
        meta: { layout: "client" },

    },
    {
        path: '/user/he-thong-tich-diem',
        component: () => import('../components/User/heThongTichDiem.vue'),
        meta: { layout: "client" },

    },
    {
        path: '/user/theo-doi-thoi-gian-choi',
        component: () => import('../components/User/theodoiThoiGianChoi.vue'),
        meta: { layout: "client" },

    },
    {
        path: '/user/tro-chuyen',
        component: () => import('../components/User/troChuyen.vue'),
        meta: { layout: "client" },

    },
    {
        path: '/user/danh-gia',
        component: () => import('../components/User/danhGia.vue'),
        meta: { layout: "client" },

    },
    {
        path: '/user/ban-nuoc-uong',
        component: () => import('../components/User/banNuocUong.vue'),
        meta: { layout: "client" },

    },

    // {
    //     path : '/user',
    //     component: ()=>import('../components/User/'),
    //     meta: {layout: "MenuUser"}
    // }, 

]

const router = createRouter({
    history: createWebHistory(),
    routes: routes
})

export default router