import Home from "./Components/Home";
import Navber from "./Layout/Navber";
import Reserve from "./Components/Reserve";
import Queue from "./Components/Queue"
import Contact from "./Components/Contact"
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AppContextProvider from "./Contexts/appContext";
import Card from "./Components/Card";

import { configureStore } from "@reduxjs/toolkit";
import { Provider } from "react-redux";
import cartReducer from "./Slice/cartSlice";


const store = configureStore({
  reducer:{
    cart: cartReducer
  }
})


function App() {
  return (
    <BrowserRouter>
    <AppContextProvider>
      <Provider store={store}>
      <Routes>
        <Route element={<Navber />}>
          <Route path="/" element={<Home/>}/>
            <Route path="/cart" element={<Card/>}/>
            <Route path="/reserve" element={<Reserve/>}/>
            <Route path="/queue" element={<Queue/>}/>
            <Route path="/contact" element={<Contact/>}/>
        </Route>
      </Routes>
      </Provider>
      </AppContextProvider>
    </BrowserRouter>
  );
}

export default App;
