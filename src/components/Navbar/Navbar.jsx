"use client";

import React from "react";
import styles from "./Navbar.module.css";
import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [
  {
    id: 0,
    url: "/about",
    title: "About",
  },
  {
    id: 1,
    url: "/blog",
    title: "Blog",
  },
  {
    id: 2,
    url: "/contact",
    title: "Contact",
  },
  {
    id: 3,
    url: "/dashboard",
    title: "Dashboard",
  },
  {
    id: 4,
    url: "/portfolio",
    title: "Portfolio",
  },
];

const Navbar = () => {
  const pathname = usePathname();

  return (
    <nav className={styles.container}>
      <Link
        href="/"
        className={`${styles.logo} ${pathname === "/" ? styles.activeLogo : ""}`}
      >
        <h1>NextX</h1>
      </Link>

      <section className={styles.links}>
        {links.map((link) => (
          <Link
            key={link.id}
            className={`${styles.link} ${
              pathname.includes(link.url) ? styles.activeLink : ""
            }`}
            href={link.url}
          >
            {link.title}
          </Link>
        ))}
        {/* logout button */}
      </section>
    </nav>
  );
};

export default Navbar;
