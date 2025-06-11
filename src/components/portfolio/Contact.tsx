import { Mail, Phone, MapPin, Send } from "lucide-react";
import { useState } from "react";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [status, setStatus] = useState<
    "idle" | "loading" | "success" | "error"
  >("idle");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");

    try {
      await emailjs.send(
        "service_zdzp0cf",
        "template_d87yqxx",
        formData,
        "mmV7UbcJDbbQ6f08h"
      );
      setStatus("success");
      setFormData({ name: "", email: "", message: "" });
    } catch (err) {
      console.error(err);
      setStatus("error");
    } finally {
      setTimeout(() => setStatus("idle"), 3000);
    }
  };

  return (
    <section id="contact" className="py-20 bg-slate-800/50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">Get In Touch</h2>
          <div className="w-20 h-1 bg-blue-500 mx-auto mb-4"></div>
          <p className="text-slate-300 text-lg max-w-2xl mx-auto">
            I'm always open to discussing new opportunities, interesting
            projects, or just having a chat about frontend development.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <h3 className="text-2xl font-bold text-white mb-6">
              Let's Connect
            </h3>
            <div className="space-y-6">
              <ContactInfo
                icon={<Mail />}
                label="Email"
                value="srinadhreddy194@gmail.com"
                link="mailto:srinadhreddy194@gmail.com"
              />
              <ContactInfo
                icon={<Phone />}
                label="Phone"
                value="+91 8886090525"
                link="tel:+918886090525"
              />
              <ContactInfo icon={<MapPin />} label="Location" value="India" />
            </div>
          </div>

          <div>
            <form onSubmit={handleSubmit} className="space-y-6">
              <InputField
                id="name"
                label="Name"
                value={formData.name}
                onChange={handleChange}
              />
              <InputField
                id="email"
                label="Email"
                type="email"
                value={formData.email}
                onChange={handleChange}
              />
              <TextareaField
                id="message"
                label="Message"
                value={formData.message}
                onChange={handleChange}
              />

              <button
                type="submit"
                disabled={status === "loading"}
                className="w-full bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg transition-all duration-300 flex items-center justify-center space-x-2 hover:scale-105"
              >
                {status === "loading" ? (
                  <svg
                    className="animate-spin h-5 w-5 text-white"
                    viewBox="0 0 24 24"
                  >
                    <circle
                      className="opacity-25"
                      cx="12"
                      cy="12"
                      r="10"
                      stroke="white"
                      strokeWidth="4"
                      fill="none"
                    />
                    <path
                      className="opacity-75"
                      fill="white"
                      d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"
                    />
                  </svg>
                ) : (
                  <Send size={20} />
                )}
                <span>
                  {status === "loading" ? "Sending..." : "Send Message"}
                </span>
              </button>
            </form>
          </div>
        </div>

        {status === "success" && (
          <Toast message="Message sent successfully!" type="success" />
        )}
        {status === "error" && (
          <Toast
            message="Something went wrong. Please try again."
            type="error"
          />
        )}
      </div>
    </section>
  );
};

type InputFieldProps = {
  id: string;
  label: string;
  type?: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

const InputField = ({
  id,
  label,
  type = "text",
  value,
  onChange,
}: InputFieldProps) => (
  <div>
    <label htmlFor={id} className="block text-slate-300 mb-2">
      {label}
    </label>
    <input
      type={type}
      id={id}
      name={id}
      value={value}
      onChange={onChange}
      required
      className="w-full bg-slate-700 border border-slate-600 rounded-lg px-4 py-3 text-white focus:border-blue-400 focus:outline-none transition-colors"
    />
  </div>
);

type TextareaFieldProps = {
  id: string;
  label: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
};

const TextareaField = ({ id, label, value, onChange }: TextareaFieldProps) => (
  <div>
    <label htmlFor={id} className="block text-slate-300 mb-2">
      {label}
    </label>
    <textarea
      id={id}
      name={id}
      value={value}
      onChange={onChange}
      rows={5}
      required
      className="w-full bg-slate-700 border border-slate-600 rounded-lg px-4 py-3 text-white focus:border-blue-400 focus:outline-none transition-colors resize-none"
    />
  </div>
);

type ContactInfoProps = {
  icon: React.ReactNode;
  label: string;
  value: string;
  link?: string;
};

const ContactInfo = ({ icon, label, value, link }: ContactInfoProps) => (
  <div className="flex items-center">
    <div className="bg-blue-600/20 p-3 rounded-lg mr-4 text-blue-400">
      {icon}
    </div>
    <div>
      <p className="text-slate-400">{label}</p>
      {link ? (
        <a
          href={link}
          className="text-white hover:text-blue-400 transition-colors"
        >
          {value}
        </a>
      ) : (
        <p className="text-white">{value}</p>
      )}
    </div>
  </div>
);

const Toast = ({
  message,
  type,
}: {
  message: string;
  type: "success" | "error";
}) => (
  <div
    className={`fixed bottom-5 right-5 px-5 py-3 rounded-lg text-white shadow-lg
    ${type === "success" ? "bg-green-600" : "bg-red-600"}
  `}
  >
    {message}
  </div>
);

export default Contact;
