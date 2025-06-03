import "wx-react-gantt/dist/gantt.css";
import "../assets/App.css";
import {  Willow, WillowDark, Toolbar } from "wx-react-gantt";
import Header from './Header';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import SalesPlan from "../pages/spTable";
import Home from "../pages/Home";
import Orders from "../pages/Orders";
import NoPage from "../pages/NoPage";
import ListSP from "../pages/spList";

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Header />}>
            <Route index element={<Home />} />
            <Route path="addsalesplan" element={<SalesPlan />} />
            <Route path="salesplan" element={<ListSP/>}/>
            <Route path="orders" element={<Orders />} />
            <Route path="*" element={<NoPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;