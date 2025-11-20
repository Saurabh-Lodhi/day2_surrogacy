// import Logo from '@/assets/Images/Logo.png';
// import NavBar from './NavBar';
// import { useState, useEffect } from 'react';
// import { SelectedPage } from '@/Components/Shared/Types';

// const Header = () => {
//   const [selectedPage, setSelectedPage] = useState<SelectedPage>(
//     SelectedPage.Home
//   );
//   const [isTopOfPage, setIsTopOfPage] = useState<boolean>(true);
//   const flexBetween = 'flex items-center justify-between';

//   useEffect(() => {
//     const handleScroll = () => {
//       if (window.scrollY === 0) {
//         setIsTopOfPage(true);
//         setSelectedPage(SelectedPage.Home);
//       }
//       if (window.scrollY !== 0) setIsTopOfPage(false);
//     };
//     window.addEventListener('scroll', handleScroll);
//     return () => window.removeEventListener('scroll', handleScroll);
//   }, []);

//   return (
//     <div
//       className={`${flexBetween} ${
//         isTopOfPage ? '' : 'bg-[#84ceff]'
//       } transition fixed top-0 z-30 w-full p-5 md:px-16`}
//     >
//       <img className="w-10 sm:w-20" src={Logo} alt="Logo" />
//       <NavBar
//         flexBetween={flexBetween}
//         selectedPage={selectedPage}
//         setSelectedPage={setSelectedPage}
//       />
//     </div>
//   );
// };

// export default Header;

// import { useState, useEffect } from 'react';
// import { SelectedPage } from '../Shared/Types';
// import NavBar from './NavBar';

// const Header = () => {
//   const [selectedPage, setSelectedPage] = useState<SelectedPage>(
//     SelectedPage.Home
//   );
//   const [isTopOfPage, setIsTopOfPage] = useState<boolean>(true);
//   const flexBetween = 'flex items-center justify-between';

//   useEffect(() => {
//     const handleScroll = () => {
//       if (window.scrollY === 0) {
//         setIsTopOfPage(true);
//         setSelectedPage(SelectedPage.Home);
//       }
//       if (window.scrollY !== 0) setIsTopOfPage(false);
//     };
//     window.addEventListener('scroll', handleScroll);
//     return () => window.removeEventListener('scroll', handleScroll);
//   }, []);

//   return (
//     <div
//       className={`${flexBetween} ${
//         isTopOfPage ? '' : 'bg-[#84ceff]'
//       } transition fixed top-0 z-30 w-full p-5 md:px-16`}
//     >
//       <div className="flex items-center gap-2">
//         <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center">
//           <span className="text-white text-2xl">❤️</span>
//         </div>
//         <div>
//           <h1 className="text-lg sm:text-xl font-bold text-[#1d4d85]">
//             Ukraine Fertility
//           </h1>
//           <p className="text-xs text-[#1d4d85]">Your Journey to Parenthood</p>
//         </div>
//       </div>
//       <NavBar
//         flexBetween={flexBetween}
//         selectedPage={selectedPage}
//         setSelectedPage={setSelectedPage}
//       />
//     </div>
//   );
// };

// export default Header;
// export default Header;
// import { useState, useEffect } from 'react';
// import { SelectedPage } from '../Shared/Types';
// import NavBar from './NavBar';

// const Header = () => {
//   const [selectedPage, setSelectedPage] = useState<SelectedPage>(SelectedPage.Home);
//   const [isTopOfPage, setIsTopOfPage] = useState<boolean>(true);
//   const flexBetween = 'flex items-center justify-between';

//   useEffect(() => {
//     const handleScroll = () => {
//       setIsTopOfPage(window.scrollY === 0);
//       if (window.scrollY === 0) setSelectedPage(SelectedPage.Home);
//     };
//     window.addEventListener('scroll', handleScroll);
//     return () => window.removeEventListener('scroll', handleScroll);
//   }, []);

//   return (
//     // <div
//     //   className={`${flexBetween}
//     //     fixed top-0 z-30 w-full p-4 md:px-16
//     //     transition-all duration-300
//     //     ${isTopOfPage ? 'bg-white shadow-none' : 'bg-[#84ceff] shadow-lg'}
//     //   `}
//     // >
//     <div
//   className={`${flexBetween}
//     fixed top-0 z-30 w-full p-4 md:px-16
//     transition-all duration-300
//     ${isTopOfPage ? 'bg-white shadow-none' : 'bg-transparent backdrop-blur-md shadow-md'}
//   `}
// >

//       <div className="flex items-center gap-4">
//         <img
//           src="/logo.png"
//           alt="Logo"
//           className="h-16 md:h-20 w-auto object-contain"
//         />

     
//       </div>

