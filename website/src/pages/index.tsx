import type { ReactNode } from "react";
import clsx from "clsx";
import Link from "@docusaurus/Link";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Layout from "@theme/Layout";
import HomepageFeatures from "@site/src/components/HomepageFeatures";
import Heading from "@theme/Heading";
import ScrollingText from "web-scrolling-text/react";
import fade from "web-scrolling-text/animation/fade";
import AnimatedBackground from "@site/src/components/AnimatedBackground";

import styles from "./index.module.css";

function HomepageHeader() {
  
  const heroWords = [
    "Engaging🎯",
    "Beautiful✨",
    "Smooth🚀",
    "Modern💫",
    "Dynamic🎨",
  ];

  return (
    <header className={clsx("hero hero--primary", styles.heroBanner)}>
      <AnimatedBackground />
      <div className={clsx("container", styles.container)}>
        <Heading as="h1" className={clsx("hero__title", styles.heroTitle)}>
          Create{" "}
          <ScrollingText
            options={{
              ...fade,
              interval: 2500,
              animationDuration: 800,
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
            className="button button--secondary button--lg"
            to="/docs/intro"
          >
            Get Started - 5min ⏱️
          </Link>
          <Link
            className={clsx("button button--outline button--lg", styles.secondaryButton)}
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

function FeatureShowcase() {
  return (
    <section className={styles.showcase}>
      <div className="container">
        <Heading as="h2" className={styles.showcaseTitle}>
          Why Choose Web Scrolling Text?
        </Heading>
        
        <div className={styles.showcaseGrid}>
          <div className={styles.showcaseCard}>
            <div className={styles.showcaseIcon}>⚡</div>
            <h3>Lightning Fast</h3>
            <p>Optimized performance with minimal bundle size. Only ~3KB gzipped for core functionality.</p>
          </div>

          <div className={styles.showcaseCard}>
            <div className={styles.showcaseIcon}>🎨</div>
            <h3>8 Pre-built Animations</h3>
            <p>Fade, bounce, flip, rotate, scale, hinge, and more. Mix and match enter/exit animations.</p>
          </div>

          <div className={styles.showcaseCard}>
            <div className={styles.showcaseIcon}>🔧</div>
            <h3>Fully Customizable</h3>
            <p>Control timing, duration, loops, and callbacks. Use custom CSS animations if needed.</p>
          </div>

          <div className={styles.showcaseCard}>
            <div className={styles.showcaseIcon}>📱</div>
            <h3>Responsive & Accessible</h3>
            <p>Works perfectly on all devices and screen sizes. Built with accessibility in mind.</p>
          </div>

          <div className={styles.showcaseCard}>
            <div className={styles.showcaseIcon}>🔷</div>
            <h3>TypeScript Support</h3>
            <p>Full TypeScript definitions included. Get autocomplete and type safety out of the box.</p>
          </div>

          <div className={styles.showcaseCard}>
            <div className={styles.showcaseIcon}>🌐</div>
            <h3>Framework Agnostic</h3>
            <p>Use with React, Next.js, Angular, Vue, or vanilla JavaScript. Your choice.</p>
          </div>
        </div>
      </div>
    </section>
  );
}

function CodeExample() {
  return (
    <section className={styles.codeSection}>
      <div className="container">
        <Heading as="h2" className={styles.sectionTitle}>
          Simple. Powerful. Beautiful.
        </Heading>
        <p className={styles.sectionSubtitle}>
          Get started in seconds with just a few lines of code
        </p>
        
        <div className={styles.codeExample}>
          <div className={styles.codeTab}>React Example</div>
          <pre className={styles.codeBlock}>
            <code>{`import ScrollingText from "web-scrolling-text/react";
import fade from "web-scrolling-text/animation/fade";

function App() {
  return (
    <ScrollingText options={fade}>
      <div>Hello World</div>
      <div>Beautiful Animations</div>
      <div>Easy to Use</div>
    </ScrollingText>
  );
}`}</code>
          </pre>
        </div>

        <div className={styles.ctaButtons}>
          <Link
            className="button button--primary button--lg"
            to="/docs/intro"
          >
            📚 Read the Docs
          </Link>
          <Link
            className="button button--outline button--lg"
            to="/examples"
          >
            👀 View Examples
          </Link>
        </div>
      </div>
    </section>
  );
}

function StatsSection() {
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

export default function Home(): ReactNode {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout
      title={`${siteConfig.title} - Beautiful Scrolling Text Animations`}
      description="Create engaging scrolling text animations with ease. Lightweight, customizable, and framework-agnostic library for React, Next.js, Angular, and vanilla JavaScript."
    >
      <HomepageHeader />
      <main>
        <StatsSection />
        <FeatureShowcase />
        <HomepageFeatures />
        <CodeExample />
      </main>
    </Layout>
  );
}
