import { useState, use } from "react";
import { motion } from "framer-motion";
import axios from "axios";
import { toast } from "react-toastify";
import { AuthContext } from "../context/AuthContext";


const NewsletterSection = () => {
  const { user } = use(AuthContext);
  const [emailInput, setEmailInput] = useState("");
  const email = user?.email || emailInput;

 const handleSubscribe = async (e) => {
    e.preventDefault();

    if (!emailInput) {
      toast.error("Please enter an email address.");
      return;
    }

    try {
      const response = await axios.post("http://localhost:5000/newsletter", {
        email,
        subscribedAt: new Date().toISOString(),
      });

      if (response.status === 201) {
        toast.success("Thanks for subscribing to our newsletter!");
        setEmailInput(""); // Clear the input field
      }
    } catch (error) {
      if (error.response && error.response.status === 409) {
        toast.warning("You are already subscribed!");
      } else {
        toast.error("Something went wrong. Please try again.");
        console.error(error);
      }
    }
  };

  return (
    <section className="py-12 bg-green-100 text-center">
      <motion.h2
        className="text-3xl font-bold text-green-700"
        initial={{ scale: 0.8, opacity: 0 }}
        whileInView={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.6 }}
      >
        Join Our Garden Club 🌼
      </motion.h2>
      <p className="mt-4 text-green-700">Get weekly tips & exclusive offers.</p>

      <form
        onSubmit={handleSubscribe}
        className="mt-6 flex flex-col md:flex-row justify-center items-center gap-4"
      >
        {!user && (
          <input
            type="email"
            placeholder="Enter your email"
            value={emailInput}
            onChange={(e) => setEmailInput(e.target.value)}
            className="px-4 py-2 rounded-full border focus:outline-none w-72"
            required
          />
        )}
        {user && (
          <input
            type="email"
            value={email}
            readOnly
            className="px-4 py-2 rounded-full border bg-white text-gray-600 w-72 cursor-not-allowed"
          />
        )}

        <button
          type="submit"
          className="bg-secondary text-white px-6 py-2 rounded-full hover:bg-green-800 transition"
        >
          Subscribe
        </button>
      </form>
    </section>
  );
};

export default NewsletterSection;
