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

//         {/* Section Header */}
//         <motion.div
//           initial={{ opacity: 0, y: -60, filter: "blur(4px)" }}
//           whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
//           transition={{ duration: 0.9, ease: "easeOut" }}
//           viewport={{ once: true, amount: 0.5 }}
//           className="text-center mb-16"
//         >
//           <h2
//             className="font-heading text-5xl font-bold mb-4 tracking-wide uppercase"
//             style={{ color: "#4682B4" }}
//           >
//             Our Services
//           </h2>

//           <div className="w-24 h-1 bg-[#FF7F50] mx-auto mb-4 rounded-full"></div>

//           <p
//             className="font-subtitle text-2xl italic"
//             style={{ color: "#4682B4" }}
//           >
//             Personalized Journeys to Parenthood Designed Specifically for You
//           </p>
//         </motion.div>

//         {/* Services Grid */}
//         <div className="grid md:grid-cols-3 gap-10">
//           {services.map((service, index) => (
//             <motion.div
//               key={index}
//               initial={{ opacity: 0, y: 70, scale: 0.95, filter: "blur(6px)" }}
//               whileInView={{ opacity: 1, y: 0, scale: 1, filter: "blur(0px)" }}
//               transition={{
//                 duration: 1,
//                 delay: index * 0.25,
//                 ease: [0.16, 1, 0.3, 1] // smooth luxury cubic-bezier
//               }}
//               viewport={{ once: true, amount: 0.2 }}
//               whileHover={{
//                 scale: 1.05,
//                 rotateX: 6,
//                 rotateY: -6,
//                 boxShadow: "0px 20px 40px rgba(0,0,0,0.2)",
//                 transition: { duration: 0.4 }
//               }}
//               className="bg-white p-8 rounded-2xl shadow-lg transition cursor-pointer"
//               style={{
//                 border: "2px solid rgba(70,130,180,0.15)",
//               }}
//             >
//               <motion.div
//                 whileHover={{ scale: 1.2 }}
//                 transition={{ duration: 0.4 }}
//                 className="text-6xl mb-6"
//                 style={{ color: "#4682B4" }}
//               >
//                 {service.icon}
//               </motion.div>

//               <h3
//                 className="font-heading text-2xl font-bold mb-4"
//                 style={{ color: "#4682B4" }}
//               >
//                 {service.title}
//               </h3>

//               <p
//                 className="font-body leading-relaxed mb-6"
//                 style={{ color: "#4682B4" }}
//               >
//                 {service.description}
//               </p>

//               <motion.button
//                 className="mt-4 px-5 py-2 rounded-lg font-bold flex items-center gap-2"
//                 style={{
//                   backgroundColor: "#FF7F50",
//                   color: "white",
//                 }}
//                 whileHover={{
//                   scale: 1.1,
//                   boxShadow: "0px 8px 20px rgba(255,127,80,0.6)"
//                 }}
//                 transition={{ duration: 0.3 }}
//               >
//                 Learn More <span>→</span>
//               </motion.button>
//             </motion.div>
//           ))}
//         </div>

//         {/* CTA Box */}
//         <motion.div
//           initial={{ opacity: 0, y: 60, scale: 0.95 }}
//           whileInView={{ opacity: 1, y: 0, scale: 1 }}
//           transition={{ duration: 1, ease: "easeOut", delay: 0.6 }}
//           viewport={{ once: true }}
//           className="mt-20 text-center"
//         >
//           <motion.div
//             initial={{ filter: "blur(6px)" }}
//             whileInView={{ filter: "blur(0px)" }}
//             transition={{ duration: 1 }}
//             className="p-10 rounded-2xl shadow-xl"
//             style={{ backgroundColor: "#4682B4", color: "white" }}
//           >
//             <h3 className="font-heading text-3xl font-bold mb-4">
//               Comprehensive Fertility Services
//             </h3>

//             <p className="font-body text-lg max-w-4xl mx-auto leading-relaxed opacity-90">
//               All of our fertility services are comprehensive from in vitro fertilization (IVF)
//               to egg donation and surrogacy. Being integrated in one place, we help make your
//               fertility journey straightforward, cost-effective, and fully supported.
//             </p>
//           </motion.div>
//         </motion.div>
//       </div>
//     </section>
//   );
// };

