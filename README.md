# 🌌 Cosmic Contact - Space-Themed Contact Us Web Page

> 🎯 **Project 01 of the #FigmaToHTML Challenge!**  
> This project marks the very first entry in my personal challenge to translate complex, beautiful UI/UX designs from Figma into pixel-perfect, responsive, and highly interactive code. 

A modern, high-end, responsive "Contact Us" web page built with HTML5, CSS3, and Vanilla JavaScript, featuring rich GSAP (GreenSock) animations, a glassmorphic card interface, and a deep space aesthetic.

---

## ✨ Features

* **🛸 Deep Space Atmosphere:** Central glowing nebula effect created with CSS radial gradients and blur filters. Interactive HTML5 Canvas starfield with twinkling, animated stars.
* **💎 Premium Glassmorphism UI:** Semi-transparent backdrop blur (`backdrop-filter: blur(14px)`), subtle specular borders, and soft multi-layered box shadows.
* **📱 Responsive 2-Column CSS Grid:** Seamless 2-column layout on desktop and tablet screens that automatically stacks into a clean single-column view on mobile devices.
* **🎬 GSAP (GreenSock) Animations:** 
  * *Staggered Entrance Timeline:* Page elements gracefully scale, fade, and slide into place on load using `gsap.timeline()`.
  * *Smooth Floating Visual:* The astronaut image floats continuously in space using a sine-wave ease yoyo loop (`repeat: -1`, `yoyo: true`).
  * *Interactive Button Hover Effects:* Smooth scale and glow transitions on hover via GSAP mouse event listeners.
  * *Rocket Transmission Animation:* Clicking "Send it to the moon 🚀" triggers a rocket flight sequence and displays a glowing toast notification.
* **♿ Accessibility (a11y) & Best Practices:** Semantic HTML5 tags (`<main>`, `<header>`, `<section>`, `<form>`, `<label>`, `<textarea>`, `<blockquote>`, `<cite>`). Accessible hidden labels (`.sr-only`), focus ring indicators, and keyboard navigation support.

## 🎨 Design System & Color Palette
The styling relies on native CSS custom properties declared in the `:root` scope:

| CSS Variable | Color Value | Description |
| :--- | :--- | :--- |
| `--bg-main` | `#0b0914` | Very dark navy/black background |
| `--bg-card` | `rgba(25, 25, 35, 0.6)` | Dark glassmorphic container background |
| `--color-text-main` | `#ffffff` | Primary text color |
| `--color-text-muted` | `#a0a0b0` | Muted silver/gray text color |
| `--color-accent-1` | `#8B5CF6` | Vibrant purple accent color |
| `--color-accent-2` | `#D946EF` | Neon violet/magenta accent color |
| `--input-bg` | `rgba(255, 255, 255, 0.05)` | Dark transparent slate input background |
| `--input-border` | `rgba(255, 255, 255, 0.1)` | Semi-transparent input border |

## 📂 Project Structure

```text
Astronomer-Figma/
├── index.html        # Main semantic HTML5 markup
├── styles.css        # CSS custom properties, grid layout, glassmorphism & responsive rules
├── script.js         # Vanilla JS logic, GSAP animations, canvas starfield & form handling
├── assets/
│   └── astronaut.png # High-resolution cropped astronaut visual
└── README.md         # Project documentation
