import { useState, useEffect } from "react";

const userDefault = {
    FirstName: "",
    LastName: "",
    MiddleName: "",
    PhoneNumst: "",
    Email: "",
    Course: "",
    Gender: "",
};

const useHookRegister = () => {
    const [user, setUser] = useState(userDefault);
    const [selValue, setSelValue] = useState("");

    const [emailError, setEmailError] = useState(false);
    const [phoneError, setPhoneError] = useState(false);
    const [courseError, setCourseError] = useState(false);

    useEffect(() => {
        console.log(user);
    }, [user]);

    const onChange = (e, field) => {
        // const userClone = JSON.parse(JSON.stringify(user));
        // if (field == "firstname") {
        //     userClone.FirstName = e.target.value;
        // }
        // if (field == "lastname") {
        //     userClone.LastName = e.target.value;
        // }
        // setUser(userClone);

        setUser((prevUser) => ({
            ...prevUser,
            [field === "firstname"
                ? "FirstName"
                : field === "lastname"
                ? "LastName"
                : field === "middlename"
                ? "MiddleName"
                : field === "phonenumst"
                ? "PhoneNumst"
                : field === "email"
                ? "Email"
                : field === "course"
                ? "Course"
                : field === "gender"
                ? "Gender"
                : ""]: e.target.value,
        }));

        if (field === "course") {
            const selectedValue = e.target.value;
            setSelValue(selectedValue);
            setCourseError(selectedValue === "0");
        }

        if (field === "phonenumst") {
            const phoneNumPattern =
                /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;
            const isValidPhoneNum = phoneNumPattern.test(e.target.value);
            setPhoneError(!isValidPhoneNum);
        }

        if (field === "email") {
            const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            const isValidEmail = emailPattern.test(e.target.value);
            setEmailError(!isValidEmail);
        }
    };

    return { onChange, user, emailError, phoneError, courseError, selValue };
};

export default useHookRegister;
