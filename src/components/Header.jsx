import React from "react";

const Header = ({ handleTheme, theme }) => {
  return (
    <header className={`header py-5 shadow-md ${theme === "dark" && "dark-component"}`}>
      <div className="container flex justify-between items-center">
        <h4 className="logo font-bold text-lg md:text-xl xl:text-2xl">Where in the world?</h4>
        <div className="theme flex items-center justify-end gap-2 font-medium cursor-pointer" onClick={handleTheme}>
          {theme === "light" ? (
            <i className="moon ri-moon-line"></i>
          ) : (
            <i className="moon ri-moon-fill moon-white"></i>
          )}
          <p>
            <span>{theme.charAt(0).toUpperCase() + theme.slice(1)}</span>{" "}
            <span>Mode</span>
          </p>
        </div>
      </div>
    </header>
  );
};

export default Header;
