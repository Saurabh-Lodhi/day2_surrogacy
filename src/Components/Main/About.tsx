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
//     <section id={SelectedPage.About} className="pt-60 pb-20 px-6 bg-white">
//       <div className="max-w-7xl mx-auto">
        
//         {/* Section Title */}
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
//           <h2
//             className="font-heading text-5xl font-bold mb-4 tracking-wide uppercase"
//             style={{ color: "#4682B4" }}
//           >
//             Who We Are
//           </h2>
//           <div className="w-24 h-1 bg-gradient-embryon mx-auto"></div>
//         </motion.div>

//         <div className="grid md:grid-cols-2 gap-12">

//           {/* Left Text Section */}
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
//             <h3
//               className="font-heading text-3xl font-bold mb-6"
//               style={{ color: "#4682B4" }}
//             >
//               Clinical Excellence Trusted Since 1994
//             </h3>

//             <p className="font-body text-lg mb-6 leading-relaxed" style={{ color: "#4682B4" }}>
//               The Embryon Family Fertility Center in Kyiv recognizes the deep desire for parenthood and the challenges involved. We have been dedicated to Donor Egg IVF and Gestational Surrogacy IVF for nearly three decades, helping both heterosexual couples and single women build families.
//             </p>

//             <p className="font-body text-lg mb-6 leading-relaxed" style={{ color: "#4682B4" }}>
//               We were not only the first fertility clinic in Ukraine but also were the first to commemorate the birth of a baby resulting from IVF in Ukraine. We are proud to present an extensive Egg Donor Database with top quality, carefully screened and approved donors.
//             </p>

//             <p className="font-subtitle text-xl italic" style={{ color: "#4682B4" }}>
//               "One Healthy Baby at a Time"
//             </p>
//           </motion.div>

//           {/* Right Card Section */}
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
//             <h3
//               className="font-heading text-3xl font-bold mb-6"
//               style={{ color: "#4682B4" }}
//             >
//               Why Choose Embryon Family?
//             </h3>

//             <ul className="space-y-4">
//               {benefits.map((benefit, index) => (
//                 <li key={index} className="flex gap-3">
//                   <span
//                     className="text-2xl flex-shrink-0"
//                     style={{ color: "#FF7F50" }}
//                   >
//                     ✓
//                   </span>
//                   <span
//                     className="font-body text-lg"
//                     style={{ color: "#4682B4" }}
//                   >
//                     {benefit}
//                   </span>
//                 </li>
//               ))}
//             </ul>

//             {/* Button-like Box */}
//             <div
//               className="mt-8 p-6 rounded-xl border-2"
//               style={{ backgroundColor: "#FF7F50", color: "white", borderColor: "#FF7F50" }}
//             >
//               <p className="font-body text-center font-semibold">
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


// import { SelectedPage } from '../Shared/Types';
// import { motion } from 'framer-motion';

// // --- Use your existing images here ---
// import img1 from "../../assets/Images/iStockImages/about1.jpg";
// import img2 from "../../assets/Images/iStockImages/about2.jpg";
// import img3 from "../../assets/Images/iStockImages/about3.jpg";
// import img4 from "../../assets/Images/iStockImages/about4.jpg"; // add a new one here

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
//     <section id={SelectedPage.About} className="pt-60 pb-20 px-6 bg-white">
//       <div className="max-w-7xl mx-auto">

//         {/* Title */}
//         <motion.div
//           initial="hidden"
//           whileInView="visible"
//           viewport={{ once: true, amount: 0.5 }}
//           transition={{ duration: 0.5 }}
//           variants={{
//             hidden: { opacity: 0, y: -40 },
//             visible: { opacity: 1, y: 0 },
//           }}
//           className="text-center mb-16"
//         >
//           <h2 className="font-heading text-5xl font-bold mb-4 tracking-wide uppercase text-[#4682B4]">
//             Who We Are
//           </h2>
//           <div className="w-24 h-1 bg-gradient-embryon mx-auto"></div>
//         </motion.div>

