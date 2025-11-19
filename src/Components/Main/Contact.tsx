// import { useState } from 'react';
// import { SelectedPage } from '../Shared/Types';
// import { motion } from 'framer-motion';

// const Contact = () => {
//   const [formData, setFormData] = useState({
//     firstName: '',
//     lastName: '',
//     email: '',
//     phone: '',
//     preferredContact: '',
//     message: '',
//   });

//   const handleSubmit = () => {
//     console.log('Form submitted:', formData);
//     alert('Message sent! We will contact you soon.');
//     setFormData({
//       firstName: '',
//       lastName: '',
//       email: '',
//       phone: '',
//       preferredContact: '',
//       message: '',
//     });
//   };

//   return (
//     <section
//       id={SelectedPage.Contact}
//       className="py-20 px-6 bg-white"
//     >
//       <div className="max-w-4xl mx-auto"> {/* WIDER WIDTH */}

//         {/* Section Title */}
//         <motion.div
//           initial={{ opacity: 0, y: -40 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.6 }}
//           className="text-center mb-14"
//         >
//           <h2 className="text-5xl font-bold text-[#4682B4] uppercase tracking-wide">
//             Contact Us
//           </h2>
//           <div className="w-24 h-1 bg-[#FF7F50] mx-auto mt-4"></div>
//           <p className="text-xl text-[#4682B4] italic mt-3">
//             Start Your Journey Today
//           </p>
//         </motion.div>

//         {/* FORM */}
//         <motion.div
//           initial={{ opacity: 0, y: 40 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.6 }}
//           className="p-10 rounded-2xl shadow-xl border border-[#4682B4]/30 bg-white"
//         >
//           <h3 className="text-3xl font-bold text-[#4682B4] mb-8">
//             Book Your Appointment
//           </h3>

//           <div className="grid grid-cols-2 gap-6">
//             {/* First Name */}
//             <input
//               type="text"
//               placeholder="First Name *"
//               value={formData.firstName}
//               onChange={(e) =>
//                 setFormData({ ...formData, firstName: e.target.value })
//               }
//               className="p-4 border-2 border-[#4682B4] rounded-lg focus:outline-none focus:border-[#FF7F50] transition bg-white"
//             />

//             {/* Last Name */}
//             <input
//               type="text"
//               placeholder="Last Name *"
//               value={formData.lastName}
//               onChange={(e) =>
//                 setFormData({ ...formData, lastName: e.target.value })
//               }
//               className="p-4 border-2 border-[#4682B4] rounded-lg focus:outline-none focus:border-[#FF7F50] transition bg-white"
//             />

//             {/* Email */}
//             <input
//               type="email"
//               placeholder="Your Email *"
//               value={formData.email}
//               onChange={(e) =>
//                 setFormData({ ...formData, email: e.target.value })
//               }
//               className="col-span-2 p-4 border-2 border-[#4682B4] rounded-lg focus:outline-none focus:border-[#FF7F50] transition bg-white"
//             />

//             {/* Phone */}
//             <input
//               type="tel"
//               placeholder="Phone Number *"
//               value={formData.phone}
//               onChange={(e) =>
//                 setFormData({ ...formData, phone: e.target.value })
//               }
//               className="col-span-2 p-4 border-2 border-[#4682B4] rounded-lg focus:outline-none focus:border-[#FF7F50] transition bg-white"
//             />

//             {/* Preferred Contact */}
//             <select
//               value={formData.preferredContact}
//               onChange={(e) =>
//                 setFormData({ ...formData, preferredContact: e.target.value })
//               }
//               className="col-span-2 p-4 border-2 border-[#4682B4] rounded-lg focus:outline-none focus:border-[#FF7F50] transition bg-white"
//             >
//               <option value="">Preferred Method of Contact</option>
//               <option value="email">Email</option>
//               <option value="phone">Phone</option>
//               <option value="whatsapp">WhatsApp</option>
//             </select>

//             {/* Message */}
//             <textarea
//               placeholder="Your Message"
//               rows={5}
//               value={formData.message}
//               onChange={(e) =>
//                 setFormData({ ...formData, message: e.target.value })
//               }
//               className="col-span-2 p-4 border-2 border-[#4682B4] rounded-lg focus:outline-none focus:border-[#FF7F50] transition bg-white resize-none"
//             />

