import styles from "./Gallery.module.css";

const items = [
  { label: "Urban Special Pizza", emoji: "🍕", size: "large" },
  { label: "Burgers", emoji: "🍔", size: "small" },
  { label: "Pasta", emoji: "🍝", size: "small" },
  { label: "Ambiance", emoji: "🏮", size: "medium" },
  { label: "Drinks", emoji: "🥤", size: "small" },
  { label: "Desserts", emoji: "🍫", size: "medium" },
  { label: "Fish & Chips", emoji: "🐟", size: "small" },
  { label: "Loaded Fries", emoji: "🍟", size: "small" },
];

export default function Gallery() {
  return (
    <section id="gallery" className={styles.section}>
      <div className="container">
        <div className={styles.header}>
          <span className="section-eyebrow reveal">The Food</span>
          <h2 className={`section-title reveal reveal-delay-1`}>
            A Feast for <span>the Eyes</span>
          </h2>
          <div className="amber-rule reveal reveal-delay-1" />
          <p className={`${styles.sub} reveal reveal-delay-2`}>
            Follow us{" "}
            <a
              href="https://www.instagram.com/the_urban_cafe_and_restaurant"
              target="_blank"
              rel="noopener noreferrer"
            >
              @the_urban_cafe_and_restaurant
            </a>{" "}
            for daily food shots.
          </p>
        </div>

        <div className={`${styles.masonry} reveal reveal-delay-2`}>
          {items.map((item) => (
            <div
              key={item.label}
              className={`${styles.tile} ${styles[`tile-${item.size}`]}`}
            >
              <div className={styles.tileInner}>
                <span className={styles.tileEmoji} aria-hidden="true">
                  {item.emoji}
                </span>
                <span className={styles.tileLabel}>{item.label}</span>
              </div>
              <div className={styles.tileOverlay} />
            </div>
          ))}
        </div>

        <p className={`${styles.instaNote} reveal`}>
          🎥 Watch our short videos on{" "}
          <a
            href="https://www.facebook.com/p/Urban-Cafe-Restaurant-100063639580766/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Facebook
          </a>{" "}
          &amp;{" "}
          <a
            href="https://www.instagram.com/the_urban_cafe_and_restaurant"
            target="_blank"
            rel="noopener noreferrer"
          >
            Instagram
          </a>
        </p>
      </div>
    </section>
  );
}
