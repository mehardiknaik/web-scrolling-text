import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Layout from "@theme/Layout";
import React from "react";
import PlaygroundComponent from "@site/src/components/Playground";

const Playground = () => {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout
      title={`Playground - ${siteConfig.title}`}
      description="Interactive playground to test and configure web-scrolling-text animations"
    >
      <main>
        <PlaygroundComponent />
      </main>
    </Layout>
  );
};

export default Playground;
