// import { Bars3Icon, XMarkIcon } from '@heroicons/react/20/solid';
// import { SelectedPage } from '@/Components/Shared/Types';
// import { useState } from 'react';

// import useMediaQuery from '@/Hooks/useMediaQuery';

// import Links from './Links';
// import Button from '../UI/Button';
// type Props = {
//   flexBetween: string;
//   selectedPage: SelectedPage;
//   setSelectedPage: (value: SelectedPage) => void;
// };

// const NavBar = ({ flexBetween, selectedPage, setSelectedPage }: Props) => {
//   const [isMenuToggled, setIsMenuToggled] = useState<boolean>(false);
//   const isAboveMediumScreens = useMediaQuery('(min-width: 900px)');

//   return (
//     <nav>
//       {isAboveMediumScreens && (
//         <div className={`${flexBetween} lg:gap-28 gap-20`}>
//           <div className={`${flexBetween} gap-16`}>
//             <Links
//               selectedPage={selectedPage}
//               setSelectedPage={setSelectedPage}
//             />
//           </div>
//           <Button>Log In</Button>
//         </div>
//       )}
//       {!isAboveMediumScreens && (
//         <button onClick={() => setIsMenuToggled((prev) => !prev)}>
//           <Bars3Icon className="h-8 w-8" />
//         </button>
//       )}
//       {/* MOBILE MENU MODAL */}
//       {!isAboveMediumScreens && isMenuToggled && (
//         <div className="fixed right-0 top-0 z-40 h-80 rounded-es-3xl w-[175px] md:w-[300px] bg-secondary drop-shadow-2xl">
//           {/* CLOSE ICON */}
//           <div className="flex justify-end p-5 md:pr-16 sm:pt-10">
//             <button onClick={() => setIsMenuToggled((prev) => !prev)}>
//               <XMarkIcon className="h-10 w-10" />
//             </button>
//           </div>

//           {/* MENU ITEMS */}
//           <div className=" ml-[20%] flex flex-col items-start gap-5 text-2xl">
//             <Links
//               selectedPage={selectedPage}
//               setSelectedPage={setSelectedPage}
//             />
//           </div>
//         </div>
//       )}
//     </nav>
//   );
// };

// export default NavBar;

// import { Bars3Icon, XMarkIcon } from '@heroicons/react/20/solid';
// import { SelectedPage } from '../Shared/Types';
// import { useState } from 'react';
// import useMediaQuery from '../../Hooks/useMediaQuery';
// import Link from './Link';
// import { links } from '../Shared/Consts';

// type Props = {
//   flexBetween: string;
//   selectedPage: SelectedPage;
//   setSelectedPage: (value: SelectedPage) => void;
// };

// const NavBar = ({ flexBetween, selectedPage, setSelectedPage }: Props) => {
//   const [isMenuToggled, setIsMenuToggled] = useState<boolean>(false);
//   const isAboveMediumScreens = useMediaQuery('(min-width: 900px)');

//   return (
//     <nav>
//       {isAboveMediumScreens && (
//         <div className={`${flexBetween} lg:gap-28 gap-20`}>
//           <div className={`${flexBetween} gap-16`}>
//             {links.map((link) => (
//               <Link
//                 key={link}
//                 page={link}
//                 selectedPage={selectedPage}
//                 setSelectedPage={setSelectedPage}
//               />
//             ))}
//           </div>
//           <button className="bg-primary text-white px-6 py-2 rounded-full font-bold hover:bg-[#0f6ec4] transition">
//             Get Started
//           </button>
//         </div>
//       )}
//       {!isAboveMediumScreens && (
//         <button onClick={() => setIsMenuToggled((prev) => !prev)}>
//           <Bars3Icon className="h-8 w-8" />
//         </button>
//       )}
//       {!isAboveMediumScreens && isMenuToggled && (
//         <div className="fixed right-0 top-0 z-40 h-80 rounded-es-3xl w-[175px] md:w-[300px] bg-secondary drop-shadow-2xl">
//           <div className="flex justify-end p-5 md:pr-16 sm:pt-10">
//             <button onClick={() => setIsMenuToggled((prev) => !prev)}>
//               <XMarkIcon className="h-10 w-10" />
//             </button>
//           </div>
//           <div className="ml-[20%] flex flex-col items-start gap-5 text-2xl">
//             {links.map((link) => (
//               <Link
//                 key={link}
//                 page={link}
//                 selectedPage={selectedPage}
//                 setSelectedPage={setSelectedPage}
//               />
//             ))}
//           </div>
//         </div>
//       )}
//     </nav>
//   );
// };

