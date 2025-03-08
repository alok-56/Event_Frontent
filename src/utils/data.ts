import image from "../assets/PartnerImg/image.png";
import image_copy from "../assets/PartnerImg/image copy.png";
import image_copy_2 from "../assets/PartnerImg/image copy 2.png";
import image_copy_3 from "../assets/PartnerImg/image copy 3.png";
import image_copy_4 from "../assets/PartnerImg/image copy 4.png";

import meity from "../assets/GovernmentImg/image.png";
import digitalIndia from "../assets/GovernmentImg/Digital_India_logo.svg.png";
import makeInIndia from "../assets/GovernmentImg/04751df9e9794fac37550c98b5a31daf.png";

import optics from "../assets/image/Optics setup 2.jpeg";
import litho from "../assets/image/Litho 5.jpeg";
import group from "../assets/image/Group.jpeg";
import lab from "../assets/image/Lab.jpeg";

export const navData = [
  {
    title: "Home",
    link: "/",
  },
  {
    title: "About",
    submenu: [
      {
        title: "Concept",
        link: "/about/concept",
      },
      {
        title: "Research",
        link: "/about/research",
      },
      {
        title: "Publication",
        link: "/about/publication",
      },
    ],
  },
  {
    title: "Collaborators",
    link: "/collaborators",
  },
  {
    title: "Research Facilities",
    submenu: [
      {
        title: "Design",
        link: "/research-facilities/design",
      },
      {
        title: "Growth",
        link: "/research-facilities/growth",
      },
      {
        title: "Characterization",
        link: "/research-facilities/charecterization",
      },
      {
        title: "Fabrication",
        link: "/research-facilities/fabrication",
      },
      {
        title: "Testing",
        link: "/research-facilities/testing",
      },
      {
        title: "Applications",
        link: "/research-facilities/applications",
      },
    ],
  },
  {
    title: "People",
    submenu: [
      {
        title: "Investigators",
        link: "/people/investigators",
      },
      {
        title: "Research Associates",
        link: "/people/research-associates",
      },
      {
        title: "Students",
        link: "/people/students",
      },
      {
        title: "Staff",
        link: "/people/staff",
      },
    ],
  },
  {
    title: "Events",
    link: "/events",
  },
  {
    title: "Contact Us",
    link: "/contact",
  },
];

export const upComingEventsData = [
  {
    date: "SEPTEMBER 24-26, 2024",
    dateInt: "2024-9-24",
    location: "IIT KGP, KHARAGPUR",
    url: optics,
    title: "EXITING CONFERENCE",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod bibendum laoreet. Proin gravida dolor sit amet lacus accumsan et viverra justo commodo.",
  },
  {
    date: "SEPTEMBER 24-26, 2024",
    dateInt: "2024-9-24",
    location: "IIT KGP, KHARAGPUR",
    url: litho,
    title: "EXITING EVENT",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod bibendum laoreet. Proin gravida dolor sit amet lacus accumsan et viverra justo commodo.",
  },
  {
    date: "SEPTEMBER 24-26, 2024",
    dateInt: "2024-9-24",
    location: "IIT KGP, KHARAGPUR",
    url: group,
    title: "EXITING EVENT",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod bibendum laoreet. Proin gravida dolor sit amet lacus accumsan et viverra justo commodo.",
  },
  {
    date: "SEPTEMBER 24-26, 2024",
    dateInt: "2024-9-24",
    location: "IIT KGP, KHARAGPUR",
    url: lab,
    title: "EXITING EVENT",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod bibendum laoreet. Proin gravida dolor sit amet lacus accumsan et viverra justo commodo.",
  },
];

