import React from 'react'
import { useState } from 'react'


//add 7 on the arrya using useState
function App() {

  const [val, setVal] = useState([
      { name: "Ankit", age: 23 },
      { name: "Raju", age: 27 },
      { name: "Ramesh", age: 34 },
    ]);

  return (
    <div className="p-5">
      {val.map((item) => (
        <div key={item.name} className="border-2 border-gray-200 p-3 mb-2">
          <h1>{item.name}</h1>
          <p>{item.age}</p>
        </div>
      ))}
      <button
        onClick={() => setVal(val.filter(item => item.name === "Raju" ? item.age = 26 : item))}
        className="px-2 py-1 bg-blue-500 text-zinc-100 rounded mt-3"
      >
        Add
      </button>
    </div>
    
  )
}

export default App