// export default NavBar;

// import { Bars3Icon, XMarkIcon } from '@heroicons/react/20/solid';
// import { SelectedPage } from '../Shared/Types';
// import { useState } from 'react';
// import useMediaQuery from '../../Hooks/useMediaQuery';
// import Link from './Link';
// import { links } from '../Shared/Consts';

// type Props = {
//   flexBetween: string;
//   selectedPage: SelectedPage;
//   setSelectedPage: (value: SelectedPage) => void;
//   isTopOfPage: boolean;
// };

// const NavBar = ({ flexBetween, selectedPage, setSelectedPage, isTopOfPage }: Props) => {
//   const [isMenuToggled, setIsMenuToggled] = useState<boolean>(false);
//   const isAboveMediumScreens = useMediaQuery('(min-width: 900px)');

//   return (
//     <nav>
//       {isAboveMediumScreens && (
//         <div className={`${flexBetween} lg:gap-28 gap-20`}>

//           {/* Desktop Links */}
//           <div className={`${flexBetween} gap-16`}>
//             {links.map((link) => (
//               <Link
//                 key={link}
//                 page={link}
//                 selectedPage={selectedPage}
//                 setSelectedPage={setSelectedPage}
//                 isTopOfPage={isTopOfPage}
//                 className="
//                   text-lg 
//                   font-semibold 
//                   text-[#1A1A1A] 
//                   hover:text-[#FF7F50]
//                   transition-all 
//                   duration-200
//                 "
//               />
//             ))}
//           </div>

//         </div>
//       )}

//       {/* Mobile Menu Button */}
//       {!isAboveMediumScreens && (
//         <button onClick={() => setIsMenuToggled(prev => !prev)}>
//           <Bars3Icon className="h-8 w-8 text-[#1A1A1A]" />
//         </button>
//       )}

//       {/* Mobile Menu */}
//       {!isAboveMediumScreens && isMenuToggled && (
//         <div className="fixed right-0 top-0 z-40 h-80 rounded-es-3xl w-[175px] md:w-[300px] bg-secondary drop-shadow-2xl">
          
//           {/* Close Button */}
//           <div className="flex justify-end p-5 md:pr-16 sm:pt-10">
//             <button onClick={() => setIsMenuToggled(prev => !prev)}>
//               <XMarkIcon className="h-10 w-10 text-[#1A1A1A]" />
//             </button>
//           </div>

//           {/* Mobile Links */}
//           <div className="ml-[20%] flex flex-col items-start gap-5 text-xl font-semibold">
//             {links.map((link) => (
//               <Link
//                 key={link}
//                 page={link}
//                 selectedPage={selectedPage}
//                 setSelectedPage={setSelectedPage}
//                 isTopOfPage={true}
//                 className="
//                   text-[#1A1A1A]
//                   hover:text-[#FF7F50]
//                   transition-all
//                   duration-200
//                 "
//               />
//             ))}
//           </div>

//         </div>
//       )}
//     </nav>
//   );
// };

// export default NavBar;


import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";
import { SelectedPage } from "../Shared/Types";
import { useState } from "react";
import useMediaQuery from "../../Hooks/useMediaQuery";
import Link from "./Link";
import { links } from "../Shared/Consts";
import { motion } from "framer-motion";

