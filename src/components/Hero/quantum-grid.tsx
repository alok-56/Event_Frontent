"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { Cpu, Lightbulb, Target, CheckCircle, Building, Microscope, Rocket, Zap, Braces } from "lucide-react"
import logo from "../../assets/logo.png";

// Replace these with your actual image imports
const model = "/placeholder.svg?height=400&width=800"
const application = "/placeholder.svg?height=400&width=600"
const scope = "/placeholder.svg?height=400&width=800"

const QuantumAcceleratorCenter = () => {
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    setIsLoaded(true)
  }, [])

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  }

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 10,
      },
    },
  }

  const iconAnimation = {
    hidden: { scale: 0, rotate: -180 },
    show: {
      scale: 1,
      rotate: 0,
      transition: {
        type: "spring",
        stiffness: 260,
        damping: 20,
        delay: 0.2,
      },
    },
  }

  const fadeIn = {
    hidden: { opacity: 0, y: 50 },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
      },
    },
  }

  const cards = [
    {
      title: "Vision",
      icon: <Lightbulb />,
      color: "bg-gradient-to-br from-blue-50 to-blue-100 border-blue-200",
      iconBg: "bg-blue-500",
      content: (
        <p className="text-gray-600">
          Develop and deploy sector-specific ambient temperature photonic quantum accelerator chip technology based on
          Lithium Niobate on Insulator (LNOI) photonic integrated circuit (PIC) platform.
        </p>
      ),
    },
    {
      title: "Mission",
      icon: <Target />,
      color: "bg-gradient-to-br from-purple-50 to-purple-100 border-purple-200",
      iconBg: "bg-purple-500",
      content: (
        <ul className="list-disc list-inside text-gray-600 space-y-2 ml-1">
          <li>
            Development of indigenous technology for SME production of ambient temperature photonic quantum accelerator
            chip.
          </li>
          <li>Deployment of the as-developed technology through R&D services and start-ups.</li>
        </ul>
      ),
    },
    {
      title: "Objectives",
      icon: <CheckCircle />,
      color: "bg-gradient-to-br from-emerald-50 to-emerald-100 border-emerald-200",
      iconBg: "bg-emerald-500",
      content: (
        <p className="text-gray-600">
          To establish a self-sustainable center entitled{" "}
          <span className="font-semibold">
            "National Centre for Quantum Accelerator Chip using Lithium Niobate (LN) on Insulator Photonic Integrated
            Circuit (NCQAC)"
          </span>{" "}
          at IIT Kharagpur in partnership with CMET, Pune.
        </p>
      ),
    },
    {
      title: "Expected Outcomes",
      icon: <Rocket />,
      color: "bg-gradient-to-br from-amber-50 to-amber-100 border-amber-200",
      iconBg: "bg-amber-500",
      content: (
        <ul className="list-disc list-inside text-gray-600 space-y-2 ml-1">
          <li>Facility Development</li>
          <li>Technology Development</li>
          <li>Technology Opportunity Leads</li>
        </ul>
      ),
    },
    // {
    //   title: "Proposed Model",
    //   icon: <Building />,
    //   color: "bg-gradient-to-br from-indigo-50 to-indigo-100 border-indigo-200",
    //   iconBg: "bg-indigo-500",
    //   content: (
    //     <div className="flex flex-col items-center">
    //       <img
    //         src={model || "/placeholder.svg"}
    //         alt="Proposed Model"
    //         className="w-full rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300"
    //       />
    //       <p className="mt-3 text-gray-600 font-medium">Proposed Model of the Centre</p>
    //     </div>
    //   ),
    // },
    // {
    //   title: "Applications",
    //   icon: <Zap />,
    //   color: "bg-gradient-to-br from-rose-50 to-rose-100 border-rose-200",
    //   iconBg: "bg-rose-500",
    //   content: (
    //     <div className="flex flex-col items-center">
    //       <img
    //         src={application || "/placeholder.svg"}
    //         alt="Applications"
    //         className="w-full rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300"
    //       />
    //       <p className="mt-3 text-gray-600 font-medium">Applications and frontiers of LNOI PIC</p>
    //     </div>
    //   ),
    // },
    // {
    //   title: "Technology",
    //   icon: <Cpu />,
    //   color: "bg-gradient-to-br from-cyan-50 to-cyan-100 border-cyan-200",
    //   iconBg: "bg-cyan-500",
    //   content: (
    //     <p className="text-gray-600">
    //       Utilizing cutting-edge Lithium Niobate on Insulator (LNOI) photonic integrated circuit technology to develop
    //       quantum accelerator chips that operate at ambient temperature.
    //     </p>
    //   ),
    // },
    // {
    //   title: "Research Focus",
    //   icon: <Microscope />,
    //   color: "bg-gradient-to-br from-teal-50 to-teal-100 border-teal-200",
    //   iconBg: "bg-teal-500",
    //   content: (
    //     <div className="flex flex-col items-center">
    //       <img
    //         src={scope || "/placeholder.svg"}
    //         alt="Aim and Scope"
    //         className="w-full rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300"
    //       />
    //       <p className="mt-3 text-gray-600 font-medium">Aim and scope of the project</p>
    //     </div>
    //   ),
    // },
  ]

  return (
    <motion.div
      initial="hidden"
      animate={isLoaded ? "show" : "hidden"}
      variants={fadeIn}
      className="w-full py-4 bg-gradient-to-b from-white to-blue-50"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Title Section */}
        <motion.div variants={fadeIn} className="text-center mb-16">
          <div className="flex justify-center mb-6">
            <motion.div
              variants={iconAnimation}
              className="rounded-full"
            >
             <img src={logo} alt="logo" className="object-contain w-40 h-40"/>
            </motion.div>
          </div>
          <h1 className="text-4xl sm:text-5xl font-bold bg-gradient-to-r from-[#0f2444] to-[#0f2444] bg-clip-text text-transparent mb-4">
            National Centre for Quantum Accelerator Chip
          </h1>
          <p className="text-gray-700 text-lg sm:text-xl max-w-3xl mx-auto">
            A collaborative 5-year project by IIT Kharagpur and CMET Pune.
          </p>
        </motion.div>

        {/* Grid Cards */}
        <motion.div variants={container} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4">
          {cards.map((card, index) => (
            <motion.div
              key={index}
              variants={item}
              whileHover={{
                y: -10,
                transition: { type: "spring", stiffness: 300 },
              }}
              className={`rounded-xl border p-6 shadow-md hover:shadow-xl transition-all duration-300 ${card.color}`}
            >
              <div className="flex items-center mb-4">
                <motion.div
                  variants={iconAnimation}
                  className={`p-3 rounded-lg ${card.iconBg} text-white mr-4 shadow-md`}
                >
                  {card.icon}
                </motion.div>
                <h2 className="text-xl font-bold text-gray-800">{card.title}</h2>
              </div>
              <div className="mt-4">{card.content}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.div>
  )
}

export default QuantumAcceleratorCenter

