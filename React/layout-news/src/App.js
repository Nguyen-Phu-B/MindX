import logo from "./logo.svg";
import "./App.css";
import CardNews from "./Components/CardNews";
import Hooks from "./Render/Hook";

function App() {
    return (
        <Hooks />
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
