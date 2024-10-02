import { createRouter, createWebHistory } from "vue-router"; 

const routes = [
    {
        path : '/',
        component: ()=>import('../components/admin/DangNhap.vue')
    }, {
        path : '/trang-chu',
        component: ()=>import('../components/admin/TrangChu.vue')
    },

    {
        path : '/admin/ban-bida',
        component: ()=>import('../components/admin/banBiDa.vue')
    },
    {
        path : '/admin/phong-bida',
        component: ()=>import('../components/admin/phongBiDa.vue')
    },
   
 

    {
        path : '/admin/lich-lam',
        component: ()=>import('../components/admin/LichLam.vue')
    },    
    {
        path : '/admin/nhan-vien',
        component: ()=>import('../components/admin/nhanVien.vue')
    },   
    {
        path : '/admin/quan-ly-ban',
        component: ()=>import('../components/admin/quanlyban.vue')
    }, 
    {
        path : '/admin/quan-ly-luong',
        component: ()=>import('../components/admin/quanlyluong.vue')
    },  
    {
        path : '/admin/chi-tiet-nv',
        component: ()=>import('../components/admin/chitietnhanvien.vue')
    },
    {
        path : '/admin/tao-nhan-vien',
        component: ()=>import('../components/admin/taomoinhanvien.vue')
    }, 
   
    {
        path : '/admin/thanh-toan',
        component: ()=>import('../components/admin/thanhtoan.vue')
    }, 
    {
        path : '/admin/khach-hang',
        component: ()=>import('../components/admin/editKhachHang.vue')
    }, 
    {
        path : '/admin/dang-nhap',
        component: ()=>import('../components/admin/DangNhap.vue')
    }, 
    {
        path : '/admin/dang-ky',
        component: ()=>import('../components/admin/DangKy.vue')
    }, 
    {
        path : '/admin/bao-cao-doanh-thu',
        component: ()=>import('../components/admin/baocaodoanhthu.vue')
    }, 
    {
        path : '/admin/ho-tro-khach-hang',
        component: ()=>import('../components/admin/hotroKhachHang.vue')
    }, 
    {
        path: '/admin/quan-ly-kho',
        component: () => import('../components/admin/quanLyKho.vue'),
        meta: { layout: "newLayout" }, 
    } , 

   

    {
        path: '/user/dat-ban-truc-tuyen',
        component: () => import('../components/User/datbanTrucTuyen.vue'),
        meta: { layout: "newLayout" }, 
    } , 
    {
        path: '/user/quan-ly-tai-khoan',
        component: () => import('../components/User/quanlyTaiKhoan.vue'),
        meta: { layout: "newLayout" }, 
    } , 
    {
        path: '/user/he-thong-tich-diem',
        component: () => import('../components/User/heThongTichDiem.vue'),
        meta: { layout: "newLayout" }, 
    } , 
    {
        path: '/user/theo-doi-thoi-gian-choi',
        component: () => import('../components/User/theodoiThoiGianChoi.vue'),
        meta: { layout: "newLayout" }, 
    } , 
    {
        path: '/user/tro-chuyen',
        component: () => import('../components/User/troChuyen.vue'),
        meta: { layout: "newLayout" }, 
    } , 
    {
        path: '/user/danh-gia',
        component: () => import('../components/User/danhGia.vue'),
        meta: { layout: "newLayout" }, 
    } , 
    {
        path: '/user/ban-nuoc-uong',
        component: () => import('../components/User/banNuocUong.vue'),
        meta: { layout: "newLayout" }, 
    } , 
   
]

const router = createRouter({
    history: createWebHistory(),
    routes: routes
})

export default router