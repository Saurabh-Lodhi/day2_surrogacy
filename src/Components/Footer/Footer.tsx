// import { FooterData } from '../Shared/Consts';
// import ContactDiv from './ContactDiv';

// const Footer = () => {
//   return (
//     <div className="bg-[#aed4ff] mt-20 p-10 md:px-16">
//       <div className="max-w-[1250px] m-auto flex justify-center gap-14 flex-wrap md:flex-nowrap">
//         <div className="font-bold">
//           <img width={50} src={FooterData.logo} alt="Logo" />
//           {FooterData.addresses.map((address, index) => (
//             <p className="my-3" key={index}>
//               {address}
//             </p>
//           ))}
//           <p>{FooterData.phone}</p>
//         </div>
//         <div className="flex gap-10">
//           <div>
//             <p className="font-bold text-lg">Departments</p>
//             <ul>
//               {FooterData.departments.map((department, index) => (
//                 <li key={index}>{department}</li>
//               ))}
//             </ul>
//           </div>
//           <ul>
//             {FooterData.links.map((link, index) => (
//               <li key={index}>{link}</li>
//             ))}
//           </ul>
//         </div>
//         <ContactDiv />
//       </div>
//     </div>
//   );
// };

// export default Footer;

// import ContactDiv from './ContactDiv';
// import { FooterData } from '../Shared/Consts';

// const Footer = () => {
//   return (
//     <footer className="bg-[#4682B4] text-white mt-20 px-8 py-14 md:px-16">
//   <div className="max-w-[1350px] m-auto grid grid-cols-1 md:grid-cols-5 gap-12">

//     {/* BIG Logo Column */}
//     <div className="flex items-start justify-start">
//       <img
//         src={FooterData.logo}
//         alt="Logo"
//         className="w-40 md:w-48 drop-shadow-xl"
//       />
//     </div>

//     {/* Clinic Info */}
//     <div className="col-span-2">
//       <p className="text-xl font-semibold mb-3">
//         {FooterData.clinicName}
//       </p>

//       <p className="mt-1">{FooterData.address}</p>
//       <p className="mt-1">Working Days: {FooterData.workingDays}</p>

//       <p className="mt-3">
//         <span className="font-semibold text-[#FF7F50]">Hotline: </span>
//         {FooterData.hotline}
//       </p>

//       <p>
//         <span className="font-semibold text-[#FF7F50]">Toll-Free: </span>
//         {FooterData.tollFree}
//       </p>

//       <p className="mt-3">
//         <span className="font-semibold text-[#FF7F50]">Email: </span>
//         {FooterData.email}
//       </p>
//     </div>

//     {/* Pages */}
//     <div>
//       <p className="font-bold text-xl mb-4 text-[#FF7F50]">Pages</p>
//       <ul className="space-y-2">
//         {FooterData.pages.map((page, index) => (
//           <li key={index} className="hover:text-[#FF7F50] cursor-pointer">
//             {page}
//           </li>
//         ))}
//       </ul>
//     </div>

//     {/* Services */}
//     <div>
//       <p className="font-bold text-xl mb-4 text-[#FF7F50]">Our Services</p>
//       <ul className="space-y-2">
//         {FooterData.services.map((service, index) => (
//           <li key={index} className="hover:text-[#FF7F50] cursor-pointer">
//             {service}
//           </li>
//         ))}
//       </ul>
//     </div>

//   </div>

//   {/* CONTACT + SOCIALS (Below Columns) */}
//   <div className="mt-12 max-w-[1350px] m-auto">

//     <p className="font-bold text-xl mb-4 text-[#FF7F50]">Get Social with us</p>

//     <div className="flex gap-4 mb-6">
//       {FooterData.socials.map((name, index) => (
//         <div
//           key={index}
//           className="w-10 h-10 rounded-full bg-white text-[#4682B4] flex items-center justify-center font-bold hover:bg-[#FF7F50] hover:text-white cursor-pointer transition"
//         >
//           {name[0]}
//         </div>
//       ))}
//     </div>

//     <ContactDiv />
//   </div>