//         <div className="grid md:grid-cols-2 gap-12">

//           {/* Collage */}
//           <motion.div
//             initial="hidden"
//             whileInView="visible"
//             viewport={{ once: true, amount: 0.5 }}
//             transition={{ duration: 0.6 }}
//             variants={{
//               hidden: { opacity: 0, x: -40 },
//               visible: { opacity: 1, x: 0 },
//             }}
//             className="grid grid-cols-2 gap-4"
//           >
//             <img src={img1} className="rounded-xl shadow-lg object-cover h-64 w-full" />
//             <img src={img2} className="rounded-xl shadow-lg object-cover h-64 w-full mt-8" />

//             <img src={img3} className="rounded-xl shadow-lg object-cover h-64 w-full" />
//             <img src={img4} className="rounded-xl shadow-lg object-cover h-64 w-full mt-8" />
//           </motion.div>

//           {/* Text + Benefits */}
//           <motion.div
//             initial="hidden"
//             whileInView="visible"
//             viewport={{ once: true, amount: 0.5 }}
//             transition={{ duration: 0.6 }}
//             variants={{
//               hidden: { opacity: 0, x: 40 },
//               visible: { opacity: 1, x: 0 },
//             }}
//           >
//             <h3 className="font-heading text-3xl font-bold mb-6 text-[#4682B4]">
//               Clinical Excellence Trusted Since 1994
//             </h3>

//             <p className="font-body text-lg mb-6 leading-relaxed text-[#4682B4]">
//               The Embryon Family Fertility Center in Kyiv recognizes the deep desire for parenthood.
//               For nearly three decades, we have specialized in Donor Egg IVF and Gestational Surrogacy.
//             </p>

//             <p className="font-body text-lg mb-6 leading-relaxed text-[#4682B4]">
//               We were Ukraine’s first fertility clinic and the first to celebrate the birth of
//               an IVF baby. Our database includes top-quality, fully screened egg donors.
//             </p>

//             <p className="font-subtitle text-xl italic text-[#4682B4] mb-8">
//               "One Healthy Baby at a Time"
//             </p>

//             {/* Benefits + Highlight Box */}
//             <div className="bg-light p-8 rounded-2xl shadow-lg">
//               <h3 className="font-heading text-3xl font-bold mb-6 text-[#4682B4]">
//                 Why Choose Embryon Family?
//               </h3>

//               <ul className="space-y-4">
//                 {benefits.map((benefit, index) => (
//                   <li key={index} className="flex gap-3">
//                     <span className="text-2xl flex-shrink-0 text-[#FF7F50]">✓</span>
//                     <span className="font-body text-lg text-[#4682B4]">{benefit}</span>
//                   </li>
//                 ))}
//               </ul>

//               <div
//                 className="mt-8 p-6 rounded-xl border-2 text-white text-center font-semibold"
//                 style={{ backgroundColor: "#FF7F50", borderColor: "#FF7F50" }}
//               >
//                 Every client matches with their first chosen Embryon Family surrogate
//               </div>
//             </div>
//           </motion.div>

//         </div>
//       </div>
//     </section>
//   );
// };

// // export default About;
// import { SelectedPage } from "../Shared/Types";
// import { motion } from "framer-motion";

// // Images
// import img1 from "../../assets/Images/iStockImages/banner2.jpg";
// import img2 from "../../assets/Images/iStockImages/banner1.jpg";
// import img3 from "../../assets/Images/iStockImages/hero.jpg";
// import img4 from "../../assets/Images/iStockImages/about1.jpg";
// import img5 from "../../assets/Images/iStockImages/about2.jpg";

// const About = () => {
//   return (
//     <section
//       id={SelectedPage.About}
//       className="py-20 px-6 bg-[#E8F6FC]"
//     >
//       <h2 className="text-center text-4xl md:text-5xl font-bold text-[#1A3D7C] mb-14">
//         EMBRYON QUALITY PLEDGE
//       </h2>

//       {/* COLLAGE CONTAINER */}
//       <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">

