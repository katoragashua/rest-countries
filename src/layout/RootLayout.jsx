import React from "react";
import Header from "../components/Header";
import { Outlet } from "react-router-dom";

const RootLayout = () => {
  const [theme, setTheme] = React.useState(() => "light");

  const handleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
    document.body.classList.toggle("dark")
    console.log(document.body.classList);
  };
  console.log(theme);
  return (
    <>
      <Header handleTheme={handleTheme} theme={theme}/>
      <Outlet context={{theme}} />
    </>
  );
};

export default RootLayout;
