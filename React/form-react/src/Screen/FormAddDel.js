import InputCustome from "../Components/InputCustom";
import ErrorCustome from "../Components/ErrorCustom";
import useHookAddDel from "../Hook/formAddDelHook";

const FormAddDel = () => {
    const {
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
    } = useHookAddDel();
    return (
        <div className="container">
            <form action="">
                <div>
                    <label htmlFor="firstname">Họ :</label>
                    <InputCustome
                        type="text"
                        name="firstname"
                        onChange={(e) => onChangeS(e, "firstname")}
                        value={data.firstName}
                    />
                    <ErrorCustome err={err.firstName} />
                </div>
                <div>
                    <label htmlFor="name">Tên :</label>
                    <InputCustome
                        type="text"
                        name="name"
                        onChange={(e) => onChangeS(e, "lastname")}
                        value={data.lastName}
                    />
                    <ErrorCustome err={err.lastName} />
                </div>
                <div className="radio-gender">
                    <label htmlFor="gender">Gender :</label>
                    <br />
                    <InputCustome
                        type="radio"
                        name="gender"
                        value={0}
                        checked={data.gender == 0}
                        onChange={(e) => onChangeS(e, "gender")}
                    />
                    Male
                    <InputCustome
                        type="radio"
                        name="gender"
                        value={1}
                        checked={data.gender == 1}
                        onChange={(e) => onChangeS(e, "gender")}
                    />
                    Female
                </div>
                {btnV == 0 ? (
                    <a
                        className="btn__ btn-dark"
                        href=""
                        onClick={(e) => btnAddClick(e)}
                    >
                        Thêm
                    </a>
                ) : (
                    <a
                        className="btn__ btn-dark"
                        href=""
                        data-id={dataEdit}
                        onClick={(e) => btnEditUpdate(e)}
                    >
                        Edit
                    </a>
                )}

                <table class="table" style={{ marginTop: "16px" }}>
                    <thead>
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">Họ và tên</th>
                            <th scope="col">Giới tính</th>
                            <th scope="col">Thao tác</th>
                        </tr>
                    </thead>
                    <tbody>
                        {listData.map((item, index) => {
                            return (
                                <tr>
                                    <th scope="row">{index + 1}</th>
                                    <td>
                                        {item.firstName + " " + item.lastName}
                                    </td>
                                    <td>{item.gender === 0 ? "Nam" : "Nữ"}</td>
                                    <td>
                                        <div className="row ">
                                            <div className="col-3 d-grid">
                                                <button
                                                    data-id={item.id}
                                                    onClick={(e) =>
                                                        btnEditClick(e)
                                                    }
                                                    className="btn btn-success btn-sm"
                                                >
                                                    <i class="fa-solid fa-pen-to-square"></i>
                                                </button>
                                            </div>
                                            <div className="col-3 d-grid">
                                                <button
                                                    data-id={item.id}
                                                    className="btn btn-danger btn-sm"
                                                    onClick={(e) =>
                                                        btnDelClick(e)
                                                    }
                                                >
                                                    <i class="fa-solid fa-trash "></i>
                                                </button>
                                            </div>
                                        </div>
                                    </td>
                                </tr>
                            );
                        })}
                    </tbody>
                </table>
            </form>
        </div>
    );
};

export default FormAddDel;
