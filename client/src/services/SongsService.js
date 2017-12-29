import Api from '@/services/Api'

export default {
    index (credentials) {
        return Api().get('songs')
    },
    show (songId) {
        return Api().get(`songs/${songId}`)
    },
    post (song) {
        return Api().post('songs', song)
    }    
}