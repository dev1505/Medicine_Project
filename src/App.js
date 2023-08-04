import "./App.css";
import Navbar from "./Navbar";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import MedicineInfo from "./MedicineInfo";
import CompanyInfo from "./CompanyInfo";
import "./App.css";
import "./Dropdownmenu";
import Dropdownmenu from "./Dropdownmenu";
import Companyitems from "./Companyitems";
import Search from "./Search";
import Loader from "./Loader";
import React from "react";

function App() {
  const [isLoading, setIsLoading] = React.useState(true);

  // Simulate a delay to hide the loader after a few seconds
  React.useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 4000); // Change the timeout as needed
  }, []);

  return (
    <>
      <BrowserRouter>
        
        <div className="background_image_setting_style">
          <div>
            <Navbar title="Shree Khodiyar Medicine House" />
          </div>
        </div>
        {isLoading ? (<Loader></Loader>) : (<Routes>
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
          <Route path="/search" element={<Search />}></Route>
          <Route path="/about" element={<Dropdownmenu></Dropdownmenu>}></Route>
          <Route path="/loader" element={<Loader></Loader>}></Route>
          <Route
            path="/company"
            element={<Companyitems></Companyitems>}
          ></Route>
          <Route
            path="/products"
            element={<MedicineInfo></MedicineInfo>}
          ></Route>
        </Routes>
      )  }
        </BrowserRouter>
    </>
  );
}

export default App;
