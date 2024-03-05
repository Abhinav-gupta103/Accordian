import './App.css';
import { useState } from 'react'

import data from "./data.json"
import Accordian from './Component/accordian';
function App() {
  var vals = data.data.menu
  const [expanded, setExpanded] = useState(false)
  return (
    <>
      <h1 className='heading'>FAQ</h1>
      <div class="container">
        {vals && vals.map((val) => (
          val.items.length !== 0 ? val.items.map((item) => (
            <Accordian item={item} expanded={expanded} setExpanded={setExpanded} />
          )) : <Accordian name={val.name} expanded={false} />
        )
        )}
      </div>

    </>
  );
}

export default App;
