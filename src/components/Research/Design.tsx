"use client"

import { useState, useEffect } from "react"
import { Card, CardContent, CardTitle } from "../../components/ui/card"
import { motion } from "framer-motion"


 import img from "../../assets/image/img.png";
 import img1 from "../../assets/image/img1.png";
 import img3 from "../../assets/image/img3.png";

export default function Design() {
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    setIsLoaded(true)
  }, [])

  const tools = [
    {
      id: 1,
      title: "OptiWAVE",
      features: ["Passive photonic devices modeling and analysis", "Interactions of light with photonic structures"],
      image: img,
      imagePosition: "right",
    },
    {
      id: 2,
      title: "ANSYS Optics",
      features: [
        "Design and optimization of components and systems",
        "Python integration and inverse design capabilities",
        "Multiphysics level analysis",
      ],
      image: img1,
      imagePosition: "left",
    },
    {
      id: 3,
      title: "COMSOL Multiphysics",
      features: [
        "Wave Optics module",
        "Finite Element Method (FEM) based computations",
        "Beam Envelope Method for electromagnetic wave propagation",
      ],
      image: img3,
      imagePosition: "right",
    },
    {
      id: 4,
      title: "Synopsys Rsoft Photonic Device Tools (Upcoming)",
      features: [
        "Photonics and electronics design on a single platform",
        "Photonic ICs and system level simulations",
        "Supports specific foundry PDKs and also enables custom PDK creation",
      ],
      image: null,
      imagePosition: "left",
    },
  ]

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
      },
    },
  }

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  }

  return (
    <div className="w-11/12 md:w-10/12 mx-auto py-32 mt-10">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="w-full bg-gradient-to-r from-[#0f2444] to-[#0f2444] rounded-lg shadow-lg border border-primary/20 py-4 text-center mb-16"
      >
        <h1 className="text-3xl md:text-4xl font-bold text-primary-foreground mb-4">Simulation Laboratory</h1>
        <p className="text-lg text-primary-foreground/90">Advanced tools for photonic simulation and analysis</p>
      </motion.div>

      <motion.div variants={container} initial="hidden" animate={isLoaded ? "show" : "hidden"} className="space-y-16">
        {tools.map((tool, index) => (
          <motion.div key={tool.id} variants={item}>
            <Card className="overflow-hidden ring-1 ring-gray-300 transition-all duration-500 hover:shadow-xl border-none bg-gradient-to-br from-background to-background/50 backdrop-blur-sm">
              <CardContent className="p-0">
                <div
                  className={`grid md:grid-cols-2 grid-cols-1 gap-8 p-6 ${index % 2 !== 0 && "md:flex md:flex-row-reverse"}`}
                >
                  <div className="flex flex-col justify-center space-y-4">
                    <CardTitle className="text-2xl font-bold">{tool.title}</CardTitle>
                    <ul className="list-disc ml-6 space-y-2 text-muted-foreground">
                      {tool.features.map((feature, i) => (
                        <motion.li
                          key={i}
                          initial={{ opacity: 0, x: -10 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: 0.2 + i * 0.1 }}
                          className="text-base"
                        >
                          {feature}
                        </motion.li>
                      ))}
                    </ul>
                  </div>

                  {tool.image && (
                    <div className="flex items-center justify-center overflow-hidden rounded-lg ring-1 ring-gray-300">
                      <motion.div
                        whileHover={{ scale: 1.05 }}
                        transition={{ duration: 0.3 }}
                        className="relative w-full h-64 md:h-80 "
                      >
                        <img
                          src={tool.image || "/placeholder.svg"}
                          alt={tool.title}
                          className="w-full h-full object-contain rounded-lg shadow-md transition-transform duration-500 hover:scale-105"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent rounded-lg opacity-0 hover:opacity-100 transition-opacity duration-300"></div>
                      </motion.div>
                    </div>
                  )}

                  {!tool.image && tool.imagePosition === "left" && (
                    <div className="flex items-center justify-center">
                      <div className="w-full h-64 md:h-80 bg-muted/30 rounded-lg flex items-center justify-center border border-dashed border-muted">
                        <p className="text-muted-foreground">Coming Soon</p>
                      </div>
                    </div>
                  )}
                </div>
              </CardContent>
            </Card>

           
          </motion.div>
        ))}
      </motion.div>
    </div>
  )
}





// import img from "../../assets/image/img.png";
// import img1 from "../../assets/image/img1.png";
// import img3 from "../../assets/image/img3.png";

// const Design = () => {
//   return (
//     <div className=" w-11/12 md:w-10/12 mx-auto py-32">
//       <div className=" w-full bg-red-400 border-2 border-black py-[30px] text-center mb-[50px]">
//         Image of simulation lab with students working
//       </div>
//       <div className=" grid md:grid-cols-2 grid-cols-1 gap-[20px] mb-[50px]">
//         <div className="">
//           <h3 className=" text-[20px] font-semibold">OptiWAVE</h3>
//           <ul className=" list-disc ml-10 text-[18px]">
//             <li>Passive photonic devices modeling and analysis</li>
//             <li>Interactions of light with photonic structures</li>
//           </ul>
//         </div>
//         <div className=" flex justify-end items-center">
//           <img src={img} alt="" className="object-contain " />
//         </div>
//       </div>
//       <hr className=" w-full md:w-48 h-px bg-slate-500 border-0 rounded mx-auto my-[50px]"/>
//       <div className=" grid md:grid-cols-2 grid-cols-1 gap-[20px] mb-[50px]">
//         <div className=" flex justify-start items-center">
//           <img src={img1} alt="" className="object-contain " />
//         </div>
//         <div className="">
//           <h3 className=" text-[20px] font-semibold">ANSYS Optics</h3>
//           <ul className=" list-disc ml-10 text-[18px]">
//             <li>Design and optimization of components and systems</li>
//             <li>Python integration and inverse design capabilities</li>
//             <li>Multiphysics level analysis</li>
//           </ul>
//         </div>
        
//       </div>
//       <hr className=" w-full md:w-48 h-px bg-slate-500 border-0 rounded mx-auto my-[50px]"/>
//       <div className=" grid md:grid-cols-2 grid-cols-1 gap-[20px] mb-[50px]">
//         <div className="">
//           <h3 className=" text-[20px] font-semibold">COMSOL Multiphysics</h3>
//           <ul className=" list-disc ml-10 text-[18px]">
//             <li>Wave Optics module</li>
//             <li>Finite Element Method (FEM) based computations</li>
//             <li>Beam Envelope Method for electromagnetic wave propagation</li>
//           </ul>
//         </div>
//         <div className=" flex justify-end items-center">
//           <img src={img3} alt="" className="object-contain " />
//         </div>
//       </div>
//       <hr className=" w-full md:w-48 h-px bg-slate-500 border-0 rounded mx-auto my-[50px]"/>
//       <div className=" grid md:grid-cols-2 grid-cols-1 gap-[20px] mb-[50px]">
//         <div className=" flex justify-start items-center">
//           {/* <img src={img1} alt="" className="object-contain " /> */}
//         </div>
//         <div className="">
//           <h3 className=" text-[20px] font-semibold">Synopsys Rsoft Photonic Device Tools (Upcoming)</h3>
//           <ul className=" list-disc ml-10 text-[18px]">
//             <li>Photonics and electronics design on a single platform</li>
//             <li>Photonic ICs and system level simulations</li>
//             <li>Supports specific foundry PDKs and also enables custom PDK creation</li>
//           </ul>
//         </div>
        
//       </div>
//     </div>
//   );
// };

// export default Design;
