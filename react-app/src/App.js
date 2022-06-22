import logo from './logo.svg';
import './App.css';
import React, { useEffect, useLayoutEffect, useState } from 'react'

const APP = (props) => {
  const [color, setColor] = useState('blue');

  useLayoutEffect(() => alert(color));

  useEffect(() => { console.log('color', color) })

  return <>
    <div style={{ backgroundColor: color }}>颜色</div>
    <button onClick={() => setColor('red')}>红</button>
    <button onClick={() => setColor('yellow')}>黄</button>
  </>
}

export default APP;

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;
