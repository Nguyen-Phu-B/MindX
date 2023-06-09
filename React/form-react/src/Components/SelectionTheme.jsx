import { useContext } from "react";
import ThemeContext from "../ThemeContext";
import SelectionCustom from "./SelectionCustom";

const dataTheme = [
    { value: "Light", label: "Light" },
    { value: "Dark", label: "Dark" },
];

const SelectTheme = () => {
    const themeContext = useContext(ThemeContext);

    const onSelectTheme = (e) => {
        themeContext.setTheme(e.target.value);
    };

    return (
        <div style={{ width: "300px" }}>
            <SelectionCustom
                data={dataTheme}
                value={themeContext.theme}
                onChange={(e) => {
                    onSelectTheme(e);
                }}
            />
        </div>
    );
};

export default SelectTheme;