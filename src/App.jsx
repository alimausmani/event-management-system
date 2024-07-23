import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home/Home';
import About from './pages/About/About';
import Events from './pages/Events/Events';
import Gallery from './pages/Gallery/Gallery';
import Contact from './pages/Contact/Contact';
import Signup from './pages/Signup/Signup';
import Login from './pages/Login/Login';
import './index.css';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/events" element={<Events />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login/>}/>
        {/* <Route path="/" element={<Home />} /> Default route */}
      </Routes>
    </Router>
  );
}

export default App;


// import React from 'react';
// import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// import Navbar from './components/Navbar';
// import Home from './pages/Home/Home';
// import About from './pages/About/About';
// import Events from './pages/Events/Events';
// import Gallery from './pages/Gallery/Gallery';
// import Contact from './pages/Contact/Contact';
// import Signup from './pages/Signup/Signup';
// import './index.css';

// function App() {
//   return (
//     <Router>
//       <div className="App">
//         <Navbar />
//         <Routes>
//           <Route path="/home" element={<Home />} />
//           <Route path="/about" element={<About />} />
//           <Route path="/events" element={<Events />} />
//           <Route path="/gallery" element={<Gallery />} />
//           <Route path="/contact" element={<Contact />} />
//           <Route path="/signup" element={<Signup />} />
//           <Route path="/" element={<Home />} /> {/* Default route */}
//         </Routes>
//       </div>
//     </Router>
//   );
// }

// export default App;

