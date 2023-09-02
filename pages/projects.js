// pages/projects.js

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Navbar from '../components/Navbar'; // Import the Navbar component
import Project from '../components/Project';

const ProjectsPage = () => {
  const projects = [
    {
      title: 'Project 1',
      description: 'Description for Project 1',
      imageUrl: '/images/Test.PNG', // Update with your image URL
    },
    {
      title: 'Project 2',
      description: 'Description for Project 2',
      imageUrl: '/images/Test.PNG', // Update with your image URL (check for case sensitivity)
    },
    // Add more project objects as needed
  ];

  return (
    <div className="container">
      <header>
        <h1>My Projects</h1>
        <p>Explore my work and projects.</p>
      </header>
      <Navbar /> {/* Include the Navbar component */}
      <main>
        <div className="project-list">
          {projects.map((project, index) => (
            <Project
              key={index}
              title={project.title}
              description={project.description}
              imageUrl={project.imageUrl}
            />
          ))}
        </div>
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

        .project-list {
          list-style: none;
          padding: 0;
          display: flex;
          flex-wrap: wrap; /* Added to wrap the projects in a row */
          justify-content: center; /* Added to center-align projects horizontally */
        }

        /* Style for each project */
        .project {
          background-color: #f5f5f5;
          border: 1px solid #ddd;
          margin: 10px; /* Adjust the margin as needed to separate projects */
          padding: 20px;
          border-radius: 5px;
          max-width: 300px; /* Set a maximum width for the projects */
        }

        /* Style for the project image */
        .project-image {
          width: 300px; /* Set the image width to 100% of its container */
          height: auto; /* Automatically adjust the height while maintaining aspect ratio */
        }

        h1 {
          font-size: 28px;
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

export default ProjectsPage;
