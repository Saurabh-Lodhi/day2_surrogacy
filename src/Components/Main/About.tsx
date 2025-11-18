// import { SelectedPage } from '../Shared/Types';
// import { motion } from 'framer-motion';

// const About = () => {
//   const benefits = [
//     'Legal and supportive surrogacy framework',
//     'World-class medical facilities and expertise',
//     'Cost-effective compared to Western countries',
//     'High success rates and ethical practices',
//   ];

//   return (
//     <section id={SelectedPage.About} className="py-20 px-6">
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
//           About Us
//         </motion.h2>
//         <div className="grid md:grid-cols-2 gap-12">
//           <motion.div
//             initial="hidden"
//             whileInView="visible"
//             viewport={{ once: true, amount: 0.5 }}
//             transition={{ duration: 0.5 }}
//             variants={{
//               hidden: { opacity: 0, x: -50 },
//               visible: { opacity: 1, x: 0 },
//             }}
//           >
//             <h3 className="text-2xl font-bold text-primary mb-4">
//               Who We Are
//             </h3>
//             <p className="text-lg text-[#1d4d85] mb-6">
//               Ukraine Fertility is a leading fertility center specializing in
//               surrogacy, IVF treatments, and egg donation programs. Located in
//               the heart of Ukraine, we combine advanced medical technology with
//               personalized care to help intended parents from around the world
//               achieve their dreams of parenthood.
//             </p>
//             <p className="text-lg text-[#1d4d85]">
//               Our team of experienced fertility specialists, embryologists, and
//               support staff are dedicated to providing the highest quality care
//               throughout your journey.
//             </p>
//           </motion.div>
//           <motion.div
//             initial="hidden"
//             whileInView="visible"
//             viewport={{ once: true, amount: 0.5 }}
//             transition={{ delay: 0.2, duration: 0.5 }}
//             variants={{
//               hidden: { opacity: 0, x: 50 },
//               visible: { opacity: 1, x: 0 },
//             }}
//           >
//             <h3 className="text-2xl font-bold text-primary mb-4">
//               Why Choose Ukraine?
//             </h3>
//             <ul className="space-y-4">
//               {benefits.map((benefit, index) => (
//                 <li key={index} className="flex gap-3">
//                   <span className="text-primary text-xl flex-shrink-0">❤️</span>
//                   <span className="text-lg text-[#1d4d85]">{benefit}</span>
//                 </li>
//               ))}
//             </ul>
//           </motion.div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default About;


// import { SelectedPage } from '../Shared/Types';
// import { motion } from 'framer-motion';

// const About = () => {
//   const benefits = [
//     'American-managed and operated since 1994',
//     'Over 28,000 successful transformative journeys',
//     'Top 5% egg donor acceptance rate',
//     'Comprehensive legal and medical support',
//     'Personalized "Everything Matters" approach',
//     '24/7 support with dedicated fertility coaches',
//   ];

//   return (
//     <section id={SelectedPage.About} className="py-20 px-6 bg-white">
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
//             Who We Are
//           </h2>
//           <div className="w-24 h-1 bg-gradient-embryon mx-auto"></div>
//         </motion.div>

//         <div className="grid md:grid-cols-2 gap-12">
//           <motion.div
//             initial="hidden"
//             whileInView="visible"
//             viewport={{ once: true, amount: 0.5 }}
//             transition={{ duration: 0.5 }}
//             variants={{
//               hidden: { opacity: 0, x: -50 },
//               visible: { opacity: 1, x: 0 },
//             }}
//           >
//             <h3 className="font-heading text-3xl font-bold text-primary mb-6">
//               Clinical Excellence Trusted Since 1994
//             </h3>
//             <p className="font-body text-lg text-dark mb-6 leading-relaxed">
//               The Embryon Family Fertility Center in Kyiv recognizes the deep desire for parenthood and the challenges involved. We have been dedicated to Donor Egg IVF and Gestational Surrogacy IVF for nearly three decades, helping both heterosexual couples and single women build families.
//             </p>
//             <p className="font-body text-lg text-dark mb-6 leading-relaxed">
//               We were not only the first fertility clinic in Ukraine but also were the first to commemorate the birth of a baby resulting from IVF in Ukraine. We are proud to present an extensive Egg Donor Database with top quality, carefully screened and approved donors.
//             </p>
//             <p className="font-subtitle text-xl text-primary italic">
//               "One Healthy Baby at a Time"
//             </p>
//           </motion.div>

