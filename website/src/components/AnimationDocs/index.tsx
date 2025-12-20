import React from 'react';
import CodeBlock from '@theme/CodeBlock';
import { ANIMATIONS, AnimationDef } from './animations';

interface AnimationDocsProps {
    framework: 'react' | 'vanilla' | 'angular';
}

export default function AnimationDocs({ framework }: AnimationDocsProps) {
    const renderExample = (anim: AnimationDef) => {
        switch (framework) {
            case 'react':
                return `import ${anim.name} from "web-scrolling-text/animation/${anim.name}";

<ScrollingText options={${anim.name}}>
  <div>${anim.label}</div>
  <div>Animation</div>
</ScrollingText>`;
            case 'vanilla':
                return `<script src="https://unpkg.com/web-scrolling-text/dist/animation/${anim.name}.min.js"></script>
<script>
  const scroller = new ScrollingText(container, texts, {
    ...ScrollingTextAnimation.${anim.name}
  });
  scroller.start();
</script>`;
            case 'angular':
                return `async ngAfterViewInit(): Promise<void> {
  const ${anim.name} = await import('web-scrolling-text/animations/${anim.name}');
  
  this.scroller = new Scrolling(
    this.scrollContainer.nativeElement,
    ['${anim.label}', 'Animation'],
    {
      enterAnimation: ${anim.name}.enterAnimation,
      exitAnimation: ${anim.name}.exitAnimation
    }
  );
  this.scroller.start();
}`;
        }
    };

    return (
        <>
            <h2>Available Animations</h2>
            <p>The library includes these pre-built animation modules:</p>
            <ul>
                {ANIMATIONS.map((anim) => (
                    <li key={anim.name}>
                        <strong>{anim.label}</strong> - {anim.description}
                    </li>
                ))}
            </ul>

            <h2>Animation Examples</h2>
            {ANIMATIONS.map((anim) => (
                <div key={anim.name}>
                    <h3>{anim.label} Animation</h3>
                    <CodeBlock language={framework === 'vanilla' ? 'html' : 'tsx'}>
                        {renderExample(anim)}
                    </CodeBlock>
                </div>
            ))}
        </>
    );
}
