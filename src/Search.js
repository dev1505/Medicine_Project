import React from "react";
import { useSearchParams} from "react-router-dom";
// import { useState, useEffect } from "react";
import image1 from "./Companyinfo_1.jpg";
import "./MedicineInfo.css";
// import Searchloader from "./Searchloader"; 

export default function Search() {
  let [searchParams] = useSearchParams();
  let newSearchTerm = searchParams.get("q");
  
  let arr2 = [
    " LIGNOCAINE & ADRENALINE",
    "6MERCOPTIN",
    "ABACAVIR ",
    "ABACAVIR & LAMIVUDINE",
    "ABIRATERONE TAB",
    "ACARBOSE + METFORMIN",
    "ACECLOFENAC & PARACETAMOL",
    "ACECLOFENAC;PARACETAMOL & THIOCOLCHICOSIDE",
    "ACECLOFENEC; SERRATIOPEPTIDASE & PARACETAMOL",
    "ACETYCSTINE",
    "ACICLOVIR",
    "ACTRAPIDE",
    "ADALIMUMAB",
    "ADEMETIONINE",
    "ADENOSINE",
    "ADRENALIN",
    "ALBENDAZSOLE",
    "ALPHA KETOANALOGUES",
    "ALPRAZOLAM",
    "ALPROSTADIL",
    "AMBRISENTAN",
    "AMIKACIN",
    "AMINO ACID",
    "AMINOPHYLLINE INJ",
    "AMIODORAN",
    "AMITRYPTALINE",
    "AMLODIPIN",
    "AMOXICILIN+CLAVUNATE",
    "AMOXICILLIN",
    "AMOXYCILLIN & POTASSIUM CLAVULANATE",
    "AMPHLIN",
    "AMPHOTERICIN B",
    "AMPHOTERICIN B LIPOSOMOL",
    "ANASTROZOLE",
    "ANESTRAZOLE",
    "ANIDULAFUNGIN",
    "ANTACID",
    "ANTI AGEING CREAM",
    "ANTI RABIES VACCINE",
    "ANTI-D IMMUNOGLOBULIN ",
    "ANTIOXIDANTS LYCOPENE MULTI-VITAMINS",
    "ANTISNAKE VERRUM",
    "APIXABAN",
    "APREMILAST 30 MG",
    "ARTESUNATE",
    "ASCORBIC ACID",
    "ATAZANAVIR+RITONAVIR",
    "ATORVASTIN",
    "ATRACURIUM",
    "ATROPINE SULPHATE",
    "AZACITIDINE",
    "AZATHIOPRIN",
    "AZITHROMYCIN",
    "AZTREONAM INJ",
    "BACILLUS CLAUSII",
    "BACLOFEN",
    "BENDAMUSTIN",
    "BENZATHINE PENICILLIN INJ",
    "BENZOYAL PEROXIDE CLEANSING BAR",
    "BENZOYL PEROXIDE & ADAPALENE",
    "BETAHISTINE ",
    "BETAMETHASON",
    "BETHANECHOLE",
    "BEVACIZUMAB",
    "BICALUMIDE",
    "BIOTIN NIACINAMIDE MINERALAS & AMINO ACID",
    "BISACODYL",
    "BISOPROLOL FUMARATE",
    "BLEOMYCIN",
    "BORTEZOMIB",
    "BOSENTAN",
    "BRIVARACETAM",
    "BROZEDX",
    "BUPIVACAINE",
    "BUPRENORPHINE",
    "BUTORPHANOL TARTRATE",
    "CABERGOLIN TAB",
    "CABOPROSTIN",
    "CABOZANTINIB ",
    "CALCITONIN",
    "CALCITRIOL INJECTION",
    "CALCIUM ACETATE",
    "CALCIUM AND VITAMIN D3",
    "CALCIUM CARBONATE",
    "CALCIUM CHLORIDE INJ",
    "CALCIUM CITRAT & MALATE; VITAMIN D3 & FOLIC ACID",
    "CALCIUM DOBESILATE",
    "CALCIUM GLUCONATE & CALCIUM LACTBIONATE",
    "CALCIUM POLYSTYRENE SULPHONATE",
    "CALCIUM WITH VITAMINS D3 AND B12",
    "CAPECITABINE",
    "CAPECITABINE & CYCLOPHOSPHAMIDE",
    "CARBAMAZEPINE ",
    "CARBOPLATIN",
    "CARBOXYMETHYLCELLULOSE",
    "CASPOFUNGIN",
    "CEFADROXIL",
    "CEFAZOLIN",
    "CEFEPIME",
    "CEFEPIME&TAZOBACTUM",
    "CEFIXIME & POTASSIUM CLAVULANATE",
    "CEFOPERAZONE+SULBACTUM",
    "CEFOPERAZONE+TAZOBACTUM",
    "CEFOTAXIM",
    "CEFTAZIDIME",
    "CEFTAZIDIME & AVIBACTAM ",
    "CEFTRIAXAONE",
    "CEFTRIAXAONE+TAZOBACTAM",
    "CEFTRIAXONE+SULBACTUM",
    "CEFUROXIM",
    "CEPEPIME INJ",
    "CEREBROPROTEIN",
    "CETRORELIX ACETATE",
    "CHLORHEXIDINE",
    "CHLOROQUINE PHOSPHATE",
    "CHLORPHENIRAMINE&CODINE",
    "CHOLECALCIFEROL",
    "CHOLOROMBUSIL",
    "CHOLOROPHENICOL",
    "CHORONIC GONDOTROPIN",
    "CILOSTAZOLE",
    "CINACALCET",
    "CIPROFLOXACIN",
    "CISATRACURUM",
    "CISPLATIN",
    "CITICOLIN",
    "CLARITHROMYCIN",
    "CLIMBAZOLE",
    "CLINDAMYCIN",
    "CLINDAMYCIN& BENZOYL PEROXIDE",
    "CLOBETASOL PROPIONATE CREAM",
    "CLONIDINE HYDROCHLORIDE",
    "CLOPIGRIL",
    "CLOTRIMAZOLE",
    "CO TRIMOXAZOLE",
    "CO-ENZYMEQ10;L-ARGININE;OMEGA-3 FATTY ACID;EICOSAPENTAENOIC ACID;SOFTGEL CAPSULES",
    "COLISTIMETHATE",
    "CYCLOPHOSPHAMDE INJ",
    "CYCLOSPORIN",
    "CYPROHEPTADINE HCL & TRICHOLINE",
    "CYTRABIN",
    "DABIGATRAN ETEXILATE 110 MG",
    "DACARBAZINE",
    "DACLATASVIR",
    "DAIZEPAM",
    "DALTEPARIN SODIUM",
    "DAPAGLIFLOZIN",
    "DAPAGLIFLOZIN+METFORMORFIN",
    "DAPTOMYCIN 350MG",
    "DARBOPOETIN",
    "DARIFENACIN",
    "DASATINIB",
    "DAUNORUBICIN",
    "DECARBAZINE",
    "DEFERASIROX",
    "DEFLAZACORT",
    "DENOSUMAB",
    "DESIDUSTAT",
    "DEXAMETAHASON",
    "DEXMEDETOMIDINE",
    "DEXTRAN",
    "DEXTROSE 25%",
    "DEXTROSE 5%",
    "DIATRIZOALTE MEGLUMINE",
    "DIAZEPAM",
    "DICLOFENAC",
    "DICLOFENAC TRASDERMAL PATCH",
    "DICLOFENCAC+PARACETAMOL",
    "DICLOFENEC; PARACETAMOL; CETRIZINE & MAGNESIUM",
    "DICYCLOMINE +PARACTAMOL",
    "DICYCLOMINE HYDROCHLORIDE ",
    "DIGOXIN",
    "DILTIAZEM",
    "DIMETICONE & ASCORBYL TETRAISOPALMITATE",
    "DNS",
    "DOBUTAMINE",
    "DOCETAXEL",
    "DOLUTEGRAVIR + EMTRICITABINE + TENOFOVIR ALFANAMIDE",
    "DOLUTEGRAVIR 50MG",
    "DOLUTEGRAVIR;LAMIVUDINE & TENOFOVIR",
    "DOMPERIDONE",
    "DOPAMINE",
    "DORIPENEM INJ",
    "DOXOEUBICIN",
    "DOXORUBICINE",
    "DOXYCYCLIN+VIT C",
    "DOXYCYCLINE",
    "DOXYLAMINE SUCCINATE & PYRIDOXIME HYDROCHLORIDE ",
    "DROTAVERINE",
    "DULOXETINE ",
    "DUTASTERIDE",
    "DYDROGESTERON",
    "EDARAVONE INJECTION",
    "EFAVIENZE",
    "EFAVIRENZ EMTRICITABINE&TENOFOVIR DISOPROXIL FUMARATE TABLETS",
    "EFEDRINE",
    "EFEFRINE",
    "ELTROMBOPAG",
    "ENIMA",
    "ENOXAPARIN",
    "ENTECAVIR",
    "ENZALUTAMIDE",
    "EPIRUBICIN",
    "ERLOTINIB",
    "ERTAPENUM",
    "ERYTHROPOIETIN",
    "ESMOLOL",
    "ESOMEPRAZOLE & DOMPERIDON",
    "ESOMEPRAZOLE AND LEVOSULPIRIDE CAP",
    "ETANERCEPT SODIUM",
    "ETHAMSYLATE",
    "ETOMIDATE",
    "ETOPOSIDE",
    "ETORICOXIB ",
    "EVEROLIMUS",
    "EXEMESTANE",
    "FAROPENEM SODIUM",
    "FASTING STIMULATE HORMONE(FSH)",
    "FAVIPIRAVIR",
    "FEBUXOSTAT",
    "FERACRYLUM GEL",
    "FEROPENAM",
    "FERRIC CARBOXYMALTOSE",
    "FERRIC PYROPHOSPHATE VITAMIN C VITAMINB12 & FOLIC ACID",
    "FEXOFENADINE HYDROCHLORIDE 120 MG",
    "FILGRASTIM",
    "FILTER SET",
    "FINASTERIDE ",
    "FLUCONAZOLE",
    "FLUMAZENIL",
    "FLUNARIZINE & PROPRANALOL",
    "FLUOROURACIL INJ",
    "FLUTAMIDE",
    "FLUXETINE",
    "FONDAPARINUX SODIUM STERILE ",
    "FOSACONAZOLE",
    "FOSFOMYCIN",
    "FOSFOMYCIN TROMETAMOL POWDER",
    "FOSHAPRETERO",
    "FOSPHENYTOIN SODIUM ",
    "FRUSEMIDE",
    "FULVESTRANT",
    "GADOPENTETATE",
    "GEFITINIB",
    "GEMCITABINE",
    "GENTAMICIN",
    "GLIMEPIRIDE AND METFORMIN TAB",
    "GLUCOSE POWDER",
    "GLUTATHION 500MG",
    "GLYCERYL TRINITRATE CONTROLLED TAB",
    "GLYCOPYROLATE",
    "GLYCOPYROLATE NEOSTIGMINI",
    "GRANISETRON",
    "HAEMOCOAULASE",
    "HAIR CARE KIT",
    "HALOPERIDOL ",
    "HEMACEEL",
    "HEPARIN INJ",
    "HEPARIN SODIUM 1000IU",
    "HEPATITIS B IMMUNOGLOBULIN",
    "HEPATITIS B VACCINE",
    "HEPATITTIS B IMMUNOGLOBULIN",
    "HIGH PROTEIN NUTRITION",
    "HIGH PROTEIN PREPARATION",
    "HUMAN ACTRAPAID",
    "HUMAN ALBUMIN",
    "HUMAN INTERFERON ALFA 2B INJ",
    "HUMAN TETANUS IMMUNOGLOBULIN",
    "HYALURONATE",
    "HYALURONIDASE",
    "HYDROCORTISONE",
    "HYDROXYCHOLOROQUIN",
    "HYDROXYETHYL STARCH 6%",
    "HYDROXYUREA",
    "HYOSCINE",
    "IBANDRONIC ACID",
    "IBRUTINIB",
    "IFOSFAMIDE WITH MESNA",
    "IMATINIB",
    "IMIPENEM AND CILASTATIN INJ",
    "IMMUNOCIN ALPHA",
    "IMMUNOGLOBULIN",
    "INDOMETHASON",
    "INFLUENZA VACCINE",
    "INSULIN",
    "INTERFERON ALFA 2B",
    "INTERFERON BETA-1A",
    "INTRALIPID",
    "INTRAVENOUS SET",
    "IRINOTECAN INJ",
    "IRON SUCROSE",
    "ISOFLURANE",
    "ISOLYTE P",
    "ISOPRENALINE",
    "ISOXSUPRINE HYDROCHLORIDE ",
    "ITOPRIDE",
    "ITRACONAZOLE",
    "IV GAMA",
    "IV SET",
    "KETOCONAZOLE IP",
    "KETOCONAZOLE;NEOYCIN;TOLNAFTATE & CLOBETASOL",
    "KETOROLAC TROMATHAMINE",
    "L ASPAGINESE",
    "LABETALOL",
    "LACOSAMIDE",
    "LACOSMIDE TAB",
    "LACTILOL MONOHYDRATE & ISPAGHULA GRANULES",
    "LACTOBASIL",
    "LACTULOSE",
    "L-ALANYL L-GLUTAMINE",
    "LAMIVUDINE & ZIDOVUDINE",
    "LAMIVUDINE STAVUDINE+NEVRAPINE",
    "LAMIVUDINE+ZIDOVUDINE+NEVIRAPINE",
    "LAMIVUDINE300+TENOFOVIR30",
    "LANTHANUM CARBONAT",
    "LAPATINIB",
    "LEFLUNOMIDE",
    "LENALIDOMIDE",
    "LENOZOLIDE",
    "LENVATINIB",
    "LETROZOLE 2.5 MG TAB",
    "LEUCOVORIN CALCIUM INJ",
    "LEUCOVORIN TAB",
    "LEUPROLIDE INJ",
    "LEVERACETAM",
    "LEVETRICETAM",
    "LEVOBUPIVACAIN ",
    "LEVOCARNITINE",
    "LEVOFLOXACIN",
    "LEVOSIMENDAN",
    "L-GLUTAMINE",
    "L-GLUTANIR",
    "LIDOCAIN+PRILOCAIN",
    "LIDOCAINE AND TETRACAINE",
    "LIGNOCAINE",
    "LINEZOLID I.V",
    "LINGOCANE",
    "LIPOSOMAL DOXORUBICIN",
    "LIVER TONIC",
    "L-MTHYLFOLATE CALCIUM",
    "LOPINAVIR+RITONAVIR",
    "LOREZAPAM",
    "L-ORNITHINE L-ASPARTATE INFUSION",
    "LYCOPENE WITH MULTIVITAMIN ",
    "MAGNESIUM SULFATE INJ",
    "MANNITOL ",
    "MECOBALAMIN PYRIDOXINE",
    "MEDROXYPROGESTERON",
    "MEFENAMIC ACID+DICYLOMINE",
    "MEGESTROL",
    "MELPHALAN",
    "MENOTROPIN INJ",
    "MEPHENTERMINE",
    "MEROPENEM",
    "MEROPENEM & SULBACTUM",
    "MESALAMINE",
    "MESNA",
    "METFORMIN",
    "METFORMIN+GLIMEPRIDE",
    "METHOCARBAMOL",
    "METHOTREXATE INJECTION",
    "METHOXY POLYETHYLENE GLYCOL EPOETIN",
    "METHYLENE BLUE",
    "METHYLERGOMETRIN",
    "METHYLPREDNISOLON",
    "METOCLOPRAMIDE",
    "METOPROLOL SUCCINATE & RAIPRIL",
    "METOPROLOL SUCCINATE EXT RELEASE",
    "METRONIDAZOLE",
    "MICAFUNGIN",
    "MIDAZOLAM",
    "MIDODRINE HCL",
    "MILIRINEO",
    "MINOCYCLINE",
    "MINOXIDIL",
    "MIOXIDIL",
    "MIRABEGRON EXTENDED 50 MG",
    "MISOPROSTAL",
    "MITOMYCIN 2 MG",
    "MOLNUPIRAVIR",
    "MOMETASONE",
    "MONTELUKAST & LEVOCETRIZINE",
    "MOXFLOXACIN+DEXAMETHASON",
    "MOXIFLOXACIN",
    "MOXIFLOXACIN & PREDNISOLONE ",
    "MULTIVITAMIN",
    "MULTIVITAMIN+NUTRACEUTICAL",
    "MUPIROCIN",
    "MYCOPHENLATE",
    "MYO-INOSITAL VITAMIND3",
    "N BUTYL CYANOACRYLATE",
    "NABPACLITAXEL",
    "NALBUPHINE HYDROCHLORIDE",
    "NALOXONE",
    "NANDROLONE DECANATE",
    "NANO PACLITAXEL",
    "NEOSTIGMINE+METHYLSULPHATE",
    "NETILMICIN",
    "NETUPITANT & PALONOSETRON",
    "NEVIRAPINE",
    "NICORANDIL",
    "NIFEDIPINE",
    "NINTEDANIB",
    "NITROFURANTOIN",
    "NITROGLYCERIN",
    "NORADRALIN",
    "NORETHISTERON",
    "NORFLOXACIN",
    "NORMAL SALIN",
    "NOT AVAILABLE",
    "NOVOFINE NEEDLE",
    "NS",
    "OCTOTRIDE",
    "OFLOXACILIN",
    "OFLOXACIN & ORNIDAZOLE",
    "ONDANSETRON",
    "ORLISTAT",
    "OSELTAMIVIR",
    "OSELTAMIVIR PHOSPHATE",
    "OXALIPLATIN",
    "OXCARBAZEPINE 300 MG",
    "OXYTOCIN",
    "PACLITAXEL",
    "PALBOCICLIB",
    "PALONOSETRON",
    "PANCREATIN",
    "PANCURONIUM",
    "PANTOPRAZOLE",
    "PANTOPRAZOLE + DOMPERODONE",
    "PANTOPRAZOLE+ETOPRIDE",
    "PARACETAMOL",
    "PARACETAMOL & DICYCLOMINE",
    "PAZOPANIB",
    "PEGFILGRASTIM",
    "PEGYLATED ERYTHROPOIETIN",
    "PEMETREXED",
    "PEN",
    "PENICILAMIN",
    "PENTAPRAZOLE & DOMPERIDONE",
    "PENTAZOCINE",
    "PENTOPRAZE & DOMPERIDONE",
    "PHENIRAMINE MALEATE ",
    "PHENOBARBITONE",
    "PHENYLEPHRINE",
    "PHENYTOIN SODIUM ",
    "PHYCOMIN",
    "PHYTOMENADIONE",
    "PIOGLITAZONE",
    "PIPRACILIN+TAZOBACTUM",
    "PIRACETAM",
    "PIRFENIDONE",
    "PIROXICAM 20MG SUBLINGUAL",
    "PNEUMOCOCCAL POLYSACCHARIDE ",
    "POLYGELINE WITH ELECTROLYTE",
    "POLYMYXIN B",
    "POMALIDOMIDE CAP",
    "POSACONAZOLE",
    "POTASSIUM CHLORIDE ",
    "POTASSIUM CHLORIDE INJ ",
    "POTASSIUM PHOSPHATES",
    "POVIDONE",
    "PRALIDOXIM CHLORIDE",
    "PRALODXIM IODIDE ",
    "PRAZIQUNTEL",
    "PRE & PROBIOTIC",
    "PREDNISOLON",
    "PREGABALIN CAPSULES",
    "PRE-PROBIOTICS ",
    "PRIMAQUIN",
    "PRO BIOTIC",
    "PROCHLORPERAZINE",
    "PROGESTERONE",
    "PROPOFOL",
    "PROTAMIN",
    "PROTEIN SUPPLEMENT",
    "PYCOMIN",
    "PYRIDOSTIGMINE",
    "RABEPRAZOLE & DOMPERIDONE",
    "RABEPRAZOLE & LEVOSULPIRIDE",
    "RABIES ANTISERUM",
    "RABIES VACCINE",
    "RABIPRAZOLE",
    "RACECADOTRIL 100 MG",
    "RALTEGRAVIR TAB",
    "RANITIDINE",
    "REGORAFENIB",
    "REMDESVIR",
    "RIBAVIRIN",
    "RIFAMPICIN",
    "RIFAXIMIN",
    "RINGER LACTATE",
    "RITUXIMAB",
    "RIVAROXABAN",
    "ROIPINOROL",
    "ROMIPLOSTIM",
    "ROPIVACAIN HCL",
    "SACUBITRIL+VALSARTAN",
    "S-ADENOSYL METHIONINE",
    "SAFINAMIDE",
    "SAROGLITAZAR",
    "SERTRALINE",
    "SEVELAMER",
    "SEVLAMER",
    "SEVOFLURANE",
    "SILDENAFIL",
    "SILODOCIN",
    "SILODOSIN& DUTASTERIDE",
    "SIROLIMUS ",
    "SODIUM ACID PHOSPHATE",
    "SODIUM BICARBONATE ",
    "SODIUM BICARBONATE INJECTION",
    "SODIUM CARBOXYMETHYL CELLUOSE",
    "SODIUM CHLORIDE",
    "SODIUM NITROPRUSSIDE",
    "SODIUM TETRADECYLE SULPHATE",
    "SODIUM VALPORATE",
    "SOFOSBUVIR+VELPATASVIR",
    "SOFOSOVIR",
    "SORAFINIB",
    "SPASMODINE",
    "STREPTOKINESE",
    "STREPTOMYCIN",
    "SUCCINYLCHOLINE",
    "SULBACTAM",
    "SUNITINIB CAP",
    "TACROLIMUS",
    "TADALFIL",
    "TAMOXIFEN CITRATE 10 MG TABLETS",
    "TAMOXIFEN CITRATE 20 MG TABLETS",
    "TAMSULOSIN",
    "TEGAFUR + URACIL",
    "TEICLOPLANIN",
    "TELMISARTAN",
    "TEMOZOLAMIDE",
    "TENELIGLIPTIN + METFORMIN",
    "TENOFOVIR",
    "TENOFOVIR ALAFENAMIDE",
    "TENOFOVIR DISOPROXIL TABLETS",
    "TENOFOVIR DISOPROXIL+ EMTRICITABINE",
    "TENOFOVIR DISOPROXIL+EMTRICITABINE",
    "TENOFOVIR LAMIVUDIN & EFAVIRENZ",
    "TENOFOVIR+EFAVIRENZ+EMITRICITABIN",
    "TENOFOVIR+EMITRICITABIN",
    "TERBINAFINE",
    "TERIPERATIDE",
    "TERLIPRESSIN",
    "TETANUS IMMUNOGLOBULIN",
    "TETNUS",
    "TETRABENZIN",
    "THALIDOMIDE ",
    "THIAMINE",
    "THIOPENTION",
    "THYMOCIN ALPHA",
    "THYROXINE",
    "TICAGRELOR",
    "TIGECYCLINE INJ",
    "TIMOLOL EYE DROPS",
    "TINIDAZOLE",
    "TIROFIBAN HYDROCHLORIDE INJECTION ",
    "TOFACITINIB",
    "TOLPERISONE HYDROCHLORIDE ",
    "TOLTERODINE",
    "TOLVAPTAN ",
    "TORSEMIDE TAB",
    "TORSEMIDE SPORONOLACTONE",
    "TORSEMISE",
    "TRACE ELEMENT",
    "TRAMADOL",
    "TRAMADOL SUPPOSITORIES",
    "TRANEXAMIC ACID",
    "TRASTUZUMAB",
    "TRAZSTUZUMAB",
    "TRETINOIN",
    "TRIAMCINOLONE ACETONIDE",
    "TRINBELIMAB INJECTION 300 MCG",
    "TRYPSIN+CHYMOTRYPSIN",
    "ULINASTIN",
    "UNIYANIZYME",
    "UREA;LACTIC ACID",
    "UROFOLLITROPIN",
    "URSODEOXYCHOLIC ACID",
    "VALACYCLOVIR",
    "VALETHAMATE BOMIDE",
    "VALGANCICLOVIR",
    "VANCOMYCIN",
    "VARICELLA VACCINE",
    "VASOPRESSIN",
    "VECURONIUM BROMIDE",
    "VELPATASVIR",
    "VELPATASVIR & SOFOSBUVIR",
    "VINBLASTIN",
    "VINCRISTIN",
    "VINPOCETINE",
    "VITAL ESSENTIAL",
    "VITAMIN C",
    "VITAMIN C VITAMIN B12 FOLIC ACID",
    "VITAMIN D3",
    "VITAMIN K",
    "VITAMIN SUPPLEMENT",
    "VORICONAZOLE",
    "WATER FOR",
    "ZINC SULPHATE",
    "ZOLEDRONIC ACID",
  ];

  let arr3 = [
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

  const arr4 = [];
  const arr5 = [];

  //   let search_component;

  let result1 = false;
  let result2 = false;
  let result3 = true;

  let index2 = 0;
  let index3 = 0;

  const search_data = () => {
    for (let i1 in arr2) {
      result1 = true;

      index2 = index2 + 1;
      if ((arr2[i1].toLowerCase().includes(newSearchTerm.toLowerCase()))) {
        arr4.push(arr2[i1]);
      }
    }

    for (let i1 in arr3) {
      result2 = true;

      index3 = index3 + 1;
      if (arr3[i1].toLowerCase().includes(newSearchTerm.toLowerCase())) {
        arr5.push(arr3[i1]);
      }
    }

    if (arr4.length === 0) {
      result1 = false;
    }

    if (arr5.length === 0) {
      result2 = false;
    }
    if (arr4.length === 0 && arr5.length === 0) {
      result3 = false;
    }
  };

  // const [isLoad, setisLoad] = useState(true);

  // // Simulate a delay to hide the loader after a few seconds
  // useEffect(() => {
  //   setTimeout(() => {
  //     setisLoad(false);
  //   }, 2000);
  //   setisLoad(true);
  // }, []);

  // const loader_function = () => {
  
  //   isLoad ? (<Searchloader></Searchloader>) : (search_data());

  // }

  // loader_function()

  search_data();

  return (
    <>
      {result1 ? (
        <div>
          <div style={{ paddingBlock: "30px" }}>
            <h2 style={{ textAlign: "center", paddingBottom: "20px" }}>
              Search Product
            </h2>
            <div style={{ display: "flex", flexWrap: "wrap" }}>
              {arr4.map((value2, index_value_1) => (
                <div
                  key={index_value_1 + 1}
                  className="card_width"
                  style={{ paddingBlockEnd: "25px" }}
                >
                  <div className="card">
                    <img
                      src={image1}
                      alt="Denim Jeans"
                      style={{
                        width: "100%",
                        borderTopLeftRadius: "5px",
                        borderTopRightRadius: "5px",
                      }}
                    />
                    <br />
                    <h3 style={{ fontSize: "medium" }}>{value2}</h3>
                    <br />
                    <button>Add to Cart</button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      ) : (
        ""
      )}

      {result2 ? (
        <div>
          <div style={{ paddingBlock: "30px" }}>
            <h2 style={{ textAlign: "center", paddingBottom: "20px" }}>
              Search Company
            </h2>
            <div style={{ display: "flex", flexWrap: "wrap" }}>
              {arr5.map((value3, index_value_2) => (
                <div
                  key={index_value_2 + 1}
                  className="card_width"
                  style={{ paddingBlockEnd: "25px" }}
                >
                  <div className="card">
                    <img
                      src={image1}
                      alt="Denim Jeans"
                      style={{
                        width: "100%",
                        borderTopLeftRadius: "5px",
                        borderTopRightRadius: "5px",
                      }}
                    />
                    <br />
                    <h3 style={{ fontSize: "medium" }}>{value3}</h3>
                    <br />
                    <button>Add to Cart</button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      ) : (
        ""
      )}

      {result3 ? (
        ""
      ) : (
        <div style={{ textAlign: "center", paddingBlock: "30px" }}>
          <h2>No Result Found</h2>
        </div>
      )}
    </>
  );
}
