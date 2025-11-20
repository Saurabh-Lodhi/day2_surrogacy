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



import { useState } from 'react';
import { SelectedPage } from '../Shared/Types';
import { motion } from 'framer-motion';

// IMPORT BACKGROUND IMAGE
import bgImage from "../../assets/Images/iStockImages/about4.jpg";

import { saveContact } from "../../../src/services/contactService"; 
import { CreateContactRequest } from "../../../src/types/contact";

const Contact = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    preferredContact: '',
    message: '',
  });

  const handleSubmit = () => {
    alert('Message sent! We will contact you soon.');
    setFormData({
      firstName: '',
      lastName: '',
      email: '',
      phone: '',
      preferredContact: '',
      message: '',
    });
  };

  return (
    <section
      id={SelectedPage.Contact}
      className="relative w-full py-28 px-6 bg-cover bg-center bg-no-repeat bg-fixed"
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      {/* FULL SCREEN DARK + BLUR OVERLAY */}
      <div className="absolute inset-0 bg-black/50 backdrop-blur-[6px]"></div>

      {/* CONTENT ABOVE OVERLAY */}
      <div className="relative max-w-4xl mx-auto z-10">

        {/* Section Title */}
        <motion.div
          initial={{ opacity: 0, y: -40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14 text-white"
        >
          <h2 className="text-5xl font-bold uppercase tracking-wide">
            Contact Us
          </h2>
          <div className="w-24 h-1 bg-[#FF7F50] mx-auto mt-4"></div>
          <p className="text-xl italic mt-3 opacity-90">
            Start Your Journey Today
          </p>
        </motion.div>

        {/* FORM BOX */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="
            p-10 rounded-2xl shadow-2xl 
            bg-white/90 backdrop-blur-md 
            border border-white/30
          "
        >
          <h3 className="text-3xl font-bold text-[#4682B4] mb-8">
            Book Your Appointment
          </h3>

          <div className="grid grid-cols-2 gap-6">
            {/* First Name */}
            <input
              type="text"
              placeholder="First Name *"
              value={formData.firstName}
              onChange={(e) =>
                setFormData({ ...formData, firstName: e.target.value })
              }
              className="p-4 border-2 border-[#4682B4] rounded-lg focus:outline-none focus:border-[#FF7F50] transition bg-white"
            />

            {/* Last Name */}
            <input
              type="text"
              placeholder="Last Name *"
              value={formData.lastName}
              onChange={(e) =>
                setFormData({ ...formData, lastName: e.target.value })
              }
              className="p-4 border-2 border-[#4682B4] rounded-lg focus:outline-none focus:border-[#FF7F50] transition bg-white"
            />

            {/* Email */}
            <input
              type="email"
              placeholder="Your Email *"
              value={formData.email}
              onChange={(e) =>
                setFormData({ ...formData, email: e.target.value })
              }
              className="col-span-2 p-4 border-2 border-[#4682B4] rounded-lg focus:outline-none focus:border-[#FF7F50] transition bg-white"
            />

            {/* Phone */}
            <input
              type="tel"
              placeholder="Phone Number *"
              value={formData.phone}
              onChange={(e) =>
                setFormData({ ...formData, phone: e.target.value })
              }
              className="col-span-2 p-4 border-2 border-[#4682B4] rounded-lg focus:outline-none focus:border-[#FF7F50] transition bg-white"
            />

            {/* Preferred Contact */}
            <select
              value={formData.preferredContact}
              onChange={(e) =>
                setFormData({ ...formData, preferredContact: e.target.value })
              }
              className="col-span-2 p-4 border-2 border-[#4682B4] rounded-lg focus:outline-none focus:border-[#FF7F50] transition bg-white"
            >
              <option value="">Preferred Method of Contact</option>
              <option value="email">Email</option>
              <option value="phone">Phone</option>
              <option value="whatsapp">WhatsApp</option>
            </select>

            {/* Message */}
            <textarea
              placeholder="Your Message"
              rows={5}
              value={formData.message}
              onChange={(e) =>
                setFormData({ ...formData, message: e.target.value })
              }
              className="col-span-2 p-4 border-2 border-[#4682B4] rounded-lg focus:outline-none focus:border-[#FF7F50] transition bg-white resize-none"
            />

            {/* Button */}
            <button
              onClick={handleSubmit}
              className="col-span-2 w-full bg-[#FF7F50] text-white py-4 rounded-lg font-bold text-xl hover:bg-[#e86f45] transition shadow-xl"
            >
              Submit Request
            </button>
          </div>
        </Reveal>
      </div>
    </section>
  );
};

export default Contact;
