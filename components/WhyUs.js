import styles from "./WhyUs.module.css";

const features = [
  {
    icon: "🌿",
    title: "Fresh Ingredients",
    body: "Every dish is prepared fresh to order. No shortcuts, no frozen shortcuts — just quality ingredients and honest cooking.",
  },
  {
    icon: "🏮",
    title: "Cozy Ambiance",
    body: "Warm lighting, comfortable seating, and a relaxed urban vibe. The kind of place you stay longer than you planned.",
  },
  {
    icon: "⚡",
    title: "Fast Service",
    body: "We respect your time. Hot food served quickly, with a team that actually pays attention to your table.",
  },
];

export default function WhyUs() {
  return (
    <section className={styles.section}>
      <div className="container">
        <div className={styles.header}>
          <span className="section-eyebrow reveal">Why Urban Cafe</span>
          <h2 className={`section-title reveal reveal-delay-1`}>
            More Than Just <span>Food</span>
          </h2>
          <div className="amber-rule reveal reveal-delay-1" />
        </div>

        <div className={styles.grid}>
          {features.map((f, i) => (
            <div
              key={f.title}
              className={`${styles.card} reveal reveal-delay-${i + 1}`}
            >
              <div className={styles.icon} aria-hidden="true">
                {f.icon}
              </div>
              <h3 className={styles.title}>{f.title}</h3>
              <p className={styles.body}>{f.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
