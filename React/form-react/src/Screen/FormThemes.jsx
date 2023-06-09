import { useState } from "react";
import BoxThemes from "../Components/BoxThemes";
import SelectTheme from "../Components/SelectionTheme";
import ThemeContext from "../ThemeContext";

const FormThemes = () => {
    const [theme, setTheme] = useState('Light');
    return (
        <ThemeContext.Provider value={{ theme: theme, setTheme: setTheme }}>
            <div className="container">
                <div className="row">
                    <BoxThemes prContent="Com 1" />
                    <BoxThemes prContent="Com 2" />
                    <BoxThemes prContent="Com 3" />
                </div>
                <SelectTheme />
            </div>
        </ThemeContext.Provider>
    );
};

export default FormThemes;
