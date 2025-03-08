import { motion } from "framer-motion";
import {
  Instagram,
  Facebook,
  Linkedin,
  Twitter,
  Mail,
  MapPin,
  Phone,
} from "lucide-react";
import { Link } from "react-router-dom";
import { partnersData } from "../../utils/data";
import { additionalLinkData } from "../../utils/data";
import logo from "../../assets/logo.png";

const Footer = () => {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 },
  };

  return (
    <footer className="w-full bg-gradient-to-b from-gray-50 to-white">
      {/* Top Logos Section */}
      <div className="w-full border-b">
        <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-between items-center gap-8">
            {partnersData &&
              partnersData.map((item, index) => (
                <motion.img
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5 }}
                  src={item.img}
                  alt="Ministry of Electronics and IT"
                  className="h-16 object-contain"
                />
              ))}
          </div>
        </div>
      </div>

      {/* Navigation Links */}
      <div className="bg-blue-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="flex flex-wrap justify-center md:justify-between items-center py-4 space-x-4">
            {additionalLinkData.map((item, index) => (
              <Link
                key={index}
                to={item.link}
                className="hover:text-blue-300 transition-colors duration-200 font-medium px-3 py-2"
              >
                {item.title}
              </Link>
            ))}
          </nav>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="bg-[#0f2444] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {/* Logo & About */}
            <motion.div
              variants={container}
              initial="hidden"
              animate="show"
              className="space-y-4"
            >
              <img src={logo} alt="logo" className="h-24 w-24 bg-white rounded-full object-contain"/>
              <motion.h2
                variants={item}
                className="text-3xl font-bold tracking-wider"
              >
                NCQAC
              </motion.h2>
              <motion.p variants={item} className="text-gray-400 max-w-sm">
                National Centre for Quantum Accelerator Chip
              </motion.p>
            </motion.div>

            {/* Contact Info */}
            <motion.div
              variants={container}
              initial="hidden"
              animate="show"
              className="space-y-6"
            >
              <motion.h3 variants={item} className="text-xl font-semibold mb-4">
                Contact
              </motion.h3>
              <motion.div
                variants={item}
                className="flex items-start space-x-3"
              >
                <MapPin className="w-5 h-5 text-blue-400 mt-1" />
                <div>
                  <p className="font-medium">
                    Advanced Technology Development Centre
                  </p>
                  <p className="text-gray-400">IIT Kharagpur</p>
                </div>
              </motion.div>
              <motion.div
                variants={item}
                className="flex items-center space-x-3"
              >
                <Mail className="w-5 h-5 text-blue-400" />
                <a
                  href="mailto:syamsundarde@iitkgp.ac.in"
                  className="text-gray-400 hover:text-blue-400 transition-colors duration-200"
                >
                  syamsundarde@iitkgp.ac.in
                </a>
              </motion.div>
              <motion.div
                variants={item}
                className="flex items-start space-x-3"
              >
                <Phone className="w-5 h-5 text-blue-400 mt-1" />
                <div>
                  <p className="font-medium">Dr. Syamsundar De</p>
                  <p className="text-gray-400">Assistant Professor</p>
                </div>
              </motion.div>
            </motion.div>

            {/* Social Media */}
            <motion.div
              variants={container}
              initial="hidden"
              animate="show"
              className="space-y-6"
            >
              <motion.h3 variants={item} className="text-xl font-semibold mb-4">
                Social Media
              </motion.h3>
              <motion.div variants={item} className="flex space-x-4">
                {[
                  { icon: Instagram, href: "#" },
                  { icon: Facebook, href: "#" },
                  { icon: Linkedin, href: "#" },
                  { icon: Twitter, href: "#" },
                ].map((social, index) => (
                  <a
                    key={index}
                    href={social.href}
                    className="p-2 rounded-full bg-gray-800 hover:bg-blue-600 transition-colors duration-200"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <social.icon className="w-5 h-5" />
                  </a>
                ))}
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="bg-gray-950 text-gray-400">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-sm">
              © 2024 All Rights Reserved. Maintained by Vaibwork -
              <a
                href="https://vaibwork.in"
                className="hover:text-blue-400 transition-colors duration-200 ml-1"
                target="_blank"
                rel="noopener noreferrer"
              >
                vaibwork.in
              </a>
            </p>
            <div className="flex space-x-6">
              <Link
                to="/privacy"
                className="text-sm hover:text-blue-400 transition-colors duration-200"
              >
                Privacy Policy
              </Link>
              <Link
                to="/terms"
                className="text-sm hover:text-blue-400 transition-colors duration-200"
              >
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

// import { FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa";
// import { FaXTwitter } from "react-icons/fa6";

// const Footer = () => {
//   return (
//     <div>
//       <div className="bg-[#0f2444] py-3">
//         <div className="w-11/12 mx-auto sm:flex sm:justify-between mb-6 pt-5">
//           <div className=" text-white font-Josefin text-5xl text-center sm:text-start sm:mb-0 mb-3">
//             NCQAC
//           </div>
//           <div className=" text-white text-center sm:mb-0 mb-3">
//             <p className=" font-bold sm:mb-3">CONTACT</p>
//             <p>Chief Investigator:</p>
//             <p>Dr. Syamsundar De</p>
//             <p>Assistant Professor</p>
//             <p>Advanced Technology Development Centre</p>
//             <p>IIT Kharagpur</p>
//             <p>syamsundarde@iitkgp.ac.in</p>
//           </div>
//           <div className=" text-white text-center">
//             <p className=" font-bold mb-3">SOCIAL MEDIA</p>
//             <div className="flex gap-5 justify-center">
//               <a
//                 href="https://www.instagram.com/"
//                 target="_blank"
//                 rel="noopener noreferrer"
//               >
//                 <FaInstagram size={25} />
//               </a>
//               <a
//                 href="https://www.facebook.com/"
//                 target="_blank"
//                 rel="noopener noreferrer"
//               >
//                 <FaFacebook size={25} />
//               </a>
//               <a
//                 href="https://www.linkedin.com/"
//                 target="_blank"
//                 rel="noopener noreferrer"
//               >
//                 <FaLinkedin size={25} />
//               </a>
//               <a
//                 href="https://twitter.com/"
//                 target="_blank"
//                 rel="noopener noreferrer"
//               >
//                 <FaXTwitter size={25} />
//               </a>
//             </div>
//           </div>
//         </div>
//         <div className="w-11/12 mx-auto sm:flex sm:justify-between sm:items-center text-sm sm:text-start text-center">
//           <div className="text-white">
//             © 2024 All Rights Reserved. Maintained by Vaibwork - vaibwork.in
//           </div>
//           <div className="text-white">Privacy Policy</div>
//           <div className="text-white">Terms of Service</div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Footer;
