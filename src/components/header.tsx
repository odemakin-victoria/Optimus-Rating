import React from 'react';
import Logo from "../Assets/Optimus_Bank_Header.png"

const Header = () => {
  return (
    <div className="mb-8">
      <img
        src={Logo}
        alt="Header"
        className="w-full max-h-72 object-cover"
      />
    </div>
  );
};

export default Header;