// export default Services;

// import { SelectedPage } from '../Shared/Types';
// import { services } from '../Shared/Consts';
// import { motion } from 'framer-motion';

// // --- Add Your Images Here (one image per service) ---
// import img1 from "../../assets/Images/iStockImages/service1.jpg";
// import img2 from "../../assets/Images/iStockImages/service2.jpg";
// import img3 from "../../assets/Images/iStockImages/service3.jpg";

// const servicesImages = [img1, img2, img3];

// const Services = () => {
//   return (
//     <section
//       id={SelectedPage.Services}
//       className="py-20 px-6 bg-light"
//     >
//       <div className="max-w-7xl mx-auto">

//         {/* Section Header */}
//         <motion.div
//           initial={{ opacity: 0, y: -60, filter: "blur(4px)" }}
//           whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
//           transition={{ duration: 0.9, ease: "easeOut" }}
//           viewport={{ once: true, amount: 0.5 }}
//           className="text-center mb-16"
//         >
//           <h2
//             className="font-heading text-5xl font-bold mb-4 tracking-wide uppercase text-[#4682B4]"
//           >
//             Our Services
//           </h2>

//           <div className="w-24 h-1 bg-[#FF7F50] mx-auto mb-4 rounded-full"></div>

//           <p className="font-subtitle text-2xl italic text-[#4682B4]">
//             Personalized Journeys to Parenthood Designed Specifically for You
//           </p>
//         </motion.div>

//         {/* Services Grid */}
//         <div className="grid md:grid-cols-3 gap-10">
//           {services.map((service, index) => (
//             <motion.div
//               key={index}
//               initial={{ opacity: 0, y: 70, scale: 0.95, filter: "blur(6px)" }}
//               whileInView={{ opacity: 1, y: 0, scale: 1, filter: "blur(0px)" }}
//               transition={{
//                 duration: 1,
//                 delay: index * 0.25,
//                 ease: [0.16, 1, 0.3, 1]
//               }}
//               viewport={{ once: true, amount: 0.2 }}
//               whileHover={{
//                 scale: 1.05,
//                 rotateX: 6,
//                 rotateY: -6,
//                 boxShadow: "0px 20px 40px rgba(0,0,0,0.2)",
//                 transition: { duration: 0.4 }
//               }}
//               className="bg-white p-8 rounded-2xl shadow-lg transition cursor-pointer border border-[#4682B426]"
//             >

//               {/* Service Image */}
//               <div className="w-full h-48 mb-6 overflow-hidden rounded-xl shadow-md">
//                 <img
//                   src={servicesImages[index]}
//                   className="w-full h-full object-cover hover:scale-110 transition duration-500"
//                 />
//               </div>

//               {/* Icon */}
//               <motion.div
//                 whileHover={{ scale: 1.2 }}
//                 transition={{ duration: 0.4 }}
//                 className="text-6xl mb-6 text-[#4682B4]"
//               >
//                 {service.icon}
//               </motion.div>

//               {/* Title */}
//               <h3 className="font-heading text-2xl font-bold mb-4 text-[#4682B4]">
//                 {service.title}
//               </h3>

//               {/* Description */}
//               <p className="font-body leading-relaxed mb-6 text-[#4682B4]">
//                 {service.description}
//               </p>

//               {/* Button */}
//               <motion.button
//                 className="mt-4 px-5 py-2 rounded-lg font-bold flex items-center gap-2"
//                 style={{
//                   backgroundColor: "#FF7F50",
//                   color: "white",
//                 }}
//                 whileHover={{
//                   scale: 1.1,
//                   boxShadow: "0px 8px 20px rgba(255,127,80,0.6)"
//                 }}
//                 transition={{ duration: 0.3 }}
//               >
//                 Learn More <span>→</span>
//               </motion.button>

//             </motion.div>
//           ))}
//         </div>