//   {/* Bottom Bar */}
//   <div className="border-t border-white/30 mt-12 pt-6 text-center text-sm">
//     <p>Embryon International™ | All rights reserved | Copyright 2012 – 2025</p>
//     <p className="opacity-80 mt-1">Protected & Accelerated by Cloudflare | Powered by Monk Outsourcing</p>
//   </div>
// </footer>

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
//             <div className="flex items-center gap-4 mb-6">
//               <div className="w-20 h-20 bg-[#FF7F50] rounded-full flex items-center justify-center shadow-lg">
//                 <img
//                   src={FooterData.logo}
//                   alt="Embryon Logo"
//                   className="w-16 h-16 object-contain"
//                 />
//               </div>
//               <span className="font-heading text-2xl font-bold text-white tracking-wide uppercase leading-tight">
//                 {FooterData.clinicName}
//               </span>
//             </div>

//             <p className="font-body text-white/90 text-sm">{FooterData.address}</p>
//             <p className="font-body text-white/90 text-sm">{FooterData.workingDays}</p>

//             <p className="font-body text-white/90 text-sm mt-3">{FooterData.hotline}</p>
//             <p className="font-body text-white/90 text-sm">{FooterData.tollFree}</p>
//             <p className="font-body text-white/90 text-sm">{FooterData.email}</p>
//           </div>

//           {/* Services */}
//           <div>
//             <h4 className="font-heading font-bold text-white text-lg mb-4 uppercase tracking-wider border-b border-white/20 pb-1">
//               Our Services
//             </h4>
//             <ul className="space-y-2">
//               {FooterData.services.map((service: string, i: number) => (
//                 <li
//                   key={i}
//                   className="font-body text-white/80 text-sm hover:text-[#FF7F50] cursor-pointer transition"
//                 >
//                   {service}
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
//               {FooterData.pages.map((page: string, i: number) => (
//                 <li
//                   key={i}
//                   className="font-body text-white/80 text-sm hover:text-[#FF7F50] cursor-pointer transition"
//                 >
//                   {page}
//                 </li>
//               ))}
//             </ul>
//           </div>

//           {/* Social Icons ONLY */}
//           <div>
//             <h4 className="font-heading font-bold text-white text-lg mb-4 uppercase tracking-wider border-b border-white/20 pb-1">
//               Follow Us
//             </h4>

//             <div className="flex gap-4 mt-4">
//               <FaFacebook className="w-9 h-9 text-white/80 hover:text-[#FF7F50] transition cursor-pointer" />
//               <FaInstagram className="w-9 h-9 text-white/80 hover:text-[#FF7F50] transition cursor-pointer" />
//               <FaLinkedin className="w-9 h-9 text-white/80 hover:text-[#FF7F50] transition cursor-pointer" />
//               <FaWhatsapp className="w-9 h-9 text-white/80 hover:text-[#FF7F50] transition cursor-pointer" />
//               <FaYoutube className="w-9 h-9 text-white/80 hover:text-[#FF7F50] transition cursor-pointer" />
//             </div>
//           </div>

//         </div>

//         {/* Bottom Bar */}
//         <div className="border-t border-white/20 pt-6">
//           <div className="flex flex-col md:flex-row justify-between items-center gap-4">
//             <p className="font-body text-white/80 text-sm text-center md:text-left">
//               © 2025 Embryon Fertility LLC — All Rights Reserved
//             </p>

//             <div className="flex gap-4">
//               <a href="#" className="font-body text-white/80 text-sm hover:text-[#FF7F50] transition">Privacy Policy</a>
//               <span className="text-white/40">|</span>
//               <a href="#" className="font-body text-white/80 text-sm hover:text-[#FF7F50] transition">Terms of Service</a>
//             </div>
//           </div>
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
//     <footer className="bg-gradient-to-r from-[#7B2EC5] to-[#82B7E6] py-14 px-6">
//       <div className="max-w-7xl mx-auto">

//         <div className="grid md:grid-cols-4 gap-10 mb-12">