//             {/* Submit Button */}
//             <button
//               onClick={handleSubmit}
//               className="col-span-2 w-full bg-[#FF7F50] text-white py-4 rounded-lg font-bold text-xl hover:bg-[#e86f45] transition shadow-lg"
//             >
//               Submit Request
//             </button>
//           </div>
//         </motion.div>
//       </div>
//     </section>
//   );
// };

// export default Contact;


// import { useState } from 'react';
// import { SelectedPage } from '../Shared/Types';
// import { motion } from 'framer-motion';

// // IMPORT BACKGROUND IMAGE
// import bgImage from "../../assets/Images/iStockImages/about4.jpg";

// const Contact = () => {
//   const [formData, setFormData] = useState({
//     firstName: '',
//     lastName: '',
//     email: '',
//     phone: '',
//     preferredContact: '',
//     message: '',
//   });

//   const handleSubmit = () => {
//     console.log('Form submitted:', formData);
//     alert('Message sent! We will contact you soon.');
//     setFormData({
//       firstName: '',
//       lastName: '',
//       email: '',
//       phone: '',
//       preferredContact: '',
//       message: '',
//     });
//   };

//   return (
//     <section
//       id={SelectedPage.Contact}
//       className="
//         py-28 px-6 
//         bg-cover bg-center bg-no-repeat bg-fixed
//       "
//       style={{ backgroundImage: `url(${bgImage})` }}
//     >
//       {/* DARK OVERLAY FOR BETTER READABILITY */}
//       <div className="bg-black/50 backdrop-blur-sm w-full h-full p-10 rounded-3xl">

//         <div className="max-w-4xl mx-auto">

//           {/* Section Title */}
//           <motion.div
//             initial={{ opacity: 0, y: -40 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.6 }}
//             className="text-center mb-14 text-white"
//           >
//             <h2 className="text-5xl font-bold text-white uppercase tracking-wide">
//               Contact Us
//             </h2>
//             <div className="w-24 h-1 bg-[#FF7F50] mx-auto mt-4"></div>
//             <p className="text-xl italic mt-3 opacity-90">
//               Start Your Journey Today
//             </p>
//           </motion.div>

//           {/* FORM BOX */}
//           <motion.div
//             initial={{ opacity: 0, y: 40 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.6 }}
//             className="
//               p-10 rounded-2xl shadow-2xl bg-white/90 
//               border border-white/40 backdrop-blur-md
//             "
//           >
//             <h3 className="text-3xl font-bold text-[#4682B4] mb-8">
//               Book Your Appointment
//             </h3>

//             <div className="grid grid-cols-2 gap-6">
//               {/* First Name */}
//               <input
//                 type="text"
//                 placeholder="First Name *"
//                 value={formData.firstName}
//                 onChange={(e) =>
//                   setFormData({ ...formData, firstName: e.target.value })
//                 }
//                 className="p-4 border-2 border-[#4682B4] rounded-lg focus:outline-none focus:border-[#FF7F50] transition bg-white"
//               />

//               {/* Last Name */}
//               <input
//                 type="text"
//                 placeholder="Last Name *"
//                 value={formData.lastName}
//                 onChange={(e) =>
//                   setFormData({ ...formData, lastName: e.target.value })
//                 }
//                 className="p-4 border-2 border-[#4682B4] rounded-lg focus:outline-none focus:border-[#FF7F50] transition bg-white"
//               />

//               {/* Email */}
//               <input
//                 type="email"
//                 placeholder="Your Email *"
//                 value={formData.email}
//                 onChange={(e) =>
//                   setFormData({ ...formData, email: e.target.value })
//                 }
//                 className="col-span-2 p-4 border-2 border-[#4682B4] rounded-lg focus:outline-none focus:border-[#FF7F50] transition bg-white"
//               />

//               {/* Phone */}
//               <input
//                 type="tel"
//                 placeholder="Phone Number *"
//                 value={formData.phone}
//                 onChange={(e) =>
//                   setFormData({ ...formData, phone: e.target.value })
//                 }
//                 className="col-span-2 p-4 border-2 border-[#4682B4] rounded-lg focus:outline-none focus:border-[#FF7F50] transition bg-white"
//               />

