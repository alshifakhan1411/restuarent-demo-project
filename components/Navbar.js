"use client";
import { useState, useEffect } from "react";
import styles from "./Navbar.module.css";

const links = [
  { label: "Menu", href: "#menu" },
  { label: "About", href: "#about" },
  { label: "Gallery", href: "#gallery" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleNav = (e, href) => {
    e.preventDefault();
    setOpen(false);
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header
      className={`${styles.navbar} ${scrolled ? styles.scrolled : ""}`}
      role="banner"
    >
      <div className={`container ${styles.inner}`}>
        {/* Logo */}
        <a href="#hero" className={styles.logo} aria-label="Urban Cafe home">
          <span className={styles.logoMark}>U</span>
          <span className={styles.logoText}>
            URBAN <span>CAFE</span>
          </span>
        </a>

        {/* Desktop nav */}
        <nav className={styles.desktopNav} aria-label="Main navigation">
          <ul>
            {links.map((l) => (
              <li key={l.href}>
                <a href={l.href} onClick={(e) => handleNav(e, l.href)}>
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        {/* CTA */}
        <a
          href="https://wa.me/923139755550"
          target="_blank"
          rel="noopener noreferrer"
          className={styles.orderBtn}
          aria-label="Order on WhatsApp"
        >
          Order Now
        </a>

        {/* Hamburger */}
        <button
          className={styles.hamburger}
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          onClick={() => setOpen(!open)}
        >
          <span className={`${styles.bar} ${open ? styles.barOpen1 : ""}`} />
          <span className={`${styles.bar} ${open ? styles.barOpen2 : ""}`} />
          <span className={`${styles.bar} ${open ? styles.barOpen3 : ""}`} />
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <nav className={styles.mobileMenu} aria-label="Mobile navigation">
          <ul>
            {links.map((l) => (
              <li key={l.href}>
                <a href={l.href} onClick={(e) => handleNav(e, l.href)}>
                  {l.label}
                </a>
              </li>
            ))}
            <li>
              <a
                href="https://wa.me/923139755550"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.mobileOrder}
              >
                Order on WhatsApp
              </a>
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
}
