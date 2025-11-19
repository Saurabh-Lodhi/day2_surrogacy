// import { FooterData } from '../Shared/Consts';
// import { FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa';

// const Footer = () => {
//   return (
//     <footer className="bg-[#aed4ff] py-12 px-6">
//       <div className="max-w-7xl mx-auto">
//         <div className="grid md:grid-cols-4 gap-8 mb-8">
//           <div>
//             <div className="flex items-center gap-2 mb-4">
//               <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center">
//                 <span className="text-white text-xl">❤️</span>
//               </div>
//               <span className="text-xl font-bold text-[#1d4d85]">
//                 Ukraine Fertility
//               </span>
//             </div>
//             <p className="text-[#1d4d85] mb-4">
//               Making dreams of parenthood come true
//             </p>
//             {FooterData.addresses.map((address, index) => (
//               <p className="text-[#1d4d85]" key={index}>
//                 {address}
//               </p>
//             ))}
//             <p className="text-[#1d4d85] mt-2">{FooterData.phone}</p>
//             <p className="text-[#1d4d85]">{FooterData.email}</p>
//           </div>
//           <div>
//             <h4 className="font-bold text-[#1d4d85] text-lg mb-4">Services</h4>
//             <ul className="space-y-2">
//               {FooterData.departments.map((department, index) => (
//                 <li key={index} className="text-[#1d4d85]">
//                   {department}
//                 </li>
//               ))}
//             </ul>
//           </div>
//           <div>
//             <h4 className="font-bold text-[#1d4d85] text-lg mb-4">
//               Quick Links
//             </h4>
//             <ul className="space-y-2">
//               {FooterData.links.map((link, index) => (
//                 <li key={index} className="text-[#1d4d85] cursor-pointer hover:text-primary transition">
//                   {link}
//                 </li>
//               ))}
//             </ul>
//           </div>
//           <div>
//             <h4 className="font-bold text-[#1d4d85] text-lg mb-4">
//               Newsletter
//             </h4>
//             <p className="text-[#1d4d85] mb-4">
//               Subscribe to get updates on our services
//             </p>
//             <input
//               type="email"
//               placeholder="Your Email"
//               className="w-full p-2 rounded-lg mb-2 focus:outline-none border-2 border-transparent focus:border-primary"
//             />
//             <button className="w-full bg-primary text-white py-2 rounded-lg font-bold hover:bg-[#0f6ec4] transition">
//               Subscribe
//             </button>
//             <div className="mt-6">
//               <p className="font-bold text-[#1d4d85] mb-3">Follow Us</p>
//               <div className="flex gap-4">
//                 <FaFacebook className="w-7 h-7 text-primary cursor-pointer hover:text-[#0f6ec4] transition" />
//                 <FaInstagram className="w-7 h-7 text-primary cursor-pointer hover:text-[#0f6ec4] transition" />
//                 <FaTwitter className="w-7 h-7 text-primary cursor-pointer hover:text-[#0f6ec4] transition" />
//               </div>
//             </div>
//           </div>
//         </div>
//         <div className="border-t border-secondary pt-8 text-center">
//           <p className="text-[#1d4d85]">
//             © 2024 Ukraine Fertility. All rights reserved.
//           </p>
//         </div>
//       </div>
//     </footer>
//   );
// };

// export default Footer;

// import { FooterData } from '../Shared/Consts';
// import { FaFacebook, FaInstagram, FaLinkedin, FaWhatsapp, FaYoutube } from 'react-icons/fa';

// const Footer = () => {
//   return (
//     <footer className="bg-gradient-embryon py-12 px-6">
//       <div className="max-w-7xl mx-auto">
//         <div className="grid md:grid-cols-4 gap-8 mb-8">
//           {/* Logo & Contact Info */}
//           <div>
//             <div className="flex items-center gap-2 mb-4">
//               <div className="w-12 h-12 bg-accent rounded-full flex items-center justify-center">
//                 <span className="text-white text-2xl">{FooterData.logo}</span>
//               </div>
//               <span className="font-heading text-xl font-bold text-white">
//                 The Embryon Family
//               </span>
//             </div>
//             <p className="font-subtitle text-white/90 italic mb-4">
//               Trusted Since 1994
//             </p>
//             {FooterData.addresses.map((address, index) => (
//               <p className="font-body text-white/90 text-sm" key={index}>
//                 {address}
//               </p>
//             ))}
//             <p className="font-body text-white/90 text-sm mt-3">{FooterData.phone}</p>
//             <p className="font-body text-white/90 text-sm">{FooterData.tollFree}</p>
//             <p className="font-body text-white/90 text-sm">{FooterData.email}</p>
//           </div>

