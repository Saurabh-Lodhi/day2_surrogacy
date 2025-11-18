// import { SelectedPage } from '@/Components/Shared/Types';
// import AnchorLink from 'react-anchor-link-smooth-scroll';

// type Props = {
//   page: string;
//   selectedPage: SelectedPage;
//   setSelectedPage: (value: SelectedPage) => void;
// };

// const Link = ({ page, selectedPage, setSelectedPage }: Props) => {
//   const lowerCasePage = page.toLowerCase().replace(/\s+/g, '') as SelectedPage;

//   const handleLinkClick = () => {
//     setSelectedPage(lowerCasePage);
//   };

//   return (
//     <AnchorLink
//       className={`${
//         selectedPage === lowerCasePage
//           ? 'text-primary border-b-2 mt-0.5 border-[#2b7dad]'
//           : 'text-[#1d4d85]'
//       } transition font-bold text-lg duration-500 hover:text-[#2b7dad]`}
//       href={`#${lowerCasePage}`}
//       onClick={handleLinkClick}
//     >
//       {page}
//     </AnchorLink>
//   );
// };

// export default Link;


// import { SelectedPage } from '../Shared/Types';
// import AnchorLink from 'react-anchor-link-smooth-scroll';

// type Props = {
//   page: string;
//   selectedPage: SelectedPage;
//   setSelectedPage: (value: SelectedPage) => void;
//   isTopOfPage: boolean;
//     className?: string; // ← ADD THIS
// };

// const Link = ({ page, selectedPage, setSelectedPage, isTopOfPage }: Props) => {
//   const lowerCasePage = page.toLowerCase().replace(/\s+/g, '') as SelectedPage;

//   const isSelected = selectedPage === lowerCasePage;

//   return (
//     <AnchorLink
//       // className={`
//       //   ${isSelected ? "text-primary border-b-2 border-[#2b7dad]" 
//       //   : isTopOfPage ? "text-[#1d4d85]" : "text-white"}
//       //   font-bold text-lg transition duration-300 hover:text-[#2b7dad]
//       // `}
//       className={`
//         transition duration-300 font-semibold
//         ${isTopOfPage ? "text-[#F3F3F3]" : "text-[#F3F3F3]"}
//         ${selectedPage === page ? "underline underline-offset-4" : ""}
//       `}
     
//       href={`#${lowerCasePage}`}
//       onClick={() => setSelectedPage(lowerCasePage)}
//     >
//       {page}
//     </AnchorLink>
//   );
// };

// export default Link;



import { SelectedPage } from '../Shared/Types';
import AnchorLink from 'react-anchor-link-smooth-scroll';

type Props = {
  page: string;
  selectedPage: SelectedPage;
  setSelectedPage: (value: SelectedPage) => void;
  isTopOfPage: boolean;
  className?: string;
};

const Link = ({ page, selectedPage, setSelectedPage }: Props) => {
  const lowerCasePage = page.toLowerCase().replace(/\s+/g, '') as SelectedPage;

  const isSelected = selectedPage === lowerCasePage;

  return (
    <AnchorLink
      className={`
        text-black
        hover:text-[#FF7F50]
        transition duration-300
        font-semibold
        ${isSelected ? "underline underline-offset-4" : ""}
      `}
      href={`#${lowerCasePage}`}
      onClick={() => setSelectedPage(lowerCasePage)}
    >
      {page}
    </AnchorLink>
  );
};

export default Link;
