import React from "react";
import clsx from "clsx";
import Link from "@docusaurus/Link";
import Heading from "@theme/Heading";
import ScrollingText from "web-scrolling-text/react";
import fade from "web-scrolling-text/animation/cinematic";
import styles from "./HomepageHeader.module.css";

const AnimatedBackground = React.lazy(() => import("@site/src/components/AnimatedBackground"));

export default function HomepageHeader() {
    const [pattern, setPattern] = React.useState<number>(0);
    const changeCounter = React.useRef<number>(0);

    const heroWords = [
        "Engaging🎯",
        "Beautiful✨",
        "Smooth🚀",
        "Modern💫",
        "Dynamic🎨",
    ];

    const handlePatternChange = (index: number) => {
        changeCounter.current += 1;
        if (changeCounter.current % 2 === 0) {
            setPattern((prev) => (prev + 1) % 100);
        }
    }

    return (
        <header className={clsx(styles.heroBanner)}>
            <AnimatedBackground pattern={pattern as any} />
            <div className={clsx("container", styles.container)}>
                <Heading as="h1" className={clsx("hero__title", styles.heroTitle)}>
                    Create{" "}
                    <ScrollingText
                        options={{
                            ...fade,
                            interval: 2500,
                            animationDuration: 800,
                            onChange: handlePatternChange,
                        }}
                    >
                        {heroWords.map((word, index) => (
                            <span key={index}>{word}</span>
                        ))}
                    </ScrollingText>
                    Scrolling Text Animations
                </Heading>
                <p className={clsx("hero__subtitle", styles.heroSubtitle)}>
                    A lightweight, customizable library for creating stunning scrolling text effects.
                    <br />
                    Works with React, Next.js, Angular, or plain JavaScript.
                </p>
                <div className={styles.buttons}>
                    <Link
                        className="button button--primary button--lg"
                        to="/docs/intro"
                    >
                        Get Started - 5min ⏱️
                    </Link>
                    <Link
                        className={clsx("button button--secondary button--lg")}
                        to="/playground"
                    >
                        Try Playground 🎮
                    </Link>
                </div>
                <div className={styles.quickInstall}>
                    <code className={styles.installCommand}>npm install web-scrolling-text</code>
                </div>
            </div>
        </header>
    );
}