//               {/* Preferred Contact */}
//               <select
//                 value={formData.preferredContact}
//                 onChange={(e) =>
//                   setFormData({ ...formData, preferredContact: e.target.value })
//                 }
//                 className="col-span-2 p-4 border-2 border-[#4682B4] rounded-lg focus:outline-none focus:border-[#FF7F50] transition bg-white"
//               >
//                 <option value="">Preferred Method of Contact</option>
//                 <option value="email">Email</option>
//                 <option value="phone">Phone</option>
//                 <option value="whatsapp">WhatsApp</option>
//               </select>

//               {/* Message */}
//               <textarea
//                 placeholder="Your Message"
//                 rows={5}
//                 value={formData.message}
//                 onChange={(e) =>
//                   setFormData({ ...formData, message: e.target.value })
//                 }
//                 className="col-span-2 p-4 border-2 border-[#4682B4] rounded-lg focus:outline-none focus:border-[#FF7F50] transition bg-white resize-none"
//               />

//               {/* SUBMIT BUTTON */}
//               <button
//                 onClick={handleSubmit}
//                 className="col-span-2 w-full bg-[#FF7F50] text-white py-4 rounded-lg font-bold text-xl hover:bg-[#e86f45] transition shadow-lg"
//               >
//                 Submit Request
//               </button>
//             </div>
//           </motion.div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Contact;



// import { useState } from 'react';
// import { SelectedPage } from '../Shared/Types';
// import { motion } from 'framer-motion';

// // IMPORT BACKGROUND IMAGE
// import bgImage from "../../assets/Images/iStockImages/about4.jpg";

// const Contact = () => {
//   const [formData, setFormData] = useState({
//     firstName: '',
//     lastName: '',
//     email: '',
//     phone: '',
//     preferredContact: '',
//     message: '',
//   });

//   const handleSubmit = () => {
//     alert('Message sent! We will contact you soon.');
//     setFormData({
//       firstName: '',
//       lastName: '',
//       email: '',
//       phone: '',
//       preferredContact: '',
//       message: '',
//     });
//   };

//   return (
//     <section
//       id={SelectedPage.Contact}
//       className="relative w-full py-28 px-6 bg-cover bg-center bg-no-repeat bg-fixed"
//       style={{ backgroundImage: `url(${bgImage})` }}
//     >
//       {/* FULL SCREEN DARK + BLUR OVERLAY */}
//       <div className="absolute inset-0 bg-black/50 backdrop-blur-[6px]"></div>

//       {/* CONTENT ABOVE OVERLAY */}
//       <div className="relative max-w-4xl mx-auto z-10">

//         {/* Section Title */}
//         <motion.div
//           initial={{ opacity: 0, y: -40 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.6 }}
//           className="text-center mb-14 text-white"
//         >
//           <h2 className="text-5xl font-bold uppercase tracking-wide">
//             Contact Us
//           </h2>
//           <div className="w-24 h-1 bg-[#FF7F50] mx-auto mt-4"></div>
//           <p className="text-xl italic mt-3 opacity-90">
//             Start Your Journey Today
//           </p>
//         </motion.div>

//         {/* FORM BOX */}
//         <motion.div
//           initial={{ opacity: 0, y: 40 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.6 }}
//           className="
//             p-10 rounded-2xl shadow-2xl 
//             bg-white/90 backdrop-blur-md 
//             border border-white/30
//           "
//         >
//           <h3 className="text-3xl font-bold text-[#4682B4] mb-8">
//             Book Your Appointment
//           </h3>

//           <div className="grid grid-cols-2 gap-6">
//             {/* First Name */}
//             <input
//               type="text"
//               placeholder="First Name *"
//               value={formData.firstName}
//               onChange={(e) =>
//                 setFormData({ ...formData, firstName: e.target.value })
//               }
//               className="p-4 border-2 border-[#4682B4] rounded-lg focus:outline-none focus:border-[#FF7F50] transition bg-white"
//             />

