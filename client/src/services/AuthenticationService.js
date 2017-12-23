// Hit the register endpoint
import Api from '@/services/Api'
// 
export default {
    register (credentials) {
        return Api().post('register', credentials)
    },
    login (credentials) {
        return Api().post('login', credentials)
    }
}
// Call by:
// AuthenticationService.register({
//     email: 'testing',
//     password '123456'
// });
