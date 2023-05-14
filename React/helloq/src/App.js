import logo from './logo.svg';
import './App.css';
import Card from './Components/Card.js';
import dataList from './Data/dataList.js';
import './Components/Card_css.css';

function App() {
    console.log(dataList)
    const cards = dataList.map((data) => (
        <Card
          image={data.image}
          title={data.title}
          decription={data.decription}
        />
      ));
    
    return (
        // <div className="App">
        <div class='css-container'>
            <div class="ct-selection">
                <div class="ct-grid">
                    {cards}
                </div>
            </div>
        </div>
     );
}

export default App;