//         {/* CARD 1 — small square-ish card */}
//         <div className="bg-white rounded-3xl shadow-lg overflow-hidden">
//           <img src={img1} className="w-full h-48 object-cover" />
//           <div className="p-6">
//             <img src={img4} className="w-10 h-10 mb-2" />
//             <h3 className="text-xl font-semibold text-[#1A3D7C]">Concierge Service</h3>
//             <p className="text-gray-600 mt-1">
//               A coordinator throughout every step of your journey.
//             </p>
//           </div>
//         </div>

//         {/* CARD 2 — tall narrow card */}
//         <div className="bg-white rounded-3xl shadow-lg overflow-hidden">
//           <div className="p-6">
//             <img src={img5} className="w-10 h-10 mb-2" />
//             <h3 className="text-xl font-semibold text-[#1A3D7C]">High Quality</h3>
//             <p className="text-gray-600 mt-1">
//               Our team consists of highly qualified professionals.
//             </p>
//           </div>
//           <img src={img2} className="w-full h-48 object-cover" />
//         </div>

//         {/* CARD 3 — wide card */}
//         <div className="bg-white rounded-3xl shadow-lg overflow-hidden md:col-span-2 grid md:grid-cols-2">
//           <img src={img1} className="w-full h-56 object-cover" />
//           <div className="p-8 flex flex-col justify-center">
//             <img src={img4} className="w-10 h-10 mb-2" />
//             <h3 className="text-2xl font-semibold text-[#1A3D7C]">
//               All-round Support 24/7
//             </h3>
//             <p className="text-gray-600 mt-2">
//               If something comes up, we're only a quick phone call away.
//             </p>
//           </div>
//         </div>

//         {/* CARD 4 — smaller side-by-side card */}
//         <div className="bg-white rounded-3xl shadow-lg overflow-hidden md:col-span-2 grid md:grid-cols-2">
//           <img src={img3} className="w-full h-56 object-cover" />
//           <div className="p-8 flex flex-col justify-center">
//             <img src={img5} className="w-10 h-10 mb-2" />
//             <h3 className="text-2xl font-semibold text-[#1A3D7C]">Free 2nd Opinion</h3>
//             <p className="text-gray-600 mt-2">
//               Your medical files will be reviewed before your arrival.
//             </p>
//           </div>
//         </div>

//         {/* CARD 5 — small and narrow */}
//         <div className="bg-white rounded-3xl shadow-lg overflow-hidden md:col-span-2 grid md:grid-cols-2">
//           <div className="p-8 flex flex-col justify-center">
//             <img src={img4} className="w-10 h-10 mb-2" />
//             <h3 className="text-2xl font-semibold text-[#1A3D7C]">No Waiting List</h3>
//             <p className="text-gray-600 mt-2">
//               We provide fast and reliable scheduling.
//             </p>
//           </div>
//           <img src={img2} className="w-full h-56 object-cover" />
//         </div>

//       </div>
//     </section>
//   );
// };

// // export default About;
// import { SelectedPage } from "../Shared/Types";
// import { motion } from "framer-motion";

// // Images
// import img1 from "../../assets/Images/iStockImages/banner2.jpg";
// import img2 from "../../assets/Images/iStockImages/banner1.jpg";
// import img3 from "../../assets/Images/iStockImages/hero.jpg";
// import icon1 from "../../assets/Images/iStockImages/about1.jpg";
// import icon2 from "../../assets/Images/iStockImages/about2.jpg";

// const About = () => {
//   return (
//     <section
//       id={SelectedPage.About}
//       className="py-20 px-6 bg-[#E8F6FC]"
//     >
//       <h2 className="text-center text-4xl md:text-5xl font-bold text-[#1A3D7C] mb-14">
//         EMBRYON QUALITY PLEDGE
//       </h2>

//       {/* COLLAGE GRID */}
//       <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10">

