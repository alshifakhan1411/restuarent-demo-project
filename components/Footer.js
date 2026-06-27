import styles from "./Footer.module.css";

const quickLinks = [
  { label: "Menu", href: "#menu" },
  { label: "About", href: "#about" },
  { label: "Gallery", href: "#gallery" },
  { label: "Contact", href: "#contact" },
];

export default function Footer() {
  return (
    <footer className={styles.footer} role="contentinfo">
      <div className={`container ${styles.inner}`}>
        {/* Brand */}
        <div className={styles.brand}>
          <div className={styles.logo}>
            <span className={styles.logoMark}>U</span>
            <span className={styles.logoText}>
              URBAN <span>CAFE</span>
            </span>
          </div>
          <p className={styles.tagline}>Where Every Bite Tells a Story</p>
          <p className={styles.address}>
            Jadoon Plaza Phase 2, Jinnahabad
            <br />
            Abbottabad, Pakistan
          </p>
        </div>

        {/* Quick links */}
        <div className={styles.links}>
          <h3 className={styles.colTitle}>Quick Links</h3>
          <ul>
            {quickLinks.map((l) => (
              <li key={l.href}>
                <a href={l.href}>{l.label}</a>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact */}
        <div className={styles.contact}>
          <h3 className={styles.colTitle}>Contact</h3>
          <a href="tel:03139755550" className={styles.footerPhone}>
            0313-975 5550
          </a>
          <a href="tel:03101444111" className={styles.footerPhone}>
            0310-144 4111
          </a>
          <p className={styles.hours}>Open Daily · Till 12 AM</p>
          <div className={styles.socials}>
            <a
              href="https://www.facebook.com/p/Urban-Cafe-Restaurant-100063639580766/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
              className={styles.socialIcon}
            >
              f
            </a>
            <a
              href="https://www.instagram.com/the_urban_cafe_and_restaurant"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className={styles.socialIcon}
            >
              ig
            </a>
            <a
              href="https://wa.me/923139755550"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="WhatsApp"
              className={styles.socialIcon}
            >
              wa
            </a>
          </div>
        </div>
      </div>

      <div className={styles.bottom}>
        <div className="container">
          <p>
            © {new Date().getFullYear()} Urban Cafe &amp; Restaurant, Abbottabad.
            All rights reserved.
          </p>
          <p className={styles.ratings}>
            ⭐ 4.1 Google · 555 Reviews &nbsp;·&nbsp; ⭐ 4.7 Facebook
          </p>
        </div>
      </div>
    </footer>
  );
}
