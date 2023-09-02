// pages/index.js

import React from 'react';
import Link from 'next/link';
import Navbar from '../components/Navbar';
import ContactForm from '../components/ContactForm'; // Import the ContactForm component

const HomePage = () => {
  return (
    <div className="container">
      <header>
        <h1>Welcome to my Developer Portfolio</h1>
        <p>My Journey Starts Here</p>
      </header>
      <div className="container">
      <Navbar /> {/* Include the Navbar component */}
      {/* ... rest of your home page content */}

    </div>
      <main>
        <section>
          <h2>About Me</h2>
          <p>
            Hi, I'm Luke Manley. I'm a passionate developer with a background in Full-Stack Development.
            I'm enthusiastic about Full-Stack Development and have a strong track record in Freelance Web Development.
          </p>
        </section>

        <section>
          <h2>Projects</h2>
          <p>
            Explore my projects to see the diversity of my work.
            From web development to mobile apps, I'm always excited to take on new challenges.
          </p>
          <Link href="/projects ">
<h2> Projects </h2>
          </Link>
        </section>

        <section>
          <h2>Contact</h2>
          <p>
            Want to get in touch? Feel free to reach out via email or phone.
            I'd love to connect with you.
          </p>
          <Link href="/contact">
      <h2>Contact Me</h2>
          </Link>
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

        section {
          margin-bottom: 40px;
        }

        h2 {
          font-size: 24px;
          margin-bottom: 10px;
        }

        p {
          font-size: 16px;
          line-height: 1.5;
        }

        a {
          color: #0070f3;
          text-decoration: none;
          font-weight: 600;
        }

        a:hover {
          text-decoration: underline;
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

export default HomePage;