//       <NavBar
//         flexBetween={flexBetween}
//         selectedPage={selectedPage}
//         setSelectedPage={setSelectedPage}
//         // isTopOfPage={isTopOfPage}  // pass state to navbar for color change
//       />
//     </div>
//   );
// };

// export default Header;




// import { useState, useEffect } from 'react';
// import { SelectedPage } from '../Shared/Types';
// import NavBar from './NavBar';

// const Header = () => {
//   const [selectedPage, setSelectedPage] = useState<SelectedPage>(SelectedPage.Home);
//   const [isTopOfPage, setIsTopOfPage] = useState<boolean>(true);

//   const flexBetween = "flex items-center justify-between";

//   useEffect(() => {
//     const handleScroll = () => {
//       const top = window.scrollY === 0;
//       setIsTopOfPage(top);
//       if (top) setSelectedPage(SelectedPage.Home);
//     };

//     window.addEventListener("scroll", handleScroll);
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, []);

//   return (
//     <div
//       className={`${flexBetween}
//         fixed top-0 z-30 w-full p-4 md:px-16
//         transition-all duration-300
//         ${isTopOfPage ? "bg-white shadow-none" : "bg-transparent backdrop-blur-md shadow-md"}
//       `}
//     >
//       {/* Logo */}
//       <div className="flex items-center gap-4">
//         <img
//           src="/logo.png"
//           alt="Logo"
//           className="h-16 md:h-20 w-auto object-contain"
//         />
//       </div>

//       {/* Nav */}
//       <NavBar
//         flexBetween={flexBetween}
//         selectedPage={selectedPage}
//         setSelectedPage={setSelectedPage}
//         isTopOfPage={isTopOfPage}
//       />
//     </div>
//   );
// };

// export default Header;


// import { useState, useEffect } from 'react';
// import { SelectedPage } from '../Shared/Types';
// import NavBar from './NavBar';

// const Header = () => {
//   const [selectedPage, setSelectedPage] = useState<SelectedPage>(
//     SelectedPage.Home
//   );
//   const [isTopOfPage, setIsTopOfPage] = useState<boolean>(true);

//   const flexBetween = 'flex items-center justify-between';

//   useEffect(() => {
//     const handleScroll = () => {
//       const atTop = window.scrollY === 0;
//       setIsTopOfPage(atTop);
//       if (atTop) setSelectedPage(SelectedPage.Home);
//     };

//     window.addEventListener('scroll', handleScroll);
//     return () => window.removeEventListener('scroll', handleScroll);
//   }, []);

//   return (
//     <header
//       className={`${flexBetween}
//         fixed top-0 w-full z-30
//         p-4 md:px-16 transition-all duration-300
//         ${
//           isTopOfPage
//             ? 'bg-white shadow-none'
//             : 'bg-transparent backdrop-blur-md shadow-md'
//         }
//       `}
//     >
//       {/* LOGO SECTION */}
//       <div className="flex items-center gap-4">
//         <img
//           src="/logo.png"
//           alt="Logo"
//           className="h-16 md:h-20 w-auto object-contain"
//         />
        
//       </div>

//       {/* NAVIGATION */}
//       <NavBar
//         flexBetween={flexBetween}
//         selectedPage={selectedPage}
//         setSelectedPage={setSelectedPage}
//         isTopOfPage={isTopOfPage}
//       />
//     </header>
//   );
// };

// export default Header;


// // Updated Header with top strap using provided colors
// import { useState, useEffect } from 'react';
// import { SelectedPage } from '../Shared/Types';
// import NavBar from './NavBar';

// const Header = () => {
//   const [selectedPage, setSelectedPage] = useState<SelectedPage>(SelectedPage.Home);
//   const [isTopOfPage, setIsTopOfPage] = useState<boolean>(true);

//   const flexBetween = 'flex items-center justify-between';

//   useEffect(() => {
//     const handleScroll = () => {
//       const atTop = window.scrollY === 0;
//       setIsTopOfPage(atTop);
//       if (atTop) setSelectedPage(SelectedPage.Home);
//     };

//     window.addEventListener('scroll', handleScroll);
//     return () => window.removeEventListener('scroll', handleScroll);
//   }, []);

//   return (
//     <header className="fixed top-0 w-full z-30">
//      {/* Top Strap */}
// <div className="w-full h-6 bg-gradient-to-r from-[#F3F3F3] to-[#FF7F50]"></div>

//       {/* Main Header */}
//       {/* Main Header */}
// <div
// className={`${flexBetween} p-4 md:px-16 bg-[#4682B4] shadow-md transition-all duration-300`}
// >
//         {/* LOGO SECTION */}
//         <div className="flex items-center gap-4">
//           <img
//             src="/logo.png"
//             alt="Logo"
//             className="h-16 md:h-20 w-auto object-contain"
//           />
//         </div>

