import React from "react";
import "./CompanyInfo.css";
// import { json } from "react-router-dom";
// import bgimage from "./Backgroundimage2.jpg";
import work_img1 from "./Companyinfo_0.jpg";
import work_img2 from "./Companyinfo_2.jpg";
import work_img3 from "./Companyinfo_3.jpg";
import work_img4 from "./Companyinfo_4.jpg";

export default function CompanyInfo() {
  let array1 = [
    {
      info: "• Over 15 year of experience in the business",
      id: 1,
      work_img: work_img1,
    },
    {
      info: "• Dedicated, Politeness, committed and trained team ready to service customers",
      id: 2,
      work_img: work_img2,
    },
    {
      info: "• Most products available ex-stock ensuring prompt delivery",
      id: 3,
      work_img: work_img3,
    },
    { info: "• Quick delivery within short time.", id: 4, work_img: work_img4 },
    {
      info: "• Anti-Cancer Medicines Exporters, Manufacturers and Suppliers in Gujarat",
      id: 5,
      work_img: work_img1,
    },
    {
      info: "• Oncology Medicines Manufacturers, Suppliers, and Exporters in India",
      id: 6,
      work_img: work_img2,
    },
    {
      info: "• Most products available ex-stock ensuring prompt delivery",
      id: 7,
      work_img: work_img3,
    },
    { info: "• Exporter of Oncology Medicines within Time", id: 8, work_img: work_img4 },
  ];

  let data_component;
  const div_data = (data) => {
    if (data.id % 2 === 1) {
      data_component = (
        <div key={data.id} className="company_data_style">
          <div className="company_data_info_style1">{data.info}</div>
          <div className="company_data_image_style">
            <img src={data.work_img} alt="hello" className="image_styling_companyinfo"/>
          </div>
        </div>
      );
      return data_component;
    } else {
      data_component = (
        <div key={data.id} className="company_data_style">
          <div className="company_data_image_style">
            <img src={data.work_img} alt="hello" className="image_styling_companyinfo"/>
          </div>
          <div className="company_data_info_style2">{data.info}</div>
        </div>
      );
      return data_component;
    }
  };

  return (
    <>
      {array1.map((data) => (
        <div key={data.id} className="company_whole_style">
          {div_data(data)}
        </div>
      ))}
    </>
  );
}
