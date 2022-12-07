import axios from "axios";

const http = axios.create({
    baseURL : "https://4all.ltd/services/api/ads/companies?page_count=5",
    headers : {
        "content-type" : "application/json"
    }
})

class Pro {
    getProvider(){
        return http.get('/')
    }
}

export default new Pro()