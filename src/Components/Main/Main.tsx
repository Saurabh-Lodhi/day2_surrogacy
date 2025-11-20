// import Home from '@/Components/Main/Home/Home';
// import Services from './Services/Services';
// import Doctors from './Doctors/Doctors';
// import Reviews from './Review/Reviews';

// const Main = () => {
//   return (
//     <div className="m-auto max-w-[1250px] px-5 md:px-16">
//       <Home />
//       <Services />
//       <Doctors />
//       <Reviews />
//     </div>
//   );
// };

// export default Main;

// import Hero from '../Main/Hero';
// import About from '../Main/About';
// import Services from '../Main/Services';
// import FAQ from '../Main/FAQ';
// import Contact from '../Main/Contact';

// const Main = () => {
//   return (
//     <main className="pt-20">
//       <Hero />
//       <About />
//       <Services />
//       <FAQ />
//       <Contact />
//     </main>
//   );
// };

// export default Main;
// import Hero from "../Main/Hero";
// import About from "../Main/About";
// import Services from "../Main/Services";
// import FAQ from "../Main/FAQ";
// import Contact from "../Main/Contact";
// import { motion } from "framer-motion";

// const Main = () => {
//   return (
//     <main className="w-full pt-20 overflow-hidden">

//       {/* Smooth fade-in page container */}
//       <motion.div
//         initial={{ opacity: 0 }}
//         animate={{ opacity: 1 }}
//         transition={{ duration: 0.6 }}
//         className="flex flex-col gap-32 md:gap-40"
//       >
//         {/* Hero (F-Pattern) */}
//         <section className="scroll-mt-20">
//           <Hero />
//         </section>

//         {/* About (Z-Pattern) */}
//         <section className="scroll-mt-24">
//           <About />
//         </section>

//         {/* Services (F-Pattern) */}
//         <section className="scroll-mt-24">
//           <Services />
//         </section>

//         {/* FAQ (F-Pattern) */}
//         <section className="scroll-mt-24">
//           <FAQ />
//         </section>

//         {/* Contact (Z-Pattern) */}
//         <section className="scroll-mt-24">
//           <Contact />
//         </section>
//       </motion.div>

//     </main>
//   );
// };

// export default Main;


// src/Components/Main/Main.tsx
import Hero from "../Main/Hero";
import About from "../Main/About";
import Services from "../Main/Services";
import FAQ from "../Main/FAQ";
import Contact from "../Main/Contact";
import { motion } from "framer-motion";

const Main = () => {
  return (
    <main className="w-full pt-20 overflow-hidden">
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.6 }} className="flex flex-col gap-32 md:gap-40">
        <section className="scroll-mt-20">
          <Hero />
        </section>

        <div className="w-full h-[1px] bg-[#E8EEF6] opacity-60" />

        <section className="scroll-mt-24">
          <About />
        </section>

        <div className="w-full h-[1px] bg-[#E8EEF6] opacity-60" />

        <section className="scroll-mt-24">
          <Services />
        </section>

        <div className="w-full h-[1px] bg-[#E8EEF6] opacity-60" />

        <section className="scroll-mt-24">
          <FAQ />
        </section>

        <div className="w-full h-[1px] bg-[#E8EEF6] opacity-60" />

        <section className="scroll-mt-24">
          <Contact />
        </section>
      </motion.div>
    </main>
  );
};

export default Main;