//           {/* Services */}
//           <div>
//             <h4 className="font-heading font-bold text-white text-lg mb-4 uppercase tracking-wide">
//               Our Services
//             </h4>
//             <ul className="space-y-2">
//               {FooterData.departments.map((department, index) => (
//                 <li key={index} className="font-body text-white/80 text-sm hover:text-accent cursor-pointer transition">
//                   {department}
//                 </li>
//               ))}
//             </ul>
//           </div>

//           {/* Quick Links */}
//           <div>
//             <h4 className="font-heading font-bold text-white text-lg mb-4 uppercase tracking-wide">
//               Quick Links
//             </h4>
//             <ul className="space-y-2">
//               {FooterData.links.map((link, index) => (
//                 <li key={index} className="font-body text-white/80 text-sm hover:text-accent cursor-pointer transition">
//                   {link}
//                 </li>
//               ))}
//             </ul>
//           </div>

//           {/* Newsletter & Social */}
//           <div>
//             <h4 className="font-heading font-bold text-white text-lg mb-4 uppercase tracking-wide">
//               Stay Connected
//             </h4>
//             <p className="font-body text-white/90 text-sm mb-4">
//               Subscribe to get updates on our services and success stories
//             </p>
//             <input
//               type="email"
//               placeholder="Your Email"
//               className="w-full p-3 rounded-lg mb-3 focus:outline-none border-2 border-transparent focus:border-accent font-body text-sm"
//             />
//             <button className="w-full bg-accent text-white py-2 rounded-lg font-heading font-bold hover:bg-accent/90 transition shadow-lg mb-6">
//               Subscribe
//             </button>
//             <div className="mt-4">
//               <p className="font-heading font-bold text-white mb-3 text-sm uppercase tracking-wide">
//                 Follow Us
//               </p>
//               <div className="flex gap-3">
//                 <FaFacebook className="w-8 h-8 text-white/80 cursor-pointer hover:text-accent transition" />
//                 <FaInstagram className="w-8 h-8 text-white/80 cursor-pointer hover:text-accent transition" />
//                 <FaLinkedin className="w-8 h-8 text-white/80 cursor-pointer hover:text-accent transition" />
//                 <FaWhatsapp className="w-8 h-8 text-white/80 cursor-pointer hover:text-accent transition" />
//                 <FaYoutube className="w-8 h-8 text-white/80 cursor-pointer hover:text-accent transition" />
//               </div>
//             </div>
//           </div>
//         </div>

//         {/* Bottom Bar */}
//         <div className="border-t border-white/20 pt-6">
//           <div className="flex flex-col md:flex-row justify-between items-center gap-4">
//             <p className="font-body text-white/80 text-sm text-center md:text-left">
//               © 2025 Embryon Fertility LLC | All rights reserved
//             </p>
//             <div className="flex gap-4">
//               <a href="#" className="font-body text-white/80 text-sm hover:text-accent transition">
//                 Privacy Policy
//               </a>
//               <span className="text-white/40">|</span>
//               <a href="#" className="font-body text-white/80 text-sm hover:text-accent transition">
//                 Terms of Service
//               </a>
//             </div>
//           </div>
//           <p className="font-body text-white/60 text-xs text-center mt-4 italic">
//             Protected & Accelerated by Cloudflare | Powered by Monk Outsourcing
//           </p>
//         </div>
//       </div>
//     </footer>
//   );
// };

// export default Footer;

// import { FooterData } from '../Shared/Consts';
// import { FaFacebook, FaInstagram, FaLinkedin, FaWhatsapp, FaYoutube } from 'react-icons/fa';

// const Footer = () => {
//   return (
//     <footer className="bg-gradient-to-r from-[#4B0082] to-[#4682B4] py-12 px-6">
//       <div className="max-w-7xl mx-auto">
//         <div className="grid md:grid-cols-4 gap-8 mb-8">
//           {/* Logo & Contact Info */}
//           <div>
//             <div className="flex items-center gap-2 mb-4">
//               <div className="w-12 h-12 bg-[#FF7F50] rounded-full flex items-center justify-center shadow-md">
//                 <img src="/logo.png" alt="Embryon Logo" className="w-10 h-10 object-contain" />
//               </div>
//               <span className="font-heading text-xl font-bold text-white tracking-wide uppercase">
//                 Embryon Fertility
//               </span>
//             </div>
//             <p className="font-subtitle text-white/90 italic mb-4">
//               Trusted Since 1994
//             </p>
//             {FooterData.addresses.map((address, index) => (
//               <p className="font-body text-white/90 text-sm" key={index}>
//                 {address}
//               </p>
//             ))}
//             <p className="font-body text-white/90 text-sm mt-3">{FooterData.phone}</p>
//             <p className="font-body text-white/90 text-sm">{FooterData.tollFree}</p>
//             <p className="font-body text-white/90 text-sm">{FooterData.email}</p>
//           </div>

