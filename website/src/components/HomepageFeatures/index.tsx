import React from 'react';
import type { ReactNode } from 'react';
import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

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
    <div className={clsx('col col--4', styles.useCaseCol)}>
      <div className={styles.useCaseCard}>
        <div className={styles.useCaseCategory}>{category}</div>
        <Heading as="h3" className={styles.useCaseTitle}>{title}</Heading>
        <p className={styles.useCaseDescription}>{description}</p>
        <div className={styles.useCaseExample}>
          <div className={styles.exampleLabel}>Example:</div>
          <div className={styles.exampleText}>{example}</div>
        </div>
      </div>
    </div>
  );
}

export default function HomepageFeatures(): ReactNode {
  return (
    <section className={styles.useCases}>
      <div className="container">
        <Heading as="h2" className={styles.useCasesTitle}>
          Real-World Use Cases
        </Heading>
        <p className={styles.useCasesSubtitle}>
          See how developers are using web-scrolling-text to create engaging experiences
        </p>
        <div className="row">
          {UseCaseList.map((props, idx) => (
            <UseCase key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
