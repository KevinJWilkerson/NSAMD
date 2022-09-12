import React from "react";

const Contact = () => {
  return (
    <section id="reach-out" className="contact">
      <div className="flex-row">
        <h2 className="section-title secondary-border">Reach Out</h2>
      </div>
      <div className="contact-info">
        <div>
          <h4>Neurosurgical Associates, LLC</h4>
          <p>
            Any questions or concerns?
            <br />
            Let us know and we'll be happy to talk to you!
          </p>
          <address>
            5171 Cottonwood St. <br />
            South Office <br />
            Building #1, Suite 950 <br />
            Murray, Utah 84107 <br />
            P: (801) 507-9555 <br />
            E: <a href="mailto:info@nsamd.io">info@nsamd.io</a>
          </address>
        </div>
        <div className="contact-form">
          <h4>Contact Us</h4>
          <form>
            <label htmlFor="contact-name">Your Name</label>
            <input type="text" id="contact-name" placeholder="Your Name" />

            <label htmlFor="contact-message">Message</label>
            <textarea
              id="contact-message"
              placeholder="Your Message"
            ></textarea>

            <button type="submit">Submit</button>
          </form>
        </div>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d6053.354810481966!2d-111.891761!3d40.659041!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x87528a27cc66bc57%3A0x39c0399a089fc75d!2s5171%20Cottonwood%20St%20suite%20950%2C%20Murray%2C%20UT%2084107!5e0!3m2!1sen!2sus!4v1663014720232!5m2!1sen!2sus"
          width="400"
          height="400"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </section>
  );
};

export default Contact;
