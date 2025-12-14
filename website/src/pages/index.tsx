import React from "react";
import type { ReactNode } from "react";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Layout from "@theme/Layout";
import HomepageFeatures from "@site/src/components/Home/HomepageFeatures";
import HomepageHeader from "@site/src/components/Home/HomepageHeader";
import FeatureShowcase from "@site/src/components/Home/FeatureShowcase";
import PlatformsSection from "@site/src/components/Home/PlatformsSection";
import StatsSection from "@site/src/components/Home/StatsSection";
import CtaButtons from "@site/src/components/Home/CtaButtons";

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
