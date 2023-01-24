import Link from "next/link";
import React, { useState } from "react";
import NavItem from "./NavItem";
import { ChakraProvider } from "@chakra-ui/react";
import ThemeToggle from "../components/ThemeToggle";

const MENU_LIST = [
  { text: "Home", href: "/" },
  { text: "About Me", href: "/about" },
  { text: "Projects", href: "/projects" },
  { text: "Contact", href: "/contact" },
];
const Navbar = () => {
  const [navActive, setNavActive] = useState(null);
  const [activeIdx, setActiveIdx] = useState(-1);

  return (
    <ChakraProvider>
      <header>
        <nav className={`nav`}>
          <Link href={"/"}>
            <h1 className="logo">Javi Barrientos Peralta</h1>
          </Link>
          <div
            onClick={() => setNavActive(!navActive)}
            className={`nav__menu-bar`}
          >
            <div></div>
            <div></div>
            <div></div>
          </div>
          <div className={`${navActive ? "active" : ""} nav__menu-list`}>
            {MENU_LIST.slice(0, 4).map((menu, idx) => (
              <div
                onClick={() => {
                  setActiveIdx(idx);
                  setNavActive(false);
                }}
                key={menu.text}
              >
                <NavItem active={activeIdx === idx} {...menu}>
                  <Link href={"/"}></Link>
                </NavItem>
              </div>
            ))}
          </div>
        </nav>
        {/* TODO INTEGRAR EL TOGGLE EN EL NAVBAR */}
        {/* <ThemeToggle /> */}
      </header>
    </ChakraProvider>
  );
};

export default Navbar;