//         {/* NAVIGATION */}
//         <NavBar
//           flexBetween={flexBetween}
//           selectedPage={selectedPage}
//           setSelectedPage={setSelectedPage}
//           isTopOfPage={isTopOfPage}
//         />
//       </div>
//     </header>
//   );
// };

// export default Header;



// import { useState, useEffect } from 'react';
// import { SelectedPage } from '../Shared/Types';
// import NavBar from './NavBar';

// const Header = () => {
//   const [selectedPage, setSelectedPage] = useState<SelectedPage>(SelectedPage.Home);
//   const [isTopOfPage, setIsTopOfPage] = useState<boolean>(true);

//   const flexBetween = 'flex items-center justify-between';

//   useEffect(() => {
//     const handleScroll = () => {
//       const atTop = window.scrollY === 0;
//       setIsTopOfPage(atTop);
//       if (atTop) setSelectedPage(SelectedPage.Home);
//     };

//     window.addEventListener('scroll', handleScroll);
//     return () => window.removeEventListener('scroll', handleScroll);
//   }, []);

//   return (
//     <header className="fixed top-0 w-full z-30">



// {/* 🔹 Top Strap */}
// <div className="w-full h-10 bg-gradient-to-r from-[#F3F3F3] to-[#FF7F50] flex items-center justify-between px-4 md:px-16 text-black text-sm font-medium">

//   {/* Left Side – Email + Phone */}
//   <div className="flex items-center gap-6">

//     {/* Email */}
//     <span className="flex items-center gap-2">
//       <svg
//         xmlns="http://www.w3.org/2000/svg"
//         fill="none"
//         viewBox="0 0 24 24"
//         strokeWidth={1.6}
//         stroke="currentColor"
//         className="w-4 h-4"
//       >
//         <path
//           strokeLinecap="round"
//           strokeLinejoin="round"
//           d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
//         />
//       </svg>
//       letstalk@embryon-ukraine.com
//     </span>

//     {/* Phone */}
//     <span className="flex items-center gap-2">
//       <svg
//         xmlns="http://www.w3.org/2000/svg"
//         fill="none"
//         viewBox="0 0 24 24"
//         strokeWidth={1.6}
//         stroke="currentColor"
//         className="w-4 h-4"
//       >
//         <path
//           strokeLinecap="round"
//           strokeLinejoin="round"
//           d="M2.25 6.75c0 8.284 6.716 15 15 15h1.5a2.25 2.25 0 002.25-2.25v-.637c0-.516-.351-.966-.852-1.091l-4.423-1.106a1.125 1.125 0 00-1.173.417l-.97 1.293a.75.75 0 01-.8.269 12.035 12.035 0 01-7.143-7.143.75.75 0 01.27-.8l1.292-.97c.364-.273.527-.739.417-1.173L6.228 3.102A1.125 1.125 0 005.137 2.25H4.5A2.25 2.25 0 002.25 4.5v2.25z"
//         />
//       </svg>
//       Hotline : +380 975972636
//     </span>

//   </div>

//   {/* Right Side – Buttons */}
//   <div className="flex items-center gap-3">

//   {/* Create an Account */}
// <button
//   className="px-4 py-1.5 rounded-full bg-gradient-to-r from-black via-[#FF5A1F] to-[#FF7F50] text-white text-sm font-semibold shadow-sm hover:shadow-md transition-all duration-300"
// >
//   Create an Account
// </button>


//     {/* Schedule a Call */}
//     <button
//       className="flex items-center gap-2 px-4 py-1.5 rounded-full bg-gradient-to-r from-black via-[#FF5A1F] to-[#FF7F50] text-white text-sm font-semibold shadow-sm hover:shadow-md transition-all duration-300"
//     >
//       <svg
//         xmlns="http://www.w3.org/2000/svg"
//         fill="none"
//         viewBox="0 0 24 24"
//         strokeWidth="1.6"
//         stroke="currentColor"
//         className="w-4 h-4"
//       >
//         <path
//           strokeLinecap="round"
//           strokeLinejoin="round"
//           d="M2.25 6.75c0 6.213 5.037 11.25 11.25 11.25h1.125c.621 0 1.152-.45 1.227-1.066l.313-2.502a1.125 1.125 0 0 1 1.12-.982c1.147 0 2.25-.402 3.112-1.177a1.125 1.125 0 0 0 .114-1.59L17.04 8.47a1.125 1.125 0 0 0-1.59-.114c-.775.862-1.177 1.965-1.177 3.112 0 .575-.407 1.058-.982 1.12l-2.502.313A1.125 1.125 0 0 1 9.723 12V10.875C9.723 4.662 4.686 2.25 2.25 2.25Z"
//         />
//       </svg>
//       Schedule a Call
//     </button>

//   </div>

// </div>


