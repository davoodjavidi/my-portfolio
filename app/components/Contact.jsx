"use client";
import { ArrowRight } from "lucide-react";
import { useState } from "react";
import { motion } from "motion/react";

export default function Contact() {
  const [result, setResult] = useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    formData.append("access_key", "8c67cac8-6b66-4e36-a5ab-1892eee5f4ba");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    const data = await response.json();
    setResult(data.success ? "Message sent successfully!" : "Error");
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.6, delay: 0.3 }}
      id="contact"
      className="px-[12%] py-10 bg-white scroll-mt-20"
    >
      <h4 className="text-center m-2 text-xl">Connect with me</h4>
      <h2 className="text-center text-4xl font-semibold my-4">Get In Touch</h2>
      <p className="text-center max-w-2xl mx-auto">
        I&apos;d love to hear from you! If you have any questions, comments or
        feedback, please use the form below.
      </p>

      <form className=" max-w-2xl mx-auto mb-20" onSubmit={onSubmit}>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-6">
          <motion.input
            initial={{ x: -40 }}
            whileInView={{ x: 0 }}
            transition={{ duration: 1 }}
            type="text"
            placeholder="Enter your Name"
            required
            className="flex-1 p-3 border border-gray-400 text-md caret-fuchsia-600 rounded-md bg-white outline-none"
            name="name"
          />
          <motion.input
            initial={{ x: 40 }}
            whileInView={{ x: 0 }}
            transition={{ duration: 1 }}
            type="text"
            placeholder="Enter your Email"
            required
            className="flex-1 p-3 border border-gray-400 text-md caret-fuchsia-600 rounded-md bg-white outline-none"
            name="email"
          />
        </div>
        <motion.textarea
          initial={{ y: 50 }}
          whileInView={{ y: 0 }}
          transition={{ duration: 1 }}
          rows="6"
          placeholder="Enter Your message"
          required
          className="w-full p-4 bg-white border border-gray-400 ountline-none rounded-md mb-6"
          name="message"
        ></motion.textarea>
        <motion.button
          initial={{ y: 50 }}
          whileInView={{ y: 0 }}
          transition={{ duration: 0.3 }}
          type="submit"
          className="flex border-2 rounded-full font-semibold bg-gray-900 text-white px-6 py-4 gap-2 text-center mx-auto hover:bg-fuchsia-400 transition-all duration-300 items-center"
        >
          Send Messages <ArrowRight />
        </motion.button>
        <p className="text-sm mt-2 font-semibold bg-white  p-5 mx-auto text-center w-fit text-green-800 rounded-full">
          {result}
        </p>
      </form>
    </motion.div>
  );
}
