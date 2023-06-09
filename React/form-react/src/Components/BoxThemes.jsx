import ThemeContext from "../ThemeContext";

const BoxThemes = ({ prContent }) => {
    return (
        <ThemeContext.Consumer>
            {(value) => {
                return (
                    <div
                        className="border border-success"
                        style={{
                            width: "200px",
                            height: "200px",
                            backgroundColor:
                                value.theme == "Light" ? "#fff" : "#333",
                            margin: "10px",
                        }}
                    >
                        <h2
                            style={{
                                color: value.theme != "Light" ? "#fff" : "#333",
                            }}
                        >{prContent}</h2>
                    </div>
                );
            }}
        </ThemeContext.Consumer>
    );
};

export default BoxThemes;
