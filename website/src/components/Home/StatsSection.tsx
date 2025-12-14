import React from "react";
import styles from "./StatsSection.module.css";

export default function StatsSection() {
    return (
        <section className={styles.statsSection}>
            <div className="container">
                <div className={styles.statsGrid}>
                    <div className={styles.statCard}>
                        <div className={styles.statNumber}>~3KB</div>
                        <div className={styles.statLabel}>Bundle Size</div>
                    </div>
                    <div className={styles.statCard}>
                        <div className={styles.statNumber}>8+</div>
                        <div className={styles.statLabel}>Animations</div>
                    </div>
                    <div className={styles.statCard}>
                        <div className={styles.statNumber}>100%</div>
                        <div className={styles.statLabel}>TypeScript</div>
                    </div>
                    <div className={styles.statCard}>
                        <div className={styles.statNumber}>0</div>
                        <div className={styles.statLabel}>Dependencies</div>
                    </div>
                </div>
            </div>
        </section>
    );
}
