import Buttons from "../Components/ls5/Buttons";
import useHooks from "../Components/ls5/useHooks";
const Hooks = () => {
    const { number, numAct, numRmove } = useHooks();
    return (
        <div className="container">
            <div className="text-center">
                <label>{number}</label>
            </div>
            <div className="row">
                <div className="col-6 d-grid">
                    <Buttons clBtn={"btn-success"} eBtn={numAct} ttBtn="+" />
                </div>
                <div className="col-6 d-grid">
                    <Buttons clBtn={"btn-danger"} eBtn={numRmove} ttBtn="-" />
                </div>
            </div>
        </div>
    );
};

export default Hooks;
