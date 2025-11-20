

// src/Components/Main/Services.tsx
import { SelectedPage } from "../Shared/Types";
import { services } from "../Shared/Consts";
import { motion } from "framer-motion";
import Reveal from "../Shared/Reveal";

// Images
import img1 from "../../assets/Images/iStockImages/service1.jpg";
import img2 from "../../assets/Images/iStockImages/service2.jpg";
import img3 from "../../assets/Images/iStockImages/service3.jpg";

const servicesImages = [img1, img2, img3];

const Services = () => {
  return (
    <section id={SelectedPage.Services} className="py-28 px-6 md:px-12 lg:px-16 scroll-mt-24 bg-white">
      <div className="max-w-7xl mx-auto">
        <Reveal>
          <div className="text-center mb-20 max-w-3xl mx-auto">
            <h2 className="font-heading text-5xl font-extrabold text-[#1A3D7C] tracking-wide uppercase mb-4">Our Services</h2>
            <div className="w-24 h-1 bg-[#FF7F50] mx-auto rounded-full" />
            <p className="font-subtitle text-2xl italic text-[#1A3D7C]/90 mt-4">Personalized Journeys to Parenthood Designed for You</p>
          </div>
        </Reveal>

        <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-14">
         {services.map((service, index: number) => (
            <Reveal key={index} delay={index * 0.08}>
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: index * 0.08 }}
                whileHover={{ scale: 1.04 }}
                className="relative bg-white/60 backdrop-blur-xl rounded-[1.25rem] shadow-medium border border-[#1A3D7C10] overflow-hidden cursor-pointer group"
              >
                <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-[#FF7F50] to-[#1A3D7C]" />

                <div className="w-full h-52 overflow-hidden rounded-t-[1.25rem]">
                  <img src={servicesImages[index]} alt={service.title} className="w-full h-full object-cover transition-transform duration-700 hover:scale-[1.06]" />
                </div>

                <div className="p-6">
                  <div className="text-5xl mb-4 text-[#1A3D7C]">{service.icon}</div>
                  <h3 className="font-heading text-2xl font-bold mb-3 text-[#1A3D7C]">{service.title}</h3>
                  <p className="font-body text-[#1A3D7C] opacity-85 leading-relaxed mb-6">{service.description}</p>

                  <motion.button
                    whileHover={{ scale: 1.06, boxShadow: "0 10px 25px rgba(255,127,80,0.25)" }}
                    className="mt-2 px-5 py-3 rounded-lg font-bold bg-gradient-to-r from-[#1A3D7C] to-[#FF7F50] text-white"
                  >
                    Learn More →
                  </motion.button>
                </div>
              </motion.div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.2}>
          <div className="w-screen relative left-1/2 right-1/2 -mx-[50vw] mt-24">
            <div className="w-full py-16 text-center bg-gradient-to-r from-[#1A3D7C] to-[#0A0F14] text-white shadow-heavy">
              <h3 className="font-heading text-4xl font-bold mb-6">Comprehensive Fertility Services</h3>
              <p className="font-body text-lg max-w-4xl mx-auto opacity-90 leading-relaxed mb-10">
                From IVF and egg donation to surrogacy, our integrated care model ensures a smooth, fully supported, and cost-effective journey toward parenthood.
              </p>
              <motion.button whileHover={{ scale: 1.05 }} className="px-12 py-4 rounded-full font-bold bg-gradient-to-r from-[#1A3D7C] to-[#FF7F50] shadow-medium">
                Schedule Your Appointment
              </motion.button>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
};

export default Services;
