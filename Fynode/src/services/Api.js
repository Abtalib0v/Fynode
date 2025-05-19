import Axios from 'axios';

export class ApiService {
    static instanceUrl = "http://localhost:3002/";
    constructor(){
        this.axiosInstance = Axios.create({
            baseURL:ApiService.instanceUrl,
            timeout:3000,
        });
    }
    async getApiData(url) {
        const res = await this.axiosInstance.get(url);
        return res.data;
    }
     async getApibyId(url, id) {
    const res = await this.axiosInstance.get(`${url}/${id}`);
    return res.data;
  }
}