//         {/* CARD 1 — SOFT ORGANIC SHAPE */}
//         <div className="rounded-[40px] rounded-br-[80px] bg-white shadow-xl overflow-hidden hover:scale-[1.02] transition">
//           <img src={img1} className="w-full h-52 object-cover" />
//           <div className="p-7">
//             <img src={icon1} className="w-10 h-10 mb-3 rounded-full" />
//             <h3 className="text-xl font-semibold text-[#1A3D7C]">Concierge Service</h3>
//             <p className="text-gray-600 mt-2">
//               A coordinator throughout every step of your journey.
//             </p>
//           </div>
//         </div>

//         {/* CARD 2 — DIAGONAL CLIPPED SHAPE */}
//         <div className="bg-white shadow-xl overflow-hidden rounded-[50px] relative hover:scale-[1.02] transition">
//           <div className="p-7">
//             <img src={icon2} className="w-10 h-10 mb-3 rounded-full" />
//             <h3 className="text-xl font-semibold text-[#1A3D7C]">High Quality</h3>
//             <p className="text-gray-600 mt-2">
//               Our team consists of highly qualified professionals.
//             </p>
//           </div>

//           <img
//             src={img2}
//             className="w-full h-52 object-cover"
//             style={{
//               clipPath: "polygon(0 0, 100% 20%, 100% 100%, 0 100%)",
//             }}
//           />
//         </div>

//         {/* CARD 3 — BLOB LIKE SHAPE LEFT */}
//         <div className="md:col-span-2 grid md:grid-cols-2 bg-white shadow-xl overflow-hidden rounded-[55px] hover:scale-[1.02] transition">
//           <img
//             src={img1}
//             className="w-full h-60 object-cover"
//             style={{
//               borderTopLeftRadius: "90px",
//               borderBottomRightRadius: "40px",
//             }}
//           />
//           <div className="p-10 flex flex-col justify-center">
//             <img src={icon1} className="w-10 h-10 mb-3 rounded-full" />
//             <h3 className="text-2xl font-semibold text-[#1A3D7C]">
//               All-round Support 24/7
//             </h3>
//             <p className="text-gray-600 mt-2">
//               If something comes up, we're only a quick phone call away.
//             </p>
//           </div>
//         </div>

//         {/* CARD 4 — UNIQUE CURVED SHAPE */}
//         <div className="md:col-span-2 grid md:grid-cols-2 bg-white shadow-xl overflow-hidden hover:scale-[1.02] transition">
//           <img
//             src={img3}
//             className="w-full h-60 object-cover"
//             style={{
//               borderTopRightRadius: "80px",
//               borderBottomLeftRadius: "60px",
//             }}
//           />
//           <div className="p-10 flex flex-col justify-center">
//             <img src={icon2} className="w-10 h-10 mb-3 rounded-full" />
//             <h3 className="text-2xl font-semibold text-[#1A3D7C]">
//               Free 2nd Medical Opinion
//             </h3>
//             <p className="text-gray-600 mt-2">
//               Your medical files will be reviewed before your arrival.
//             </p>
//           </div>
//         </div>

//         {/* CARD 5 — MINI ORGANIC SHAPE */}
//         <div className="md:col-span-2 grid md:grid-cols-2 bg-white shadow-xl overflow-hidden rounded-[40px] hover:scale-[1.02] transition">
//           <div className="p-10 flex flex-col justify-center">
//             <img src={icon1} className="w-10 h-10 mb-3 rounded-full" />
//             <h3 className="text-2xl font-semibold text-[#1A3D7C]">No Waiting List</h3>
//             <p className="text-gray-600 mt-2">
//               We provide fast and reliable scheduling.
//             </p>
//           </div>
//           <img
//             src={img2}
//             className="w-full h-60 object-cover"
//             style={{
//               borderBottomRightRadius: "80px",
//             }}
//           />
//         </div>
//       </div>
//     </section>
//   );
// };

// export default About;



// import { SelectedPage } from "../Shared/Types";

// // Images
// import img1 from "../../assets/Images/iStockImages/banner2.jpg";
// import img2 from "../../assets/Images/iStockImages/banner1.jpg";
// import img3 from "../../assets/Images/iStockImages/hero.jpg";
// import img4 from "../../assets/Images/iStockImages/about1.jpg";
// import img5 from "../../assets/Images/iStockImages/about2.jpg";

