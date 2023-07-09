const Buttons = ({ ttBtn, eBtn, clBtn = "" }) => {
    return (
        <button className={clBtn + " btn btn-block"} onClick={eBtn}>
            {ttBtn}
        </button>
    );
};

export default Buttons;
