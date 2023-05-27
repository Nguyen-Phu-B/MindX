const TextareaCustom = ({ name, cols, rows, placeholder, id ,value, onChange}) => {
    return (
        <textarea
            className="form-control"
            name={name}
            id={id}
            cols={cols}
            rows={rows}
            placeholder={placeholder}
            value={value}
            onChange={onChange}
        />
    );
};

export default TextareaCustom;
