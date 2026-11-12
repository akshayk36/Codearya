import React from 'react';

const BackgroundImage: React.FC = () => {
  return (
    <div className="fixed inset-0 -z-20">
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: "url('https://www.freepik.com/free-photos-vectors/black-square-background')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }}
      />
      <div className="absolute inset-0 bg-black/70" />
    </div>
  );
};

export default BackgroundImage;


