const FetchApi = {
    GetApiPhone: async () => {
        const urlApi = "https://api.restful-api.dev/objects";
        let respone = await fetch(urlApi);
        let data = await respone.json();
        return data;
    },
};

export default FetchApi;
