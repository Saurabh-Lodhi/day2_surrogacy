// import { useState } from 'react';
// import { SelectedPage } from '../Shared/Types';
// import { faqs } from '../Shared/Consts';
// import { motion } from 'framer-motion';

// const FAQ = () => {
//   const [openIndex, setOpenIndex] = useState<number | null>(null);

//   return (
//     <section id={SelectedPage.FAQ} className="py-20 px-6">
//       <div className="max-w-4xl mx-auto">
//         <motion.h2
//           initial="hidden"
//           whileInView="visible"
//           viewport={{ once: true, amount: 0.5 }}
//           transition={{ duration: 0.5 }}
//           variants={{
//             hidden: { opacity: 0, y: -50 },
//             visible: { opacity: 1, y: 0 },
//           }}
//           className="text-4xl font-bold text-[#1d4d85] text-center mb-12"
//         >
//           Frequently Asked Questions
//         </motion.h2>
//         <div className="space-y-4">
//           {faqs.map((faq, index) => (
//             <motion.div
//               key={index}
//               initial="hidden"
//               whileInView="visible"
//               viewport={{ once: true, amount: 0.5 }}
//               transition={{ delay: index * 0.1, duration: 0.5 }}
//               variants={{
//                 hidden: { opacity: 0, x: -50 },
//                 visible: { opacity: 1, x: 0 },
//               }}
//               className="bg-white rounded-lg shadow-md overflow-hidden"
//             >
//               <button
//                 onClick={() => setOpenIndex(openIndex === index ? null : index)}
//                 className="w-full p-6 text-left flex justify-between items-center hover:bg-[#f7f7f7] transition"
//               >
//                 <span className="text-lg font-bold text-[#1d4d85]">
//                   {faq.question}
//                 </span>
//                 <span className="text-2xl text-primary">
//                   {openIndex === index ? '−' : '+'}
//                 </span>
//               </button>
//               {openIndex === index && (
//                 <div className="px-6 pb-6">
//                   <p className="text-[#1d4d85]">{faq.answer}</p>
//                 </div>
//               )}
//             </motion.div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default FAQ;

// import { useState } from 'react';
// import { SelectedPage } from '../Shared/Types';
// import { faqs } from '../Shared/Consts';
// import { motion } from 'framer-motion';

// const FAQ = () => {
//   const [openIndex, setOpenIndex] = useState<number | null>(null);

//   return (
//     <section id={SelectedPage.FAQ} className="py-20 px-6 bg-light">
//       <div className="max-w-4xl mx-auto">
//         <motion.div
//           initial="hidden"
//           whileInView="visible"
//           viewport={{ once: true, amount: 0.5 }}
//           transition={{ duration: 0.5 }}
//           variants={{
//             hidden: { opacity: 0, y: -50 },
//             visible: { opacity: 1, y: 0 },
//           }}
//           className="text-center mb-16"
//         >
//           <h2 className="font-heading text-5xl font-bold text-primary mb-4 tracking-wide uppercase">
//             Frequently Asked Questions
//           </h2>
//           <div className="w-24 h-1 bg-gradient-embryon mx-auto"></div>
//         </motion.div>

//         <div className="space-y-4">
//           {faqs.map((faq, index) => (
//             <motion.div
//               key={index}
//               initial="hidden"
//               whileInView="visible"
//               viewport={{ once: true, amount: 0.5 }}
//               transition={{ delay: index * 0.1, duration: 0.5 }}
//               variants={{
//                 hidden: { opacity: 0, x: -50 },
//                 visible: { opacity: 1, x: 0 },
//               }}
//               className="bg-white rounded-lg shadow-md overflow-hidden border-2 border-transparent hover:border-accent transition"
//             >
//               <button
//                 onClick={() => setOpenIndex(openIndex === index ? null : index)}
//                 className="w-full p-6 text-left flex justify-between items-center hover:bg-light/50 transition"
//               >
//                 <span className="font-heading text-lg font-bold text-primary pr-4">
//                   {faq.question}
//                 </span>
//                 <span className={`text-3xl text-accent transition-transform ${openIndex === index ? 'rotate-45' : ''}`}>
//                   +
//                 </span>
//               </button>
//               {openIndex === index && (
//                 <div className="px-6 pb-6">
//                   <p className="font-body text-dark leading-relaxed">{faq.answer}</p>
//                 </div>
//               )}
//             </motion.div>
//           ))}
//         </div>

//         <motion.div
//           initial="hidden"
//           whileInView="visible"
//           viewport={{ once: true, amount: 0.5 }}
//           transition={{ delay: 0.6, duration: 0.5 }}
//           variants={{
//             hidden: { opacity: 0, y: 30 },
//             visible: { opacity: 1, y: 0 },
//           }}
//           className="mt-12 text-center"
//         >
//           <p className="font-body text-dark mb-4">Still have questions?</p>
//           <button className="bg-gradient-embryon text-white px-8 py-3 rounded-full font-heading font-bold hover:shadow-lg transition">
//             Schedule a Call
//           </button>
//         </motion.div>
//       </div>
//     </section>
//   );
// };

// export default FAQ;

import { useState } from 'react';
import { SelectedPage } from '../Shared/Types';
import { faqs } from '../Shared/Consts';
import { motion } from 'framer-motion';

// Updated color variables based on request
// Primary: Deep Violet (#4B0082)
// Secondary: Soft Blue (#4682B4)
// Accent: Sunset Orange (#FF7F50)
// Dark: Graphite Black (#1A1A1A)
// Light: Light Gray (#F3F3F3)
// Gradient: Deep Violet → Soft Blue

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section id={SelectedPage.FAQ} className="py-20 px-6 bg-[#F3F3F3]">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, y: -50 },
            visible: { opacity: 1, y: 0 },
          }}
          className="text-center mb-16"
        >
          <h2 className="font-heading text-5xl font-bold text-[#4B0082] mb-4 tracking-wide uppercase">
            Frequently Asked Questions
          </h2>
          <div className="w-24 h-1 mx-auto bg-gradient-to-r from-[#4B0082] to-[#4682B4]"></div>
        </motion.div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.5 }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              variants={{
                hidden: { opacity: 0, x: -50 },
                visible: { opacity: 1, x: 0 },
              }}
              className="bg-white rounded-lg shadow-md overflow-hidden border-2 border-transparent hover:border-[#FF7F50] transition"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full p-6 text-left flex justify-between items-center hover:bg-[#F3F3F3]/50 transition"
              >
                <span className="font-heading text-lg font-bold text-[#4B0082] pr-4">
                  {faq.question}
                </span>
                <span
                  className={`text-3xl text-[#FF7F50] transition-transform ${
                    openIndex === index ? 'rotate-45' : ''
                  }`}
                >
                  +
                </span>
              </button>
              {openIndex === index && (
                <div className="px-6 pb-6">
                  <p className="font-body text-[#1A1A1A] leading-relaxed">{faq.answer}</p>
                </div>
              )}
            </motion.div>
          ))}
        </div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ delay: 0.6, duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, y: 30 },
            visible: { opacity: 1, y: 0 },
          }}
          className="mt-12 text-center"
        >
          <p className="font-body text-[#1A1A1A] mb-4">Still have questions?</p>
          <button className="text-white px-8 py-3 rounded-full font-heading font-bold hover:shadow-lg transition bg-gradient-to-r from-[#4B0082] to-[#4682B4]">
            Schedule a Call
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default FAQ;
