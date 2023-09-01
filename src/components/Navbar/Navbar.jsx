"use client";

import React from "react";
import styles from "./Navbar.module.css";
import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [
  {
    id: 1,
    url: "/about",
    title: "About",
  },
  {
    id: 2,
    url: "/blog",
    title: "Blog",
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
  {
    id: 5,
    url: "/contact",
    title: "Contact",
  },
];

const Navbar = () => {
  const pathname = usePathname();

  return (
    <nav className={styles.container}>
      <Link
        href="/"
        className={`${styles.logo} ${
          pathname === "/" ? styles.activeLogo : ""
        }`}
      >
        <h1>NextX</h1>
      </Link>

      <section className={styles.links}>
        <Link
          href="/"
          className={`${styles.link} ${
            pathname === "/" ? styles.activeLink : ""
          }`}
        >
          Home
        </Link>
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
