<template>
    <div class="home-page">
      <header class="hero-section">
        <img src="https://image.slidesdocs.com/responsive-images/background/8-pool-cue-ball-on-the-table-powerpoint-background_24e84c5617__960_540.jpg" alt="Bida Club" class="hero-image" />
        <div class="hero-content">
          <h1>Chào Mừng Đến Với Quán Bida Của Chúng Tôi</h1>
          <p>Trải nghiệm chơi bida tuyệt vời với dịch vụ hàng đầu và không gian sang trọng.</p>
          <button v-on:click="navigateTo('quan-ly-ban')">Khám Phá Ngay</button>
        </div>
      </header>
  
      <div class="dashboard-content">
        <div class="overview">
          <div class="card">
            <h3>Số bàn đang chơi</h3>
            <p>{{ bang_hoat_dong }}</p>
          </div>
  
          <div class="card">
            <h3>Số khách hàng hiện tại</h3>
            <p>{{ khach_hang_hien_tai }}</p>
          </div>
  
          <div class="card">
            <h3>Doanh thu hôm nay</h3>
            <p>{{ doanh_thu }} VND</p>
          </div>
        </div>
  
        <div class="actions">
          <button v-on:click="navigateTo('quanlyBan')">Xem bàn chơi</button>
          <button v-on:click="navigateTo('quanlyKhachHang')">Xem khách hàng</button>
          <button v-on:click="navigateTo('thanh-toan')">Thanh toán</button>
          <button v-on:click="navigateTo('ho-tro-khach-hang')">Hỗ Trợ Khách Hàng</button>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        bang_hoat_dong: 5,
        khach_hang_hien_tai: 10,
        doanh_thu: 200000
      }
    },
    methods: {
      navigateTo(route) {
        this.$router.push({ name: route })
      }
    }
  }
  </script>
  
  <style scoped>
  .home-page {
    font-family: Arial, sans-serif;
  }
  
  .hero-section {
    position: relative;
    width: 100%;
    height: 400px;
    overflow: hidden;
  }
  
  .hero-image {
    width: 100%;
    height: 100%;
    object-fit: cover;
    position: absolute;
    top: 0;
    left: 0;
  }
  
  .hero-content {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    color: white;
    text-align: center;
    background: rgba(0, 0, 0, 0.5);
    padding: 20px;
    border-radius: 10px;
  }
  
  .hero-content h1 {
    font-size: 2.5rem;
    margin-bottom: 10px;
  }
  
  .hero-content p {
    font-size: 1.25rem;
    margin-bottom: 20px;
  }
  
  .hero-content button {
    background-color: #007bff;
    color: white;
    border: none;
    padding: 10px 20px;
    font-size: 1rem;
    border-radius: 5px;
    cursor: pointer;
  }
  
  .hero-content button:hover {
    background-color: #0056b3;
  }
  
  .dashboard-content {
    padding: 20px;
    max-width: 1200px;
    margin: 0 auto;
  }
  
  .overview {
    display: flex;
    justify-content: space-between;
    margin-bottom: 20px;
  }
  
  .card {
    background: white;
    border: 1px solid #ddd;
    border-radius: 5px;
    padding: 20px;
    width: 30%;
    box-sizing: border-box;
    text-align: center;
  }
  
  .card h3 {
    margin-bottom: 10px;
  }
  
  .card p {
    font-size: 1.5rem;
    font-weight: bold;
  }
  
  .actions {
    display: flex;
    flex-wrap: wrap;
    gap: 10px;
  }
  
  .actions button {
    background-color: #007bff;
    color: white;
    border: none;
    padding: 10px 20px;
    font-size: 1rem;
    border-radius: 5px;
    cursor: pointer;
  }
  
  .actions button:hover {
    background-color: #0056b3;
  }
  .actions {
  display: flex;
  flex-wrap: wrap;
  gap: 10px; 
  justify-content: center; 
  margin-top: 20px;
}

.actions button {
  background-color: #007bff;
  color: white;
  border: none;
  padding: 10px 20px;
  font-size: 1rem;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s ease;
  flex: 1; 
  max-width: 200px; 
  text-align: center; 
}

.actions button:hover {
  background-color: #0056b3;
}

  </style>
  