// import { SelectedPage } from '../Shared/Types';
// import { motion } from 'framer-motion';
// import heroImage from '../../assets/Images/iStock Images/hero.jpg'; // <-- IMPORT IMAGE

// const Hero = () => {
//   return (
//     <section
//       id={SelectedPage.Home}
//       className="py-20 px-6 bg-gradient-to-br from-[#aed4ff] to-[#f7f7f7]"
//     >
//       <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
//         <motion.div
//           initial="hidden"
//           whileInView="visible"
//           viewport={{ once: true, amount: 0.5 }}
//           transition={{ duration: 0.5 }}
//           variants={{
//             hidden: { opacity: 0, x: -50 },
//             visible: { opacity: 1, x: 0 },
//           }}
//         >
//           <h2 className="text-4xl md:text-5xl font-bold text-[#1d4d85] mb-6">
//             Your Path to Parenthood Starts Here
//           </h2>
//           <p className="text-xl text-[#1d4d85] mb-8">
//             Leading surrogacy, IVF, and egg donation services in Ukraine. We
//             help make your dreams of having a family come true with compassionate
//             care and medical excellence.
//           </p>
//           <button className="bg-primary text-white px-8 py-4 rounded-full text-lg font-bold hover:bg-[#0f6ec4] transition">
//             Schedule Consultation
//           </button>
//         </motion.div>

//         {/* IMAGE SECTION */}
//         <motion.div
//           initial="hidden"
//           whileInView="visible"
//           viewport={{ once: true, amount: 0.5 }}
//           transition={{ delay: 0.2, duration: 0.5 }}
//           variants={{
//             hidden: { opacity: 0, x: 50 },
//             visible: { opacity: 1, x: 0 },
//           }}
//           className="relative"
//         >
//           <div className="w-full h-96 rounded-3xl overflow-hidden">
//             <img 
//               src={heroImage} 
//               alt="Hero" 
//               className="w-full h-full object-cover" 
//             />
//           </div>
//         </motion.div>
//       </div>
//     </section>
//   );
// };

// export default Hero;

// import { SelectedPage } from '../Shared/Types';
// import { motion } from 'framer-motion';
// import heroImage from '../../assets/Images/iStockImages/hero.jpg';

// const Hero = () => {
//   return (
//     <section
//       id={SelectedPage.Home}
//       className="py-20 px-6 bg-gradient-embryon"
//     >
//       <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
//         <motion.div
//           initial="hidden"
//           whileInView="visible"
//           viewport={{ once: true, amount: 0.5 }}
//           transition={{ duration: 0.5 }}
//           variants={{
//             hidden: { opacity: 0, x: -50 },
//             visible: { opacity: 1, x: 0 },
//           }}
//         >
// <h1 className="font-heading text-5xl md:text-6xl font-bold mb-4 tracking-wide uppercase" style={{ color: "#4682B4" }}>
//   The Embryon Family
// </h1>

// <p className="font-subtitle text-2xl italic mb-6" style={{ color: "#4682B4CC" }}>
//   Trusted Since 1994
// </p>

// <p className="font-body text-xl mb-8 leading-relaxed" style={{ color: "#4682B4" }}>
//   With a legacy spanning over 30 years, we are an American-managed leading fertility clinic in Ukraine. We have successfully facilitated over 28,000 transformative journeys with outstanding live birth rates.
// </p>

// <button
//   className="px-8 py-4 rounded-full text-lg font-bold transition shadow-lg"
//   style={{ backgroundColor: "#FF7F50", color: "white" }}
// >
//   Schedule Your Appointment
// </button>

//         </motion.div>

