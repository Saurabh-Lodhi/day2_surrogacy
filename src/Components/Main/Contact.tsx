
import { useState, ChangeEvent } from "react";
import { SelectedPage } from "../Shared/Types";
import { motion } from "framer-motion";
import Reveal from "../Shared/Reveal";
import bgImage from "../../assets/Images/iStockImages/about4.jpg";

import { saveContact } from "../../../src/services/contactService"; 
import { CreateContactRequest } from "../../../src/types/contact";

const Contact = () => {
  const [formData, setFormData] = useState<CreateContactRequest>({
    firstName: "",
    lastName: "",
    email: "",
    phone: null,
    preferredContact: null,
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [responseMsg, setResponseMsg] = useState("");

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async () => {
    setLoading(true);
    setResponseMsg("");

    try {
      const payload = {
        ...formData,
        phone: formData.phone || null,
        preferredContact: formData.preferredContact || null,
      };

      await saveContact(payload);

      setResponseMsg("Your message has been sent successfully!");

      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        phone: null,
        preferredContact: null,
        message: "",
      });
    } catch (err) {
      console.error(err);
      setResponseMsg("Error sending your message. Please try again later.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section
      id={SelectedPage.Contact}
      className="relative w-full py-28 px-6 md:px-12 lg:px-16 scroll-mt-24 bg-fixed bg-center"
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      <div className="absolute inset-0 bg-black/50 backdrop-blur-sm" />
      <div className="relative z-10 max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">
        <Reveal>
          <div className="p-10 rounded-3xl shadow-medium bg-white/95 border border-white/30">

            <h2 className="text-4xl font-heading font-bold text-[#1A3D7C] uppercase tracking-wide mb-4">
              Contact Us
            </h2>

            <div className="w-24 h-1 bg-[#FF7F50] rounded-full mb-6" />
            <p className="text-lg italic text-[#1A3D7C]/80 mb-6">
              Start your fertility journey with confidence
            </p>

            <div className="grid grid-cols-2 gap-6">

              <input
                name="firstName"
                value={formData.firstName}
                onChange={handleChange}
                placeholder="First Name *"
                className="p-4 border-2 border-[#1A3D7C] rounded-lg bg-white shadow-sm"
              />

              <input
                name="lastName"
                value={formData.lastName}
                onChange={handleChange}
                placeholder="Last Name *"
                className="p-4 border-2 border-[#1A3D7C] rounded-lg bg-white shadow-sm"
              />

              <input
                name="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Your Email *"
                className="col-span-2 p-4 border-2 border-[#1A3D7C] rounded-lg bg-white shadow-sm"
              />

              <input
                name="phone"
                type="tel"
                value={formData.phone ?? ""}
                onChange={handleChange}
                placeholder="Phone Number"
                className="col-span-2 p-4 border-2 border-[#1A3D7C] rounded-lg bg-white shadow-sm"
              />

              <select
                name="preferredContact"
                value={formData.preferredContact ?? ""}
                onChange={handleChange}
                className="col-span-2 p-4 border-2 border-[#1A3D7C] rounded-lg bg-white shadow-sm"
              >
                <option value="">Preferred Method of Contact</option>
                <option value="email">Email</option>
                <option value="phone">Phone</option>
                <option value="whatsapp">WhatsApp</option>
              </select>

              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Your Message *"
                rows={5}
                className="col-span-2 p-4 border-2 border-[#1A3D7C] rounded-lg bg-white shadow-sm resize-none"
              />

              <motion.button
                whileHover={{ scale: 1.04 }}
                disabled={loading}
                onClick={handleSubmit}
                className="col-span-2 w-full py-4 bg-gradient-to-r from-[#FF7F50] to-[#FF986A] text-white text-xl font-bold rounded-lg shadow-medium"
              >
                {loading ? "Submitting..." : "Submit Request"}
              </motion.button>

              {responseMsg && (
                <p className="col-span-2 text-center text-lg font-semibold text-[#1A3D7C] pt-2">
                  {responseMsg}
                </p>
              )}

            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
};

export default Contact;
