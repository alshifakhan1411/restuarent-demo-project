import styles from "./About.module.css";

export default function About() {
  return (
    <section id="about" className={styles.about}>
      <div className={`container ${styles.grid}`}>
        {/* Text side */}
        <div className={styles.text}>
          <span className="section-eyebrow reveal">Our Story</span>
          <h2 className={`section-title reveal reveal-delay-1`}>
            Born in the <span>Heart</span> of Abbottabad
          </h2>
          <div className="amber-rule reveal reveal-delay-1" />
          <p className={`${styles.body} reveal reveal-delay-2`}>
            Urban Cafe & Restaurant started with a simple idea: that Abbottabad
            deserved a place where great food met great atmosphere. Tucked into
            Jadoon Plaza Phase 2, we built a space that feels like a city
            escape — moody lighting, warm corners, and a menu that roams from
            crispy fish & chips to rich Alfredo pasta.
          </p>
          <p className={`${styles.body} reveal reveal-delay-3`}>
            Every dish is made to order. Every visit is meant to linger. Whether
            it&apos;s a late-night pizza run or a long lunch with friends, we&apos;re
            here until midnight — every single day.
          </p>

          {/* Trust badges */}
          <div className={`${styles.badges} reveal reveal-delay-4`}>
            <div className={styles.badge}>
              <span className={styles.badgeStar}>⭐</span>
              <div>
                <strong>4.1 / 5</strong>
                <span>555 Google Reviews</span>
              </div>
            </div>
            <div className={styles.badge}>
              <span className={styles.badgeStar}>⭐</span>
              <div>
                <strong>4.7 / 5</strong>
                <span>Facebook Rating</span>
              </div>
            </div>
            <div className={styles.badge}>
              <span className={styles.badgeStar}>🕛</span>
              <div>
                <strong>Open Daily</strong>
                <span>Till 12 AM</span>
              </div>
            </div>
          </div>
        </div>

        {/* Visual side */}
        <div className={`${styles.visual} reveal`} aria-hidden="true">
          <div className={styles.photoStack}>
            <div className={`${styles.photoCard} ${styles.photoCard1}`}>
              <div className={styles.photoInner}>
                <span>🍕</span>
                <p>Urban Special Pizza</p>
              </div>
            </div>
            <div className={`${styles.photoCard} ${styles.photoCard2}`}>
              <div className={styles.photoInner}>
                <span>🍝</span>
                <p>Alfredo Pasta</p>
              </div>
            </div>
            <div className={`${styles.photoCard} ${styles.photoCard3}`}>
              <div className={styles.photoInner}>
                <span>🐟</span>
                <p>Fish &amp; Chips</p>
              </div>
            </div>
          </div>
          <div className={styles.accentCircle} />
        </div>
      </div>
    </section>
  );
}
