**✅ Modern & Professional README.md**

```markdown
# Sportify – Modern Sports Management Platform

![Sportify Banner](https://images.unsplash.com/photo-1517649763962-0c623066013b?q=80&w=1200&auto=format&fit=crop)

A **premium sports management platform** built with cutting-edge technologies, stunning animations, and a sleek dark cyber-sport aesthetic.

**Live Demo:** [https://sports-webcode.vercel.app](https://sports-webcode.vercel.app)  
**Backend API:** [https://assingment-9-sports-server.vercel.app](https://assingment-9-sports-server.vercel.app)

---

## ✨ Highlights

- **Next-Gen UI** with glassmorphism, heavy blur effects, and smooth animations
- **Full Authentication** using **Better Auth** + MongoDB
- **Player Marketplace** – Browse, view details, and purchase players
- **Protected Routes** with JWT verification
- **Modern Tech Stack** – Next.js 16 (App Router) + React 19 + Tailwind v4
- Fully responsive with premium micro-interactions

---

## 🛠 Tech Stack

| Frontend          | Backend          |
|-------------------|------------------|
| Next.js 16        | Express.js       |
| React 19          | MongoDB Atlas    |
| Tailwind CSS v4   | Better Auth      |
| Framer Motion     | JWT (jose)       |
| HeroUI            | CORS             |
| Lucide Icons      | Vercel Serverless|

---

## 🚀 Getting Started

### 1. Clone the Project

```bash
git clone https://github.com/hridoyakanda/assingment-9-sports-client.git
cd assingment-9-sports-client
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Environment Variables

Create `.env.local`:

```env
NEXT_PUBLIC_SERVER=https://assingment-9-sports-server.vercel.app
BETTER_AUTH_URL=http://localhost:3000
```

### 4. Run Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000)

---

## 📌 Key Features

### 🏠 Home Page
- Eye-catching hero with animated stats
- Feature highlights with glowing cards
- Live project showcases
- Rating & testimonials section

### 👥 Players
- Dynamic grid of professional players
- Search & filter functionality
- Detailed player profiles with purchase option

### 🛒 Purchase System
- Secure player purchasing
- Personal purchase history
- Cancel purchase with confirmation dialog

### 🔐 Authentication
- Email/Password + Google OAuth
- Protected routes (`/add-player`, `/purchase`, `/profile`)
- Persistent JWT sessions

### 🎨 Design
- Dark theme with vibrant cyan/blue gradients
- Smooth hover animations & floating elements
- Glassmorphic cards with backdrop blur
- Responsive across all devices

---

## 📁 Project Structure

```bash
src/
├── app/                     # App Router Pages
├── components/              # Reusable Components
│   ├── Hero/
│   ├── Navbar/
│   ├── SportCard/
│   ├── PurchasePlayerCard/
│   ├── Footer/
│   └── ...
├── lib/
│   ├── auth.js
│   └── auth-client.js
└── proxy.js                 # Middleware protection
```

---

## 🔑 Protected Routes

- `/add-player`
- `/purchase`
- `/profile`
- `/sports/:id` (with token)

---

## 📦 Scripts

```bash
npm run dev      # Start development server
npm run build    # Build for production
npm run start    # Start production server
```

---

## 🧑‍💻 Author

**Hridoy Akanda**  
*Assignment 9 – Sports Management System*

---

## 📄 License

This project is developed for educational purposes.

---

**Built with passion for modern web experiences & sports technology.**

⭐ Star this repo if you like it!

---

*Made with ❤️ using Next.js 16, Framer Motion & Better Auth*
```

---

This is a **clean, modern, and professional** README that highlights your project’s strengths. It’s ready to be used on GitHub or Vercel.

Would you like me to also update the **server-side README** or create a **combined repository README**?