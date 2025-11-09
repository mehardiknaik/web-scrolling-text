import React from 'react';
import styles from './Playground.module.css';

interface CodeGeneratorProps {
  texts: string[];
  interval: number;
  animationDuration: number;
  loop: boolean;
  enterAnimation: string;
  exitAnimation: string;
}

const CodeGenerator: React.FC<CodeGeneratorProps> = ({
  texts,
  interval,
  animationDuration,
  loop,
  enterAnimation,
  exitAnimation,
}) => {
  const [activeTab, setActiveTab] = React.useState<'react' | 'vanilla'>('react');

  const generateReactCode = () => {
    const needsEnterImport = enterAnimation !== 'none';
    const needsExitImport = exitAnimation !== 'none' && exitAnimation !== enterAnimation;
    
    let imports = '';
    if (needsEnterImport) {
      imports += `import ${enterAnimation} from "web-scrolling-text/animation/${enterAnimation}";\n`;
    }
    if (needsExitImport) {
      imports += `import ${exitAnimation} from "web-scrolling-text/animation/${exitAnimation}";\n`;
    }

    let animationOptions = '';
    if (enterAnimation !== 'none') {
      animationOptions += `\n    enterAnimation: ${enterAnimation}.enterAnimation,`;
    }
    if (exitAnimation !== 'none') {
      animationOptions += `\n    exitAnimation: ${exitAnimation}.exitAnimation,`;
    }

    const options = `{
    interval: ${interval},
    animationDuration: ${animationDuration},
    loop: ${loop},${animationOptions}
  }`;

    return `import ScrollingText from "web-scrolling-text/react";
${imports}
function App() {
  return (
    <ScrollingText options={${options}}>
${texts.map(text => `      <div>${text}</div>`).join('\n')}
    </ScrollingText>
  );
}`;
  };

  const generateVanillaCode = () => {
    const needsEnterScript = enterAnimation !== 'none';
    const needsExitScript = exitAnimation !== 'none' && exitAnimation !== enterAnimation;
    
    let scripts = '';
    if (needsEnterScript) {
      scripts += `<script src="https://unpkg.com/web-scrolling-text/dist/animation/${enterAnimation}.min.js"></script>\n`;
    }
    if (needsExitScript) {
      scripts += `<script src="https://unpkg.com/web-scrolling-text/dist/animation/${exitAnimation}.min.js"></script>\n`;
    }

    let animationOptions = '';
    if (enterAnimation !== 'none') {
      animationOptions += `\n      enterAnimation: ScrollingTextAnimation.${enterAnimation}.enterAnimation,`;
    }
    if (exitAnimation !== 'none') {
      animationOptions += `\n      exitAnimation: ScrollingTextAnimation.${exitAnimation}.exitAnimation,`;
    }

    const textsArray = `[${texts.map(t => `"${t}"`).join(', ')}]`;

    return `<div id="scrollingText"></div>
<script src="https://unpkg.com/web-scrolling-text/dist/index.min.js"></script>
${scripts}<script>
  const scroller = new ScrollingText(
    document.getElementById("scrollingText"),
    ${textsArray},
    {
      interval: ${interval},
      animationDuration: ${animationDuration},
      loop: ${loop},${animationOptions}
    }
  );
  scroller.start();
</script>`;
  };

  const copyToClipboard = () => {
    const code = activeTab === 'react' ? generateReactCode() : generateVanillaCode();
    navigator.clipboard.writeText(code);
  };

  return (
    <div className={styles.codeGenerator}>
      <div className={styles.codeHeader}>
        <h3>💻 Generated Code</h3>
        <button onClick={copyToClipboard} className={styles.copyButton}>
          📋 Copy
        </button>
      </div>

      <div className={styles.tabs}>
        <button
          className={`${styles.tab} ${activeTab === 'react' ? styles.tabActive : ''}`}
          onClick={() => setActiveTab('react')}
        >
          React
        </button>
        <button
          className={`${styles.tab} ${activeTab === 'vanilla' ? styles.tabActive : ''}`}
          onClick={() => setActiveTab('vanilla')}
        >
          Vanilla JS
        </button>
      </div>

      <pre className={styles.codeBlock}>
        <code>{activeTab === 'react' ? generateReactCode() : generateVanillaCode()}</code>
      </pre>
    </div>
  );
};

export default CodeGenerator;