//         {/* CTA Box */}
//         <motion.div
//           initial={{ opacity: 0, y: 60, scale: 0.95 }}
//           whileInView={{ opacity: 1, y: 0, scale: 1 }}
//           transition={{ duration: 1, ease: "easeOut", delay: 0.6 }}
//           viewport={{ once: true }}
//           className="mt-20 text-center"
//         >
//           <motion.div
//             initial={{ filter: "blur(6px)" }}
//             whileInView={{ filter: "blur(0px)" }}
//             transition={{ duration: 1 }}
//             className="p-10 rounded-2xl shadow-xl bg-[#4682B4] text-white"
//           >
//             <h3 className="font-heading text-3xl font-bold mb-4">
//               Comprehensive Fertility Services
//             </h3>

//             <p className="font-body text-lg max-w-4xl mx-auto leading-relaxed opacity-90">
//               All of our fertility services are comprehensive from IVF to egg donation and
//               surrogacy. Everything is integrated in one place for a smooth, cost-effective,
//               fully supported fertility journey.
//             </p>
//           </motion.div>
//         </motion.div>

//       </div>
//     </section>
//   );
// };

// export default Services;


// import { SelectedPage } from "../Shared/Types";
// import { services } from "../Shared/Consts";
// import { motion } from "framer-motion";

// // Images
// import img1 from "../../assets/Images/iStockImages/service1.jpg";
// import img2 from "../../assets/Images/iStockImages/service2.jpg";
// import img3 from "../../assets/Images/iStockImages/service3.jpg";

// const servicesImages = [img1, img2, img3];

// const Services = () => {
//   return (
//     <section
//       id={SelectedPage.Services}
//       className="py-20 px-6 bg-white"
//     >
//       <div className="max-w-7xl mx-auto">

//         {/* Section Header */}
//         <motion.div
//           initial={{ opacity: 0, y: -60, filter: "blur(4px)" }}
//           whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
//           transition={{ duration: 0.9, ease: "easeOut" }}
//           viewport={{ once: true, amount: 0.5 }}
//           className="text-center mb-16"
//         >
//           <h2 className="font-heading text-5xl font-bold mb-4 tracking-wide uppercase text-[#1A3D7C]">
//             Our Services
//           </h2>
//           <div className="w-24 h-1 bg-[#FF7F50] mx-auto mb-4 rounded-full"></div>
//           <p className="font-subtitle text-2xl italic text-[#1A3D7C]">
//             Personalized Journeys to Parenthood Designed Specifically for You
//           </p>
//         </motion.div>

//         {/* Services Grid */}
//         <div className="grid md:grid-cols-3 gap-12">
//           {services.map((service, index) => (
//             <motion.div
//               key={index}
//               initial={{ opacity: 0, y: 70, scale: 0.9 }}
//               whileInView={{ opacity: 1, y: 0, scale: 1 }}
//               transition={{
//                 duration: 1,
//                 delay: index * 0.25,
//                 ease: [0.16, 1, 0.3, 1],
//               }}
//               viewport={{ once: true, amount: 0.2 }}
//               whileHover={{
//                 scale: 1.07,
//                 rotateX: 8,
//                 rotateY: -8,
//                 boxShadow: "0px 25px 45px rgba(0,0,0,0.25)",
//                 transition: { duration: 0.5 },
//               }}
//               className="
//                 relative bg-white/40 backdrop-blur-xl 
//                 rounded-[2.4rem] shadow-xl border border-[#1A3D7C20]
//                 overflow-hidden cursor-pointer group
//               "
//             >
//               {/* Gradient Top Accent */}
//               <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-[#FF7F50] to-[#1A3D7C]"></div>

//               {/* Floating Shape Circle */}
//               <div className="absolute -top-8 -right-8 w-32 h-32 bg-[#FF7F5033] rounded-full blur-xl"></div>

//               {/* Image */}
//               <div className="w-full h-52 overflow-hidden rounded-t-[2.4rem]">
//                 <img
//                   src={servicesImages[index]}
//                   className="w-full h-full object-cover group-hover:scale-110 transition duration-700"
//                   style={{ clipPath: "ellipse(120% 95% at 50% 5%)" }}
//                 />
//               </div>

