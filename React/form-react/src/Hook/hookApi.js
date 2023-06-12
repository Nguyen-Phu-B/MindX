import { useEffect, useState } from "react";
import AxiosApi from "./axiosApi.api";
import FetchApi from "./fetchApi.api";

const HookApi = () => {
    const [list, setList] = useState([]);
    const [load, setLoad] = useState(false);

    useEffect(() => {
        getData();
    }, []);

    const getData = async () => {
        setLoad(true);

        // // FETCH
        // const respone = await FetchApi.GetApiPhone();
        // setList(respone);
        // // ---

        // AXIOS
        const respone = await AxiosApi.GetApiByAxios();
        console.log(respone);
        if (respone.status == "200") {
            setList(respone.data);
        }
        // ---

        setTimeout(() => {
            setLoad(false);
        }, 1000);
    };

    return {
        list,
        load,
    };
};

export default HookApi;
