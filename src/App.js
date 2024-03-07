import './App.css';
import { useState } from 'react'

import data from "./data.json"
import Accordian from './Component/accordian';

function App() {
  var vals = data.data.menu
  const [openItemId, setOpenItemId] = useState(null)
  const handleToggle = (itemId) => {
    if (openItemId === itemId) setOpenItemId(null)
    else setOpenItemId(itemId)
  }
  return (
    <>
      <h1 className='heading'>FAQ</h1>
      <div className="container">
        {vals && vals.map((val) => (
          val.items.length !== 0 ? val.items.map((item) => (
            <Accordian key={item.id} item={item} isOpen={openItemId === item.id} onToggle={handleToggle} />
          )) : <Accordian key={val.id} item={val} isOpen={openItemId === val.id} onToggle={handleToggle} />
        )
        )}
      </div>

    </>
  );
}

export default App;
