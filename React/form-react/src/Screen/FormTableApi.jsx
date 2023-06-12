import HookApi from "../Hook/hookApi";

const FormApiTb = () => {
    const { list, load } = HookApi();

    return load ? (
        <div className="text-center mt-5">
            <div className="spinner-border text-info" role="status">
                <span className="visually-hidden">Loading...</span>
            </div>
        </div>
    ) : (
        <div className="container">
            <form action="">
                <table className="table" style={{ marginTop: "16px" }}>
                    <thead>
                        <tr className="text-center">
                            <th scope="col">#</th>
                            <th scope="col">Tên sản phẩm</th>
                            <th scope="col">Màu</th>
                            <th scope="col">Dung lượng</th>
                            <th scope="col">Giá bán</th>
                            <th scope="col">Thao tác</th>
                        </tr>
                    </thead>
                    <tbody>
                        {list.map((item, index) => {
                            // console.log("uii ", list);
                            return (
                                <tr className="text-center" key={item.id}>
                                    <th scope="row">{index + 1}</th>
                                    <th>{item.name}</th>
                                    <th>
                                        {item.data?.color || item.data?.Color}
                                    </th>
                                    <th>
                                        {item.data?.Capacity ||
                                            item.data?.capacity ||
                                            item.data?.["capacity GB"]}
                                    </th>
                                    <th>
                                        {item.data?.price || item.data?.Price}
                                    </th>
                                    <td>
                                        <div className="row col-12">
                                            <div className="col-6 d-grid">
                                                <button
                                                    data-id={item.id}
                                                    className="btn btn-success btn-sm"
                                                >
                                                    <i className="fa-solid fa-pen-to-square"></i>
                                                </button>
                                            </div>
                                            <div className="col-6 d-grid">
                                                <button
                                                    data-id={item.id}
                                                    className="btn btn-danger btn-sm"
                                                >
                                                    <i className="fa-solid fa-trash "></i>
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

export default FormApiTb;
