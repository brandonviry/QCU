import "./App.css";
import LstQuestion from "./ui/components/Lstquestion/Lstquestion";
import Data from "./data/question.json";

function App() {
  return (
    <>
      <LstQuestion Data={Data.data}></LstQuestion>
    </>
  );
}

export default App;
