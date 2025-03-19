<template>
 <div>
    <div class="row">
        <div class="col-8">
            <div class="card mb-4">
            <div class="card-header">
              <h3 class="mb-0">Món Ăn</h3>
            </div>
            <div class="card-body">
              <div class="menu-item border-bottom mb-3 pb-2" v-for="(biDa, index) in DanhSachBiDa" :key="index">
                <div class="d-flex align-items-center">
                  <img :src="biDa.hinhanh" alt="" class="img-thumbnail me-3" style="width: 100px; height: 100px;">
                  <div>
                    <h5>{{biDa.ten  }}</h5>
                    <p>{{ biDa.mota }}</p>
                    <p><strong>Giá:</strong>{{ biDa.gia }} VNĐ</p>
                    <button class="btn btn-primary" v-on:click="datHang(biDa)">Đặt Hàng</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
            <div class="col-4">
          <div class="order-summary card">
            <div class="card-header">
              <h3 class="mb-0">Đặt Hàng Của Bạn</h3>
            </div>
            <div class="card-body">
                <div v-if="oderItems.length === 0">
                    <p>Chưa có món nào được chọn.</p>

                </div>
                <div v-else >
                    <ul  class="list-group mb-3" v-for="(item , index) in oderItems " :key="index">
                    
                       
                <li class="list-group-item" >
                    <img :src="item.hinhanh" alt="image" class="img-thumbnail me-3" style="width: 50px; height: 50px;" >
                    {{ item.ten }} , {{ item.mota }},{{ item.gia }} VND
                    <button class="btn btn-danger btn-sm float-end" v-on:click="xoaHang(item)">Xóa</button>
                </li>
             </ul>
                </div>
                <p><strong>Tổng cộng:</strong>{{ totalPrice }} VNĐ</p>

                <button class="btn btn-success " v-on:click="xacnhanDatHang()" >Xác Nhận Đặt Hàng</button>

          
            </div>
        

          </div>
        </div>
    </div>
 </div>
     
  
       
  </template>
  
  <script>
  export default{
    data() {
        return {
            DanhSachBiDa :[
                {
                    ten:'bida phăng',
                    mota: 'mượt',
                    gia: 100000,
                    hinhanh:'https://png.pngtree.com/png-vector/20210313/ourmid/pngtree-reflective-three-dimensional-color-billiards-png-image_3043781.jpg'
                },
                  {
                    ten:'bida phăng',
                    mota: 'mượt',
                    gia: 100000,
                    hinhanh:'https://png.pngtree.com/png-vector/20210313/ourmid/pngtree-reflective-three-dimensional-color-billiards-png-image_3043781.jpg'
                }
            ],
        oderItems:[]

        };
    },
    computed: {
      totalPrice() {
        return this.oderItems.reduce((total, item) => total + item.gia, 0);
      }
    },
    methods:
    {
        datHang(biDa){
this.oderItems.push(biDa);
        },

xoaHang(biDa){
    this.oderItems = this.oderItems.filter(item => item !== biDa);

},
xacnhanDatHang(biDa){
    alert(  ` 'bạn đã đặt hàng thành với tổng giá tiền :${this.totalPrice}VNĐ`);
    this.oderItems=[];
}
    }
  }
 
  </script>
  
  <style scoped>
  .menu-item {
    padding: 10px 0;
  }
  
  .order-summary {
    position: sticky;
    top: 20px;
  }
  </style>
  