import React from "react";
import type { ReactNode } from "react";
import clsx from "clsx";
import Link from "@docusaurus/Link";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Layout from "@theme/Layout";
import HomepageFeatures from "@site/src/components/HomepageFeatures";
import Heading from "@theme/Heading";
import ScrollingText from "web-scrolling-text/react";
import fade from "web-scrolling-text/animation/fade";
import CodeBlock from '@theme/CodeBlock';

const AnimatedBackground = React.lazy(() => import("@site/src/components/AnimatedBackground"));

import styles from "./index.module.css";

function HomepageHeader() {
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

function PlatformsSection() {
  const [activePlatform, setActivePlatform] = React.useState<number>(0);
  const platformRefs = React.useRef<(HTMLDivElement | null)[]>([]);

  const platforms = [
    {
      name: "React",
      icon: "⚛️",
      title: "React Integration",
      description: "Seamlessly integrate scrolling text animations into your React applications with our dedicated React component. Fully typed with TypeScript support and hooks-ready.",
      features: [
        "Native React component",
        "Full TypeScript support",
        "Hooks compatible",
        "SSR ready for Next.js"
      ],
      code: `import ScrollingText from "web-scrolling-text/react";
import fade from "web-scrolling-text/animation/fade";

function App() {
  return (
    <ScrollingText options={fade}>
      <div>Hello World</div>
      <div>Beautiful Animations</div>
      <div>Easy to Use</div>
    </ScrollingText>
  );
}`,
    },
    {
      name: "Vanilla JS",
      icon: "🟨",
      title: "Vanilla JavaScript",
      description: "Use with plain JavaScript for maximum flexibility and zero dependencies. Perfect for any project without framework constraints. Lightweight and fast.",
      features: [
        "Zero dependencies",
        "Framework agnostic",
        "Tiny bundle size (~3KB)",
        "Works everywhere"
      ],
      code: `import ScrollingText from "web-scrolling-text";
import fade from "web-scrolling-text/animation/fade";

const container = document.getElementById('scrolling-text');
const scrollingText = new ScrollingText(container, {
  ...fade,
  interval: 3000
});

scrollingText.start();`,
    },
    {
      name: "Angular",
      icon: "🅰️",
      title: "Angular Support",
      description: "Integrate smoothly into your Angular applications with full lifecycle support. Works with Angular's change detection and component architecture out of the box.",
      features: [
        "Angular lifecycle compatible",
        "Directive support",
        "Zone.js friendly",
        "AOT compilation ready"
      ],
      code: `import { Component } from '@angular/core';
import ScrollingText from 'web-scrolling-text';
import fade from 'web-scrolling-text/animation/fade';

@Component({
  selector: 'app-root',
  template: '<div #scrollingText></div>'
})
export class AppComponent {
  ngAfterViewInit() {
    const st = new ScrollingText(this.scrollingText, fade);
    st.start();
  }
}`,
    },
  ];

  React.useEffect(() => {
    const observers = platformRefs.current.map((ref, index) => {
      if (!ref) return null;

      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              setActivePlatform(index);
            }
          });
        },
        {
          threshold: 0.6,
          rootMargin: "-20% 0px -20% 0px"
        }
      );

      observer.observe(ref);
      return observer;
    });

    return () => {
      observers.forEach((observer) => observer?.disconnect());
    };
  }, []);

  return (
    <section className={styles.platformsSection}>
      <div className="container">
        <Heading as="h2" className={styles.sectionTitle}>
          Works With All Platforms
        </Heading>
        <p className={styles.sectionSubtitle}>
          Use the same powerful API across React, Vanilla JavaScript, and Angular
        </p>

        <div className={styles.platformsGrid}>
          {/* Left Column - Scrollable Descriptions */}
          <div className={styles.platformsLeft}>
            {platforms.map((platform, index) => (
              <div key={platform.name}>
                <div
                  ref={(el) => { platformRefs.current[index] = el; }}
                  className={`${styles.platformCard} ${activePlatform === index ? styles.platformCardActive : ""
                    }`}
                >
                  <div className={styles.platformHeader}>
                    <span className={styles.platformIcon}>{platform.icon}</span>
                    <h3 className={styles.platformTitle}>{platform.title}</h3>
                  </div>
                  <p className={styles.platformDescription}>{platform.description}</p>
                  <ul className={styles.platformFeatures}>
                    {platform.features.map((feature, idx) => (
                      <li key={idx}>✓ {feature}</li>
                    ))}
                  </ul>

                  {/* Mobile Code Block - Shows after each platform card */}
                  <div className={styles.mobileCodeBlock}>
                    <div className={styles.vsCodeWindow}>
                      {/* macOS Traffic Lights */}
                      <div className={styles.vsCodeTitleBar}>
                        <div className={styles.trafficLights}>
                          <span className={styles.trafficLight} style={{ backgroundColor: '#ff5f56' }}></span>
                          <span className={styles.trafficLight} style={{ backgroundColor: '#ffbd2e' }}></span>
                          <span className={styles.trafficLight} style={{ backgroundColor: '#27c93f' }}></span>
                        </div>
                        <div className={styles.vsCodeTitle}>
                          {platform.name === "React" && "App.jsx"}
                          {platform.name === "Vanilla JS" && "index.js"}
                          {platform.name === "Angular" && "app.component.ts"}
                        </div>
                      </div>

                      {/* VS Code Tab Bar */}
                      <div className={styles.vsCodeTabBar}>
                        <div className={styles.vsCodeTab}>
                          <span className={styles.vsCodeTabIcon}>
                            {platform.name === "React" && "⚛️"}
                            {platform.name === "Vanilla JS" && "JS"}
                            {platform.name === "Angular" && "TS"}
                          </span>
                          <span className={styles.vsCodeTabName}>
                            {platform.name === "React" && "App.jsx"}
                            {platform.name === "Vanilla JS" && "index.js"}
                            {platform.name === "Angular" && "app.component.ts"}
                          </span>
                        </div>
                      </div>

                      {/* Code Editor Area */}
                      <div className={styles.codeExampleContainer}>
                        <div className={styles.codeExample}>
                          <div className={styles.codeBlockWrapper} data-theme="dark">
                            <CodeBlock
                              language={
                                platform.name === "React" ? "jsx" :
                                  platform.name === "Angular" ? "typescript" :
                                    "javascript"
                              }
                            >
                              {platform.code}
                            </CodeBlock>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Right Column - Sticky Code Preview (Desktop only) */}
          <div className={styles.platformsRight}>
            <div className={styles.codePreviewSticky}>
              {/* VS Code Window Chrome */}
              <div className={styles.vsCodeWindow}>
                {/* macOS Traffic Lights */}
                <div className={styles.vsCodeTitleBar}>
                  <div className={styles.trafficLights}>
                    <span className={styles.trafficLight} style={{ backgroundColor: '#ff5f56' }}></span>
                    <span className={styles.trafficLight} style={{ backgroundColor: '#ffbd2e' }}></span>
                    <span className={styles.trafficLight} style={{ backgroundColor: '#27c93f' }}></span>
                  </div>
                  <div className={styles.vsCodeTitle}>
                    {platforms[activePlatform].name === "React" && "App.jsx"}
                    {platforms[activePlatform].name === "Vanilla JS" && "index.js"}
                    {platforms[activePlatform].name === "Angular" && "app.component.ts"}
                  </div>
                </div>

                {/* VS Code Tab Bar */}
                <div className={styles.vsCodeTabBar}>
                  <div className={styles.vsCodeTab}>
                    <span className={styles.vsCodeTabIcon}>
                      {platforms[activePlatform].name === "React" && "⚛️"}
                      {platforms[activePlatform].name === "Vanilla JS" && "JS"}
                      {platforms[activePlatform].name === "Angular" && "TS"}
                    </span>
                    <span className={styles.vsCodeTabName}>
                      {platforms[activePlatform].name === "React" && "App.jsx"}
                      {platforms[activePlatform].name === "Vanilla JS" && "index.js"}
                      {platforms[activePlatform].name === "Angular" && "app.component.ts"}
                    </span>
                  </div>
                </div>

                {/* Code Editor Area */}
                <div className={styles.codeExampleContainer}>
                  {platforms.map((platform, index) => (
                    <div
                      key={platform.name}
                      className={`${styles.codeExample} ${activePlatform === index ? styles.codeExampleActive : ""
                        }`}
                    >
                      <div className={styles.codeBlockWrapper} data-theme="dark">
                        <CodeBlock
                          language={
                            platform.name === "React" ? "jsx" :
                              platform.name === "Angular" ? "typescript" :
                                "javascript"
                          }
                        >
                          {platform.code}
                        </CodeBlock>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
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

function CtaButtons() {
  return (
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
        <PlatformsSection />
        <FeatureShowcase />
        <HomepageFeatures />
        <CtaButtons />
      </main>
    </Layout>
  );
}