// const About = () => {
//   return (
//     <section
//       id={SelectedPage.About}
//       className="py-28 px-6 bg-white"
//     >
//       <h2 className="text-center text-4xl md:text-5xl font-bold text-[#1A3D7C] mb-16">
//         EMBRYON QUALITY PLEDGE
//       </h2>

//       <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">

//         {/* CARD 1 — Blob Shape */}
//         <div className="bg-white shadow-xl rounded-[3rem] overflow-hidden p-6 transition hover:scale-[1.02]">
//           <img src={img1} className="w-full h-56 object-cover rounded-3xl" />
//           <div className="p-5">
//             <img src={img4} className="w-10 h-10 mb-3" />
//             <h3 className="text-2xl font-semibold text-[#1A3D7C]">Concierge Service</h3>
//             <p className="text-gray-600 mt-2">A coordinator throughout every step of your journey.</p>
//           </div>
//         </div>

//         {/* CARD 2 — Diagonal Cut */}
//         <div className="bg-white shadow-xl rounded-3xl overflow-hidden p-0 transition hover:scale-[1.02]">
//           <div className="p-6">
//             <img src={img5} className="w-10 h-10 mb-3" />
//             <h3 className="text-2xl font-semibold text-[#1A3D7C]">High Quality</h3>
//             <p className="text-gray-600 mt-2">Our team consists of highly qualified professionals.</p>
//           </div>
//           <img
//             src={img2}
//             className="w-full h-56 object-cover"
//             style={{ clipPath: "polygon(0 0, 100% 20%, 100% 100%, 0 100%)" }}
//           />
//         </div>

//         {/* CARD 3 — Circle Cut Corner */}
//         <div className="bg-white shadow-xl rounded-3xl overflow-hidden grid md:grid-cols-2 p-0 transition hover:scale-[1.02]">
//           <img
//             src={img1}
//             className="w-full h-64 object-cover"
//             style={{ borderBottomRightRadius: "60px" }}
//           />
//           <div className="p-6 flex flex-col justify-center">
//             <img src={img4} className="w-10 h-10 mb-3" />
//             <h3 className="text-2xl font-semibold text-[#1A3D7C]">All-round Support 24/7</h3>
//             <p className="text-gray-600 mt-2">If something comes up, we're only a quick phone call away.</p>
//           </div>
//         </div>

//         {/* CARD 4 — Wave Shape */}
//         <div className="bg-white shadow-xl rounded-3xl overflow-hidden grid md:grid-cols-2 transition hover:scale-[1.02]">
//           <img
//             src={img3}
//             className="w-full h-64 object-cover"
//             style={{
//               clipPath: "ellipse(120% 70% at 50% 30%)"
//             }}
//           />
//           <div className="p-6 flex flex-col justify-center">
//             <img src={img5} className="w-10 h-10 mb-3" />
//             <h3 className="text-2xl font-semibold text-[#1A3D7C]">Free 2nd Medical Opinion</h3>
//             <p className="text-gray-600 mt-2">
//               Your medical files will be reviewed and assessed before your arrival.
//             </p>
//           </div>
//         </div>

      

//       </div>
//     </section>
//   );
// };

// export default About;


// import { SelectedPage } from "../Shared/Types";

// // Icons
// import { FaUserShield, FaMedal, FaHeadset, FaStethoscope } from "react-icons/fa";

// // Images
// import img1 from "../../assets/Images/iStockImages/banner2.jpg";
// import img2 from "../../assets/Images/iStockImages/banner1.jpg";
// import img3 from "../../assets/Images/iStockImages/hero.jpg";

// const About = () => {
//   return (
//     <section
//       id={SelectedPage.About}
//       className="py-28 px-6"
//       style={{ backgroundColor: "#E0F7F7" }}
//     >
//       <h2 className="text-center text-4xl md:text-5xl font-extrabold text-[#1A3D7C] mb-16 tracking-wide">
//         EMBRYON QUALITY PLEDGE
//       </h2>

