"use client";
import { useState } from "react";
import { menuItems, categories } from "./menuData";
import styles from "./Menu.module.css";

export default function Menu() {
  const [active, setActive] = useState("all");

  const filtered =
    active === "all" ? menuItems : menuItems.filter((i) => i.category === active);

  return (
    <section id="menu" className={styles.menu}>
      <div className="container">
        <div className={styles.header}>
          <span className="section-eyebrow reveal">What We Serve</span>
          <h2 className={`section-title reveal reveal-delay-1`}>
            The <span>Menu</span>
          </h2>
          <div className="amber-rule reveal reveal-delay-1" />
        </div>

        {/* Category tabs */}
        <div
          className={`${styles.tabs} reveal reveal-delay-2`}
          role="tablist"
          aria-label="Menu categories"
        >
          {categories.map((cat) => (
            <button
              key={cat.id}
              role="tab"
              aria-selected={active === cat.id}
              className={`${styles.tab} ${active === cat.id ? styles.tabActive : ""}`}
              onClick={() => setActive(cat.id)}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Cards grid */}
        <div className={styles.grid} role="tabpanel">
          {filtered.map((item, i) => (
            <div
              key={item.id}
              className={styles.card}
              style={{ animationDelay: `${(i % 8) * 0.05}s` }}
            >
              <div className={styles.cardEmoji} aria-hidden="true">
                {item.emoji}
              </div>
              <div className={styles.cardBody}>
                <div className={styles.cardTop}>
                  <h3 className={styles.cardName}>{item.name}</h3>
                  {item.tag && (
                    <span className={styles.cardTag}>{item.tag}</span>
                  )}
                </div>
                <p className={styles.cardDesc}>{item.desc}</p>
                <div className={styles.cardFooter}>
                  <span className={styles.cardPrice}>
                    {item.price ? item.price : "Ask for price"}
                  </span>
                  <a
                    href={`https://wa.me/923139755550?text=Hi, I'd like to order: ${encodeURIComponent(item.name)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.cardOrder}
                    aria-label={`Order ${item.name} on WhatsApp`}
                  >
                    Order
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className={`${styles.foodpanda} reveal`}>
          <p>
            Also available on{" "}
            <a
              href="https://www.foodpanda.pk"
              target="_blank"
              rel="noopener noreferrer"
            >
              🐼 foodpanda
            </a>{" "}
            for delivery
          </p>
        </div>
      </div>
    </section>
  );
}
