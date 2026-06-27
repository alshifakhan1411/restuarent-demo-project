import styles from "./Hero.module.css";

export default function Hero() {
  return (
    <section id="hero" className={styles.hero} aria-label="Hero">
      {/* Texture overlay */}
      <div className={styles.overlay} />
      <div className={styles.grain} />

      {/* Content */}
      <div className={`container ${styles.content}`}>
        <p className={styles.eyebrow}>Jadoon Plaza Phase 2 · Abbottabad</p>

        <h1 className={styles.wordmark} aria-label="Urban Cafe and Restaurant">
          <span className={styles.urbanGlow}>URBAN</span>
          <span className={styles.cafe}>CAFE &amp; RESTAURANT</span>
        </h1>

        <p className={styles.tagline}>Where Every Bite Tells a Story</p>

        <div className={styles.badges}>
          <span className={styles.badge}>⭐ 4.1 Google</span>
          <span className={styles.badgeDivider} />
          <span className={styles.badge}>⭐ 4.7 Facebook</span>
          <span className={styles.badgeDivider} />
          <span className={styles.badge}>Open Till 12 AM</span>
        </div>

        <div className={styles.ctas}>
          <a href="#menu" className="btn-primary">
            View Menu
          </a>
          <a
            href="https://wa.me/923139755550"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-outline"
          >
            Order on WhatsApp
          </a>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className={styles.scrollHint} aria-hidden="true">
        <span />
      </div>
    </section>
  );
}
