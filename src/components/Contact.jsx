import { useState } from "react";
import { motion } from "framer-motion"; // Import motion here

const Contact = () => {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState(null);

  const handleChange = (e) => {
    setFormState({
      ...formState,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError(null);

    try {
      const response = await fetch("https://getform.io/f/9avW1XbG", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(formState),
      });

      if (!response.ok) {
        throw new Error("Form submission failed");
      }

      setIsSubmitted(true);
      setFormState({ name: "", email: "", message: "" });

      // Reset form after 3 seconds
      setTimeout(() => {
        setIsSubmitted(false);
      }, 3000);
    } catch (err) {
      setError("An error occurred. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
    },
  };

  return (
    <div
      name="contact"
      className="w-full min-h-screen bg-gradient-to-b from-[#0a192f] to-[#0c1f3d] flex justify-center items-center p-4"
    >
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="max-w-[600px] w-full bg-[#112240] p-8 rounded-lg shadow-lg"
      >
        <motion.h2
          variants={itemVariants}
          className="text-4xl font-bold mb-4 text-gray-300 border-b-4 border-pink-600 inline-block pb-2"
        >
          Contact
        </motion.h2>
        <motion.p variants={itemVariants} className="text-gray-300 mb-6">
          Submit the form below or shoot me an email - chetannooli94@gmail.com
        </motion.p>
        <motion.form
          variants={containerVariants}
          onSubmit={handleSubmit}
          className="flex flex-col space-y-4"
        >
          <motion.div variants={itemVariants}>
            <input
              className="w-full bg-[#1d3557] text-gray-300 p-3 rounded-md focus:outline-none focus:ring-2 focus:ring-pink-600 transition duration-300"
              type="text"
              placeholder="Name"
              name="name"
              value={formState.name}
              onChange={handleChange}
              required
            />
          </motion.div>
          <motion.div variants={itemVariants}>
            <input
              className="w-full bg-[#1d3557] text-gray-300 p-3 rounded-md focus:outline-none focus:ring-2 focus:ring-pink-600 transition duration-300"
              type="email"
              placeholder="Email"
              name="email"
              value={formState.email}
              onChange={handleChange}
              required
            />
          </motion.div>
          <motion.div variants={itemVariants}>
            <textarea
              className="w-full bg-[#1d3557] text-gray-300 p-3 rounded-md focus:outline-none focus:ring-2 focus:ring-pink-600 transition duration-300 resize-none"
              name="message"
              rows="6"
              placeholder="Message"
              value={formState.message}
              onChange={handleChange}
              required
            ></textarea>
          </motion.div>
          <motion.div variants={itemVariants}>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="w-full bg-pink-600 text-white py-3 rounded-md hover:bg-pink-700 transition duration-300 flex items-center justify-center"
              type="submit"
              disabled={isSubmitting || isSubmitted}
            >
              {isSubmitting ? (
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                  className="w-6 h-6 border-t-2 border-white rounded-full"
                />
              ) : isSubmitted ? (
                "Message Sent!"
              ) : (
                "Send Message"
              )}
            </motion.button>
          </motion.div>
          {error && (
            <motion.p
              variants={itemVariants}
              className="text-red-500 text-center"
            >
              {error}
            </motion.p>
          )}
        </motion.form>
      </motion.div>
    </div>
  );
};

export default Contact;