//           {/* Logo & Contact Info */}
//           <div>
//             {/* BIG Logo */}
//             <div className="flex items-center gap-4 mb-4">
//               <div className="w-24 h-24 bg-[#FF7F50] rounded-full flex items-center justify-center shadow-xl">
//                 <img
//                   src={FooterData.logo}
//                   alt="Embryon Logo"
//                   className="w-20 h-20 object-contain"
//                 />
//               </div>
//             </div>

//             {/* Clinic Name */}
//             <h2 className="text-2xl font-extrabold text-white leading-tight mb-5">
//               {FooterData.clinicName}
//             </h2>

//             {/* Sorted Contact Info */}
//             <div className="space-y-2 text-white/90 text-[15px] font-medium">
//               <p>{FooterData.address}</p>
//               <p>{FooterData.workingDays}</p>

//               <p className="pt-1 font-semibold">{FooterData.hotline}</p>
//               <p className="font-semibold">{FooterData.tollFree}</p>

//               <p className="pt-1 font-semibold">{FooterData.email}</p>
//             </div>
//           </div>

//           {/* Services */}
//           <div>
//             <h4 className="font-heading font-bold text-white text-lg mb-4 uppercase tracking-wider border-b border-white/30 pb-1">
//               Our Services
//             </h4>
//             <ul className="space-y-2">
//               {FooterData.services.map((service: string, i: number) => (
//                 <li
//                   key={i}
//                   className="font-body text-white/85 text-sm font-medium hover:text-[#FF7F50] cursor-pointer transition"
//                 >
//                   {service}
//                 </li>
//               ))}
//             </ul>
//           </div>

//           {/* Quick Links */}
//           <div>
//             <h4 className="font-heading font-bold text-white text-lg mb-4 uppercase tracking-wider border-b border-white/30 pb-1">
//               Quick Links
//             </h4>
//             <ul className="space-y-2">
//               {FooterData.pages.map((page: string, i: number) => (
//                 <li
//                   key={i}
//                   className="font-body text-white/85 text-sm font-medium hover:text-[#FF7F50] cursor-pointer transition"
//                 >
//                   {page}
//                 </li>
//               ))}
//             </ul>
//           </div>

//           {/* Social Icons – Portrait */}
//           <div>
//             <h4 className="font-heading font-bold text-white text-lg mb-4 uppercase tracking-wider border-b border-white/30 pb-1">
//               Follow Us
//             </h4>

//             <div className="flex flex-col gap-4 mt-4">
//               <FaFacebook className="w-8 h-8 text-white/85 hover:text-[#FF7F50] transition cursor-pointer" />
//               <FaInstagram className="w-8 h-8 text-white/85 hover:text-[#FF7F50] transition cursor-pointer" />
//               <FaLinkedin className="w-8 h-8 text-white/85 hover:text-[#FF7F50] transition cursor-pointer" />
//               <FaWhatsapp className="w-8 h-8 text-white/85 hover:text-[#FF7F50] transition cursor-pointer" />
//               <FaYoutube className="w-8 h-8 text-white/85 hover:text-[#FF7F50] transition cursor-pointer" />
//             </div>
//           </div>

//         </div>

//         {/* Bottom Bar */}
//         <div className="border-t border-white/20 pt-6">
//           <div className="flex flex-col md:flex-row justify-between items-center gap-4">
//             <p className="font-body text-white/75 text-sm font-medium">
//               © 2025 Embryon Fertility LLC — All Rights Reserved
//             </p>

//             <div className="flex gap-4">
//               <a
//                 href="#"
//                 className="font-body text-white/75 text-sm font-medium hover:text-[#FF7F50] transition"
//               >
//                 Privacy Policy
//               </a>
//               <span className="text-white/40">|</span>
//               <a
//                 href="#"
//                 className="font-body text-white/75 text-sm font-medium hover:text-[#FF7F50] transition"
//               >
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
// import { FooterData } from '../Shared/Consts';
// import { FaFacebook, FaInstagram, FaLinkedin, FaWhatsapp, FaYoutube } from 'react-icons/fa';

// const Footer = () => {
//   return (
//     <footer className="bg-gradient-to-r from-[#6A0FBF] to-[#6AA3D9] py-16 px-8">
//       <div className="max-w-7xl mx-auto">
        
