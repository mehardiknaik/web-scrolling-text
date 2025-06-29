const classReplacer = (wrapper: HTMLElement, oldClass: string, newClass: string) => {
  wrapper.className = Array.from(wrapper.classList)
    .filter(c => !c.includes(oldClass))  // Remove the old class
    .concat(newClass)              // Add the new class
    .join(' ');
}

export default classReplacer;