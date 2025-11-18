// import { useState } from 'react';
// import { SelectedPage } from '../Shared/Types';
// import { motion } from 'framer-motion';
// import { FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa';

// const Contact = () => {
//   const [formData, setFormData] = useState({
//     name: '',
//     email: '',
//     phone: '',
//     message: '',
//   });

//   const handleSubmit = () => {
//     console.log('Form submitted:', formData);
//     alert('Message sent! We will contact you soon.');
//     setFormData({ name: '', email: '', phone: '', message: '' });
//   };

//   return (
//     <section
//       id={SelectedPage.Contact}
//       className="py-20 px-6 bg-gradient-to-br from-[#aed4ff] to-secondary"
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
//           Contact Us
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
//             <h3 className="text-2xl font-bold text-[#1d4d85] mb-6">
//               Get in Touch
//             </h3>
//            <div className="space-y-6 mb-8">
//               <div className="flex gap-4 items-start">
//                 <span className="text-2xl">📍</span>
//                 <div>
//                   <p className="font-bold text-[#1d4d85]">Address</p>
//                   <p className="text-[#1d4d85]">Kyiv, Ukraine</p>
//                   <p className="text-[#1d4d85]">Medical District</p>
//                 </div>
//               </div>
//               <div className="flex gap-4 items-start">
//                 <span className="text-2xl">📞</span>
//                 <div>
//                   <p className="font-bold text-[#1d4d85]">Phone</p>
//                   <p className="text-[#1d4d85]">+380 XX XXX XXXX</p>
//                 </div>
//               </div>
//               <div className="flex gap-4 items-start">
//                 <span className="text-2xl">✉️</span>
//                 <div>
//                   <p className="font-bold text-[#1d4d85]">Email</p>
//                   <p className="text-[#1d4d85]">info@ukrainefertility.com</p>
//                 </div>
//               </div>
//             </div>
//             <div>
//               <p className="font-bold text-[#1d4d85] mb-4">Follow Us</p>
//               <div className="flex gap-4">
//                 <FaFacebook className="w-8 h-8 text-primary cursor-pointer hover:text-[#0f6ec4] transition" />
//                 <FaInstagram className="w-8 h-8 text-primary cursor-pointer hover:text-[#0f6ec4] transition" />
//                 <FaTwitter className="w-8 h-8 text-primary cursor-pointer hover:text-[#0f6ec4] transition" />
//               </div>
//             </div>
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
//             className="bg-white p-8 rounded-2xl shadow-lg"
//           >
//             <h3 className="text-2xl font-bold text-[#1d4d85] mb-6">
//               Send Us a Message
//             </h3>
//             <div className="space-y-4">
//               <input
//                 type="text"
//                 placeholder="Your Name"
//                 value={formData.name}
//                 onChange={(e) =>
//                   setFormData({ ...formData, name: e.target.value })
//                 }
//                 className="w-full p-3 border-2 border-[#aed4ff] rounded-lg focus:outline-none focus:border-primary"
//               />
//               <input
//                 type="email"
//                 placeholder="Your Email"
//                 value={formData.email}
//                 onChange={(e) =>
//                   setFormData({ ...formData, email: e.target.value })
//                 }
//                 className="w-full p-3 border-2 border-[#aed4ff] rounded-lg focus:outline-none focus:border-primary"
//               />
//               <input
//                 type="tel"
//                 placeholder="Phone Number"
//                 value={formData.phone}
//                 onChange={(e) =>
//                   setFormData({ ...formData, phone: e.target.value })
//                 }
//                 className="w-full p-3 border-2 border-[#aed4ff] rounded-lg focus:outline-none focus:border-primary"
//               />
//               <textarea
//                 placeholder="Your Message"
//                 rows={4}
//                 value={formData.message}
//                 onChange={(e) =>
//                   setFormData({ ...formData, message: e.target.value })
//                 }
//                 className="w-full p-3 border-2 border-[#aed4ff] rounded-lg focus:outline-none focus:border-primary resize-none"
//               />
//               <button
//                 onClick={handleSubmit}
//                 className="w-full bg-primary text-white py-3 rounded-lg font-bold hover:bg-[#0f6ec4] transition"
//               >
//                 Send Message
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
import { FaFacebook, FaInstagram, FaLinkedin, FaWhatsapp, FaYoutube } from 'react-icons/fa';

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
    console.log('Form submitted:', formData);
    alert('Message sent! We will contact you soon.');
    setFormData({ 
      firstName: '', 
      lastName: '', 
      email: '', 
      phone: '', 
      preferredContact: '',
      message: '' 
    });
  };

  return (
    <section
      id={SelectedPage.Contact}
      className="py-20 px-6 bg-white"
    >
      <div className="max-w-7xl mx-auto">
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
          <h2 className="font-heading text-5xl font-bold text-primary mb-4 tracking-wide uppercase">
            Contact Us
          </h2>
          <div className="w-24 h-1 bg-gradient-embryon mx-auto mb-4"></div>
          <p className="font-subtitle text-2xl text-secondary italic">
            Start Your Journey Today
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12">
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
            <h3 className="font-heading text-3xl font-bold text-primary mb-6">
              Get in Touch
            </h3>
            <div className="space-y-6 mb-8">
              <div className="flex gap-4 items-start">
                <span className="text-3xl text-accent">📍</span>
                <div>
                  <p className="font-bold text-primary mb-1">Address</p>
                  <p className="font-body text-dark">Zahorivska St, 1</p>
                  <p className="font-body text-dark">Kyiv, Ukraine</p>
                </div>
              </div>
              <div className="flex gap-4 items-start">
                <span className="text-3xl text-accent">📞</span>
                <div>
                  <p className="font-bold text-primary mb-1">Hotline</p>
                  <p className="font-body text-dark">+380 975972636</p>
                  <p className="font-body text-dark text-sm">Mon-Sun 08:00-23:00 (GMT+2)</p>
                </div>
              </div>
              <div className="flex gap-4 items-start">
                <span className="text-3xl text-accent">🌐</span>
                <div>
                  <p className="font-bold text-primary mb-1">Toll-Free (USA/Canada)</p>
                  <p className="font-body text-dark">+1 (866) 446-6222</p>
                </div>
              </div>
              <div className="flex gap-4 items-start">
                <span className="text-3xl text-accent">✉️</span>
                <div>
                  <p className="font-bold text-primary mb-1">Email</p>
                  <p className="font-body text-dark">letstalk@embryon-ukraine.com</p>
                </div>
              </div>
            </div>
            <div>
              <p className="font-heading font-bold text-primary mb-4 text-xl">Follow Us</p>
              <div className="flex gap-4">
                <FaFacebook className="w-10 h-10 text-secondary cursor-pointer hover:text-accent transition" />
                <FaInstagram className="w-10 h-10 text-secondary cursor-pointer hover:text-accent transition" />
                <FaLinkedin className="w-10 h-10 text-secondary cursor-pointer hover:text-accent transition" />
                <FaWhatsapp className="w-10 h-10 text-secondary cursor-pointer hover:text-accent transition" />
                <FaYoutube className="w-10 h-10 text-secondary cursor-pointer hover:text-accent transition" />
              </div>
            </div>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            variants={{
              hidden: { opacity: 0, x: 50 },
              visible: { opacity: 1, x: 0 },
            }}
            className="bg-light p-8 rounded-2xl shadow-lg"
          >
            <h3 className="font-heading text-3xl font-bold text-primary mb-6">
              Book Your Appointment
            </h3>
            <div className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <input
                  type="text"
                  placeholder="First Name *"
                  value={formData.firstName}
                  onChange={(e) =>
                    setFormData({ ...formData, firstName: e.target.value })
                  }
                  className="font-body p-3 border-2 border-secondary/30 rounded-lg focus:outline-none focus:border-accent bg-white"
                />
                <input
                  type="text"
                  placeholder="Last Name *"
                  value={formData.lastName}
                  onChange={(e) =>
                    setFormData({ ...formData, lastName: e.target.value })
                  }
                  className="font-body p-3 border-2 border-secondary/30 rounded-lg focus:outline-none focus:border-accent bg-white"
                />
              </div>
              <input
                type="email"
                placeholder="Your Email *"
                value={formData.email}
                onChange={(e) =>
                  setFormData({ ...formData, email: e.target.value })
                }
                className="font-body w-full p-3 border-2 border-secondary/30 rounded-lg focus:outline-none focus:border-accent bg-white"
              />
              <input
                type="tel"
                placeholder="Phone Number *"
                value={formData.phone}
                onChange={(e) =>
                  setFormData({ ...formData, phone: e.target.value })
                }
                className="font-body w-full p-3 border-2 border-secondary/30 rounded-lg focus:outline-none focus:border-accent bg-white"
              />
              <select
                value={formData.preferredContact}
                onChange={(e) =>
                  setFormData({ ...formData, preferredContact: e.target.value })
                }
                className="font-body w-full p-3 border-2 border-secondary/30 rounded-lg focus:outline-none focus:border-accent bg-white"
              >
                <option value="">Preferred Method of Contact</option>
                <option value="email">Email</option>
                <option value="phone">Phone</option>
                <option value="whatsapp">WhatsApp</option>
              </select>
              <textarea
                placeholder="Your Message"
                rows={4}
                value={formData.message}
                onChange={(e) =>
                  setFormData({ ...formData, message: e.target.value })
                }
                className="font-body w-full p-3 border-2 border-secondary/30 rounded-lg focus:outline-none focus:border-accent resize-none bg-white"
              />
              <button
                onClick={handleSubmit}
                className="w-full bg-accent text-white py-3 rounded-lg font-heading font-bold hover:bg-accent/90 transition shadow-lg"
              >
                Submit Request
              </button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;