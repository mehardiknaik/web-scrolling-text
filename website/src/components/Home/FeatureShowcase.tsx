import React from "react";
import Heading from "@theme/Heading";
import styles from "./FeatureShowcase.module.css";

export default function FeatureShowcase() {
    const features = [
        {
            icon: "⚡",
            title: "Lightning Fast",
            description: "Optimized for performance with smooth 60fps animations. Only ~3KB gzipped - smaller than a single image.",
            color: "primary"
        },
        {
            icon: "🎨",
            title: "8+ Animations",
            description: "Fade, bounce, flip, rotate, scale, and more. Mix and match enter/exit animations for endless possibilities.",
            color: "success"
        },
        {
            icon: "🔧",
            title: "Highly Customizable",
            description: "Fine-tune timing, duration, loops, and callbacks. Or create your own custom CSS animations.",
            color: "info"
        },
        {
            icon: "📱",
            title: "Responsive & Accessible",
            description: "Works flawlessly on all devices and screen sizes. Built with accessibility best practices in mind.",
            color: "warning"
        },
        {
            icon: "🔷",
            title: "TypeScript First",
            description: "Full TypeScript support with complete type definitions. Enjoy autocomplete and type safety everywhere.",
            color: "danger"
        },
        {
            icon: "🌐",
            title: "Framework Agnostic",
            description: "Use with React, Next.js, Angular, Vue, or vanilla JavaScript. One API, unlimited possibilities.",
            color: "secondary"
        },
    ];

    return (
        <section className={styles.showcase}>
            <div className="container">
                <Heading as="h2" className={styles.showcaseTitle}>
                    Why Choose Web Scrolling Text?
                </Heading>
                <p className={styles.showcaseSubtitle}>
                    Everything you need to create stunning text animations
                </p>

                <div className={styles.showcaseGrid}>
                    {features.map((feature, idx) => (
                        <div key={idx} className={styles.showcaseCard}>
                            <div className={styles.showcaseIconWrapper}>
                                <div className={styles.showcaseIcon}>{feature.icon}</div>
                            </div>
                            <h3 className={styles.showcaseCardTitle}>{feature.title}</h3>
                            <p className={styles.showcaseCardDescription}>{feature.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