//             {/* Last Name */}
//             <input
//               type="text"
//               placeholder="Last Name *"
//               value={formData.lastName}
//               onChange={(e) =>
//                 setFormData({ ...formData, lastName: e.target.value })
//               }
//               className="p-4 border-2 border-[#4682B4] rounded-lg focus:outline-none focus:border-[#FF7F50] transition bg-white"
//             />

//             {/* Email */}
//             <input
//               type="email"
//               placeholder="Your Email *"
//               value={formData.email}
//               onChange={(e) =>
//                 setFormData({ ...formData, email: e.target.value })
//               }
//               className="col-span-2 p-4 border-2 border-[#4682B4] rounded-lg focus:outline-none focus:border-[#FF7F50] transition bg-white"
//             />

//             {/* Phone */}
//             <input
//               type="tel"
//               placeholder="Phone Number *"
//               value={formData.phone}
//               onChange={(e) =>
//                 setFormData({ ...formData, phone: e.target.value })
//               }
//               className="col-span-2 p-4 border-2 border-[#4682B4] rounded-lg focus:outline-none focus:border-[#FF7F50] transition bg-white"
//             />

//             {/* Preferred Contact */}
//             <select
//               value={formData.preferredContact}
//               onChange={(e) =>
//                 setFormData({ ...formData, preferredContact: e.target.value })
//               }
//               className="col-span-2 p-4 border-2 border-[#4682B4] rounded-lg focus:outline-none focus:border-[#FF7F50] transition bg-white"
//             >
//               <option value="">Preferred Method of Contact</option>
//               <option value="email">Email</option>
//               <option value="phone">Phone</option>
//               <option value="whatsapp">WhatsApp</option>
//             </select>

//             {/* Message */}
//             <textarea
//               placeholder="Your Message"
//               rows={5}
//               value={formData.message}
//               onChange={(e) =>
//                 setFormData({ ...formData, message: e.target.value })
//               }
//               className="col-span-2 p-4 border-2 border-[#4682B4] rounded-lg focus:outline-none focus:border-[#FF7F50] transition bg-white resize-none"
//             />

//             {/* Button */}
//             <button
//               onClick={handleSubmit}
//               className="col-span-2 w-full bg-[#FF7F50] text-white py-4 rounded-lg font-bold text-xl hover:bg-[#e86f45] transition shadow-xl"
//             >
//               Submit Request
//             </button>
//           </div>
//         </motion.div>
//       </div>
//     </section>
//   );
// };

// export default Contact;

// import { useState } from "react";
// import { SelectedPage } from "../Shared/Types";
// import { motion } from "framer-motion";

// // Background Image
// import bgImage from "../../assets/Images/iStockImages/about4.jpg";

// const Contact = () => {
//   const [formData, setFormData] = useState({
//     firstName: "",
//     lastName: "",
//     email: "",
//     phone: "",
//     preferredContact: "",
//     message: "",
//   });

//   const handleSubmit = () => {
//     alert("Message sent! We will contact you soon.");
//     setFormData({
//       firstName: "",
//       lastName: "",
//       email: "",
//       phone: "",
//       preferredContact: "",
//       message: "",
//     });
//   };

//   return (
//     <section
//       id={SelectedPage.Contact}
//       className="relative w-full py-28 px-6 bg-cover bg-center bg-no-repeat bg-fixed"
//       style={{ backgroundImage: `url(${bgImage})` }}
//     >
//       {/* DARK + BLUR FILTER */}
//       <div className="absolute inset-0 bg-black/50 backdrop-blur-sm"></div>

//       {/* Z-PATTERN CONTENT */}
//       <div className="relative z-10 max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">

//         {/* LEFT SIDE — FORM SECTION */}
//         <motion.div
//           initial={{ opacity: 0, x: -40 }}
//           whileInView={{ opacity: 1, x: 0 }}
//           transition={{ duration: 0.8 }}
//           className="
//             p-10 rounded-3xl shadow-2xl 
//             bg-white/90 backdrop-blur-md 
//             border border-white/40
//           "
//         >
//           {/* TITLE */}
//           <h2 className="text-4xl font-heading font-bold text-[#1A3D7C] uppercase tracking-wide mb-4">
//             Contact Us
//           </h2>
//           <div className="w-24 h-1 bg-[#FF7F50] rounded-full mb-6"></div>

