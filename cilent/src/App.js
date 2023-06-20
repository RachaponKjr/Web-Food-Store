import Home from "./Components/Home";
import Navber from "./Layout/Navber";
import Reserve from "./Components/Reserve";
import Queue from "./Components/Queue"
import Contact from "./Components/Contact"
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AppContextProvider from "./Contexts/appContext";
function App() {
  return (
    <BrowserRouter>
    <AppContextProvider>
      <Routes>
        <Route element={<Navber />}>
          <Route path="/" element={<Home/>}/>
            <Route path="/reserve" element={<Reserve/>}/>
            <Route path="/queue" element={<Queue/>}/>
            <Route path="/contact" element={<Contact/>}/>
        </Route>
      </Routes>
      </AppContextProvider>
    </BrowserRouter>
  );
}

export default App;
