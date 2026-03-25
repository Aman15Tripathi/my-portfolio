import  { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';
import emailjs from "@emailjs/browser";

const Contact = () => {

  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    const formElement = e.target;

    const formData = {
      name: formElement[0].value,
      email: formElement[1].value,
      message: formElement[2].value,
    };

    emailjs.send(
      "service_qhl816b",
      "template_js2yfyg",
      formData,
      "3rJF2SDC1rsuZ5pRE"
    )
    .then(() => {
      alert("Message sent ✅");
      formElement.reset();
    })
    .catch((error) => {
      console.log(error);
      alert("Failed to send ❌");
    });
  };

  return (
    <section
      id="contact"
      className="min-h-screen flex items-center bg-gradient-to-r from-[#232526] to-[#414345] text-white px-5 py-20"
    >
      <div className="max-w-[800px] mx-auto text-center w-full">

        {/* TITLE */}
        <h2
          className="text-3xl md:text-4xl text-[#00d4ff] mb-5 drop-shadow-[0_0_10px_#00d4ff]"
          data-aos="fade-up"
        >
          Get In Touch
        </h2>

        {/* TEXT */}
        <p
          className="text-[1.1rem] text-gray-300 mb-10"
          data-aos="fade-up"
          data-aos-delay="200"
        >
          Whether you have a question, want to collaborate, or just want to say hi — I’ll try my best to get back to you!
        </p>

        {/* FORM */}
        <form
          onSubmit={handleSubmit}
          className="flex flex-col gap-4"
          data-aos="fade-up"
          data-aos-delay="400"
        >
          <input
            type="text"
            placeholder="Your Name"
            required
            className="px-4 py-3 rounded-lg bg-white/10 text-white placeholder-gray-400 backdrop-blur-md outline-none"
          />

          <input
            type="email"
            placeholder="Your Email"
            required
            className="px-4 py-3 rounded-lg bg-white/10 text-white placeholder-gray-400 backdrop-blur-md outline-none"
          />

          <textarea
            placeholder="Your Message"
            rows="5"
            required
            className="px-4 py-3 rounded-lg bg-white/10 text-white placeholder-gray-400 backdrop-blur-md outline-none"
          ></textarea>

          <button
            type="submit"
            className="py-3 bg-[#00d4ff] text-black font-bold rounded-lg shadow-[0_0_10px_#00d4ff] hover:bg-white hover:shadow-[0_0_20px_#00d4ff] transition duration-300"
          >
            Send Message
          </button>
        </form>

        {/* ICONS */}
        <div
          className="mt-8 flex justify-center gap-6 text-[#00d4ff] text-2xl"
          data-aos="fade-up"
          data-aos-delay="600"
        >
          <a href="mailto:amantripathineel@gmail.com" target="_blank" rel="noopener noreferrer"
            className="hover:text-white transition">
            <FaEnvelope />
          </a>

          <a href="https://github.com/Aman15tripathi" target="_blank" rel="noopener noreferrer"
            className="hover:text-white transition">
            <FaGithub />
          </a>

          <a href="https://linkedin.com/in/AmanTripathi" target="_blank" rel="noopener noreferrer"
            className="hover:text-white transition">
            <FaLinkedin />
          </a>
        </div>

      </div>
    </section>
  );
};

export default Contact;