//           {/* Services */}
//           <div>
//             <h4 className="font-heading font-bold text-white text-lg mb-4 uppercase tracking-wider border-b border-white/20 pb-1">
//               Our Services
//             </h4>
//             <ul className="space-y-2">
//               {FooterData.departments.map((department, index) => (
//                 <li
//                   key={index}
//                   className="font-body text-white/80 text-sm hover:text-[#FF7F50] cursor-pointer transition"
//                 >
//                   {department}
//                 </li>
//               ))}
//             </ul>
//           </div>

//           {/* Quick Links */}
//           <div>
//             <h4 className="font-heading font-bold text-white text-lg mb-4 uppercase tracking-wider border-b border-white/20 pb-1">
//               Quick Links
//             </h4>
//             <ul className="space-y-2">
//               {FooterData.links.map((link, index) => (
//                 <li
//                   key={index}
//                   className="font-body text-white/80 text-sm hover:text-[#FF7F50] cursor-pointer transition"
//                 >
//                   {link}
//                 </li>
//               ))}
//             </ul>
//           </div>

//           {/* Newsletter & Social */}
//           <div>
//             <h4 className="font-heading font-bold text-white text-lg mb-4 uppercase tracking-wider border-b border-white/20 pb-1">
//               Stay Connected
//             </h4>
//             <p className="font-body text-white/90 text-sm mb-4">
//               Subscribe to get updates on our services and success stories
//             </p>
//             <input
//               type="email"
//               placeholder="Your Email"
//               className="w-full p-3 rounded-lg mb-3 focus:outline-none border-2 border-transparent focus:border-[#FF7F50] font-body text-sm bg-white/20 placeholder-white/60 text-white"
//             />
//             <button className="w-full bg-[#FF7F50] text-white py-2 rounded-lg font-heading font-bold hover:bg-[#ff6a36] transition shadow-lg mb-6">
//               Subscribe
//             </button>
            
//             <div className="mt-4">
//               <p className="font-heading font-bold text-white mb-3 text-sm uppercase tracking-wider">
//                 Follow Us
//               </p>
//               <div className="flex gap-3">
//                 <FaFacebook className="w-8 h-8 text-white/80 cursor-pointer hover:text-[#FF7F50] transition" />
//                 <FaInstagram className="w-8 h-8 text-white/80 cursor-pointer hover:text-[#FF7F50] transition" />
//                 <FaLinkedin className="w-8 h-8 text-white/80 cursor-pointer hover:text-[#FF7F50] transition" />
//                 <FaWhatsapp className="w-8 h-8 text-white/80 cursor-pointer hover:text-[#FF7F50] transition" />
//                 <FaYoutube className="w-8 h-8 text-white/80 cursor-pointer hover:text-[#FF7F50] transition" />
//               </div>
//             </div>
//           </div>
//         </div>

//         {/* Bottom Bar */}
//         <div className="border-t border-white/20 pt-6">
//           <div className="flex flex-col md:flex-row justify-between items-center gap-4">
//             <p className="font-body text-white/80 text-sm text-center md:text-left">
//               © 2025 Embryon Fertility LLC | SurrogacyUkraine.TLD | Internal Use Only
//             </p>
//             <div className="flex gap-4">
//               <a href="#" className="font-body text-white/80 text-sm hover:text-[#FF7F50] transition">
//                 Privacy Policy
//               </a>
//               <span className="text-white/40">|</span>
//               <a href="#" className="font-body text-white/80 text-sm hover:text-[#FF7F50] transition">
//                 Terms of Service
//               </a>
//             </div>
//           </div>
//         </div>
//       </div>
//     </footer>
//   );
// };

// export default Footer;

