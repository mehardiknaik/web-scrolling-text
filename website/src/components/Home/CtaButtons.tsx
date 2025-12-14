import React from "react";
import Link from "@docusaurus/Link";
import styles from "./CtaButtons.module.css";

export default function CtaButtons() {
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