// {/* 🔹 Main Header (White, Clean) */}
// <div
//   className={`${flexBetween} p-4 md:px-16 bg-white/90 backdrop-blur-md shadow-md border-b border-gray-200 transition-all duration-300`}
// >
//   {/* LOGO */}
//   <div className="flex items-center gap-4">
//     <img
//       src="/footerLogo.svg"
//       alt="Logo"
//       className="h-16 md:h-20 w-auto object-contain"
//     />
//   </div>

//   {/* NAVIGATION */}
//   <NavBar
//     flexBetween={flexBetween}
//     selectedPage={selectedPage}
//     setSelectedPage={setSelectedPage}
//     isTopOfPage={isTopOfPage}
//   />
// </div>


//     </header>
//   );
// };

// export default Header;


import { useState, useEffect } from "react";
import { SelectedPage } from "../Shared/Types";
import NavBar from "./NavBar";

const Header = () => {
  const [selectedPage, setSelectedPage] = useState<SelectedPage>(
    SelectedPage.Home
  );
  const [isTopOfPage, setIsTopOfPage] = useState<boolean>(true);

  const flexBetween = "flex items-center justify-between";

  useEffect(() => {
    const handleScroll = () => {
      const atTop = window.scrollY === 0;
      setIsTopOfPage(atTop);
      if (atTop) setSelectedPage(SelectedPage.Home);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className="fixed top-0 w-full z-50 shadow-xl">
      
      {/* ================== TOP STRAP ================== */}
      <div className="w-full h-10 bg-gradient-to-r from-[#F3F3F3] to-[#FF7F50] flex items-center justify-between px-4 md:px-14 text-black text-sm font-medium">
        
        {/* LEFT: CONTACT INFO */}
        <div className="flex items-center gap-6">
          {/* Email */}
          <span className="flex items-center gap-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.6}
              stroke="currentColor"
              className="w-4 h-4"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
              />
            </svg>
            letstalk@embryon-ukraine.com
          </span>

          {/* Phone */}
          <span className="flex items-center gap-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.6}
              stroke="currentColor"
              className="w-4 h-4"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M2.25 6.75c0 8.284 6.716 15 15 15h1.5a2.25 2.25 0 002.25-2.25v-.637c0-.516-.351-.966-.852-1.091l-4.423-1.106a1.125 1.125 0 00-1.173.417l-.97 1.293a.75.75 0 01-.8.269 12.035 12.035 0 01-7.143-7.143.75.75 0 01.27-.8l1.292-.97c.364-.273.527-.739.417-1.173L6.228 3.102A1.125 1.125 0 005.137 2.25H4.5A2.25 2.25 0 002.25 4.5v2.25z"
              />
            </svg>
            Hotline : +380 975972636
          </span>
        </div>

        {/* RIGHT: BUTTONS */}
        <div className="flex items-center gap-3">

          {/* Create Account */}
          <button className="px-4 py-1.5 rounded-full bg-gradient-to-r from-black via-[#FF5A1F] to-[#FF7F50] text-white text-sm font-semibold shadow-sm hover:shadow-md transition-all duration-300">
            Create an Account
          </button>

          {/* Schedule Call */}
          <button className="flex items-center gap-2 px-4 py-1.5 rounded-full bg-gradient-to-r from-black via-[#FF5A1F] to-[#FF7F50] text-white text-sm font-semibold shadow-sm hover:shadow-md transition-all duration-300">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.6"
              stroke="currentColor"
              className="w-4 h-4"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M2.25 6.75c0 6.213 5.037 11.25 11.25 11.25h1.125c.621 0 1.152-.45 1.227-1.066l.313-2.502a1.125 1.125 0 0 1 1.12-.982c1.147 0 2.25-.402 3.112-1.177a1.125 1.125 0 0 0 .114-1.59L17.04 8.47a1.125 1.125 0 0 0-1.59-.114c-.775.862-1.177 1.965-1.177 3.112 0 .575-.407 1.058-.982 1.12l-2.502.313A1.125 1.125 0 0 1 9.723 12V10.875C9.723 4.662 4.686 2.25 2.25 2.25Z"
              />
            </svg>
            Schedule a Call
          </button>
        </div>
      </div>

      {/* ================== MAIN HEADER (Z-PATTERN NAV) ================== */}
      <div
        className={`
          ${flexBetween} p-4 md:px-14
          bg-white/90 backdrop-blur-md 
          border-b border-gray-200 shadow-sm
          transition-all duration-300
        `}
      >
        {/* Logo */}
        <div className="flex items-center gap-4">
          <img
            src="/footerLogo.svg"
            alt="Logo"
            className="h-16 md:h-20 w-auto object-contain"
          />
        </div>

        {/* Navbar */}
        <NavBar
          flexBetween={flexBetween}
          selectedPage={selectedPage}
          setSelectedPage={setSelectedPage}
          isTopOfPage={isTopOfPage}
        />
      </div>
    </header>
  );
};

export default Header;
