import React from "react";
import styles from "./StatsSection.module.css";
import AnimatedNumber from "../Common/AnimateNumber";

export default function StatsSection() {
    return (
        <section className={styles.statsSection}>
            <div className="container">
                <div className={styles.statsGrid}>
                    <div className={styles.statCard}>
                        <div className={styles.statNumber}>~<AnimatedNumber value={3} initial={20} duration={.8} />KB</div>
                        <div className={styles.statLabel}>Bundle Size</div>
                    </div>
                    <div className={styles.statCard}>
                        <div className={styles.statNumber}><AnimatedNumber value={8} duration={.6} />+</div>
                        <div className={styles.statLabel}>Animations</div>
                    </div>
                    <div className={styles.statCard}>
                        <div className={styles.statNumber}><AnimatedNumber value={100} duration={.9} />%</div>
                        <div className={styles.statLabel}>TypeScript</div>
                    </div>
                    <div className={styles.statCard}>
                        <div className={styles.statNumber}>
                            <AnimatedNumber value={0} initial={9} duration={.8} />
                        </div>
                        <div className={styles.statLabel}>Dependencies</div>
                    </div>
                </div>
            </div>
        </section>
    );
}
