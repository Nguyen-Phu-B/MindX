import useHookLight from "../Components/ls5/useHookLightColor";

const ChangeLight = () => {
    const { numberLight, changeColor } = useHookLight();
    return (
        <div className="container ">
            <div className="text-center row">
                <div className="">
                    <button className="btn btn-dark" onClick={changeColor}>
                        Change
                    </button>
                </div>
                <div
                    className="mt-3"
                    style={{ display: "flex", justifyContent: "center" }}
                >
                    <div
                        className="light"
                        style={{
                            backgroundColor: numberLight == 0 ? "red" : "",
                        }}
                    ></div>
                    <div
                        className="light"
                        style={{
                            backgroundColor: numberLight == 1 ? "blue" : "",
                        }}
                    ></div>
                    <div
                        className="light"
                        style={{
                            backgroundColor: numberLight == 2 ? "yellow" : "",
                        }}
                    ></div>
                </div>
            </div>
        </div>
    );
};

export default ChangeLight;
