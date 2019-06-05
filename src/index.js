import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';


export default function App() {
  return (
    <div className="App">
      Hello, Storybook
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById('root'));

serviceWorker.unregister();
