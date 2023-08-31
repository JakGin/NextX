import React from 'react'
import styles from "./Navbar.module.css"
import Link from 'next/link'

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
]

const Navbar = () => {
  return (
    <nav className={styles.container}>
      <Link href="/" className={styles.logo}>
        <h1>NextX</h1>
      </Link>
      
      <section className={styles.links}>
        {links.map(link => (
          <Link key={link.id} className={styles.link} href={link.url}>
            {link.title}
          </Link>
        ))}
        {/* logout button */}
      </section>
    </nav>
  )
}

export default Navbar