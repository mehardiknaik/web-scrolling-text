import React from "react";

const Feature = () => {
  return (
    <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2.5" id="features">
      {FEAT.map(({ icon, title, desc },index) => (
        <div
          key={title}
          style={{animationDelay:`${index * 0.2}s`}}
          className="bg-blue-900/60 p-4 rounded-3xl hover:shadow-lg transition hover:bg-blue-900/90 border-2 border-transparent hover:border-blue-300 space-y-3 animate-fade"
        >
          <div className="text-4xl text-center">{icon}</div>
          <h2 className="font-bold text-center">{title}</h2>
          <p className="text-gray-300/70">{desc}</p>
        </div>
      ))}
    </section>
  );
};

const FEAT = [
  {
    icon: "🚀",
    title: "Lightning Fast",
    desc: "Web Scrolling Text is built with performance in mind, ensuring that your text animations are smooth and fast.",
  },
  {
    icon: "🛠️",
    title: "Deep Optimization",
    desc: "Web Scrolling Text is optimized for performance and speed, ensuring smooth animations even on low-end devices.",
  },
  {
    icon: "🍭",
    title: "Easy To Configure",
    desc: "Web Scrolling Text is easy to configure and customize, allowing you to create stunning text animations with minimal effort.",
  },
  {
    icon: "🎯",
    title: "Framework Agnostic",
    desc: "Supports React, Angular, Vue, Svelte, and more frameworks.",
  },
  {
    icon: "🎨",
    title: "Highly Pluggable",
    desc: "Web Scrolling Text is highly pluggable, allowing you to easily integrate it into your existing projects and workflows.",
  },
];

export default Feature;