//         <div className="grid md:grid-cols-4 gap-10 mb-12">

//           {/* Logo & Contact Info */}
//           <div>
//             <div className="flex items-center gap-4 mb-8">
//               <div className="w-40 h-40 bg-[#FF7F50] rounded-full flex items-center justify-center shadow-2xl">
//                 <img 
//                   src={FooterData.logo} 
//                   alt="Embryon Logo" 
//                   className="w-36 h-36 object-contain"
//                 />
//               </div>
//             </div>

//             <p className="font-body text-white/90 text-lg font-medium">{FooterData.address}</p>
//             <p className="font-body text-white/90 text-lg font-medium">{FooterData.workingDays}</p>

//             <p className="font-body text-white/90 text-xl font-semibold mt-5">{FooterData.hotline}</p>
//             <p className="font-body text-white/90 text-xl font-semibold">{FooterData.tollFree}</p>
//             <p className="font-body text-white/90 text-xl font-semibold">{FooterData.email}</p>
//           </div>

//           {/* Services */}
//           <div>
//             <h4 className="font-heading font-bold text-white text-2xl mb-5 uppercase tracking-wider border-b border-white/30 pb-2">
//               Our Services
//             </h4>
//             <ul className="space-y-3">
//               {FooterData.services.map((service: string, i: number) => (
//                 <li
//                   key={i}
//                   className="font-body text-white/85 text-lg font-medium hover:text-[#FF7F50] cursor-pointer transition"
//                 >
//                   {service}
//                 </li>
//               ))}
//             </ul>
//           </div>

//           {/* Quick Links */}
//           <div>
//             <h4 className="font-heading font-bold text-white text-2xl mb-5 uppercase tracking-wider border-b border-white/30 pb-2">
//               Quick Links
//             </h4>
//             <ul className="space-y-3">
//               {FooterData.pages.map((page: string, i: number) => (
//                 <li
//                   key={i}
//                   className="font-body text-white/85 text-lg font-medium hover:text-[#FF7F50] cursor-pointer transition"
//                 >
//                   {page}
//                 </li>
//               ))}
//             </ul>
//           </div>

//           {/* Social Icons - Portrait */}
//           <div>
//             <h4 className="font-heading font-bold text-white text-2xl mb-5 uppercase tracking-wider border-b border-white/30 pb-2">
//               Follow Us
//             </h4>

//             <div className="flex flex-col gap-5 mt-5">
//               <FaFacebook className="w-10 h-10 text-white/85 hover:text-[#FF7F50] transition cursor-pointer" />
//               <FaInstagram className="w-10 h-10 text-white/85 hover:text-[#FF7F50] transition cursor-pointer" />
//               <FaLinkedin className="w-10 h-10 text-white/85 hover:text-[#FF7F50] transition cursor-pointer" />
//               <FaWhatsapp className="w-10 h-10 text-white/85 hover:text-[#FF7F50] transition cursor-pointer" />
//               <FaYoutube className="w-10 h-10 text-white/85 hover:text-[#FF7F50] transition cursor-pointer" />
//             </div>
//           </div>

//         </div>

//         {/* Bottom Bar */}
//         <div className="border-t border-white/20 pt-8">
//           <div className="flex flex-col md:flex-row justify-between items-center gap-6">
//             <p className="font-body text-white/80 text-lg font-medium">
//               © 2025 Embryon Fertility LLC — All Rights Reserved
//             </p>

//             <div className="flex gap-6">
//               <a href="#" className="font-body text-white/80 text-lg font-medium hover:text-[#FF7F50] transition">
//                 Privacy Policy
//               </a>
//               <span className="text-white/50">|</span>
//               <a href="#" className="font-body text-white/80 text-lg font-medium hover:text-[#FF7F50] transition">
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


// import { FooterData } from '../Shared/Consts';
// import { FaFacebook, FaInstagram, FaLinkedin, FaWhatsapp, FaYoutube } from 'react-icons/fa';

// const Footer = () => {
//   return (
//     <footer className="bg-gradient-to-r from-[#7B1FCF] to-[#7EC0E4] py-16 px-6">
//       <div className="max-w-7xl mx-auto">