//               {/* Content */}
//               <div className="p-8">

//                 {/* Icon */}
//                 <motion.div
//                   whileHover={{ scale: 1.2 }}
//                   transition={{ duration: 0.4 }}
//                   className="text-6xl mb-4 text-[#1A3D7C]"
//                 >
//                   {service.icon}
//                 </motion.div>

//                 {/* Title */}
//                 <h3 className="font-heading text-2xl font-bold mb-3 text-[#1A3D7C]">
//                   {service.title}
//                 </h3>

//                 {/* Description */}
//                 <p className="font-body leading-relaxed mb-6 text-[#1A3D7C] opacity-80">
//                   {service.description}
//                 </p>

//                 {/* Learn More Button */}
//                 <motion.button
//                   className="
//                     mt-4 px-6 py-2 rounded-xl font-bold flex items-center gap-2
//                     bg-gradient-to-r from-[#1A3D7C] to-[#FF7F50] text-white
//                     shadow-md
//                   "
//                   whileHover={{
//                     scale: 1.1,
//                     boxShadow: "0px 10px 25px rgba(0,0,0,0.25)",
//                   }}
//                   transition={{ duration: 0.3 }}
//                 >
//                   Learn More <span>→</span>
//                 </motion.button>
//               </div>
//             </motion.div>
//           ))}
//         </div>

//        {/* CTA Section */}
// <motion.div
//   initial={{ opacity: 0, y: 60, scale: 0.95 }}
//   whileInView={{ opacity: 1, y: 0, scale: 1 }}
//   transition={{ duration: 1, ease: "easeOut", delay: 0.6 }}
//   viewport={{ once: true }}
//   className="mt-20"
// >
//   <motion.div
//     initial={{ filter: "blur(6px)", opacity: 0 }}
//     whileInView={{ filter: "blur(0px)", opacity: 1 }}
//     transition={{ duration: 1 }}
//     className="
//       w-full 
//       p-12 
//       rounded-3xl 
//       shadow-2xl 
//       bg-gradient-to-r 
//       from-[#1A3D7C] 
//       to-[#0A0F14]  /* Graphite Black */
//       text-white 
//       text-center
//     "
//   >
//     <h3 className="font-heading text-3xl md:text-4xl font-bold mb-6 tracking-wide">
//       Comprehensive Fertility Services
//     </h3>

//     <p className="font-body text-lg max-w-4xl mx-auto leading-relaxed opacity-90 mb-10">
//       All fertility services are fully integrated – IVF, egg donation, and 
//       surrogacy – ensuring a smooth, supportive, and cost-effective journey.
//     </p>

//     {/* UNIQUE CTA BUTTON */}
//     <motion.button
//       whileHover={{ scale: 1.05, boxShadow: "0px 0px 25px rgba(255,255,255,0.4)" }}
//       whileTap={{ scale: 0.97 }}
//       className="
//         w-full 
//         md:w-auto 
//         px-12 
//         py-4 
//         rounded-full 
//         text-xl 
//         font-bold 
//         transition-all 
//         duration-300 
//         bg-gradient-to-r 
//         from-[#1A3D7C] 
//         to-[#0A0F14]
//         hover:opacity-95 
//         shadow-xl 
//         border border-white/20
//       "
//     >
//       Schedule Your Appointment
//     </motion.button>
//   </motion.div>
// </motion.div>

//       </div>
//     </section>
//   );
// };

// export default Services;


import { SelectedPage } from "../Shared/Types";
import { services } from "../Shared/Consts";
import { motion } from "framer-motion";

// Images
import img1 from "../../assets/Images/iStockImages/service1.jpg";
import img2 from "../../assets/Images/iStockImages/service2.jpg";
import img3 from "../../assets/Images/iStockImages/service3.jpg";

const servicesImages = [img1, img2, img3];

