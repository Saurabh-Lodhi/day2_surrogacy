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


import { Bars3Icon, XMarkIcon } from '@heroicons/react/20/solid';
import { SelectedPage } from '../Shared/Types';
import { useState } from 'react';
import useMediaQuery from '../../Hooks/useMediaQuery';
import Link from './Link';
import { links } from '../Shared/Consts';

type Props = {
  flexBetween: string;
  selectedPage: SelectedPage;
  setSelectedPage: (value: SelectedPage) => void;
  isTopOfPage: boolean;
};

const NavBar = ({ flexBetween, selectedPage, setSelectedPage, isTopOfPage }: Props) => {
  const [isMenuToggled, setIsMenuToggled] = useState<boolean>(false);
  const isAboveMediumScreens = useMediaQuery('(min-width: 900px)');

  return (
    <nav>
      {isAboveMediumScreens && (
        <div className={`${flexBetween} lg:gap-28 gap-20`}>
          {/* Desktop Links */}
          <div className={`${flexBetween} gap-16`}>
            {links.map((link) => (
              <Link 
                key={link}
                page={link}
                selectedPage={selectedPage}
                setSelectedPage={setSelectedPage}
                isTopOfPage={isTopOfPage}
              />
            ))}
          </div>

          {/* Button */}
          <button className={`
            px-6 py-2 rounded-full font-bold transition
            ${isTopOfPage ? "bg-primary text-white" : "bg-white text-primary"}
          `}>
            Get Started
          </button>
        </div>
      )}

      {/* Mobile Menu Button */}
      {!isAboveMediumScreens && (
        <button onClick={() => setIsMenuToggled(prev => !prev)}>
          <Bars3Icon className={`h-8 w-8 ${isTopOfPage ? "text-[#1d4d85]" : "text-white"}`} />
        </button>
      )}

      {/* Mobile Menu */}
      {!isAboveMediumScreens && isMenuToggled && (
        <div className="fixed right-0 top-0 z-40 h-80 rounded-es-3xl w-[175px] md:w-[300px] bg-secondary drop-shadow-2xl">
          <div className="flex justify-end p-5 md:pr-16 sm:pt-10">
            <button onClick={() => setIsMenuToggled(prev => !prev)}>
              <XMarkIcon className="h-10 w-10" />
            </button>
          </div>

          <div className="ml-[20%] flex flex-col items-start gap-5 text-2xl">
            {links.map((link) => (
              <Link
                key={link}
                page={link}
                selectedPage={selectedPage}
                setSelectedPage={setSelectedPage}
                isTopOfPage={true} // mobile menu always blue text
              />
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default NavBar;
