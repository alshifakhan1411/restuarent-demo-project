import styles from "./Contact.module.css";

export default function Contact() {
  return (
    <section id="contact" className={styles.section}>
      <div className="container">
        <div className={styles.header}>
          <span className="section-eyebrow reveal">Find Us</span>
          <h2 className={`section-title reveal reveal-delay-1`}>
            Order &amp; <span>Visit</span>
          </h2>
          <div className="amber-rule reveal reveal-delay-1" />
        </div>

        <div className={styles.grid}>
          {/* Info block */}
          <div className={`${styles.info} reveal`}>
            <div className={styles.infoBlock}>
              <h3 className={styles.infoLabel}>📍 Location</h3>
              <p className={styles.infoText}>
                Jadoon Plaza Phase 2 Road
                <br />
                Jinnahabad, Abbottabad 22020
              </p>
            </div>

            <div className={styles.infoBlock}>
              <h3 className={styles.infoLabel}>🕛 Hours</h3>
              <p className={styles.infoText}>
                Open Daily — Until 12 AM
              </p>
            </div>

            <div className={styles.infoBlock}>
              <h3 className={styles.infoLabel}>📞 Call Us</h3>
              <div className={styles.phones}>
                <a href="tel:03139755550" className={styles.phone}>
                  0313-975 5550
                </a>
                <a href="tel:03101444111" className={styles.phone}>
                  0310-144 4111
                </a>
              </div>
            </div>

            <div className={styles.infoBlock}>
              <h3 className={styles.infoLabel}>💬 Social</h3>
              <div className={styles.socials}>
                <a
                  href="https://www.facebook.com/p/Urban-Cafe-Restaurant-100063639580766/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.social}
                >
                  Facebook · 18K+ Followers
                </a>
                <a
                  href="https://www.instagram.com/the_urban_cafe_and_restaurant"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.social}
                >
                  Instagram · @the_urban_cafe
                </a>
              </div>
            </div>
          </div>

          {/* Order CTA block */}
          <div className={`${styles.orderBlock} reveal reveal-delay-2`}>
            <div className={styles.orderCard}>
              <div className={styles.orderIcon} aria-hidden="true">💬</div>
              <h3 className={styles.orderTitle}>Order on WhatsApp</h3>
              <p className={styles.orderText}>
                The fastest way to place your order. Message us directly and
                we&apos;ll confirm in minutes.
              </p>
              <a
                href="https://wa.me/923139755550"
                target="_blank"
                rel="noopener noreferrer"
                className={`btn-primary ${styles.waBtn}`}
                aria-label="Order on WhatsApp"
              >
                Open WhatsApp Chat
              </a>
              <p className={styles.orText}>or order for delivery on</p>
              <a
                href="https://www.foodpanda.pk"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.foodpandaBtn}
              >
                🐼 foodpanda
              </a>
            </div>

            {/* Price range */}
            <div className={styles.priceRange}>
              <span>Price Range</span>
              <strong>Rs 1 — Rs 6,000</strong>
              <span>per person</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