//           <motion.div
//             initial="hidden"
//             whileInView="visible"
//             viewport={{ once: true, amount: 0.5 }}
//             transition={{ delay: 0.2, duration: 0.5 }}
//             variants={{
//               hidden: { opacity: 0, x: 50 },
//               visible: { opacity: 1, x: 0 },
//             }}
//             className="bg-light p-8 rounded-2xl"
//           >
//             <h3 className="font-heading text-3xl font-bold text-primary mb-6">
//               Why Choose Embryon Family?
//             </h3>
//             <ul className="space-y-4">
//               {benefits.map((benefit, index) => (
//                 <li key={index} className="flex gap-3">
//                   <span className="text-accent text-2xl flex-shrink-0">✓</span>
//                   <span className="font-body text-lg text-dark">{benefit}</span>
//                 </li>
//               ))}
//             </ul>
//             <div className="mt-8 p-6 bg-white rounded-xl border-2 border-accent">
//               <p className="font-body text-dark text-center font-semibold">
//                 Every single one of our clients chooses to work with the first Embryon Family surrogate they connect with
//               </p>
//             </div>
//           </motion.div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default About;

import { SelectedPage } from '../Shared/Types';
import { motion } from 'framer-motion';

const About = () => {
  const benefits = [
    'American-managed and operated since 1994',
    'Over 28,000 successful transformative journeys',
    'Top 5% egg donor acceptance rate',
    'Comprehensive legal and medical support',
    'Personalized "Everything Matters" approach',
    '24/7 support with dedicated fertility coaches',
  ];

  return (
    <section id={SelectedPage.About} className="py-20 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Title */}
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
            Who We Are
          </h2>
          <div className="w-24 h-1 bg-gradient-embryon mx-auto"></div>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12">

          {/* Left Text Section */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.5 }}
            variants={{
              hidden: { opacity: 0, x: -50 },
              visible: { opacity: 1, x: 0 },
            }}
          >
            <h3
              className="font-heading text-3xl font-bold mb-6"
              style={{ color: "#4682B4" }}
            >
              Clinical Excellence Trusted Since 1994
            </h3>

            <p className="font-body text-lg mb-6 leading-relaxed" style={{ color: "#4682B4" }}>
              The Embryon Family Fertility Center in Kyiv recognizes the deep desire for parenthood and the challenges involved. We have been dedicated to Donor Egg IVF and Gestational Surrogacy IVF for nearly three decades, helping both heterosexual couples and single women build families.
            </p>

            <p className="font-body text-lg mb-6 leading-relaxed" style={{ color: "#4682B4" }}>
              We were not only the first fertility clinic in Ukraine but also were the first to commemorate the birth of a baby resulting from IVF in Ukraine. We are proud to present an extensive Egg Donor Database with top quality, carefully screened and approved donors.
            </p>

            <p className="font-subtitle text-xl italic" style={{ color: "#4682B4" }}>
              "One Healthy Baby at a Time"
            </p>
          </motion.div>

          {/* Right Card Section */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            variants={{
              hidden: { opacity: 0, x: 50 },
              visible: { opacity: 1, x: 0 },
            }}
            className="bg-light p-8 rounded-2xl"
          >
            <h3
              className="font-heading text-3xl font-bold mb-6"
              style={{ color: "#4682B4" }}
            >
              Why Choose Embryon Family?
            </h3>

            <ul className="space-y-4">
              {benefits.map((benefit, index) => (
                <li key={index} className="flex gap-3">
                  <span
                    className="text-2xl flex-shrink-0"
                    style={{ color: "#FF7F50" }}
                  >
                    ✓
                  </span>
                  <span
                    className="font-body text-lg"
                    style={{ color: "#4682B4" }}
                  >
                    {benefit}
                  </span>
                </li>
              ))}
            </ul>

            {/* Button-like Box */}
            <div
              className="mt-8 p-6 rounded-xl border-2"
              style={{ backgroundColor: "#FF7F50", color: "white", borderColor: "#FF7F50" }}
            >
              <p className="font-body text-center font-semibold">
                Every single one of our clients chooses to work with the first Embryon Family surrogate they connect with
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
