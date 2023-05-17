import logo from "./logo.svg";
import "./App.css";
import InputCustom from "./Components/InputCustom";
import SelectionCustom from "./Components/SelectionCustom";
import * as React from "react";
import { TextField } from "@mui/material";
import TextareaCustom from "./Components/TextareaCustom";

const dataCourse = [
  { value: 0, label: "Course" },
  { value: 1, label: "FrontEnd" },
  { value: 2, label: "BackEnd" },
];

function App() {
  return (
    <div className="container">
      <form action="">
        <h1 className="title">Student Registration Form</h1>

        <div>
          <label for="firstname">Firstname :</label>
          <TextField
            style={{ width: "100%" }}
            id="outlined-basic"
            label="FirstName"
            variant="outlined"
          />
          <InputCustom type="text" name="firstname" placeholder="FirstName" />
          {/* <input className="form-control" type="text" name="" id="firstname" placeholder="Firstname"/> */}
        </div>
        <div>
          <label for="midlename">Midlename :</label>
          {/* <input
            className="form-control"
            type="text"
            name=""
            id="midlename"
            placeholder="Midlename"
          /> */}
          <InputCustom type="text" name="midlename" placeholder="MidleName" />
        </div>
        <div>
          <label for="lastname">Lastname :</label>
          {/* <input
            className="form-control"
            type="text"
            name=""
            id="lastname"
            placeholder="Lastname"
          /> */}
          <InputCustom type="text" name="lastname" placeholder="LastName" />
        </div>
        <div className="">
          <label for="slc-course">Course:</label>
          <SelectionCustom id="slc_course" name="course" data={dataCourse} />
        </div>
        <div className="radio-gender">
          <label for="gender">Gender :</label>
          <br />
          <InputCustom type="radio" name="gender" value="0" />
          Male
          <InputCustom type="radio" name="gender" value="1" />
          Female
          <InputCustom type="radio" name="gender" value="2" />
          Order
        </div>
        <div className="">
          <label for="phone-first">Phone :</label>
          {/* <input
            className="form-control"
            type="text"
            name=""
            id="phone-first"
            value="+91"
          /> */}
          <InputCustom type="text" name="phonefirst" value="+91" />
          <InputCustom type="text" name="phonesecond" placeholder="phone no." />
          {/* <input
            className="form-control"
            type="text"
            name=""
            id="phone-second"
            placeholder="phone no."
          /> */}
        </div>

        <div className="">
          <label for="txt-current">Current Address:</label>
          {/* <textarea
            className="form-control"
            name=""
            id="txt-current"
            cols="30"
            rows="10"
            placeholder="Current Address"
          ></textarea> */}
          <TextareaCustom
            name="txtCurrentAddress"
            cols="30"
            rows="10"
            placeholder="Current Address"
          />
        </div>
        <div className="">
          <label className="text-bold" for="email">
            Email
          </label>
          <InputCustom type="email" name="email" placeholder="Enter Email" />
          {/* <input
            className="form-control"
            type="email"
            name=""
            id="email"
            placeholder="Enter Email"
          /> */}
        </div>
        <div className="">
          <label className="text-bold" for="password">
            Password
          </label>
          {/* <input
            className="form-control"
            type="password"
            name=""
            id="password"
            placeholder="Enter Password"
          /> */}
          <InputCustom
            type="password"
            name="pass"
            placeholder="Enter Password"
          />
        </div>
        <div className="">
          <label className="text-bold" for="re-password">
            Re-type Password
          </label>
          {/* <input
            className="form-control"
            type="password"
            name=""
            id="re-password"
            placeholder="Retype Password"
          /> */}
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
