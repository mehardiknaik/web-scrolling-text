import React from 'react';
import { ScrollingType } from "web-scrolling-text"

declare module 'react' {
    namespace JSX {
        interface IntrinsicElements {
            'scrolling-text': React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, ScrollingType> & {
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