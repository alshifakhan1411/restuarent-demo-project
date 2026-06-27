import styles from "./Testimonials.module.css";

const reviews = [
  {
    name: "Hamza Iqbal",
    location: "Abbottabad",
    rating: 5,
    platform: "Google",
    text: "Honestly one of the best dining experiences I've had in Abbottabad. The Fish & Chips are unreal — crispy batter, proper chips, and the tartar sauce is something else. Ambiance is super cozy, loved the lighting. Will definitely be back.",
    dish: "Fish & Chips",
  },
  {
    name: "Sana Rehman",
    location: "Jinnahabad",
    rating: 5,
    platform: "Facebook",
    text: "The Urban Special Pizza is worth every rupee. Generous toppings, great crust, and it actually feeds two people properly. Service was quick even on a busy Saturday evening. The Chocolate Lava Cake at the end was absolutely incredible.",
    dish: "Urban Special Pizza",
  },
  {
    name: "Ali Zafar",
    location: "Abbottabad",
    rating: 4,
    platform: "Google",
    text: "Came here with friends at 11 PM and they were still running full service — really appreciate that they stay open late. The Alfredo Pasta was creamy and rich without being heavy. Good portion sizes and the mint margarita was refreshing.",
    dish: "Alfredo Pasta",
  },
];

function Stars({ count }) {
  return (
    <span className="stars" aria-label={`${count} out of 5 stars`}>
      {"★".repeat(count)}{"☆".repeat(5 - count)}
    </span>
  );
}

export default function Testimonials() {
  return (
    <section className={styles.section}>
      <div className="container">
        <div className={styles.header}>
          <span className="section-eyebrow reveal">What People Say</span>
          <h2 className={`section-title reveal reveal-delay-1`}>
            4.1 Stars. <span>555 Reviews.</span>
          </h2>
          <div className="amber-rule reveal reveal-delay-1" />
        </div>

        <div className={styles.grid}>
          {reviews.map((r, i) => (
            <figure
              key={r.name}
              className={`${styles.card} reveal reveal-delay-${i + 1}`}
            >
              <div className={styles.cardTop}>
                <div className={styles.avatar} aria-hidden="true">
                  {r.name[0]}
                </div>
                <div>
                  <p className={styles.reviewerName}>{r.name}</p>
                  <p className={styles.reviewerMeta}>
                    {r.location} · {r.platform}
                  </p>
                </div>
                <div className={styles.platformBadge}>{r.platform}</div>
              </div>
              <div className={styles.stars} aria-label={`${r.rating} stars`}>
                {Array.from({ length: 5 }).map((_, j) => (
                  <span key={j} className={j < r.rating ? styles.starFilled : styles.starEmpty}>
                    ★
                  </span>
                ))}
              </div>
              <blockquote className={styles.quote}>
                <p>&ldquo;{r.text}&rdquo;</p>
              </blockquote>
              <figcaption className={styles.dish}>
                Ordered: <strong>{r.dish}</strong>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
