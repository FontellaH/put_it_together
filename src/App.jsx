import './App.css';

import PutItTogether from './components/PutItTogether';


function App() {
  return (
    <div className="App">

      <PutItTogether lastname={"Doe,"} firstname={" Jane"} age={45} hairColor={"Black"} />   <br />

      <PutItTogether lastname={"Smith,"} firstname={"John"} age={88} hairColor={"Brown"} />   <br />

    </div>
  );
}

export default App;

