import React from 'react';
import Navbar from '../components/Navbar'; // Import the Navbar component

const ContactPage = () => {
  return (
    <div className="container">
      <header>
        <h1>Contact Me</h1>
        <p>Get in touch with me!</p>
      </header>
      <Navbar /> {/* Include the Navbar component */}
      <main>
        <section>
          <h2>Contact Information</h2>
          <p>
            You can reach me through the following contact details:
            <br />
            Email: your.email@example.com
            <br />
            Phone: +1 (123) 456-7890
          </p>
        </section>

        <section>
          <h2>Contact Form</h2>
          {/* Include your contact form component here */}
        </section>
      </main>

      <footer>
        <p>&copy; {new Date().getFullYear()} [Your Name]</p>
      </footer>

      <style jsx>{`
        .container {
          max-width: 800px;
          margin: 0 auto;
          padding: 20px;
          text-align: center;
        }

        header {
          background-color: #333;
          color: #fff;
          padding: 20px;
        }

        main {
          padding: 20px 0;
        }

        h2 {
          font-size: 24px;
          margin-bottom: 10px;
        }

        p {
          font-size: 16px;
          line-height: 1.5;
        }

        footer {
          background-color: #333;
          color: #fff;
          padding: 10px 0;
        }
      `}</style>
    </div>
  );
};

export default ContactPage;