const Services = () => {
  return (
    <section id={SelectedPage.Services} className="py-20 px-6 bg-white">

      {/* Container START */}
      <div className="max-w-7xl mx-auto">

        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: -60, filter: "blur(4px)" }}
          whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          transition={{ duration: 0.9, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="font-heading text-5xl font-bold mb-4 tracking-wide uppercase text-[#1A3D7C]">
            Our Services
          </h2>
          <div className="w-24 h-1 bg-[#FF7F50] mx-auto mb-4 rounded-full"></div>
          <p className="font-subtitle text-2xl italic text-[#1A3D7C]">
            Personalized Journeys to Parenthood Designed Specifically for You
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-3 gap-12">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 70, scale: 0.9 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              transition={{
                duration: 1,
                delay: index * 0.25,
                ease: [0.16, 1, 0.3, 1],
              }}
              viewport={{ once: true, amount: 0.2 }}
              whileHover={{
                scale: 1.07,
                rotateX: 8,
                rotateY: -8,
                boxShadow: "0px 25px 45px rgba(0,0,0,0.25)",
                transition: { duration: 0.5 },
              }}
              className="
                relative bg-white/40 backdrop-blur-xl 
                rounded-[2.4rem] shadow-xl border border-[#1A3D7C20]
                overflow-hidden cursor-pointer group
              "
            >
              {/* Gradient Line */}
              <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-[#FF7F50] to-[#1A3D7C]"></div>

              {/* Floating Shape */}
              <div className="absolute -top-8 -right-8 w-32 h-32 bg-[#FF7F5033] rounded-full blur-xl"></div>

              {/* Image */}
              <div className="w-full h-52 overflow-hidden rounded-t-[2.4rem]">
                <img
                  src={servicesImages[index]}
                  className="w-full h-full object-cover group-hover:scale-110 transition duration-700"
                  style={{ clipPath: "ellipse(120% 95% at 50% 5%)" }}
                />
              </div>

              {/* Content */}
              <div className="p-8">

                {/* Icon */}
                <motion.div
                  whileHover={{ scale: 1.2 }}
                  transition={{ duration: 0.4 }}
                  className="text-6xl mb-4 text-[#1A3D7C]"
                >
                  {service.icon}
                </motion.div>

                {/* Title */}
                <h3 className="font-heading text-2xl font-bold mb-3 text-[#1A3D7C]">
                  {service.title}
                </h3>

                {/* Description */}
                <p className="font-body leading-relaxed mb-6 text-[#1A3D7C] opacity-80">
                  {service.description}
                </p>

                {/* Button */}
                <motion.button
                  className="
                    mt-4 px-6 py-2 rounded-xl font-bold flex items-center gap-2
                    bg-gradient-to-r from-[#1A3D7C] to-[#FF7F50] text-white
                    shadow-md
                  "
                  whileHover={{
                    scale: 1.1,
                    boxShadow: '0px 10px 25px rgba(0,0,0,0.25)',
                  }}
                  transition={{ duration: 0.3 }}
                >
                  Learn More →
                </motion.button>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
      {/* Container END */}


      {/* FULL WIDTH CTA — OUTSIDE CONTAINER */}
      <div className="w-screen mt-24 relative left-1/2 right-1/2 -mx-[50vw]">

        <div
          className="
            w-full p-14 text-center rounded-none
            bg-gradient-to-r from-[#1A3D7C] to-[#0A0F14]
            shadow-2xl text-white
          "
        >
          <h3 className="font-heading text-4xl font-bold mb-6 tracking-wide">
            Comprehensive Fertility Services
          </h3>

          <p className="font-body text-lg max-w-4xl mx-auto leading-relaxed opacity-90 mb-10">
            All fertility services are fully integrated – IVF, egg donation, and surrogacy – 
            ensuring a smooth, supportive, and cost-effective journey.
          </p>

          <button
            className="
              w-full md:w-auto px-14 py-4 rounded-full 
              text-xl font-bold shadow-xl border border-white/20
              bg-gradient-to-r from-[#1A3D7C] to-[#0A0F14]
              hover:opacity-90 transition-all duration-300
            "
          >
            Schedule Your Appointment
          </button>
        </div>

      </div>
      {/* CTA END */}

    </section>
  );
};

export default Services;
