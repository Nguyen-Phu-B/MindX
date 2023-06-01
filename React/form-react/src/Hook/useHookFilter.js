import { useEffect, useState } from "react";
import { Remove_Viet } from "./removeViet";
import dataUser from "../Mooks/dataUser.json";

// const listDataDefault = [
//     {
//         id: 1,
//         firstName: "Nguyễn",
//         lastName: "A",
//         gender: 1,
//     },
//     {
//         id: 2,
//         firstName: "Thị",
//         lastName: "B",
//         gender: 2,
//     },
//     {
//         id: 3,
//         firstName: "Thị",
//         lastName: "C",
//         gender: 2,
//     },
//     {
//         id: 4,
//         firstName: "Văn",
//         lastName: "D",
//         gender: 1,
//     },
//     {
//         id: 5,
//         firstName: "Nguyễn",
//         lastName: "E",
//         gender: 1,
//     },
//     {
//         id: 6,
//         firstName: "Tô",
//         lastName: "F",
//         gender: 2,
//     },
//     {
//         id: 7,
//         firstName: "Lê",
//         lastName: "G",
//         gender: 1,
//     },
//     {
//         id: 8,
//         firstName: "Nguyễn",
//         lastName: "H",
//         gender: 1,
//     },
// ];

const listDataDefault = dataUser;
const dataSelGender = [
    { key: 0, value: "All" },
    { key: 1, value: "Male" },
    { key: 2, value: "Female" },
];

const dataFilter = {
    filterGender: "",
    filterName: "",
};

const useHookFilter = () => {
    const [list, setList] = useState([]);
    const [listAll, setListAll] = useState([]);
    const [selGender, setSelGender] = useState(dataSelGender);
    const [filter, setFilter] = useState(dataFilter);

    const jsonParse = (pr) => JSON.parse(JSON.stringify(pr));

    useEffect(() => {
        setList(listDataDefault);
        setListAll(listDataDefault);
    }, []);

    useEffect(() => {
        if (filter.filterGender) {
            if (filter.filterGender.key == 0) {
                setList(listAll);
            } else {
                const lsDataFilterClone = jsonParse(listAll);
                const updateFilter = lsDataFilterClone.filter(
                    (x) => x.gender == filter.filterGender.key
                );
                setList(updateFilter);
            }
        }
        if (filter.filterName?.length > 0) {
            const listClone = jsonParse(list);
            const filterVal = filter.filterName
                ? filter.filterName.trim().toUpperCase()
                : "";
            const resultSearchName = listClone.filter((item) => {
                return Remove_Viet(
                    item?.firstName + " " + item?.lastName
                ).includes(Remove_Viet(filterVal));
            });
            setList(resultSearchName);
            console.log("lisst", listClone);
            console.log("filterVal", filterVal);
            console.log("filterValRél", resultSearchName);
        }
    }, [filter]);

    useEffect(() => {
        if (selGender.length > 0) {
            const filterClone = jsonParse(filter);
            filterClone.filterGender = selGender[0];
            console.log("selgender", filterClone);
            setFilter(filterClone);
        }
    }, [selGender]);

    const onChangeHook = (e, name) => {
        if (name == "gender") {
            const dataGenderClone = jsonParse(selGender);
            const result = dataGenderClone?.find(
                (x) => x.key == e.target.value
            );
            const filterClone = jsonParse(filter);
            filterClone["filterGender"] = result;
            setFilter(filterClone);
            console.log("change", filterClone);
        } else if (name == "name") {
            const filterClone = jsonParse(filter);
            filterClone["filterName"] = e.target.value;
            setFilter(filterClone);
            console.log("change", filterClone);
        }
    };

    return { list, listAll, selGender, onChangeHook, filter };
};

export default useHookFilter;
