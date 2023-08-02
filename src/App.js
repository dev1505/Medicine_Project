import "./App.css";
import Navbar from "./Navbar";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import MedicineInfo from "./MedicineInfo";
import CompanyInfo from "./CompanyInfo";
import "./App.css";
import "./Dropdownmenu";
import Dropdownmenu from "./Dropdownmenu";
import Companyitems from "./Companyitems";

function App() {
  return (
    <>
      <BrowserRouter>
        <div className="background_image_setting_style">
          <div>
            <Navbar title="Shree Khodiyar Medicine House" />
          </div>
        </div>
        <Routes>
          <Route
            path="/"
            element={
              <div>
                <div className="company_info_style">
                  <CompanyInfo></CompanyInfo>
                </div>
              </div>
            }
          ></Route>
          <Route path="/about" element={<Dropdownmenu></Dropdownmenu>}></Route>
          <Route path="/aboutus" element={<Dropdownmenu></Dropdownmenu>}></Route>
          <Route
            path="/company"
            element={<Companyitems></Companyitems>}
          ></Route>
          <Route
            path="/products"
            element={<MedicineInfo></MedicineInfo>}
          ></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
