import "./App.css";
import data from "./compounds/data.jsx";
import Img from "./compounds/img.jsx";


function App() {
  return (
    <>
    <h1 className="head">Kalvium gallery</h1>
    <div className="grid">
    <Img data={data}/>
      </div>
    </>
  );
}

export default App;
