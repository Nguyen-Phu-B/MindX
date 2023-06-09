import InputCustom from "../Components/InputCustom";
import SelectionCustom from "../Components/SelectionCustom";
import TextareaCustom from "../Components/TextareaCustom";
import useHookRegister from "../Hook/useHook";
import ErrorCustom from "../Components/ErrorCustom";

const dataCourse = [
    { value: "", label: "Course" },
    { value: "frontend", label: "FrontEnd" },
    { value: "backend", label: "BackEnd" },
    { value: "fullstack", label: "FullStack" },
];

const FormUser = () => {
    const { onChange, user, onSubmit, error } = useHookRegister();

    return (
        <div className="container">
            <form action="">
                <h1 className="title">Student Registration Form</h1>

                <div>
                    <label htmlFor="firstname">Firstname :</label>
                    <InputCustom
                        type="text"
                        name="firstname"
                        placeholder="FirstName"
                        value={user.FirstName}
                        onChange={(e) => onChange(e, "firstname")}
                    />
                    <ErrorCustom err={error.FirstName} />
                </div>
                <div>
                    <label htmlFor="middlename">Middlename :</label>
                    <InputCustom
                        type="text"
                        name="middlename"
                        placeholder="MiddleName"
                        value={user.MiddleName}
                        onChange={(e) => onChange(e, "middlename")}
                    />
                    <ErrorCustom err={error.MiddleName} />
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
                    <ErrorCustom err={error.LastName} />
                </div>
                <div className="">
                    <label htmlFor="slc-course">Course:</label>
                    <SelectionCustom
                        id="slc_course"
                        name="course"
                        data={dataCourse}
                        onChange={(e) => onChange(e, "course")}
                    />
                    <ErrorCustom err={error.Course} />
                </div>
                <div className="radio-gender">
                    <label htmlFor="gender">Gender :</label>
                    <br />
                    <InputCustom
                        type="radio"
                        name="gender"
                        value="male"
                        checked={user.Gender == "male"}
                        onChange={(e) => onChange(e, "gender")}
                    />
                    Male
                    <InputCustom
                        type="radio"
                        name="gender"
                        value="female"
                        checked={user.Gender == "female"}
                        onChange={(e) => onChange(e, "gender")}
                    />
                    Female
                    <InputCustom
                        type="radio"
                        name="gender"
                        value="order"
                        checked={user.Gender == "order"}
                        onChange={(e) => onChange(e, "gender")}
                    />
                    Order
                </div>
                <ErrorCustom err={error.Gender} />

                <div className="">
                    <label htmlFor="phone-first">Phone :</label>
                    <InputCustom
                        type="text"
                        name="phonefirst"
                        placeholder="+81"
                        value={user.PhoneNumst}
                        onChange={(e) => onChange(e, "phonenumst")}
                    />
                    <ErrorCustom err={error.PhoneNumst} />
                </div>

                <div className="">
                    <label htmlFor="txt-current">Current Address:</label>
                    <TextareaCustom
                        name="txtCurrentAddress"
                        cols="30"
                        rows="10"
                        placeholder="Current Address"
                        value={user.Address}
                        onChange={(e) => onChange(e, "address")}
                    />
                    <ErrorCustom err={error.Address} />
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
                    <ErrorCustom err={error.Email} />
                </div>
                <div className="">
                    <label className="text-bold" htmlFor="password">
                        Password
                    </label>
                    <InputCustom
                        type="password"
                        name="pass"
                        placeholder="Enter Password"
                        value={user.Password}
                        onChange={(e) => onChange(e, "pass")}
                    />
                    <ErrorCustom err={error.Password} />
                </div>
                <div className="">
                    <label className="text-bold" htmlFor="re-password">
                        Re-type Password
                    </label>
                    <InputCustom
                        type="password"
                        name="repass"
                        placeholder="Retype Password"
                        value={user.RePass}
                        onChange={(e) => onChange(e, "repass")}
                    />
                    <ErrorCustom err={error.RePass} />
                </div>
                <a className="btn" href="" onClick={(e) => onSubmit(e)}>
                    Register
                </a>
            </form>
        </div>
    );
};

export default FormUser;
