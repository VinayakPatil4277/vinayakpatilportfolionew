import React, { useContext, useRef, useState } from "react";
import "./Contact.css";
import emailjs from "@emailjs/browser";
import { themeContext } from "../../Context";

const SERVICE_ID = "service_in6mxpa";
const TEMPLATE_ID = "template_rracnj4"; // Use your correct template ID
const PUBLIC_KEY = "hbxPeNqehtvnia2UE";

const Contact = () => {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  const form = useRef();

  const [done, setDone] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [formError, setFormError] = useState("");

  const sendEmail = (e) => {
    e.preventDefault();
    const { user_name, user_email, message } = form.current;

    // Validation
    if (!user_name.value || !user_email.value || !message.value) {
      setFormError("Please fill in all fields.");
      return;
    }
    if (!/^\S+@\S+\.\S+$/.test(user_email.value)) {
      setFormError("Please enter a valid email address.");
      return;
    }

    setFormError("");
    setSubmitting(true);
    setDone(false);

    emailjs
      .sendForm(SERVICE_ID, TEMPLATE_ID, form.current, PUBLIC_KEY)
      .then(
        () => {
          setDone(true);
          setSubmitting(false);
          form.current.reset();
        },
        (error) => {
          setFormError(
            error?.text ||
              "Sorry, there was a problem. Please try again later."
          );
          setSubmitting(false);
        }
      );
  };

  return (
    <div className="contact-form" id="contact">
      {/* left side */}
      <div className="w-left">
        <div className="awesome">
          <span style={{ color: darkMode ? "white" : "" }}>Get in Touch</span>
          <span>Contact me</span>
          <div
            className="blur s-blur1"
            style={{ background: "#ABF1FF94" }}
          ></div>
        </div>
      </div>
      {/* right side form */}
      <div className="c-right">
        <form ref={form} onSubmit={sendEmail} autoComplete="off">
          <input
            aria-label="Name"
            type="text"
            name="user_name"
            className="user"
            placeholder="Name"
            autoComplete="off"
            disabled={submitting}
          />
          <input
            aria-label="Email"
            type="email"
            name="user_email"
            className="user"
            placeholder="Email"
            autoComplete="off"
            disabled={submitting}
          />
          <textarea
            aria-label="Message"
            name="message"
            className="user"
            placeholder="Message"
            rows={5}
            disabled={submitting}
          />
          <input
            type="submit"
            value={submitting ? "Sending..." : "Send"}
            className="button"
            disabled={submitting}
            aria-disabled={submitting}
          />
          {formError && (
            <span className="error" style={{ color: "#d32f2f", fontWeight: 500 }}>{formError}</span>
          )}
          {done && (
            <span className="thankyou">
              Thanks for contacting me! I’ll reply soon.
            </span>
          )}
          <div className="blur c-blur1" style={{ background: "var(--purple)" }}></div>
        </form>
      </div>
    </div>
  );
};

export default Contact;
