import { useState } from "react";

const userDefault = {
    FirstName: "",
    MiddleName: "",
    LastName: "",
    Course: "",
    Gender: "",
    PhoneNumst: "",
    Address: "",
    Email: "",
    Password: "",
    RePass: "",
};

const errorDefault = {
    FirstName: "",
    MiddleName: "",
    LastName: "",
    Course: "",
    Gender: "",
    PhoneNumst: "",
    Address: "",
    Email: "",
    Password: "",
    RePass: "",
};

const useHookRegister = () => {
    const [user, setUser] = useState(userDefault);
    const [error, setError] = useState(errorDefault);

    // useEffect(() => {
    //     console.log(user);
    // }, [user]);

    const onChange = async (e, field) => {
        let valueInput = e.target.value;
        const userClone = JSON.parse(JSON.stringify(user));
        const errorClone = JSON.parse(JSON.stringify(error));

        if (field == "firstname") {
            userClone.FirstName = valueInput;
            valueInput && (errorClone.FirstName = null);
        }
        if (field == "lastname") {
            userClone.LastName = valueInput;
            valueInput && (errorClone.LastName = null);
        }
        if (field == "middlename") {
            userClone.MiddleName = valueInput;
            valueInput && (errorClone.MiddleName = null);
        }
        if (field == "phonenumst") {
            userClone.PhoneNumst = valueInput;
            valueInput && (errorClone.PhoneNumst = null);
        }
        if (field == "email") {
            userClone.Email = valueInput;
            valueInput && (errorClone.Email = null);
        }
        if (field == "course") {
            userClone.Course = valueInput;
            valueInput && (errorClone.Course = null);
        }
        if (field == "gender") {
            userClone.Gender = valueInput;
            valueInput && (errorClone.Gender = null);
        }
        if (field == "address") {
            userClone.Address = valueInput;
            valueInput && (errorClone.Address = null);
        }
        if (field == "pass") {
            userClone.Password = valueInput;
            valueInput && (errorClone.Password = null);
        }
        if (field == "repass") {
            userClone.RePass = valueInput;
            valueInput && (errorClone.RePass = null);
        }

        setError(errorClone);
        setUser(userClone);
    };

    const validateField = () => {
        const errorClone = JSON.parse(JSON.stringify(error));
        const userClone = JSON.parse(JSON.stringify(user));
        let result = true;

        const phoneNumPattern =
            /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        // kiểm trả trường không được để trống
        for (let key in userClone) {
            if (userClone[key] == "") {
                // debugger;
                errorClone[key] = "Trường này không được để trống !";
                result = false;
            }
        }

        // kiểm tra điều kiện hợp lệ
        if (!phoneNumPattern.test(userClone.PhoneNumst)) {
            result = false;
            errorClone.PhoneNumst = "Số điện thoại không hợp lệ";
        } else {
            errorClone.PhoneNumst = null;
        }

        if (!emailPattern.test(userClone.Email)) {
            result = false;
            errorClone.Email = "Email không hợp lệ";
        } else {
            errorClone.Email = null;
        }

        if (userClone.Password != userClone.RePass) {
            result = false;
            errorClone.Password = "Password không hợp lệ";
            errorClone.RePass = "Password không hợp lệ";
        } else {
            errorClone.Password = null;
            errorClone.RePass = null;
        }
        setError(errorClone);
        return result;
    };

    // xóa khoảng trổng
    const trimValue = () => {
        const userClone = JSON.parse(JSON.stringify(user));

        for (let key in userClone) {
            user[key] = userClone[key].trim();
            // console.log(key, ": ", user[key]);
        }
        setUser(user);
    };

    const onSubmit = (e) => {
        e.preventDefault();
        trimValue();
        const validate = validateField();
        if (validate) {
            console.log("user", user);
        }
    };

    return {
        onChange,
        user,
        onSubmit,
        error,
    };
};

export default useHookRegister;
