// components/Navbar.js

import Link from 'next/link';

const Navbar = () => {
  return (
    <nav>
      <ul>
        <li>
          <Link href="/">
            <div className="nav-link">Home</div>
          </Link>
        </li>
        <li>
          <Link href="/projects">
            <div className="nav-link">Projects</div>
          </Link>
        </li>
        <li>
          <Link href="/contact">
            <div className="nav-link">Contact</div>
          </Link>
        </li>
      </ul>

      <style jsx>{`
        nav {
          background-color: #333;
          color: #fff;
          padding: 10px 0;
        }

        ul {
          list-style: none;
          padding: 0;
          display: flex; /* Display items in a row */
          justify-content: center; /* Center items horizontally */
        }

        li {
          margin: 0 20px;
        }

        .nav-link {
          cursor: pointer; /* Add pointer cursor to indicate interactivity */
          color: #fff;
          font-weight: 600;
        }

        .nav-link:hover {
          text-decoration: underline;
        }
      `}</style>
    </nav>
  );
};

export default Navbar;
