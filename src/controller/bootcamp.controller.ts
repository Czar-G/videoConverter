import axios from 'axios'

class BootcampManager {
    getIpUrl: string
    constructor(){
        this.getIpUrl = 'http://api.ipify.org'
    }
    async getSession(){
        try {
            const authResponse = await axios({
                method: 'GET',
                url: this.getIpUrl
            })
            return authResponse?.data
        } catch (error) {
            throw error
        }
    }
}


export default new BootcampManager