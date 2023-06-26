import React, { useState } from 'react';

const initialCounts = [
  {
    id: 1,
    value: 0,
    image: '\uD83D\uDE02'
  },
  {
    id: 2,
    value: 0,
    image: '\uD83D\uDE0D'
  },
  {
    id: 3,
    value: 0,
    image: '\uD83D\uDE2D'
  },
  {
    id: 4,
    value: 0,
    image: '\uD83D\uDE31'
  },
  {
    id: 5,
    value: 0,
    image: '\uD83D\uDE0E'
  }
]

function App() {
  const [counts, setCounts] = useState(initialCounts);  

  const plus = (id) => {    
    const updatedCounts = counts.map(elem => elem.id === id ? {...elem, value: elem.value + 1} : elem);
    setCounts(updatedCounts);    
  };

  const showResults = () => {
    let maxNumber = Math.max(...counts.map(elem => elem.value));
    let maxCount = counts.filter(elem => elem.value === maxNumber);     
    setCounts([...maxCount]); 
  };

  return (
    <div>
      <ul>
        {counts.map(elem => (
          <li key={elem.id} style={{ listStyle: 'none' }}>
            <button onClick={() => plus(elem.id)} style={{ marginRight: '10px', border: '0', backgroundColor: 'transparent', fontSize: '20px' }}>{elem.image}</button>
            {elem.value}
          </li>
        ))}
      </ul>  

      <button onClick={() => showResults()} style={{ marginLeft: '20px' }}>Show results</button>    
    </div>
  );

}

export default App;




