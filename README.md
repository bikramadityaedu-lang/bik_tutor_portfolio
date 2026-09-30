# Bikramaditya Sahoo — Modern Educator & Private Tutor Portfolio Website

A premium, modern, responsive personal tutoring & education portfolio website for **Bikramaditya Sahoo** (Integrated MSc in Mathematics and Computing, OUTR Bhubaneswar).

Designed specifically for parents and students looking for personalized home tuition in Bhubaneswar (10–15 km radius from OUTR) and online classes.

---

## 🚀 Key Features

- **Modern & Premium Design System**: Dark mode glassmorphism UI with subtle mathematical glow accents andSpace Grotesk / Plus Jakarta Sans typography.
- **WhatsApp Enquiry System**: Interactive modal for parents/students that formats a structured pre-filled WhatsApp message.
- **Custom Vector Bhubaneswar Map**: Interactive SVG representation of Bhubaneswar showing OUTR base, glowing 10–15 km service radius circle, major roads (NH16, Janpath, Kalinga Nagar Rd), and area distance chips.
- **5-Step Learning Journey**: Concept-based learning philosophy (Understand → Apply → Explore → Practice → Grow).
- **Parent & Student Centered Sections**: Dedicated Parent assurances, 12 key student benefits, experience timeline, and EWB social mission section.
- **Fully Static & GitHub Pages Ready**: Built with React + Vite + Tailwind CSS + Framer Motion. Zero backend or database required.

---

## 🛠️ How to Customize Your Portfolio Information

All main personal details, WhatsApp phone number, and service radius text are centralized in:

`src/config/siteConfig.js`

### 1. Change WhatsApp Number
Open `src/config/siteConfig.js` and edit `whatsappNumber`:
```javascript
export const siteConfig = {
  name: "Bikramaditya Sahoo",
  whatsappNumber: "919876543210", // <--- Replace with your country code + phone number (no + or spaces)
  location: "Bhubaneswar, Odisha",
  // ...
};
```

### 2. Replace Profile Photo
Place your professional portrait photo in the `public/` directory with the filename:

`public/profile.jpg`

*(If no photo is placed, the website automatically displays an elegant, custom mathematical vector avatar fallback).*

---

## 📦 Local Development

### 1. Install Dependencies
```bash
npm install
```

### 2. Start Development Server
```bash
npm run dev
```

### 3. Build for Production
```bash
npm run build
```

---

## 🌐 Deploying to GitHub Pages (Automated Deployment)

This repository includes a GitHub Actions workflow (`.github/workflows/deploy.yml`) that automatically builds and deploys your website to GitHub Pages whenever you push changes to the `main` branch.

### Step-by-Step GitHub Pages Deployment:

1. **Create GitHub Repository**
   Create a new public repository on GitHub (e.g. `bik_tutor_portfolio` or `bikramaditya-sahoo-tutor`).

2. **Push Project to GitHub**
   ```bash
   git init
   git add .
   git commit -m "Initial commit: Bikramaditya Sahoo Tutoring Portfolio"
   git branch -M main
   git remote add origin https://github.com/YOUR_GITHUB_USERNAME/YOUR_REPO_NAME.git
   git push -u origin main
   ```

3. **Enable GitHub Actions Pages Deployment**
   - On GitHub, navigate to **Settings** > **Pages**.
   - Under **Build and deployment** > **Source**, select **GitHub Actions**.

4. **Automatic Deployment**
   - The `.github/workflows/deploy.yml` workflow will automatically trigger, build the Vite app, and publish your site to `https://YOUR_GITHUB_USERNAME.github.io/YOUR_REPO_NAME/`.

---

## 📄 License & Ownership

© 2026 Bikramaditya Sahoo. All rights reserved.