//       {/* Bigger Cards + Close Spacing */}
//       <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4 justify-center items-center">

//         {/* CARD 1 — BIG SQUARE */}
//         <div className="bg-white shadow-xl rounded-2xl overflow-hidden p-10 w-full max-w-xl mx-auto hover:scale-[1.02] transition">
//           <img src={img1} className="w-full h-72 object-cover rounded-xl" />
//           <div className="pt-8">
//             <FaUserShield className="text-6xl text-[#1A3D7C] mb-5" />
//             <h3 className="text-4xl font-bold text-[#1A3D7C] mb-4">
//               Concierge Service
//             </h3>
//             <p className="text-xl font-medium text-gray-700 leading-relaxed">
//               A coordinator throughout each step of your journey.
//             </p>
//           </div>
//         </div>

//         {/* CARD 2 — BIG WIDE RECTANGLE */}
//         <div className="bg-white shadow-xl rounded-3xl overflow-hidden p-10 w-full max-w-2xl mx-auto hover:scale-[1.02] transition">
//           <div className="grid md:grid-cols-2 gap-2 items-center">
//             <div>
//               <FaMedal className="text-6xl text-[#1A3D7C] mb-5" />
//               <h3 className="text-4xl font-bold text-[#1A3D7C] mb-4">
//                 High Quality
//               </h3>
//               <p className="text-xl font-medium text-gray-700 leading-relaxed">
//                 Our team consists of trained and highly qualified professionals.
//               </p>
//             </div>

//             <img
//               src={img2}
//               className="w-full h-64 rounded-xl object-cover"
//             />
//           </div>
//         </div>

//       {/* CARD 3 — HEXAGON IMAGE SHAPE */}
// <div className="bg-white shadow-xl rounded-3xl p-10 w-full max-w-3xl mx-auto hover:scale-[1.03] transition-all duration-300">
//   <div className="grid md:grid-cols-2 gap-4 items-center">

//     {/* Hexagon Image */}
//     <img
//       src={img1}
//       className="w-full h-80 object-cover"
//       style={{
//         clipPath:
//           "polygon(25% 0%, 75% 0%, 100% 50%, 75% 100%, 25% 100%, 0% 50%)"
//       }}
//     />

//     <div className="flex flex-col justify-center pl-4">
//       <FaHeadset className="text-6xl text-[#1A3D7C] mb-5" />
//       <h3 className="text-4xl font-bold text-[#1A3D7C] mb-4">
//         All-round Support 24/7
//       </h3>
//       <p className="text-xl font-medium text-gray-700 leading-relaxed">
//         We are always one phone call away whenever you need us.
//       </p>
//     </div>

//   </div>
// </div>




// {/* CARD 4 — BIG TALL RECTANGLE + WAVE SHAPE */}
// <div className="bg-white shadow-xl rounded-3xl overflow-hidden p-10 w-full max-w-md mx-auto hover:scale-[1.02] transition">

//   {/* Wave Image */}
//   <div className="relative w-full mb-8">
//     <img
//       src={img3}
//       className="w-full h-[500px] object-cover rounded-xl"
//       style={{
//         clipPath: "ellipse(120% 60% at 50% 75%)"
//       }}
//     />
//   </div>

//   <FaStethoscope className="text-6xl text-[#1A3D7C] mb-5" />
//   <h3 className="text-4xl font-bold text-[#1A3D7C] mb-4">
//     Free 2nd Medical Opinion
//   </h3>
//   <p className="text-xl font-medium text-gray-700 leading-relaxed">
//     Your medical files are assessed before your arrival for better accuracy.
//   </p>

// </div>


//       </div>
//     </section>
//   );
// };

// export default About;
import { SelectedPage } from "../Shared/Types";

// Icons
import { FaUserShield, FaMedal, FaHeadset, FaStethoscope } from "react-icons/fa";

// Images
import img1 from "../../assets/Images/iStockImages/banner2.jpg";
import img2 from "../../assets/Images/iStockImages/banner1.jpg";
import img3 from "../../assets/Images/iStockImages/hero.jpg";