//           <p className="text-lg italic text-[#1A3D7C]/80 mb-8">
//             Start your fertility journey with confidence
//           </p>

//           {/* FORM FIELDS */}
//           <div className="grid grid-cols-2 gap-6">
//             {/* First Name */}
//             <input
//               type="text"
//               placeholder="First Name *"
//               value={formData.firstName}
//               onChange={(e) =>
//                 setFormData({ ...formData, firstName: e.target.value })
//               }
//               className="
//                 p-4 border-2 border-[#1A3D7C] rounded-lg 
//                 focus:outline-none focus:border-[#FF7F50] 
//                 bg-white shadow-sm
//               "
//             />

//             {/* Last Name */}
//             <input
//               type="text"
//               placeholder="Last Name *"
//               value={formData.lastName}
//               onChange={(e) =>
//                 setFormData({ ...formData, lastName: e.target.value })
//               }
//               className="
//                 p-4 border-2 border-[#1A3D7C] rounded-lg 
//                 focus:outline-none focus:border-[#FF7F50] 
//                 bg-white shadow-sm
//               "
//             />

//             {/* Email */}
//             <input
//               type="email"
//               placeholder="Your Email *"
//               value={formData.email}
//               onChange={(e) =>
//                 setFormData({ ...formData, email: e.target.value })
//               }
//               className="
//                 col-span-2 p-4 border-2 border-[#1A3D7C] rounded-lg 
//                 focus:outline-none focus:border-[#FF7F50] 
//                 bg-white shadow-sm
//               "
//             />

//             {/* Phone */}
//             <input
//               type="tel"
//               placeholder="Phone Number *"
//               value={formData.phone}
//               onChange={(e) =>
//                 setFormData({ ...formData, phone: e.target.value })
//               }
//               className="
//                 col-span-2 p-4 border-2 border-[#1A3D7C] rounded-lg 
//                 focus:outline-none focus:border-[#FF7F50] 
//                 bg-white shadow-sm
//               "
//             />

//             {/* Preferred Contact */}
//             <select
//               value={formData.preferredContact}
//               onChange={(e) =>
//                 setFormData({ ...formData, preferredContact: e.target.value })
//               }
//               className="
//                 col-span-2 p-4 border-2 border-[#1A3D7C] rounded-lg 
//                 focus:outline-none focus:border-[#FF7F50] 
//                 bg-white shadow-sm
//               "
//             >
//               <option value="">Preferred Method of Contact</option>
//               <option value="email">Email</option>
//               <option value="phone">Phone</option>
//               <option value="whatsapp">WhatsApp</option>
//             </select>

//             {/* Message */}
//             <textarea
//               placeholder="Your Message"
//               rows={5}
//               value={formData.message}
//               onChange={(e) =>
//                 setFormData({ ...formData, message: e.target.value })
//               }
//               className="
//                 col-span-2 p-4 border-2 border-[#1A3D7C] rounded-lg 
//                 focus:outline-none focus:border-[#FF7F50] 
//                 bg-white shadow-sm resize-none
//               "
//             />

//             {/* SUBMIT BUTTON */}
//             <motion.button
//               onClick={handleSubmit}
//               whileHover={{
//                 scale: 1.05,
//                 boxShadow: "0px 10px 25px rgba(255,127,80,0.5)",
//               }}
//               whileTap={{ scale: 0.95 }}
//               className="
//                 col-span-2 w-full py-4 
//                 bg-gradient-to-r from-[#FF7F50] to-[#FF986A] 
//                 text-white text-xl font-bold 
//                 rounded-lg shadow-lg 
//                 transition
//               "
//             >
//               Submit Request
//             </motion.button>
//           </div>
//         </motion.div>

//         {/* RIGHT SIDE — IMAGE SECTION */}
//         <motion.div
//           initial={{ opacity: 0, x: 50 }}
//           whileInView={{ opacity: 1, x: 0 }}
//           transition={{ duration: 0.8 }}
//           className="hidden md:block rounded-3xl overflow-hidden shadow-2xl"
//         >
//           <img
//             src={bgImage}
//             alt="Contact Clinic"
//             className="w-full h-full object-cover"
//           />
//         </motion.div>
//       </div>
//     </section>
//   );
// };

