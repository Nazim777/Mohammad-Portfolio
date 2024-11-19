import { Route, BrowserRouter as Router, Routes,HashRouter } from "react-router-dom";

import { Home, About, Projects, Contact } from "./pages";
import Navbar from "./components/Navbar";
//
const App = () => {
  return (
    <main className="bg-slate-300/20">
      <HashRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </HashRouter>
    </main>
  )
}

export default App;
