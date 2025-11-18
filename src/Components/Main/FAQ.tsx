// import { useState } from 'react';
// import { SelectedPage } from '../Shared/Types';
// import { faqs } from '../Shared/Consts';
// import { motion } from 'framer-motion';

// const FAQ = () => {
//   const [openIndex, setOpenIndex] = useState<number | null>(null);

//   return (
//     <section id={SelectedPage.FAQ} className="py-20 px-6 bg-white">
//       <div className="max-w-4xl mx-auto">

//         {/* Section Title */}
//         <h2 className="text-4xl font-bold text-softBlue text-center mb-12">
//           Frequently Asked Questions
//         </h2>

//         <div className="space-y-5">
//           {faqs.map((faq, index) => {
//             const isOpen = openIndex === index;

//             return (
//               <motion.div
//                 key={index}
//                 initial={{ opacity: 0, y: 10 }}
//                 animate={{ opacity: 1, y: 0 }}
//                 transition={{ duration: 0.3 }}
//                 className={`
//                   border border-softBlue rounded-xl overflow-hidden 
//                   transition-all shadow-sm hover:shadow-md
//                   relative
//                 `}
//               >
//                 {/* Orange Left Active Bar */}
//                 <div
//                   className={`absolute top-0 left-0 h-full w-1 bg-sunsetOrange transition-all ${
//                     isOpen ? "opacity-100" : "opacity-0"
//                   }`}
//                 />

//                 {/* Question Button */}
//                 <button
//                   onClick={() => setOpenIndex(isOpen ? null : index)}
//                   className={`
//                     w-full flex justify-between items-center p-5 text-left 
//                     transition-all relative group
//                     ${isOpen ? "bg-orange-50" : ""}
//                   `}
//                 >
//                   {/* Orange Hover Glow */}
//                   <span className="absolute inset-0 opacity-0 group-hover:opacity-10 bg-sunsetOrange transition-all"></span>

//                   <span className="text-lg font-semibold text-softBlue relative z-10">
//                     {faq.question}
//                   </span>

//                   {/* Icon */}
//                   <span
//                     className={`text-2xl font-bold relative z-10 transition-all ${
//                       isOpen ? "text-sunsetOrange" : "text-softBlue"
//                     }`}
//                   >
//                     {isOpen ? "−" : "+"}
//                   </span>
//                 </button>

//                 {/* Answer Panel */}
//                 {isOpen && (
//                   <motion.div
//                     initial={{ height: 0, opacity: 0 }}
//                     animate={{ height: "auto", opacity: 1 }}
//                     exit={{ height: 0, opacity: 0 }}
//                     transition={{ duration: 0.3 }}
//                     className="px-5 pb-5 bg-orange-50/40 border-t border-orange-200"
//                   >
//                     <p className="text-gray-700 leading-relaxed">{faq.answer}</p>
//                   </motion.div>
//                 )}
//               </motion.div>
//             );
//           })}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default FAQ;

// import { useState, useRef, useEffect } from 'react';
// import { SelectedPage } from '../Shared/Types';
// import { faqs } from '../Shared/Consts';
// import { motion } from 'framer-motion';
// import faqImage from "../../assets/Images/iStockImages/contact.jpg";

// const FAQ = () => {
//   const [openIndex, setOpenIndex] = useState<number | null>(null);
//   const containerRef = useRef<HTMLDivElement>(null);
//   const [height, setHeight] = useState<number>(500);

//   // Sync image height with FAQ left container height
//   useEffect(() => {
//     if (containerRef.current) {
//       setHeight(containerRef.current.offsetHeight);
//     }
//   });

//   return (
//     <section id={SelectedPage.FAQ} className="py-20 px-6 bg-white">
//       <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12">

//         {/* LEFT FAQ LIST */}
//         <div ref={containerRef}>
//           <h2 className="text-4xl font-bold text-softBlue mb-12 text-center md:text-left">
//             Frequently Asked Questions
//           </h2>

//           <div className="space-y-5">
//             {faqs.map((faq, index) => {
//               const isOpen = openIndex === index;

//               return (
//                 <motion.div
//                   key={index}
//                   initial={{ opacity: 0, y: 10 }}
//                   animate={{ opacity: 1, y: 0 }}
//                   transition={{ duration: 0.3 }}
//                   className="border border-softBlue rounded-xl overflow-hidden shadow-sm hover:shadow-md relative"
//                 >
//                   {/* Orange bar */}
//                   <div
//                     className={`absolute top-0 left-0 h-full w-1 bg-sunsetOrange transition-all ${
//                       isOpen ? "opacity-100" : "opacity-0"
//                     }`}
//                   />

//                   {/* QUESTION */}
//                   <button
//                     onClick={() => setOpenIndex(isOpen ? null : index)}
//                     className="w-full flex justify-between items-center p-5 text-left transition-all relative group"
//                   >
//                     <span className="absolute inset-0 opacity-0 group-hover:opacity-10 bg-sunsetOrange transition-all"></span>

//                     <span className="text-lg font-semibold text-softBlue relative z-10">
//                       {faq.question}
//                     </span>

