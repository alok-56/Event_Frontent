import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const Section = ({ children, title }:{children:any, title:any}) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { amount: 0.2 }); // Trigger animation when 20% of the section is visible

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 1 }}
      className="bg-white shadow-md rounded-xl p-6 mb-8"
    >
      <h2 className="text-2xl font-semibold text-blue-800 mb-4">{title}</h2>
      <div>{children}</div>
    </motion.div>
  );
};

export default Section;