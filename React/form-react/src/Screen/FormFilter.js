import InputCustome from "../Components/InputCustom";
import ErrorCustome from "../Components/ErrorCustom";
import useHookFilter from "../Hook/useHookFilter";
import SelectionCustom from "../Components/SelectionCustom";

const FormFilter = () => {
    const { list, selGender, onChangeHook, filter } = useHookFilter();
    return (
        <div className="container">
            <form action="">
                <div>
                    <label htmlFor="name">Tên :</label>
                    <InputCustome
                        type="text"
                        name="name"
                        onChange={(e) => onChangeHook(e, "name")}
                    />
                </div>
                <div>
                    <SelectionCustom
                        data={selGender}
                        onChange={(e) => onChangeHook(e, "gender")}
                    />
                </div>

                <table className="table" style={{ marginTop: "16px" }}>
                    <thead>
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">Họ và tên</th>
                            <th scope="col">Giới tính</th>
                            <th scope="col">Thao tác</th>
                        </tr>
                    </thead>
                    <tbody>
                        {list.map((item, index) => {
                            // console.log("uii ", list);
                            return (
                                <tr>
                                    <th scope="row">{index + 1}</th>
                                    <td>
                                        {item.firstName + " " + item.lastName}
                                    </td>
                                    <td>
                                        {item.gender == 1
                                            ? "Nam"
                                            : item.gender == 2
                                            ? "Nữ"
                                            : ""}
                                    </td>
                                    <td>
                                        <div className="row ">
                                            <div className="col-3 d-grid">
                                                <button
                                                    data-id={item.id}
                                                    className="btn btn-success btn-sm"
                                                >
                                                    <i className="fa-solid fa-pen-to-square"></i>
                                                </button>
                                            </div>
                                            <div className="col-3 d-grid">
                                                <button
                                                    data-id={item.id}
                                                    className="btn btn-danger btn-sm"
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

export default FormFilter;