export const techData = [
  {
    title: "Flip Chip",
    image:
      "https://pattern-project.eu/wp-content/uploads/2023/05/Flip-chip.png",
    description: [
      "Integration Density Low; limited component integration per unit area.",
      "Back-end compatible with existing CMOS processes.",
      "Alignment Accuracy Medium; requires careful alignment for optimal performance.",
      "Cost High; due to complex manufacturing and material costs.",
    ],
  },
  {
    title: "Flip Chip",
    image:
      "https://pattern-project.eu/wp-content/uploads/2023/05/Flip-chip.png",
    description: [
      "Integration Density Low; limited component integration per unit area.",
      "Back-end compatible with existing CMOS processes.",
      "Alignment Accuracy Medium; requires careful alignment for optimal performance.",
      "Cost High; due to complex manufacturing and material costs.",
    ],
  },
  {
    title: "Flip Chip",
    image:
      "https://pattern-project.eu/wp-content/uploads/2023/05/Flip-chip.png",
    description: [
      "Integration Density Low; limited component integration per unit area.",
      "Back-end compatible with existing CMOS processes.",
      "Alignment Accuracy Medium; requires careful alignment for optimal performance.",
      "Cost High; due to complex manufacturing and material costs.",
      "Cost High; due to complex manufacturing and material costs.",
    ],
  },
];

export const collaboratorsData = [
  {
    img: image,
  },
  {
    img: image_copy,
  },
  {
    img: image_copy_2,
    name: "Prof. Fabien Bretenaker",
    designation:
      "Professor Paris-Saclay University, France; Adjunct Professor,ATDC, IITKGP",
    expertise: "Quantum optics, nonlinear-optics, lasers, micro-wave photonics",
    role: "We plan to collaborate on the fundamental aspects of quantum optics and non-linear optics for the development of the QAC by exploiting quantum squeezing generated via nonlinear optical (e.g., spontaneous parametric down conversion) process.",
  },
  {
    img: image_copy_3,
    name: "Prof. Nicolas Treps",
    designation: "Professor, Sorbonne University, France",
    expertise:
      "Continuous-variable quantum computation, ultrafast quantum and nonlinear optics, quantum simulation and computation, quantum sensing.",
    role: "Our planned collaboration would be on the architecture and the algorithmic development of a QAC based on the continuous-variable quantum optics framework that is suitable for the ambient temperature operation.",
  },
  {
    img: image_copy_4,
    name: "Prof. Christine Silberhorn",
    designation: "Professor, Paderborn University, Germany",
    expertise:
      "LNOI PIC fabrication, LNOI-based quantum photonics devices and systems, quantum simulation and computation, quantum sensing.",
    role: "Collaboration is planned for the LNOI PIC design, fabrication, and packaging process development.",
  },
];

export const newsData = [
  {
    title: "MPW RUNs: Updated Schedule",
    shortDescription:
      "ELENA pre-commercial Multi-Project Wafer(MPW) RUNs enable researchers to access the novel LNOI PIC platform at affordable cost, lowering the barrier for the industry to adopt the new technology.",
    date: "May 5, 2024",
    url: "https://www.project-elena.eu/wp-content/uploads/2022/10/T-Elena_19-15.jpg",
    description:
      "ELENA pre-commercial Multi-Project Wafer (MPW) RUNs enable researchers to access the novel LNOI PIC platform at affordable cost, lowering the barrier for the industry to adopt the new technology. This fabless access to the LNOI platform allows designers to leverage the extensive library of standardised building blocks as a part of the PDK which is being developed within ELENA.We ensure a healthy and efficient MPW lifecycle by guiding and advising photonic designers in every step of the mask preparation process.In addition to systematic Design Rule Checks(DRCs) during the design submission period, designers get functional- level consultation of their PIC designs and possible optimisation guidance.ELENA offers several standard MPW RUNS per year with a fixed schedule",
  },
  {
    title: "MPW RUNs: Updated Schedule",
    shortDescription:
      "ELENA pre-commercial Multi-Project Wafer (MPW) RUNs enable researchers to access the novel LNOI PIC platform at affordable cost, lowering the barrier for the industry to adopt the new technology.",
    date: "May 5, 2024",
    url: "https://www.project-elena.eu/wp-content/uploads/2022/10/T-Elena_19-15.jpg",
    description:
      "ELENA pre-commercial Multi-Project Wafer (MPW) RUNs enable researchers to access the novel LNOI PIC platform at affordable cost, lowering the barrier for the industry to adopt the new technology. This fabless access to the LNOI platform allows designers to leverage the extensive library of standardised building blocks as a part of the PDK which is being developed within ELENA.We ensure a healthy and efficient MPW lifecycle by guiding and advising photonic designers in every step of the mask preparation process.In addition to systematic Design Rule Checks(DRCs) during the design submission period, designers get functional- level consultation of their PIC designs and possible optimisation guidance.ELENA offers several standard MPW RUNS per year with a fixed schedule",
  },
  {
    title: "MPW RUNs: Updated Schedule",
    shortDescription:
      "ELENA pre-commercial Multi-Project Wafer (MPW) RUNs enable researchers to access the novel LNOI PIC platform at affordable cost, lowering the barrier for the industry to adopt the new technology.",
    date: "May 5, 2024",
    url: "https://www.project-elena.eu/wp-content/uploads/2022/10/T-Elena_19-15.jpg",
    description:
      "ELENA pre-commercial Multi-Project Wafer (MPW) RUNs enable researchers to access the novel LNOI PIC platform at affordable cost, lowering the barrier for the industry to adopt the new technology. This fabless access to the LNOI platform allows designers to leverage the extensive library of standardised building blocks as a part of the PDK which is being developed within ELENA.We ensure a healthy and efficient MPW lifecycle by guiding and advising photonic designers in every step of the mask preparation process.In addition to systematic Design Rule Checks(DRCs) during the design submission period, designers get functional- level consultation of their PIC designs and possible optimisation guidance.ELENA offers several standard MPW RUNS per year with a fixed schedule",
  },
];

