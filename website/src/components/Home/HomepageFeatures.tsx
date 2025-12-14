import React, { useRef, useEffect } from 'react';
import type { ReactNode } from 'react';
import Heading from '@theme/Heading';
import styles from './HomepageFeatures.module.css';

type UseCaseItem = {
  title: string;
  category: string;
  description: ReactNode;
  example: string;
  demoText: string[];
};

const UseCaseList: UseCaseItem[] = [
  {
    title: 'Hero Headlines',
    category: 'Landing Pages',
    description: (
      <>
        Rotate through multiple value propositions or taglines in your hero section. Perfect for showcasing different product benefits or brand messages dynamically.
      </>
    ),
    example: 'Fast • Reliable • Secure',
    demoText: ['Fast', 'Reliable', 'Secure']
  },
  {
    title: 'Feature Rotations',
    category: 'Product Pages',
    description: (
      <>
        Highlight different features or capabilities in a compact space. Ideal for product descriptions, pricing pages, and feature comparison sections.
      </>
    ),
    example: 'TypeScript • React • Angular • Vue',
    demoText: ['TypeScript', 'React', 'Angular', 'Vue']
  },
  {
    title: 'Customer Testimonials',
    category: 'Social Proof',
    description: (
      <>
        Cycle through customer quotes and reviews to build trust. Great for displaying multiple testimonials without taking up too much space.
      </>
    ),
    example: '"Best tool ever!" • "Saved us hours!" • "Amazing support!"',
    demoText: ['"Best tool ever!"', '"Saved us hours!"', '"Amazing support!"']
  },
  {
    title: 'Live Announcements',
    category: 'Updates',
    description: (
      <>
        Keep users informed with scrolling announcements or update banners. Ideal for broadcasting new releases, maintenance alerts, or community news.
      </>
    ),
    example: 'v2.0 Released! • New Documentation Available • Join Discord',
    demoText: ['v2.0 Released!', 'New Documentation Available', 'Join Discord']
  },
  {
    title: 'Status Messages',
    category: 'Dashboards',
    description: (
      <>
        Display rotating status updates, notifications, or system messages. Perfect for admin panels, monitoring dashboards, and alert systems.
      </>
    ),
    example: 'All Systems OK • 99.9% Uptime • 0 Errors',
    demoText: ['All Systems OK', '99.9% Uptime', '0 Errors']
  },
  {
    title: 'Brand Values',
    category: 'Branding',
    description: (
      <>
        Communicate your company's core values or mission with animated taglines. Ideal for headers, footers, and about page hero sections.
      </>
    ),
    example: 'Innovate • Inspire • Impact',
    demoText: ['Innovate', 'Inspire', 'Impact']
  },
];

function UseCase({ title, category, description, example, demoText }: UseCaseItem) {
  return (
    <div className={styles.useCaseCard}>
      <div className={styles.useCaseCategory}>{category}</div>
      <Heading as="h3" className={styles.useCaseTitle}>{title}</Heading>
      <p className={styles.useCaseDescription}>{description}</p>
      <div className={styles.useCaseExample}>
        <div className={styles.exampleLabel}>Example:</div>
        <div className={styles.exampleText}>{example}</div>
      </div>
    </div>
  );
}

export default function HomepageFeatures(): ReactNode {
  const scrollSectionRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const scrollSection = scrollSectionRef.current;
    const track = trackRef.current;

    if (!scrollSection || !track) return;

    const handleScroll = () => {
      const rect = scrollSection.getBoundingClientRect();
      const sectionTop = rect.top;
      const sectionHeight = rect.height;
      const viewportHeight = window.innerHeight;
      const viewportWidth = window.innerWidth;
      const viewportCenter = viewportWidth / 2;

      // Calculate how far we've scrolled into the section
      const scrollDistance = sectionHeight - viewportHeight;
      let scrolled = -sectionTop;

      // Clamp the value between 0 and scrollDistance
      if (scrolled < 0) scrolled = 0;
      if (scrolled > scrollDistance) scrolled = scrollDistance;

      // Calculate the percentage scrolled
      const progress = scrolled / scrollDistance;

      // Calculate the total width of the track minus the viewport width
      const trackWidth = track.scrollWidth;
      const maxTranslate = trackWidth - viewportWidth;

      // Translate the track
      const translateX = maxTranslate * progress;
      track.style.transform = `translateX(-${translateX}px)`;

      // Apply scale/opacity to cards based on distance from center
      const cards = track.children;
      for (let i = 0; i < cards.length; i++) {
        const card = cards[i] as HTMLElement;
        const cardRect = card.getBoundingClientRect();
        const cardCenter = cardRect.left + cardRect.width / 2;
        const distFromCenter = Math.abs(viewportCenter - cardCenter);

        // Calculate scale and opacity
        // Range of influence: 500px from center
        const maxDist = 500;
        let factor = 1 - Math.min(distFromCenter / maxDist, 1);

        // Easing the factor for smoother drop-off
        factor = Math.pow(factor, 1.5);

        // Scale: 0.8 at edge, 1.1 at center
        const scale = 0.8 + (0.3 * factor);
        // Opacity: 0.5 at edge, 1 at center
        const opacity = 0.5 + (0.5 * factor);

        card.style.transform = `scale(${scale})`;
        card.style.opacity = `${opacity}`;
      }
    };

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('resize', handleScroll);
    // Initial call to set position
    handleScroll();

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleScroll);
    };
  }, []);

  return (
    <section ref={scrollSectionRef} className={styles.scrollSection}>
      <div className={styles.stickyWrapper}>
        <Heading as="h2" className={styles.useCasesTitle}>
          Real-World Use Cases
        </Heading>
        <p className={styles.useCasesSubtitle}>
          See how developers are using web-scrolling-text to create engaging experiences
        </p>
        <div ref={trackRef} className={styles.horizontalScrollTrack}>
          {UseCaseList.map((props, idx) => (
            <div key={idx} className={styles.cardWrapper}>
              <UseCase {...props} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
