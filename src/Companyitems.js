import React from "react";
import "./MedicineInfo.css";
import image2 from "./Companyinfo_3.jpg";

export default function Companyitems() {
  let arr2 = [
    "AAA",
    "ABBOTT",
    "ABYSS PHARMA PVT LTD",
    "ACULIFE NIRMA",
    "ADD FREIGHT",
    "ALBUS",
    "ALKEM",
    "ALKEM LABORATORIES LTD",
    "ALNICHE LIFE",
    "AMERICAN REMEDIES",
    "AMNEAL HEALTHCARE PVT LTD",
    "ARCHICARE",
    "ARISTO",
    "BAJAJ HEALTHCARE",
    "BAXTER",
    "BD",
    "BENNET CRITICARE",
    "BHARAT BIOTEC",
    "BHARAT SERUMS AND VACCINES LIMITED",
    "BIOCHEM",
    "BIOCON",
    "BIOLOGICAL E LIMITED",
    "BOMBAY TABLET",
    "BSV",
    "CADILA HEALTHCARE LIMITED",
    "CADILA PHARMACEUTICAL",
    "CADIZ LIFESCIENCE",
    "CARE FORMULATION LAB",
    "CBC",
    "CELON LABS",
    "CIPLA",
    "CIPLA LTD.",
    "COAX BIOREMEDIES",
    "CONCORD BIOTECH",
    "CORONA RAMEDIES PVT LTD",
    "CRITI PACE",
    "CURATIO HEALTH CARE",
    "DAXIA HEALTHCARE PVT LTD",
    "DR MORPEN",
    "DR.REDDY'S",
    "ELCARE INDIA",
    "ELDER",
    "EMCURE",
    "EVEPURE PHARMACEUTICALS",
    "FLAGSHIP",
    "FRESNIUS KABI",
    "GAVALIS HEALTHCARE",
    "GERMAN REMEDIES",
    "GLAND PHARMA LTD",
    "GLENMARK",
    "GLS PHARMA",
    "GUFIC BIO",
    "HALSTED PHARMA",
    "HELSE PHARMACEUTICALS",
    "HETERO HEALHCARE",
    "HETERO LABS LIMITED",
    "HUMAN BIOLOGICAL INSTITUTE",
    "ICHOR BIOLOGICS PVT LTD",
    "INDOCO REMEDIES",
    "INTAS",
    "INTAS PHARMACUTICALS LTD",
    "INTEGRITY PHARMACEUTICAL",
    "IPCA",
    "JOHNLEE PHARMACEUTICALS LTD",
    "JUBLIANT",
    "JUGGAT PHARMA",
    "KHANDELWAL",
    "KNOLL",
    "LA RENON",
    "LENITIV PHARMA",
    "LUPIN",
    "LYKA",
    "MANKIND PHARMA",
    "MAXFORD HEALTHCARE",
    "MEDCURLS HEALTHCARE",
    "MIRACALUS PHARMA PVT LTD",
    "MOREPEN LAN",
    "MSN",
    "MYLAN",
    "NAMCARE",
    "NATCO PHARMA",
    "NEON LAB",
    "NOVO SCIENCE",
    "NUCLEUS INC.",
    "OTSUKA PHARMACEUTICALS",
    "PANACEA",
    "PENTAGON LABS LIMITED",
    "PFIZER",
    "PFIZER LIMITED",
    "PHARMA CURE LABORATORIES",
    "PLETHICO",
    "PREVAGO HEALTHCARE",
    "PUNISKA HEALTHCARE PVT LTD",
    "RAMAN & WEIL COMPANY",
    "RAYO PHARMA PVT LTD",
    "REALCADE",
    "RELIANCE LIFE SCIENCES",
    "ROCHE",
    "ROSELABS BIOSCIENCES LTD",
    "RPG",
    "SAMARTH LIFE SCIENCES PVT.LTD",
    "SANOFI INDIA LTD",
    "SARABHAI",
    "SCUTONIX LIFESCIENCES PVT LTD.",
    "SEARLE",
    "SERUM INSTITUTE OF INDIA PVT LTD",
    "STEADFAST",
    "STELLEX HEALTHCARE PVT LTD",
    "STERIS HEALTHCARE",
    "SUN PHARMA",
    "TABLETS INDIA LIMTED",
    "TAXANE HEALHCARE",
    "THEMIS",
    "TORRENT",
    "TROIKAA",
    "TTK HEALTHCARE LIMITED",
    "UNIJULES LIFE SCIENCES LTD",
    "USV",
    "VENUS REMEDIES LIMITED",
    "VHB LIFE SCIENCES LIMITED",
    "WILL IMPEX PHARMACHEM PVT LTD",
    "WOCKHARDT LIMITED",
    "WOHLTAT LIFE SCIENCES",
    "ZUVENTUS",
    "ZYCARE",
    "ZYDUS",
    "ZYDUS CADILA",
    "ZYDUS NEPHROSCIENCES",
  ];
  return (
    <>
      <div style={{ backgroundImage: "linear-gradient(to left, gray, white)" }}>
        <div style={{ paddingBlock: "30px" }}>
          <div style={{ display: "flex", flexWrap: "wrap" }}>
            {arr2.map((value, index) => (
              <div
                key={index + 1}
                className="card_width"
                style={{ paddingBlockEnd: "25px" }}
              >
                <div className="card">
                  <img
                    src={image2}
                    alt="ImageError"
                    style={{
                      width: "100%",
                      borderTopLeftRadius: "5px",
                      borderTopRightRadius: "5px",
                    }}
                  />
                  <br />
                  <h3 style={{ fontSize: "medium" }}>{value}</h3>
                  <br />
                  <button>Add to Cart</button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