export const imageSliderData = [
  {
    id: 1,
    img: "https://www.project-elena.eu/wp-content/uploads/2022/10/T-Elena_19-2.jpg",
  },
  {
    id: 2,
    img: "https://www.project-elena.eu/wp-content/uploads/2022/10/T-Elena-5.jpg",
  },
  {
    id: 3,
    img: "https://www.project-elena.eu/wp-content/uploads/2022/10/T-Elena_19-21.jpg",
  },
  {
    id: 4,
    img: "https://www.project-elena.eu/wp-content/uploads/2022/10/T-Elena_19-19.jpg",
  },
  {
    id: 5,
    img: "https://www.project-elena.eu/wp-content/uploads/2022/10/T-Elena_19-14.jpg",
  },
  {
    id: 6,
    img: "https://www.project-elena.eu/wp-content/uploads/2022/10/T-Elena_19-7.jpg",
  },
  {
    id: 7,
    img: "https://www.project-elena.eu/wp-content/uploads/2022/10/T-Elena_19-2.jpg",
  },
];

export const partnersData = [
  {
    img: meity,
  },
  {
    img: digitalIndia,
  },
  {
    img: makeInIndia,
  },
];

//import pic

export const phdCardData = [
  {
    name: "Sonu Jana | PMRF FELLOW",
    date: "2023 – Till Date",
    details:
      "I am a PhD student in PhoQus Lab, focusing on developing a non-linear interferometer on a Lithium Niobate on Insulator platform to achieve Heisenberg sensitivity scaling. This involves replacing the conventional beam splitter with an optical parametric amplifier, generating entangled beams for sensitivity beyond the standard quantum limit. Additionally, I explore quantum information theory, using quantum Fisher information and the Quantum Cramer-Rao bound formalism to investigate the ultimate sensitivity limits of these devices across various probe states and measurement schemes.",
    subSection: {
      education: [
        "Secondary | WBBSE",
        "Higher Secondary | WBCHSE",
        "B.Sc | Midnapore College",
        "M.Sc | NIT Durgapur",
        "Ph.D | IIT Kharagpur (Ongoing)",
      ],
      awards: [
        "ENS Paris-Saclay International Incoming Scholarship",
        "Mitacs Globalink Research Award",
        "Institute GOLD MEDAL (NIT Durgapur)",
        "Prof. M. S. SINHA MEMORIAL GOLD MEDAL (NIT Durgapur)",
        "INSPIRE ‘SHE’ scholarship",
      ],
    },
    others: {
      researchArea: "Quantum Optics, Quantum Sensing and Metrology.",
      projectRole: "Development of LNOI based squeezer",
      email: "sonujana@kgpian.iitkgp.ac.in",
    },
    bgColor: "bg-[#4F75FF]",
    textColor: "text-[#4F75FF]",
    borderColor: "border-[#4F75FF]",
    pic: "https://i.postimg.cc/3dgqRL26/pic-1.jpg",
    exam: ["CSIR NET (2021)", "UGC NET- JRF (2022) ", "GATE (2022)"],
    links: {
      Personal_Profile: "https://sonujana8250.wixsite.com/educational-profile ",
      orcid: "https://orcid.org/0009-0005-1798-2594 ",
    },
  },
  {
    name: "R Hemant Kumar",
    date: "2022 – Till Date",
    details:
      "I am a PhD student in PhoQus Lab, currently working on fabricating an active integrated optical devices in Lithium Niobate on insulator(LNOI). Which render it suitable for an extensive range of applications including quantum technologies. We reported on the photolithography-based fabrication of a rib waveguide on a commercial X-cut LNOI wafer using proton-exchange-assisted wet etching. We characterize our fabrication method in terms of etch depth, side-wall angle, surface roughness and etch-rate as well as the mode profile, insertion loss, and polarization dependence of the fabricated waveguide.",
    subSection: {
      education: [
        "Secondary | WBBSE",
        "Higher Secondary | WBCHSE",
        "B.Tech | SKFGI",
        "M.Tech | SSSIHL",
        "Ph.D | IIT Kharagpur (Ongoing)",
      ],
      experience: [
        "JRF, ELOIRA (A SOCIETY UNDER GOVERNMENT OF INDIA, MINISTRY OF DEFENCE), DRDO HYDERABAD (10-07-2019 to 31-12-2020)",
        "JRF, IIT BHUBANESWAR (04-01-2021 to 19-04-2021)",
        "JRF, PHOTONIC SYSTEMS LAB, IIT KHARAGPUR (28-06-2020 to 25-07-2022)",
      ],
    },
    others: {
      researchArea: "Active Integrated Optical Devices",
      projectRole:
        "Fabrication of integrated optical devices on LNOI platform.",
      email: "dwarka08@kgpian.iitkgp.ac.in",
    },
    bgColor: "bg-[#8FD14F]",
    textColor: "text-[#8FD14F]",
    borderColor: "border-[#8FD14F]",
    pic: "https://i.postimg.cc/ppTZNqqz/pic-2.jpg",
    links: {
      orcid: "https://orcid.org/0009-0006-1541-2536",
    },
  },
  {
    name: "Mijanur Rahaman",
    date: "2022 – Till Date",
    details:
      "I am currently working on the design, simulation, and characterization of Lithium Niobate (LN) based photonic devices, including power splitters, filters, and resonators etc. My work also involves circuit design for periodic poling of LN and exploring their applications. This research extends to the development of optical parametric oscillators, lasers, and the determination of amplitude and phase noise.",
    subSection: {
      education: [
        "Secondary | WBBSE",
        "Higher Secondary | WBCHSE",
        "B.Sc | Aliah University",
        "M.Sc | IIT Kharagpur",
        "Ph.D | IIT Kharagpur (Ongoing)",
      ],
      awards: ["Best 'Master's Project' Award(2019 - 2021, IIT KGP)"],
    },
    others: {
      researchArea: "Multimode Lasers",
      projectRole:
        "Design, Simulation, and Characterizations of Photonic Devices",
      email: "mijanur@kgpian.iitkgp.ac.in",
    },
    bgColor: "bg-[#654520]",
    textColor: "text-[#654520]",
    borderColor: "border-[#654520]",
    pic: "https://i.postimg.cc/5Hw55G2d/pic-4.png",
    exam: ["JAM-2019, Gate-2022"],
    links: {
      orcid: "https://orcid.org/0009-0006-6403-0825",
    },
  },
  {
    name: "Anjali A R",
    date: "2022 – Till Date",
    details:
      "I am a PhD student whose work is mainly on silicon platform, both bulk as well as thin-film. Currently my interests are in exploring the capabilities of bulk silicon substrate in fabricating photonic devices that require low density integration, which is compatible with commercially used photolithography and reactive ion etching techniques. For the design, I utilize simulation softwares such as OptiFDTD, Ansys Lumerical, and COMSOL Multiphysics. My other research interests include dielectric  metasurfaces and lithium niobate photonics.",
    subSection: {
      education: [
        "Secondary | CISCE",
        "Higher Secondary | CISCE",
        "B.Tech  | Mahatma Gandhi University",
        "M.Tech  | A P J Abdul Kalam Technological University",
        "Ph.D | IIT Kharagpur (Ongoing)",
      ],
    },
    others: {
      researchArea: "Silicon wire waveguides",
      projectRole:
        "Design and fabrication of photonic devices on silicon-on-insulator platform",
      email: "anjaliar@kgpian.iitkgp.ac.in",
    },
    bgColor: "bg-[#EE4E4E]",
    textColor: "text-[#EE4E4E]",
    borderColor: "border-[#EE4E4E]",
    pic: "https://i.postimg.cc/CnKjgxHS/pic-5.png",
    exam: ["GATE 2015"],
  },
  {
    name: "Suman Kumar Pal",
    date: "2022– Till Date",
    details:
      "I am a PhD student in the ATDC department at IIT Kharagpur, working in the Photonics Lab. My research focuses on designing low-cost optical sensors for real time determination of soil macronutrient. My work includes designing and development of spectroscopic system for determination of NPK absorption spectra, contributing to precision  agriculture advancements. I use softwares like LABVIEW for automation i n the system  and Solidworks for 3D model designing and printing.",
    subSection: {
      education: [
        "Secondary | CBSE",
        "Higher Secondary | CBSE",
        "B.tech| RCCIIT",
        "M.tech| NITTTR KOL",
        "Ph.D | IIT Kharagpur (Ongoing)",
      ],
    },
    others: {
      researchArea: "Optical Sensors",
      projectRole:
        "Spectroscopic system design and implementation for detection of soil NPK",
      email: "skpal902@kgpian.iitkgp.ac.in",
    },
    bgColor: "bg-[#624E88]",
    textColor: "text-[#624E88]",
    borderColor: "border-[#624E88]",
    pic: "https://i.postimg.cc/JsH50twh/pic-3.jpg",
    exam: ["GATE 2021 (IN)"],
    links: {
      linked_in: "https://www.linkedin.com/in/suman-kumar-pal-1b9579214/",
    },
  },
  {
    name: "Ria Sen",
    date: "",
    details:
      "I am a Junior Research Fellow in PhoQus Lab, currently working on",
    subSection: {
      education: [
        "Secondary | WBBSE ",
        "Higher Secondary | WBCHSE",
        "BSc| Siliguri College",
        "MSc| NIT Durgapur",
      ],
    },
    designation: "Project JRF",
    others: {
      researchExperience: [
        "JRF, LEOS, ISRO (07.07.2022 to 06.07.2024).",
        "SRF, LEOS, ISRO (07.07.2024 to 23.10.2024).",
      ],
      projectRole: "",
      email: "ria.sen.slg@gmail.com",
    },
    bgColor: "bg-[#624E88]",
    textColor: "text-[#624E88]",
    borderColor: "border-[#624E88]",
    pic: "https://i.postimg.cc/MKkNjXYB/image.png",
    exam: ["IIT JAM (2018)", "GATE (2021)", "GATE (2024)"],
    links: {
      orcid: " https://orcid.org/0009-0009-6894-9953",
    },
  },
];

