# Artex — Architecture Website

## Live Demo

(Coming soon) — Will be deployed on **Render**

---

## Project Overview

**Artex** is a modern architecture brand website designed to showcase architectural creativity, innovation, and professional services.  
The site highlights the brand’s vision, featured projects, and service offerings with a clean layout, minimal animations, and a professional tone.

The goal of Artex is to attract clients and investors by presenting architectural works through an elegant digital presence.

---

## Brand Identity

### 🎨 Color System

- **Primary — Blue**  
  Deep, confident blue symbolizing professionalism, trust, and stability — values that reflect the architectural precision of Artex.
- **Secondary — Gray**  
  Neutral gray used for text and accents, maintaining balance and minimalism in design.

### ✍️ Typography

- **Headings & Body — Default System Font (Tailwind default: `ui-sans-serif`)**  
  The default sans-serif system font was chosen for clarity, modern appeal, and performance efficiency across all devices.

---

## Design Decisions

### 🧭 Layout Adherence

- Consistent spacing guided by **Tailwind CSS spacing scale** (`px-4`, `py-8`) to ensure proportional design rhythm.
- Used **Flexbox** and **CSS Grid** for responsive alignment and visual balance.
- Design accuracy tested with browser DevTools’ responsive mode.

### 🎨 Creative Departures

- Adopted a **minimalist layout** to keep the focus on visuals (architecture images) rather than heavy text.
- Integrated **AOS (Animate On Scroll)** for subtle animation effects to create a smooth, interactive experience.
- The **MD (medium)** breakpoint was prioritized to ensure the layout transitions cleanly between mobile and desktop.

---

## Component Architecture

The project follows a **modular and reusable component structure**:

- **Header & Navbar** – Reused across all pages.
- **Hero Section** – Contains brand introduction and call to action.
- **Slider Component** – Showcasesour new merchandise dynamically
- **Products Section** – Lists key products and merchandise with cards.
- **Footer Component** – Contains navigation and brand identity summary.

Each component is designed for scalability and maintainability with clean separation of logic and styles.

---

## Performance Optimizations

- Used **lazy loading** for images to improve initial load time.
- Implemented **Tailwind CSS JIT** for efficient style generation.
- Optimized image sizes and used `.webp` format where possible.
- Limited heavy animations to improve render performance on mobile.

---

## Image Credits

All images used are for **educational and non-commercial** purposes.  
If published publicly, proper attributions will be provided to their respective creators (e.g., from **Unsplash**, or **Pexels**).

---

## Installation & Setup

To run this project locally:

```bash
# 1. Clone the repository
git clone https://github.com/Denzel-254/artex.git

# 2. Navigate into the project directory
cd artex

# 3. Install dependencies
npm install

# 4. Run the development server
npm run dev


```

## Technologies Used

- React — v18+
- Tailwind CSS — v3+
- AOS (Animate On Scroll) — for scroll-triggered animations
- React Icons — for consistent iconography

## Challenges & Solutions

### AOS Animations Not Triggering

Challenge: Elements disappeared or animations failed to render properly.
Solution: Ensured AOS was initialized within a useEffect and added data-aos attributes correctly.

### Slider Integration

Challenge: Maintaining image proportions and responsiveness.
Solution: Used CSS object-cover with overflow-hidden and responsive breakpoints for consistent aspect ratios.

### Layout Responsiveness

Challenge: Elements overlapping at medium screen sizes.
Solution: Adjusted Tailwind breakpoints (md, lg) and used grid layout for smoother transitions.

## Future Improvements

- Dark Mode Support — For a more modern and customizable theme experience.

- Backend Integration — Add a contact form or admin panel to upload new project images dynamically.

- SEO Optimization — Implement meta tags, sitemap, and improved accessibility features.
