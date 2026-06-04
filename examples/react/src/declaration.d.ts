import React from 'react';

declare module 'react' {
    namespace JSX {
        interface IntrinsicElements {
            'scrolling-text': React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement> & {
                'interval'?: string | number;
                'animation-duration'?: string | number;
                'enter-animation'?: string;
                'exit-animation'?: string;
                'loop'?: string | boolean;
                'auto-start'?: string | boolean;
            };
        }
    }
}