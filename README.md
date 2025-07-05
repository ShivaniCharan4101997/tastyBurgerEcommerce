# 🍔 Tasty Burgers

A modern, responsive burger restaurant website built with **React**, **Tailwind CSS**, and **ShadCN UI**. Enjoy a stylish fast-food design with animations, parallax sections, and interactive components like carousels, wishlist buttons, and a working contact page.

## 🚀 Features

- 🍕 Hero section with promotional banner
- 🥗 About section with image + features
- 🍔 Crazy burger carousel using ShadCN
- 🛒 Add to Cart & Wishlist button
- 🧊 Glassmorphic Contact section
- 📱 App Store & Play Store CTA
- 🧾 Footer with working hours, location & contact

## 📸 Screenshots

| Home Page                     | Contact Section                  |
| ----------------------------- | -------------------------------- |
| ![Home](/src/assets/hero.PNG) | ![Contact](/src/assets/menu.PNG) |

---

## 🧰 Technologies Used

- ⚛️ React
- 💨 Tailwind CSS (v3/v4)
- 🧩 ShadCN UI
- 🛣️ React Router DOM
- 🎨 Lucide Icons
- 📦 Vite (development bundler)
- 🔥 Firebase / Clerk (optional – for contact/feedback functionality)
- 🖼️ Git & GitHub

---

## 🗂️ Folder Structure

tasty-burgers/
├── public/
│ └── Food_Assets/ # All images (menu, brands, reviews, etc.)
├── src/
│ ├── components/ # Reusable UI components (Header, Footer, Cards)
│ ├── pages/ # Route pages (Home, About, Contact)
│ ├── context/ # Global state management (if used)
│ ├── App.jsx # Routes and layout
│ └── main.jsx # Root React DOM rendering
├── tailwind.config.js # Tailwind customization
├── postcss.config.js
├── vite.config.js # Vite dev server config
└── README.md # You're reading i

## 🚀 Getting Started

### Prerequisites

- Node.js ≥ 16.x
- npm ≥ 8.x

### Installation

```bash
git clone https://github.com/your-username/tasty-burgers.git
cd tasty-burgers
npm install
npm run dev
```

| Component      | Purpose                                                   |
| -------------- | --------------------------------------------------------- |
| `Navbar.jsx`   | Navigation with logo, links, hamburger, profile, etc.     |
| `Hero.jsx`     | Hero section with background and CTA                      |
| `About.jsx`    | Informative section with pizza, salad, and delivery cards |
| `HomeMenu.jsx` | Burger carousel with wishlist and Add to Cart buttons     |
| `Review.jsx`   | Glassmorphic customer review carousel                     |
| `Contact.jsx`  | Contact banner with delivery CTA (glassmorphic)           |
| `Store.jsx`    | App download promo section with Google/Apple buttons      |
| `Brand.jsx`    | Partner brand logo carousel using ShadCN                  |
| `Footer.jsx`   | Fully responsive footer with scroll-to-top button         |

| Browser         | Supported           |
| --------------- | ------------------- |
| Chrome          | ✅ Yes              |
| Firefox         | ✅ Yes              |
| Safari          | ✅ Yes              |
| Edge            | ✅ Yes              |
| Opera / Brave   | ✅ Yes              |
| Mobile Browsers | ✅ Fully Responsive |
