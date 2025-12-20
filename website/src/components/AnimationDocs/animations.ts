export interface AnimationDef {
    name: string;
    label: string;
    description: string;
}

export const ANIMATIONS: AnimationDef[] = [
    { name: 'fade', label: 'Fade', description: 'Smooth fade in/out transition' },
    { name: 'bounce', label: 'Bounce', description: 'Bouncy entrance and exit' },
    { name: 'flip', label: 'Flip', description: '3D flip effect' },
    { name: 'rotate', label: 'Rotate', description: 'Rotation animation' },
    { name: 'scaleIn', label: 'Scale In', description: 'Scale up entrance' },
    { name: 'scaleOut', label: 'Scale Out', description: 'Scale down exit' },
    { name: 'zoomInDown', label: 'Zoom In Down', description: 'Zoom in from top' },
    { name: 'cinematic', label: 'Cinematic', description: 'Cinematic entrance effect' },
    { name: 'glitch', label: 'Glitch', description: 'Glitch effect' },
    { name: 'rubberBand', label: 'Rubber Band', description: 'Rubber band effect' },
];
