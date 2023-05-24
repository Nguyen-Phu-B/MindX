import logo from "./logo.svg";
import "./App.css";
import InputCustom from "./Components/InputCustom";
import SelectionCustom from "./Components/SelectionCustom";
import * as React from "react";
import { TextField } from "@mui/material";
import TextareaCustom from "./Components/TextareaCustom";
import useHookRegister from "./Components/useHook";

const dataCourse = [
    { value: 0, label: "Course" },
    { value: "frontend", label: "FrontEnd" },
    { value: "backend", label: "BackEnd" },
    { value: "fullstack", label: "FullStack" },
];

function App() {
    const { onChange, user, emailError, phoneError, courseError, selValue } =
        useHookRegister(dataCourse[0]?.value);
    return (
        <div className="container">
            <form action="">
                <h1 className="title">Student Registration Form</h1>

                <div>
                    <label htmlFor="firstname">Firstname :</label>
                    {/* <TextField
                        style={{ width: "100%" }}
                        id="outlined-basic"
                        label="FirstName"
                        variant="outlined"
                    /> */}
                    <InputCustom
                        type="text"
                        name="firstname"
                        placeholder="FirstName"
                        value={user.FirstName}
                        onChange={(e) => onChange(e, "firstname")}
                    />
                </div>
                <div>
                    <label htmlFor="midlename">Midlename :</label>
                    <InputCustom
                        type="text"
                        name="midlename"
                        placeholder="MiddleName"
                        value={user.MiddleName}
                        onChange={(e) => onChange(e, "middlename")}
                    />
                </div>
                <div>
                    <label htmlFor="lastname">Lastname :</label>
                    <InputCustom
                        type="text"
                        name="lastname"
                        placeholder="LastName"
                        value={user.LastName}
                        onChange={(e) => onChange(e, "lastname")}
                    />
                </div>
                <div className="">
                    <label htmlFor="slc-course">Course:</label>
                    <SelectionCustom
                        id="slc_course"
                        name="course"
                        data={dataCourse}
                        value={selValue}
                        onChange={(e) => onChange(e, "course")}
                    />
                    {courseError && (
                        <span style={{ color: "red" }}>Course is invalid</span>
                    )}
                </div>
                <div className="radio-gender">
                    <label htmlFor="gender">Gender :</label>
                    <br />
                    <InputCustom type="radio" name="gender" value="0" />
                    Male
                    <InputCustom type="radio" name="gender" value="1" />
                    Female
                    <InputCustom type="radio" name="gender" value="2" />
                    Order
                </div>
                <div className="">
                    <label htmlFor="phone-first">Phone :</label>
                    <InputCustom
                        type="text"
                        name="phonefirst"
                        placeholder="+81"
                        value={user.PhoneNumst}
                        onChange={(e) => onChange(e, "phonenumst")}
                    />
                    {phoneError && (
                        <span style={{ color: "red" }}>
                            Phonenumber is invalid
                        </span>
                    )}
                    {/* <InputCustom
                        type="text"
                        name="phonesecond"
                        placeholder="phone no."
                        value={user.PhoneNumsd}
                        onChange={(e) => onChange(e, "phonenumsd")}
                    />
                    {phoneError && (
                        <span style={{ color: "red" }}>Email is invalid</span>
                    )} */}
                </div>

                <div className="">
                    <label htmlFor="txt-current">Current Address:</label>
                    <TextareaCustom
                        name="txtCurrentAddress"
                        cols="30"
                        rows="10"
                        placeholder="Current Address"
                    />
                </div>
                <div className="">
                    <label className="text-bold" htmlFor="email">
                        Email
                    </label>
                    <InputCustom
                        type="text"
                        name="email"
                        placeholder="Enter Email"
                        value={user.Email}
                        onChange={(e) => onChange(e, "email")}
                    />
                    {emailError && (
                        <span style={{ color: "red" }}>Email is invalid</span>
                    )}
                </div>
                <div className="">
                    <label className="text-bold" htmlFor="password">
                        Password
                    </label>
                    <InputCustom
                        type="password"
                        name="pass"
                        placeholder="Enter Password"
                    />
                </div>
                <div className="">
                    <label className="text-bold" htmlFor="re-password">
                        Re-type Password
                    </label>
                    <InputCustom
                        type="password"
                        name="repass"
                        placeholder="Retype Password"
                    />
                </div>
                <a className="btn" href="">
                    Register
                </a>
            </form>
        </div>
    );
}

export default App;