//         <div className="grid md:grid-cols-4 gap-12 mb-12">

//           {/* Logo & Contact Info */}
//           <div className="flex flex-col items-start">

//             {/* BIG LOGO */}
//             <div className="w-36 h-36 bg-[#FF7F50] rounded-full flex items-center justify-center shadow-xl mb-6">
//               <img
//                 src={FooterData.logo}
//                 alt="Embryon Logo"
//                 className="w-32 h-32 object-contain"
//               />
//             </div>

//             {/* CONTACT SECTION — SMALL, CLEAN, ORGANIZED */}
//             <div className="space-y-2">

//               <p className="text-white/90 text-base font-medium leading-relaxed">
//                 {FooterData.address}
//               </p>

//               <p className="text-white/90 text-base font-medium leading-relaxed">
//                 {FooterData.workingDays}
//               </p>

//               <p className="text-white text-lg font-semibold pt-2">
//                 {FooterData.hotline}
//               </p>

//               <p className="text-white text-lg font-semibold">
//                 {FooterData.tollFree}
//               </p>

//               <p className="text-white text-lg font-semibold">
//                 {FooterData.email}
//               </p>

//             </div>
//           </div>

//           {/* Services */}
//           <div>
//             <h4 className="font-heading font-bold text-white text-xl mb-4 uppercase tracking-wide border-b border-white/30 pb-1">
//               Our Services
//             </h4>
//             <ul className="space-y-3">
//               {FooterData.services.map((service: string, i: number) => (
//                 <li
//                   key={i}
//                   className="text-white/85 text-base font-medium hover:text-[#FF7F50] cursor-pointer transition"
//                 >
//                   {service}
//                 </li>
//               ))}
//             </ul>
//           </div>

//           {/* Quick Links */}
//           <div>
//             <h4 className="font-heading font-bold text-white text-xl mb-4 uppercase tracking-wide border-b border-white/30 pb-1">
//               Quick Links
//             </h4>
//             <ul className="space-y-3">
//               {FooterData.pages.map((page: string, i: number) => (
//                 <li
//                   key={i}
//                   className="text-white/85 text-base font-medium hover:text-[#FF7F50] cursor-pointer transition"
//                 >
//                   {page}
//                 </li>
//               ))}
//             </ul>
//           </div>

//           {/* Social Icons – Portrait */}
//           <div>
//             <h4 className="font-heading font-bold text-white text-xl mb-4 uppercase tracking-wide border-b border-white/30 pb-1">
//               Follow Us
//             </h4>

//             <div className="flex flex-col gap-5 mt-4">
//               <FaFacebook className="w-10 h-10 text-white/85 hover:text-[#FF7F50] transition cursor-pointer" />
//               <FaInstagram className="w-10 h-10 text-white/85 hover:text-[#FF7F50] transition cursor-pointer" />
//               <FaLinkedin className="w-10 h-10 text-white/85 hover:text-[#FF7F50] transition cursor-pointer" />
//               <FaWhatsapp className="w-10 h-10 text-white/85 hover:text-[#FF7F50] transition cursor-pointer" />
//               <FaYoutube className="w-10 h-10 text-white/85 hover:text-[#FF7F50] transition cursor-pointer" />
//             </div>
//           </div>

//         </div>

//         {/* Bottom Bar */}
//         <div className="border-t border-white/20 pt-6">
//           <div className="flex flex-col md:flex-row justify-between items-center gap-4">
//             <p className="text-white/75 text-sm font-medium">
//               © 2025 Embryon Fertility LLC — All Rights Reserved
//             </p>

//             <div className="flex gap-4">
//               <a
//                 href="#"
//                 className="text-white/75 text-sm font-medium hover:text-[#FF7F50] transition"
//               >
//                 Privacy Policy
//               </a>
//               <span className="text-white/40">|</span>
//               <a
//                 href="#"
//                 className="text-white/75 text-sm font-medium hover:text-[#FF7F50] transition"
//               >
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

