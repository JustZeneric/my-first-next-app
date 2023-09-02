// components/Project.js

import React from 'react';

const Project = ({ title, description, imageUrl }) => {
  const imageStyles = {
    width: '300px', // Adjust the width as needed
    height: 'auto', // Automatically adjust the height while maintaining aspect ratio
  };

  return (
    <div className="project">
      <h3>{title}</h3>
      <p>{description}</p>
      <img src={imageUrl} alt={title} style={imageStyles} />
    </div>
  );
};

export default Project;