const About = () => {
  return (
    <section
      id={SelectedPage.About}
      className="py-28 px-6"
      style={{ backgroundColor: "#E0F7F7" }}
    >
      <h2 className="text-center text-4xl md:text-5xl font-extrabold text-[#1A3D7C] mb-16 tracking-wide">
        EMBRYON QUALITY PLEDGE
      </h2>

      {/* Cards Grid */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-2 justify-center items-center">

        {/* CARD 1 */}
        <div className="bg-white shadow-xl rounded-2xl overflow-hidden p-10 w-full max-w-xl mx-auto hover:scale-[1.02] transition">
          <img src={img1} className="w-full h-72 object-cover rounded-xl" />
          <div className="pt-8">
            <FaUserShield className="text-6xl text-[#1A3D7C] mb-5" />
            <h3 className="text-4xl font-bold text-[#1A3D7C] mb-4">
              Concierge Service
            </h3>
            <p className="text-xl font-medium text-gray-700 leading-relaxed">
              A coordinator throughout each step of your journey.
            </p>
          </div>
        </div>

        {/* CARD 2 — IMAGE BOTTOM ALIGNED */}
        <div className="bg-white shadow-xl rounded-3xl overflow-hidden p-10 w-full max-w-2xl mx-auto hover:scale-[1.02] transition">
          <div className="grid md:grid-cols-2 gap-4 items-end">

            <div>
              <FaMedal className="text-6xl text-[#1A3D7C] mb-5" />
              <h3 className="text-4xl font-bold text-[#1A3D7C] mb-4">
                High Quality
              </h3>
              <p className="text-xl font-medium text-gray-700 leading-relaxed">
                Our team consists of trained and highly qualified professionals.
              </p>
            </div>

            {/* BOTTOM ALIGNED IMAGE */}
            <div className="flex justify-end items-end">
              <img
                src={img2}
                className="w-full h-64 rounded-xl object-cover"
              />
            </div>

          </div>
        </div>

        {/* CARD 3 — HEXAGON IMAGE BOTTOM ALIGNED */}
        <div className="bg-white shadow-xl rounded-3xl p-10 w-full max-w-3xl mx-auto hover:scale-[1.03] transition-all duration-300">
          <div className="grid md:grid-cols-2 gap-4 items-end">

            {/* Hexagon IMG */}
            <div className="flex justify-end items-end">
              <img
                src={img1}
                className="w-full h-80 object-cover"
                style={{
                  clipPath:
                    "polygon(25% 0%, 75% 0%, 100% 50%, 75% 100%, 25% 100%, 0% 50%)"
                }}
              />
            </div>

            <div className="flex flex-col justify-center pl-4">
              <FaHeadset className="text-6xl text-[#1A3D7C] mb-5" />
              <h3 className="text-4xl font-bold text-[#1A3D7C] mb-4">
                All-round Support 24/7
              </h3>
              <p className="text-xl font-medium text-gray-700 leading-relaxed">
                We are always one phone call away whenever you need us.
              </p>
            </div>

          </div>
        </div>

        {/* CARD 4 — WAVE SHAPE */}
        <div className="bg-white shadow-xl rounded-3xl overflow-hidden p-10 w-full max-w-md mx-auto hover:scale-[1.02] transition">
          <div className="relative w-full mb-8">
            <img
              src={img3}
              className="w-full h-[500px] object-cover rounded-xl"
              style={{
                clipPath: "ellipse(120% 60% at 50% 75%)"
              }}
            />
          </div>

          <FaStethoscope className="text-6xl text-[#1A3D7C] mb-5" />
          <h3 className="text-4xl font-bold text-[#1A3D7C] mb-4">
            Free 2nd Medical Opinion
          </h3>
          <p className="text-xl font-medium text-gray-700 leading-relaxed">
            Your medical files are assessed before your arrival for better accuracy.
          </p>
        </div>

      </div>
    </section>
  );
};

export default About;
