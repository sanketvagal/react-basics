import './App.css';
import Heading from './components/Heading';
import InputComponent from './components/InputComponent';
import TextInputWithFocusButton from './components/TextInputWithFocusButton';

function App() {
  return (
    <><div className="App">
      <Heading />
    </div>
      <div>
        <InputComponent />
      </div>
      <div>
        <TextInputWithFocusButton />
      </div>

    </>
  );
}

export default App;