import { FooterData } from "../Shared/Consts";
import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaWhatsapp,
  FaYoutube,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-[#4B0082] to-[#4682B4] pt-16 pb-10 px-6">
      <div className="max-w-7xl mx-auto">
        {/* TOP GRID */}
        <div className="grid md:grid-cols-4 gap-10 mb-12">

          {/* ----------- LOGO + CONTACT ----------- */}
          <div>
            <div className="flex items-center gap-3 mb-5">
              <div className="w-14 h-14 bg-[#FF7F50] rounded-full flex items-center justify-center shadow-md">
                <img
                  src="/footerLogo.svg"
                  alt="Embryon Logo"
                  className="w-10 h-10 object-contain"
                />
              </div>
              <span className="text-xl font-heading font-bold text-white tracking-wide uppercase">
                Embryon Fertility
              </span>
            </div>

            <p className="font-subtitle text-white/90 italic mb-3">
              Trusted Since 1994
            </p>

            <p className="font-body text-white/85 text-sm">{FooterData.address}</p>
            <p className="font-body text-white/85 text-sm">{FooterData.workingDays}</p>

            <div className="mt-4">
              <p className="font-body text-white/85 text-sm">
                Hotline: {FooterData.hotline}
              </p>
              <p className="font-body text-white/85 text-sm">
                Toll-Free: {FooterData.tollFree}
              </p>
              <p className="font-body text-white/85 text-sm">
                Email: {FooterData.email}
              </p>
            </div>
          </div>

          {/* ----------- PAGES ----------- */}
          <div>
            <h4 className="font-heading text-white font-bold text-lg mb-4 uppercase tracking-wide">
              Pages
            </h4>
            <ul className="space-y-2">
              {FooterData.pages.map((page, idx) => (
                <li
                  key={idx}
                  className="font-body text-white/80 hover:text-[#FF7F50] cursor-pointer transition text-sm"
                >
                  {page}
                </li>
              ))}
            </ul>
          </div>

          {/* ----------- SERVICES ----------- */}
          <div>
            <h4 className="font-heading text-white font-bold text-lg mb-4 uppercase tracking-wide">
              Services
            </h4>
            <ul className="space-y-2">
              {FooterData.services.map((service, idx) => (
                <li
                  key={idx}
                  className="font-body text-white/80 hover:text-[#FF7F50] cursor-pointer transition text-sm"
                >
                  {service}
                </li>
              ))}
            </ul>
          </div>

          {/* ----------- SOCIAL & NEWSLETTER ----------- */}
          <div>
            <h4 className="font-heading text-white font-bold text-lg mb-4 uppercase tracking-wide">
              Stay Connected
            </h4>

            <p className="font-body text-white/85 text-sm mb-4">
              Subscribe for updates and success stories.
            </p>

            <input
              type="email"
              placeholder="Your Email"
              className="
                w-full p-3 rounded-lg mb-3 
                bg-white/20 placeholder-white/60 text-white 
                border border-transparent 
                focus:outline-none focus:border-[#FF7F50]
              "
            />
            <button
              className="
                w-full bg-[#FF7F50] text-white py-3 rounded-lg font-heading 
                font-bold hover:bg-[#ff966c] transition shadow-lg
              "
            >
              Subscribe
            </button>

            <div className="mt-6">
              <p className="font-heading text-white text-sm font-bold uppercase tracking-wide mb-3">
                Follow Us
              </p>
              <div className="flex gap-4">
                <FaFacebook className="w-7 h-7 text-white/80 hover:text-[#FF7F50] cursor-pointer transition" />
                <FaInstagram className="w-7 h-7 text-white/80 hover:text-[#FF7F50] cursor-pointer transition" />
                <FaLinkedin className="w-7 h-7 text-white/80 hover:text-[#FF7F50] cursor-pointer transition" />
                <FaWhatsapp className="w-7 h-7 text-white/80 hover:text-[#FF7F50] cursor-pointer transition" />
                <FaYoutube className="w-7 h-7 text-white/80 hover:text-[#FF7F50] cursor-pointer transition" />
              </div>
            </div>
          </div>
        </div>

        {/* BOTTOM BAR */}
        <div className="border-t border-white/20 pt-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="font-body text-white/80 text-center text-sm">
              © 2025 Embryon Fertility LLC — All rights reserved
            </p>

            <div className="flex gap-4">
              <a
                href="#"
                className="font-body text-white/80 hover:text-[#FF7F50] text-sm transition"
              >
                Privacy Policy
              </a>
              <span className="text-white/60">|</span>
              <a
                href="#"
                className="font-body text-white/80 hover:text-[#FF7F50] text-sm transition"
              >
                Terms of Service
              </a>
            </div>
          </div>

          <p className="font-body text-white/60 text-xs text-center mt-4 italic">
            Powered by Monk Outsourcing Technologies
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
