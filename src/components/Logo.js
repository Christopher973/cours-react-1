import React from "react";

const Logo = () => {
  return (
    <div className="logo">
      {/* Les images importés depuis la balise img sont accessible dans public */}
      <img src="./logo192.png" alt="logo react" />
      <h3>React World</h3>
    </div>
  );
};

export default Logo;
