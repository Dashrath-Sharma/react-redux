import './App.css';
import Home from './components/Home';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import {reducer} from './components/redux/reducers'

function App() {
  const store = createStore(reducer);
  return (
    <Provider store={store}>
    <div className="App">
      <Home />
    </div>
    </Provider>
  );
}

export default App;
