import React from 'react';

const BackLink = ({ onButtonClick, ...props }) => {
  return (
    <div>
      <button onClick={onButtonClick}>Take me Back!</button>
    </div>
  );
};

export default BackLink;