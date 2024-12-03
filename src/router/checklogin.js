import axios from '../../src/assets/core/BaseRequest';
import { createToaster } from "@meforma/vue-toaster";
const toaster = createToaster({ position: "top-right" });

export default function(to, from, next) {
    axios
        .get('kiem-tra-admin', {
            headers : {
                Authorization : 'Bearer ' +  localStorage.getItem("token_admin")
            }
        })
        .then((res) => {
            console.log(res);
            
            if(res.data.status) {
                next();
            } else {
                console.log('chưa');
                
                next('/admin/dang-nhap');
                toaster.error(res.data.message);
            }
        });
}