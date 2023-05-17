const SelectionCustom = ({ name, id, data }) => {
  return (
    <select className="form-control" name={name} id={id}>
      {data.map((item, index) => {
        return (
          <option key={index} value={item?.value}>
            {item?.label}
          </option>
        );
      })}
    </select>
  );
};

export default SelectionCustom;
