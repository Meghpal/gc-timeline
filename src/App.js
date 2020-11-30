import './css/App.css';
import Header from './components/Header';
import Timeline from './components/Timeline';
import { useState } from 'react';

function App() {
  let [occupy, setOccupy] = useState(true)
  return (
    <div className="app">
      <Header occupy={occupy} setOccupy={setOccupy}></Header>
      {!occupy && <Timeline />}
    </div>

  );
}

export default App;
