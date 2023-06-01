const SelectionCustom = ({ name, id, data, onChange }) => {
    return (
        <select className="form-control" name={name} id={id} onChange={onChange}>
            {data.map((item, index) => {
                return (
                    <option key={index} value={item?.key}>
                        {item?.value} 
                    </option>
                );
            })}
        </select>
    );
};

export default SelectionCustom;