export const jrStaffData = [
  {
    name: "Pradip Kumar Dey",
    designation: "Technical Superintend",
    date: "2003 - Till Date",
    place: "Microfabrication Lab Advanced Technology Development Centre",
    details: "",
    subSection: {
      education: [
        " B.Sc Physics",
        "M.Sc Electronics",
        "Co-PI:  ATDC Cost Centre",
      ],
      work_experience: [
        "“Development of Silicon Micromachined Accelerometer”, Microelectronics Centre, Dept. of Electronics & ECE, IIT Kharagpur \nSponsored Agency: ISRO",
        " “MEMS Design Centre” under National Program on Smart Material (NPSM) \nAdvanced Technology Development Centre, IIT Kharagpur",
      ],
      skills: [
        "Laser Writer for mask writing ",
        "Lithography processing",
        "RF/DC Sputtering for thin film",
        "Thermal evaporation system ",
        "RIE system for dry etching",
        "MJB4 UV mask aligner",
        "Wire bonder (Kulicke & Soffa)",
        "LPCVD ",
        "Oxidation Furnace",
        "DEK TAK Surface profiler",
      ],
      areaOfInterest: [
        "Microfabrication Technology for MEMS & Photonics Devices",
        "Process material knowledge: Si, LNOI, SOI & Quartz",
      ],
      awards: ["Staff Excellence award, IIT Kharagpur 2016 & 2023"],
      patents: [
        "Wire bonding technique for MEMS and microdevices using conductive paste and hot air blow applicable for both hard and flexible substrate .(WBCPHAB) // Application No: 201831010469, Publication Date: 27/09/2019, IPC Classification: H01L23/00",
        "PORTABLE DIRECT LASER WRITING SYSTEM, Application No.: 202231020707 dated 06-04-2022, Official Journal No. 41/2023 dated 13-10-2023",
      ],
    },
    others: {
      email: "pkd@atdc.iitkgp.ac.in",
      projectRole:
        "Fabrication process optimization, infrastructure development & manpower training",
    },
    bgColor: "bg-[#FFB946]",
    textColor: "text-[#FFB946]",
    borderColor: "border-[#FFB946]",
    pic: "https://i.postimg.cc/QM4nNJmQ/image.png",
    links: {
      linked_in: "https://www.linkedin.com/in/pradip-kumar-dey-9b2092241/",
      citations:
        "https://www.researchgate.net/profile/Pradip-Dey-3/stats/citations",
      publocations: "https://www.researchgate.net/profile/Pradip-Dey-3  ",
      institute:
        "https://atdc.iitkgp.ac.in/technical-staff-1/pradip-kumar-dey.html?redirect=per_page=1",
    },
  },
  {
    name: "Gourab Paira",
    designation: "Junior Technician/Junior Lab Assistant",
    details:
      "Worked as a junior technician at the Micro-Fab Lab at ATDC, IIT Kharagpur. Also, I have experience in “Operation, Maintenance, & Testing” of High Voltage Distribution Substation at NSCBI Airport, Kolkata.",
    subSection: {
      education: [
        "Secondary | WBBSE",
        "Higher Secondary | WBCSE",
        "Diploma (3 Yrs.) | ELECTRICAL ENGINEERING (WBSCTE)",
      ],
      work_experience: [
        "Hands-on experience in various fabrication methods like Sample Cleaning, Thin film deposition, Photo-Lithography, Etching (RIE & Wet), and Thermal Oxidation of Silicon. The task involves fabrication materials such as Silicon, Lithium Niobate, and Silicon on Insulator (SOI).",
        " Maintaining high-end laboratory equipment and executing research techniques with research scholars.",
      ],
      skills: [
        "Thin film deposition system (Hind-HiVac)",
        "UV Photo-Lithography (SUSS Microtech MJB4)",
        "Thermal Oxidation Furnace (TEMPRESS-LINDBERG)",
        "Diffusion Furnace (INOTHERM)",
        "Good understanding of Engineering Drawing and fault rectification of the Lab Equipment.",
      ],
    },
    others: {
      email: "gourab.paira@atdc.iitkgp.ac.in",
    },
    bgColor: "bg-[#FFB946]",
    textColor: "text-[#FFB946]",
    borderColor: "border-[#FFB946]",
    pic: "https://i.postimg.cc/KKRPwzfb/Screenshot-2024-09-14-233819.png",
  },
  {
    name: "Gourab Sarkar",
    designation: "Project Assistant - TechnoAdmin",
    details:
      "Worked as Junior Project Assistant(technical) at IIT Kharagpur. Also I worked as Electrical Supervisor at Rajarhat, Kolkata.",
    subSection: {
      education: [
        "Secondary|WBBSE",
        "Diploma|Electrical Engineering(WBSCTE)",
        "BTech|Electrical Engineering(MAKAUT)",
      ],
      work_experience: [
        "Project Management and Planning.",
        "Data Analysis.",
        "Web Application Development.",
        "Preparing Digital Resource Maps.",
        "Wiring Design for residential complexes.",
        "Installation of Electrical Safety equipments",
      ],
    },
    others: {
      email: "gourabsarkar36@gmail.com",
    },
    bgColor: "bg-[#FFB946]",
    textColor: "text-[#FFB946]",
    borderColor: "border-[#FFB946]",
    pic: "https://i.postimg.cc/wMgpLVK1/image.png",
  },
  {
    name: "Srija Sengupta",
    designation: "Project Assistant - Admin",
    details:
      "Working as Junior Project Assistant(administration) at IIT Kharagpur. Also I worked as Civil Engineer (municipal) in the Public Works Dept. in Local Govt. Body of West Bengal.",
    subSection: {
      education: [
        "Secondary-CBSE",
        "Higher Secondary-CBSE",
        "B.Tech-Civil Engineering(MAKAUT formerly WBUT)",
        "Course-AutoCAD 2D-3D (civil)",
      ],
      work_experience: [
        "Basic House Planning. ",
        "Mass Dealing.",
        "Dealing Administrative documents.",
        "Constructional Legal works.",
        "Public Grievance solving",
        "Road Construction.",
        "Beautification of Green space.",
        "Survey and Supervision of various Govt.Schemes (House for all etc.)",
      ],
    },
    others: {
      email: "ss1.srija@gmail.com",
    },
    bgColor: "bg-[#FFB946]",
    textColor: "text-[#FFB946]",
    borderColor: "border-[#FFB946]",
    pic: "https://i.postimg.cc/wxnWfk0P/image.png",
  },
];

