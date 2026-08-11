# Nexora

A modern, fully responsive smartphone e-commerce website (TechNova store) built with **HTML, Tailwind CSS and vanilla JavaScript**, with light and dark mode.

## Features

- Home page: hero slider, features bar, popular smartphones, promo banner, shop by brand, best deals, newsletter, footer
- Product page with gallery, specs, color picker and quantity
- Cart with quantity controls, remove and live totals (saved in localStorage)
- Checkout flow: shipping → payment (card, PayPal, Apple Pay, cash on delivery) → order success
- Order tracking timeline with delivery map
- Wishlist and live search
- Dark mode toggle (follows system preference and is remembered)
- Mobile-first responsive layout with swipeable product rows

## Tech stack

- HTML5
- [Tailwind CSS](https://tailwindcss.com) (Play CDN)
- Vanilla JavaScript (no build step)
- Product photos from [Unsplash](https://unsplash.com), with drawn fallbacks

## Project structure

```
nexora/
├── index.html
├── css/style.css
├── assets/favicon.svg
└── js/
    ├── tailwind.config.js
    ├── data.js
    ├── utils.js
    ├── components.js
    ├── app.js
    └── views/
        ├── home.js
        ├── shop.js
        ├── checkout.js
        └── order.js
```

## Getting started

```bash
git clone https://github.com/Mustapha-ELMIFDALI/Nexora.git
cd Nexora
```

Open `index.html` in your browser — no install needed. Or serve it locally:

```bash
npx serve .
```

## Pages

Pages are hash-routed: `#home`, `#product`, `#cart`, `#checkout`, `#payment`, `#success`, `#track`.

## Author

**Mustapha ELMIFDALI** — [GitHub](https://github.com/Mustapha-ELMIFDALI)

## License

MIT