type Props = {
  flexBetween: string;
  selectedPage: SelectedPage;
  setSelectedPage: (value: SelectedPage) => void;
  isTopOfPage: boolean;
};

const NavBar = ({
  flexBetween,
  selectedPage,
  setSelectedPage,
  isTopOfPage,
}: Props) => {
  const [isMenuToggled, setIsMenuToggled] = useState<boolean>(false);
  const isAboveMediumScreens = useMediaQuery("(min-width: 900px)");

  // Desktop underline animation
  const underlineVariants = {
    hidden: { width: 0 },
    visible: { width: "100%" },
  };

  return (
    <nav>
      {/* =================== DESKTOP NAV =================== */}
      {isAboveMediumScreens && (
        <div className={`${flexBetween} lg:gap-28 gap-16`}>
          <div className={`${flexBetween} gap-12`}>
            {links.map((link) => {
              const active = selectedPage === link.toLowerCase();

              return (
                <motion.div
                  key={link}
                  className="relative group"
                  initial="hidden"
                  animate="visible"
                >
                  <Link
                    page={link}
                    selectedPage={selectedPage}
                    setSelectedPage={setSelectedPage}
                    isTopOfPage={isTopOfPage}
                  />

                  {/* Active underline */}
                  {active && (
                    <motion.div
                      variants={underlineVariants}
                      initial="hidden"
                      animate="visible"
                      transition={{ duration: 0.3 }}
                      className="absolute bottom-[-6px] left-0 h-[3px] bg-[#FF7F50] rounded-full"
                    ></motion.div>
                  )}

                  {/* Hover underline */}
                  {!active && (
                    <span className="absolute bottom-[-6px] left-0 w-0 h-[3px] bg-[#FF7F50] rounded-full group-hover:w-full transition-all duration-300"></span>
                  )}
                </motion.div>
              );
            })}
          </div>
        </div>
      )}

      {/* =================== MOBILE MENU BUTTON =================== */}
      {!isAboveMediumScreens && (
        <button
          onClick={() => setIsMenuToggled((prev) => !prev)}
          className="p-2"
        >
          <Bars3Icon className="h-8 w-8 text-[#1A1A1A]" />
        </button>
      )}

      {/* =================== MOBILE MENU PANEL =================== */}
      {!isAboveMediumScreens && isMenuToggled && (
        <motion.div
          initial={{ x: 200 }}
          animate={{ x: 0 }}
          exit={{ x: 200 }}
          transition={{ duration: 0.4, ease: "easeOut" }}
          className="
            fixed right-0 top-0 h-full w-[240px] 
            bg-gradient-to-b from-white to-[#FFEEE2] 
            shadow-2xl z-40 px-6 py-10
            rounded-l-3xl
          "
        >
          {/* Close Button */}
          <div className="flex justify-end mb-10">
            <button onClick={() => setIsMenuToggled(false)}>
              <XMarkIcon className="h-10 w-10 text-[#1A1A1A] hover:text-[#FF7F50] transition" />
            </button>
          </div>

          {/* Mobile Links */}
          <div className="flex flex-col gap-6">
            {links.map((link) => {
              const active = selectedPage === link.toLowerCase();

              return (
                <motion.div key={link} className="relative">
                  <Link
                    page={link}
                    selectedPage={selectedPage}
                    setSelectedPage={setSelectedPage}
                    isTopOfPage={true}
                    className="text-lg font-bold text-[#1A1A1A] hover:text-[#FF7F50] transition"
                  />

                  {/* Mobile active indicator */}
                  {active && (
                    <div className="absolute left-0 top-1/2 -translate-y-1/2 w-2 h-2 bg-[#FF7F50] rounded-full"></div>
                  )}
                </motion.div>
              );
            })}
          </div>
        </motion.div>
      )}
    </nav>
  );
};

export default NavBar;
