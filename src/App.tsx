// import React from 'react';
// // import logo from './logo.svg';
// import './App.css';
// // import Labs from './Labs/Labs';
// import Labs from './Labs';
// import Kanbas from './Kanbas';
// import {HashRouter, Link, Route, Routes} from 'react-router-dom';

// function App() {
//   return (
//       <div className='container-fluid'>
//         <HashRouter>
//           <img src="images/NU_logo.png" alt="NU Logo" width={200} height="100px"/>
//           <h1>Hello Drumil! Welcome to CS5600 </h1>
//           | <Link to="/Kanbas">Kanbas</Link> | <Link to="/Labs">Labs</Link> | <Link to="/Labs/Lab1">Lab 1</Link> | <Link to="/Labs/Lab2">Lab 2</Link> | <Link to="/Labs/Lab3">Lab 3</Link> |
//           <Routes>
//             <Route path="/Labs/*" element={<Labs />} />
//             <Route path="/Kanbas/*" element={<Kanbas />} />
//           </Routes>
//         </HashRouter>
//       </div>
//   );
// }

// export default App;

import React from 'react';
import './App.css';
import Labs from './Labs';
import Kanbas from './Kanbas';
import { HashRouter, Link, Route, Routes } from 'react-router-dom';

function HomePage() {
  return (
    <div>
      <img src="images/NU_logo.png" alt="NU Logo" width={200} height="100px"/>
      <h1>Hello Drumil! Welcome to CS5600</h1>
      | <Link to="/Kanbas">Kanbas</Link> | <Link to="/Labs">Labs</Link> | 
      <Link to="/Labs/Lab1">Lab 1</Link> | <Link to="/Labs/Lab2">Lab 2</Link> | 
      <Link to="/Labs/Lab3">Lab 3</Link> |
    </div>
  );
}

function App() {
  return (
    <div className='container-fluid'>
      <HashRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/Labs/*" element={
            <>
              <HomePage />
              <Labs />
            </>
          } />
          <Route path="/Kanbas/*" element={<Kanbas />} />
        </Routes>
      </HashRouter>
    </div>
  );
}

export default App;