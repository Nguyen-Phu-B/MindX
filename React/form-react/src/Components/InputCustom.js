const InputCustom = ({ type, name, placeholder, value }) => {
  return type == "text" ? (
    <input
      className="form-control"
      type={type}
      name={name}
      value={value}
      placeholder={placeholder}
    />
  ) : type == "radio" ? (
    <input
      type={type}
      name={name}
      value={value}
      placeholder={placeholder}
      style={{ marginLeft: "10px" }}
    />
  ) : (
    <input
      className="form-control"
      type={type}
      name={name}
      value={value}
      placeholder={placeholder}
    />
  );
};

export default InputCustom;
