import React from "react";
import { Button } from "../ui/button";

const Header = () => {
  return (
    <header className="p-3 shadow-sm flex justify-between items-center px-5">
      <img src="/logo.svg" alt="logo" />
      <Button>Sign in</Button>
    </header>
  );
};
export default Header;