//         <motion.div
//           initial="hidden"
//           whileInView="visible"
//           viewport={{ once: true, amount: 0.5 }}
//           transition={{ delay: 0.2, duration: 0.5 }}
//           variants={{
//             hidden: { opacity: 0, x: 50 },
//             visible: { opacity: 1, x: 0 },
//           }}
//           className="relative"
//         >
//           <div className="w-full h-96 rounded-3xl overflow-hidden shadow-2xl">
//             <img 
//               src={heroImage} 
//               alt="Embryon Family Fertility Center" 
//               className="w-full h-full object-cover" 
//             />
//           </div>
//         </motion.div>
//       </div>
//     </section>
//   );
// };

// export default Hero;


import { useState } from "react";
import { SelectedPage } from "../Shared/Types";
import { motion } from "framer-motion";

import banner1 from "../../assets/Images/iStockImages/banner1.jpg";
import banner2 from "../../assets/Images/iStockImages/banner2.jpg";
import banner3 from "../../assets/Images/iStockImages/banner3.jpg";

const slides = [banner1, banner2, banner3];

const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
   <section
  id={SelectedPage.Home}
  className="relative w-full h-[90vh] overflow-hidden mt-[66px]"
>

      {/* ---------------- SLIDE IMAGE ---------------- */}
      <div
        className="absolute inset-0 bg-cover bg-center transition-all duration-700"
        style={{ backgroundImage: `url(${slides[currentSlide]})` }}
      ></div>

      {/* ------------- DARK OVERLAY FOR READABILITY ------------- */}
      <div className="absolute inset-0 bg-black bg-opacity-40"></div>

      {/* ---------------- CONTENT SECTION ---------------- */}
      <div className="relative z-10 h-full flex items-center max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-2xl text-white"
        >
          <h1 className="font-heading text-5xl md:text-6xl font-bold mb-4 uppercase drop-shadow-xl">
            The Embryon Family
          </h1>

          <p className="font-subtitle text-2xl italic mb-6 opacity-90">
            Trusted Since 1994
          </p>

          <p className="font-body text-xl mb-8 leading-relaxed opacity-90">
            With a legacy spanning over 30 years, we are an American-managed
            leading fertility clinic in Ukraine. We have facilitated more than
            28,000 successful transformative journeys.
          </p>

          {/* <button
            className="px-8 py-4 rounded-full text-lg font-bold shadow-lg hover:opacity-90"
            style={{ backgroundColor: "#FF7F50", color: "white" }}
          >
            Schedule Your Appointment
          </button>
           */}
           <motion.button
  initial={{ scale: 1 }}
  whileHover={{
    scale: 1.08,
    boxShadow: "0px 10px 25px rgba(255,127,80,0.5)",
  }}
  whileTap={{ scale: 0.97 }}
  transition={{ duration: 0.3 }}
  className="
    relative px-10 py-4 rounded-full text-lg font-bold 
    overflow-hidden shadow-lg 
    bg-gradient-to-r from-[#FF7F50] to-[#FF986A]
    text-white tracking-wide
  "
>
  {/* Shine Animation */}
  <span
    className="
      absolute inset-0 bg-white/30 
      opacity-0 group-hover:opacity-40
      blur-xl transition duration-700
    "
  ></span>

  {/* Light Sweep */}
  <span
    className="
      absolute top-0 left-[-150%] w-1/2 h-full 
      bg-white/40 rotate-12 
      group-hover:left-[150%] 
      transition-all duration-[1200ms] ease-in-out
    "
  ></span>

  Schedule Your Appointment
</motion.button>

        </motion.div>
      </div>

      {/* ---------------- LEFT & RIGHT BUTTONS ---------------- */}
      <button
        onClick={prevSlide}
        className="absolute left-6 top-1/2 -translate-y-1/2 bg-white bg-opacity-70 hover:bg-opacity-90 text-black px-4 py-2 rounded-full shadow-xl font-bold"
      >
        ‹
      </button>

      <button
        onClick={nextSlide}
        className="absolute right-6 top-1/2 -translate-y-1/2 bg-white bg-opacity-70 hover:bg-opacity-90 text-black px-4 py-2 rounded-full shadow-xl font-bold"
      >
        ›
      </button>
    </section>
  );
};

export default Hero;