//                     <span
//                       className={`text-2xl font-bold relative z-10 transition-all ${
//                         isOpen ? "text-sunsetOrange rotate-180" : "text-softBlue"
//                       }`}
//                     >
//                       {isOpen ? "−" : "+"}
//                     </span>
//                   </button>

//                   {/* ANSWER */}
//                   {isOpen && (
//                     <motion.div
//                       initial={{ height: 0, opacity: 0 }}
//                       animate={{ height: "auto", opacity: 1 }}
//                       transition={{ duration: 0.3 }}
//                       className="px-5 pb-5 bg-orange-50/40 border-t border-orange-200"
//                     >
//                       <p className="text-gray-700 leading-relaxed">{faq.answer}</p>
//                     </motion.div>
//                   )}
//                 </motion.div>
//               );
//             })}
//           </div>
//         </div>

//         {/* RIGHT IMAGE FULL HEIGHT MATCHING FAQ */}
//         <motion.div
//           className="w-full rounded-xl overflow-hidden shadow-xl"
//           initial={{ opacity: 0, x: 50 }}
//           animate={{ opacity: 1, x: 0 }}
//           transition={{ duration: 0.6 }}
//           style={{ height: height }}  // match height exactly
//         >
//           <img
//             src={faqImage}
//             alt="FAQ Visual"
//             className="w-full h-full object-cover"
//           />
//         </motion.div>

//       </div>
//     </section>
//   );
// };

// export default FAQ;


import { useState, useRef, useEffect } from 'react';
import { SelectedPage } from '../Shared/Types';
import { faqs } from '../Shared/Consts';
import { motion, AnimatePresence } from 'framer-motion';
import faqImage from "../../assets/Images/iStockImages/contact.jpg";

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [height, setHeight] = useState<number>(500);

  // Sync image height with FAQ left container height
  useEffect(() => {
    if (containerRef.current) {
      setHeight(containerRef.current.offsetHeight);
    }
  });

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  const answerVariants = {
    hidden: { opacity: 0, height: 0 },
    visible: { opacity: 1, height: 'auto' },
    exit: { opacity: 0, height: 0 },
  };

  return (
    <section id={SelectedPage.FAQ} className="py-20 px-6 bg-gradient-to-br from-[#fdfbff] to-[#f2f7ff] relative overflow-hidden">
      {/* floating shape */}
      <div className="absolute top-20 left-10 w-40 h-40 bg-sunsetOrange/10 blur-3xl rounded-full"></div>
      <div className="absolute bottom-20 right-10 w-48 h-48 bg-softBlue/10 blur-2xl rounded-full"></div>

      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-14 relative z-10">

        {/* LEFT FAQ LIST */}
        <div ref={containerRef}>
          <motion.h2
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl font-extrabold text-softBlue mb-12 text-center md:text-left drop-shadow-sm"
          >
            Frequently Asked Questions
          </motion.h2>

          <motion.div
            initial="hidden"
            animate="visible"
            transition={{ staggerChildren: 0.08 }}
            className="space-y-6"
          >
            {faqs.map((faq, index) => {
              const isOpen = openIndex === index;

              return (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className="border border-softBlue/30 rounded-xl shadow-sm hover:shadow-lg transition-all bg-white/80 backdrop-blur-sm overflow-hidden group"
                >
                  {/* left bar accent */}
                  <motion.div
                    initial={{ height: 0 }}
                    animate={{ height: isOpen ? '100%' : 0 }}
                    transition={{ duration: 0.3 }}
                    className="absolute left-0 top-0 w-1 bg-gradient-to-b from-sunsetOrange to-yellow-400"
                  />

                  {/* QUESTION */}
                  <button
                    onClick={() => setOpenIndex(isOpen ? null : index)}
                    className="w-full p-6 flex justify-between items-center text-left relative"
                  >
                    <span className="text-lg font-semibold text-softBlue relative z-10 group-hover:text-sunsetOrange transition-all">
                      {faq.question}
                    </span>

                    <motion.span
                      animate={{ rotate: isOpen ? 180 : 0, color: isOpen ? '#FF6B35' : '#2B5CC0' }}
                      transition={{ duration: 0.3 }}
                      className="text-3xl font-bold"
                    >
                      {isOpen ? '−' : '+'}
                    </motion.span>
                  </button>

                  {/* ANSWER */}
                  <AnimatePresence>
                    {isOpen && (
                      <motion.div
                        variants={answerVariants}
                        initial="hidden"
                        animate="visible"
                        exit="exit"
                        transition={{ duration: 0.35 }}
                        className="px-6 pb-6 bg-orange-50/50 border-t border-orange-200"
                      >
                        <p className="text-gray-700 leading-relaxed">
                          {faq.answer}
                        </p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              );
            })}
          </motion.div>
        </div>

        {/* RIGHT IMAGE */}
        <motion.div
          className="w-full rounded-2xl overflow-hidden shadow-xl"
          initial={{ opacity: 0, x: 60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          style={{ height: height }}
        >
          <motion.img
            src={faqImage}
            alt="FAQ Visual"
            className="w-full h-full object-cover scale-100 hover:scale-105 transition-transform duration-700"
            initial={{ scale: 1.1 }}
            animate={{ scale: 1 }}
          />
        </motion.div>

      </div>
    </section>
  );
};

export default FAQ;
