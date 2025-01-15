import { useState } from "react";
import { motion } from "framer-motion";

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
      className="w-full min-h-screen bg-gradient-to-b from-gray-900 to-gray-800 flex justify-center items-center p-4"
    >
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="max-w-4xl w-full bg-gray-800 p-8 rounded-lg shadow-xl"
      >
        <motion.h2
          variants={itemVariants}
          className="text-4xl font-bold mb-4 text-gray-100 border-b-4 border-blue-500 inline-block pb-2"
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
              className="w-full bg-gray-700 text-gray-100 p-4 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-300"
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
              className="w-full bg-gray-700 text-gray-100 p-4 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-300"
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
              className="w-full bg-gray-700 text-gray-100 p-4 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-300 resize-none"
              name="message"
              rows="6"
              placeholder="Message"
              value={formState.message}
              onChange={handleChange}
              required
            ></textarea>
          </motion.div>
          <motion.div variants={itemVariants} className="flex justify-center">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="w-48 bg-blue-600 text-white py-4 rounded-md hover:bg-blue-700 transition duration-300 flex items-center justify-center text-lg font-semibold"
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
