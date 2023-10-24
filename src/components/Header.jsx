import { useState, useEffect, useRef } from "react";

const Header = () => {
  const [links, setLinks] = useState(["Features", "Team", "Sign in"]);
  const headerRef = useRef();

  
  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 100) {
        headerRef.current.style.background = "#0c1524";
        headerRef.current.style.padding = "20px 0";
      } else {
        headerRef.current.style.background = "transparent";
        headerRef.current.style.padding = "60px 0";
      }
    });
  }, []);
  return (
    <header
      ref={headerRef}
      className="pt-[60px] fixed top-0 left-0 w-full  z-50 transition-all duration-200"
    >
      <div className="container flex items-center justify-between  gap-[30px] sm:gap-0 flex-col sm:flex-row">
        <a href="/">
          <img src="/src/assets/images/logo.svg" alt="logo" />
        </a>
        <nav>
          <ul className="flex items-center gap-[50px] text-sm font-normal">
            {links.map((link) => {
              return (
                <li key={link}>
                  <a
                    href={`/${link.toLocaleLowerCase()}`}
                    className="hover:opacity-[1] transition-opacity duration-200"
                  >
                    {link}
                  </a>
                </li>
              );
            })}
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
