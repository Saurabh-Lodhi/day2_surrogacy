// import { SelectedPage } from '../Shared/Types';
// import { services } from '../Shared/Consts';
// import { motion } from 'framer-motion';

// const Services = () => {
//   return (
//     <section
//       id={SelectedPage.Services}
//       className="py-20 px-6 bg-[#f7f7f7]"
//     >
//       <div className="max-w-7xl mx-auto">
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
//           Our Services
//         </motion.h2>
//         <div className="grid md:grid-cols-3 gap-8">
//           {services.map((service, index) => (
//             <motion.div
//               key={index}
//               initial="hidden"
//               whileInView="visible"
//               viewport={{ once: true, amount: 0.5 }}
//               transition={{ delay: index * 0.2, duration: 0.5 }}
//               variants={{
//                 hidden: { opacity: 0, y: 50 },
//                 visible: { opacity: 1, y: 0 },
//               }}
//               className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition"
//             >
//               <div className="text-6xl mb-4">{service.icon}</div>
//               <h3 className="text-2xl font-bold text-[#1d4d85] mb-4">
//                 {service.title}
//               </h3>
//               <p className="text-[#1d4d85]">{service.description}</p>
//             </motion.div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Services;

// import { SelectedPage } from '../Shared/Types';
// import { services } from '../Shared/Consts';
// import { motion } from 'framer-motion';

// const Services = () => {
//   return (
//     <section
//       id={SelectedPage.Services}
//       className="py-20 px-6 bg-light"
//     >
//       <div className="max-w-7xl mx-auto">
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
//             Our Services
//           </h2>
//           <div className="w-24 h-1 bg-gradient-embryon mx-auto mb-4"></div>
//           <p className="font-subtitle text-2xl text-secondary italic">
//             Personalized Journeys to Parenthood Designed Specifically for You
//           </p>
//         </motion.div>

//         <div className="grid md:grid-cols-3 gap-8">
//           {services.map((service, index) => (
//             <motion.div
//               key={index}
//               initial="hidden"
//               whileInView="visible"
//               viewport={{ once: true, amount: 0.5 }}
//               transition={{ delay: index * 0.2, duration: 0.5 }}
//               variants={{
//                 hidden: { opacity: 0, y: 50 },
//                 visible: { opacity: 1, y: 0 },
//               }}
//               className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition group"
//             >
//               <div className="text-6xl mb-6 group-hover:scale-110 transition">{service.icon}</div>
//               <h3 className="font-heading text-2xl font-bold text-primary mb-4">
//                 {service.title}
//               </h3>
//               <p className="font-body text-dark leading-relaxed">{service.description}</p>
//               <button className="mt-6 text-accent font-bold hover:text-primary transition flex items-center gap-2">
//                 Learn More <span>→</span>
//               </button>
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
//           className="mt-16 text-center"
//         >
//           <div className="bg-gradient-embryon p-8 rounded-2xl text-white">
//             <h3 className="font-heading text-3xl font-bold mb-4">
//               Comprehensive Fertility Services
//             </h3>
//             <p className="font-body text-lg max-w-4xl mx-auto leading-relaxed">
//               All of our fertility services are comprehensive from in vitro fertilization (IVF) to egg donation and surrogacy. Being integrated in one place, we can help make your fertility journey straightforward and cost-effective with the right level of support and resources available.
//             </p>
//           </div>
//         </motion.div>
//       </div>
//     </section>
//   );
// };

// export default Services;

import { SelectedPage } from '../Shared/Types';
import { services } from '../Shared/Consts';
import { motion } from 'framer-motion';

const Services = () => {
  return (
    <section
      id={SelectedPage.Services}
      className="py-20 px-6 bg-light"
    >
      <div className="max-w-7xl mx-auto">

        {/* Section Header */}
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
          <h2
            className="font-heading text-5xl font-bold mb-4 tracking-wide uppercase"
            style={{ color: "#4682B4" }}
          >
            Our Services
          </h2>

          <div className="w-24 h-1 bg-gradient-embryon mx-auto mb-4"></div>

          <p
            className="font-subtitle text-2xl italic"
            style={{ color: "#4682B4" }}
          >
            Personalized Journeys to Parenthood Designed Specifically for You
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.5 }}
              transition={{ delay: index * 0.2, duration: 0.5 }}
              variants={{
                hidden: { opacity: 0, y: 50 },
                visible: { opacity: 1, y: 0 },
              }}
              className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition group"
            >
              <div
                className="text-6xl mb-6 group-hover:scale-110 transition"
                style={{ color: "#4682B4" }}
              >
                {service.icon}
              </div>

              <h3
                className="font-heading text-2xl font-bold mb-4"
                style={{ color: "#4682B4" }}
              >
                {service.title}
              </h3>

              <p
                className="font-body leading-relaxed mb-4"
                style={{ color: "#4682B4" }}
              >
                {service.description}
              </p>

              {/* Button */}
              <button
                className="mt-6 px-5 py-2 rounded-lg font-bold transition flex items-center gap-2"
                style={{ backgroundColor: "#FF7F50", color: "white" }}
              >
                Learn More <span>→</span>
              </button>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ delay: 0.6, duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, y: 30 },
            visible: { opacity: 1, y: 0 },
          }}
          className="mt-16 text-center"
        >
<div
  className="p-8 rounded-2xl"
  style={{ backgroundColor: "#4682B4", color: "white" }}
>
  <h3 className="font-heading text-3xl font-bold mb-4">
    Comprehensive Fertility Services
  </h3>

  <p className="font-body text-lg max-w-4xl mx-auto leading-relaxed">
    All of our fertility services are comprehensive from in vitro fertilization (IVF)
    to egg donation and surrogacy. Being integrated in one place, we can help make your
    fertility journey straightforward and cost-effective with the right level of
    support and resources available.
  </p>
</div>



        </motion.div>

      </div>
    </section>
  );
};

export default Services;
