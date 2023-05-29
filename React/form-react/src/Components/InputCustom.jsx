const InputCustom = ({ type, name, placeholder, value, onChange,checked }) => {
    return type == "text" ? (
        <input
            className="form-control"
            type={type}
            name={name}
            value={value}
            placeholder={placeholder}
            onChange={onChange}
        />
    ) : type == "radio" ? (
        <input
            type={type}
            name={name}
            value={value}
            placeholder={placeholder}
            checked={checked}
            onChange={onChange}
            style={{ margin: "0 5px" }}
        />
    ) : (
        <input
            className="form-control"
            type={type}
            name={name}
            value={value}
            placeholder={placeholder}
            onChange={onChange} 
            
        />
    );
};

export default InputCustom;
