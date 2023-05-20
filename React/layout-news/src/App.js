import logo from "./logo.svg";
import "./App.css";
import CardNews from "./Components/CardNews";

function App() {
    return (
        <div className="App row">
            <div className="col-6">
                <CardNews imgShow={false} />
            </div>
            <div className="col-6">
                <div>
                    <CardNews imgShow={true} titleIndex="top" />
                </div>
                <div>
                    <CardNews />
                </div>
            </div>
        </div>
    );
}

export default App;
