import React from "react";

function Contact() {
  return (
    <section className="contact-section" style={{ padding: "2rem 1rem" }}>
      <h2 className="project-heading" style={{ paddingBottom: "20px" }}>
        <strong className="purple">Contact</strong>
      </h2>

      {/* Google Map Embed */}
      <div style={{ marginBottom: "2rem" }}>
        <iframe
          title="map"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3174.6896503742196!2d-121.4943994846921!3d38.58157157961352!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x809ac6948996c6d7%3A0x7d6b707c3c93ef3b!2sSacramento%2C%20CA%2C%20USA!5e0!3m2!1sen!2sin!4v1689984825990!5m2!1sen!2sin"
          width="100%"
          height="400"
          style={{ border: 0, borderRadius: "8px" }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>

      {/* Contact Form */}
      <form
        action="https://formspree.io/f/mjkwnknz" // Replace with your actual Formspree form ID
        method="POST"
        style={{
          maxWidth: "600px",
          margin: "0 auto",
          display: "flex",
          flexDirection: "column",
          gap: "1rem",
        }}
      >
        <h4>Contact Form</h4>
        <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap" }}>
          <input
            type="text"
            name="name"
            placeholder="Full name"
            required
            style={{
              flex: 1,
              padding: "10px",
              borderRadius: "5px",
              border: "1px solid #ccc",
            }}
          />
          <input
            type="email"
            name="email"
            placeholder="Email address"
            required
            style={{
              flex: 1,
              padding: "10px",
              borderRadius: "5px",
              border: "1px solid #ccc",
            }}
          />
        </div>
        <textarea
          name="message"
          placeholder="Your Message"
          rows="5"
          required
          style={{
            padding: "10px",
            borderRadius: "5px",
            border: "1px solid #ccc",
          }}
        ></textarea>
        <button
          type="submit"
          style={{
            alignSelf: "flex-end",
            backgroundColor: "#6f42c1",
            color: "white",
            padding: "0.5rem 1rem",
            border: "none",
            borderRadius: "5px",
            cursor: "pointer",
          }}
        >
          🚀 Send Message
        </button>
      </form>
    </section>
  );
}

export default Contact;


