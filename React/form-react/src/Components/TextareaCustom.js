const TextareaCustom = ({ name, cols, rows, placeholder, id }) => {
  return (
    <textarea
      className="form-control"
      name={name}
      id={id}
      cols={cols}
      rows={rows}
      placeholder={placeholder}
    />
  );
};

export default TextareaCustom;
