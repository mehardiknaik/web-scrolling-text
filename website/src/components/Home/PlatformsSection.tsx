import React from "react";
import Heading from "@theme/Heading";
import styles from "./PlatformsSection.module.css";

export default function PlatformsSection() {
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
                    threshold: window.innerWidth < 768 ? 0.2 : 0.6,
                    rootMargin: window.innerWidth < 768 ? "-10% 0px -10% 0px" : "-20% 0px -20% 0px"
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
        <section className={styles.platformsSection} data-active-platform={activePlatform}>
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
                                                    <pre className={styles.codeBlock}>
                                                        <code>{platform.code}</code>
                                                    </pre>
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
                                            <pre className={styles.codeBlock}>
                                                <code>{platform.code}</code>
                                            </pre>
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
