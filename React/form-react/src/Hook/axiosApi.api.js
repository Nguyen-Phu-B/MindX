import axios from "axios";
const AxiosApi = {
    GetApiByAxios: async () => {
        const urlApi = "https://api.restful-api.dev/objects";
        let data = await axios.get(urlApi);
        return data;
    },
};

export default AxiosApi;
