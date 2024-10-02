<template>
    <div>
        <h1>Quản lý bàn Bida</h1>

        <div>
            <button v-for="khu in khus" :key="khu.id" v-on:click="chonKhu(khu)"
                :class="khu === khuDaChon ? 'active' : ''">
                {{ khu.ten }}
            </button>
        </div>
        <div>
            <div v-for="ban in bans" :key="ban.id" v-onclick="chuyenTrangThaiBan(ban)"
                :style="{ backgroundColor: ban.trang_thai === 'Đang sử dụng' ? '#00aaff' : '#f1f1f1', color: ban.trang_thai === 'Đang sử dụng' ? 'white' : 'black' }"
                style="padding: 20px; margin: 10px; border: none solid #ccc; display: inline-block; text-align: center; width: 400px; cursor: pointer;">
                <div>{{ ban.so_ban }}</div>
                <div>{{ ban.trang_thai }}</div>
                <div v-if="ban.trang_thai === 'Đang sử dụng'">{{ dinhDangThoiGian(ban.thoi_gian) }}</div>
                <img :src="ban.hinh_anh" alt="Hình bàn" style="width: 70px; height: auto; margin-top: 10px;">
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            khus: [
                { id: 0, ten: 'Khu VIP' },
                { id: 1, ten: 'Khu A' },
            ],
            khuDaChon: { id: 1, ten: 'Khu VIP' },
            bans: [
                { id: 1, so_ban: 1, trang_thai: 'Bàn trống', thoi_gian: 0, hinh_anh: 'https://banner2.cleanpng.com/20231226/rrl/transparent-icon-pool-table-billiards-balls-cues-green-cloth-pool-table-with-balls-and-cues-ready-to-1710955097174.webp', boDem: null },
                { id: 2, so_ban: 2, trang_thai: 'Bàn trống', thoi_gian: 0, hinh_anh: 'https://banner2.cleanpng.com/20231226/rrl/transparent-icon-pool-table-billiards-balls-cues-green-cloth-pool-table-with-balls-and-cues-ready-to-1710955097174.webp', boDem: null },
                { id: 3, so_ban: 3, trang_thai: 'Đang sử dụng', thoi_gian: 0, hinh_anh: 'https://banner2.cleanpng.com/20231226/rrl/transparent-icon-pool-table-billiards-balls-cues-green-cloth-pool-table-with-balls-and-cues-ready-to-1710955097174.webp', boDem: null },
                { id: 4, so_ban: 4, trang_thai: 'Đang sử dụng', thoi_gian: 0, hinh_anh: 'https://banner2.cleanpng.com/20231226/rrl/transparent-icon-pool-table-billiards-balls-cues-green-cloth-pool-table-with-balls-and-cues-ready-to-1710955097174.webp', boDem: null },
                { id: 5, so_ban: 5, trang_thai: 'Đang sử dụng', thoi_gian: 0, hinh_anh: 'https://banner2.cleanpng.com/20231226/rrl/transparent-icon-pool-table-billiards-balls-cues-green-cloth-pool-table-with-balls-and-cues-ready-to-1710955097174.webp', boDem: null },
                { id: 6, so_ban: 6, trang_thai: 'Đang sử dụng', thoi_gian: 0, hinh_anh: 'https://banner2.cleanpng.com/20231226/rrl/transparent-icon-pool-table-billiards-balls-cues-green-cloth-pool-table-with-balls-and-cues-ready-to-1710955097174.webp', boDem: null },
            ],
        };
    },
    methods: {
        chonKhu(khu) {
            this.khuDaChon = khu;
        },
        chuyenTrangThaiBan(ban) {
            if (ban.trang_thai === 'Bàn trống') {
                ban.trang_thai = 'Đang sử dụng';
                ban.thoi_gian = 0;
                ban.boDem = setInterval(() => {
                    ban.thoi_gian++;
                }, 1000);
            } else {
                ban.trang_thai = 'Bàn trống';
                ban.thoi_gian = 0;
                if (ban.boDem) {
                    clearInterval(ban.boDem);
                    ban.boDem = null;
                }
            }
        },
        dinhDangThoiGian(giay) {
            const gio = Math.floor(giay / 3600);
            const phut = Math.floor((giay % 3600) / 60);
            const giayLe = giay % 60;
            return `${gio.toString().padStart(2, '0')}:${phut.toString().padStart(2, '0')}:${giayLe.toString().padStart(2, '0')}`;
        },
    },
};
</script>

<style>
button {
    padding: 10px;
    margin-right: 10px;
    background-color: #007BFF;
    color: white;
    border: none;
    cursor: pointer;
}

button.active {
    background-color: #0056b3;
}
</style>