// export default Contact;


// src/Components/Main/Contact.tsx
import { useState } from "react";
import { SelectedPage } from "../Shared/Types";
import { motion } from "framer-motion";
import Reveal from "../Shared/Reveal";
import bgImage from "../../assets/Images/iStockImages/about4.jpg";

const Contact = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    preferredContact: "",
    message: "",
  });

  const handleSubmit = () => {
    alert("Message sent! We will contact you soon.");
    setFormData({ firstName: "", lastName: "", email: "", phone: "", preferredContact: "", message: "" });
  };

  return (
    <section id={SelectedPage.Contact} className="relative w-full py-28 px-6 md:px-12 lg:px-16 scroll-mt-24 bg-fixed bg-center" style={{ backgroundImage: `url(${bgImage})` }}>
      <div className="absolute inset-0 bg-black/50 backdrop-blur-sm" />
      <div className="relative z-10 max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">
        <Reveal>
          <div className="p-10 rounded-3xl shadow-medium bg-white/95 border border-white/30">
            <h2 className="text-4xl font-heading font-bold text-[#1A3D7C] uppercase tracking-wide mb-4">Contact Us</h2>
            <div className="w-24 h-1 bg-[#FF7F50] rounded-full mb-6" />
            <p className="text-lg italic text-[#1A3D7C]/80 mb-6">Start your fertility journey with confidence</p>

            <div className="grid grid-cols-2 gap-6">
              <input value={formData.firstName} onChange={(e) => setFormData({ ...formData, firstName: e.target.value })} placeholder="First Name *" className="p-4 border-2 border-[#1A3D7C] rounded-lg focus:outline-none focus:border-[#FF7F50] bg-white shadow-sm" />
              <input value={formData.lastName} onChange={(e) => setFormData({ ...formData, lastName: e.target.value })} placeholder="Last Name *" className="p-4 border-2 border-[#1A3D7C] rounded-lg focus:outline-none focus:border-[#FF7F50] bg-white shadow-sm" />
              <input type="email" value={formData.email} onChange={(e) => setFormData({ ...formData, email: e.target.value })} placeholder="Your Email *" className="col-span-2 p-4 border-2 border-[#1A3D7C] rounded-lg focus:outline-none focus:border-[#FF7F50] bg-white shadow-sm" />
              <input type="tel" value={formData.phone} onChange={(e) => setFormData({ ...formData, phone: e.target.value })} placeholder="Phone Number *" className="col-span-2 p-4 border-2 border-[#1A3D7C] rounded-lg focus:outline-none focus:border-[#FF7F50] bg-white shadow-sm" />
              <select value={formData.preferredContact} onChange={(e) => setFormData({ ...formData, preferredContact: e.target.value })} className="col-span-2 p-4 border-2 border-[#1A3D7C] rounded-lg focus:outline-none focus:border-[#FF7F50] bg-white shadow-sm">
                <option value="">Preferred Method of Contact</option>
                <option value="email">Email</option>
                <option value="phone">Phone</option>
                <option value="whatsapp">WhatsApp</option>
              </select>
              <textarea value={formData.message} onChange={(e) => setFormData({ ...formData, message: e.target.value })} placeholder="Your Message" rows={5} className="col-span-2 p-4 border-2 border-[#1A3D7C] rounded-lg focus:outline-none focus:border-[#FF7F50] bg-white shadow-sm resize-none" />
              <motion.button whileHover={{ scale: 1.04 }} onClick={handleSubmit} className="col-span-2 w-full py-4 bg-gradient-to-r from-[#FF7F50] to-[#FF986A] text-white text-xl font-bold rounded-lg shadow-medium">
                Submit Request
              </motion.button>
            </div>
          </div>
        </Reveal>

        <Reveal delay={0.08}>
          <div className="hidden md:block rounded-3xl overflow-hidden shadow-medium">
            <img src={bgImage} alt="Contact Clinic" className="w-full h-full object-cover transition-transform duration-700 hover:scale-[1.04]" />
          </div>
        </Reveal>
      </div>
    </section>
  );
};

export default Contact;
