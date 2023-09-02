import React from 'react';
import Link from 'next/link';

const Layout = ({ children }) => {
  return (
    <div>
      <header>
        <nav>
          <ul>
            <li>
              <Link href="/about">
        
              </Link>
            </li>
            <li>
              <Link href="/projects">

              </Link>
            </li>
            <li>
              <Link href="/contact">
  
              </Link>
            </li>
          </ul>
        </nav>
      </header>
      <main>{children}</main>
    </div>
  );
};

export default Layout;