export const researchAssociateData = [
  {
    name: "Sayantani Sen",
    designation: "Research Associate",
    details:
      "Dr. Sayantani Sen is a Research Associate in the project “National Centre for Quantum Accelerator Chip using Lithium Niobate” (NCQAC), sponsored by the Ministry of Electronics and Information Technology (Government of India). Prior to this, she completed her Ph. D. from the University of Calcutta working on MBE growth and fabrication of ultraviolet light emitting diodes based on AlGaN alloys.",
    subSection: {
      education: [
        "Ph. D. | Centre for Research in Nanoscience and Nanotechnology, University of Calcutta",
        "M. Tech. and B. Tech. | Institute of Radio Physics and Electronics, University of Calcutta",
        "B.Sc. (Physics)| Scottish Church College, University of Calcutta",
      ],
      research_interests: [
        "Fabrication of semiconductor optoelectronic devices",
        "Fabrication of waveguides",
        "MBE growth of AlGaN alloys",
        "Optical characterization techniques",
      ],
    },
    others: {
      email: "sayantani163@gmail.com",
      projectRole:
        "Design and fabrication of waveguides from Lithium Niobate on insulator",
    },
    bgColor: "bg-[#FFB946]",
    textColor: "text-[#FFB946]",
    borderColor: "border-[#FFB946]",
    pic: "https://i.postimg.cc/5NzSFZd0/image.png",
    links: {
      orcid_id: "0000-0001-9007-3999",
      google_scholar_citations:
        "https://scholar.google.com/citations?user=9p9NBPUAAAAJ",
      linked_in: "https://www.linkedin.com/in/sayantani-sen-93074b37",
    },
  },
];

export const adminNavData = [
  {
    title: "technology",
    id: "technology",
  },
  {
    title: "collaboration",
    id: "collaboration",
  },
  {
    title: "news & events",
    id: "news",
  },
  {
    title: "pics reel",
    id: "pics",
  },
];

export const additionalLinkData = [
  {
    title: "IIT Kharagpur",
    link: "https://www.iitkgp.ac.in/",
  },
  {
    title: "ATDC",
    link: "https://www.iitkgp.ac.in/",
  },
  {
    title: "C-MET",
    link: "https://cmet.gov.in/",
  },
  {
    title: "MeitY",
    link: "https://www.meity.gov.in/",
  },
];
