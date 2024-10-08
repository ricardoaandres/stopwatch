import Stopwatch from "./components/Stopwatch";
import CreditCard from "./components/CreditCard";

function App() {
  return (
    <div className="App">
      <Stopwatch />

      <div className='credit-card-wrapper'>
        <CreditCard />
      </div>
    </div>
  );
}

export default App;
