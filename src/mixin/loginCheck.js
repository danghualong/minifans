import Session from "../utils/session";
export default {
    onLoad(setting){
        if(!Session.isLogin()){
            this.$router.push('/pages/login');
        }
    }
};