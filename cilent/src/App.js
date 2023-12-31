import Home from "./Components/Home";
import Navber from "./Layout/Navber";
import Reserve from "./Components/Reserve";
import Queue from "./Components/Queue";
import Contact from "./Components/Contact";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AppContextProvider from "./Contexts/appContext";
import Card from "./Components/Card";

import store from "../src/store/store";
import { Provider } from "react-redux";
import { getTotals } from "./Slice/cartSlice";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css"

store.dispatch(getTotals())

function App() {
  return (
    <BrowserRouter>
    <ToastContainer position="bottom-right"
autoClose={1000}
hideProgressBar={false}
newestOnTop={false}
closeOnClick
rtl={false}
pauseOnFocusLoss
draggable
pauseOnHover
theme="light"/>
        <AppContextProvider>
          <Provider store={store}>
          <Routes>
            <Route element={<Navber />}>
              <Route path="/" element={<Home />} />
              <Route path="/cart" element={<Card />} />
              <Route path="/reserve" element={<Reserve />} />
              <Route path="/queue" element={<Queue />} />
              <Route path="/contact" element={<Contact />} />
            </Route>
          </Routes>
          </Provider>
        </AppContextProvider>
    </BrowserRouter>
  );
}

export default App;
