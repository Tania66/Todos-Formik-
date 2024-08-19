import React, { Suspense } from "react";
import { Link, NavLink, Outlet } from "react-router-dom";
import ButtonTheme from "../../features/ButtonTheme/ButtonTheme";
import Footer from "../Footer/Footer";

export const Layout = () => {
  return <>
<header className="header">
  <ul className="header_nav">
    <li>
      <NavLink  className={({ isActive }) => (isActive ? 'active' : 'header_nav_link')} to="/" end>Home</NavLink>
    </li>
    <li>
      <NavLink className={({ isActive }) => (isActive ? 'active' : 'header_nav_link')} to="/contact">Contact</NavLink>
    </li>
    <li>
      <NavLink className={({ isActive }) => (isActive ? 'active' : 'header_nav_link')} to="/about">About</NavLink>
    </li>
  </ul>
  <ButtonTheme/>
</header>
<main className="main">
<Suspense fallback={<div>Loading...</div>}>
          <Outlet />
        </Suspense>
</main>
<footer className="footer">
<Footer/>
</footer>
  </>;
};
