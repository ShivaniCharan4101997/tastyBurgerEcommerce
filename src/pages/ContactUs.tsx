import React, { useState } from "react";
import type { FormEvent } from "react";
import ContactUsImg from "/Food_Assets/assets/conatctusimg.jpg";
import { push } from "firebase/database";
import { contactRef } from "@/firebase";
import { toast } from "react-toastify";

const ContactUs: React.FC = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    console.log("Submitted Data:", formData);
    setLoading(true);
    try {
      await push(contactRef, formData);
      toast.success("Message sent successfully!");
      setFormData({ name: "", email: "", message: "" });
    } catch (e) {
      toast.error("Failed to send message.");
      console.log(e);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="min-h-screen flex flex-col md:flex-row bg-yellow-50">
      {/* Left Image */}
      <div className="md:w-1/2">
        <img
          src={ContactUsImg}
          alt="Contact Us"
          className="h-full w-full object-cover"
        />
      </div>

      {/* Right Form */}
      <div className="md:w-1/2 p-10 flex items-center justify-center ">
        <form
          onSubmit={handleSubmit}
          className="bg-background shadow-lg
          rounded-lg p-8 w-full max-w-md"
        >
          <h2 className="text-2xl font-bold text-yellow-700 mb-6 text-center">
            Contact Us
          </h2>

          <div className="mb-4">
            <label
              htmlFor="name"
              className="block text-sm font-semibold text-gray-700"
            >
              Name
            </label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="mt-1 block w-full border border-gray-300 rounded-md p-2"
            />
          </div>

          <div className="mb-4">
            <label
              htmlFor="email"
              className="block text-sm font-semibold text-gray-700"
            >
              Email
            </label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="mt-1 block w-full border border-gray-300 rounded-md p-2"
            />
          </div>

          <div className="mb-4">
            <label
              htmlFor="message"
              className="block text-sm font-semibold text-gray-700"
            >
              Message
            </label>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              rows={5}
              required
              className="mt-1 block w-full border border-gray-300 rounded-md p-2"
            />
          </div>
          <button
            type="submit"
            disabled={loading}
            className={`w-full ${
              loading ? "bg-yellow-400" : "bg-yellow-600 hover:bg-yellow-700"
            } text-white font-semibold py-2 rounded`}
          >
            {loading ? "Sending..." : "Send Message"}
          </button>
        </form>
      </div>
    </section>
  );
};

export default ContactUs;
