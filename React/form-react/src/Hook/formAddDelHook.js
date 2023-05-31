import { useState } from "react";

// khởi tạo danh sách người dùng
const listDataDef = [];

// khởi tạo dữ liệu default
const dataDef = {
    id: null,
    firstName: "",
    lastName: "",
    gender: 0,
};

// khởi tạo lối default
const errDef = {
    firstName: "",
    lastName: "",
};

// biến để thay đởi nút Thêm và Edit
const btnDef = 0;

// biến lưu id cần chỉnh sửa
const dataEditDef = 0;

const useHookAddDel = () => {
    const [listData, setListData] = useState(listDataDef);
    const [data, setData] = useState(dataDef);
    let [dataEdit, setDataEdit] = useState(dataEditDef);
    const [err, setErr] = useState(errDef);
    const [btnV, setBtnV] = useState(btnDef);

    const onChangeS = (e, type) => {
        const dataClone = JSON.parse(JSON.stringify(data));
        const errClone = JSON.parse(JSON.stringify(err));
        let value = e.target.value;
        if (type == "firstname") {
            dataClone.firstName = value;
            value && (errClone.firstName = null);
        }
        if (type == "lastname") {
            dataClone.lastName = value;
            value && (errClone.lastName = null);
        }
        if (type == "gender") {
            dataClone.gender = value;
        }

        setData(dataClone);
        setErr(errClone);
    };

    const validateData = () => {
        const errClone = JSON.parse(JSON.stringify(err));
        let resultValid = false;

        for (let key in data) {
            if (data[key] === "") {
                errClone[key] = "Trường không được để trống";
                resultValid = true;
            }
        }
        setErr(errClone);
        return resultValid;
    };

    const getId = (attempt = 0) => {
        const listDataClone = JSON.parse(JSON.stringify(listData));
        const id = Math.floor(Math.random() * 100);
        const check = listDataClone.find((x) => x.id == id);
        if (check) {
            if (attempt >= 10) {
                return null;
            }
            return getId(attempt + 1);
        }

        return id;
    };

    // hàm reset value của input
    const rsIpDef = () => {
        const dataClone = JSON.parse(JSON.stringify(data));
        dataClone.firstName = "Nguyễn";
        dataClone.lastName = "A";
        dataClone.gender = 0;

        setData(dataClone);
    };

    // hàm thêm dữ liệu người dùng vào danh sách
    const btnAddClick = (e) => {
        let listDataClone = JSON.parse(JSON.stringify(listData));
        const dataClone = JSON.parse(JSON.stringify(data));

        e.preventDefault();
        const validCheck = validateData();
        if (!validCheck) {
            data.id = getId();
            console.log(data.id);
            listDataClone = [...listData, data];
        }
        setListData(listDataClone);

        rsIpDef();
    };

    // xóa dữ liệu người dùng ra khỏi danh sách
    const btnDelClick = (e) => {
        e.preventDefault();
        const id = e.target.closest("button").dataset.id;
        const listDataClone = JSON.parse(JSON.stringify(listData));
        let dataUpdate = [];
        const confirm = window.confirm("Bạn có chắc muốn xóa người dùng!");
        if (confirm) {
            listDataClone.forEach((item) => {
                if (item.id != id) {
                    dataUpdate = [...dataUpdate, item];
                }
            });
        }
        setListData(dataUpdate);
    };

    // click icon Edit đỗ dữ liệu theo id tương ứng vào input
    const btnEditClick = (e) => {
        e.preventDefault();
        const id = e.target.closest("button").dataset.id;
        const listDataClone = JSON.parse(JSON.stringify(listData));
        let dataUpdate;
        listDataClone.forEach((item) => {
            if (item.id == id) {
                dataUpdate = item;
            }
        });
        editValueById(dataUpdate);
    };

    // hàm đỗ dữ liệu lên input theo id và nhận điều kiện thay đổi btn Thêm -> Edit
    const editValueById = (prId) => {
        const dataClone = JSON.parse(JSON.stringify(data));
        let dataEditClone = JSON.parse(JSON.stringify(dataEdit));
        let btnClone = JSON.parse(JSON.stringify(btnV));

        dataClone.firstName = prId.firstName;
        dataClone.lastName = prId.lastName;
        dataClone.gender = prId.gender;
        setData(dataClone);
        dataEditClone = prId.id;
        setDataEdit(dataEditClone);

        btnClone = 1;
        setBtnV(btnClone);
    };

    // click Btn Edit cập nhật dữ liệu và trả input về default
    const btnEditUpdate = (e) => {
        e.preventDefault();
        const id = e.target.closest("a").dataset.id;
        let btnClone = JSON.parse(JSON.stringify(btnV));
        const listDataClone = JSON.parse(JSON.stringify(listData));

        const validCheck = validateData();
        if (!validCheck) {
            const confirm = window.confirm(
                "Bạn có chắc muốn sửa thông tin !!!"
            );
            if (confirm) {
                listDataClone.forEach((item) => {
                    if (item.id == id) {
                        item.firstName = data.firstName;
                        item.lastName = data.lastName;
                        item.gender = data.gender;
                    }
                });
            }
        }

        setListData(listDataClone);

        rsIpDef();

        btnClone = 0;
        setBtnV(btnClone);
    };

    return {
        onChangeS,
        listData,
        data,
        btnAddClick,
        err,
        btnDelClick,
        btnEditClick,
        btnV,
        btnEditUpdate,
        dataEdit,
    };
};

export default useHookAddDel;
