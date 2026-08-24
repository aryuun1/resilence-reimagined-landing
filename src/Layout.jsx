import { Outlet, useLocation } from "react-router-dom";
import { useEffect } from "react";
import { LotusDefs } from "./components/LotusIcon.jsx";
import { Nav } from "./components/Nav.jsx";
import { Footer } from "./components/Footer.jsx";
import { useScrollReveal } from "./hooks/useScrollReveal.js";

export function Layout() {
  const { pathname } = useLocation();
  useScrollReveal(pathname);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <>
      <LotusDefs />
      <Nav />
      <Outlet />
      <Footer />
    </>
  );
}