// import { FooterData } from '../Shared/Consts';
// import { FaFacebook, FaInstagram, FaLinkedin, FaWhatsapp, FaYoutube } from 'react-icons/fa';

// const Footer = () => {
//   return (
//     <footer className="bg-gradient-to-r from-[#6AA3D9] to-[#6A0FBF] py-16 px-8">
//       <div className="max-w-7xl mx-auto">

//         <div className="grid md:grid-cols-4 gap-12 mb-12">

//           {/* ======================= LOGO + CONTACT ======================= */}
//           <div>
//             <div className="flex items-center gap-4 mb-8">
//               {/* ⭐ LOGO ONLY — NO BACKGROUND CIRCLE */}
//               <img
//                 src={FooterData.logo}
//                 alt="Embryon Logo"
//                 className="w-48 h-48 object-contain drop-shadow-2xl"
//               />
//             </div>

//             {/* CONTACT SECTION */}
//             <div className="space-y-2">
//               <p className="text-white/90 text-lg font-medium">{FooterData.address}</p>
//               <p className="text-white/90 text-lg font-medium">{FooterData.workingDays}</p>

//               <p className="text-white/90 text-xl font-semibold mt-3">{FooterData.hotline}</p>
//               <p className="text-white/90 text-xl font-semibold">{FooterData.tollFree}</p>
//               <p className="text-white/90 text-xl font-semibold">{FooterData.email}</p>
//             </div>
//           </div>

//           {/* ======================= OUR SERVICES ======================= */}
//           <div>
//             <h4 className="text-white text-2xl font-bold uppercase tracking-wider">
//               Our Services
//             </h4>
//             <div className="w-20 h-[3px] bg-white/40 mt-2 mb-5"></div>

//             <ul className="space-y-3">
//               {FooterData.services.map((service, i) => (
//                 <li
//                   key={i}
//                   className="text-white/85 text-lg font-medium hover:text-[#FF7F50] cursor-pointer transition"
//                 >
//                   {service}
//                 </li>
//               ))}
//             </ul>
//           </div>

//           {/* ======================= QUICK LINKS ======================= */}
//           <div>
//             <h4 className="text-white text-2xl font-bold uppercase tracking-wider">
//               Quick Links
//             </h4>
//             <div className="w-20 h-[3px] bg-white/40 mt-2 mb-5"></div>

//             <ul className="space-y-3">
//               {FooterData.pages.map((page, i) => (
//                 <li
//                   key={i}
//                   className="text-white/85 text-lg font-medium hover:text-[#FF7F50] cursor-pointer transition"
//                 >
//                   {page}
//                 </li>
//               ))}
//             </ul>
//           </div>

//           {/* ======================= FOLLOW US ======================= */}
//           <div>
//             <h4 className="text-white text-2xl font-bold uppercase tracking-wider">
//               Follow Us
//             </h4>
//             <div className="w-20 h-[3px] bg-white/40 mt-2 mb-5"></div>

//             <div className="flex flex-col gap-6 mt-4">
//               <FaFacebook className="w-10 h-10 text-white/85 hover:text-[#FF7F50] transition cursor-pointer" />
//               <FaInstagram className="w-10 h-10 text-white/85 hover:text-[#FF7F50] transition cursor-pointer" />
//               <FaLinkedin className="w-10 h-10 text-white/85 hover:text-[#FF7F50] transition cursor-pointer" />
//               <FaWhatsapp className="w-10 h-10 text-white/85 hover:text-[#FF7F50] transition cursor-pointer" />
//               <FaYoutube className="w-10 h-10 text-white/85 hover:text-[#FF7F50] transition cursor-pointer" />
//             </div>
//           </div>
//         </div>

//         {/* ======================= BOTTOM BAR ======================= */}
//         <div className="border-t border-white/20 pt-8">
//           <div className="flex flex-col md:flex-row justify-between items-center gap-6">
//             <p className="text-white/80 text-lg font-medium">
//               © 2025 Embryon Fertility LLC — All Rights Reserved
//             </p>

