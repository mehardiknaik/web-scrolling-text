import React from 'react';
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import CodeBlock from '@theme/CodeBlock';
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

  const generateAngularCode = () => {
    const needsAnimation = enterAnimation !== 'none' || exitAnimation !== 'none';
    const textsArray = texts.map(t => `'${t}'`).join(', ');
    
    let animationImports = '';
    let animationOptions = '';
    
    if (needsAnimation) {
      const animations = new Set<string>();
      if (enterAnimation !== 'none') animations.add(enterAnimation);
      if (exitAnimation !== 'none') animations.add(exitAnimation);
      
      animationImports = `\n// Animation will be loaded dynamically in ngAfterViewInit`;
      
      if (enterAnimation !== 'none') {
        animationOptions += `\n        enterAnimation: ${enterAnimation}.enterAnimation,`;
      }
      if (exitAnimation !== 'none') {
        animationOptions += `\n        exitAnimation: ${exitAnimation}.exitAnimation,`;
      }
    }

    const hasAnimations = enterAnimation !== 'none' || exitAnimation !== 'none';
    const asyncModifier = hasAnimations ? 'async ' : '';
    const promiseReturn = hasAnimations ? ': Promise<void>' : ': void';

    let animationLoading = '';
    if (hasAnimations) {
      const animations = new Set<string>();
      if (enterAnimation !== 'none') animations.add(enterAnimation);
      if (exitAnimation !== 'none') animations.add(exitAnimation);
      
      animationLoading = Array.from(animations)
        .map(anim => `    const ${anim} = await import('web-scrolling-text/animations/${anim}');`)
        .join('\n') + '\n    ';
    }

    return `import { Component, AfterViewInit, OnDestroy, ViewChild, ElementRef } from '@angular/core';
import Scrolling from 'web-scrolling-text';${animationImports}

@Component({
  selector: 'app-scrolling-text',
  standalone: true,
  template: \`<div #scrollContainer></div>\`,
})
export class ScrollingTextComponent implements AfterViewInit, OnDestroy {
  @ViewChild('scrollContainer') scrollContainer!: ElementRef;
  private scroller?: Scrolling;

  ${asyncModifier}ngAfterViewInit()${promiseReturn} {
${animationLoading}this.scroller = new Scrolling(
      this.scrollContainer.nativeElement,
      [${textsArray}],
      {
        interval: ${interval},
        animationDuration: ${animationDuration},
        loop: ${loop},${animationOptions}
      }
    );
    this.scroller.start();
  }

  ngOnDestroy(): void {
    this.scroller?.dispose();
  }
}`;
  };

  const copyToClipboard = (code: string) => {
    navigator.clipboard.writeText(code);
  };

  return (
    <div className={styles.codeGenerator}>
      <div className={styles.codeHeader}>
        <h3>💻 Generated Code</h3>
      </div>

      <Tabs key={"code-generator"}>
        <TabItem value="react" label="React" default>
          <CodeBlock language="tsx" showLineNumbers>
            {generateReactCode()}
          </CodeBlock>
          <button 
            onClick={() => copyToClipboard(generateReactCode())} 
            className={styles.copyButton}
            style={{ marginTop: '10px' }}
          >
            📋 Copy React Code
          </button>
        </TabItem>

        <TabItem value="vanilla" label="Vanilla JS">
          <CodeBlock language="html" showLineNumbers>
            {generateVanillaCode()}
          </CodeBlock>
          <button 
            onClick={() => copyToClipboard(generateVanillaCode())} 
            className={styles.copyButton}
            style={{ marginTop: '10px' }}
          >
            📋 Copy Vanilla JS Code
          </button>
        </TabItem>

        <TabItem value="angular" label="Angular">
          <CodeBlock language="typescript" showLineNumbers>
            {generateAngularCode()}
          </CodeBlock>
          <button 
            onClick={() => copyToClipboard(generateAngularCode())} 
            className={styles.copyButton}
            style={{ marginTop: '10px' }}
          >
            📋 Copy Angular Code
          </button>
        </TabItem>
      </Tabs>
    </div>
  );
};

export default CodeGenerator;
