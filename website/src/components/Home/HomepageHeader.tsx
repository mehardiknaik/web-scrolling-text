import React, { memo } from "react";
import clsx from "clsx";
import Link from "@docusaurus/Link";
import Heading from "@theme/Heading";
import ScrollingText from "web-scrolling-text/react";
import fade from "web-scrolling-text/animation/cinematic";
import styles from "./HomepageHeader.module.css";
import { motion } from "motion/react";

const AnimatedBackground = React.lazy(() => import(/* webpackChunkName: "animated-background" */"@site/src/components/AnimatedBackground"));

const AnimateLink = motion(Link);

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
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{
                            duration: 0.5,
                            delay: 0.01
                        }}
                    >
                        Create{" "}
                    </motion.div>
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{
                            duration: 0.5,
                            delay: 0.2,
                        }}
                    >
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
                    </motion.div>
                    <motion.div initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{
                            duration: 0.5,
                            delay: 0.35,
                        }}>Scrolling Text Animations</motion.div>
                </Heading>
                <motion.p initial={{ opacity: 0, scale: 0.6 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{
                        duration: 0.5,
                        delay: 0.5,
                    }} className={clsx("hero__subtitle", styles.heroSubtitle)}>
                    A lightweight, customizable library for creating stunning scrolling text effects.
                    <br />
                    Works with React, Next.js, Angular, or plain JavaScript.
                </motion.p>
                <LinkComp />
                <motion.div initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{
                        duration: 0.5,
                        delay: 0.7,
                    }} className={styles.quickInstall}>
                    <code className={styles.installCommand}>npm install web-scrolling-text</code>
                </motion.div>
            </div>
        </header>
    );
}

const LinkComp = memo(() => {
    return (<div className={styles.buttons}>
        <AnimatedLinkComp initial={{ opacity: 0, x: -200 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{
                duration: 0.5,
                delay: 0.7,
                type: "spring"
            }}
            className={clsx("button button--lg", styles.animatedBorderButton)}
            to="/docs/intro">
            Get Started - 5min ⏱️
        </AnimatedLinkComp>
        <AnimateLink
            initial={{ opacity: 0, x: 200 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{
                duration: 0.5,
                delay: 0.7,
                type: "spring"
            }}
            className={clsx("button button--secondary button--lg")}
            to="/playground"
        >
            Try Playground 🎮
        </AnimateLink>
    </div>)
})

const AnimatedLinkComp = (props: React.ComponentProps<typeof AnimateLink>) => {
    return (<AnimateLink {...props} />)
}