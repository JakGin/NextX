"use client";

import React from "react";
import styles from "./Navbar.module.css";
import Link from "next/link";
import { usePathname } from "next/navigation";
import ThemeToggle from "../ThemeToggle/ThemeToggle";
import { signOut } from "next-auth/react";
import { useSession } from "next-auth/react";

const links = [
  {
    id: 1,
    url: "/portfolio",
    title: "Portfolio",
  },
  {
    id: 2,
    url: "/blog",
    title: "Blog",
  },
  {
    id: 3,
    url: "/about",
    title: "About",
  },
  {
    id: 4,
    url: "/contact",
    title: "Contact",
  },
  {
    id: 5,
    url: "/dashboard",
    title: "Dashboard",
  },
];

const Navbar = () => {
  const pathname = usePathname();
  const session = useSession();

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
        <ThemeToggle />
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
        {session.status === "authenticated" && (
          <button className={styles.logout} onClick={() => signOut()}>
            Logout
          </button>
        )}
      </section>
    </nav>
  );
};

export default Navbar;