//             <div className="flex gap-6">
//               <a href="#" className="text-white/80 text-lg font-medium hover:text-[#FF7F50] transition">
//                 Privacy Policy
//               </a>
//               <span className="text-white/50">|</span>
//               <a href="#" className="text-white/80 text-lg font-medium hover:text-[#FF7F50] transition">
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

// import { FooterData } from '../Shared/Consts';
// import { FaFacebook, FaInstagram, FaLinkedin, FaWhatsapp, FaYoutube } from 'react-icons/fa';

// const Footer = () => {
//   return (
//     <footer className="bg-gradient-to-r from-[#3A5A8C] to-[#3A047A] py-10 px-6">
//       <div className="max-w-7xl mx-auto">

//         <div className="grid md:grid-cols-4 gap-8 mb-10">

//           {/* ======================= LOGO + CONTACT ======================= */}
//           <div>
//             <div className="flex items-center gap-4 mb-6">
//               <img
//                 src={FooterData.logo}
//                 alt="Embryon Logo"
//                 className="w-40 h-40 object-contain drop-shadow-xl"
//               />
//             </div>

//             {/* CONTACT SECTION */}
//             <div className="space-y-1 text-white">
//               <p className="text-base">{FooterData.address}</p>
//               <p className="text-base">{FooterData.workingDays}</p>

//               <p className="text-lg font-semibold mt-2">{FooterData.hotline}</p>
//               <p className="text-lg font-semibold">{FooterData.tollFree}</p>
//               <p className="text-lg font-semibold">{FooterData.email}</p>
//             </div>
//           </div>

//           {/* ======================= OUR SERVICES ======================= */}
//           <div>
//             <h4 className="text-white text-lg font-semibold uppercase tracking-wide">
//               Our Services
//             </h4>
//             <div className="w-16 h-[2px] bg-white/40 mt-1 mb-3"></div>

//             <ul className="space-y-2">
//               {FooterData.services.map((service, i) => (
//                 <li
//                   key={i}
//                   className="text-white text-base hover:text-[#FF7F50] cursor-pointer transition"
//                 >
//                   {service}
//                 </li>
//               ))}
//             </ul>
//           </div>

//           {/* ======================= QUICK LINKS ======================= */}
//           <div>
//             <h4 className="text-white text-lg font-semibold uppercase tracking-wide">
//               Quick Links
//             </h4>
//             <div className="w-16 h-[2px] bg-white/40 mt-1 mb-3"></div>

//             <ul className="space-y-2">
//               {FooterData.pages.map((page, i) => (
//                 <li
//                   key={i}
//                   className="text-white text-base hover:text-[#FF7F50] cursor-pointer transition"
//                 >
//                   {page}
//                 </li>
//               ))}
//             </ul>
//           </div>

//           {/* ======================= FOLLOW US ======================= */}
//           <div>
//             <h4 className="text-white text-lg font-semibold uppercase tracking-wide">
//               Follow Us
//             </h4>
//             <div className="w-16 h-[2px] bg-white/40 mt-1 mb-3"></div>

//             {/* Icons Horizontal */}
//             <div className="flex items-center gap-5 mt-3">
//               <FaFacebook className="w-7 h-7 text-white hover:text-[#FF7F50] transition cursor-pointer" />
//               <FaInstagram className="w-7 h-7 text-white hover:text-[#FF7F50] transition cursor-pointer" />
//               <FaLinkedin className="w-7 h-7 text-white hover:text-[#FF7F50] transition cursor-pointer" />
//               <FaWhatsapp className="w-7 h-7 text-white hover:text-[#FF7F50] transition cursor-pointer" />
//               <FaYoutube className="w-7 h-7 text-white hover:text-[#FF7F50] transition cursor-pointer" />
//             </div>
//           </div>
//         </div>

//         {/* ======================= BOTTOM BAR ======================= */}
//         <div className="border-t border-white/20 pt-5">
//           <div className="flex flex-col md:flex-row justify-between items-center gap-4">
//             <p className="text-white/80 text-base">
//               © 2025 Embryon Fertility LLC — All Rights Reserved
//             </p>

