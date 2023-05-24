import logo from "./logo.svg";
import "./App.css";
import CardNews from "./Components/CardNews";
import Hooks from "./Render/Hook";
import ChangeLight from "./Render/ChangeLight";

function App() {
    return (
        <ChangeLight />

        // <Hooks />

        // <div className="App row">
        //     <div className="col-6">
        //         <CardNews imgShow={false} />
        //     </div>
        //     <div className="col-6">
        //         <div>
        //             <CardNews imgShow={true} titleIndex="top" />
        //         </div>
        //         <div>
        //             <CardNews />
        //         </div>
        //     </div>
        // </div>
    );
}

export default App;
