# 🛒 ShopWave – E-Commerce Product Listing Website

**Dawood University of Engineering & Technology – Web Development Project**  
Student: Zaryab 

---

## 📋 Project Overview

ShopWave is a fully functional e-commerce product listing website similar to **Daraz** and **Amazon Pakistan**. It is built entirely with **HTML, CSS, and JavaScript** (no backend required — all data is stored in localStorage).

---

## ✅ Features Checklist (Task 11 Requirements)

| Requirement | Status |
|---|---|
| Proper folder structure | ✅ |
| Responsive HTML/CSS/JS | ✅ |
| At least 4 sections | ✅ (7 sections: topbar, navbar, hero, categories, flash deals, products, footer) |
| Form validation | ✅ (login + register forms with JS validation) |
| README.md | ✅ (this file) |

### Additional Features (beyond requirements):
- 🔐 Real OTP email verification via **EmailJS**
- 🛒 Fully functional cart (add, remove, quantity, total)
- ❤️ Wishlist system
- ⚡ Flash deals with countdown timer
- 🔍 Search + category + price filter
- ⭐ Product ratings and reviews count
- 🎯 Quick view modal
- 📦 Order placement + order history
- 📱 Fully responsive (mobile + tablet + desktop)
- 🎠 Auto-playing hero banner slider
- 🎨 Beautiful UI with animations

---

## 📁 Folder Structure

```
shopwave/
├── index.html              ← Homepage
├── login.html          ← Login page
├── register.html       ← Register + OTP verification
├── cart.html           ← Shopping cart
├── wishlist.html       ← Wishlist
├── orders.html         ← Order history
|
│─── main.css            ← Global styles, product cards, footer
├── navbar.css          ← Navigation bar styles
├── home.css            ← Hero, categories, flash, filter bar
├── auth.css            ← Login/Register page styles
├─ cart.css            ← Cart page styles
|
├── products.js         ← 40+ product data + card HTML generator
├── cart.js             ← Cart, wishlist, quick view logic
├── auth.js             ← Auth utilities, navbar user state
├── home.js             ← Homepage: slider, filter, search, 
│
│
└──README.md               ← This file
```

---

## 🔐 Email OTP Setup (EmailJS – FREE)

The register page sends a real OTP to the user's email using **EmailJS** (100% free, no backend needed).

### Setup Steps:

1. **Create a free account** at [https://www.emailjs.com/](https://www.emailjs.com/)

2. **Add Email Service:**
   - Dashboard → Email Services → Add New Service
   - Choose Gmail → Connect your Gmail
   - Copy the **Service ID** (e.g., `service_abc123`)

3. **Create Email Template:**
   - Dashboard → Email Templates → Create New
   - Subject: `Your ShopWave Verification Code`
   - Body:
     ```
     Hi {{user_name}},

     Your ShopWave verification code is:

     {{otp_code}}

     This code expires in 5 minutes.

     — ShopWave Team
     ```
   - Copy the **Template ID** (e.g., `template_xyz789`)

4. **Get Public Key:**
   - Account → API Keys → Copy **Public Key**

5. **Update `pages/register.html`:**
   ```javascript
   const EMAILJS_CONFIG = {
     publicKey:  'YOUR_ACTUAL_PUBLIC_KEY',
     serviceId:  'YOUR_ACTUAL_SERVICE_ID',
     templateId: 'YOUR_ACTUAL_TEMPLATE_ID'
   };
   ```

> **Demo Mode:** Without configuration, the OTP is shown in a toast notification for testing.

## 🎥 Task 12 – Presentation & Deliverables Guide

As per the final assessment directives for Task 12, this project is fully deployed, and a detailed screen-recorded demonstration has been compiled.

### 📝 Final Deliverables Checklist
1. **GitHub Repository Source Code:** Uploaded onto a public repository index.
2. **Production Live URL:** Hosted via automated static deployment cloud routing.
3. **Demo Video Presentation:** A 3–5 minute comprehensive engineering video logs presentation.

---

### 🎙️ 3–5 Minute Demo Video Presentation Script Blueprint

When recording the project demonstration video, follow this precise execution timeline to explain the implementation logic smoothly:

#### ⏱️ Phase 1: Context & Core Architectural Overview (0:00 - 0:45)
* **Visual Frame:** Open the live homepage (`index.html`).
* **Narrative Blueprint:** *"Hello everyone, my name is Zaryab and I am a student at Dawood University of Engineering & Technology. Today, I am demonstrating my Capstone Final Project named **ShopWave**, an advanced E-commerce Product Listing platform engineered natively using HTML5, CSS3, and Vanilla JavaScript. As you can see, the platform features a responsive modular layout tracking over 40+ dynamic retail product indices across 7 custom sections including auto-playing hero banner sliders, interactive pricing filters, and flash sale tracking modules."*

#### ⏱️ Phase 2: Dual-Stage Authentication & Real OTP Email JS Pipeline (0:45 - 2:00)
* **Visual Frame:** Click onto `register.html`, input a real email to trigger the EmailJS event, open your Gmail to check the real code, input the 6 digits to verify, and transition onto `login.html`.
* **Narrative Blueprint:** *"Moving onto our security architecture on the register screen, I integrated an end-to-end client-side authentication routine utilizing EmailJS API protocols. When a user creates an account, our JavaScript thread dynamically computes a secure random 6-digit verification code and transmits it directly onto the user's real email inbox. Once the digits map perfectly inside our input cells array, the local session activates and redirects to the secure login terminal."*

#### ⏱️ Phase 3: Interactive Shopping Cart & Relational LocalStorage Logic (2:00 - 3:15)
* **Visual Frame:** Add items to cart from the grid, toggle items onto `wishlist.html`, open `cart.html` to adjust item quantities, and execute checkout order redirection onto `orders.html`.
* **Narrative Blueprint:** *"Now let's review the transactional features. Users can perform instant item mapping such as adding products into a dynamic Shopping Cart or saving rows onto a Wishlist. The complete persistence state layer is powered by native browser localStorage arrays. Adjusting quantities automatically triggers mathematical subtotal calculations. On filling out the compliant shipping form validation targets, the state shifts into our order tracking history matrix safely."*

#### ⏱️ Phase 4: Production Staging Validation & Closure (3:15 - 4:00)
* **Visual Frame:** Show the responsive web scaling tool inside Chrome DevTools (mobile layout grid preview), then close on your repository main page.
* **Narrative Blueprint:** *"The entire codebase follows a strict multi-file directory split architecture model, making it exceptionally modular and readable. The system layout metrics are fully optimized and fluidly scale across desktop, tablet, and mobile views. The project has been committed to GitHub and deployed live. This concludes my final capstone release for the CoreTech Web Internship program. Thank you!"*