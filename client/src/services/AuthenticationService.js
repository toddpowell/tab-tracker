// Hit the register endpoint
import Api from '@/services/Api';

// 
export default {
    register (credentials) {
        return Api().post('register', credentials)
    }
}

// Call by:
// AuthenticationService.register({
//     email: 'testing',
//     password '123456'
// });