//             <div className="flex gap-4">
//               <a href="#" className="text-white/80 text-base hover:text-[#FF7F50] transition">
//                 Privacy Policy
//               </a>
//               <span className="text-white/40">|</span>
//               <a href="#" className="text-white/80 text-base hover:text-[#FF7F50] transition">
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


import { FooterData } from '../Shared/Consts';
import { FaFacebook, FaInstagram, FaLinkedin, FaWhatsapp, FaYoutube } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-[#F3F3F3] py-10 px-6">
      <div className="max-w-7xl mx-auto">

        <div className="grid md:grid-cols-4 gap-8 mb-10">

          {/* ======================= LOGO + CONTACT ======================= */}
          <div>
            <div className="flex items-center gap-4 mb-6">
              <img
                src={FooterData.logo}
                alt="Embryon Logo"
                className="w-40 h-40 object-contain"
              />
            </div>

            {/* CONTACT SECTION */}
            <div className="space-y-1 text-[#1A1A1A]">
              <p className="text-base">{FooterData.address}</p>
              <p className="text-base">{FooterData.workingDays}</p>

              <p className="text-lg font-semibold mt-2">{FooterData.hotline}</p>
              <p className="text-lg font-semibold">{FooterData.tollFree}</p>
              <p className="text-lg font-semibold">{FooterData.email}</p>
            </div>
          </div>

          {/* ======================= OUR SERVICES ======================= */}
          <div>
            <h4 className="text-[#1A1A1A] text-lg font-semibold uppercase tracking-wide">
              Our Services
            </h4>
            <div className="w-16 h-[2px] bg-black/20 mt-1 mb-3"></div>

            <ul className="space-y-2">
              {FooterData.services.map((service, i) => (
                <li
                  key={i}
                  className="text-[#1A1A1A] text-base hover:text-[#FF7F50] cursor-pointer transition"
                >
                  {service}
                </li>
              ))}
            </ul>
          </div>

          {/* ======================= QUICK LINKS ======================= */}
          <div>
            <h4 className="text-[#1A1A1A] text-lg font-semibold uppercase tracking-wide">
              Quick Links
            </h4>
            <div className="w-16 h-[2px] bg-black/20 mt-1 mb-3"></div>

            <ul className="space-y-2">
              {FooterData.pages.map((page, i) => (
                <li
                  key={i}
                  className="text-[#1A1A1A] text-base hover:text-[#FF7F50] cursor-pointer transition"
                >
                  {page}
                </li>
              ))}
            </ul>
          </div>

          {/* ======================= FOLLOW US ======================= */}
          <div>
            <h4 className="text-[#1A1A1A] text-lg font-semibold uppercase tracking-wide">
              Follow Us
            </h4>
            <div className="w-16 h-[2px] bg-black/20 mt-1 mb-3"></div>

            {/* Icons Horizontal */}
            <div className="flex items-center gap-5 mt-3">
              <FaFacebook className="w-7 h-7 text-[#1A1A1A] hover:text-[#FF7F50] transition cursor-pointer" />
              <FaInstagram className="w-7 h-7 text-[#1A1A1A] hover:text-[#FF7F50] transition cursor-pointer" />
              <FaLinkedin className="w-7 h-7 text-[#1A1A1A] hover:text-[#FF7F50] transition cursor-pointer" />
              <FaWhatsapp className="w-7 h-7 text-[#1A1A1A] hover:text-[#FF7F50] transition cursor-pointer" />
              <FaYoutube className="w-7 h-7 text-[#1A1A1A] hover:text-[#FF7F50] transition cursor-pointer" />
            </div>
          </div>
        </div>

        {/* ======================= BOTTOM BAR ======================= */}
        <div className="border-t border-black/20 pt-5">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-[#1A1A1A]/80 text-base">
              © 2025 Embryon Fertility LLC — All Rights Reserved
            </p>

            <div className="flex gap-4">
              <a href="#" className="text-[#1A1A1A]/80 text-base hover:text-[#FF7F50] transition">
                Privacy Policy
              </a>
              <span className="text-[#1A1A1A]/40">|</span>
              <a href="#" className="text-[#1A1A1A]/80 text-base hover:text-[#FF7F50] transition">
                Terms of Service
              </a>
            </div>
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
